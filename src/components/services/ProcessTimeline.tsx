
import { CheckCircle2 } from "lucide-react";

interface Step {
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    headline?: string;
    steps: Step[];
}

const ProcessTimeline = ({ headline = "Our Proven Process", steps }: ProcessTimelineProps) => {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="heading-section mb-4">{headline}</h2>
                    <p className="text-muted-foreground text-lg">A systematic approach to delivering consistent results.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center md:justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary md:-translate-x-1/2 z-10 box-content" />

                                {/* Content Box */}
                                <div className={`ml-12 md:ml-0 md:w-[45%] p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <span className="text-4xl font-bold text-primary/10">0{index + 1}</span>
                                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>

                                {/* Spacer for layout balance */}
                                <div className="hidden md:block md:w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
