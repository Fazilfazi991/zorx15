import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in ms
}

export const RevealOnScroll = ({ children, className = "", delay = 0, stagger = 0 }: RevealOnScrollProps & { stagger?: number }) => {
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
            style={{
                transitionDelay: `${delay}ms`,
                // If children are mapped, we might want to apply stagger to them via CSS variable or similar, 
                // but for now, this component is a wrapper. 
                // To truly stagger children, we'd need to modify how children are rendered or use a parent-child context.
                // For this simple implementation, we'll assume the 'delay' prop handles the primary stagger of the block itself.
            }}
        >
            {children}
        </div>
    );
};

// Simple Stagger Container Helper
export const StaggerContainer = ({ children, className = "", staggerDelay = 100 }: { children: React.ReactNode, className?: string, staggerDelay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        style={{ transitionDelay: `${i * staggerDelay}ms` }}
                    >
                        {child}
                    </div>
                ))
                : children
            }
        </div>
    );

};
