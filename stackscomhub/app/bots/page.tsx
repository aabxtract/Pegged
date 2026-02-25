import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BotCard from "@/components/BotCard";
import { bots } from "@/lib/mock-data";
import { Search, Bot, BarChart3, Wrench, MessageCircle, Plus, TerminalSquare } from "lucide-react";

export default function BotsPage() {
    const categories = [
        { label: "All Algorithms", icon: Bot, active: true },
        { label: "Market Making", icon: BarChart3, active: false },
        { label: "MEV / Sniping", icon: TerminalSquare, active: false },
        { label: "Protocol Utility", icon: Wrench, active: false },
        { label: "Community / Social", icon: MessageCircle, active: false },
    ];

    return (
        <div className="min-h-screen bg-transparent flex flex-col relative overflow-hidden">
            {/* Massive Ambient Background Glow */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120vw] h-[600px] pointer-events-none opacity-40 mix-blend-screen z-0" style={{
                background: 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
                filter: 'blur(80px)'
            }} />

            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full flex-1 relative z-10 lg:py-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Intelligence <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00BBF9] to-[#9D4EDD]">Hub</span>
                        </h1>
                        <p className="text-[16px] text-[var(--color-text-secondary)] font-light max-w-xl">
                            Deploy high-performance trading bots, real-time analytics suites, and open-source protocol utilities.
                        </p>
                    </div>

                    <button className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[14px] font-bold text-white bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(0,187,249,0.3)] hover:scale-[1.02] outline-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00BBF9] to-[#9D4EDD] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <Plus size={16} className="relative z-10 transition-transform duration-300 group-hover:rotate-90" />
                        <span className="relative z-10 tracking-wide">Submit Integration</span>
                    </button>
                </div>

                {/* Search */}
                <div className="relative max-w-3xl mb-10 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00BBF9] to-[#9D4EDD] rounded-[1.25rem] opacity-0 transition-opacity duration-300 group-focus-within:opacity-30 blur-md" />
                    <div className="relative flex items-center bg-[rgba(10,10,20,0.6)] border border-[rgba(255,255,255,0.08)] rounded-[1.25rem] px-5 py-4 shadow-inner transition-all duration-300 group-focus-within:border-[rgba(255,255,255,0.2)] group-focus-within:bg-[rgba(15,15,25,0.8)] backdrop-blur-md">
                        <Search
                            size={20}
                            className="text-[var(--color-text-tertiary)] mr-4 transition-colors group-focus-within:text-[#00BBF9]"
                        />
                        <input
                            type="text"
                            placeholder="Search algorithms by name, author, or function..."
                            className="w-full bg-transparent border-none outline-none text-[16px] font-medium text-white placeholder-[var(--color-text-tertiary)]"
                        />
                    </div>
                </div>

                {/* Category tabs */}
                <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-8 scrollbar-hide border-b border-[rgba(255,255,255,0.05)]">
                    {categories.map((cat) => (
                        <button
                            key={cat.label}
                            className={`relative flex items-center justify-center gap-2.5 whitespace-nowrap px-6 py-3 text-[13px] font-bold tracking-wider uppercase transition-all duration-300 rounded-full outline-none overflow-hidden ${cat.active
                                ? "text-white bg-[rgba(0,187,249,0.15)] border border-[rgba(0,187,249,0.3)] shadow-[0_0_20px_rgba(0,187,249,0.2)]"
                                : "text-[var(--color-text-secondary)] border border-transparent hover:bg-[rgba(255,255,255,0.03)] hover:text-white"
                                }`}
                        >
                            {cat.active && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00BBF9] to-transparent opacity-20" />
                            )}
                            <cat.icon size={16} className={cat.active ? "text-[#00F5D4] relative z-10" : "relative z-10"} />
                            <span className="relative z-10">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Bot grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-children">
                    {bots.concat(bots).map((bot, idx) => (
                        <BotCard key={`${bot.id}-${idx}`} bot={bot} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
