
import { XCircle } from "lucide-react";

interface ProblemSectionProps {
    headline: string;
    painPoints: string[];
}

const ProblemSection = ({ headline, painPoints }: ProblemSectionProps) => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="heading-section mb-12">{headline}</h2>
                    <div className="space-y-6 text-left">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-card rounded-xl shadow-sm border border-red-100 dark:border-red-900/20">
                                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <p className="text-lg text-foreground font-medium">{point}</p>
                            </div>
                        ))}

                        <div className="mt-12 text-center">
                            <p className="text-2xl font-bold text-primary animate-pulse">But there's a better way...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
