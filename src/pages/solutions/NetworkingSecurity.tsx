import { Link } from "react-router-dom";
import { CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const NetworkingSecurity = () => {
  const services = [
    "Next-Generation Firewalls",
    "Network Segmentation",
    "Intrusion Detection & Prevention",
    "VPN & Remote Access",
    "Network Access Control",
    "Security Policy Management"
  ];

  return (
    <div className="min-h-screen">
      <nav className="bg-spring-wood py-4">
        <div className="container-width px-6">
          <div className="flex items-center space-x-2 text-sm text-boulder">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>›</span>
            <span>Solutions</span>
            <span>›</span>
            <span className="text-primary">Networking Security</span>
          </div>
        </div>
      </nav>

      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Networking Security
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              Advanced network security solutions that protect your infrastructure from evolving threats.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-spring-wood rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Secure Your Network Infrastructure
            </h2>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Security Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkingSecurity;