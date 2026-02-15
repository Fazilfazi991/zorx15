import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import fanCard1 from '@/assets/images/fan-card-1.png';
import fanCard2 from '@/assets/images/fan-card-2.png';
import fanCard3 from '@/assets/images/fan-card-3.jpg';

export default function BrandReveal() {
    const [showContent, setShowContent] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardContainerRef = useRef(null);

    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: cardContainerRef,
        offset: ["start start", "end start"]
    });

    // Brand screen animations
    const brandOpacityRaw = useTransform(scrollY, [0, 150, 250], [1, 1, 0]);
    const brandScaleRaw = useTransform(scrollY, [0, 250], [1, 0.95]);

    const brandOpacity = useSpring(brandOpacityRaw, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const brandScale = useSpring(brandScaleRaw, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Hero section animations
    const heroOpacityRaw = useTransform(scrollY, [200, 350], [0, 1]);
    const heroYRaw = useTransform(scrollY, [200, 350], [30, 0]);

    const heroOpacity = useSpring(heroOpacityRaw, {
        stiffness: 100,
        damping: 30
    });

    const heroY = useSpring(heroYRaw, {
        stiffness: 100,
        damping: 30
    });

    // CARD FAN SCROLL PHYSICS
    // As user scrolls, cards collapse from fan to stack
    const cardCollapseProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    // Parallax movement - cards move slower than content
    const cardsY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
    const cardsYSpring = useSpring(cardsY, {
        stiffness: 300,
        damping: 40
    });

    // Card definitions with scroll-responsive rotations
    const cards = [
        {
            id: 1,
            initialRotate: -20,
            finalRotate: -4,
            zIndex: 1,
            xOffset: -40,
            // Using custom imported image
            image: fanCard1,
            color: "from-orange-400 to-orange-500"
        },
        {
            id: 2,
            initialRotate: -10,
            finalRotate: -2,
            zIndex: 2,
            xOffset: -20,
            image: fanCard2,
            color: "from-orange-500 to-orange-600"
        },
        {
            id: 3,
            initialRotate: 0,
            finalRotate: 0,
            zIndex: 3, // Highest - center card on top
            xOffset: 0,
            image: fanCard3,
            color: "from-orange-400 to-orange-500"
        },
        {
            id: 4,
            initialRotate: 10,
            finalRotate: 2,
            zIndex: 2,
            xOffset: 20,
            image: fanCard2,
            color: "from-orange-500 to-orange-600"
        },
        {
            id: 5,
            initialRotate: 20,
            finalRotate: 4,
            zIndex: 1,
            xOffset: 40,
            image: fanCard1,
            color: "from-orange-400 to-orange-500"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {/* BRAND REVEAL - Same as before */}
            <motion.section
                className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none"
                style={{
                    opacity: brandOpacity,
                    scale: brandScale,
                    willChange: 'opacity, transform'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600">
                    <motion.div
                        className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-300 rounded-full opacity-30 blur-3xl transform-gpu"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                        style={{ willChange: 'transform' }}
                    />

                    <motion.div
                        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-emerald-300 rounded-full opacity-20 blur-3xl transform-gpu"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1, repeatType: "reverse" }}
                        style={{ willChange: 'transform' }}
                    />
                </div>

                <motion.div
                    className="relative z-10 text-center pointer-events-none"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                    <motion.div
                        className="text-8xl md:text-9xl font-black mb-4"
                        initial={{ letterSpacing: '-0.05em' }}
                        animate={{ letterSpacing: '0em' }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <span className="text-white drop-shadow-2xl">Z</span>
                        <span className="text-gray-900">OR</span>
                        <span className="text-white drop-shadow-2xl">X</span>
                    </motion.div>

                    <motion.div
                        className="h-1 bg-white mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '200px' }}
                        transition={{ duration: 1, delay: 1.2 }}
                    />

                    <motion.p
                        className="text-white text-xl md:text-2xl font-semibold mt-6 drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        Digital Marketing Excellence
                    </motion.p>
                </motion.div>

                {showContent && (
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span className="text-white text-sm font-semibold uppercase tracking-wider">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-6 h-6 text-white" />
                        </motion.div>
                    </motion.div>
                )}
            </motion.section>

            <div className="h-[50vh]" />

            {/* HERO SECTION WITH SCROLL-RESPONSIVE CARD FAN */}
            <motion.div
                ref={cardContainerRef}
                className="relative z-10"
                style={{
                    opacity: heroOpacity,
                    y: heroY,
                    willChange: 'opacity, transform'
                }}
            >
                <motion.nav
                    className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm transform-gpu"
                    style={{
                        opacity: heroOpacity,
                        willChange: 'opacity'
                    }}
                    initial={false}
                >
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div className="text-2xl font-black">
                            <span className="text-emerald-500">Z</span>
                            <span className="text-gray-900">OR</span>
                            <span className="text-emerald-500">X</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a href="#home" className="text-gray-900 font-medium hover:text-emerald-500 transition">Home</a>
                            <a href="#about" className="text-gray-600 hover:text-emerald-500 transition">About Us</a>
                            <div className="relative group">
                                <button className="text-gray-600 hover:text-emerald-500 transition flex items-center gap-1">
                                    Services
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <a href="#blogs" className="text-gray-600 hover:text-emerald-500 transition">Blogs</a>
                            <a href="#contact" className="text-gray-600 hover:text-emerald-500 transition">Contact</a>
                        </div>

                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-emerald-500/30">
                            Get Started
                        </button>
                    </div>
                </motion.nav>

                <section className="relative min-h-screen bg-[#1a2332] overflow-hidden flex items-center">
                    <div className="max-w-7xl mx-auto px-6 py-20 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* LEFT - SCROLL-RESPONSIVE CARD FAN */}
                            <motion.div
                                className="relative order-2 lg:order-1"
                                style={{ y: cardsYSpring }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                            >
                                <div className="relative w-full h-[550px] flex items-center justify-center">

                                    {cards.map((card, index) => {
                                        // Calculate rotation based on scroll progress
                                        const rotateRaw = useTransform(
                                            cardCollapseProgress,
                                            [0, 1],
                                            [
                                                isHovered ? card.initialRotate * 1.3 : card.initialRotate, // Fan expands on hover
                                                card.finalRotate // Collapses to near-vertical on scroll
                                            ]
                                        );

                                        const rotate = useSpring(rotateRaw, {
                                            stiffness: 300,
                                            damping: 40
                                        });

                                        // Horizontal spread collapse
                                        const xRaw = useTransform(
                                            cardCollapseProgress,
                                            [0, 1],
                                            [card.xOffset, card.xOffset * 0.2] // Collapses horizontally
                                        );

                                        const x = useSpring(xRaw, {
                                            stiffness: 300,
                                            damping: 40
                                        });

                                        // Scale effect - center card stays full size
                                        const scaleRaw = useTransform(
                                            cardCollapseProgress,
                                            [0, 1],
                                            [1, card.id === 3 ? 1 : 0.95]
                                        );

                                        const scale = useSpring(scaleRaw, {
                                            stiffness: 300,
                                            damping: 40
                                        });

                                        return (
                                            <motion.div
                                                key={card.id}
                                                className="absolute w-72 h-96 transform-gpu"
                                                style={{
                                                    rotate,
                                                    x,
                                                    scale,
                                                    zIndex: card.zIndex,
                                                    transformOrigin: 'bottom center', // CRITICAL: Cards pivot from bottom
                                                    willChange: 'transform'
                                                }}
                                            >
                                                <div className={`w-full h-full bg-gradient-to-br ${card.color} rounded-3xl shadow-2xl overflow-hidden`}>
                                                    {/* Image */}
                                                    <img
                                                        src={card.image}
                                                        alt={`Social Media Content ${card.id}`}
                                                        className="w-full h-full object-cover transform-gpu"
                                                        loading={card.id === 3 ? "eager" : "lazy"}
                                                        decoding="async"
                                                    />

                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                                                    {/* Content - Only show on center card or when fan is open */}
                                                    <motion.div
                                                        className="absolute inset-x-0 bottom-0 p-6"
                                                        style={{
                                                            opacity: useTransform(
                                                                cardCollapseProgress,
                                                                [0, 0.5],
                                                                [1, card.id === 3 ? 1 : 0] // Only center card shows content when collapsed
                                                            )
                                                        }}
                                                    >
                                                        {card.id === 3 && (
                                                            <div className="space-y-3">
                                                                <div className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex">
                                                                    Social Media Content
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold">
                                                                        @SM
                                                                    </div>
                                                                    <div className="flex gap-2">
                                                                        <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                                                                            ❤️ 2.5K
                                                                        </div>
                                                                        <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                                                                            💬 180
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {card.id !== 3 && (
                                                            <div className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold inline-flex">
                                                                @SM
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}

                                </div>
                            </motion.div>

                            {/* RIGHT - Content (same as before) */}
                            <motion.div
                                className="order-1 lg:order-2"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                                    <span className="text-white block">VIDEOS</span>
                                    <span className="text-gray-500 block">THAT</span>
                                    <span className="text-white block">BUILD</span>
                                    <span className="text-white relative inline-block">
                                        BRANDS
                                        <motion.div
                                            className="absolute -right-8 top-0 md:-right-12 md:-top-2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-red-600 shadow-2xl"
                                            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                                            animate={{ rotate: [45, 55, 45], scale: [1, 1.1, 1] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </span>
                                </h1>

                                <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                                    Unlock your brand's potential with our viral social media strategies that establish authority and create lasting impact!
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <motion.button
                                        className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 shadow-xl transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                        Go viral now
                                    </motion.button>

                                    <motion.button
                                        className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-600 hover:border-white transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Portfolio
                                    </motion.button>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
                </section>
            </motion.div>
        </div>
    );
}
