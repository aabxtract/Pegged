import { trendingTokens } from "@/lib/mock-data";
import TokenCard from "@/components/TokenCard";
import {
    TrendingUp,
    Wallet,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    Rocket,
    Activity,
    LineChart
} from "lucide-react";
import { SiBitcoin } from "react-icons/si";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="space-y-8 relative">
            {/* Massive Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-20 mix-blend-screen z-0 translate-x-1/3 -translate-y-1/3" style={{
                background: 'radial-gradient(circle at center, rgba(157, 78, 221, 0.4) 0%, rgba(0, 187, 249, 0.1) 40%, transparent 70%)',
                filter: 'blur(100px)'
            }} />

            {/* Hero banner */}
            <div className="rounded-[2.5rem] bg-gradient-to-br from-[#120D2B] via-[#0A0A15] to-[#0D0518] p-8 sm:p-12 relative overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] group">
                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.15)_0%,transparent_70%)] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,187,249,0.1)_0%,transparent_70%)] translate-y-1/2 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }} />

                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between z-10">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] mb-6 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]"></span>
                            </span>
                            <p className="text-[12px] font-medium text-[var(--color-text-secondary)] tracking-wide uppercase">Dashboard Overview</p>
                        </div>
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Orchestrate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9]">crypto empire.</span>
                        </h1>
                        <p className="text-[15px] font-light text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                            Monitor your decentralized portfolio, discover emerging protocol tokens, and execute algorithmic trades directly from your command center.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/explore"
                                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-bold text-[#050510] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,187,249,0.3)] outline-none"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] transition-opacity duration-300" />
                                <span className="relative z-10 tracking-widest uppercase">Explore Markets</span>
                                <ArrowUpRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                            <Link
                                href="/bots"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-bold text-white rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] transition-all duration-300 backdrop-blur-md tracking-widest uppercase"
                            >
                                <Bot size={16} className="text-[#9D4EDD]" />
                                Setup Bots
                            </Link>
                        </div>
                    </div>

                    {/* Right side stats/illustration - Premium abstract data visualization */}
                    <div className="hidden lg:flex relative w-64 h-64 shrink-0 items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/20 to-[#00BBF9]/20 rounded-full blur-3xl opacity-50 mix-blend-screen" />
                        <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 opacity-90 drop-shadow-[0_0_15px_rgba(157,78,221,0.3)]">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            <circle cx="100" cy="100" r="40" fill="rgba(157,78,221,0.1)" stroke="url(#gradient1)" strokeWidth="2" />
                            <path d="M60 100 Q80 60 100 100 T140 100" fill="none" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_0_8px_#00BBF9]" />
                            <circle cx="140" cy="100" r="4" fill="#00BBF9" />
                            <circle cx="60" cy="100" r="4" fill="#9D4EDD" />
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#9D4EDD" />
                                    <stop offset="100%" stopColor="#00BBF9" />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#9D4EDD" />
                                    <stop offset="100%" stopColor="#00BBF9" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 relative z-10">
                {[
                    {
                        icon: Wallet,
                        title: "Net Worth",
                        value: "$8,782.09",
                        change: "+12.5%",
                        positive: true,
                        colorFrom: "#9D4EDD",
                        colorTo: "#5A189A",
                        shadow: "rgba(157,78,221,0.2)"
                    },
                    {
                        icon: LineChart,
                        title: "Invested Capital",
                        value: "$6,420.00",
                        change: "+2.3%",
                        positive: true,
                        colorFrom: "#00F5D4",
                        colorTo: "#00BBF9",
                        shadow: "rgba(0,187,249,0.2)"
                    },
                    {
                        icon: Activity,
                        title: "24h P&L",
                        value: "+$342.52",
                        change: "-1.8%",
                        positive: false,
                        colorFrom: "#F15BB5",
                        colorTo: "#9D4EDD",
                        shadow: "rgba(241,91,181,0.2)"
                    },
                    {
                        icon: SiBitcoin,
                        title: "Assets Held",
                        value: "12",
                        change: null,
                        positive: true,
                        colorFrom: "#FEE440",
                        colorTo: "#F15BB5",
                        shadow: "rgba(254,228,64,0.2)"
                    },
                ].map((stat, i) => (
                    <div key={stat.title} className="group relative bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl rounded-[1.5rem] p-6 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ background: stat.colorFrom }} />

                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-[1rem] shadow-inner border border-white/10"
                                style={{
                                    background: `linear-gradient(135deg, ${stat.colorFrom}20, ${stat.colorTo}20)`,
                                    boxShadow: `inset 0 2px 10px ${stat.colorFrom}10, 0 5px 15px ${stat.shadow}`
                                }}
                            >
                                <stat.icon size={20} style={{ color: stat.colorFrom }} className="drop-shadow-md" />
                            </div>
                            {stat.change && (
                                <div
                                    className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-md backdrop-blur-md border ${stat.positive ? "bg-[#00F5D4]/10 text-[#00F5D4] border-[#00F5D4]/20" : "bg-[#F15BB5]/10 text-[#F15BB5] border-[#F15BB5]/20"
                                        }`}
                                >
                                    {stat.positive ? <ArrowUpRight size={12} strokeWidth={2.5} /> : <ArrowDownRight size={12} strokeWidth={2.5} />}
                                    {stat.change}
                                </div>
                            )}
                        </div>
                        <div className="relative z-10">
                            <p className="text-[13px] font-medium text-[var(--color-text-secondary)] mb-1 uppercase tracking-wider">
                                {stat.title}
                            </p>
                            <p
                                className="text-[26px] font-bold text-white tracking-tight"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {stat.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom section: Trending + Transactions */}
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 relative z-10">
                {/* Trending tokens */}
                <div className="xl:col-span-2 bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl rounded-[2rem] p-6 lg:p-8 border border-[rgba(255,255,255,0.05)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between mb-8">
                        <h2
                            className="text-[18px] font-bold text-white tracking-tight flex items-center gap-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            <TrendingUp size={20} className="text-[#00BBF9]" />
                            Trending Protocols
                        </h2>
                        <Link
                            href="/explore"
                            className="group flex items-center gap-1.5 text-[12px] font-bold text-[var(--color-text-tertiary)] hover:text-white transition-colors uppercase tracking-widest"
                        >
                            View Market
                            <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {trendingTokens.slice(0, 4).map((token) => (
                            <TokenCard key={token.id} token={token} />
                        ))}
                    </div>
                </div>

                {/* Recent transactions */}
                <div className="bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl rounded-[2rem] p-6 lg:p-8 border border-[rgba(255,255,255,0.05)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                        <h2
                            className="text-[18px] font-bold text-white tracking-tight"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Transaction Log
                        </h2>
                        <button className="text-[var(--color-text-tertiary)] hover:text-white transition-colors">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 space-y-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
                        {[
                            {
                                type: "BUY",
                                token: "SATS",
                                amount: "+5,000",
                                value: "$21.00",
                                color: "#00F5D4",
                                icon: ArrowUpRight,
                                isPositive: true
                            },
                            {
                                type: "SELL",
                                token: "STXP",
                                amount: "-2,000",
                                value: "$3.60",
                                color: "#F15BB5",
                                icon: ArrowDownRight,
                                isPositive: false
                            },
                            {
                                type: "BUY",
                                token: "BTCG",
                                amount: "+10,000",
                                value: "$91.00",
                                color: "#00F5D4",
                                icon: ArrowUpRight,
                                isPositive: true
                            },
                            {
                                type: "DEPLOY",
                                token: "NK",
                                amount: "Genesis",
                                value: "-",
                                color: "#9D4EDD",
                                icon: Rocket,
                                isPositive: null
                            },
                            {
                                type: "BUY",
                                token: "ORD",
                                amount: "+3,500",
                                value: "$12.25",
                                color: "#00F5D4",
                                icon: ArrowUpRight,
                                isPositive: true
                            },
                            {
                                type: "SELL",
                                token: "MEME",
                                amount: "-100,000",
                                value: "$42.50",
                                color: "#F15BB5",
                                icon: ArrowDownRight,
                                isPositive: false
                            },
                        ].map((tx, i) => (
                            <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.03)] border border-transparent hover:border-[rgba(255,255,255,0.05)] transition-all duration-300 cursor-default">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-[13px] font-bold shadow-inner"
                                        style={{
                                            backgroundColor: `${tx.color}20`,
                                            border: `1px solid ${tx.color}40`,
                                        }}
                                    >
                                        <tx.icon size={16} style={{ color: tx.color }} className="drop-shadow-md" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[var(--color-text-secondary)] tracking-wider">
                                                {tx.type}
                                            </span>
                                            <span className="text-[14px] font-bold text-white tracking-wide">
                                                ${tx.token}
                                            </span>
                                        </div>
                                        <p className="text-[12px] text-[var(--color-text-tertiary)] font-medium">
                                            {tx.amount}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[14px] font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                        {tx.value}
                                    </p>
                                    <span className="text-[10px] text-[var(--color-text-tertiary)] font-medium">
                                        Today
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 py-3 text-[12px] font-bold text-[var(--color-text-tertiary)] hover:text-white transition-colors border-t border-[rgba(255,255,255,0.05)] uppercase tracking-widest text-center">
                        View Full History
                    </button>
                </div>
            </div>
        </div>
    );
}
