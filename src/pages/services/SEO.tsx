
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

const SEO = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <main>
                <AdvancedHero
                    preHeadline="For Businesses Serious About Growth"
                    headline="Dominate Google Rankings <span class='text-blue-500'>Without Wasting $50K</span> on Agencies That Deliver Nothing"
                    subheadline="Our data-driven SEO system has generated 847M+ organic impressions for clients in 47 industries. Average ROI: 312% in 6 months."
                    primaryCtaText="Get Your Free Strategy Session"
                    backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                />

                <AdvancedTrustBar />

                <BrutalTruth
                    headline="Why SEO Fails for Most Businesses (And How We're Different)"
                    painPoints={[
                        {
                            headline: "You're Paying for Vanity Metrics",
                            story: "Your current agency sends you a beautiful monthly report. Rankings up! Traffic up! You're thrilled... until you check your actual sales. Nothing. Why? They optimized for keywords nobody's actually buying from.",
                            cost: "$4,200/mo wasted spend"
                        },
                        {
                            headline: "Technical Disasters Ignored",
                            story: "You can't build a skyscraper on a swamp. Most agencies skip the boring technical stuff because clients can't 'see' it. We found one client's site had 12,000 crawl errors killing their entire domain authority.",
                            cost: "50% loss in potential traffic"
                        },
                        {
                            headline: "Content Without Strategy",
                            story: "They pump out 4 generic blog posts a month that read like AI vomit. Zero engagement, zero authority, zero conversions. It's just noise that actually hurts your brand reputation.",
                            cost: "Brand credibility damage"
                        }
                    ]}
                />

                <ProcessFramework
                    headline="The <span class='text-blue-600'>Revenue-First SEO Framework™</span>"
                    phases={[
                        {
                            title: "Deep-Dive Discovery",
                            timeline: "Week 1-2",
                            description: "Most agencies send a spreadsheet. We perform a forensic analysis of your entire market, reverse-engineering your top 3 competitors to find exactly where they're winning and how to beat them.",
                            deliverables: ["Forensic Competitor Analysis", "Customer Intent Mapping", "Revenue Attribution Model", "237-Point Technical Audit"]
                        },
                        {
                            title: "Strategic Foundation",
                            timeline: "Week 3-4",
                            description: "We fix the cracks in your foundation. Technical errors are eliminated, site speed is optimized, and your site architecture is restructured around how your customers actually search.",
                            deliverables: ["Technical Remediation", "Site Architecture Overhaul", "Conversion Rate Optimization Setup", "Google Analytics 4 Configuration"]
                        },
                        {
                            title: "Content & Authority Engine",
                            timeline: "Month 2-Ongoing",
                            description: "We build content assets that earn backlinks naturally and rank for high-intent keywords. Then we pour fuel on the fire with strategic PR and link building.",
                            deliverables: ["Pillar Content Creation", "High-Authority Link Acquisition", "Digital PR Campaigns", "On-Page Optimization"]
                        },
                        {
                            title: "Optimization & Scaling",
                            timeline: "Month 4-Ongoing",
                            description: "We don't set and forget. We monitor rankings daily, tweaking titles, metas, and content based on real user data to maximize click-through rates and conversions.",
                            deliverables: ["Daily Rank Tracking", "Conversion Rate Optimization", "Revenue Reporting", "Quarterly Strategy Pivots"]
                        }
                    ]}
                />

                <DetailedDeliverables
                    headline="What You Actually Get (No Fluff)"
                    tabs={[
                        {
                            id: "strategy",
                            label: "Strategy",
                            content: {
                                title: "Comprehensive Strategic Roadmap",
                                items: [
                                    "Competitor Gap Analysis (15-20 competitors)",
                                    "Keyword Matrix (200+ keywords by ROI)",
                                    "Content Opportunity Scorecard",
                                    "Technical SEO Roadmap (Prioritized)",
                                    "Revenue Projection Model"
                                ],
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            }
                        },
                        {
                            id: "implementation",
                            label: "Implementation",
                            content: {
                                title: "Execution & Deliverables",
                                items: [
                                    "4 Tier-1 Content Pieces / Month",
                                    "20 High-DA Backlinks / Month",
                                    "Weekly Technical Health Checks",
                                    "Google Business Profile Optimization",
                                    "Schema Markup Implementation"
                                ],
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            }
                        },
                        {
                            id: "reporting",
                            label: "Reporting",
                            content: {
                                title: "Transparent ROI Dashboard",
                                items: [
                                    "24/7 Live Looker Studio Dashboard",
                                    "Keyword Ranking Movements",
                                    "Organic Revenue Attribution",
                                    "Call & Lead Tracking",
                                    "Monthly Strategy Video Call"
                                ],
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            }
                        }
                    ]}
                />

                <CaseStudyShowcase
                    headline="The Proof Is In The Performance"
                    caseStudies={[
                        {
                            client: "TechFlow Solutions",
                            industry: "B2B SaaS",
                            challenge: "Stuck at $12k/mo organic revenue for 2 years despite working with two other agencies.",
                            solution: "We rebuilt their site architecture around user intent clusters and acquired 83 high-authority backlinks.",
                            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
                            results: [
                                { label: "Traffic Growth", value: "34,780", growth: "+1,349%" },
                                { label: "Monthly Revenue", value: "$187k", growth: "+1,458%" },
                                { label: "ROI", value: "847%", growth: "High" }
                            ]
                        },
                        {
                            client: "Luxe Interiors",
                            industry: "E-commerce",
                            challenge: "Getting traffic but zero sales. 98% bounce rate on key product pages.",
                            solution: "Implemented 'Revenue-First' framework targeting long-tail buyer keywords and optimized product page UX.",
                            image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80",
                            results: [
                                { label: "Conversion Rate", value: "3.2%", growth: "+210%" },
                                { label: "Transactions", value: "450/mo", growth: "+340%" },
                                { label: "CPA", value: "$12", growth: "-65%" }
                            ]
                        }
                    ]}
                />

                <ComparisonTable headline="How We Stack Up Against The Rest" />

                <TechStack
                    logos={[
                        { name: "Ahrefs" },
                        { name: "SEMrush" },
                        { name: "Google Analytics 4" },
                        { name: "Screaming Frog" },
                        { name: "Surfer SEO" },
                        { name: "Majestic" }
                    ]}
                />

                <ObjectionFAQ
                    headline="Every Question Answered"
                    items={[
                        {
                            question: "We tried SEO before and it didn't work. Why is this different?",
                            answer: "We hear this 90% of the time. Most agencies fail because they chase vanity metrics (traffic) instead of business metrics (revenue). We don't celebrate ranking #1 for a keyword that nobody searches for. Our 'Revenue-First' framework works backward from your sales goals, targeting high-intent users who are ready to buy."
                        },
                        {
                            question: "How long until we see results?",
                            answer: "SEO is a marathon, not a sprint. However, our technical sprint usually yields 'quick wins' in the first 30-60 days by fixing critical errors. meaningful revenue impact typically starts Month 4-6. Anyone promising faster results is likely using black-hat tactics that will get you penalized."
                        },
                        {
                            question: "Do you guarantee #1 rankings?",
                            answer: "No ethical agency can guarantee a #1 ranking because Google's algorithm is a black box. What we DO guarantee is a transparent, data-driven process and a month-to-month contract. We have to earn your business every 30 days."
                        },
                        {
                            question: "What do you need from us?",
                            answer: "In Month 1, we need access to your analytics and about 2 hours for our discovery workshop. After that, we handle 95% of the work. You just approve the content and strategy during our monthly calls."
                        }
                    ]}
                />

                <OfferCTA
                    headline="Ready to Add <span class='text-blue-500'>$50k-$100k</span> to Your Bottom Line?"
                    subheadline="Join 1,247+ businesses already growing with ZORX. Stop guessing and start dominating."
                />

                <RelatedServices
                    services={[
                        { title: "Google Ads (PPC)", description: "Get immediate traffic while your SEO kicks in.", link: "/services/google-ads" },
                        { title: "Content Marketing", description: "Fuel your SEO with high-quality, engaging content.", link: "/services/content-marketing" },
                        { title: "Web Development", description: "Ensure your site is technically perfect for search engines.", link: "/web-development" }
                    ]}
                />

                <StickyCTA />
                <ExitIntentPopup />
            </main>
            <Footer />
        </div>
    );
};

export default SEO;
