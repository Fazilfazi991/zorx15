import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
    {
        category: "SEO Tips",
        date: "Feb 10, 2024",
        readTime: "5 min read",
        title: "10 SEO Strategies That Actually Work in 2024",
        excerpt: "Discover the latest search engine optimization techniques that are driving real results for UAE businesses. From technical SEO to content strategies.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
        category: "Social Media",
        date: "Feb 5, 2024",
        readTime: "4 min read",
        title: "How to Build a Winning Instagram Strategy for UAE Brands",
        excerpt: "Learn how top UAE brands are leveraging Instagram to drive engagement, build community, and increase sales with proven tactics.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    },
    {
        category: "Paid Ads",
        date: "Jan 28, 2024",
        readTime: "6 min read",
        title: "Google Ads vs. Meta Ads: Which is Right for Your Business?",
        excerpt: "Compare the two biggest advertising platforms and discover which one will deliver the best ROI for your specific business goals.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
];

const BlogSection = () => {
    return (
        <section className="bg-gray-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                        Latest Insights
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Expert Tips & Industry Insights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Stay ahead with the latest digital marketing strategies and trends tailored for the modern landscape.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-56 overflow-hidden bg-gray-200">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-emerald-500" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-emerald-500" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 group/link cursor-pointer">
                                        Read More
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Button
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1 h-auto text-base"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
