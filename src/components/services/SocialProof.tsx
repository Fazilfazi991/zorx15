
const SocialProof = () => {
    return (
        <div className="py-8 bg-[#050505] border-t border-white/5 border-b border-white/5">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-gray-400 font-medium whitespace-nowrap">Trusted by 500+ Businesses</p>

                    <div className="w-full overflow-hidden relative group">
                        <div className="flex gap-12 items-center animate-marquee whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            {/* Logos duplicated for infinite scroll */}
                            <div className="text-xl font-bold text-white">Acme Corp</div>
                            <div className="text-xl font-bold text-white">GlobalTech</div>
                            <div className="text-xl font-bold text-white">Nebula</div>
                            <div className="text-xl font-bold text-white">FoxRun</div>
                            <div className="text-xl font-bold text-white">Trio</div>
                            <div className="text-xl font-bold text-white">Hexagon</div>

                            <div className="text-xl font-bold text-white">Acme Corp</div>
                            <div className="text-xl font-bold text-white">GlobalTech</div>
                            <div className="text-xl font-bold text-white">Nebula</div>
                            <div className="text-xl font-bold text-white">FoxRun</div>
                            <div className="text-xl font-bold text-white">Trio</div>
                            <div className="text-xl font-bold text-white">Hexagon</div>
                        </div>
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
