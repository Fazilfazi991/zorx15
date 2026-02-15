import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { GooeyFilter } from "@/components/GooeyFilter";

const HeroSection = () => {
  const [showBg, setShowBg] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBg(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden py-24 md:py-32">
      <GooeyFilter />

      {/* Background decorative elements with Gooey Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gooey-hero-container absolute inset-0 w-full h-full">
          <div className="blob bg-primary/10 w-96 h-96 top-0 -left-20" />
          <div className="blob bg-purple-500/10 w-80 h-80 bottom-0 right-0" />
          <div className="blob bg-emerald-500/10 w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-accent-foreground animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              Trusted by UAE Businesses
            </div>

            <h1 className="heading-display text-foreground animate-fade-up delay-100 opacity-0 leading-relaxed lg:leading-tight" style={{ animationFillMode: 'forwards' }}>
              Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Digital Growth</span> for{" "}
              <span
                className={`transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) px-3 py-1 rounded-md inline-block mx-2 font-black text-white ${showBg
                  ? "bg-black scale-110 -rotate-2 -skew-x-3 md:-skew-x-6 shadow-xl"
                  : "bg-transparent text-emerald-600 scale-100 rotate-0 -skew-x-0"
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
                className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free Strategy Call
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="group transition-all duration-300 ease-in-out hover:border-emerald-500 hover:text-emerald-600 bg-white/50 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
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
                  <img key={i} src={logo} alt="Client Logo" className="h-6 w-auto hover:scale-110 transition-transform duration-300" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual with 3D Tilt */}
          <div
            className="perspective-1000 relative lg:h-[600px] animate-fade-up delay-200 opacity-0 flex items-center justify-center p-8"
            style={{ animationFillMode: 'forwards' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
          >
            <div
              className="relative w-full max-w-lg aspect-square rounded-3xl transition-transform duration-100 ease-out preserve-3d"
              style={{
                transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${mousePosition.y * -20}deg)`
              }}
            >
              {/* Main Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100/20 bg-white/10 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Zorx Creative Team"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating Elements with Parallax */}
              <div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4 transition-transform duration-300 hover:scale-105 border border-white/50"
                style={{ transform: `translateZ(50px) translateX(${mousePosition.x * -30}px) translateY(${mousePosition.y * -30}px)` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">200%</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Average ROI</div>
                  <div className="text-sm font-bold text-foreground">Guaranteed Growth</div>
                </div>
              </div>

              <div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4 transition-transform duration-300 hover:scale-105 border border-white/50"
                style={{ transform: `translateZ(80px) translateX(${mousePosition.x * -40}px) translateY(${mousePosition.y * -40}px)` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Strategy</div>
                  <div className="text-sm font-bold text-foreground">Data-Driven</div>
                </div>
              </div>
            </div>

            {/* Glowing Backdrop behind the 3D element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-emerald-500/20 to-transparent blur-3xl -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
