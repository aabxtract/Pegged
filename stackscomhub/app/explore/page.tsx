import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TokenCard from "@/components/TokenCard";
import { trendingTokens } from "@/lib/mock-data";
import { Search, SlidersHorizontal, TrendingUp, Clock, Users } from "lucide-react";

export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-white">
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
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
                        />
                        <input
                            type="text"
                            placeholder="Search tokens by name or ticker..."
                            className="w-full rounded-xl border border-[var(--color-border)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--color-purple)]/20 transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] transition-all">
                            <SlidersHorizontal size={14} />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Category tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                    <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--color-purple)] px-4 py-2 text-xs font-semibold text-white shadow-sm">
                        <TrendingUp size={12} />
                        Trending
                    </button>
                    <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] transition-all">
                        <Clock size={12} />
                        New Launches
                    </button>
                    <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] transition-all">
                        <Users size={12} />
                        Most Holders
                    </button>
                    <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] transition-all">
                        Top Gainers
                    </button>
                    <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-purple)] hover:text-[var(--color-purple)] transition-all">
                        Top Losers
                    </button>
                </div>

                {/* Token grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                    {trendingTokens.map((token) => (
                        <TokenCard key={token.id} token={token} />
                    ))}
                </div>

                {/* Load more */}
                <div className="mt-10 text-center">
                    <button className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-purple)] hover:text-[var(--color-purple)]">
                        Load more tokens
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
