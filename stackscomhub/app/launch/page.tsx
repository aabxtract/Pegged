import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, Upload, ChevronRight, Check } from "lucide-react";

export default function LaunchPage() {
    return (
        <div className="min-h-screen bg-transparent flex flex-col relative overflow-hidden">
            {/* Massive Ambient Background Glow */}
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[120vw] h-[800px] pointer-events-none opacity-50 mix-blend-screen z-0" style={{
                background: 'radial-gradient(ellipse at center, rgba(157, 78, 221, 0.2) 0%, rgba(0, 187, 249, 0.08) 40%, transparent 70%)',
                filter: 'blur(80px)'
            }} />

            <Navbar />

            <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 w-full flex-1 relative z-10 lg:py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#9D4EDD] to-[#00BBF9] shadow-[0_0_30px_rgba(157,78,221,0.4)] relative">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30 Mix-blend-overlay rounded-[1.25rem]" />
                        <Rocket size={28} className="text-white relative z-10 drop-shadow-md" />
                    </div>
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Deploy <span className="text-[var(--color-text-secondary)]">Protocol</span>
                    </h1>
                    <p className="text-[16px] text-[var(--color-text-secondary)] font-light max-w-lg mx-auto leading-relaxed">
                        Initialize a fully compliant SIP-010 asset on Stacks. Configure parameters below and cryptographically sign to deploy.
                    </p>
                </div>

                {/* Form Container */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-b from-[rgba(157,78,221,0.15)] to-transparent rounded-[2.5rem] opacity-50 blur-xl pointer-events-none" />

                    <div className="relative bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl border border-[rgba(255,255,255,0.08)] rounded-[2.5rem] p-8 sm:p-12 shadow-[0_0_80px_-20px_rgba(0,0,0,0.5)]">
                        {/* Step indicator */}
                        <div className="flex items-center gap-4 mb-12 relative">
                            {/* Active Step */}
                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#9D4EDD] to-[#00BBF9] text-[14px] font-bold text-white shadow-[0_0_20px_rgba(157,78,221,0.3)] z-10">
                                1
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white]" />
                            </div>

                            {/* Line */}
                            <div className="h-px flex-1 bg-gradient-to-r from-[#9D4EDD]/50 to-[rgba(255,255,255,0.1)] relative" />

                            {/* Inactive Step */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[14px] font-bold text-[var(--color-text-tertiary)] z-10">
                                2
                            </div>

                            {/* Line */}
                            <div className="h-px flex-1 bg-[rgba(255,255,255,0.1)] relative" />

                            {/* Inactive Step */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[14px] font-bold text-[var(--color-text-tertiary)] z-10">
                                3
                            </div>
                        </div>

                        <div className="mb-10">
                            <h2
                                className="text-[20px] font-bold text-white mb-2 tracking-tight"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Asset Configuration
                            </h2>
                            <p className="text-[14px] text-[var(--color-text-secondary)] font-light">Define the fundamental properties of your new token.</p>
                        </div>

                        <div className="space-y-6">
                            {/* Token name */}
                            <div className="group/input">
                                <label className="block text-[13px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 transition-colors group-focus-within/input:text-[#00BBF9]">
                                    Protocol Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/input:opacity-30 blur-sm pointer-events-none" />
                                    <input
                                        type="text"
                                        placeholder="e.g., Nexus Protocol"
                                        className="relative w-full bg-[rgba(5,5,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[15px] text-white placeholder-[var(--color-text-tertiary)] outline-none transition-all duration-300 focus:border-[rgba(255,255,255,0.2)] focus:bg-[rgba(10,10,20,0.8)] shadow-inner"
                                    />
                                </div>
                            </div>

                            {/* Ticker */}
                            <div className="group/input">
                                <label className="block text-[13px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 transition-colors group-focus-within/input:text-[#00BBF9]">
                                    Ticker Symbol
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/input:opacity-30 blur-sm pointer-events-none" />
                                    <input
                                        type="text"
                                        placeholder="e.g., NXS"
                                        maxLength={6}
                                        className="relative w-full bg-[rgba(5,5,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[15px] font-bold tracking-widest text-[#00F5D4] placeholder-[var(--color-text-tertiary)] uppercase outline-none transition-all duration-300 focus:border-[rgba(255,255,255,0.2)] focus:bg-[rgba(10,10,20,0.8)] shadow-inner"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="group/input">
                                <label className="block text-[13px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 transition-colors group-focus-within/input:text-[#00BBF9]">
                                    Manifesto / Description
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/input:opacity-30 blur-sm pointer-events-none" />
                                    <textarea
                                        rows={4}
                                        placeholder="Describe the utility and vision of your asset..."
                                        className="relative w-full bg-[rgba(5,5,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[15px] text-white placeholder-[var(--color-text-tertiary)] outline-none transition-all duration-300 focus:border-[rgba(255,255,255,0.2)] focus:bg-[rgba(10,10,20,0.8)] shadow-inner resize-none font-light leading-relaxed"
                                    />
                                </div>
                            </div>

                            {/* Logo upload */}
                            <div>
                                <label className="block text-[13px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                                    Entity Crest (Logo)
                                </label>
                                <div className="flex flex-col sm:flex-row items-center gap-5 p-5 bg-[rgba(5,5,15,0.4)] border border-dashed border-[rgba(255,255,255,0.1)] rounded-xl transition-colors hover:border-[rgba(157,78,221,0.5)]">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1rem] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] shadow-inner">
                                        <Upload size={22} className="text-[#00BBF9]" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <p className="text-[14px] text-white font-medium mb-1">
                                            Drop image here or click to browse
                                        </p>
                                        <p className="text-[12px] text-[var(--color-text-tertiary)]">
                                            SVG, PNG, JPG. Maximum payload: 2MB.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent my-8" />

                            {/* Supply + Curve */}
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="group/input">
                                    <label className="block text-[13px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 transition-colors group-focus-within/input:text-[#00BBF9]">
                                        Genesis Supply
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/input:opacity-30 blur-sm pointer-events-none" />
                                        <input
                                            type="number"
                                            placeholder="1,000,000,000"
                                            className="relative w-full bg-[rgba(5,5,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[15px] font-mono text-white placeholder-[var(--color-text-tertiary)] outline-none transition-all duration-300 focus:border-[rgba(255,255,255,0.2)] focus:bg-[rgba(10,10,20,0.8)] shadow-inner"
                                        />
                                    </div>
                                </div>
                                <div className="group/input">
                                    <label className="block text-[13px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2 transition-colors group-focus-within/input:text-[#00BBF9]">
                                        Liquidity Algorithm
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] rounded-xl opacity-0 transition-opacity duration-300 group-focus-within/input:opacity-30 blur-sm pointer-events-none" />
                                        <select className="relative w-full bg-[rgba(5,5,15,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4 text-[15px] text-white outline-none transition-all duration-300 focus:border-[rgba(255,255,255,0.2)] focus:bg-[rgba(10,10,20,0.8)] shadow-inner appearance-none">
                                            <option value="linear">Linear Curve (Standard)</option>
                                            <option value="exponential">Exponential (Aggressive)</option>
                                            <option value="sigmoid">Sigmoid (Stabilizing)</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-tertiary)]">
                                            ▼
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Next button */}
                        <div className="mt-12 flex justify-end">
                            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[15px] font-bold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(0,187,249,0.3)] hover:scale-[1.02] outline-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 tracking-wide">Commit Parameters</span>
                                <ChevronRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
