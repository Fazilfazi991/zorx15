import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <TrustedBySection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ServicesSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ProcessSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <TestimonialsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <BlogSection />
        </RevealOnScroll>
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
