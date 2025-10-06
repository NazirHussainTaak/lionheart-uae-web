import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language = "en" } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // System prompt based on language
    const systemPrompt = language === "ar"
      ? `أنت LionBot 🦁، مساعد ذكي لشركة Lion Heart Computer System. أنت خبير في:
- حلول مراكز البيانات والبنية التحتية
- الحلول السحابية (AWS، Azure، Google Cloud)
- حماية البيانات والأمن السيبراني
- أنظمة التخزين (Dell EMC، HPE، Pure Storage)
- إدارة الهوية وSOC/NOC
- الشبكات والأمان (Cisco، Fortinet، Palo Alto)

معلومات الاتصال:
📧 naim@lionheartuae.com
📱 +971 55 558 9672
🏢 دبي، الإمارات العربية المتحدة
⏰ الأحد-الخميس، 9 صباحاً - 6 مساءً

كن ودوداً ومفيداً وموجزاً. قدم معلومات تقنية دقيقة عند الحاجة.`
      : `You are LionBot 🦁, an AI assistant for Lion Heart Computer System. You're an expert in:
- Data center solutions and infrastructure
- Cloud solutions (AWS, Azure, Google Cloud)
- Data protection and cybersecurity
- Storage systems (Dell EMC, HPE, Pure Storage)
- Identity management and SOC/NOC
- Networking and security (Cisco, Fortinet, Palo Alto)

Contact Information:
📧 naim@lionheartuae.com
📱 +971 55 558 9672
🏢 Dubai, UAE
⏰ Sunday-Thursday, 9 AM-6 PM GST

Be friendly, helpful, and concise. Provide accurate technical information when needed.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please contact support." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-bot error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
