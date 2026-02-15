import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, ArrowRight, Play, CheckCircle2, Shield, Lock, Users, Target, DollarSign } from "lucide-react";

interface Stat {
    value: string;
    label: string;
    icon?: React.ElementType;
}

interface ServiceHeroProps {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: Stat[];
    formTitle?: string;
    formSubtitle?: string;
    logos?: string[]; // Array of logo URLs
}

const ServiceHero = ({
    badge,
    title,
    subtitle,
    description,
    stats,
    formTitle = "Book Your Free SEO Audit",
    formSubtitle = "Get a custom roadmap to dominate your market",
    logos
}: ServiceHeroProps) => {
    return (
        <>
            <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 overflow-hidden relative">
                {/* Background Decoration */}
                <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-200 to-emerald-50 rounded-full blur-3xl opacity-10 -z-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT - Content */}
                        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left relative z-10 pt-0 mt-0">
                            {/* Top Badge */}
                            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <TrendingUp className="w-4 h-4" />
                                {badge}
                            </div>

                            {/* Headlines */}
                            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
                                {title}
                            </h1>
                            <p className="text-2xl md:text-4xl font-bold text-emerald-600 mb-6">
                                {subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                                {description}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
                                <Button
                                    className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 inline-flex items-center gap-2 h-auto text-base"
                                >
                                    Get Your Free SEO Audit
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-6 rounded-lg font-semibold border-2 border-gray-200 hover:border-emerald-500 transition-all inline-flex items-center gap-2 h-auto text-base"
                                >
                                    <Play className="w-5 h-5 fill-current" />
                                    See How It Works
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT - Form */}
                        <div className="max-w-md mx-auto lg:mx-0 w-full animate-fade-up delay-200 relative z-20 pt-0 mt-0">
                            <div className="bg-white border border-gray-100 shadow-xl shadow-gray-900/5 rounded-2xl p-8 md:p-10">
                                <div className="mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{formTitle}</h3>
                                    <p className="text-sm text-gray-600">{formSubtitle}</p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">Name</label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none text-gray-900 placeholder-gray-400 h-auto bg-white"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">Phone</label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+971..."
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none text-gray-900 placeholder-gray-400 h-auto bg-white"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none text-gray-900 placeholder-gray-400 h-auto bg-white"
                                            required
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="website" className="text-sm font-semibold text-gray-700 mb-2 block">Website URL</label>
                                        <Input
                                            id="website"
                                            type="url"
                                            placeholder="www.yourcompany.com"
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none text-gray-900 placeholder-gray-400 h-auto bg-white"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 mt-6 h-auto">
                                        Get My Free SEO Audit
                                    </Button>
                                </form>

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5 mb-2">
                                        <Lock className="w-3 h-3" />
                                        Your information is 100% secure. No spam, ever.
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        ✓ No credit card required • Get results in 24 hours
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default ServiceHero;
