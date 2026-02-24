import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BotCard from "@/components/BotCard";
import { bots } from "@/lib/mock-data";
import { Search, Bot, BarChart3, Wrench, MessageCircle, Plus } from "lucide-react";

export default function BotsPage() {
    const categories = [
        { label: "All", icon: Bot, active: true },
        { label: "Trading", icon: BarChart3, active: false },
        { label: "Analytics", icon: BarChart3, active: false },
        { label: "Utility", icon: Wrench, active: false },
        { label: "Social", icon: MessageCircle, active: false },
    ];

    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div>
                        <h1
                            className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Bot Hub
                        </h1>
                        <p className="mt-2 text-[var(--color-text-secondary)]">
                            Open-source trading bots, analytics tools, and community utilities
                        </p>
                    </div>
                    <button className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm">
                        <Plus size={16} />
                        Submit Bot
                    </button>
                </div>

                {/* Search */}
                <div className="relative max-w-md mb-6">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]"
                    />
                    <input
                        type="text"
                        placeholder="Search bots..."
                        className="input-field w-full py-2.5 pl-10 pr-4 text-sm"
                    />
                </div>

                {/* Category tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat.label}
                            className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${cat.active
                                    ? "btn-primary shadow-sm"
                                    : "btn-outline"
                                }`}
                        >
                            <cat.icon size={12} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Bot grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                    {bots.map((bot) => (
                        <BotCard key={bot.id} bot={bot} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
