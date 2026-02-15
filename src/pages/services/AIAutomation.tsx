
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

const AIAutomation = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <main>
                <AdvancedHero
                    preHeadline="The Future of Work"
                    headline="Automate 80% of Your Ops <span class='text-cyan-500'>Without Hiring More Staff</span>"
                    subheadline="We build custom AI agents and automation workflows that handle customer support, lead qualification, and data entry 24/7/365."
                    primaryCtaText="Automate Your Business"
                    backgroundImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
                />

                <AdvancedTrustBar />

                <BrutalTruth
                    headline="The 'Human Bottleneck' Is Costs You Millions"
                    painPoints={[
                        {
                            headline: "Slow Response Times",
                            story: "Your leads go cold because your sales team takes 4 hours to reply. AI replies in 4 seconds, qualifying the lead and booking the meeting instantly.",
                            cost: "70% of leads lost"
                        },
                        {
                            headline: "Burning Cash on Repetitive Tasks",
                            story: "You're paying humans $50k/year to copy-paste data from emails to Excel. It's a waste of human potential and a drain on your P&L.",
                            cost: "High operational overhead"
                        },
                        {
                            headline: "Inconsistent Quality",
                            story: "Humans have bad days. They get tired. They make typos. AI agents follow your SOPs perfectly every single time, 24 hours a day.",
                            cost: "Customer service errors"
                        }
                    ]}
                />

                <ProcessFramework
                    headline="The <span class='text-cyan-500'>Autonomous Enterprise™</span>"
                    phases={[
                        {
                            title: "Workflow Mapping",
                            timeline: "Week 1",
                            description: "We audit your business to find the 'low hanging fruit'—high volume, low complexity tasks that are eating up your team's time.",
                            deliverables: ["Process Mining", "ROI Calculator", "Automation Roadmap", "Tech Stack Audit"]
                        },
                        {
                            title: "Agent Development",
                            timeline: "Week 2-3",
                            description: "We build custom AI agents trained on your specific data, brand voice, and SOPs. They don't just chat; they take action in your software.",
                            deliverables: ["Custom GPT Training", "API Integrations (Zapier/Make)", "Knowledge Base Vectorization"]
                        },
                        {
                            title: "Integration & Testing",
                            timeline: "Week 4",
                            description: "We plug the agents into your existing tools (Slack, CRM, Email). We stress-test them to ensure they handle edge cases without hallucinating.",
                            deliverables: ["CRM Sync", "Live Sandbox Testing", "Guardrails Implementation"]
                        },
                        {
                            title: "Deployment & Training",
                            timeline: "Ongoing",
                            description: "We go live. We monitor the agents daily, fine-tuning their responses and adding new capabilities as your business evolves.",
                            deliverables: ["Live Deployment", "Staff Training", "Monthly Optimization", "Performance Dashboards"]
                        }
                    ]}
                />

                <DetailedDeliverables
                    headline="What We Automate"
                    tabs={[
                        {
                            id: "support",
                            label: "Customer Support",
                            content: {
                                title: "24/7 Support Agents",
                                items: [
                                    "Instant FAQ Resolution",
                                    "Order Tracking Lookups",
                                    "Ticket Triage & Routing",
                                    "Multilingual Support (50+ languages)",
                                    "Sentiment Analysis"
                                ],
                                image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "sales",
                            label: "Sales & Leads",
                            content: {
                                title: "Outbound & Inbound AI",
                                items: [
                                    "Lead Qualification Chatbots",
                                    "Automated Meeting Booking",
                                    "LinkedIn Outreach Automation",
                                    "Personalized Email Sequences",
                                    "CRM Data Enrichment"
                                ],
                                image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop"
                            }
                        },
                        {
                            id: "ops",
                            label: "Operations",
                            content: {
                                title: "Back-Office Autopilot",
                                items: [
                                    "Invoice Processing (OCR)",
                                    "Employee Onboarding Flows",
                                    "Social Media Scheduling",
                                    "Report Generation",
                                    "Contract Generation"
                                ],
                                image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop"
                            }
                        }
                    ]}
                />

                <CaseStudyShowcase
                    headline="Automation Wins"
                    caseStudies={[
                        {
                            client: "Logistics Pro UAE",
                            industry: "Logistics",
                            challenge: "Customer service team was drowning in 'Where is my order?' emails. Response time was 24 hours.",
                            solution: "Deployed an AI agent connected to their fleet tracking API. It handles 92% of inquiries instantly.",
                            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Ticket Deflection", value: "92%", growth: "High" },
                                { label: "Response Time", value: "<10s", growth: "-99%" },
                                { label: "Cost Savings", value: "$75k/yr", growth: "Profit" }
                            ]
                        },
                        {
                            client: "Real Estate Brokerage",
                            industry: "Real Estate",
                            challenge: "Agents were wasting time qualifying tire-kickers instead of closing deals.",
                            solution: "Built a WhatsApp AI bot that qualifies leads on budget, location, and timeline before booking a viewing.",
                            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
                            results: [
                                { label: "Qualified Leads", value: "+45%", growth: "Scale" },
                                { label: "Agent Efficiency", value: "3x", growth: "High" },
                                { label: "Sales Closed", value: "+22%", growth: "Rev" }
                            ]
                        }
                    ]}
                />

                <ComparisonTable headline="Humans vs. Hybrid AI" />

                <TechStack
                    logos={[
                        { name: "OpenAI (GPT-4)" },
                        { name: "Make.com" },
                        { name: "Zapier" },
                        { name: "Pinecone" },
                        { name: "Anthropic" },
                        { name: "Python" }
                    ]}
                />

                <ObjectionFAQ
                    headline="Automation FAQs"
                    items={[
                        {
                            question: "Will AI replace my employees?",
                            answer: "No, it will replace the boring tasks they hate doing. This frees them up to do high-value work like creative strategy, relationship building, and closing deals. It's about augmentation, not replacement."
                        },
                        {
                            question: "Is my data secure?",
                            answer: "Yes. We use enterprise-grade security protocols. We can deploy local LLMs that ensure your data never leaves your private cloud if required."
                        },
                        {
                            question: "How long does it take to build?",
                            answer: "A simple chatbot can be live in 1 week. A complex, fully integrated workflow system typically takes 3-4 weeks to build, test, and deploy."
                        },
                        {
                            question: "Do I need to know how to code?",
                            answer: "Zero coding required from you. We build the system, hand you the keys, and provide a simple dashboard for you to monitor performance."
                        }
                    ]}
                />

                <OfferCTA
                    headline="Automate or Disintegrate."
                    subheadline="Book a demo. We'll show you exactly how AI can save you 20 hours a week starting today."
                />

                <RelatedServices
                    services={[
                        { title: "Web Development", description: "Build the custom tools your AI agents need.", link: "/web-development" },
                        { title: "Performance Marketing", description: "Scale your traffic now that you can handle the leads.", link: "/services/performance-marketing" },
                        { title: "Email Automation", description: "Combine AI with traditional email flows.", link: "/services/performance-marketing" }
                    ]}
                />

                <StickyCTA />
                <ExitIntentPopup />
            </main>
            <Footer />
        </div>
    );
};

export default AIAutomation;
