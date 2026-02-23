import Link from "next/link";
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-purple)] text-white font-bold text-sm">
                                P
                            </div>
                            <span
                                className="text-lg font-bold"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Pegged
                            </span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                            The community token launchpad and social trading hub built on
                            Stacks, secured by Bitcoin.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                            Product
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    href="/explore"
                                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                                >
                                    Explore Tokens
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/launch"
                                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                                >
                                    Launch Token
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bots"
                                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                                >
                                    Bot Hub
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                            Resources
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                                >
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                                >
                                    Clarity Contracts
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                            Community
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] hover:shadow-sm"
                            >
                                <FaTwitter size={16} />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] hover:shadow-sm"
                            >
                                <FaTelegram size={16} />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] hover:shadow-sm"
                            >
                                <FaDiscord size={16} />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] hover:shadow-sm"
                            >
                                <FaGithub size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
                    <p className="text-xs text-[var(--color-text-secondary)]">
                        © 2026 Pegged. Built on Stacks, secured by Bitcoin.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-purple)] transition-colors"
                        >
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
