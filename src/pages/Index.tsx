
import BrandReveal from "@/components/BrandReveal";
// import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { RevealOnScroll } from "@/components/RevealOnScroll";
// import LiquidTransition from "@/components/LiquidTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      <main>
        <BrandReveal />
        {/* <HeroSection /> */}
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <TrustedBySection />
        </RevealOnScroll>

        {/* <LiquidTransition fromColor="#FFFFFF" toColor="#F9FAFB" /> */}

        <RevealOnScroll>
          <ServicesSection />
        </RevealOnScroll>

        {/* <LiquidTransition fromColor="#F9FAFB" toColor="#f5f5f5" /> */}

        <RevealOnScroll>
          <ProcessSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <TestimonialsSection />
        </RevealOnScroll>

        {/* <LiquidTransition fromColor="#f5f5f5" toColor="#F9FAFB" /> */}

        <RevealOnScroll>
          <BlogSection />
        </RevealOnScroll>

        {/* <LiquidTransition fromColor="#F9FAFB" toColor="#FFFFFF" /> */}

        <RevealOnScroll>
          <FAQSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <CTASection />
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
