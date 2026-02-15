
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

const SocialMedia = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <main>
                <AdvancedHero
                    preHeadline="Stop Posting. Start Growing."
                    headline="Viral Social Growth That <span class='text-pink-500'>Actually Converts</span>"
                    subheadline="We don't just chase likes. We build cult-like communities that buy. Trusted by 500+ brands to dominate Instagram, TikTok, and LinkedIn."
                    primaryCtaText="Get Your Viral Strategy"
                    backgroundImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
                />

                <AdvancedTrustBar />

                <BrutalTruth
                    headline="Why Your Social Media Is Dead (And How We Revive It)"
                    painPoints={[
                        {
                            headline: "The 'Post & Pray' Strategy",
                            story: "You're posting 3 times a week because some blog told you to. But there's no strategy, no hook, and no reason for anyone to care. It's shouting into the void.",
                            cost: "Zero organic reach"
                        },
                        {
                            headline: "Boring Corporate Canvases",
                            story: "Your feed looks like a brochure. People go to social media to be entertained or educated, not sold to. If your content feels like an ad, they scroll past instantly.",
                            cost: "Brand invisibility"
                        },
                        {
                            headline: "Vanity Metrics Trap",
                            story: "Your agency celebrates 100 new followers but can't tell you how many sales came from Instagram. Likes don't pay the bills. Revenue does.",
                            cost: "Wasted marketing budget"
                        }
                    ]}
                />

                <ProcessFramework
                    headline="The <span class='text-pink-500'>Viral Brand Ecosystem™</span>"
                    phases={[
                        {
                            title: "Audience & Competitor Recon",
                            timeline: "Week 1",
                            description: "We don't guess. We analyze 50+ top-performing accounts in your niche to decode exactly what content formats, hooks, and sounds are triggering algorithms right now.",
                            deliverables: ["Competitor Content Matrix", "Audience Avatar Deep-Dive", "Platform Opportunity Audit"]
                        },
                        {
                            title: "Content Engine Setup",
                            timeline: "Week 2",
                            description: "We build your visual identity and content pillars. This isn't just templates; it's a complete aesthetic overhaul designed to stop the scroll.",
                            deliverables: ["Visual Style Guide", "Content Pillar Strategy", "Bio & Highlight Optimization", "Hashtag Strategy Vault"]
                        },
                        {
                            title: "Vertical Video Domination",
                            timeline: "Ongoing",
                            description: "The cheat code to growth. We script, edit, and optimize Reels and TikToks that capitalize on trending audio and psychological hooks.",
                            deliverables: ["4-12 Reels/TikToks per Month", "Trend Jacking Strategy", "Professional Editing", "Audio Optimization"]
                        },
                        {
                            title: "Community & Conversion",
                            timeline: "Daily",
                            description: "Engagement is a two-way street. We manage your community, replying to comments and DMs to turn warm leads into paying customers.",
                            deliverables: ["Daily Engagement", "Story Selling Sequences", "Lead Nurturing", "Monthly Growth Reports"]
                        }
                    ]}
                />

                <DetailedDeliverables
                    headline="Your Growth Stack"
                    tabs={[
                        {
                            id: "content",
                            label: "Content Creation",
                            content: {
                                title: "Scroll-Stopping Creative",
                                items: [
                                    "Professional Graphic Design",
                                    "Reels & TikTok Editing",
                                    "Copywriting with Psychological Hooks",
                                    "Story Highlight Covers",
                                    "Carousel Design (Educational/Viral)"
                                ],
                                image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "growth",
                            label: "Growth Hacking",
                            content: {
                                title: "Algorithm Mastery",
                                items: [
                                    "Hashtag & SEO Optimization",
                                    "Collaborator Post Strategy",
                                    "Influencer Outreach Management",
                                    "Viral Audio Research",
                                    "Engagement Pod Strategy (Ethical)"
                                ],
                                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "analytics",
                            label: "Analytics",
                            content: {
                                title: "Data That Matters",
                                items: [
                                    "Follower Growth Tracking",
                                    "Engagement Rate Analysis",
                                    "Best Time to Post Optimization",
                                    "Audience Demographics Report",
                                    "Website Traffic Attribution"
                                ],
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                            }
                        }
                    ]}
                />

                <CaseStudyShowcase
                    headline="Brands We've Blown Up"
                    caseStudies={[
                        {
                            client: "FitLife Apparel",
                            industry: "E-commerce",
                            challenge: "Stuck at 2k followers with zero engagement. Sales from social were non-existent.",
                            solution: "Pivoted to a Reels-first strategy focusing on 'gym fails' and educational content, plus influencer seeding.",
                            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Followers", value: "45k", growth: "+2100%" },
                                { label: "Video Views", value: "3.2M", growth: "Viral" },
                                { label: "Revenue", value: "$42k/mo", growth: "+540%" }
                            ]
                        },
                        {
                            client: "TechRecruit",
                            industry: "B2B Service",
                            challenge: "Boring LinkedIn presence. Just posting job links that nobody clicked.",
                            solution: "Implemented 'Founder Brand' strategy, posting thought leadership and contrarian takes to build authority.",
                            image: "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Impressions", value: "850k", growth: "+400%" },
                                { label: "Inbound Leads", value: "15/wk", growth: "+1500%" },
                                { label: "Hires Made", value: "24", growth: "High" }
                            ]
                        }
                    ]}
                />

                <ComparisonTable headline="Why We Win on Social" />

                <TechStack
                    logos={[
                        { name: "Meta Business Suite" },
                        { name: "TikTok Creative Center" },
                        { name: "Canva Pro" },
                        { name: "CapCut Desktop" },
                        { name: "Later" },
                        { name: "Sprout Social" }
                    ]}
                />

                <ObjectionFAQ
                    headline="No More Guesswork"
                    items={[
                        {
                            question: "I don't have time to film videos. Can you help?",
                            answer: "Absolutely. We have three options: 1) We come to you and film everything (UAE only). 2) You send us raw clips and we edit them into gold. 3) We use stock footage and AI to create content without you needing to lift a finger."
                        },
                        {
                            question: "Which platforms should I be on?",
                            answer: "It depends on where your customers are. For B2B, we double down on LinkedIn. For E-commerce/Lifestyle, it's Instagram and TikTok. We don't waste time on platforms that don't convert for your specific industry."
                        },
                        {
                            question: "How do you measure success?",
                            answer: "Engagement (likes/comments) is good for ego, but we look at Reach (brand awareness) and Clicks (traffic/sales). We set KPIs based on your business goals, not just vanity metrics."
                        },
                        {
                            question: "Do you handle community management?",
                            answer: "Yes. Using the 'Active' package, we reply to comments and DMs to keep your community engaged. The algorithm loves engagement, and so do your customers."
                        }
                    ]}
                />

                <OfferCTA
                    headline="Ready to Go <span class='text-pink-500'>Viral?</span>"
                    subheadline="Your future customers are scrolling right now. Let's stop them in their tracks."
                />

                <RelatedServices
                    services={[
                        { title: "Paid Social Ads", description: "Amplify your best organic content with targeted ad spend.", link: "/services/google-ads" },
                        { title: "Video Production", description: "Studio-quality production for your brand's flagship content.", link: "/services/video-production" },
                        { title: "Influencer Marketing", description: "Leverage trusted voices to explode your brand reach.", link: "/services/performance-marketing" }
                    ]}
                />

                <StickyCTA />
                <ExitIntentPopup />
            </main>
            <Footer />
        </div>
    );
};

export default SocialMedia;
