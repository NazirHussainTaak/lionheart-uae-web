import { Shield, Zap, HeadphonesIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const ValuePillarsSection = () => {
  const { t } = useTranslation();
  
  const pillars = [
    {
      icon: Shield,
      title: t('valuePillars.partnership.title'),
      description: t('valuePillars.partnership.description'),
      colorClass: "bg-primary/10 dark:bg-primary/20",
      iconClass: "text-primary"
    },
    {
      icon: Zap,
      title: t('valuePillars.expertise.title'),
      description: t('valuePillars.expertise.description'),
      colorClass: "bg-accent/10 dark:bg-accent/20",
      iconClass: "text-accent"
    },
    {
      icon: HeadphonesIcon,
      title: t('valuePillars.solutions.title'),
      description: t('valuePillars.solutions.description'),
      colorClass: "bg-mandalay/10 dark:bg-mandalay/20",
      iconClass: "text-mandalay"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            {t('valuePillars.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('valuePillars.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="card-elevated text-center bg-card dark:bg-card">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${pillar.colorClass} rounded-full flex items-center justify-center mb-4`}>
                  <pillar.icon className={`h-8 w-8 ${pillar.iconClass}`} />
                </div>
                <CardTitle className="text-xl font-heading text-card-foreground">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillarsSection;
