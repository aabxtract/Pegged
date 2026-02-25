"use client";

import { BotItem } from "@/lib/mock-data";
import { Star, Download, ExternalLink } from "lucide-react";

export default function BotCard({ bot }: { bot: BotItem }) {
    return (
        <div className="group relative block outline-none">
            {/* Outer glow ring element visible on hover */}
            <div className="absolute -inset-0.5 rounded-[1.125rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md pointer-events-none" style={{
                background: `linear-gradient(135deg, ${bot.color}60, transparent, ${bot.color}20)`
            }} />

            <div className="relative overflow-hidden rounded-2xl glass-card p-5 h-full transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[rgba(20,20,35,0.7)] group-focus-visible:ring-2 group-focus-visible:ring-[var(--color-purple)]">

                {/* Ambient radial glow top-right corner */}
                <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-40 pointer-events-none blur-2xl"
                    style={{ background: bot.color }}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between mb-4 z-10">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] text-white font-bold text-[15px] shadow-lg transition-transform duration-500 group-hover:scale-[1.05]"
                            style={{
                                backgroundColor: bot.color,
                                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)`,
                                boxShadow: `0 8px 20px -4px ${bot.color}50, inset 0 1px 0 rgba(255,255,255,0.3)`,
                            }}
                        >
                            {bot.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] leading-tight mb-1 transition-colors group-hover:text-white">
                                {bot.name}
                            </h3>
                            <span className="badge-purple">
                                {bot.category}
                            </span>
                        </div>
                    </div>
                    <a
                        href={bot.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-tertiary)] hover:text-white transition-colors duration-300 bg-[rgba(255,255,255,0.03)] p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] border border-transparent hover:border-[rgba(255,255,255,0.1)]"
                    >
                        <ExternalLink size={16} />
                    </a>
                </div>

                {/* Description */}
                <p className="relative text-[13px] text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2 z-10">
                    {bot.description}
                </p>

                <div className="divider opacity-50 mb-4" />

                {/* Footer */}
                <div className="relative flex items-center justify-between z-10">
                    <div className="flex items-center gap-4 text-[13px] font-medium text-[var(--color-text-primary)]">
                        <div className="flex items-center gap-1.5 bg-[var(--color-card)] rounded-full px-2 py-1 border border-[var(--color-glass-border)]">
                            <Star size={12} className="text-[#FFB703] fill-[#FFB703]" />
                            {bot.stars}
                        </div>
                        <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)] hover:text-white transition-colors">
                            <Download size={12} />
                            {bot.installs.toLocaleString()}
                        </div>
                    </div>
                    <span className="text-[12px] font-medium text-[var(--color-text-tertiary)]">
                        by <span className="text-[var(--color-text-secondary)]">{bot.author}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
