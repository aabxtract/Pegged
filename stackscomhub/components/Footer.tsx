import Link from "next/link";
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from "react-icons/fa";
import { Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-[var(--color-border)] bg-[rgba(8,8,26,0.8)]">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--color-purple)]/30 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-purple-500/20">
                                <Sparkles size={16} />
                            </div>
                            <span
                                className="text-lg font-bold text-[var(--color-text-primary)]"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Pegged
                            </span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
                            The community token launchpad and social trading hub built on
                            Stacks, secured by Bitcoin.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold mb-5 text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: "/explore", label: "Explore Tokens" },
                                { href: "/launch", label: "Launch Token" },
                                { href: "/bots", label: "Bot Hub" },
                                { href: "/dashboard", label: "Dashboard" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold mb-5 text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {["Documentation", "API Reference", "Clarity Contracts", "Community"].map((label) => (
                                <li key={label}>
                                    <a
                                        href="#"
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors duration-300"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-sm font-semibold mb-5 text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                            Community
                        </h4>
                        <div className="flex gap-2.5">
                            {[
                                { icon: FaTwitter, label: "Twitter" },
                                { icon: FaTelegram, label: "Telegram" },
                                { icon: FaDiscord, label: "Discord" },
                                { icon: FaGithub, label: "GitHub" },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] hover:bg-[var(--color-purple-light)] hover:shadow-lg hover:shadow-purple-500/10"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
                    <p className="text-xs text-[var(--color-text-tertiary)]">
                        © 2026 Pegged. Built on Stacks, secured by Bitcoin.
                    </p>
                    <div className="flex gap-5">
                        {["Terms", "Privacy", "Cookie Policy"].map((label) => (
                            <a
                                key={label}
                                href="#"
                                className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-purple)] transition-colors duration-300"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
