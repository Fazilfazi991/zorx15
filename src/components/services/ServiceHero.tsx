
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowRight, Shield, Zap } from "lucide-react";

interface ServiceHeroProps {
    headline: string;
    subheadline: string;
    formTitle?: string;
    backgroundImage?: string;
    trustIndicators?: Array<{ icon: React.ElementType; text: string }>;
}

const ServiceHero = ({
    headline,
    subheadline,
    formTitle = "Get a Free Proposal",
    backgroundImage = "https://images.unsplash.com/photo-1451187534959-52561c7d3b6e?q=80&w=1200",
    trustIndicators = [
        { icon: Shield, text: "Enterprise Security" },
        { icon: Zap, text: "Fast Turnaround" }
    ]
}: ServiceHeroProps) => {
    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-[#050505] text-white">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <h1 className="heading-display text-white animate-fade-up delay-100 opacity-0 mb-6 leading-tight" style={{ animationFillMode: 'forwards' }}>
                            <span dangerouslySetInnerHTML={{ __html: headline }} />
                        </h1>

                        <p className="text-xl text-gray-300 animate-fade-up delay-200 opacity-0 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animationFillMode: 'forwards' }}>
                            {subheadline}
                        </p>

                        <div className="flex flex-wrap gap-4 animate-fade-up delay-300 opacity-0 justify-center lg:justify-start mt-8" style={{ animationFillMode: 'forwards' }}>
                            {trustIndicators.map((indicator, index) => (
                                <div key={index} className="flex items-center gap-2 text-white font-medium bg-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                    <indicator.icon className="w-5 h-5 text-blue-400" />
                                    <span>{indicator.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form - Glassmorphism */}
                    <div className="lg:w-full max-w-md mx-auto lg:ml-auto animate-fade-left delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
                            {/* Glass reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{formTitle}</h3>
                                    <p className="text-gray-400 text-sm">Fill out the form below for a free consultation.</p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Name</label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</label>
                                            <Input
                                                id="phone"
                                                placeholder="+971..."
                                                className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Project Details</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project..."
                                            className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20 min-h-[100px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full text-lg h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-purple-900/20">
                                        Get Free Audit
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
