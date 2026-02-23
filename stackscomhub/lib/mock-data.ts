// Mock data for trending tokens, stats, and bots

export interface Token {
    id: string;
    name: string;
    ticker: string;
    price: number;
    change24h: number;
    marketCap: number;
    holders: number;
    volume24h: number;
    totalSupply: number;
    description: string;
    color: string;
    sparkline: number[];
}

export interface BotItem {
    id: string;
    name: string;
    description: string;
    category: "Trading" | "Analytics" | "Utility" | "Social";
    stars: number;
    installs: number;
    author: string;
    githubUrl: string;
    color: string;
}

export interface FeedPost {
    id: string;
    author: string;
    authorAddress: string;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    tokenGated: boolean;
}

export const trendingTokens: Token[] = [
    {
        id: "sats",
        name: "Satoshi",
        ticker: "SATS",
        price: 0.0042,
        change24h: 12.5,
        marketCap: 420000,
        holders: 1842,
        volume24h: 89400,
        totalSupply: 100000000,
        description:
            "The OG community token on Stacks. Building the bridge between Bitcoin and community governance.",
        color: "#F97316",
        sparkline: [30, 35, 32, 40, 38, 45, 55, 52, 60, 58, 65, 70],
    },
    {
        id: "stxp",
        name: "StacksPepe",
        ticker: "STXP",
        price: 0.0018,
        change24h: -3.2,
        marketCap: 180000,
        holders: 923,
        volume24h: 34200,
        totalSupply: 100000000,
        description:
            "The memecoin that even Bitcoin maxis love. Powered by community vibes.",
        color: "#22C55E",
        sparkline: [50, 48, 52, 45, 42, 44, 40, 38, 42, 39, 41, 38],
    },
    {
        id: "btcg",
        name: "BitcoinGuild",
        ticker: "BTCG",
        price: 0.0091,
        change24h: 28.7,
        marketCap: 910000,
        holders: 3412,
        volume24h: 156800,
        totalSupply: 50000000,
        description:
            "A guild token for Bitcoin builders. Stake to access exclusive dev resources.",
        color: "#7C3AED",
        sparkline: [20, 22, 25, 30, 28, 35, 40, 45, 50, 55, 60, 68],
    },
    {
        id: "ord",
        name: "OrdinalDAO",
        ticker: "ORD",
        price: 0.0035,
        change24h: 5.1,
        marketCap: 350000,
        holders: 2156,
        volume24h: 67300,
        totalSupply: 100000000,
        description:
            "Governance token for the Ordinal ecosystem on Stacks.",
        color: "#06B6D4",
        sparkline: [40, 42, 38, 41, 43, 45, 42, 46, 44, 48, 45, 47],
    },
    {
        id: "nk",
        name: "Nakamoto",
        ticker: "NK",
        price: 0.0128,
        change24h: 15.8,
        marketCap: 1280000,
        holders: 5230,
        volume24h: 234100,
        totalSupply: 21000000,
        description:
            "Limited supply community token inspired by Bitcoin's 21M cap.",
        color: "#EF4444",
        sparkline: [35, 38, 42, 40, 48, 52, 55, 58, 60, 62, 65, 70],
    },
    {
        id: "layer",
        name: "LayerZero",
        ticker: "LAYER",
        price: 0.0006,
        change24h: -8.4,
        marketCap: 60000,
        holders: 412,
        volume24h: 12400,
        totalSupply: 200000000,
        description:
            "Cross-layer community for Stacks builders exploring L2/L3 innovation.",
        color: "#8B5CF6",
        sparkline: [60, 58, 55, 50, 48, 45, 42, 40, 38, 35, 33, 30],
    },
];

export const bots: BotItem[] = [
    {
        id: "sniper-bot",
        name: "STX Sniper",
        description:
            "Automatically snipe new token launches on Pegged within milliseconds of deployment.",
        category: "Trading",
        stars: 4.8,
        installs: 1249,
        author: "0xdev.btc",
        githubUrl: "https://github.com",
        color: "#7C3AED",
    },
    {
        id: "whale-tracker",
        name: "Whale Watcher",
        description:
            "Track large wallet movements and get alerts when whales buy or sell community tokens.",
        category: "Analytics",
        stars: 4.6,
        installs: 892,
        author: "stacksbuilder.btc",
        githubUrl: "https://github.com",
        color: "#06B6D4",
    },
    {
        id: "airdrop-tool",
        name: "AirDrop Pro",
        description:
            "Batch airdrop your community tokens to holders, followers, or custom address lists.",
        category: "Utility",
        stars: 4.9,
        installs: 2103,
        author: "clarity.btc",
        githubUrl: "https://github.com",
        color: "#22C55E",
    },
    {
        id: "social-bot",
        name: "Community Pulse",
        description:
            "Auto-post milestones, holder counts, and price alerts to your token's community feed.",
        category: "Social",
        stars: 4.3,
        installs: 567,
        author: "pegged.btc",
        githubUrl: "https://github.com",
        color: "#F97316",
    },
];

export const feedPosts: FeedPost[] = [
    {
        id: "1",
        author: "satoshi.btc",
        authorAddress: "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE",
        content:
            "Just launched SATS on Pegged! The bonding curve is live — early holders are going to love this. 🚀🔶",
        timestamp: "2h ago",
        likes: 42,
        comments: 8,
        tokenGated: false,
    },
    {
        id: "2",
        author: "builder.btc",
        authorAddress: "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
        content:
            "Proposal: allocate 5% of BTCG treasury to fund an open-source SDK for Stacks community tokens. Vote in the governance portal! 🗳️",
        timestamp: "4h ago",
        likes: 89,
        comments: 23,
        tokenGated: true,
    },
    {
        id: "3",
        author: "whale.btc",
        authorAddress: "SP1H1JFAB3XZY90SBQQG3ZSQHZ7RVN2CM5F2D7QT",
        content:
            "Airdrop incoming for all NK holders above 1000 tokens! Check your wallets tomorrow. 🎁",
        timestamp: "6h ago",
        likes: 156,
        comments: 45,
        tokenGated: true,
    },
];
