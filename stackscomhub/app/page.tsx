import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroIllustration from "@/components/HeroIllustration";
import { ArrowRight, Rocket, BarChart3, Users, Shield, Zap, Bot, ChevronRight, Layers, Sparkles } from "lucide-react";
import { SiBitcoin } from "react-icons/si";
import Link from "next/link";
import TokenCard from "@/components/TokenCard";
import { trendingTokens } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30">
      <Navbar />

      {/* ====== ULTRA MINIMAL HERO ====== */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 bg-gradient-to-b from-blue-600 via-emerald-500 to-transparent blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-2 text-sm md:text-md text-zinc-300 md:mb-12 mb-8 backdrop-blur-md shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all hover:bg-blue-500/10 hover:border-blue-500/30 hover:scale-105 cursor-pointer">
            <Sparkles size={16} className="text-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">Introducing Protocol V2</span>
            <ChevronRight size={16} className="text-emerald-500/70" />
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tighter mx-auto max-w-5xl drop-shadow-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Operating System for <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 animate-gradient-x">
              Community Capital.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Deploy hyper-liquid tokens on Bitcoin. Zero code. Instant markets.
            The premier launchpad where social engagement meets absolute financial utility.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/launch"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)]"
            >
              Start Building
              <Rocket size={16} className="text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="/explore"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/80 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:border-zinc-500"
            >
              Explore Markets
              <ArrowRight size={16} className="text-zinc-500 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Hero Illustration / Dashboard Preview */}
        <div className="mt-20 mx-auto max-w-6xl px-4 sm:px-6 relative z-10 perspective-1000">
          <div className="rounded-2xl border border-blue-500/10 bg-black/50 p-2 backdrop-blur-3xl shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)] transform-gpu hover:-translate-y-2 transition-transform duration-700">
            <div className="rounded-xl overflow-hidden relative bg-zinc-950 aspect-[16/9] flex items-center justify-center border border-white/5">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ====== PARTNERS / CHAINS ====== */}
      <section className="py-12 border-y border-white/5 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-sm font-medium text-zinc-500 mb-8 tracking-widest uppercase">Powered by the best in Web3</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {[
              { icon: SiBitcoin, label: "Bitcoin L1" },
              { icon: Shield, label: "Stacks Secured" },
              { icon: Zap, label: "Lightning Speed" },
              { icon: Bot, label: "Smart Contracts" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-bold text-zinc-300">
                <Icon size={20} className="text-zinc-400" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MODERN FEATURE GRID ====== */}
      <section className="py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Everything you need to <br />
              <span className="text-zinc-500">scale your community.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-10 hover:bg-zinc-900/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center border border-fuchsia-500/20 mb-6">
                  <Rocket className="text-fuchsia-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Instant Token Deployment</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  Launch fully compliant SIP-010 tokens on Stacks in under a minute. We abstract the complexity so you focus on utility.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-10 hover:bg-zinc-900/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6">
                  <BarChart3 className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Pro Analytics</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Real-time charts, order book depth, and liquidity tracking.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-10 hover:bg-zinc-900/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-6">
                  <Users className="text-teal-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Social Layer</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Built-in token-gated feeds to reward loyal holders.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-10 hover:bg-zinc-900/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6">
                    <Layers className="text-amber-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Liquidity Architecture</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-md">
                    Dynamic bonding curves ensure guaranteed liquidity from day one, eliminating rug pulls entirely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRENDING TOKENS ====== */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-zinc-950/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <h2
                className="text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Market Activity
              </h2>
              <p className="mt-4 text-zinc-400 max-w-md">
                Monitor the most actively traded assets within the ecosystem.
              </p>
            </div>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-fuchsia-400 transition-colors"
            >
              View All Assets <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trendingTokens.slice(0, 6).map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== BOTTOM CTA ====== */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to Launch?
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
            Join thousands of founders leveraging the ultimate social liquidity layer on Bitcoin.
          </p>
          <Link
            href="/launch"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-10 py-5 text-md font-bold transition-all hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]"
          >
            Initialize Deployment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
