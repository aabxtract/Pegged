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
        <div className="flex min-h-screen bg-[var(--color-bg-secondary)]">
            {/* Sidebar */}
            <aside className="hidden lg:flex lg:flex-col lg:w-60 border-r border-[var(--color-border)] bg-white">
                {/* Logo */}
                <div className="flex items-center gap-2 px-5 py-5 border-b border-[var(--color-border)]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-purple)] text-white font-bold text-sm">
                        P
                    </div>
                    <span
                        className="text-lg font-bold tracking-tight"
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
                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${isActive
                                        ? "bg-[var(--color-purple)] text-white shadow-sm shadow-purple-200"
                                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
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
                    <button className="flex w-full items-center gap-2 rounded-xl bg-[var(--color-purple-light)] px-3 py-2.5 text-sm font-medium text-[var(--color-purple)] transition-all hover:bg-[var(--color-purple)] hover:text-white">
                        <Wallet size={16} />
                        Connect Wallet
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Top bar */}
                <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--color-border)] bg-white/80 backdrop-blur-md px-4 py-3 sm:px-6">
                    <div className="relative max-w-sm flex-1">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full rounded-lg border border-[var(--color-border)] bg-white py-2 pl-9 pr-4 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-purple)] focus:outline-none transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] transition-all">
                            <Bell size={16} />
                            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[var(--color-red)] border-2 border-white" />
                        </button>
                        <div className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-1.5">
                            <div className="h-6 w-6 rounded-full bg-[var(--color-purple-light)]" />
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
