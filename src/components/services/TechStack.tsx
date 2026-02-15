
interface TechStackProps {
    logos: { name: string; image?: string }[];
}

const TechStack = ({ logos }: TechStackProps) => {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="section-container text-center">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-12">Powered By Industry-Leading Technology</p>
                <div className="flex flex-wrap justify-center gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        logo.image ? (
                            <img key={index} src={logo.image} alt={logo.name} className="h-10 w-auto object-contain" />
                        ) : (
                            <span key={index} className="text-2xl font-bold text-foreground/80">{logo.name}</span>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
