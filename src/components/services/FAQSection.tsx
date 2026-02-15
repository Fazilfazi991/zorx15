
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
}

const FAQSection = ({ items }: FAQSectionProps) => {
    return (
        <section className="py-20 bg-background">
            <div className="section-container max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="heading-section">Frequently Asked Questions</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
