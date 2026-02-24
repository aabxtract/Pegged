import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TokenCard from "@/components/TokenCard";
import { trendingTokens } from "@/lib/mock-data";
import { Search, SlidersHorizontal, TrendingUp, Clock, Users } from "lucide-react";

export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1
                        className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Explore Tokens
                    </h1>
                    <p className="mt-2 text-[var(--color-text-secondary)]">
                        Discover and trade the hottest community tokens on Stacks
                    </p>
                </div>

                {/* Search + Filters */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div className="relative flex-1 max-w-md">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]"
                        />
                        <input
                            type="text"
                            placeholder="Search tokens by name or ticker..."
                            className="input-field w-full py-2.5 pl-10 pr-4 text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="btn-outline inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl">
                            <SlidersHorizontal size={14} />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Category tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                    {[
                        { label: "Trending", icon: TrendingUp, active: true },
                        { label: "New Launches", icon: Clock, active: false },
                        { label: "Most Holders", icon: Users, active: false },
                        { label: "Top Gainers", icon: null, active: false },
                        { label: "Top Losers", icon: null, active: false },
                    ].map((tab) => (
                        <button
                            key={tab.label}
                            className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${tab.active
                                    ? "btn-primary shadow-sm"
                                    : "btn-outline"
                                }`}
                        >
                            {tab.icon && <tab.icon size={12} />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Token grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                    {trendingTokens.map((token) => (
                        <TokenCard key={token.id} token={token} />
                    ))}
                </div>

                {/* Load more */}
                <div className="mt-12 text-center">
                    <button className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
                        Load more tokens
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
