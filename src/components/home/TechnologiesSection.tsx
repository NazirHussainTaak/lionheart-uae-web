import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import identityImage from "@/assets/identity-management.jpg";
import threatImage from "@/assets/threat-intelligence.jpg";
import socImage from "@/assets/soc-center.jpg";
import nocImage from "@/assets/noc-center.jpg";
import hybridImage from "@/assets/hybrid-it.jpg";

const TechnologiesSection = () => {
  const { t } = useTranslation();
  
  const technologies = [
    {
      title: t('technologies.identity.title'),
      description: t('technologies.identity.description'),
      href: "/technologies/identity-management",
      image: identityImage,
    },
    {
      title: t('technologies.threat.title'),
      description: t('technologies.threat.description'),
      href: "/technologies/threat-intelligence",
      image: threatImage,
    },
    {
      title: t('technologies.soc.title'),
      description: t('technologies.soc.description'),
      href: "/technologies/soc",
      image: socImage,
    },
    {
      title: t('technologies.noc.title'),
      description: t('technologies.noc.description'),
      href: "/technologies/noc",
      image: nocImage,
    },
    {
      title: t('technologies.hybrid.title'),
      description: t('technologies.hybrid.description'),
      href: "/technologies/hybrid-it",
      image: hybridImage,
    },
  ];

  return (
    <section className="section-padding bg-spring-wood dark:bg-neutral-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            {t('technologies.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('technologies.subtitle')}
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
            <Link to="/technologies/identity-management">{t('technologies.learnMore')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
