"use client";

import { BotItem } from "@/lib/mock-data";
import { Star, Download, ExternalLink } from "lucide-react";

export default function BotCard({ bot }: { bot: BotItem }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-300 hover:border-[var(--color-purple)]/30 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold text-sm"
                        style={{ backgroundColor: bot.color }}
                    >
                        {bot.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                            {bot.name}
                        </h3>
                        <span className="inline-block rounded-full bg-[var(--color-purple-light)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-purple)]">
                            {bot.category}
                        </span>
                    </div>
                </div>
                <a
                    href={bot.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                >
                    <ExternalLink size={16} />
                </a>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2">
                {bot.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <Star size={12} className="text-[var(--color-orange)] fill-[var(--color-orange)]" />
                        {bot.stars}
                    </div>
                    <div className="flex items-center gap-1">
                        <Download size={12} />
                        {bot.installs.toLocaleString()}
                    </div>
                </div>
                <span className="text-[var(--color-text-secondary)]">by {bot.author}</span>
            </div>
        </div>
    );
}
