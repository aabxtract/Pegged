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
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
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
            <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-300 hover:border-[var(--color-purple)]/30 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1">
                {/* Top row: icon + ticker + change */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold text-sm"
                            style={{ backgroundColor: token.color }}
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
                        className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${isPositive
                            ? "bg-green-50 text-[var(--color-green)]"
                            : "bg-red-50 text-[var(--color-red)]"
                            }`}
                    >
                        {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {isPositive ? "+" : ""}
                        {token.change24h}%
                    </div>
                </div>

                {/* Price + chart */}
                <div className="flex items-end justify-between mb-3">
                    <div>
                        <p className="text-lg font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                            ${token.price.toFixed(4)}
                        </p>
                    </div>
                    <MiniSparkline
                        data={token.sparkline}
                        color={isPositive ? "var(--color-green)" : "var(--color-red)"}
                    />
                </div>

                {/* Bottom: holders + mcap */}
                <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                    <div className="flex items-center gap-1">
                        <Users size={12} />
                        {token.holders.toLocaleString()} holders
                    </div>
                    <span>MCap ${(token.marketCap / 1000).toFixed(0)}K</span>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${token.color}10, transparent, ${token.color}08)`,
                    }}
                />
            </div>
        </Link>
    );
}
