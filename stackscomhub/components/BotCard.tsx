"use client";

import { BotItem } from "@/lib/mock-data";
import { Star, Download, ExternalLink } from "lucide-react";

export default function BotCard({ bot }: { bot: BotItem }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl glass-card p-5">
            {/* Ambient glow */}
            <div
                className="absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none blur-xl"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${bot.color}20, transparent 70%)`,
                }}
            />

            {/* Header */}
            <div className="relative flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold text-sm shadow-lg"
                        style={{
                            backgroundColor: bot.color,
                            boxShadow: `0 4px 12px -2px ${bot.color}40`,
                        }}
                    >
                        {bot.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
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
                    className="text-[var(--color-text-tertiary)] hover:text-[var(--color-purple)] transition-colors duration-300"
                >
                    <ExternalLink size={16} />
                </a>
            </div>

            {/* Description */}
            <p className="relative text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2">
                {bot.description}
            </p>

            {/* Footer */}
            <div className="relative flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Star size={12} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
                        {bot.stars}
                    </div>
                    <div className="flex items-center gap-1">
                        <Download size={12} />
                        {bot.installs.toLocaleString()}
                    </div>
                </div>
                <span className="text-[var(--color-text-tertiary)]">by {bot.author}</span>
            </div>
        </div>
    );
}
