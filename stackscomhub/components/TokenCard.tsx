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
        <Link href={`/token/${token.id}`} className="block relative group outline-none">
            {/* Outer glow ring element visible on hover */}
            <div className="absolute -inset-0.5 rounded-[1.125rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md pointer-events-none" style={{
                background: `linear-gradient(135deg, ${token.color}60, transparent, ${token.color}20)`
            }} />

            <div className="relative overflow-hidden rounded-2xl glass-card p-5 h-full transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[rgba(20,20,35,0.7)] group-focus-visible:ring-2 group-focus-visible:ring-[var(--color-primary)]">

                {/* Ambient radial glow top-right corner */}
                <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-40 pointer-events-none blur-2xl"
                    style={{ background: token.color }}
                />

                {/* Top row: icon + ticker + change */}
                <div className="relative flex items-start justify-between mb-4 z-10">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] text-white font-bold text-[15px] shadow-lg transition-transform duration-500 group-hover:scale-[1.05]"
                            style={{
                                backgroundColor: token.color,
                                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)`,
                                boxShadow: `0 8px 20px -4px ${token.color}50, inset 0 1px 0 rgba(255,255,255,0.3)`,
                            }}
                        >
                            {token.ticker.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] leading-tight mb-0.5 transition-colors group-hover:text-white">
                                {token.name}
                            </h3>
                            <p className="text-[13px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">
                                ${token.ticker}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold tracking-wide uppercase shadow-inner ${isPositive
                            ? "bg-[rgba(0,245,212,0.1)] text-[#00F5D4] border border-[#00F5D4]/20"
                            : "bg-[rgba(241,91,181,0.1)] text-[#F15BB5] border border-[#F15BB5]/20"
                            }`}
                    >
                        {isPositive ? <TrendingUp size={12} strokeWidth={3} /> : <TrendingDown size={12} strokeWidth={3} />}
                        {isPositive ? "+" : ""}
                        {token.change24h}%
                    </div>
                </div>

                {/* Price + chart */}
                <div className="relative flex items-end justify-between mb-4 z-10">
                    <div>
                        <p className="text-[12px] font-medium text-[var(--color-text-secondary)] mb-0.5">Price</p>
                        <p
                            className="text-[20px] font-bold text-[var(--color-text-primary)] tracking-tight leading-none"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            ${token.price.toFixed(4)}
                        </p>
                    </div>
                    <div className="opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                        <MiniSparkline
                            data={token.sparkline}
                            color={isPositive ? "#00F5D4" : "#F15BB5"}
                        />
                    </div>
                </div>

                <div className="divider opacity-50 mb-4" />

                {/* Bottom: holders + mcap */}
                <div className="relative flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-secondary)]">
                        <Users size={14} className="text-[var(--color-text-tertiary)]" />
                        <span className="text-[var(--color-text-primary)]">{token.holders.toLocaleString()}</span>
                        <span className="text-[var(--color-text-tertiary)]">holders</span>
                    </div>
                    <div className="text-[13px] font-medium">
                        <span className="text-[var(--color-text-tertiary)]">MCap </span>
                        <span className="text-[var(--color-text-primary)]">${(token.marketCap / 1000).toFixed(0)}K</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
