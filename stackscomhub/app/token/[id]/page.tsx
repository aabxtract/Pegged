"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trendingTokens, feedPosts } from "@/lib/mock-data";
import {
    ArrowLeft,
    TrendingUp,
    TrendingDown,
    Users,
    BarChart3,
    Coins,
    Heart,
    MessageCircle,
    Lock,
    Share2,
    Activity,
    ChevronDown
} from "lucide-react";
import Link from "next/link";
import { use } from "react";

function PriceChart() {
    const candles = [
        { o: 60, h: 75, l: 55, c: 70 },
        { o: 70, h: 80, l: 65, c: 62 },
        { o: 62, h: 72, l: 58, c: 68 },
        { o: 68, h: 85, l: 66, c: 82 },
        { o: 82, h: 88, l: 75, c: 78 },
        { o: 78, h: 92, l: 76, c: 90 },
        { o: 90, h: 95, l: 82, c: 84 },
        { o: 84, h: 98, l: 80, c: 95 },
        { o: 95, h: 100, l: 88, c: 88 },
        { o: 88, h: 105, l: 85, c: 102 },
        { o: 102, h: 108, l: 95, c: 96 },
        { o: 96, h: 112, l: 92, c: 110 },
    ];

    const w = 700;
    const h = 260;
    const padding = 20;
    const candleW = (w - padding * 2) / candles.length;

    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto drop-shadow-lg">
            {/* Grid */}
            {[0, 1, 2, 3, 4].map((i) => {
                const y = padding + (i * (h - padding * 2)) / 4;
                return (
                    <g key={i}>
                        <line
                            x1={padding}
                            y1={y}
                            x2={w - padding}
                            y2={y}
                            stroke="rgba(255,255,255,0.03)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                        />
                        <text
                            x={w - padding + 5}
                            y={y + 4}
                            fontSize="10"
                            fill="rgba(255,255,255,0.4)"
                            fontFamily="monospace"
                        >
                            ${(0.005 - i * 0.001).toFixed(3)}
                        </text>
                    </g>
                );
            })}

            {/* Candles */}
            {candles.map((c, i) => {
                const x = padding + i * candleW + candleW / 2;
                const green = c.c >= c.o;
                const color = green ? "#00F5D4" : "#F15BB5";
                const bodyTop = Math.min(c.o, c.c);
                const bodyBot = Math.max(c.o, c.c);
                const scale = (h - padding * 2) / 60;

                return (
                    <g key={i} className="transition-all duration-300 hover:opacity-80 cursor-crosshair">
                        <line
                            x1={x}
                            y1={h - padding - (c.h - 50) * scale}
                            x2={x}
                            y2={h - padding - (c.l - 50) * scale}
                            stroke={color}
                            strokeWidth="1.5"
                            className="drop-shadow-[0_0_8px_currentColor]"
                        />
                        <rect
                            x={x - candleW * 0.3}
                            y={h - padding - (bodyBot - 50) * scale}
                            width={candleW * 0.6}
                            height={Math.max((bodyBot - bodyTop) * scale, 2)}
                            rx="2"
                            fill={color}
                            className="drop-shadow-[0_0_5px_currentColor]"
                        />
                    </g>
                );
            })}

            {/* Volume bars */}
            {candles.map((c, i) => {
                const x = padding + i * candleW + candleW / 2;
                const vol = 8 + Math.random() * 20;
                const green = c.c >= c.o;
                return (
                    <rect
                        key={`vol-${i}`}
                        x={x - candleW * 0.25}
                        y={h - 8 - vol}
                        width={candleW * 0.5}
                        height={vol}
                        rx="2"
                        fill={green ? "#00F5D4" : "#F15BB5"}
                        opacity="0.2"
                    />
                );
            })}
        </svg>
    );
}

export default function TokenDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const token = trendingTokens.find((t) => t.id === id) || trendingTokens[0];
    const isPositive = token.change24h >= 0;

    return (
        <div className="min-h-screen bg-transparent flex flex-col relative overflow-hidden">
            {/* Massive Ambient Background Glow */}
            <div className="absolute top-[10%] left-[20%] w-[150vw] h-[800px] pointer-events-none opacity-40 mix-blend-screen z-0 -translate-x-1/2" style={{
                background: `radial-gradient(ellipse at center, ${token.color}30 0%, rgba(0, 187, 249, 0.05) 50%, transparent 70%)`,
                filter: 'blur(100px)'
            }} />

            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 w-full flex-1 relative z-10 lg:py-12">
                {/* Back Link */}
                <Link
                    href="/explore"
                    className="group inline-flex items-center gap-2 mb-8 text-[13px] font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] hover:text-white transition-colors duration-300"
                >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] transition-all duration-300 group-hover:bg-[rgba(255,255,255,0.1)] group-hover:scale-110">
                        <ArrowLeft size={16} />
                    </div>
                    Return to Markets
                </Link>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:gap-10">
                    {/* ====== LEFT: Chart + Feed ====== */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Token header */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r opacity-0 transition-opacity duration-700 blur-xl group-hover:opacity-30 rounded-[2rem]" style={{
                                backgroundImage: `linear-gradient(to right, ${token.color}, #00BBF9)`
                            }} />
                            <div className="relative bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
                                {/* Internal token glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl rounded-full pointer-events-none mix-blend-screen" style={{ background: token.color }} />

                                <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
                                    <div
                                        className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] text-white font-bold text-2xl shadow-xl outline-none"
                                        style={{
                                            backgroundColor: token.color,
                                            boxShadow: `0 0 30px ${token.color}50, inset 0 2px 5px rgba(255,255,255,0.3)`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-[1.25rem] pointer-events-none" />
                                        {token.ticker.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h1
                                                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                                                style={{ fontFamily: "var(--font-heading)" }}
                                            >
                                                {token.name}
                                            </h1>
                                            <span className="px-2.5 py-1 uppercase text-[11px] font-bold tracking-widest bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-md text-[var(--color-text-secondary)]">
                                                ${token.ticker}
                                            </span>
                                        </div>
                                        <p className="text-[14px] text-[var(--color-text-secondary)] max-w-sm font-light mt-2 leading-relaxed">
                                            {token.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full md:w-auto flex md:flex-col items-end justify-between md:justify-center relative z-10 pt-4 md:pt-0 border-t md:border-t-0 border-[rgba(255,255,255,0.05)]">
                                    <p
                                        className="text-3xl sm:text-4xl font-bold text-white tracking-tighter"
                                        style={{ fontFamily: "var(--font-heading)", textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                                    >
                                        ${token.price.toFixed(4)}
                                    </p>
                                    <div
                                        className={`mt-2 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-bold tracking-wide uppercase shadow-inner border backdrop-blur-md ${isPositive
                                            ? "bg-[rgba(0,245,212,0.1)] text-[#00F5D4] border-[#00F5D4]/20"
                                            : "bg-[rgba(241,91,181,0.1)] text-[#F15BB5] border-[#F15BB5]/20"
                                            }`}
                                    >
                                        {isPositive ? <TrendingUp size={14} strokeWidth={2.5} /> : <TrendingDown size={14} strokeWidth={2.5} />}
                                        {isPositive ? "+" : ""}
                                        {token.change24h}% <span className="text-[10px] opacity-70">(24H)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-6 lg:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-[16px] font-bold text-white uppercase tracking-wider flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                                    <Activity size={18} className="text-[#00BBF9]" />
                                    Market Activity
                                </h2>
                                <div className="flex items-center gap-1.5 bg-[rgba(255,255,255,0.02)] p-1 rounded-xl border border-[rgba(255,255,255,0.05)]">
                                    {["1H", "4H", "1D", "1W", "1M"].map((t, i) => (
                                        <button
                                            key={t}
                                            className={`rounded-lg px-3 py-1.5 text-[12px] font-bold transition-all duration-300 ${i === 2
                                                ? "bg-[rgba(157,78,221,0.2)] text-white shadow-[0_0_10px_rgba(157,78,221,0.3)] border border-[rgba(157,78,221,0.4)]"
                                                : "text-[var(--color-text-tertiary)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <PriceChart />
                        </div>

                        {/* Community Feed */}
                        <div className="bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-6 lg:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                                <h2
                                    className="text-[18px] font-bold text-white tracking-tight"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    Social Intel
                                </h2>
                                <div className="flex items-center gap-2">
                                    {["Discussion feed", "Top Holders", "Recent Txns"].map((tab, i) => (
                                        <button
                                            key={tab}
                                            className={`rounded-full px-4 py-2 text-[12px] font-bold tracking-wide uppercase transition-all duration-300 border ${i === 0
                                                ? "bg-[rgba(0,187,249,0.1)] text-[#00BBF9] border-[rgba(0,187,249,0.2)]"
                                                : "bg-transparent text-[var(--color-text-tertiary)] border-transparent hover:border-[rgba(255,255,255,0.1)] hover:text-white"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-5">
                                {feedPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="group rounded-2xl bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.03)] p-5 transition-all duration-300 hover:bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[0.8rem] bg-gradient-to-br from-[rgba(157,78,221,0.2)] to-[rgba(0,187,249,0.2)] border border-[rgba(255,255,255,0.05)] text-[14px] font-bold text-white">
                                                {post.author.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[14px] font-bold text-white">
                                                            {post.author}
                                                        </span>
                                                        {post.tokenGated && (
                                                            <span className="inline-flex items-center gap-1 rounded-md bg-[rgba(157,78,221,0.15)] border border-[rgba(157,78,221,0.3)] px-2 py-0.5 text-[10px] font-bold text-[#9D4EDD] uppercase tracking-wider">
                                                                <Lock size={10} />
                                                                Verified
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-[12px] text-[var(--color-text-tertiary)] font-medium">
                                                        {post.timestamp}
                                                    </span>
                                                </div>
                                                <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed font-light mb-4">
                                                    {post.content}
                                                </p>
                                                <div className="flex items-center gap-6">
                                                    <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-text-tertiary)] hover:text-[#F15BB5] transition-colors">
                                                        <Heart size={16} />
                                                        {post.likes}
                                                    </button>
                                                    <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-text-tertiary)] hover:text-[#00BBF9] transition-colors">
                                                        <MessageCircle size={16} />
                                                        {post.comments}
                                                    </button>
                                                    <button className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-text-tertiary)] hover:text-white transition-colors ml-auto md:ml-0">
                                                        <Share2 size={16} />
                                                        Share
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ====== RIGHT: Trade Panel + Stats ====== */}
                    <div className="space-y-8">
                        {/* Trade panel */}
                        <div className="bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-6 lg:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] sticky top-[100px]">
                            <h2
                                className="text-[18px] font-bold text-white mb-6 uppercase tracking-wider text-center"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Execute Trade
                            </h2>

                            {/* Buy/Sell toggle */}
                            <div className="flex rounded-2xl bg-[rgba(5,5,15,0.6)] border border-[rgba(255,255,255,0.05)] p-1.5 mb-8 shadow-inner">
                                <button className="flex-1 rounded-[1rem] bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] py-2.5 text-[14px] font-bold text-[#050510] transition-all shadow-[0_0_20px_rgba(0,245,212,0.3)]">
                                    BUY
                                </button>
                                <button className="flex-1 rounded-[1rem] py-2.5 text-[14px] font-bold text-[var(--color-text-secondary)] transition-all hover:text-white hover:bg-[rgba(255,255,255,0.05)]">
                                    SELL
                                </button>
                            </div>

                            {/* Amount input */}
                            <div className="mb-6 relative group">
                                <label className="flex items-center justify-between text-[12px] font-semibold text-[var(--color-text-secondary)] mb-2 uppercase tracking-wide">
                                    <span>You Pay (STX)</span>
                                    <span className="flex items-center gap-1 text-[#00BBF9] cursor-pointer hover:underline">
                                        Bal: 1,234.56
                                    </span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-20 blur-sm pointer-events-none" />
                                    <div className="relative flex items-center bg-[rgba(5,5,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-1 transition-all duration-300 group-focus-within:border-[rgba(255,255,255,0.2)] group-focus-within:bg-[rgba(10,10,20,0.8)] shadow-inner">
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            className="w-full bg-transparent border-none outline-none py-3 text-[20px] font-bold text-white tracking-tight"
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                        />
                                        <div className="flex items-center gap-2 pl-3 border-l border-[rgba(255,255,255,0.1)] shrink-0">
                                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-[10px] font-bold text-white">S</div>
                                            <span className="font-bold text-white text-[15px]">STX</span>
                                            <ChevronDown size={14} className="text-[var(--color-text-tertiary)]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* You receive */}
                            <div className="mb-8 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-5 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#9D4EDD] to-[#00BBF9] h-full" />

                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[13px] text-[var(--color-text-secondary)] font-medium">
                                        Estimated Output
                                    </span>
                                    <span className="text-[18px] font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                        ~238,095
                                    </span>
                                </div>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[12px] text-[var(--color-text-tertiary)]">
                                        Price impact
                                    </span>
                                    <span className="text-[12px] font-bold text-[#00F5D4]">
                                        0.12%
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[12px] text-[var(--color-text-tertiary)]">
                                        Slippage Tolerance
                                    </span>
                                    <span className="text-[12px] font-bold text-white">
                                        0.5%
                                    </span>
                                </div>
                            </div>

                            {/* Buy button */}
                            <button className="w-full relative group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl overflow-hidden outline-none transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,187,249,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00BBF9] to-[#9D4EDD] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 text-[16px] font-bold text-white tracking-widest uppercase">
                                    Confirm Swap
                                </span>
                            </button>
                        </div>

                        {/* Token stats */}
                        <div className="bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-6 lg:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <h3
                                className="text-[16px] font-bold text-white mb-6 uppercase tracking-wider"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Protocol Metrics
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Coins, label: "Market Cap", value: `$${(token.marketCap / 1000).toFixed(0)}K` },
                                    { icon: Activity, label: "Realtime Volume", value: `$${(token.volume24h / 1000).toFixed(0)}K` },
                                    { icon: Users, label: "Total Holders", value: token.holders.toLocaleString() },
                                    { icon: BarChart3, label: "Max Supply", value: `${(token.totalSupply / 1000000).toFixed(0)}M` },
                                ].map((stat, i) => (
                                    <div key={stat.label} className="group flex items-center justify-between p-3 rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors border border-transparent hover:border-[rgba(255,255,255,0.05)]">
                                        <div className="flex items-center gap-3 text-[13px] font-medium text-[var(--color-text-secondary)]">
                                            <div className="p-1.5 rounded-lg bg-[rgba(255,255,255,0.03)] text-[var(--color-text-tertiary)] group-hover:text-[#00BBF9] group-hover:bg-[rgba(0,187,249,0.1)] transition-colors">
                                                <stat.icon size={16} />
                                            </div>
                                            {stat.label}
                                        </div>
                                        <span className="text-[14px] font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
