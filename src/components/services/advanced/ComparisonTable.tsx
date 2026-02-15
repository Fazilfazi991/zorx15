
import { Check, X, Minus } from "lucide-react";

interface ComparisonTableProps {
    headline: string;
}

const ComparisonTable = ({ headline }: ComparisonTableProps) => {
    const features = [
        "Strategic Planning",
        "Dedicated Experts",
        "Tools & Tech",
        "Reporting",
        "Results Timeline",
        "Cost"
    ];

    const competitors = [
        {
            name: "Typical Agency",
            values: [
                "Template-based",
                "Junior staff, high churn",
                "Basic/Free",
                "Monthly PDF",
                "12-18 Months",
                "$5K-15K/mo"
            ]
        },
        {
            name: "In-House",
            values: [
                "Limited expertise",
                "1-2 people max",
                "Limited budget",
                "Manual/Spreadsheets",
                "Slow, inconsistent",
                "$120K+/year"
            ]
        },
        {
            name: "ZORX Growth",
            isHighlight: true,
            values: [
                "Custom, data-driven frameworks",
                "Full team of dedicated specialists",
                "Enterprise suite + AI",
                "Real-time Dashboards",
                "90 Days to Impact",
                "ROI Positive in 4 Months"
            ]
        }
    ];

    return (
        <section className="py-24 bg-secondary/10">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr>
                                <th className="p-4 bg-background"></th>
                                {competitors.map((comp, i) => (
                                    <th key={i} className={`p-6 text-xl font-bold text-center rounded-t-xl ${comp.isHighlight ? 'bg-blue-600 text-white' : 'bg-background text-muted-foreground'}`}>
                                        {comp.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, i) => (
                                <tr key={i} className="border-b border-border hover:bg-white/5">
                                    <td className="p-6 font-semibold bg-background sticky left-0">{feature}</td>
                                    {competitors.map((comp, j) => (
                                        <td key={j} className={`p-6 text-center text-sm md:text-base ${comp.isHighlight ? 'bg-blue-600/5 font-bold text-blue-300 md:text-blue-600 border-x border-blue-600/10' : 'text-muted-foreground'}`}>
                                            {comp.values[i]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-8 text-muted-foreground">
                    <p>Why settling for "good enough" costs you 6-7 figures annually.</p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
