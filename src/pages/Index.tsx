import HeroSection from "@/components/home/HeroSection";
import ValuePillarsSection from "@/components/home/ValuePillarsSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import LeadershipSection from "@/components/home/LeadershipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePillarsSection />
      <TechnologiesSection />
      <LeadershipSection />
    </div>
  );
};

export default Index;