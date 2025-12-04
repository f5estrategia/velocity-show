import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import CausaRaizSection from "@/components/sections/CausaRaizSection";
import DiferencialSection from "@/components/sections/DiferencialSection";
import TrendSection from "@/components/sections/TrendSection";
import TransformationSection from "@/components/sections/TransformationSection";
import InstructorSection from "@/components/sections/InstructorSection";
import ModulesSection from "@/components/sections/ModulesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <CausaRaizSection />
      <DiferencialSection />
      <TrendSection />
      <TransformationSection />
      <InstructorSection />
      <ModulesSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
