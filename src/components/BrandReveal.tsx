import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function BrandReveal() {
    const [showContent, setShowContent] = useState(false);
    const { scrollY } = useScroll();

    // Brand screen fades out smoothly
    const brandOpacity = useTransform(scrollY, [0, 400, 600], [1, 1, 0]);
    const brandScale = useTransform(scrollY, [0, 600], [1, 0.95]);

    // Hero appears immediately after brand
    const heroOpacity = useTransform(scrollY, [500, 700], [0, 1]);
    const heroY = useTransform(scrollY, [500, 700], [30, 0]);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {/* BRAND REVEAL - Fixed position, fades out on scroll */}
            <motion.section
                className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none"
                style={{
                    opacity: brandOpacity,
                    scale: brandScale,
                }}
            >
                {/* Emerald Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600">
                    {/* Animated Blob 1 */}
                    <motion.div
                        className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-300 rounded-full opacity-30 blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Animated Blob 2 */}
                    <motion.div
                        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-emerald-300 rounded-full opacity-20 blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, -50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </div>

                {/* Logo Animation */}
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

                {/* Scroll Indicator */}
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

            {/* SPACER - Provides scroll distance */}
            <div className="h-screen" />

            {/* HERO SECTION - Appears after brand exits */}
            <motion.div
                className="relative z-10"
                style={{
                    opacity: heroOpacity,
                    y: heroY,
                }}
            >
                {/* Navigation - Only shows with hero */}
                <motion.nav
                    className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm"
                    style={{ opacity: heroOpacity }}
                >
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-2xl font-black">
                            <span className="text-emerald-500">Z</span>
                            <span className="text-gray-900">OR</span>
                            <span className="text-emerald-500">X</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#home" className="text-gray-900 font-medium hover:text-emerald-500 transition">
                                Home
                            </a>
                            <a href="#about" className="text-gray-600 hover:text-emerald-500 transition">
                                About Us
                            </a>
                            <div className="relative group">
                                <button className="text-gray-600 hover:text-emerald-500 transition flex items-center gap-1">
                                    Services
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <a href="#blogs" className="text-gray-600 hover:text-emerald-500 transition">
                                Blogs
                            </a>
                            <a href="#contact" className="text-gray-600 hover:text-emerald-500 transition">
                                Contact
                            </a>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg shadow-emerald-500/30">
                            Get Started
                        </button>
                    </div>
                </motion.nav>

                {/* Hero Content */}
                <section className="relative min-h-screen bg-[#1a2332] overflow-hidden flex items-center">
                    <div className="max-w-7xl mx-auto px-6 py-20 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* LEFT - Orange Cards with Images */}
                            <motion.div
                                className="relative order-2 lg:order-1"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-[500px] flex items-center justify-center">

                                    {/* Card 1 - Top (Background card) */}
                                    <motion.div
                                        className="absolute w-72 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl shadow-2xl overflow-hidden"
                                        style={{
                                            rotate: -8,
                                            top: '0%',
                                            left: '5%',
                                        }}
                                        animate={{
                                            rotate: [-8, -6, -8],
                                            y: [0, -8, 0],
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {/* Image */}
                                        <img
                                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop"
                                            alt="Social Media Content"
                                            className="w-full h-full object-cover opacity-90"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent" />

                                        {/* Badge */}
                                        <div className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                            @SM
                                        </div>
                                    </motion.div>

                                    {/* Card 2 - Middle (Main/Front card) */}
                                    <motion.div
                                        className="relative w-72 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl shadow-2xl overflow-hidden z-10"
                                        style={{
                                            rotate: -3,
                                        }}
                                        animate={{
                                            rotate: [-3, -1, -3],
                                            y: [0, -5, 0],
                                        }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    >
                                        {/* Image */}
                                        <img
                                            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop"
                                            alt="Social Media Content"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Gradient Overlay for better text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                                        {/* Top Badge */}
                                        <div className="absolute top-6 left-6 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            Social Media Content
                                        </div>

                                        {/* Bottom Badge */}
                                        <div className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                            @SM
                                        </div>

                                        {/* Optional: Add engagement stats */}
                                        <div className="absolute bottom-6 right-6 flex flex-col items-end gap-2">
                                            <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                                                ❤️ 2.5K
                                            </div>
                                            <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                                                💬 180
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Card 3 - Bottom (Background card) */}
                                    <motion.div
                                        className="absolute w-72 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl shadow-2xl overflow-hidden"
                                        style={{
                                            rotate: 5,
                                            bottom: '0%',
                                            right: '5%',
                                        }}
                                        animate={{
                                            rotate: [5, 7, 5],
                                            y: [0, 8, 0],
                                        }}
                                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    >
                                        {/* Image */}
                                        <img
                                            src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop"
                                            alt="Social Media Content"
                                            className="w-full h-full object-cover opacity-90"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent" />

                                        {/* Badge */}
                                        <div className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                            @SM
                                        </div>
                                    </motion.div>

                                </div>
                            </motion.div>

                            {/* RIGHT - Content */}
                            <motion.div
                                className="order-1 lg:order-2"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                                    <span className="text-white block">VIDEOS</span>
                                    <span className="text-gray-500 block">THAT</span>
                                    <span className="text-white block">BUILD</span>
                                    <span className="text-white relative inline-block">
                                        BRANDS
                                        <motion.div
                                            className="absolute -right-8 top-0 md:-right-12 md:-top-2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-red-600 shadow-2xl"
                                            style={{
                                                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                            }}
                                            animate={{
                                                rotate: [45, 55, 45],
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </span>
                                </h1>

                                <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                                    Unlock your brand's potential with our viral social media strategies that establish authority and create lasting impact!
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <motion.button
                                        className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 shadow-2xl shadow-yellow-500/30 transition-all"
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

                    {/* Background Decoration */}
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
                </section>
            </motion.div>
        </div>
    );
}
