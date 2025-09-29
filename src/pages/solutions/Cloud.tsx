import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Cloud, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CloudSolutions = () => {
  const services = [
    "Cloud Strategy & Assessment",
    "Multi-Cloud Architecture Design",
    "Cloud Migration Services",
    "Hybrid Cloud Integration",
    "Cloud Security Implementation",
    "Cost Optimization & Management",
    "DevOps & Automation",
    "24/7 Cloud Operations"
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-spring-wood py-4">
        <div className="container-width px-6">
          <div className="flex items-center space-x-2 text-sm text-boulder">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>›</span>
            <span>Solutions</span>
            <span>›</span>
            <span className="text-primary">Cloud Solutions</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              Hybrid cloud architectures that scale with your business. From strategy 
              to implementation, we make cloud work for your enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Complete Cloud Services
            </h2>
          </div>

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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Accelerate Your Cloud Journey?
            </h2>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Start Your Cloud Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;