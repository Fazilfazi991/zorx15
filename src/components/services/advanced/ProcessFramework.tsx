
import { CheckCircle2 } from "lucide-react";

interface Phase {
    title: string;
    description: string;
    timeline: string;
    deliverables: string[];
}

interface ProcessFrameworkProps {
    headline: string;
    phases: Phase[];
}

const ProcessFramework = ({ headline, phases }: ProcessFrameworkProps) => {
    return (
        <section className="py-24 bg-background">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: headline }} />
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                    <div className="space-y-24">
                        {phases.map((phase, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Marker */}
                                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-blue-600 border-4 border-background z-10 -translate-x-1/2 flex items-center justify-center text-xs font-bold text-white">
                                    {i + 1}
                                </div>

                                {/* Content Side */}
                                <div className="ml-12 md:ml-0 md:w-1/2 p-6 md:p-8 bg-secondary/20 rounded-2xl border border-border hover:border-blue-500/30 transition-colors">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider mb-4">
                                        {phase.timeline}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {phase.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {phase.deliverables.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFramework;
