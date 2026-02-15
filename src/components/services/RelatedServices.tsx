
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedService {
    title: string;
    description: string;
    link: string;
}

const RelatedServices = ({ services }: { services: RelatedService[] }) => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-border">
            <div className="section-container">
                <div className="text-center mb-12">
                    <h2 className="heading-section mb-4">Services That Work Great Together</h2>
                    <p className="text-muted-foreground">Boost your results by combining these complementary strategies.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.link}
                            className="group block bg-background p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-muted-foreground mb-6">{service.description}</p>
                            <div className="flex items-center text-sm font-medium text-primary">
                                Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedServices;
