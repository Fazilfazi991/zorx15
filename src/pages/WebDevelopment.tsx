
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Monitor, Smartphone, Globe, Code2, ArrowRight, Zap, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhyChooseSection from "@/components/WhyChooseSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTASection from "@/components/CTASection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const features = [
    {
        icon: Monitor,
        title: "Responsive Design",
        description: "Websites that look stunning on every device, from mobile phones to large desktop screens."
    },
    {
        icon: Zap,
        title: "Lightning Fast Speed",
        description: "Optimized performance for instant loading times and better user experience."
    },
    {
        icon: Shield,
        title: "Robust Security",
        description: "Built with security best practices to protect your data and your users."
    },
    {
        icon: Search,
        title: "SEO Optimized",
        description: "Clean code structure that search engines love, helping you rank higher."
    }
];

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your business goals, target audience, and brand identity."
    },
    {
        number: "02",
        title: "Design",
        description: "Crafting beautiful, user-centric designs that align with your brand."
    },
    {
        number: "03",
        title: "Development",
        description: "Coding your site with the latest technologies for performance and scalability."
    },
    {
        number: "04",
        title: "Launch & Support",
        description: "Smooth deployment and ongoing maintenance to keep your site running perfectly."
    }
];

const WebDevelopment = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Hero Section */}
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
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-fade-up">
                                    <Code2 className="w-4 h-4 text-primary" />
                                    Premium Web Solutions
                                </div>

                                <h1 className="heading-display text-white animate-fade-up delay-100 opacity-0 mb-6 leading-tight" style={{ animationFillMode: 'forwards' }}>
                                    Build Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Digital Empire</span>
                                </h1>

                                <p className="text-xl text-gray-300 animate-fade-up delay-200 opacity-0 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ animationFillMode: 'forwards' }}>
                                    We craft award-winning websites that blend stunning aesthetics with powerful performance. Stop settling for "boring".
                                </p>

                                <div className="flex flex-wrap gap-4 animate-fade-up delay-300 opacity-0 justify-center lg:justify-start mt-8" style={{ animationFillMode: 'forwards' }}>
                                    <div className="flex items-center gap-2 text-white font-medium bg-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                        <Shield className="w-5 h-5 text-blue-400" />
                                        <span>Enterprise Security</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white font-medium bg-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                        <span>Blazing Fast</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 animate-fade-up delay-400 opacity-0 mt-8" style={{ animationFillMode: 'forwards' }}>
                                    <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 h-12 shadow-lg shadow-purple-900/20" asChild>
                                        <Link to="/contact">
                                            Connect with Us
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 h-12 backdrop-blur-sm" asChild>
                                        <Link to="/portfolio">View Our Portfolio</Link>
                                    </Button>
                                </div>


                            </div>

                            {/* Right Form - Glassmorphism */}
                            <div className="lg:w-full max-w-md mx-auto lg:ml-auto animate-fade-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
                                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
                                    {/* Glass reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                                            <p className="text-gray-400 text-sm">Fill out the form below for a free consultation.</p>
                                        </div>

                                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Name</label>
                                                    <Input
                                                        id="name"
                                                        placeholder="John Doe"
                                                        className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Phone</label>
                                                    <Input
                                                        id="phone"
                                                        placeholder="+971..."
                                                        className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Email</label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-xs font-medium text-gray-300 uppercase tracking-wider">Project Details</label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell us about your project..."
                                                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 focus:ring-purple-500/20 min-h-[100px]"
                                                />
                                            </div>
                                            <Button type="submit" className="w-full text-lg h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-purple-900/20">
                                                Request Free Quote
                                            </Button>
                                        </form>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10 animate-fade-up delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
                                    <p className="text-sm text-gray-400 mb-4 text-center">Trusted by innovative companies</p>
                                    <div className="relative flex overflow-x-hidden group">
                                        <div className="animate-marquee flex gap-8 items-center whitespace-nowrap opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                            {/* Original Logos */}
                                            <div className="text-xl font-bold text-white mx-4">Acme Corp</div>
                                            <div className="text-xl font-bold text-white mx-4">GlobalTech</div>
                                            <div className="text-xl font-bold text-white mx-4">Nebula</div>
                                            <div className="text-xl font-bold text-white mx-4">FoxRun</div>

                                            {/* Duplicate for seamless loop */}
                                            <div className="text-xl font-bold text-white mx-4">Acme Corp</div>
                                            <div className="text-xl font-bold text-white mx-4">GlobalTech</div>
                                            <div className="text-xl font-bold text-white mx-4">Nebula</div>
                                            <div className="text-xl font-bold text-white mx-4">FoxRun</div>

                                            <div className="text-xl font-bold text-white mx-4">Acme Corp</div>
                                            <div className="text-xl font-bold text-white mx-4">GlobalTech</div>
                                            <div className="text-xl font-bold text-white mx-4">Nebula</div>
                                            <div className="text-xl font-bold text-white mx-4">FoxRun</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="section-container relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="heading-section mb-6">Built for Excellence</h2>
                            <p className="text-lg text-muted-foreground">
                                Every website we build comes with these core standards included.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={feature.title} className="bg-white dark:bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
                    <div className="section-container">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                            <div className="max-w-2xl">
                                <h2 className="heading-section mb-6">Our Recent Work</h2>
                                <p className="text-lg text-muted-foreground">
                                    Check out some of our latest web development projects.
                                </p>
                            </div>
                            <Button variant="outline" className="group">
                                View Full Portfolio
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                        <PortfolioGrid />
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                    <div className="section-container relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
                            <p className="text-xl text-white/60">
                                A streamlined workflow to bring your vision to life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <div key={step.title} className="relative group">
                                    <div className="text-6xl font-bold text-white/5 mb-4 group-hover:text-blue-500/10 transition-colors duration-500">{step.number}</div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                    <p className="text-white/60 group-hover:text-white/80 transition-colors">{step.description}</p>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-white/10 to-transparent translate-x-1/2" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 border-0 rounded-full px-8 h-12 font-medium">
                                Start Your Journey
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <WhyChooseSection />

                {/* Final CTA */}
                <CTASection />

            </main>
            <Footer />
        </div>
    );
};

export default WebDevelopment;
