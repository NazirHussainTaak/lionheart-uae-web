import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-datacenter.jpg";

const HeroSection = () => {
  const stats = [
    { value: "99.98%", label: "Managed Uptime" },
    { value: "24/7", label: "SOC/NOC Support" },
    { value: "UAE", label: "Based Team" },
  ];

  return (
    <section className="relative hero-pattern lion-geometric bg-spring-wood dark:bg-neutral-900 section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-foreground">
                Enterprise IT you can{" "}
                <span className="text-gradient">trust</span>
                —today and under pressure.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
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
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Enterprise data center infrastructure"
              loading="eager"
              className="rounded-2xl shadow-hero w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
