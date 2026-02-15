
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

const VideoProduction = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <main>
                <AdvancedHero
                    preHeadline="Cinema-Grade Storytelling"
                    headline="Visual content That <span class='text-red-500'>Demands Attention</span>"
                    subheadline="In a world of 3-second attention spans, average video is ignored. We produce high-end brand films, commercials, and social content that stops the scroll."
                    primaryCtaText="Start Your Production"
                    backgroundImage="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop"
                />

                <AdvancedTrustBar />

                <BrutalTruth
                    headline="Why Most Brand Videos Are Forgettable"
                    painPoints={[
                        {
                            headline: "Looking Like an Amateur",
                            story: "You filmed it on an iPhone 11 with bad lighting. It doesn't look 'authentic', it looks cheap. Your brand value is judged instantly by your production quality.",
                            cost: "Loss of premium perception"
                        },
                        {
                            headline: "All Style, No Story",
                            story: "Some agencies make beautiful videos that say absolutely nothing. Pretty drone shots don't sell products. You need a narrative hook that resonates emotionally.",
                            cost: "High views, zero sales"
                        },
                        {
                            headline: "Wrong Format, Wrong Platform",
                            story: "You uploaded a horizontal 16:9 video to TikTok. It looks tiny, the text is cut off, and nobody watched past 2 seconds. You need native content for native platforms.",
                            cost: "Algorithm penalty"
                        }
                    ]}
                />

                <ProcessFramework
                    headline="The <span class='text-red-500'>Visual Impact Workflow™</span>"
                    phases={[
                        {
                            title: "Concept & Scripting",
                            timeline: "Week 1",
                            description: "We don't bring cameras until we have a killer concept. We storyboard your vision and write scripts that hook viewers in the first 3 seconds.",
                            deliverables: ["Creative Brief", "Scriptwriting", "Storyboard Sketches", "Talent Casting"]
                        },
                        {
                            title: "Production (Filming)",
                            timeline: "Week 2",
                            description: "Our crew arrives with RED Komodo cameras, cinema lighting, and professional audio. We direct the talent, manage the set, and capture cinema-grade footage.",
                            deliverables: ["Full Production Crew", "4K/6K Cinema Cameras", "Lighting & Grip Package", "On-Set Direction"]
                        },
                        {
                            title: "Post-Production",
                            timeline: "Week 3",
                            description: "This is where the magic happens. We edit for pacing, color grade for mood, and mix sound for impact. We also add VFX and motion graphics if needed.",
                            deliverables: ["Professional Editing", "Color Grading (DaVinci)", "Sound Design & Mixing", "Motion Graphics"]
                        },
                        {
                            title: "Delivery & Formatting",
                            timeline: "Week 4",
                            description: "We don't just give you one file. We deliver optimized assets for every platform: 9:16 for Reels, 16:9 for YouTube, 1:1 for LinkedIn.",
                            deliverables: ["Multi-Format Export", "Thumbnail Design", "Subtitles/Captions", "Raw Footage Access"]
                        }
                    ]}
                />

                <DetailedDeliverables
                    headline="Production Capabilities"
                    tabs={[
                        {
                            id: "brand",
                            label: "Brand Films",
                            content: {
                                title: "Tell Your Story",
                                items: [
                                    "Company Origin Stories",
                                    "Product Launch Films",
                                    "TV Commercials",
                                    "Crowdfunding Videos",
                                    "Event Coverage"
                                ],
                                image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "social",
                            label: "Social Content",
                            content: {
                                title: "Feed Disrupters",
                                items: [
                                    "TikTok/Reels Production",
                                    "UGC-Style Ads",
                                    "Podcast Filming",
                                    "Educational Series",
                                    "Live Stream Production"
                                ],
                                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "animation",
                            label: "Animation",
                            content: {
                                title: "Explain the Complex",
                                items: [
                                    "2D Motion Graphics",
                                    "3D Product Renders",
                                    "Explainer Videos",
                                    "Logo Reveals",
                                    "UI/App Walkthroughs"
                                ],
                                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
                            }
                        }
                    ]}
                />

                <CaseStudyShowcase
                    headline="Films That Converted"
                    caseStudies={[
                        {
                            client: "Velocity Motors",
                            industry: "Automotive",
                            challenge: "Launched a new luxury SUV but initial ads were generic and got low CTR.",
                            solution: "Produced a high-octane 60s commercial with drone tracking shots and dynamic sound design.",
                            image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Video Views", value: "1.5M", growth: "+800%" },
                                { label: "Test Drives", value: "340", growth: "+120%" },
                                { label: "Brand Recall", value: "High", growth: "Top Tier" }
                            ]
                        },
                        {
                            client: "PureHydrate",
                            industry: "DTC Beverage",
                            challenge: "Needed to explain the science behind their drink without being boring.",
                            solution: "Created a series of 15s snappy 3D animations mixed with live-action lifestyle shots.",
                            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Ad Retention", value: "85%", growth: "+40%" },
                                { label: "CTR", value: "2.8%", growth: "+150%" },
                                { label: "Sales", value: "$65k/mo", growth: "Scale" }
                            ]
                        }
                    ]}
                />

                <ComparisonTable headline="iPhone vs. Cinema" />

                <TechStack
                    logos={[
                        { name: "RED Digital Cinema" },
                        { name: "DaVinci Resolve" },
                        { name: "Adobe Premiere Pro" },
                        { name: "After Effects" },
                        { name: "Sony Alpha" },
                        { name: "DJI Drones" }
                    ]}
                />

                <ObjectionFAQ
                    headline="Production FAQs"
                    items={[
                        {
                            question: "How much does a video cost?",
                            answer: "It varies wildly based on complexity. A simple social edit might be $500, while a full commercial with actors and locations can be $10k+. We always tailor the scope to your budget."
                        },
                        {
                            question: "Do you handle casting and locations?",
                            answer: "Yes. We have a database of professional actors, voiceover artists, and scouted locations across the UAE. We handle all the permits and logistics."
                        },
                        {
                            question: "Can you turn around edits quickly?",
                            answer: "For social content, we offer a 48-hour turnaround service. For larger productions, it typically takes 2-3 weeks for the first draft."
                        },
                        {
                            question: "Do I get the raw footage?",
                            answer: "Typically, we provide the final master files. Raw footage buyout is available for an additional fee if you want to archive or re-edit it yourself later."
                        }
                    ]}
                />

                <OfferCTA
                    headline="Lights. Camera. <span class='text-red-500'>Action.</span>"
                    subheadline="Book a free creative consultation. Let's storyobard your next viral hit."
                />

                <RelatedServices
                    services={[
                        { title: "Social Media Management", description: "Distribute your new videos where your audience lives.", link: "/services/social-media" },
                        { title: "YouTube SEO", description: "Get your videos ranked on the world's second largest search engine.", link: "/services/seo" },
                        { title: "Paid Ads", description: "Amplify your video reach with targeted ad campaigns.", link: "/services/google-ads" }
                    ]}
                />

                <StickyCTA />
                <ExitIntentPopup />
            </main>
            <Footer />
        </div>
    );
};

export default VideoProduction;
