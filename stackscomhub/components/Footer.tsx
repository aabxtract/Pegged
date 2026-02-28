import Link from "next/link";
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from "react-icons/fa";
import { Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-black/80 backdrop-blur-xl mt-auto">
            {/* Top ambient glow line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-start lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group outline-none">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-[0.8rem] bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] group-hover:scale-105">
                                <Sparkles size={18} strokeWidth={2.5} className="drop-shadow-md" />
                                <div className="absolute inset-0 rounded-[0.8rem] bg-gradient-to-br from-white/20 to-transparent" />
                            </div>
                            <span
                                className="text-[22px] font-bold tracking-tight text-white transition-colors group-hover:text-fuchsia-400"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Pegged
                            </span>
                        </Link>
                        <p className="text-[14px] text-zinc-400 leading-relaxed font-light max-w-xs">
                            The ultimate launchpad and liquidity layer for community assets on Stacks, natively secured by Bitcoin.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-[14px] font-bold mb-6 text-white tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                            Ecosystem
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { href: "/explore", label: "Analyze Markets" },
                                { href: "/launch", label: "Deploy Token" },
                                { href: "/bots", label: "Trading Algorithms" },
                                { href: "/dashboard", label: "Portfolio" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[14.5px] font-medium text-zinc-400 hover:text-indigo-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-[14px] font-bold mb-6 text-white tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                            Developers
                        </h4>
                        <ul className="space-y-4">
                            {["Protocol Docs", "API Reference", "Clarity Hub", "Audits"].map((label) => (
                                <li key={label}>
                                    <a
                                        href="#"
                                        className="text-[14.5px] font-medium text-zinc-400 hover:text-fuchsia-400 transition-colors duration-300"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-[14px] font-bold mb-6 text-white tracking-wider uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                            Network
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { icon: FaTwitter, label: "Twitter", color: "hover:text-[#1DA1F2]" },
                                { icon: FaTelegram, label: "Telegram", color: "hover:text-[#26A5E4]" },
                                { icon: FaDiscord, label: "Discord", color: "hover:text-[#5865F2]" },
                                { icon: FaGithub, label: "GitHub", color: "hover:text-white" },
                            ].map(({ icon: Icon, label, color }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className={`flex h-11 w-11 items-center justify-center rounded-[0.85rem] bg-white/5 border border-white/10 text-zinc-400 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] ${color}`}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
                    <p className="text-[13px] font-light text-zinc-500">
                        © 2026 Pegged Protocol. <span className="hidden sm:inline">|</span> Unstoppable community primitive.
                    </p>
                    <div className="flex gap-6">
                        {["Terms", "Privacy", "Security"].map((label) => (
                            <a
                                key={label}
                                href="#"
                                className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors duration-300"
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
