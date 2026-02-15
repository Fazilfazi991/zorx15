
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3, Users } from "lucide-react";

interface CaseStudy {
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: {
        label: string;
        value: string;
        growth: string;
    }[];
    image: string;
}

interface CaseStudyShowcaseProps {
    headline: string;
    caseStudies: CaseStudy[];
}

const CaseStudyShowcase = ({ headline, caseStudies }: CaseStudyShowcaseProps) => {
    return (
        <section className="py-24 bg-background">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
                </div>

                <div className="space-y-20">
                    {caseStudies.map((study, i) => (
                        <div key={i} className="flex flex-col lg:flex-row gap-12 items-center">

                            {/* Image Side */}
                            <div className={`lg:w-1/2 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={study.image}
                                        alt={study.client}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                                        {study.client} | {study.industry}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-1/2 space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {study.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {study.solution}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                                    {study.results.map((res, j) => (
                                        <div key={j} className="bg-secondary/20 p-4 rounded-xl border border-border">
                                            <div className="text-2xl font-bold text-blue-600 mb-1">{res.value}</div>
                                            <div className="text-xs font-semibold uppercase text-muted-foreground mb-2">{res.label}</div>
                                            <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">
                                                <TrendingUp className="w-3 h-3" />
                                                {res.growth}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Button size="lg" variant="outline" className="group">
                                    Read Full Case Study
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyShowcase;
