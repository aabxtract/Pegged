export default function HeroIllustration() {
    return (
        <svg
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-md"
        >
            <defs>
                <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="platform-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#0F0A2A" />
                </linearGradient>
                <linearGradient id="rocket-body" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
            </defs>

            {/* Background glow */}
            <circle cx="250" cy="200" r="180" fill="url(#hero-glow)" />

            {/* Platform base - isometric */}
            <path d="M250 320L100 250L250 180L400 250L250 320Z" fill="url(#platform-grad)" stroke="#4C1D95" strokeWidth="1" opacity="0.8" />
            <path d="M250 320L100 250L100 235L250 305L250 320Z" fill="#1E1B4B" stroke="#4C1D95" strokeWidth="0.5" opacity="0.6" />
            <path d="M250 320L400 250L400 235L250 305L250 320Z" fill="#2E1065" stroke="#4C1D95" strokeWidth="0.5" opacity="0.6" />

            {/* Grid lines on platform */}
            {[0, 1, 2, 3].map((i) => (
                <line
                    key={`grid-h-${i}`}
                    x1={100 + i * 25 + 25}
                    y1={250 - i * 5.8 - 5.8}
                    x2={250 + i * 25 + 25}
                    y2={180 + i * 5.8 + 5.8}
                    stroke="#8B5CF6"
                    strokeWidth="0.3"
                    opacity="0.2"
                />
            ))}

            {/* Rocket */}
            <g transform="translate(230, 40)">
                {/* Shadow */}
                <ellipse cx="20" cy="160" rx="18" ry="5" fill="#8B5CF6" opacity="0.15" />
                {/* Body */}
                <rect x="12" y="80" width="16" height="50" rx="4" fill="url(#rocket-body)" />
                <rect x="14" y="85" width="12" height="20" rx="3" fill="#C4B5FD" opacity="0.3" />
                {/* Nose */}
                <path d="M12 80L20 55L28 80Z" fill="url(#rocket-body)" />
                <path d="M16 80L20 62L24 80Z" fill="#C4B5FD" opacity="0.2" />
                {/* Fins */}
                <path d="M12 120L4 135L12 130Z" fill="#FB923C" />
                <path d="M28 120L36 135L28 130Z" fill="#FB923C" />
                {/* Window */}
                <circle cx="20" cy="92" r="4.5" fill="#22D3EE" />
                <circle cx="20" cy="92" r="2.5" fill="white" opacity="0.5" />
                {/* Flame */}
                <path d="M14 130L20 158L26 130" fill="#FB923C" opacity="0.9">
                    <animate
                        attributeName="d"
                        values="M14 130L20 158L26 130;M15 130L20 148L25 130;M14 130L20 158L26 130"
                        dur="0.5s"
                        repeatCount="indefinite"
                    />
                </path>
                <path d="M16 130L20 148L24 130" fill="#FBBF24">
                    <animate
                        attributeName="d"
                        values="M16 130L20 148L24 130;M17 130L20 140L23 130;M16 130L20 148L24 130"
                        dur="0.35s"
                        repeatCount="indefinite"
                    />
                </path>
                {/* Rocket glow */}
                <circle cx="20" cy="100" r="30" fill="#8B5CF6" opacity="0.08">
                    <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Stars */}
                <circle cx="-20" cy="70" r="2" fill="#FBBF24">
                    <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="55" cy="60" r="1.5" fill="#22D3EE">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="95" r="1.5" fill="#FBBF24">
                    <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="-10" cy="100" r="1" fill="#22D3EE">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Bitcoin coin */}
            <g transform="translate(80, 130)">
                <circle cx="25" cy="25" r="23" fill="#92400E" opacity="0.3" />
                <circle cx="25" cy="25" r="22" fill="#F97316" />
                <circle cx="25" cy="25" r="18" fill="#FBBF24" />
                <text x="25" y="32" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#92400E">₿</text>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="80,130;80,118;80,130"
                    dur="3.5s"
                    repeatCount="indefinite"
                />
            </g>

            {/* STX coin */}
            <g transform="translate(360, 110)">
                <circle cx="20" cy="20" r="20" fill="#4C1D95" opacity="0.3" />
                <circle cx="20" cy="20" r="18" fill="#8B5CF6" />
                <circle cx="20" cy="20" r="14" fill="#A78BFA" />
                <text x="20" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">S</text>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="360,110;360,98;360,110"
                    dur="2.8s"
                    repeatCount="indefinite"
                />
            </g>

            {/* Small Pegged coin */}
            <g transform="translate(140, 75)">
                <circle cx="12" cy="12" r="11" fill="#0E7490" opacity="0.3" />
                <circle cx="12" cy="12" r="10" fill="#22D3EE" />
                <circle cx="12" cy="12" r="7" fill="#67E8F9" />
                <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">P</text>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="140,75;140,65;140,75"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </g>

            {/* Chart card on platform */}
            <g transform="translate(130, 205)">
                <rect x="0" y="0" width="90" height="55" rx="8" fill="#12122B" stroke="#4C1D95" strokeWidth="0.5" />
                <rect x="0" y="0" width="90" height="55" rx="8" fill="url(#hero-glow)" opacity="0.3" />
                <polyline
                    points="10,40 22,30 34,34 46,20 58,24 70,14"
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle cx="70" cy="14" r="3" fill="#34D399">
                    <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Token stack on platform */}
            <g transform="translate(295, 195)">
                <ellipse cx="25" cy="50" rx="22" ry="7" fill="#1E1B4B" />
                <ellipse cx="25" cy="43" rx="22" ry="7" fill="#2E1065" />
                <ellipse cx="25" cy="36" rx="22" ry="7" fill="#4C1D95" />
                <ellipse cx="25" cy="29" rx="22" ry="7" fill="#6D28D9" />
                <ellipse cx="25" cy="22" rx="22" ry="7" fill="#8B5CF6" />
            </g>

            {/* Connection lines */}
            <line x1="130" y1="155" x2="160" y2="215" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
            <line x1="380" y1="140" x2="340" y2="210" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
        </svg>
    );
}
