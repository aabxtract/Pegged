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
    { label: "Overview", icon: Home, href: "/dashboard" },
    { label: "Markets", icon: Compass, href: "/explore" },
    { label: "Deploy", icon: Rocket, href: "/launch" },
    { label: "Trading Bots", icon: Bot, href: "/bots" },
    { label: "Settings", icon: Settings, href: "#" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-[#05050A] text-white">
            {/* Sidebar */}
            <aside className="hidden lg:flex lg:flex-col lg:w-72 border-r border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,15,0.8)] backdrop-blur-3xl relative z-20">
                {/* Logo */}
                <div className="flex items-center gap-3 px-6 h-20 border-b border-[rgba(255,255,255,0.05)]">
                    <Link href="/" className="flex items-center gap-3 group outline-none">
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-[0.8rem] bg-gradient-to-br from-[#9D4EDD] to-[#00BBF9] text-white shadow-[0_0_15px_rgba(157,78,221,0.3)] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(0,187,249,0.5)] group-hover:scale-105">
                            <Sparkles size={16} strokeWidth={2.5} className="drop-shadow-md" />
                            <div className="absolute inset-0 rounded-[0.8rem] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                        </div>
                        <span
                            className="text-[20px] font-bold tracking-tight text-white transition-colors group-hover:text-[#00BBF9]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Pegged
                        </span>
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`group flex items-center gap-3.5 rounded-xl px-4 py-3 text-[14px] font-medium transition-all duration-300 relative outline-none ${isActive
                                    ? "text-white"
                                    : "text-[var(--color-text-tertiary)] hover:text-white"
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(157,78,221,0.15)] to-transparent rounded-xl border border-[rgba(157,78,221,0.3)] pointer-events-none" />
                                )}

                                <div className={`relative z-10 p-1.5 rounded-lg transition-colors ${isActive ? 'bg-[rgba(157,78,221,0.2)] text-[#00BBF9]' : 'bg-transparent group-hover:bg-[rgba(255,255,255,0.03)]'}`}>
                                    <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className={`relative z-10 tracking-wide ${isActive ? 'font-bold' : ''}`}>{item.label}</span>

                                {isActive && (
                                    <ChevronRight size={16} className="ml-auto relative z-10 text-[#00BBF9]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Wallet section */}
                <div className="border-t border-[rgba(255,255,255,0.05)] p-5">
                    <button className="group relative w-full flex items-center justify-center gap-2.5 rounded-xl px-4 py-3.5 text-[14px] font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(157,78,221,0.3)] outline-none border border-[rgba(157,78,221,0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(157,78,221,0.1)] to-[rgba(0,187,249,0.1)] group-hover:from-[rgba(157,78,221,0.3)] group-hover:to-[rgba(0,187,249,0.3)] transition-colors duration-300" />
                        <Wallet size={16} className="relative z-10 text-[#00BBF9]" />
                        <span className="relative z-10 tracking-wide">0x7F...3A92</span>
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0 relative">
                {/* Massive Ambient Background Glow */}
                <div className="absolute top-0 left-1/4 w-[150%] h-[600px] pointer-events-none opacity-30 mix-blend-screen z-0 -translate-x-1/2" style={{
                    background: 'radial-gradient(ellipse at center, rgba(157, 78, 221, 0.15) 0%, rgba(0, 187, 249, 0.05) 50%, transparent 70%)',
                    filter: 'blur(80px)'
                }} />

                {/* Top bar */}
                <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] bg-[rgba(5,5,10,0.8)] backdrop-blur-2xl px-6 h-20">
                    {/* Search */}
                    <div className="relative max-w-md w-full group/search hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/search:opacity-20 blur-sm pointer-events-none" />
                        <div className="relative flex items-center bg-[rgba(15,15,25,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl transition-all duration-300 group-focus-within/search:border-[rgba(255,255,255,0.2)] group-focus-within/search:bg-[rgba(20,20,30,0.8)] px-4">
                            <Search
                                size={18}
                                className="text-[var(--color-text-tertiary)] transition-colors group-focus-within/search:text-[#00BBF9] mr-3"
                            />
                            <input
                                type="text"
                                placeholder="Search tokens, bots, or addresses..."
                                className="w-full py-3 bg-transparent border-none outline-none text-[14px] text-white placeholder-[var(--color-text-tertiary)]"
                            />
                            <div className="hidden lg:flex items-center gap-1 opacity-50 px-2 py-0.5 rounded border border-[rgba(255,255,255,0.1)] text-[10px] font-medium tracking-widest uppercase">
                                <span>CTRL</span>
                                <span>K</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 ml-auto">
                        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[var(--color-text-secondary)] hover:border-[rgba(157,78,221,0.5)] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(157,78,221,0.2)]">
                            <Bell size={18} />
                            <div className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-[#F15BB5] shadow-[0_0_8px_#F15BB5]" />
                        </button>

                        <div className="h-6 w-px bg-[rgba(255,255,255,0.1)] mx-2 hidden sm:block" />

                        <div className="flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.05)] pl-2 pr-4 py-1.5 bg-[rgba(255,255,255,0.02)] cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#9D4EDD] to-[#00BBF9] flex items-center justify-center border border-[rgba(255,255,255,0.2)] shadow-inner">
                                <span className="text-[12px] font-bold text-white">SP</span>
                            </div>
                            <div className="hidden sm:flex flex-col">
                                <span className="text-[13px] font-bold text-white tracking-wide">
                                    AnonTrader
                                </span>
                                <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-widest">
                                    Level 3
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 lg:p-10 relative z-10">{children}</main>
            </div>
        </div>
    );
}
