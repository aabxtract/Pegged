"use client";

import Link from "next/link";
import { Wallet, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[rgba(8,8,26,0.75)] backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:shadow-purple-500/40 group-hover:scale-105">
                        <Sparkles size={16} />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
                    </div>
                    <span
                        className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Pegged
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-1 md:flex">
                    {[
                        { href: "/explore", label: "Explore" },
                        { href: "/launch", label: "Launch" },
                        { href: "/bots", label: "Bots" },
                        { href: "/dashboard", label: "Dashboard" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-text-primary)] rounded-lg hover:bg-white/[0.04]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden items-center gap-3 md:flex">
                    <button className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm">
                        <Wallet size={16} />
                        Connect Wallet
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t border-[var(--color-border)] bg-[var(--color-card-solid)] px-4 py-5 md:hidden animate-fade-in-up">
                    <div className="flex flex-col gap-2">
                        {[
                            { href: "/explore", label: "Explore" },
                            { href: "/launch", label: "Launch" },
                            { href: "/bots", label: "Bots" },
                            { href: "/dashboard", label: "Dashboard" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/[0.04] rounded-lg transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="btn-primary flex items-center justify-center gap-2 px-5 py-2.5 text-sm mt-2">
                            <Wallet size={16} />
                            Connect Wallet
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
