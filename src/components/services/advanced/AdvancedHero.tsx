
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, ShieldCheck, Award } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface AdvancedHeroProps {
    preHeadline: string;
    headline: string;
    subheadline: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    backgroundImage?: string;
}

const AdvancedHero = ({
    preHeadline,
    headline,
    subheadline,
    primaryCtaText = "Get Your Free Strategy Session",
    secondaryCtaText = "See How It Works",
    backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
}: AdvancedHeroProps) => {
    const [email, setEmail] = useState("");

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 z-10" />
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="section-container relative z-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-400 backdrop-blur-sm">
                            <TrendingUp className="w-4 h-4" />
                            {preHeadline}
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: headline }} />

                        <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                            {subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="xl" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20 group">
                                {primaryCtaText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="xl" variant="outline" className="h-14 px-8 text-lg border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                                        <Play className="mr-2 w-5 h-5 fill-current" />
                                        {secondaryCtaText}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[800px] p-0 bg-black border-white/10">
                                    <div className="aspect-video w-full">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                            title="Explainer Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Trust Elements */}
                        <div className="flex flex-wrap items-center gap-6 pt-8 text-sm text-gray-400 border-t border-white/10">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-600 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white flex items-center gap-1">
                                    1,247+ <span className="text-gray-400 font-normal">businesses grew with us</span>
                                </span>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                                    <span className="text-gray-400 text-xs ml-1">(4.9/5 Rating)</span>
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 pl-6 border-l border-white/10">
                                <Award className="w-4 h-4 text-blue-400" />
                                <span>Google Partner</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-400" />
                                <span>Clutch Leader</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="hidden lg:block relative animate-fade-left delay-200">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-40"></div>
                        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Book Your Strategy Session</h3>
                                <p className="text-gray-400 text-sm">Fill out the form below to get your free custom roadmap.</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Name</label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</label>
                                        <Input
                                            id="phone"
                                            placeholder="+971..."
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="website" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Website URL</label>
                                    <Input
                                        id="website"
                                        placeholder="www.yourcompany.com"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-900/20">
                                    Get My Free Audit
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvancedHero;
