"use client";

import Link from "next/link";
import { Wallet, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[rgba(5,5,10,0.6)] backdrop-blur-2xl transition-all duration-300">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group outline-none">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-[0.8rem] bg-gradient-to-br from-[#9D4EDD] to-[#00BBF9] text-white shadow-[0_0_20px_rgba(157,78,221,0.3)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,187,249,0.5)] group-hover:scale-105">
                        <Sparkles size={18} strokeWidth={2.5} className="drop-shadow-md" />
                        <div className="absolute inset-0 rounded-[0.8rem] bg-gradient-to-br from-white/20 to-transparent" />
                    </div>
                    <span
                        className="text-[22px] font-bold tracking-tight text-white transition-colors group-hover:text-[#00BBF9]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Pegged
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden h-full items-center gap-1 md:flex">
                    {[
                        { href: "/explore", label: "Explore" },
                        { href: "/launch", label: "Launch" },
                        { href: "/bots", label: "Bots" },
                        { href: "/dashboard", label: "Dashboard" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative h-full flex items-center px-5 text-[14.5px] font-medium text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-white group outline-none"
                        >
                            {link.label}
                            {/* Hover indicator glow */}
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] blur-[1px] -translate-x-1/2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-1/2 w-0 h-px bg-white -translate-x-1/2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden items-center gap-3 md:flex">
                    <button className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-2.5 text-[14px] font-bold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(0,187,249,0.3)] outline-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <Wallet size={16} className="relative z-10 text-white" />
                        <span className="relative z-10 tracking-wide">Connect Wallet</span>
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-white transition-colors outline-none rounded-lg hover:bg-white/5"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(5,5,10,0.95)] backdrop-blur-3xl px-4 py-6 md:hidden animate-fade-in-up">
                    <div className="flex flex-col gap-2">
                        {[
                            { href: "/explore", label: "Explore Markets" },
                            { href: "/launch", label: "Launch Token" },
                            { href: "/bots", label: "Trading Bots" },
                            { href: "/dashboard", label: "User Dashboard" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-5 py-3.5 text-[15px] font-medium text-[var(--color-text-secondary)] hover:text-white hover:bg-white/[0.04] rounded-xl transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="relative flex items-center justify-center gap-2.5 px-5 py-4 text-[15px] font-bold text-white rounded-xl mt-4 overflow-hidden shadow-[0_0_20px_rgba(157,78,221,0.2)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9]" />
                            <Wallet size={18} className="relative z-10" />
                            <span className="relative z-10 tracking-wide">Connect Wallet</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
