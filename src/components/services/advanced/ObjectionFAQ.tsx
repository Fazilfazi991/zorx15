
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface ObjectionFAQProps {
    headline: string;
    items: FAQItem[];
}

const ObjectionFAQ = ({ headline, items }: ObjectionFAQProps) => {
    return (
        <section className="py-24 bg-background">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
                    <p className="text-muted-foreground text-lg">Because you deserve straight answers.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {items.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border bg-card px-6 rounded-xl shadow-sm data-[state=open]:shadow-md transition-shadow">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left py-6">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base whitespace-pre-line">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default ObjectionFAQ;
