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
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
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
                            stroke="rgba(139,92,246,0.08)"
                            strokeWidth="1"
                        />
                        <text
                            x={w - padding + 5}
                            y={y + 4}
                            fontSize="9"
                            fill="#5A5A78"
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
                const color = green ? "#34D399" : "#F87171";
                const bodyTop = Math.min(c.o, c.c);
                const bodyBot = Math.max(c.o, c.c);
                const scale = (h - padding * 2) / 60;

                return (
                    <g key={i}>
                        <line
                            x1={x}
                            y1={h - padding - (c.h - 50) * scale}
                            x2={x}
                            y2={h - padding - (c.l - 50) * scale}
                            stroke={color}
                            strokeWidth="1.5"
                        />
                        <rect
                            x={x - candleW * 0.3}
                            y={h - padding - (bodyBot - 50) * scale}
                            width={candleW * 0.6}
                            height={Math.max((bodyBot - bodyTop) * scale, 2)}
                            rx="2"
                            fill={color}
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
                        rx="1"
                        fill={green ? "#34D399" : "#F87171"}
                        opacity="0.15"
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
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Back */}
                <Link
                    href="/explore"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] mb-6 transition-colors"
                >
                    <ArrowLeft size={14} />
                    Back to Explore
                </Link>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* ====== LEFT: Chart + Feed ====== */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Token header */}
                        <div className="glass-card rounded-2xl p-6">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-xl text-white font-bold text-lg shadow-lg"
                                        style={{
                                            backgroundColor: token.color,
                                            boxShadow: `0 4px 16px -2px ${token.color}40`,
                                        }}
                                    >
                                        {token.ticker.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h1
                                                className="text-xl font-bold text-[var(--color-text-primary)]"
                                                style={{ fontFamily: "var(--font-heading)" }}
                                            >
                                                {token.name}
                                            </h1>
                                            <span className="text-sm text-[var(--color-text-tertiary)]">
                                                ${token.ticker}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                                            {token.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p
                                        className="text-2xl font-bold text-[var(--color-text-primary)]"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        ${token.price.toFixed(4)}
                                    </p>
                                    <div
                                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${isPositive
                                                ? "bg-[var(--color-green-dim)] text-[var(--color-green)]"
                                                : "bg-[var(--color-red-dim)] text-[var(--color-red)]"
                                            }`}
                                    >
                                        {isPositive ? (
                                            <TrendingUp size={12} />
                                        ) : (
                                            <TrendingDown size={12} />
                                        )}
                                        {isPositive ? "+" : ""}
                                        {token.change24h}% (24h)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="glass-card rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
                                    Price Chart
                                </h2>
                                <div className="flex items-center gap-1">
                                    {["1H", "4H", "1D", "1W", "1M"].map((t, i) => (
                                        <button
                                            key={t}
                                            className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all duration-300 ${i === 2
                                                    ? "bg-[var(--color-purple)] text-white"
                                                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-purple-light)] hover:text-[var(--color-purple)]"
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
                        <div className="glass-card rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2
                                    className="text-sm font-semibold text-[var(--color-text-primary)]"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    Community Feed
                                </h2>
                                <div className="flex items-center gap-1">
                                    {["Feed", "Holders", "Txns"].map((tab, i) => (
                                        <button
                                            key={tab}
                                            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-300 ${i === 0
                                                    ? "bg-[var(--color-purple-light)] text-[var(--color-purple)]"
                                                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-purple)]"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {feedPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="rounded-xl border border-[var(--color-border)] p-4 transition-all duration-300 hover:bg-white/[0.02] hover:border-[var(--color-border-hover)]"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-purple-light)] text-xs font-bold text-[var(--color-purple)]">
                                                {post.author.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                                                        {post.author}
                                                    </span>
                                                    {post.tokenGated && (
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-purple-light)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-purple)]">
                                                            <Lock size={8} />
                                                            Gated
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-[var(--color-text-tertiary)]">
                                                        {post.timestamp}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                    {post.content}
                                                </p>
                                                <div className="flex items-center gap-4 mt-3">
                                                    <button className="flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-red)] transition-colors">
                                                        <Heart size={14} />
                                                        {post.likes}
                                                    </button>
                                                    <button className="flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-purple)] transition-colors">
                                                        <MessageCircle size={14} />
                                                        {post.comments}
                                                    </button>
                                                    <button className="flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-cyan)] transition-colors">
                                                        <Share2 size={14} />
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
                    <div className="space-y-6">
                        {/* Trade panel */}
                        <div className="glass-card rounded-2xl p-6 sticky top-20">
                            <h2
                                className="text-sm font-semibold text-[var(--color-text-primary)] mb-4"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Trade ${token.ticker}
                            </h2>

                            {/* Buy/Sell toggle */}
                            <div className="flex rounded-xl bg-white/[0.03] border border-[var(--color-border)] p-1 mb-5">
                                <button className="flex-1 rounded-lg bg-[var(--color-green)] py-2 text-sm font-semibold text-white transition-all shadow-lg shadow-emerald-500/20">
                                    Buy
                                </button>
                                <button className="flex-1 rounded-lg py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-text-primary)]">
                                    Sell
                                </button>
                            </div>

                            {/* Amount input */}
                            <div className="mb-4">
                                <label className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] mb-1.5">
                                    <span>Amount (STX)</span>
                                    <span>Balance: 1,234.56 STX</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="input-field w-full px-4 py-3 text-sm"
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-[var(--color-purple-light)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-purple)] hover:bg-[var(--color-purple)] hover:text-white transition-all">
                                        MAX
                                    </button>
                                </div>
                            </div>

                            {/* You receive */}
                            <div className="mb-5 rounded-xl bg-white/[0.03] border border-[var(--color-border)] p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-[var(--color-text-secondary)]">
                                        You receive
                                    </span>
                                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                                        ~238,095 ${token.ticker}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-[var(--color-text-secondary)]">
                                        Price impact
                                    </span>
                                    <span className="text-xs font-medium text-[var(--color-green)]">
                                        ~0.12%
                                    </span>
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-xs text-[var(--color-text-secondary)]">
                                        Slippage tolerance
                                    </span>
                                    <span className="text-xs font-medium text-[var(--color-text-primary)]">
                                        0.5%
                                    </span>
                                </div>
                            </div>

                            {/* Buy button */}
                            <button className="w-full rounded-xl bg-[var(--color-green)] py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/30 hover:brightness-110 active:scale-[0.98]">
                                Buy ${token.ticker}
                            </button>
                        </div>

                        {/* Token stats */}
                        <div className="glass-card rounded-2xl p-6">
                            <h3
                                className="text-sm font-semibold text-[var(--color-text-primary)] mb-4"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Token Stats
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { icon: Coins, label: "Market Cap", value: `$${(token.marketCap / 1000).toFixed(0)}K` },
                                    { icon: Users, label: "Holders", value: token.holders.toLocaleString() },
                                    { icon: BarChart3, label: "24h Volume", value: `$${(token.volume24h / 1000).toFixed(0)}K` },
                                    { icon: Coins, label: "Total Supply", value: `${(token.totalSupply / 1000000).toFixed(0)}M` },
                                ].map((stat, i) => (
                                    <div key={stat.label}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                                                <stat.icon size={14} />
                                                {stat.label}
                                            </div>
                                            <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                                                {stat.value}
                                            </span>
                                        </div>
                                        {i < 3 && <div className="divider mt-3" />}
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
