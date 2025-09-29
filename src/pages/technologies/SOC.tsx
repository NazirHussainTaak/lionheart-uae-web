import { Link } from "react-router-dom";
import { CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOC = () => {
  const services = [
    "24/7 Security Monitoring",
    "Threat Detection & Response",
    "Security Incident Management",
    "Vulnerability Assessment",
    "Compliance Monitoring",
    "Security Analytics & Reporting"
  ];

  return (
    <div className="min-h-screen">
      <nav className="bg-spring-wood py-4">
        <div className="container-width px-6">
          <div className="flex items-center space-x-2 text-sm text-boulder">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>›</span>
            <span>Technologies</span>
            <span>›</span>
            <span className="text-primary">Security Operations Centre</span>
          </div>
        </div>
      </nav>

      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Security Operations Centre
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              24/7 monitoring and threat response for total peace of mind. Our SOC keeps your enterprise secure around the clock.
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
              24/7 Security Operations
            </h2>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">SOC Services Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SOC;