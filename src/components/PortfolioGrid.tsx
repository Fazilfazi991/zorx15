
const projects = [
    { id: 1, title: "Neonights", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fneonights.ae?w=1280&h=8000", link: "https://neonights.ae" },
    { id: 2, title: "BWMC", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fbwmc.ae?w=1280&h=8000", link: "https://bwmc.ae" },
    { id: 3, title: "Tonio Senora", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Ftoniosenora.com?w=1280&h=8000", link: "https://toniosenora.com" },
    { id: 4, title: "Veriquondt", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fveriquondt.com?w=1280&h=8000", link: "https://veriquondt.com" },
    { id: 5, title: "FM Auditors", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Ffmauditors.com?w=1280&h=8000", link: "https://fmauditors.com" },
    { id: 6, title: "JH Accounting", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjhaccounting.ae?w=1280&h=8000", link: "https://jhaccounting.ae" },
    { id: 7, title: "Ikigai Auto Parts", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fikigaiautoparts.com?w=1280&h=8000", link: "https://ikigaiautoparts.com" },
    { id: 8, title: "Step Vision Hotel Supplies", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fstepvisionhotelsupplies.com?w=1280&h=8000", link: "https://stepvisionhotelsupplies.com" },
    { id: 9, title: "Universal Yoga", image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.nuniversalyoga.ae?w=1280&h=8000", link: "https://www.nuniversalyoga.ae" },
];

const PortfolioGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((site) => (
                <div key={site.id} className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 bg-white">
                    <div className="aspect-video overflow-hidden">
                        <img
                            src={site.image}
                            alt={site.title}
                            className="w-full h-full object-cover object-top transition-all ease-linear group-hover:object-bottom"
                            style={{ transitionDuration: '10s' }}
                            onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a href={site.link} target="_blank" rel="noreferrer" className="px-6 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
                            Visit Site
                        </a>
                    </div>
                    <div className="p-4 bg-card border-t border-border">
                        <h3 className="text-lg font-bold text-center text-foreground">{site.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PortfolioGrid;
