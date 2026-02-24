export function FeatureIllustration1() {
    return (
        <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
                <linearGradient id="feat1-card" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#12122B" />
                </linearGradient>
            </defs>
            {/* Launch pad */}
            <rect x="60" y="100" width="180" height="100" rx="12" fill="url(#feat1-card)" stroke="#4C1D95" strokeWidth="0.5" />
            {/* Form fields */}
            <rect x="80" y="120" width="100" height="10" rx="5" fill="#2E1065" opacity="0.6" />
            <rect x="80" y="140" width="70" height="10" rx="5" fill="#2E1065" opacity="0.4" />
            <rect x="80" y="160" width="120" height="10" rx="5" fill="#2E1065" opacity="0.5" />
            {/* Launch button */}
            <rect x="80" y="178" width="60" height="14" rx="7" fill="#8B5CF6" />
            <text x="110" y="188" textAnchor="middle" fontSize="7" fill="white" fontWeight="600">Launch</text>
            {/* Token flying out */}
            <g>
                <circle cx="220" cy="80" r="20" fill="#4C1D95" opacity="0.3" />
                <circle cx="220" cy="80" r="18" fill="#8B5CF6" />
                <circle cx="220" cy="80" r="14" fill="#A78BFA" />
                <text x="220" y="85" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">$</text>
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="2.5s" repeatCount="indefinite" />
            </g>
            {/* Sparkles */}
            <circle cx="195" cy="60" r="2" fill="#FBBF24">
                <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="248" cy="72" r="1.5" fill="#22D3EE">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="232" cy="52" r="1.5" fill="#8B5CF6">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
}

export function FeatureIllustration2() {
    return (
        <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
                <linearGradient id="feat2-card" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#12122B" />
                </linearGradient>
            </defs>
            {/* Chart panel */}
            <rect x="40" y="50" width="220" height="150" rx="12" fill="url(#feat2-card)" stroke="#4C1D95" strokeWidth="0.5" />
            {/* Chart header */}
            <rect x="55" y="65" width="50" height="8" rx="4" fill="#2E1065" opacity="0.6" />
            <rect x="55" y="78" width="30" height="6" rx="3" fill="#2E1065" opacity="0.4" />
            {/* Candlesticks */}
            <g transform="translate(55, 100)">
                {/* Grid */}
                <line x1="10" y1="10" x2="10" y2="60" stroke="#4C1D95" strokeWidth="0.3" />
                <line x1="40" y1="10" x2="40" y2="60" stroke="#4C1D95" strokeWidth="0.3" />
                <line x1="70" y1="10" x2="70" y2="60" stroke="#4C1D95" strokeWidth="0.3" />
                <line x1="100" y1="10" x2="100" y2="60" stroke="#4C1D95" strokeWidth="0.3" />
                <line x1="130" y1="10" x2="130" y2="60" stroke="#4C1D95" strokeWidth="0.3" />
                <line x1="160" y1="10" x2="160" y2="60" stroke="#4C1D95" strokeWidth="0.3" />
                {/* Green candles */}
                <rect x="6" y="25" width="8" height="20" rx="1" fill="#34D399" />
                <rect x="36" y="15" width="8" height="25" rx="1" fill="#34D399" />
                <rect x="96" y="10" width="8" height="30" rx="1" fill="#34D399" />
                <rect x="156" y="8" width="8" height="22" rx="1" fill="#34D399" />
                {/* Red candles */}
                <rect x="66" y="20" width="8" height="15" rx="1" fill="#F87171" />
                <rect x="126" y="18" width="8" height="18" rx="1" fill="#F87171" />
                {/* Price line */}
                <polyline points="10,35 40,22 70,28 100,15 130,20 160,12" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            </g>
            {/* Buy/Sell buttons */}
            <rect x="55" y="175" width="40" height="12" rx="6" fill="#34D399" />
            <text x="75" y="183" textAnchor="middle" fontSize="6" fill="white" fontWeight="600">Buy</text>
            <rect x="100" y="175" width="40" height="12" rx="6" fill="#F87171" />
            <text x="120" y="183" textAnchor="middle" fontSize="6" fill="white" fontWeight="600">Sell</text>
        </svg>
    );
}

export function FeatureIllustration3() {
    return (
        <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
                <linearGradient id="feat3-card" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#12122B" />
                </linearGradient>
            </defs>
            {/* Community panel */}
            <rect x="50" y="40" width="200" height="170" rx="12" fill="url(#feat3-card)" stroke="#4C1D95" strokeWidth="0.5" />
            {/* Post 1 */}
            <g transform="translate(65, 55)">
                <circle cx="10" cy="10" r="10" fill="#8B5CF6" />
                <text x="10" y="14" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">S</text>
                <rect x="28" y="2" width="80" height="6" rx="3" fill="#F1F0F9" opacity="0.06" />
                <rect x="28" y="12" width="130" height="5" rx="2.5" fill="#2E1065" opacity="0.5" />
            </g>
            {/* Post 2 */}
            <g transform="translate(65, 95)">
                <circle cx="10" cy="10" r="10" fill="#22D3EE" />
                <text x="10" y="14" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">B</text>
                <rect x="28" y="2" width="60" height="6" rx="3" fill="#F1F0F9" opacity="0.06" />
                <rect x="28" y="12" width="140" height="5" rx="2.5" fill="#2E1065" opacity="0.5" />
            </g>
            {/* Post 3 */}
            <g transform="translate(65, 135)">
                <circle cx="10" cy="10" r="10" fill="#FB923C" />
                <text x="10" y="14" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">W</text>
                <rect x="28" y="2" width="70" height="6" rx="3" fill="#F1F0F9" opacity="0.06" />
                <rect x="28" y="12" width="110" height="5" rx="2.5" fill="#2E1065" opacity="0.5" />
            </g>
            {/* Token gate badge */}
            <g transform="translate(165, 165)">
                <rect x="0" y="0" width="70" height="16" rx="8" fill="rgba(139,92,246,0.15)" />
                <text x="35" y="11" textAnchor="middle" fontSize="6" fill="#8B5CF6" fontWeight="600">🔒 Token Gated</text>
            </g>
            {/* Reactions */}
            <g>
                <text x="240" y="70" fontSize="14">❤️</text>
                <animateTransform attributeName="transform" type="translate" values="0,0;2,-6;0,0" dur="2s" repeatCount="indefinite" />
            </g>
            <g>
                <text x="220" y="120" fontSize="12">🚀</text>
                <animateTransform attributeName="transform" type="translate" values="0,0;-2,-5;0,0" dur="2.5s" repeatCount="indefinite" />
            </g>
        </svg>
    );
}

export function StepsIllustration() {
    return (
        <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg">
            <defs>
                <linearGradient id="steps-card" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#12122B" />
                </linearGradient>
            </defs>
            {/* Step 1 */}
            <g transform="translate(30, 40)">
                <rect x="0" y="0" width="100" height="80" rx="12" fill="url(#steps-card)" stroke="#4C1D95" strokeWidth="0.5" />
                <circle cx="50" cy="30" r="16" fill="rgba(139,92,246,0.15)" />
                <text x="50" y="35" textAnchor="middle" fontSize="16">🔗</text>
                <rect x="20" y="55" width="60" height="6" rx="3" fill="#2E1065" opacity="0.5" />
                <rect x="30" y="65" width="40" height="4" rx="2" fill="#2E1065" opacity="0.3" />
            </g>
            {/* Arrow 1 */}
            <path d="M145 80L175 80" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead-dark)" opacity="0.5" />
            {/* Step 2 */}
            <g transform="translate(190, 40)">
                <rect x="0" y="0" width="100" height="80" rx="12" fill="url(#steps-card)" stroke="#4C1D95" strokeWidth="0.5" />
                <circle cx="50" cy="30" r="16" fill="rgba(139,92,246,0.15)" />
                <text x="50" y="35" textAnchor="middle" fontSize="16">✨</text>
                <rect x="20" y="55" width="60" height="6" rx="3" fill="#2E1065" opacity="0.5" />
                <rect x="30" y="65" width="40" height="4" rx="2" fill="#2E1065" opacity="0.3" />
            </g>
            {/* Arrow 2 */}
            <path d="M305 80L335 80" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead-dark)" opacity="0.5" />
            {/* Step 3 */}
            <g transform="translate(350, 40)">
                <rect x="0" y="0" width="100" height="80" rx="12" fill="url(#steps-card)" stroke="#8B5CF6" strokeWidth="1" />
                <circle cx="50" cy="30" r="16" fill="#8B5CF6" />
                <text x="50" y="35" textAnchor="middle" fontSize="16">🚀</text>
                <rect x="20" y="55" width="60" height="6" rx="3" fill="#2E1065" opacity="0.5" />
                <rect x="30" y="65" width="40" height="4" rx="2" fill="#2E1065" opacity="0.3" />
            </g>
            {/* Arrow marker */}
            <defs>
                <marker id="arrowhead-dark" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#8B5CF6" opacity="0.5" />
                </marker>
            </defs>
            {/* Labels */}
            <text x="80" y="145" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F1F0F9">Connect</text>
            <text x="80" y="158" textAnchor="middle" fontSize="8" fill="#8B8BA3">Link your wallet</text>
            <text x="240" y="145" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F1F0F9">Create</text>
            <text x="240" y="158" textAnchor="middle" fontSize="8" fill="#8B8BA3">Design your token</text>
            <text x="400" y="145" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F1F0F9">Launch</text>
            <text x="400" y="158" textAnchor="middle" fontSize="8" fill="#8B8BA3">Go live on Stacks</text>
        </svg>
    );
}
