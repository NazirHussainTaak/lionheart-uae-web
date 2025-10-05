import HeroSection from "@/components/home/HeroSection";
import ValuePillarsSection from "@/components/home/ValuePillarsSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <HeroSection />
        <AnimatedSection animation="fade-slide">
          <ValuePillarsSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-slide" delay={0.2}>
          <TechnologiesSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-slide" delay={0.3}>
          <LeadershipSection />
        </AnimatedSection>
      </div>
    </>
  );
};

export default Index;