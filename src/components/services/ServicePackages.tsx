
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Package {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

interface ServicePackagesProps {
    headline?: string;
    subheadline?: string;
    packages: Package[];
}

const ServicePackages = ({ headline = "Simple, Transparent Pricing", subheadline = "Choose the plan that fits your growth goals.", packages }: ServicePackagesProps) => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="heading-section mb-4">{headline}</h2>
                    <p className="text-muted-foreground text-lg">{subheadline}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-background rounded-2xl p-8 border ${pkg.isPopular ? 'border-primary shadow-lg scale-105 z-10' : 'border-border shadow-sm'} flex flex-col`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                                <p className="text-muted-foreground mb-4 h-12">{pkg.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{pkg.price}</span>
                                    {pkg.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={pkg.isPopular ? "default" : "outline"}
                                className="w-full"
                                size="lg"
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicePackages;
