"use client";

import Link from "next/link";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-purple)] text-white font-bold text-sm">
                        P
                    </div>
                    <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        Pegged
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/explore"
                        className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
                    >
                        Explore
                    </Link>
                    <Link
                        href="/launch"
                        className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
                    >
                        Launch
                    </Link>
                    <Link
                        href="/bots"
                        className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple)]"
                    >
                        Bots
                    </Link>
                </div>

                {/* CTA */}
                <div className="hidden items-center gap-3 md:flex">
                    <button className="flex items-center gap-2 rounded-full bg-[var(--color-purple)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all hover:bg-[var(--color-purple-dark)] hover:shadow-purple-300 active:scale-[0.98]">
                        <Wallet size={16} />
                        Connect Wallet
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-[var(--color-text-secondary)]"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t border-[var(--color-border)] bg-white px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/explore"
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-purple)]"
                            onClick={() => setMobileOpen(false)}
                        >
                            Explore
                        </Link>
                        <Link
                            href="/launch"
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-purple)]"
                            onClick={() => setMobileOpen(false)}
                        >
                            Launch
                        </Link>
                        <Link
                            href="/bots"
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-purple)]"
                            onClick={() => setMobileOpen(false)}
                        >
                            Bots
                        </Link>
                        <button className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-purple)] px-5 py-2.5 text-sm font-semibold text-white">
                            <Wallet size={16} />
                            Connect Wallet
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
