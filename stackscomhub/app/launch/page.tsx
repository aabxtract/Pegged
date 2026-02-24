import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, Upload, ChevronRight } from "lucide-react";

export default function LaunchPage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-lg shadow-purple-500/20">
                        <Rocket size={24} className="text-white" />
                    </div>
                    <h1
                        className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Launch Your Token
                    </h1>
                    <p className="mt-2 text-[var(--color-text-secondary)] max-w-md mx-auto">
                        Deploy a SIP-010 community token on Stacks in minutes. Fill in the
                        details below and sign with your wallet.
                    </p>
                </div>

                {/* Form */}
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-xs font-bold text-white shadow-sm shadow-purple-500/20">
                            1
                        </div>
                        <div className="h-0.5 flex-1 bg-[var(--color-border)]" />
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-bold text-[var(--color-text-tertiary)]">
                            2
                        </div>
                        <div className="h-0.5 flex-1 bg-[var(--color-border)]" />
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-bold text-[var(--color-text-tertiary)]">
                            3
                        </div>
                    </div>

                    <h2
                        className="text-lg font-semibold text-[var(--color-text-primary)] mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Token Details
                    </h2>

                    <div className="space-y-5">
                        {/* Token name */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                                Token Name
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Satoshi Community Token"
                                className="input-field w-full px-4 py-3 text-sm"
                            />
                        </div>

                        {/* Ticker */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                                Ticker Symbol
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., SATS"
                                maxLength={6}
                                className="input-field w-full px-4 py-3 text-sm uppercase"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                                Description
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Tell the community what your token is about..."
                                className="input-field w-full px-4 py-3 text-sm resize-none"
                            />
                        </div>

                        {/* Logo upload */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                                Token Logo
                            </label>
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-border)] bg-white/[0.02]">
                                    <Upload size={20} className="text-[var(--color-text-tertiary)]" />
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        PNG, JPG or SVG. Max 500KB.
                                    </p>
                                    <button className="mt-1 text-sm font-medium text-[var(--color-purple)] hover:text-[var(--color-purple-dark)] transition-colors">
                                        Upload image
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Supply + Curve */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                                    Total Supply
                                </label>
                                <input
                                    type="number"
                                    placeholder="100,000,000"
                                    className="input-field w-full px-4 py-3 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5">
                                    Bonding Curve
                                </label>
                                <select className="input-field w-full px-4 py-3 text-sm">
                                    <option>Linear</option>
                                    <option>Exponential</option>
                                    <option>Sigmoid</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Next button */}
                    <div className="mt-8 flex justify-end">
                        <button className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
                            Next: Preview
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
