import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export interface Card {
    icon: React.ReactNode;
    title: string;
    description: string;
    metric?: string;
    metricLabel?: string;
}

interface CardStackProps {
    cards: Card[];
}

export default function CardStack({ cards }: CardStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <div ref={containerRef} className="relative h-[800px] md:h-[1000px] flex items-center justify-center">
            <div className="sticky top-1/4 w-full max-w-md">
                <div className="relative w-full aspect-square">
                    {cards.map((card, index) => {
                        const isLast = index === cards.length - 1;

                        // Calculate transforms based on scroll
                        const rotate = useTransform(
                            scrollYProgress,
                            [0, 0.5, 1],
                            [0, (index - cards.length / 2) * 8, (index - cards.length / 2) * 15]
                        );

                        const y = useTransform(
                            scrollYProgress,
                            [0, 0.5, 1],
                            [150, index * 20, index === cards.length - 1 ? 0 : -100]
                        );

                        const scale = useTransform(
                            scrollYProgress,
                            [0, 0.5, 1],
                            [0.85, 1 - (index * 0.05), index === cards.length - 1 ? 1 : 0.9]
                        );

                        return (
                            <motion.div
                                key={index}
                                className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 flex flex-col justify-between"
                                style={{
                                    // @ts-ignore
                                    rotate,
                                    y,
                                    scale,
                                    zIndex: cards.length - index,
                                    transformOrigin: 'center bottom'
                                }}
                            >
                                <div>
                                    {/* Card content */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-emerald-600">
                                            {card.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        {card.title}
                                    </h3>

                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Card Footer */}
                                {card.metric && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="text-3xl font-black text-emerald-500">{card.metric}</div>
                                        <div className="text-sm text-gray-500 font-medium">{card.metricLabel}</div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
