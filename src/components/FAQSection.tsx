import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
    {
        question: "How long does it take to see results from digital marketing?",
        answer: "Results vary by service. SEO typically shows meaningful improvements in 3-6 months, while paid advertising can generate leads within days. Social media growth builds over 2-3 months. We provide realistic timelines during your strategy session and track progress monthly."
    },
    {
        question: "What's included in your digital marketing packages?",
        answer: "Our packages are customized to your needs but typically include strategy development, campaign execution, creative design, content creation, analytics tracking, and monthly reporting. We'll create a tailored package during your free consultation based on your specific goals and budget."
    },
    {
        question: "Do you work with small businesses or only large enterprises?",
        answer: "We work with businesses of all sizes across the UAE. Whether you're a startup looking to establish your digital presence or an enterprise scaling operations, we have solutions that fit your stage and budget. Many of our clients started small and grew with us."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We've successfully worked across multiple industries including retail & e-commerce, hospitality & tourism, healthcare, real estate, professional services, food & beverage, education, and luxury brands. Our data-driven approach adapts to any industry with proven frameworks."
    },
    {
        question: "How do you measure success and ROI?",
        answer: "We set clear KPIs aligned with your business goals—whether that's lead generation, sales, brand awareness, or engagement. You'll receive transparent monthly reports showing traffic, conversions, cost per acquisition, revenue attribution, and overall ROI. We use tools like Google Analytics, Meta Business Suite, and custom dashboards."
    },
    {
        question: "What's your working process and timeline?",
        answer: "We follow a 4-step process: (1) Discovery & Strategy (1-2 weeks), (2) Custom Plan Development (1 week), (3) Execution & Optimization (ongoing), (4) Reporting & Scaling (monthly reviews). Most clients see initial campaigns launched within 3-4 weeks of starting."
    },
    {
        question: "Do you require long-term contracts?",
        answer: "We offer flexible engagement models. While we recommend a minimum 3-6 month commitment for SEO and sustainable growth strategies, we don't lock you into multi-year contracts. Many clients start with a trial period and continue because they see results."
    },
    {
        question: "What makes ZORX different from other agencies?",
        answer: "Our UAE market expertise since 2014, transparent reporting, dedicated account managers, in-house creative team, and proven track record of 200% average ROI set us apart. We combine local cultural understanding with international best practices—no cookie-cutter templates."
    },
    {
        question: "Can you work with our existing marketing team?",
        answer: "Absolutely! We seamlessly integrate with in-house teams, providing specialized expertise, additional bandwidth, or full-service support depending on your needs. We're collaborative partners, not replacements."
    },
    {
        question: "What's your pricing structure?",
        answer: "Pricing depends on scope, services, and goals. We offer project-based, monthly retainer, and performance-based pricing models. During your free consultation, we'll provide a transparent quote based on your specific requirements. Investment typically ranges from AED 5,000 to AED 50,000+ monthly depending on services."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                        FAQ
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about working with ZORX
                    </p>
                </div>

                {/* Accordion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-xl overflow-hidden transition-all duration-300 border-2 ${openIndex === index ? "bg-emerald-50 border-emerald-500" : "bg-gray-50 border-transparent hover:border-emerald-300 hover:bg-gray-100"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                                aria-expanded={openIndex === index}
                            >
                                <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? "text-emerald-600" : "text-gray-900"
                                    }`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-emerald-600" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-700 leading-relaxed text-base pt-0">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-12 text-center text-white shadow-xl">
                    <h3 className="text-3xl font-bold mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                        Our team is here to help. Book a free consultation and get all your questions answered.
                    </p>
                    <Button
                        className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-6 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 h-auto text-lg"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Get Free Consultation
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
