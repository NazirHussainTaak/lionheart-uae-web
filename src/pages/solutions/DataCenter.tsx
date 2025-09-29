import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Shield, Zap, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataCenter = () => {
  const services = [
    "Infrastructure Design & Architecture",
    "Server & Storage Deployment",
    "Network Infrastructure Setup",
    "Virtualization Implementation",
    "Power & Cooling Optimization",
    "Physical Security Integration",
    "Monitoring & Management Systems",
    "Capacity Planning & Scaling"
  ];

  const processSteps = [
    { title: "Assessment", description: "Comprehensive infrastructure audit and requirements analysis" },
    { title: "Design", description: "Custom architecture tailored to your performance and growth needs" },
    { title: "Implementation", description: "Expert deployment with minimal disruption to operations" },
    { title: "Testing", description: "Rigorous validation of performance, security, and reliability" },
    { title: "Handover", description: "Complete documentation and team training for ongoing operations" }
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
            <span className="text-primary">Data Center Solutions</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-pattern bg-spring-wood section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Data Center Solutions
            </h1>
            <p className="text-xl text-boulder leading-relaxed">
              Secure, scalable infrastructure built for enterprise demands. From design 
              to deployment, we create data centers that power your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome-focused Intro */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Infrastructure You Can Depend On
              </h2>
              <p className="text-lg text-boulder leading-relaxed mb-6">
                Your data center is the foundation of everything your business does. 
                We design and build infrastructure that doesn't just meet today's needs—
                it anticipates tomorrow's challenges.
              </p>
              <p className="text-boulder leading-relaxed">
                Whether you're modernizing legacy systems, expanding capacity, or building 
                from the ground up, our data center solutions deliver the reliability, 
                security, and performance your enterprise demands.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-boulder text-sm">Physical and digital security layers protecting your critical assets</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">High Performance</h3>
                  <p className="text-boulder text-sm">Optimized for speed and reliability with redundant systems</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HeadphonesIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-boulder text-sm">Round-the-clock monitoring and expert support when you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-spring-wood">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Complete Data Center Services
            </h2>
            <p className="text-lg text-boulder max-w-2xl mx-auto">
              End-to-end solutions covering every aspect of modern data center infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-boulder max-w-2xl mx-auto">
              A systematic approach that ensures your data center project delivers 
              on time, on budget, and exceeds performance expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-boulder text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-boulder mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="section-padding bg-spring-wood">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Results That Matter
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">99.99%</CardTitle>
                <p className="text-boulder">Infrastructure Uptime</p>
              </CardHeader>
            </Card>
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">50%</CardTitle>
                <p className="text-boulder">Average Performance Improvement</p>
              </CardHeader>
            </Card>
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">30%</CardTitle>
                <p className="text-boulder">Reduction in Operating Costs</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Data Center?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your infrastructure requirements and design a solution 
              that powers your business forward.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Get Your Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenter;