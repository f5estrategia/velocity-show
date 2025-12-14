import { lazy, Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";

// Lazy load sections below the fold to reduce initial bundle size
const CausaRaizSection = lazy(() => import("@/components/sections/CausaRaizSection"));
const DiferencialSection = lazy(() => import("@/components/sections/DiferencialSection"));
const TrendSection = lazy(() => import("@/components/sections/TrendSection"));
const TransformationSection = lazy(() => import("@/components/sections/TransformationSection"));
const InstructorSection = lazy(() => import("@/components/sections/InstructorSection"));
const JourneySection = lazy(() => import("@/components/sections/JourneySection"));
const ModulesSection = lazy(() => import("@/components/sections/ModulesSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const PricingSection = lazy(() => import("@/components/sections/PricingSection"));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <Suspense fallback={null}>
        <CausaRaizSection />
        <DiferencialSection />
        <TrendSection />
        <TransformationSection />
        <InstructorSection />
        <JourneySection />
        <ModulesSection />
        <TestimonialsSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
