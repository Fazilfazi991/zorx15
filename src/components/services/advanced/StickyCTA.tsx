
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border z-50 md:hidden animate-in slide-in-from-bottom duration-300">
            <div className="flex gap-3">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg" asChild>
                    <Link to="/contact">
                        Get Your Free Strategy
                    </Link>
                </Button>
                <Button size="icon" variant="outline" asChild>
                    <a href="tel:+971500000000">
                        <Phone className="w-5 h-5" />
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default StickyCTA;
