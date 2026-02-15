import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Target, Rocket, TrendingUp } from 'lucide-react';

export default function DramaticCardStack() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const cards = [
        {
            icon: <Lightbulb className="w-8 h-8 text-emerald-500" />,
            title: "Discover",
            description: "We dive deep into understanding your business, goals, target audience, and competitive landscape.",
            metric: "847M+",
            metricLabel: "Data Points Analyzed",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            icon: <Target className="w-8 h-8 text-blue-500" />,
            title: "Strategize",
            description: "Custom marketing plans tailored to your unique business needs and market position.",
            metric: "312%",
            metricLabel: "Average ROI",
            gradient: "from-blue-500 to-indigo-500"
        },
        {
            icon: <Rocket className="w-8 h-8 text-purple-500" />,
            title: "Execute",
            description: "Launch and optimize campaigns with precision, testing and iterating for maximum impact.",
            metric: "50+",
            metricLabel: "Active Campaigns",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
            title: "Scale",
            description: "We track, analyze, and continuously improve to scaling what works and cutting what doesn't.",
            metric: "97%",
            metricLabel: "Client Retention",
            gradient: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section ref={containerRef} className="relative bg-gray-50 py-20 overflow-hidden" style={{ height: '400vh' }}>
            {/* Header - Fixed at top initially */}
            <div className="sticky top-20 z-10 text-center mb-12 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                        Our Proven Process
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A systematic approach to digital success that has helped dozens of UAE businesses achieve their goals.
                    </p>
                </motion.div>
            </div>

            {/* Cards Container - Sticky */}
            <div className="sticky top-40 h-[600px] flex items-center justify-center px-6">
                <div className="relative w-full max-w-xl mx-auto perspective-1000">
                    {cards.map((card, index) => {
                        const cardProgress = index / cards.length;
                        const nextCardProgress = (index + 1) / cards.length;

                        // More dramatic transforms
                        const scale = useTransform(
                            scrollYProgress,
                            [cardProgress - 0.1, cardProgress, nextCardProgress, nextCardProgress + 0.1],
                            [0.8, 1, 1, 0.8]
                        );

                        const rotateX = useTransform(
                            scrollYProgress,
                            [cardProgress - 0.1, cardProgress, nextCardProgress],
                            [10, 0, -10]
                        );

                        const rotateZ = useTransform(
                            scrollYProgress,
                            [cardProgress - 0.1, cardProgress, nextCardProgress],
                            [-5, 0, 5]
                        );

                        const y = useTransform(
                            scrollYProgress,
                            [cardProgress - 0.1, cardProgress, nextCardProgress, nextCardProgress + 0.1],
                            [50, 0, 0, -300]
                        );

                        const opacity = useTransform(
                            scrollYProgress,
                            [cardProgress - 0.15, cardProgress - 0.1, nextCardProgress, nextCardProgress + 0.1],
                            [0, 1, 1, 0]
                        );

                        return (
                            <motion.div
                                key={index}
                                className="absolute inset-0 w-full"
                                style={{
                                    scale,
                                    rotateX,
                                    rotateZ,
                                    y,
                                    opacity,
                                    zIndex: cards.length - index,
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                {/* Card */}
                                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 h-full flex flex-col justify-between relative overflow-hidden">
                                    {/* Gradient Background */}
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${card.gradient} opacity-10 blur-3xl rounded-full`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                            {card.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-4xl font-black text-gray-900 mb-4">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Metric */}
                                    <div className="relative z-10 pt-6 border-t-2 border-gray-100">
                                        <div className={`text-5xl font-black bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent mb-2`}>
                                            {card.metric}
                                        </div>
                                        <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide">
                                            {card.metricLabel}
                                        </div>
                                    </div>

                                    {/* Step Number */}
                                    <div className="absolute top-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>

                                    {/* Decorative Element */}
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gray-100 to-transparent rounded-tl-full opacity-50" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 1 }}
                animate={{ opacity: scrollYProgress.get() > 0.8 ? 0 : 1 }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
