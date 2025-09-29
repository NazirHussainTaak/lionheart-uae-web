import { Link } from "react-router-dom";
import { Shield, Zap, HeadphonesIcon, CheckCircle, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-datacenter.jpg";
import socImage from "@/assets/soc-operations.jpg";
import cloudImage from "@/assets/cloud-solutions.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import cooPortrait from "@/assets/coo-portrait.jpg";

const Index = () => {
  const solutions = [
    {
      title: "Data Center Solutions",
      description: "Secure, scalable infrastructure built for enterprise demands",
      href: "/solutions/data-center",
      image: heroImage,
    },
    {
      title: "Cloud Solutions",
      description: "Hybrid cloud architectures that scale with your business",
      href: "/solutions/cloud", 
      image: cloudImage,
    },
    {
      title: "Security Operations Centre",
      description: "24/7 monitoring and threat response for total peace of mind",
      href: "/technologies/soc",
      image: socImage,
    },
  ];

  const stats = [
    { value: "99.98%", label: "Managed Uptime" },
    { value: "24/7", label: "SOC/NOC Support" },
    { value: "UAE", label: "Based Team" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-pattern lion-geometric bg-spring-wood section-padding overflow-hidden">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                  Enterprise IT you can{" "}
                  <span className="text-gradient">trust</span>
                  —today and under pressure.
                </h1>
                <p className="text-lg md:text-xl text-boulder leading-relaxed mb-8">
                  From cloud to SOC, Lion Heart Computer System secures and modernizes 
                  your infrastructure end-to-end.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero">
                  <Link to="/contact">Get a Consultation</Link>
                </Button>
                <Button asChild className="btn-secondary">
                  <Link to="/solutions/data-center">See Our Solutions</Link>
                </Button>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-sorrell-brown/30">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-boulder">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Enterprise data center infrastructure"
                className="rounded-2xl shadow-hero w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Enterprise Leaders Choose Lion Heart
            </h2>
            <p className="text-lg text-boulder max-w-2xl mx-auto">
              Bold like a lion, precise like an engineer. We deliver enterprise-grade 
              solutions without the drama.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">Secure by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-boulder">
                  Proactive defense with EDR/XDR/NDR. Your security posture strengthens 
                  before threats emerge.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-heading">Built for Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-boulder">
                  Converged and hyperconverged systems that grow with your ambition. 
                  Hybrid IT made simple.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-mandalay/10 rounded-full flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-mandalay" />
                </div>
                <CardTitle className="text-xl font-heading">Always-On Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-boulder">
                  Deployment, maintenance, and BCDR services. Your critical systems 
                  stay running—we make sure of it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="section-padding bg-spring-wood">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-boulder max-w-2xl mx-auto">
              End-to-end IT solutions designed for the most demanding enterprise environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link key={index} to={solution.href} className="group">
                <Card className="card-elevated h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-boulder">{solution.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-secondary">
              <Link to="/solutions/data-center">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-boulder max-w-2xl mx-auto">
              Experienced leaders dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="card-elevated text-center">
              <CardContent className="pt-8">
                <div className="relative mb-6">
                  <img
                    src={ceoPortrait}
                    alt="Naim Taskin, CEO"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Naim Taskin</h3>
                <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                <p className="text-boulder text-sm leading-relaxed">
                  Naim guides strategy and partnerships, aligning technology with business outcomes.
                </p>
                <div className="mt-4 space-y-1 text-sm text-boulder">
                  <div>naim@lionheartuae.com</div>
                  <div>+971 55 558 9672</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center">
              <CardContent className="pt-8">
                <div className="relative mb-6">
                  <img
                    src={cooPortrait}
                    alt="Dr Aliasgar Taskin, COO"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Dr Aliasgar Taskin</h3>
                <p className="text-primary font-medium mb-4">Chief Operating Officer</p>
                <p className="text-boulder text-sm leading-relaxed">
                  Dr Aliasgar leads delivery excellence across cloud, security, and operations.
                </p>
                <div className="mt-4 space-y-1 text-sm text-boulder">
                  <div>aliasgar@lionheartuae.com</div>
                  <div>+971 50 807 2786</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-secondary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;