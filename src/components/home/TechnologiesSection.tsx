import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import identityImage from "@/assets/identity-management.jpg";
import threatImage from "@/assets/threat-intelligence.jpg";
import socImage from "@/assets/soc-center.jpg";
import nocImage from "@/assets/noc-center.jpg";
import hybridImage from "@/assets/hybrid-it.jpg";

const TechnologiesSection = () => {
  const technologies = [
    {
      title: "Identity Management",
      description: "Comprehensive identity and access control for enterprise security",
      href: "/technologies/identity-management",
      image: identityImage,
    },
    {
      title: "Threat Intelligence Management",
      description: "Advanced threat detection and intelligence for proactive defense",
      href: "/technologies/threat-intelligence",
      image: threatImage,
    },
    {
      title: "Security Operations Centre",
      description: "24/7 monitoring and threat response for total peace of mind",
      href: "/technologies/soc",
      image: socImage,
    },
    {
      title: "Network Operations Center",
      description: "Continuous network monitoring and infrastructure management",
      href: "/technologies/noc",
      image: nocImage,
    },
    {
      title: "Hybrid IT Management",
      description: "Seamless integration of cloud and on-premise infrastructure",
      href: "/technologies/hybrid-it",
      image: hybridImage,
    },
  ];

  return (
    <section className="section-padding bg-spring-wood dark:bg-neutral-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Core Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced platforms we implement and operate for enterprise-grade security and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Link key={index} to={tech.href} className="group">
              <Card className="card-elevated h-full overflow-hidden bg-card dark:bg-card border-border">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-card-foreground group-hover:text-primary transition-colors">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-secondary">
            <Link to="/technologies/identity-management">View All Technologies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
