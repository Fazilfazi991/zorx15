import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBg(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden py-24 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by UAE Businesses
            </div>

            <h1 className="heading-display text-foreground animate-fade-up delay-100 opacity-0 leading-relaxed lg:leading-tight" style={{ animationFillMode: 'forwards' }}>
              Driving Digital Growth for{" "}
              <span
                className={`transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) px-3 py-1 rounded-md inline-block mx-2 font-black text-[#10B981] ${showBg
                    ? "bg-black scale-110 -rotate-2 -skew-x-3 md:-skew-x-6 shadow-xl"
                    : "bg-transparent scale-100 rotate-0 -skew-x-0"
                  }`}
              >
                Ambitious Brands
              </span> in Dubai
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
              We help businesses scale with data-driven digital marketing, performance ads, SEO, and creative strategies that convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
              <Button
                variant="hero"
                size="lg"
                className="group transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1"
              >
                Get a Free Strategy Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="group transition-all duration-300 ease-in-out hover:border-emerald-500 hover:text-emerald-600"
              >
                <Play className="w-5 h-5" />
                View Our Services
              </Button>
            </div>

            {/* Client logos */}
            <div className="pt-8 border-t border-border/50 animate-fade-up delay-400 opacity-0" style={{ animationFillMode: 'forwards' }}>
              <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-widest text-[10px]">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {[
                  "https://logo.clearbit.com/shopify.com",
                  "https://logo.clearbit.com/nike.com",
                  "https://logo.clearbit.com/stripe.com",
                  "https://logo.clearbit.com/amazon.com"
                ].map((logo, i) => (
                  <img key={i} src={logo} alt="Client Logo" className="h-6 w-auto" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px] animate-fade-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-100 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Zorx Creative Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />

                {/* Overlay Cards Integrated */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-transform hover:scale-105 duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">200%</span>
                  </div>
                  <div className="text-sm md:text-base font-bold text-foreground leading-tight uppercase tracking-wider">Average ROI</div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-transform hover:scale-105 duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-sm md:text-base font-bold text-foreground leading-tight uppercase tracking-wider">Growth Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
