import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully",
      description: "Thanks! Our team will reach out within one business day (GST).",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const solutionAreas = [
    "Data Center Solutions",
    "Cloud Solutions", 
    "Enterprise Data Protection",
    "Converged/Hyperconverged Systems",
    "Storage Solutions",
    "Networking Security",
    "Application & Data Migration",
    "Business Continuity & DR",
    "Deployment & Maintenance",
    "EDR/XDR/NDR",
    "Identity Management",
    "Threat Intelligence Management",
    "Security Operations Centre",
    "Network Operations Center",
    "Hybrid IT Management"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's Secure Your Enterprise IT Together
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              Reach out for consultations, proposals, or quick questions—our UAE-based team 
              responds within one business day.
            </p>
          </div>
        </div>
      </section>

      <div className="container-width px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Request a Consultation</CardTitle>
                <p className="text-boulder">
                  Tell us about your IT challenges and objectives. We'll provide expert 
                  guidance tailored to your specific needs.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="e.g., CIO, CISO, IT Director"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select name="interest">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {solutionAreas.map((area) => (
                          <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, '-')}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your current IT challenges, objectives, or specific requirements..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nda" name="nda" />
                      <Label htmlFor="nda" className="text-sm">
                        Request an NDA before detailed discussions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="proposal" name="proposal" />
                      <Label htmlFor="proposal" className="text-sm">
                        Request a detailed proposal
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:naim@lionheartuae.com"
                      className="text-boulder hover:text-primary transition-colors"
                    >
                      naim@lionheartuae.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+971555589672"
                      className="text-boulder hover:text-primary transition-colors"
                    >
                      +971 55 558 9672
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-boulder text-sm">Sunday–Thursday, 9 AM–6 PM GST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Office Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-boulder text-sm leading-relaxed">
                      Bank Melli Iran Building, 2nd Floor<br />
                      Office No. 11, Khaled Bin Waleed Street<br />
                      P.O. Box 99927, Dubai, U.A.E
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="card-elevated">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-sorrell-brown/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-boulder font-medium">Dubai Office Location</p>
                    <p className="text-sm text-boulder">Interactive map would be embedded here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-primary mb-2">Quick Response Guarantee</h3>
              <p className="text-sm text-boulder">
                We respond to all inquiries within one business day during our office hours 
                (Sunday–Thursday, 9 AM–6 PM GST). For urgent matters, call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;