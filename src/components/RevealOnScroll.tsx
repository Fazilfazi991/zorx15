import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in ms
}

export const RevealOnScroll = ({ children, className = "", delay = 0 }: RevealOnScrollProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: "50px", // Trigger slightly before it comes into view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
