import { trendingTokens } from "@/lib/mock-data";
import TokenCard from "@/components/TokenCard";
import {
    TrendingUp,
    Wallet,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    Rocket,
} from "lucide-react";
import { SiBitcoin } from "react-icons/si";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Hero banner */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1E1B4B] via-[#12122B] to-[#0F0A2A] px-6 py-8 sm:px-10 sm:py-10 relative overflow-hidden border border-[rgba(139,92,246,0.12)]">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06)_0%,transparent_70%)] translate-y-1/2 pointer-events-none" />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }} />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-white/50 mb-1">Welcome back 👋</p>
                        <h1
                            className="text-xl sm:text-2xl font-bold text-white mb-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Track your community tokens with ease
                        </h1>
                        <p className="text-sm text-white/50 max-w-md">
                            Monitor your portfolio, discover trending tokens, and trade
                            directly from your dashboard.
                        </p>
                        <Link
                            href="/explore"
                            className="btn-primary inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-sm"
                        >
                            Explore tokens
                        </Link>
                    </div>

                    {/* Illustration */}
                    <div className="hidden sm:block flex-shrink-0">
                        <svg
                            viewBox="0 0 200 160"
                            fill="none"
                            className="w-48 h-auto"
                        >
                            <circle cx="100" cy="70" r="40" fill="rgba(139,92,246,0.1)" />
                            <circle cx="100" cy="70" r="28" fill="rgba(139,92,246,0.08)" />
                            <g>
                                <circle cx="70" cy="50" r="20" fill="#FBBF24" opacity="0.9" />
                                <text x="70" y="56" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#92400E">₿</text>
                                <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="3s" repeatCount="indefinite" />
                            </g>
                            <g>
                                <circle cx="130" cy="50" r="18" fill="#8B5CF6" opacity="0.9" />
                                <text x="130" y="56" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">S</text>
                                <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2.5s" repeatCount="indefinite" />
                            </g>
                            <g>
                                <circle cx="100" cy="105" r="15" fill="#22D3EE" opacity="0.8" />
                                <text x="100" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">P</text>
                                <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3.5s" repeatCount="indefinite" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        icon: Wallet,
                        label: "Portfolio Value",
                        value: "$8,782.09",
                        change: "+12.5%",
                        positive: true,
                        iconColor: "#8B5CF6",
                        bgColor: "var(--color-purple-light)",
                    },
                    {
                        icon: TrendingUp,
                        label: "Total Investment",
                        value: "$6,420.00",
                        change: "+2.3%",
                        positive: true,
                        iconColor: "#34D399",
                        bgColor: "var(--color-green-dim)",
                    },
                    {
                        icon: BarChart3,
                        label: "24h P&L",
                        value: "+$342.52",
                        change: "-1.8%",
                        positive: false,
                        iconColor: "#FB923C",
                        bgColor: "var(--color-orange-dim)",
                    },
                    {
                        icon: SiBitcoin,
                        label: "Tokens Held",
                        value: "12",
                        change: null,
                        positive: true,
                        iconColor: "#22D3EE",
                        bgColor: "var(--color-cyan-dim)",
                    },
                ].map((stat) => (
                    <div key={stat.label} className="glass-card rounded-2xl p-5">
                        <div className="flex items-center justify-between mb-3">
                            <div
                                className="flex h-9 w-9 items-center justify-center rounded-lg"
                                style={{ backgroundColor: stat.bgColor }}
                            >
                                <stat.icon size={18} style={{ color: stat.iconColor }} />
                            </div>
                            {stat.change && (
                                <div
                                    className={`flex items-center gap-1 text-xs font-medium ${stat.positive ? "text-[var(--color-green)]" : "text-[var(--color-red)]"
                                        }`}
                                >
                                    {stat.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                    {stat.change}
                                </div>
                            )}
                        </div>
                        <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                            {stat.label}
                        </p>
                        <p
                            className="text-xl font-bold text-[var(--color-text-primary)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom section: Trending + Transactions */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Trending tokens */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2
                            className="text-sm font-semibold text-[var(--color-text-primary)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Trending Tokens
                        </h2>
                        <Link
                            href="/explore"
                            className="text-xs font-medium text-[var(--color-purple)] hover:text-[var(--color-purple-dark)] transition-colors"
                        >
                            View all
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {trendingTokens.slice(0, 4).map((token) => (
                            <TokenCard key={token.id} token={token} />
                        ))}
                    </div>
                </div>

                {/* Recent transactions */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2
                            className="text-sm font-semibold text-[var(--color-text-primary)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Recent Activity
                        </h2>
                    </div>
                    <div className="glass-card rounded-2xl divide-y divide-[var(--color-border)]">
                        {[
                            {
                                type: "Buy",
                                token: "SATS",
                                amount: "+5,000",
                                value: "$21.00",
                                color: "#F97316",
                                icon: ArrowUpRight,
                                textColor: "text-[var(--color-green)]",
                            },
                            {
                                type: "Sell",
                                token: "STXP",
                                amount: "-2,000",
                                value: "$3.60",
                                color: "#34D399",
                                icon: ArrowDownRight,
                                textColor: "text-[var(--color-red)]",
                            },
                            {
                                type: "Buy",
                                token: "BTCG",
                                amount: "+10,000",
                                value: "$91.00",
                                color: "#8B5CF6",
                                icon: ArrowUpRight,
                                textColor: "text-[var(--color-green)]",
                            },
                            {
                                type: "Launch",
                                token: "NK",
                                amount: "Created",
                                value: "-",
                                color: "#F87171",
                                icon: Rocket,
                                textColor: "text-[var(--color-purple)]",
                            },
                            {
                                type: "Buy",
                                token: "ORD",
                                amount: "+3,500",
                                value: "$12.25",
                                color: "#22D3EE",
                                icon: ArrowUpRight,
                                textColor: "text-[var(--color-green)]",
                            },
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-xs font-bold shadow-lg"
                                        style={{
                                            backgroundColor: tx.color,
                                            boxShadow: `0 4px 10px -2px ${tx.color}30`,
                                        }}
                                    >
                                        {tx.token.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                                            {tx.type} ${tx.token}
                                        </p>
                                        <p className="text-xs text-[var(--color-text-tertiary)]">
                                            {tx.amount}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`text-sm font-medium ${tx.textColor}`}>
                                        {tx.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
