"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Compass,
    Rocket,
    Bot,
    Settings,
    Wallet,
    Bell,
    Search,
    ChevronRight,
    Sparkles,
} from "lucide-react";

const navItems = [
    { label: "Home", icon: Home, href: "/dashboard" },
    { label: "Explore", icon: Compass, href: "/explore" },
    { label: "Launch", icon: Rocket, href: "/launch" },
    { label: "Bots", icon: Bot, href: "/bots" },
    { label: "Settings", icon: Settings, href: "#" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-[var(--background)]">
            {/* Sidebar */}
            <aside className="hidden lg:flex lg:flex-col lg:w-60 border-r border-[var(--color-border)] bg-[rgba(12,12,30,0.8)] backdrop-blur-xl">
                {/* Logo */}
                <div className="flex items-center gap-2.5 px-5 py-5 border-b border-[var(--color-border)]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold text-sm shadow-lg shadow-purple-500/20">
                        <Sparkles size={16} />
                    </div>
                    <span
                        className="text-lg font-bold tracking-tight text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Pegged
                    </span>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 py-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-sm shadow-purple-500/20"
                                        : "text-[var(--color-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--color-text-primary)]"
                                    }`}
                            >
                                <item.icon size={18} />
                                {item.label}
                                {isActive && (
                                    <ChevronRight size={14} className="ml-auto" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Wallet section */}
                <div className="border-t border-[var(--color-border)] p-4">
                    <button className="flex w-full items-center gap-2 rounded-xl bg-[var(--color-purple-light)] border border-[var(--color-border)] px-3 py-2.5 text-sm font-medium text-[var(--color-purple)] transition-all duration-300 hover:bg-[var(--color-purple)] hover:text-white hover:shadow-lg hover:shadow-purple-500/20">
                        <Wallet size={16} />
                        Connect Wallet
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Top bar */}
                <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--color-border)] bg-[rgba(8,8,26,0.75)] backdrop-blur-xl px-4 py-3 sm:px-6">
                    <div className="relative max-w-sm flex-1">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]"
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input-field w-full py-2 pl-9 pr-4 text-sm rounded-lg"
                        />
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] transition-all duration-300 bg-white/[0.02]">
                            <Bell size={16} />
                            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[var(--color-red)] border-2 border-[var(--background)]" />
                        </button>
                        <div className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-1.5 bg-white/[0.02]">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#22D3EE]" />
                            <span className="hidden text-xs font-medium text-[var(--color-text-secondary)] sm:block">
                                SP3F...SVTE
                            </span>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-4 sm:p-6">{children}</main>
            </div>
        </div>
    );
}
