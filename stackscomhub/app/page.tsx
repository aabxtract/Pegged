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

      {/* ====== REPLICATED "WIDE" HERO ====== */}
      <section className="relative overflow-hidden min-h-[95vh] flex flex-col items-center justify-center bg-[#050505] -mt-20 pt-20">
        {/* Glow effect at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] pointer-events-none flex justify-center items-end">
          {/* Intense center glow */}
          <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] h-[100%] rounded-[100%] bg-gradient-to-t from-emerald-200/90 via-emerald-400/40 to-transparent blur-[120px] sm:blur-[160px]" />

          {/* Subtle rays overlay */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_100%,transparent_0deg,rgba(110,231,183,0.15)_15deg,transparent_30deg,transparent_330deg,rgba(110,231,183,0.15)_345deg,transparent_360deg)] opacity-80" />

          {/* Geometric segmented transparent fan shapes */}
          <div className="absolute bottom-[-5%] w-full max-w-6xl aspect-[2/1] flex justify-center items-end opacity-90 overflow-hidden">
            {/* Creating layers of arcs using CSS */}
            <div className="absolute bottom-[-10%] w-[45%] h-[80%] rounded-t-[100%] border border-emerald-100/40 bg-gradient-to-t from-emerald-900/10 to-emerald-300/30 backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(52,211,153,0.5)]"></div>
            <div className="absolute bottom-[-15%] w-[65%] h-[95%] rounded-t-[100%] border border-emerald-100/20 bg-gradient-to-t from-emerald-900/10 to-emerald-400/15 backdrop-blur-[2px] -z-10"></div>
            <div className="absolute bottom-[-20%] w-[85%] h-[110%] rounded-t-[100%] border border-emerald-100/10 bg-gradient-to-t from-emerald-900/10 to-emerald-500/10 -z-20"></div>
            <div className="absolute bottom-[-25%] w-[105%] h-[125%] rounded-t-[100%] border border-emerald-100/5 bg-gradient-to-t from-emerald-900/10 to-emerald-500/5 -z-30"></div>
          </div>
        </div>

        {/* Stars/noise overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px] opacity-40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center -mt-32">
          <p className="text-[#a1a1aa] text-lg sm:text-[22px] font-medium tracking-[0.02em] mx-auto max-w-3xl mb-8 sm:mb-12 font-sans leading-relaxed drop-shadow-lg">
            Welcome to bridgeless hub for layered assets <br className="hidden md:block" />
            built on Bitcoin and other blockchains
          </p>

          <h1
            className="text-[6rem] xs:text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[22rem] font-extrabold leading-[0.8] tracking-tighter mx-auto select-none"
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              background: 'linear-gradient(170deg, #ffffff 15%, #c4c4cc 45%, #52525b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0px 30px 50px rgba(0,0,0,0.6)) drop-shadow(0px 0px 20px rgba(255,255,255,0.1))'
            }}
          >
            pegged
          </h1>
        </div>

        {/* Bottom circles mimicking the reference left corner */}
        <div className="absolute bottom-8 left-8 flex gap-4 z-20">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center transform hover:scale-105 transition-transform cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <span className="text-black font-bold text-xl sm:text-2xl rotate-45 border-black border-r-2 border-t-2 w-3 h-3 sm:w-4 sm:h-4 translate-y-0.5 -translate-x-0.5"></span>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center transform hover:scale-105 transition-transform cursor-pointer">
            <span className="text-white text-lg sm:text-xl font-bold">1</span>
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
