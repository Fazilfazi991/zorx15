const logos = [
    "https://logo.clearbit.com/google.com",
    "https://logo.clearbit.com/meta.com",
    "https://logo.clearbit.com/shopify.com",
    "https://logo.clearbit.com/stripe.com",
    "https://logo.clearbit.com/hubspot.com",
    "https://logo.clearbit.com/salesforce.com",
    "https://logo.clearbit.com/monday.com",
    "https://logo.clearbit.com/aws.amazon.com",
    "https://logo.clearbit.com/slack.com",
    "https://logo.clearbit.com/zoom.us"
];

const TrustedBySection = () => {
    return (
        <section className="bg-white py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Trusted by Industry Leaders
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                    Trusted by 50+ Leading UAE Brands
                </h2>
            </div>

            <div className="relative w-full overflow-hidden py-4 group">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
                    {/* First set of logos */}
                    <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16">
                        {logos.map((logo, index) => (
                            <div
                                key={`logo-1-${index}`}
                                className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                            >
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="max-h-12 md:max-h-16 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second set of logos for seamless loop */}
                    <div className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16">
                        {logos.map((logo, index) => (
                            <div
                                key={`logo-2-${index}`}
                                className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                            >
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="max-h-12 md:max-h-16 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional gradient fade edges */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default TrustedBySection;
