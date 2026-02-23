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
            <div className="rounded-2xl bg-[var(--color-purple)] px-6 py-8 sm:px-10 sm:py-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
                <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-white/70 mb-1">Welcome back 👋</p>
                        <h1
                            className="text-xl sm:text-2xl font-bold text-white mb-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Track your community tokens with ease
                        </h1>
                        <p className="text-sm text-white/70 max-w-md">
                            Monitor your portfolio, discover trending tokens, and trade
                            directly from your dashboard.
                        </p>
                        <Link
                            href="/explore"
                            className="inline-flex items-center gap-2 mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--color-purple)] transition-all hover:shadow-lg active:scale-[0.98]"
                        >
                            Explore tokens
                        </Link>
                    </div>

                    {/* Illustration placeholder — isometric tokens */}
                    <div className="hidden sm:block flex-shrink-0">
                        <svg
                            viewBox="0 0 200 160"
                            fill="none"
                            className="w-48 h-auto"
                        >
                            <circle cx="100" cy="70" r="35" fill="white" opacity="0.15" />
                            <circle cx="100" cy="70" r="25" fill="white" opacity="0.2" />
                            <g>
                                <circle cx="70" cy="50" r="20" fill="#FBBF24" opacity="0.9" />
                                <text
                                    x="70"
                                    y="56"
                                    textAnchor="middle"
                                    fontSize="16"
                                    fontWeight="bold"
                                    fill="#92400E"
                                >
                                    ₿
                                </text>
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="0,0;0,-6;0,0"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </g>
                            <g>
                                <circle cx="130" cy="50" r="18" fill="white" opacity="0.9" />
                                <text
                                    x="130"
                                    y="56"
                                    textAnchor="middle"
                                    fontSize="14"
                                    fontWeight="bold"
                                    fill="#7C3AED"
                                >
                                    S
                                </text>
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="0,0;0,-4;0,0"
                                    dur="2.5s"
                                    repeatCount="indefinite"
                                />
                            </g>
                            <g>
                                <circle cx="100" cy="100" r="15" fill="#22D3EE" opacity="0.8" />
                                <text
                                    x="100"
                                    y="105"
                                    textAnchor="middle"
                                    fontSize="12"
                                    fontWeight="bold"
                                    fill="white"
                                >
                                    P
                                </text>
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="0,0;0,-5;0,0"
                                    dur="3.5s"
                                    repeatCount="indefinite"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-purple-light)]">
                            <Wallet size={18} className="text-[var(--color-purple)]" />
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium text-[var(--color-green)]">
                            <ArrowUpRight size={12} />
                            +12.5%
                        </div>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                        Portfolio Value
                    </p>
                    <p
                        className="text-xl font-bold text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        $8,782.09
                    </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                            <TrendingUp size={18} className="text-[var(--color-green)]" />
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium text-[var(--color-green)]">
                            <ArrowUpRight size={12} />
                            +2.3%
                        </div>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                        Total Investment
                    </p>
                    <p
                        className="text-xl font-bold text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        $6,420.00
                    </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50">
                            <BarChart3 size={18} className="text-[var(--color-orange)]" />
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium text-[var(--color-red)]">
                            <ArrowDownRight size={12} />
                            -1.8%
                        </div>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                        24h P&L
                    </p>
                    <p
                        className="text-xl font-bold text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        +$342.52
                    </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50">
                            <SiBitcoin size={18} className="text-[var(--color-cyan)]" />
                        </div>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                        Tokens Held
                    </p>
                    <p
                        className="text-xl font-bold text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        12
                    </p>
                </div>
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
                            className="text-xs font-medium text-[var(--color-purple)] hover:underline"
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
                    <div className="rounded-2xl border border-[var(--color-border)] bg-white divide-y divide-[var(--color-border)]">
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
                                color: "#22C55E",
                                icon: ArrowDownRight,
                                textColor: "text-[var(--color-red)]",
                            },
                            {
                                type: "Buy",
                                token: "BTCG",
                                amount: "+10,000",
                                value: "$91.00",
                                color: "#7C3AED",
                                icon: ArrowUpRight,
                                textColor: "text-[var(--color-green)]",
                            },
                            {
                                type: "Launch",
                                token: "NK",
                                amount: "Created",
                                value: "-",
                                color: "#EF4444",
                                icon: Rocket,
                                textColor: "text-[var(--color-purple)]",
                            },
                            {
                                type: "Buy",
                                token: "ORD",
                                amount: "+3,500",
                                value: "$12.25",
                                color: "#06B6D4",
                                icon: ArrowUpRight,
                                textColor: "text-[var(--color-green)]",
                            },
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-xs font-bold"
                                        style={{ backgroundColor: tx.color }}
                                    >
                                        {tx.token.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                                            {tx.type} ${tx.token}
                                        </p>
                                        <p className="text-xs text-[var(--color-text-secondary)]">
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
