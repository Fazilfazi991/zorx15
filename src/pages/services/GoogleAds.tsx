
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdvancedHero from "@/components/services/advanced/AdvancedHero";
import AdvancedTrustBar from "@/components/services/advanced/AdvancedTrustBar";
import BrutalTruth from "@/components/services/advanced/BrutalTruth";
import ProcessFramework from "@/components/services/advanced/ProcessFramework";
import DetailedDeliverables from "@/components/services/advanced/DetailedDeliverables";
import CaseStudyShowcase from "@/components/services/advanced/CaseStudyShowcase";
import ComparisonTable from "@/components/services/advanced/ComparisonTable";
import ObjectionFAQ from "@/components/services/advanced/ObjectionFAQ";
import OfferCTA from "@/components/services/advanced/OfferCTA";
import TechStack from "@/components/services/TechStack";
import RelatedServices from "@/components/services/RelatedServices";
import StickyCTA from "@/components/services/advanced/StickyCTA";
import ExitIntentPopup from "@/components/services/advanced/ExitIntentPopup";

const GoogleAds = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <main>
                <AdvancedHero
                    preHeadline="Stop Burning Cash. Start Scaling."
                    headline="Google Ads That Print <span class='text-green-500'>Profits</span>, Not Just Clicks"
                    subheadline="We architect high-intent campaigns that put your offer in front of customers exactly when they're ready to buy. No wasted spend. Just ROI."
                    primaryCtaText="Get Your Free Audit"
                    backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                />

                <AdvancedTrustBar />

                <BrutalTruth
                    headline="Why Most Google Ads Campaigns Fail"
                    painPoints={[
                        {
                            headline: "The 'Broad Match' Money Pit",
                            story: "Google loves Broad Match because it spends your budget faster. If you're not surgically using Exact and Phrase match, you're paying for irrelevant clicks from people who will never buy.",
                            cost: "40-60% wasted budget"
                        },
                        {
                            headline: "Set It & Forget It",
                            story: "Your agency set up the campaign 3 months ago and hasn't touched it since. Meanwhile, competitors are bidding on your brand name and stealing your customers.",
                            cost: "Loss of market share"
                        },
                        {
                            headline: "Obsessing Over Clicks, Not Cash",
                            story: "They report great CTR (Click-Through Rate) but can't tell you the ROAS (Return on Ad Spend). You can't deposit clicks in the bank. We track revenue, period.",
                            cost: "Zero profitability visibility"
                        }
                    ]}
                />

                <ProcessFramework
                    headline="The <span class='text-green-500'>Profit-First PPC System™</span>"
                    phases={[
                        {
                            title: "Forensic Account Audit",
                            timeline: "Week 1",
                            description: "We look under the hood of your past campaigns to find where you've been bleeding money. Negative keywords, bad bidding strategies, and poor quality scores are identified instantly.",
                            deliverables: ["Historical Data Analysis", "Competitor Bidding Spy Report", "Quality Score Audit", "Conversion Tracking Fixes"]
                        },
                        {
                            title: "Campaign Architecture",
                            timeline: "Week 2",
                            description: "We rebuild your account structure using Single Keyword Ad Groups (SKAGs) or Theme clusters to ensure maximum relevance. Higher relevance = Lower Cost Per Click.",
                            deliverables: ["Granular Ad Group Setup", "High-Converting Ad Copy", "Extension Optimization", "Audience Targeting Setup"]
                        },
                        {
                            title: "Landing Page CRO",
                            timeline: "Ongoing",
                            description: "Sending traffic to a homepage is a death sentence. We design high-converting landing pages specifically matching the intent of your ads.",
                            deliverables: ["Unbounce/ClickFunnels Landing Pages", "A/B Testing Headlines", "Heatmap Analysis", "Form Friction Reduction"]
                        },
                        {
                            title: "Algorithmic Scaling",
                            timeline: "Month 2+",
                            description: "Once we hit profitability, we scale. We use automated bidding strategies fed with clean data to find more customers at the same CPA.",
                            deliverables: ["Smart Bidding Implementation", "Cross-Channel Remarketing", "Budget Scaling", "ROAS Optimization"]
                        }
                    ]}
                />

                <DetailedDeliverables
                    headline="Complete PPC Dominance"
                    tabs={[
                        {
                            id: "search",
                            label: "Search Ads",
                            content: {
                                title: "Capture High Intent",
                                items: [
                                    "Competitor Brand Bidding",
                                    "Long-Tail Keyword Strategy",
                                    "Dynamic Search Ads",
                                    "Negative Keyword Lists (Crucial)",
                                    "Ad Schedule Optimization"
                                ],
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "display",
                            label: "Display & Youtube",
                            content: {
                                title: "Retargeting & Awareness",
                                items: [
                                    "Custom Audience Creation",
                                    "YouTube Pre-Roll Ads",
                                    "Visual Banner Design",
                                    "Gmail Sponsored Promotions",
                                    "Cross-Device Retargeting"
                                ],
                                image: "https://images.unsplash.com/photo-1533750349088-cd875809e0bf?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "shopping",
                            label: "Google Shopping",
                            content: {
                                title: "E-commerce Scale",
                                items: [
                                    "Merchant Center Optimization",
                                    "Product Feed Management",
                                    "Smart Shopping Campaigns",
                                    "Review Aggregation",
                                    "Price Competitiveness Analysis"
                                ],
                                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop"
                            }
                        }
                    ]}
                />

                <CaseStudyShowcase
                    headline="Results That Speak Louder"
                    caseStudies={[
                        {
                            client: "RapidFix Plumbing",
                            industry: "Local Service",
                            challenge: "Spending $5k/mo on ads but leads were costing $150 each. Unsustainable.",
                            solution: "Restructured into geo-targeted SKAGs and created dedicated landing pages for 'Emergency' vs 'Installation'.",
                            image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Cost Per Lead", value: "$32", growth: "-78%" },
                                { label: "Lead Volume", value: "156/mo", growth: "+400%" },
                                { label: "ROI", value: "950%", growth: "High" }
                            ]
                        },
                        {
                            client: "GlowUp Skincare",
                            industry: "E-commerce",
                            challenge: "ROAS was stuck at 1.5x. They were losing money on every first order.",
                            solution: "Implemented Google Shopping with tiered bidding and dynamic remarketing on YouTube.",
                            image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "ROAS", value: "4.8x", growth: "+320%" },
                                { label: "Revenue", value: "$85k/mo", growth: "+210%" },
                                { label: "CAC", value: "$18", growth: "-40%" }
                            ]
                        }
                    ]}
                />

                <ComparisonTable headline="Why We Are Google Ads Specialists" />

                <TechStack
                    logos={[
                        { name: "Google Ads Editor" },
                        { name: "Google Analytics 4" },
                        { name: "Looker Studio" },
                        { name: "Unbounce" },
                        { name: "Zapier" },
                        { name: "SpyFu" }
                    ]}
                />

                <ObjectionFAQ
                    headline="Questions We Get Asked Often"
                    items={[
                        {
                            question: "What is the minimum budget?",
                            answer: "For Google Ads to effective, we typically recommend a minimum ad spend of $1,000-$1,500/month. Anything less and the algorithm struggles to get enough data to optimize efficiently."
                        },
                        {
                            question: "Do I pay you or Google?",
                            answer: "You pay Google directly for the ad spend (using your credit card in the account), and you pay us a separate management fee. This ensures full transparency—you know exactly where every dollar goes."
                        },
                        {
                            question: "Why should I use an agency instead of doing it myself?",
                            answer: "Google Ads is complex. One wrong setting (like 'Display Network Select') can waste your entire budget in hours. We look at accounts all day, every day. We know the pitfalls and the shortcuts to profitability."
                        },
                        {
                            question: "Do you offer a guarantee?",
                            answer: "We guarantee that we will not trap you in a long-term contract. We work month-to-month. If we don't perform, you fire us. It keeps us hungry to get you results."
                        }
                    ]}
                />

                <OfferCTA
                    headline="Stop Wasting Ad Spend. <span class='text-green-500'>Start Scaling.</span>"
                    subheadline="Get a free 35-point audit of your current Google Ads account. We'll show you exactly where you're losing money."
                />

                <RelatedServices
                    services={[
                        { title: "SEO", description: "Dominate the organic results to complement your paid ads.", link: "/services/seo" },
                        { title: "Social Media Ads", description: "Retarget your search visitors on Facebook & Instagram.", link: "/services/social-media" },
                        { title: "Web Design", description: "Improve your landing page conversion rate.", link: "/web-development" }
                    ]}
                />

                <StickyCTA />
                <ExitIntentPopup />
            </main>
            <Footer />
        </div>
    );
};

export default GoogleAds;
