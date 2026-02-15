
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

const PerformanceMarketing = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <main>
                <AdvancedHero
                    preHeadline="Data-Driven Scale"
                    headline="Omnichannel Growth Systems That <span class='text-purple-500'>Multiply Revenue</span>"
                    subheadline="We integrate SEO, Paid Ads, and CRO into a single, cohesive growth engine. One dashboard. One strategy. Massive results."
                    primaryCtaText="Build Your Growth Engine"
                    backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                />

                <AdvancedTrustBar />

                <BrutalTruth
                    headline="The 'Silo' Problem Killing Your Growth"
                    painPoints={[
                        {
                            headline: "Disconnected Channels",
                            story: "Your SEO agency doesn't talk to your Ads guy. Your email marketer is in another time zone. You have three strategies pulling in different directions.",
                            cost: "Fragmented customer journey"
                        },
                        {
                            headline: "Attribution Nightmares",
                            story: "Facebook says they got the sale. Google says they got the sale. Your bank account says otherwise. You're flying blind without a single source of truth.",
                            cost: "Double-counting and wasted spend"
                        },
                        {
                            headline: "Leaky Funnels",
                            story: "You're paying to drive traffic to a website that converts at 0.5%. It's like pouring water into a bucket with a hole in the bottom.",
                            cost: "99.5% of budget wasted"
                        }
                    ]}
                />

                <ProcessFramework
                    headline="The <span class='text-purple-500'>Unified Growth Matrix™</span>"
                    phases={[
                        {
                            title: "Full-Funnel Audit",
                            timeline: "Week 1",
                            description: "We map every touchpoint your customer has with your brand. From the first ad impression to the post-purchase email sequence.",
                            deliverables: ["Customer Journey Map", "Multi-Touch Attribution Setup", "Funnel Leak Identification"]
                        },
                        {
                            title: "Conversion Ecosystem",
                            timeline: "Week 2-3",
                            description: "Before we scale traffic, we fix the destination. We implement high-converting landing pages, email automation flows, and retargeting loops.",
                            deliverables: ["CRO Audit & Fixes", "Email Automation Setup", "Pixel/Tracking Harmonization"]
                        },
                        {
                            title: "Omnichannel Activation",
                            timeline: "Month 2+",
                            description: "We turn on the tap. Coordinated campaigns across Search, Social, and Display that reinforce each other.",
                            deliverables: ["Synthesized Ad Campaigns", "Cross-Platform Retargeting", "Influencer Integration"]
                        },
                        {
                            title: "Optimization & LTV",
                            timeline: "Ongoing",
                            description: "Acquiring a customer is just the start. We use data to increase Average Order Value (AOV) and Lifetime Value (LTV).",
                            deliverables: ["Cohort Analysis", "Upsell/Cross-sell Funnelling", "Loyalty Program Strategy"]
                        }
                    ]}
                />

                <DetailedDeliverables
                    headline="Your Growth Command Center"
                    tabs={[
                        {
                            id: "acquisition",
                            label: "Acquisition",
                            content: {
                                title: "Full-Funnel Traffic",
                                items: [
                                    "Google & Bing Search Ads",
                                    "Facebook & Instagram Ads",
                                    "LinkedIn B2B Lead Gen",
                                    "Clean SEO Integration",
                                    "Programmatic Display"
                                ],
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "retention",
                            label: "Retention",
                            content: {
                                title: "Maximize LTV",
                                items: [
                                    "Email Drip Campaigns (Klaviyo/ActiveCampaign)",
                                    "SMS Marketing Strategy",
                                    "Churn Reduction Flows",
                                    "Customer Loyalty Programs",
                                    "Win-Back Campaigns"
                                ],
                                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "analytics",
                            label: "Intelligence",
                            content: {
                                title: "Single Source of Truth",
                                items: [
                                    "Unified Data Dashboard",
                                    "Multi-Touch Attribution Modeling",
                                    "Customer Cohort Reporting",
                                    "Predictive Revenue Modeling",
                                    "Real-Time ROI Tracking"
                                ]
                            }
                        }
                    ]}
                />

                <CaseStudyShowcase
                    headline="Scaling Stories"
                    caseStudies={[
                        {
                            client: "Urban Outfitters UAE (Franchise)",
                            industry: "Retail",
                            challenge: "Traffic was high, but conversion rate was low (0.8%). Ad spend was inefficient.",
                            solution: "Unified their SEO and Paid Social strategy. Implemented Klaviyo flows for abandoned carts.",
                            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Conversion Rate", value: "2.4%", growth: "+200%" },
                                { label: "Email Revenue", value: "$120k/mo", growth: "+500%" },
                                { label: "Overall ROAS", value: "6.5x", growth: "High" }
                            ]
                        },
                        {
                            client: "SaaS CRM Startup",
                            industry: "B2B Software",
                            challenge: "Cost per demo booking was $450. Sales cycle was too long.",
                            solution: "Created a LinkedIn + Retargeting funnel. Used video case studies to warm up leads before the call.",
                            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Cost Per Demo", value: "$85", growth: "-81%" },
                                { label: "Sales Velcoity", value: "21 Days", growth: "-40%" },
                                { label: "MRR Added", value: "$35k/mo", growth: "Scale" }
                            ]
                        }
                    ]}
                />

                <ComparisonTable headline="Holistic Growth vs. Channel Silos" />

                <TechStack
                    logos={[
                        { name: "Segment" },
                        { name: "Klaviyo" },
                        { name: "Google Tag Manager" },
                        { name: "Hotjar" },
                        { name: "Salesforce" },
                        { name: "HubSpot" }
                    ]}
                />

                <ObjectionFAQ
                    headline="Expert Answers"
                    items={[
                        {
                            question: "How is this different from your other services?",
                            answer: "Performance Marketing is the 'Director' level service. It oversees and integrates SEO, Ads, and CRO. It's for businesses spending at least $5k/mo who need a unified strategy, not just channel execution."
                        },
                        {
                            question: "Do I need to change my website?",
                            answer: "Likely, yes. Performance marketing requires a high-converting destination. We often build dedicated landing pages or restructure your product pages as part of the service."
                        },
                        {
                            question: "What industries do you specialize in?",
                            answer: "We excel in E-commerce (DTC) and B2B Lead Gen/SaaS. These models rely heavily on data and complex funnels, which is where we shine."
                        }
                    ]}
                />

                <OfferCTA
                    headline="Unify Your Marketing. <span class='text-purple-500'>Amplify Your Results.</span>"
                    subheadline="Get a comprehensive full-funnel audit. We'll show you exactly where your customer journey is breaking."
                />

                <RelatedServices
                    services={[
                        { title: "SEO", description: "The foundation of long-term growth.", link: "/services/seo" },
                        { title: "Google Ads", description: "The fuel for immediate scaling.", link: "/services/google-ads" },
                        { title: "Social Media", description: "The brand builder.", link: "/services/social-media" }
                    ]}
                />

                <StickyCTA />
                <ExitIntentPopup />
            </main>
            <Footer />
        </div>
    );
};

export default PerformanceMarketing;
