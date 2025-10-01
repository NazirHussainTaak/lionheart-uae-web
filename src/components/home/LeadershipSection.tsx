import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import cooPortrait from "@/assets/coo-portrait.jpg";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Naim Taskin",
      title: "Chief Executive Officer",
      description: "Naim guides strategy and partnerships, aligning technology with business outcomes.",
      email: "naim@lionheartuae.com",
      phone: "+971 55 558 9672",
      image: ceoPortrait,
      alt: "Naim Taskin, CEO"
    },
    {
      name: "Dr Aliasgar Taskin",
      title: "Chief Operating Officer",
      description: "Dr Aliasgar leads delivery excellence across cloud, security, and operations.",
      email: "aliasgar@lionheartuae.com",
      phone: "+971 50 807 2786",
      image: cooPortrait,
      alt: "Dr Aliasgar Taskin, COO"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders dedicated to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <Card key={index} className="card-elevated text-center bg-card dark:bg-card">
              <CardContent className="pt-8">
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.alt}
                    loading="lazy"
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-card-foreground">{leader.name}</h3>
                <p className="text-primary font-medium mb-4">{leader.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {leader.description}
                </p>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <div>{leader.email}</div>
                  <div>{leader.phone}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-secondary">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
