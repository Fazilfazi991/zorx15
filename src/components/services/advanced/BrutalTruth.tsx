
import { AlertTriangle, TrendingDown } from "lucide-react";

interface PainPoint {
    headline: string;
    story: string;
    cost: string;
    icon?: any;
}

interface BrutalTruthProps {
    headline: string;
    painPoints: PainPoint[];
    agitationText?: string;
}

const BrutalTruth = ({ headline, painPoints, agitationText = "Enough bleeding money. Here's how we fix this →" }: BrutalTruthProps) => {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {painPoints.map((point, i) => (
                        <div key={i} className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{point.headline}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                "{point.story}"
                            </p>
                            <div className="flex items-center gap-3 p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                                <TrendingDown className="w-5 h-5 text-red-500" />
                                <div>
                                    <div className="text-xs font-semibold text-red-600 uppercase">The Real Cost</div>
                                    <div className="text-sm font-bold text-foreground">{point.cost}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl font-medium text-muted-foreground inline-flex items-center gap-2">
                        {agitationText}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BrutalTruth;
