
import { useState, useEffect } from "react";

const logos = {
    enterprise: [
        { name: "Sony", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2000px-Sony_logo.svg.png" },
        { name: "Samsung", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" },
        { name: "LG", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" },
        { name: "Canon", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Canon_logo.svg/2560px-Canon_logo.svg.png" },
    ],
    startups: [
        { name: "Stripe", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
        { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" },
        { name: "Notion", src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    ],
    local: [
        // Placeholders using text for generic local biz
    ]
};

const stats = [
    { label: "Revenue Generated", value: "$127M+" },
    { label: "Active Clients", value: "500+" },
    { label: "Client Retention", value: "97%" },
    { label: "Average ROI", value: "312%" },
];

const AdvancedTrustBar = () => {
    const [activeTab, setActiveTab] = useState<"enterprise" | "startups">("enterprise");

    return (
        <section className="py-10 border-b border-border bg-background">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left: Stats */}
                    <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center md:text-left">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Logos */}
                    <div className="flex-1 w-full">
                        <div className="flex items-center justify-center lg:justify-end gap-6 mb-6">
                            <button
                                onClick={() => setActiveTab("enterprise")}
                                className={`text-sm font-medium transition-colors ${activeTab === 'enterprise' ? 'text-foreground' : 'text-muted-foreground'}`}
                            >
                                Enterprise
                            </button>
                            <span className="text-border">|</span>
                            <button
                                onClick={() => setActiveTab("startups")}
                                className={`text-sm font-medium transition-colors ${activeTab === 'startups' ? 'text-foreground' : 'text-muted-foreground'}`}
                            >
                                Startups
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-end gap-8 items-center opacity-70 grayscale transition-all duration-500 hover:grayscale-0">
                            {logos[activeTab].map((logo, i) => (
                                <img key={i} src={logo.src} alt={logo.name} className="h-8 w-auto object-contain max-w-[120px]" />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvancedTrustBar;
