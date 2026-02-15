import { TrendingUp, Globe, Layers, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-up">
            {/* Header Group */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                About Us
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Who We Are
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  ZORX is a Dubai-based digital marketing agency specializing in performance-focused marketing solutions. We combine creativity, analytics, and technology to deliver measurable results for brands across the UAE.
                </p>
                <p>
                  With deep expertise in the Gulf market and a passion for digital innovation, we craft strategies that don't just look good—they drive real business growth. From startups to enterprises, we've helped businesses across every industry achieve their digital ambitions.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="pt-4">
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-8 uppercase">Our Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "200%", label: "Average ROI Growth" },
                  { value: "50+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <div key={index} className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl md:text-5xl font-black text-emerald-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose ZORX Grid */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose ZORX?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  {
                    icon: TrendingUp,
                    title: "Performance-Focused",
                    desc: "Data-driven strategies that deliver measurable ROI and real business growth"
                  },
                  {
                    icon: Globe,
                    title: "Local Expertise",
                    desc: "Deep understanding of the UAE & Gulf markets with proven regional success"
                  },
                  {
                    icon: Layers,
                    title: "Full-Service Agency",
                    desc: "From strategy to execution—SEO, ads, content, and creative all under one roof"
                  },
                  {
                    icon: BarChart3,
                    title: "Transparent Reporting",
                    desc: "Real-time dashboards and detailed monthly performance reviews"
                  }
                ].map((feature, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center gap-2 h-auto text-base"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-6 rounded-lg font-semibold border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 h-auto text-base"
              >
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Right - Visual 3D Element */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] animate-fade-in delay-200">
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-500 to-teal-600 perspective-1000 group">
              {/* Abstract overlay shapes */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

              {/* Floating Elements (CSS 3D Shapes) */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transform rotate-12 animate-float shadow-lg"></div>
              <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-emerald-900/10 backdrop-blur-md border border-white/10 rounded-full transform -translate-x-12 animate-float [animation-delay:1s]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-white/10 rounded-full animate-scale-in opacity-50"></div>

              {/* Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Image Integration (blended) */}
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Strategy Meeting"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 hover:opacity-50 transition-opacity duration-700 hover:scale-105"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-4 md:bottom-12 md:-right-12 bg-emerald-500 text-white rounded-3xl shadow-2xl px-8 py-6 z-20 hover:scale-105 transition-transform duration-300 group cursor-default border-4 border-white">
              <div className="text-5xl font-black mb-1 group-hover:translate-x-1 transition-transform">10+</div>
              <div className="text-sm font-semibold text-white/90 tracking-widest uppercase">Years Experience</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
