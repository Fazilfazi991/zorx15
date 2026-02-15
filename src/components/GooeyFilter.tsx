
export const GooeyFilter = () => (
    <svg
        style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
        aria-hidden="true"
    >
        <defs>
            <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10"
                    result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
            <filter id="gooey-hero">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 19 -9"
                    result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
        </defs>
    </svg>
);
