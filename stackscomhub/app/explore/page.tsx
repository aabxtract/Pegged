import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TokenCard from "@/components/TokenCard";
import { trendingTokens } from "@/lib/mock-data";
import { Search, SlidersHorizontal, TrendingUp, Clock, Flame, Activity } from "lucide-react";

export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-transparent flex flex-col relative overflow-hidden">
            {/* Massive Ambient Background Glow */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120vw] h-[600px] pointer-events-none opacity-40 mix-blend-screen z-0" style={{
                background: 'radial-gradient(ellipse at center, rgba(157, 78, 221, 0.15) 0%, rgba(0, 187, 249, 0.05) 40%, transparent 70%)',
                filter: 'blur(80px)'
            }} />

            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full flex-1 relative z-10 lg:py-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9]">Markets</span>
                        </h1>
                        <p className="mt-3 text-[16px] text-[var(--color-text-secondary)] font-light max-w-xl">
                            Discover and trade the highest volume community assets on Stacks, secured by Bitcoin native liquidity.
                        </p>
                    </div>

                    {/* Stats mini-cards */}
                    <div className="flex gap-4 opacity-80">
                        <div className="flex flex-col bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                            <span className="text-[12px] text-[var(--color-text-tertiary)] font-semibold uppercase tracking-wider mb-1">24h Vol</span>
                            <span className="text-[18px] font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>$12.4M</span>
                        </div>
                        <div className="flex flex-col bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                            <span className="text-[12px] text-[var(--color-text-tertiary)] font-semibold uppercase tracking-wider mb-1">Active</span>
                            <span className="text-[18px] font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>4,192</span>
                        </div>
                    </div>
                </div>

                {/* Search + Filters */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-10">
                    <div className="relative flex-1 max-w-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] rounded-2xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-30 blur-md" />
                        <div className="relative flex items-center bg-[rgba(10,10,20,0.6)] border border-[rgba(255,255,255,0.08)] rounded-2xl px-4 py-3.5 shadow-inner transition-all duration-300 group-focus-within:border-[rgba(255,255,255,0.2)] group-focus-within:bg-[rgba(15,15,25,0.8)] backdrop-blur-md">
                            <Search
                                size={20}
                                className="text-[var(--color-text-tertiary)] mr-3 transition-colors group-focus-within:text-[#00BBF9]"
                            />
                            <input
                                type="text"
                                placeholder="Search explicitly by token name, ticker, or contract address..."
                                className="w-full bg-transparent border-none outline-none text-[15px] font-medium text-white placeholder-[var(--color-text-tertiary)]"
                            />
                        </div>
                    </div>

                    <button className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl text-[14px] font-bold text-white tracking-wide transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] outline-none">
                        <SlidersHorizontal size={16} className="text-[#9D4EDD]" />
                        Advanced Filters
                    </button>
                </div>

                {/* Category tabs */}
                <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-8 scrollbar-hide border-b border-[rgba(255,255,255,0.05)]">
                    {[
                        { label: "Trending Now", icon: TrendingUp, active: true },
                        { label: "Recent Launches", icon: Clock, active: false },
                        { label: "High Volume", icon: Flame, active: false },
                        { label: "Top Gainers", icon: Activity, active: false },
                    ].map((tab) => (
                        <button
                            key={tab.label}
                            className={`relative flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-[13px] font-bold tracking-wider uppercase transition-all duration-300 rounded-[1.25rem] outline-none overflow-hidden ${tab.active
                                ? "text-white bg-[rgba(157,78,221,0.15)] border border-[rgba(157,78,221,0.3)] shadow-[0_0_20px_rgba(157,78,221,0.2)]"
                                : "text-[var(--color-text-secondary)] border border-transparent hover:bg-[rgba(255,255,255,0.03)] hover:text-white"
                                }`}
                        >
                            {tab.active && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-transparent opacity-20" />
                            )}
                            {tab.icon && <tab.icon size={16} className={tab.active ? "text-[#00F5D4] relative z-10" : "relative z-10"} />}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Token grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-children">
                    {/* Map through trendingTokens twice just to populate screen for explore */}
                    {trendingTokens.concat(trendingTokens).map((token, idx) => (
                        <TokenCard key={`${token.id}-${idx}`} token={token} />
                    ))}
                </div>

                {/* Load more */}
                <div className="mt-16 text-center">
                    <button className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-[14px] font-bold tracking-wide uppercase text-white bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] outline-none overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(157,78,221,0.2)] to-[rgba(0,187,249,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10">Load More Networks</span>
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
