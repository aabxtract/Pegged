"use client";

import { Token } from "@/lib/mock-data";
import Link from "next/link";
import { TrendingUp, TrendingDown, Users } from "lucide-react";

let sparklineIdCounter = 0;

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const w = 80;
    const h = 32;
    const gradId = `spark-grad-${sparklineIdCounter++}`;

    const points = data
        .map((v, i) => {
            const x = (i / (data.length - 1)) * w;
            const y = h - ((v - min) / range) * h;
            return `${x},${y}`;
        })
        .join(" ");

    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="flex-shrink-0">
            <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon
                points={`0,${h} ${points} ${w},${h}`}
                fill={`url(#${gradId})`}
            />
            <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function TokenCard({ token }: { token: Token }) {
    const isPositive = token.change24h >= 0;

    return (
        <Link href={`/token/${token.id}`}>
            <div className="group relative overflow-hidden rounded-2xl glass-card p-5">
                {/* Ambient glow on hover */}
                <div
                    className="absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none blur-xl"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${token.color}20, transparent 70%)`,
                    }}
                />

                {/* Top row: icon + ticker + change */}
                <div className="relative flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold text-sm shadow-lg"
                            style={{
                                backgroundColor: token.color,
                                boxShadow: `0 4px 12px -2px ${token.color}40`,
                            }}
                        >
                            {token.ticker.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                                {token.name}
                            </h3>
                            <p className="text-xs text-[var(--color-text-secondary)]">
                                ${token.ticker}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${isPositive
                                ? "bg-[var(--color-green-dim)] text-[var(--color-green)]"
                                : "bg-[var(--color-red-dim)] text-[var(--color-red)]"
                            }`}
                    >
                        {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {isPositive ? "+" : ""}
                        {token.change24h}%
                    </div>
                </div>

                {/* Price + chart */}
                <div className="relative flex items-end justify-between mb-3">
                    <div>
                        <p
                            className="text-lg font-bold text-[var(--color-text-primary)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            ${token.price.toFixed(4)}
                        </p>
                    </div>
                    <MiniSparkline
                        data={token.sparkline}
                        color={isPositive ? "var(--color-green)" : "var(--color-red)"}
                    />
                </div>

                {/* Bottom: holders + mcap */}
                <div className="relative flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                    <div className="flex items-center gap-1.5">
                        <Users size={12} />
                        {token.holders.toLocaleString()} holders
                    </div>
                    <span className="text-[var(--color-text-tertiary)]">MCap ${(token.marketCap / 1000).toFixed(0)}K</span>
                </div>
            </div>
        </Link>
    );
}
