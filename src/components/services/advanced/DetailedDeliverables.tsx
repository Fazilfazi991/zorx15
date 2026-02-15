
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

interface DeliverableTab {
    id: string;
    label: string;
    content: {
        title: string;
        items: string[];
        image?: string;
    };
}

interface DetailedDeliverablesProps {
    headline: string;
    tabs: DeliverableTab[];
}

const DetailedDeliverables = ({ headline, tabs }: DetailedDeliverablesProps) => {
    return (
        <section className="py-24 bg-secondary/30">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
                </div>

                <Tabs defaultValue={tabs[0].id} className="w-full">
                    <div className="flex justify-center mb-12 overflow-x-auto pb-4">
                        <TabsList className="h-auto p-1 bg-background/50 backdrop-blur-sm border border-border rounded-full">
                            {tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className="px-6 py-3 rounded-full text-base font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {tabs.map((tab) => (
                        <TabsContent key={tab.id} value={tab.id} className="animate-fade-up">
                            <div className="grid lg:grid-cols-2 gap-12 items-center bg-background rounded-3xl p-8 lg:p-12 border border-border shadow-xl">
                                <div>
                                    <h3 className="text-2xl font-bold mb-8">{tab.content.title}</h3>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {tab.content.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-3.5 h-3.5 text-green-600" />
                                                </div>
                                                <span className="text-foreground/80">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {tab.content.image && (
                                    <div className="relative rounded-2xl overflow-hidden border border-border bg-muted/50 aspect-video flex items-center justify-center group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <img
                                            src={tab.content.image}
                                            alt={tab.content.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default DetailedDeliverables;
