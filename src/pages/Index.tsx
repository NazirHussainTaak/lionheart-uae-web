//import HeroSection from "@/components/home/HeroSection";
import HeroSection from "@/pages/home/01-HeroSection";
import ValuePillarsSection from "@/pages/home/02-ValuePillarsSection";
import AboutUsSection from "@/pages/home/03-AboutUsSection";
import SolutionsSection from "@/pages/home/04-SolutionsSection";
import TechnologiesSection from "@/pages/home/05-TechnologiesSection";
import TestimonialsSection from "@/pages/home/06-TestimonialsSection";
import LeadershipSection from "@/pages/home/07-LeadershipSection";

// import ValuePillarsSection from "@/components/home/ValuePillarsSection";
// import TechnologiesSection from "@/components/home/TechnologiesSection";
// import LeadershipSection from "@/components/home/LeadershipSection";
 import AnimatedSection from "@/components/AnimatedSection";
 import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      {/* <SEOHead /> */}
      <div className="min-h-screen">

        <AnimatedSection animation="fade-slide"> 
          <HeroSection />
        </AnimatedSection> 

        <AnimatedSection animation="fade-slide"> 
          <ValuePillarsSection />
        </AnimatedSection> 
        {/* <AnimatedSection animation="fade-slide"> */}
        {/*<ValuePillarsSection />*/}
        {/* </AnimatedSection> */}
        {/*     
          <AnimatedSection animation="fade-slide" delay={0.2}>
          <TechnologiesSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-slide" delay={0.3}>
          <LeadershipSection />
        </AnimatedSection>*/}
      </div>
    </>
  );
};

export default Index;
