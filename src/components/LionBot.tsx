import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Phone, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const LionBot = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: i18n.language === "ar" 
        ? "مرحباً! أنا LionBot 🦁، مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟"
        : "Hello! I'm LionBot 🦁, your AI assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const quickActions = [
    {
      icon: MessageSquare,
      label: i18n.language === "ar" ? "طلب عرض أسعار" : "Request Quote",
      action: () => handleQuickAction(i18n.language === "ar" ? "أريد طلب عرض أسعار" : "I'd like to request a quote")
    },
    {
      icon: Phone,
      label: i18n.language === "ar" ? "التواصل عبر واتساب" : "Contact via WhatsApp",
      action: () => window.open("https://wa.me/971555589672", "_blank")
    },
    {
      icon: Calendar,
      label: i18n.language === "ar" ? "جدولة اجتماع" : "Schedule Meeting",
      action: () => handleQuickAction(i18n.language === "ar" ? "أريد جدولة اجتماع" : "I'd like to schedule a meeting")
    }
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    const isArabic = i18n.language === "ar";

    // Services detection
    if (lowerMessage.includes("cloud") || lowerMessage.includes("سحابة")) {
      return isArabic
        ? "نحن نقدم حلول سحابية شاملة بما في ذلك الترحيل السحابي، الأمن السحابي، والبنية التحتية كخدمة. هل ترغب في معرفة المزيد عن أي خدمة محددة؟"
        : "We offer comprehensive cloud solutions including cloud migration, cloud security, and Infrastructure as a Service. Would you like to know more about any specific service?";
    }

    if (lowerMessage.includes("storage") || lowerMessage.includes("تخزين")) {
      return isArabic
        ? "حلول التخزين لدينا تشمل SAN، NAS، والتخزين السحابي المختلط. نحن نعمل مع الشركات الرائدة مثل Dell EMC و HPE. هل تحتاج إلى استشارة حول سعة التخزين؟"
        : "Our storage solutions include SAN, NAS, and hybrid cloud storage. We work with leading vendors like Dell EMC and HPE. Need consultation on storage capacity?";
    }

    if (lowerMessage.includes("security") || lowerMessage.includes("أمن") || lowerMessage.includes("أمان")) {
      return isArabic
        ? "نحن متخصصون في EDR/XDR/NDR، SOC، وإدارة الهويات. فريقنا يعمل على مدار الساعة لحماية البنية التحتية الخاصة بك. هل ترغب في تقييم أمني مجاني؟"
        : "We specialize in EDR/XDR/NDR, SOC, and Identity Management. Our team works 24/7 to protect your infrastructure. Would you like a free security assessment?";
    }

    if (lowerMessage.includes("data center") || lowerMessage.includes("مركز بيانات")) {
      return isArabic
        ? "نوفر حلول مراكز البيانات الكاملة بما في ذلك التصميم والنشر والصيانة. نحن نعمل مع HPE، Dell، وCisco. هل تخطط لبناء أو تحديث مركز البيانات؟"
        : "We provide complete data center solutions including design, deployment, and maintenance. We work with HPE, Dell, and Cisco. Are you planning to build or upgrade your data center?";
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("اتصال") || lowerMessage.includes("تواصل")) {
      return isArabic
        ? "يمكنك التواصل معنا عبر:\n📧 naim@lionheartuae.com\n📱 +971 55 558 9672\n⏰ الأحد-الخميس، 9 صباحاً - 6 مساءً بتوقيت الخليج\n📍 دبي، الإمارات العربية المتحدة"
        : "You can reach us at:\n📧 naim@lionheartuae.com\n📱 +971 55 558 9672\n⏰ Sunday-Thursday, 9 AM-6 PM GST\n📍 Dubai, UAE";
    }

    if (lowerMessage.includes("quote") || lowerMessage.includes("price") || lowerMessage.includes("عرض") || lowerMessage.includes("سعر")) {
      return isArabic
        ? "بكل سرور! لإعداد عرض أسعار مخصص، يرجى زيارة صفحة الاتصال أو الاتصال بنا مباشرة. ما هي الخدمات التي تهمك؟"
        : "I'd be happy to help! For a customized quote, please visit our Contact page or call us directly. What services are you interested in?";
    }

    if (lowerMessage.includes("meeting") || lowerMessage.includes("schedule") || lowerMessage.includes("اجتماع") || lowerMessage.includes("موعد")) {
      return isArabic
        ? "رائع! يمكنك جدولة اجتماع عن طريق:\n1. الاتصال بنا على +971 55 558 9672\n2. إرسال بريد إلكتروني إلى naim@lionheartuae.com\n3. زيارة صفحة الاتصال\n\nما هو الوقت المفضل لديك؟"
        : "Great! You can schedule a meeting by:\n1. Calling us at +971 55 558 9672\n2. Emailing naim@lionheartuae.com\n3. Visiting our Contact page\n\nWhat time works best for you?";
    }

    // Default response
    return isArabic
      ? "شكراً على سؤالك! نحن متخصصون في حلول تكنولوجيا المعلومات للمؤسسات بما في ذلك مراكز البيانات، الأمن السيبراني، والحلول السحابية. هل يمكنك إخباري بالمزيد عن احتياجاتك المحددة؟"
      : "Thank you for your question! We specialize in enterprise IT solutions including data centers, cybersecurity, and cloud solutions. Can you tell me more about your specific needs?";
  };

  const handleQuickAction = (message: string) => {
    setMessages(prev => [...prev, { role: "user", content: message }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(message);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]"
          >
            <Card className="bg-card dark:bg-neutral-900 border-border shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center text-2xl">
                    🦁
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">LionBot</h3>
                    <p className="text-xs text-white/90">
                      {i18n.language === "ar" ? "متصل الآن" : "Online now"}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="h-[400px] p-4 bg-background dark:bg-neutral-950" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted p-3 rounded-2xl">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Quick Actions */}
              <div className="p-3 bg-muted/30 border-t border-border">
                <div className="grid grid-cols-3 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="text-xs h-auto py-2 flex flex-col items-center gap-1"
                    >
                      <action.icon className="h-4 w-4" />
                      <span className="text-[10px] leading-tight text-center">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-background dark:bg-neutral-900">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder={i18n.language === "ar" ? "اكتب رسالتك..." : "Type your message..."}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} size="icon" disabled={!input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:shadow-primary/50 transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </>
  );
};

export default LionBot;
