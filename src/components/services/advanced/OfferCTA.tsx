
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, CalendarDays } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OfferCTAProps {
    headline: string;
    subheadline: string;
}

const OfferCTA = ({ headline, subheadline }: OfferCTAProps) => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="section-container relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* The Offer Side */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                            <Clock className="w-4 h-4" />
                            Limited Availability: 3 Strategy Slots Left
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: headline }} />
                        <p className="text-xl text-gray-300">
                            {subheadline}
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4">Your Free Strategy Session Includes:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Comprehensive audit of your current performance",
                                    "Custom growth roadmap (12-month projection)",
                                    "Competitive analysis report",
                                    "Revenue gap identification",
                                    "Zero pressure, zero obligation consultation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400">
                                Valued at <span className="text-white font-bold line-through">$2,500</span> • <span className="text-green-400 font-bold">Free for qualified businesses</span>
                            </div>
                        </div>
                    </div>

                    {/* The Booking Side */}
                    <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2">Schedule Your Call</h3>
                            <p className="text-muted-foreground">Select a time that works for you.</p>
                        </div>

                        {/* Placeholder for Calendar Embed or Form */}
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input id="email" type="email" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="website">Website URL</Label>
                                <Input id="website" placeholder="https://company.com" />
                            </div>

                            <Button size="lg" className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
                                <CalendarDays className="mr-2 w-5 h-5" />
                                Confirm Booking
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <div className="flex justify-center -space-x-2 mb-2">
                                {[1, 2, 3].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Team" />
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Join 500+ other businesses growing with us.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OfferCTA;
