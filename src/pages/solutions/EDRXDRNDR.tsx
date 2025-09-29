import { Link } from "react-router-dom";
import { CheckCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const EDRXDRNDR = () => {
  const services = [
    "Endpoint Detection & Response (EDR)",
    "Extended Detection & Response (XDR)",
    "Network Detection & Response (NDR)",
    "Threat Hunting & Analysis",
    "Incident Response Services", 
    "Security Analytics & Reporting"
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
            <span className="text-primary">EDR / XDR / NDR</span>
          </div>
        </div>
      </nav>

      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              EDR / XDR / NDR Solutions
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              Advanced threat detection and response across endpoints, networks, and your entire security ecosystem.
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
              Advanced Threat Detection
            </h2>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Security Evaluation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EDRXDRNDR;