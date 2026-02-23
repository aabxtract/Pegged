export default function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-md"
        >
            {/* Platform base - isometric */}
            <path
                d="M250 320L100 250L250 180L400 250L250 320Z"
                fill="#EDE9FE"
                stroke="#C4B5FD"
                strokeWidth="1.5"
            />
            <path
                d="M250 320L100 250L100 230L250 300L250 320Z"
                fill="#DDD6FE"
                stroke="#C4B5FD"
                strokeWidth="1"
            />
            <path
                d="M250 320L400 250L400 230L250 300L250 320Z"
                fill="#C4B5FD"
                stroke="#A78BFA"
                strokeWidth="1"
            />

            {/* Rocket */}
            <g transform="translate(230, 40)">
                <ellipse cx="20" cy="160" rx="15" ry="4" fill="#DDD6FE" opacity="0.5" />
                {/* Body */}
                <rect x="12" y="80" width="16" height="50" rx="4" fill="#7C3AED" />
                <rect x="14" y="85" width="12" height="20" rx="3" fill="#A78BFA" />
                {/* Nose */}
                <path d="M12 80L20 55L28 80Z" fill="#7C3AED" />
                <path d="M16 80L20 60L24 80Z" fill="#A78BFA" />
                {/* Fins */}
                <path d="M12 120L4 135L12 130Z" fill="#F97316" />
                <path d="M28 120L36 135L28 130Z" fill="#F97316" />
                {/* Window */}
                <circle cx="20" cy="92" r="4" fill="#06B6D4" />
                <circle cx="20" cy="92" r="2.5" fill="white" opacity="0.6" />
                {/* Flame */}
                <path d="M14 130L20 155L26 130" fill="#F97316" opacity="0.8">
                    <animate
                        attributeName="d"
                        values="M14 130L20 155L26 130;M15 130L20 148L25 130;M14 130L20 155L26 130"
                        dur="0.6s"
                        repeatCount="indefinite"
                    />
                </path>
                <path d="M16 130L20 145L24 130" fill="#FBBF24" opacity="0.9">
                    <animate
                        attributeName="d"
                        values="M16 130L20 145L24 130;M17 130L20 140L23 130;M16 130L20 145L24 130"
                        dur="0.4s"
                        repeatCount="indefinite"
                    />
                </path>
                {/* Stars around rocket */}
                <circle cx="-15" cy="75" r="2" fill="#FBBF24">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="65" r="1.5" fill="#FBBF24">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="45" cy="95" r="1.5" fill="#FBBF24">
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Floating coins */}
            {/* Bitcoin coin - left */}
            <g transform="translate(80, 130)">
                <circle cx="25" cy="25" r="22" fill="#F97316" />
                <circle cx="25" cy="25" r="18" fill="#FBBF24" />
                <text
                    x="25"
                    y="31"
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="bold"
                    fill="#F97316"
                >
                    ₿
                </text>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="80,130;80,120;80,130"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </g>

            {/* STX coin - right */}
            <g transform="translate(360, 110)">
                <circle cx="20" cy="20" r="18" fill="#7C3AED" />
                <circle cx="20" cy="20" r="14" fill="#A78BFA" />
                <text
                    x="20"
                    y="26"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="bold"
                    fill="white"
                >
                    S
                </text>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="360,110;360,100;360,110"
                    dur="2.5s"
                    repeatCount="indefinite"
                />
            </g>

            {/* Small floating token */}
            <g transform="translate(140, 80)">
                <circle cx="12" cy="12" r="10" fill="#06B6D4" />
                <circle cx="12" cy="12" r="7" fill="#22D3EE" />
                <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="white"
                >
                    P
                </text>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="140,80;140,72;140,80"
                    dur="3.5s"
                    repeatCount="indefinite"
                />
            </g>

            {/* Chart element on platform */}
            <g transform="translate(140, 210)">
                <rect x="0" y="0" width="80" height="50" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <polyline
                    points="8,38 20,28 32,32 44,18 56,22 68,12"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle cx="68" cy="12" r="3" fill="#22C55E" />
            </g>

            {/* Token stack on platform */}
            <g transform="translate(300, 200)">
                <ellipse cx="25" cy="45" rx="20" ry="6" fill="#DDD6FE" />
                <ellipse cx="25" cy="38" rx="20" ry="6" fill="#C4B5FD" />
                <ellipse cx="25" cy="31" rx="20" ry="6" fill="#A78BFA" />
                <ellipse cx="25" cy="24" rx="20" ry="6" fill="#8B5CF6" />
                <ellipse cx="25" cy="17" rx="20" ry="6" fill="#7C3AED" />
            </g>

            {/* Connection lines */}
            <line x1="130" y1="155" x2="170" y2="220" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <line x1="380" y1="140" x2="340" y2="210" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        </svg>
    );
}
