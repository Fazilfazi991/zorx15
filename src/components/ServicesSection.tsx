import { Search, Target, Share2, Layout, FileText, Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Improve rankings, visibility, and organic traffic with data-driven SEO strategies tailored for the UAE market.",
    features: [
      "Keyword Research & Strategy",
      "On-Page & Technical SEO",
      "Local SEO for UAE Market"
    ]
  },
  {
    icon: Target,
    title: "Google Ads & PPC",
    description: "High-converting paid campaigns with measurable ROI. We optimize every dirham of your ad spend.",
    features: [
      "Campaign Setup & Optimization",
      "Landing Page Design",
      "Conversion Tracking"
    ],
    popular: true
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Grow your brand on Instagram, Facebook, LinkedIn & TikTok with engaging content and targeted campaigns.",
    features: [
      "Content Strategy & Creation",
      "Community Management",
      "Influencer Partnerships"
    ]
  },
  {
    icon: Layout,
    title: "Website Design & CRO",
    description: "Conversion-optimized websites that drive leads and sales. Beautiful, fast, and built for results.",
    features: [
      "Custom Responsive Design",
      "CRO Best Practices",
      "Ongoing Support"
    ]
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Strategic content that builds authority and trust. From blogs to videos, we tell your brand story.",
    features: [
      "Blog & Article Writing",
      "Video Production",
      "SEO Content Strategy"
    ]
  },
  {
    icon: Mail,
    title: "Email & Automation",
    description: "Nurture leads and increase customer lifetime value with smart email sequences and automation.",
    features: [
      "Automation Workflows",
      "List Segmentation",
      "A/B Testing"
    ]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="heading-section text-gray-900 mb-4">
            Our Digital Marketing Services
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600">
            Comprehensive digital solutions designed to grow your business and maximize your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-full bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-sm font-bold group-hover:bg-emerald-100 group-hover:text-emerald-500 transition-colors">
                {`0${index + 1}`}
              </div>

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-emerald-500/20 tracking-wide uppercase z-20">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="inline-flex items-center gap-2 font-semibold text-emerald-500 hover:text-emerald-600 group/link cursor-pointer">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-12 border border-gray-200 text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl -z-10" />

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss your goals and create a custom strategy that works for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center gap-2 h-auto text-base"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
