import { Link } from "react-router-dom";
import { CheckCircle, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThreatIntelligence = () => {
  const services = [
    "Threat Intelligence Platforms",
    "IOC & STIX/TAXII Integration",
    "Threat Hunting Operations",
    "Intelligence Analysis",
    "Threat Landscape Monitoring",
    "Custom Threat Feeds"
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
            <span className="text-primary">Threat Intelligence Management</span>
          </div>
        </div>
      </nav>

      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Threat Intelligence Management
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              Advanced threat intelligence platforms that keep you ahead of emerging cybersecurity threats.
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
              Stay Ahead of Threats
            </h2>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Threat Intelligence Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreatIntelligence;