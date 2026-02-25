import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroIllustration from "@/components/HeroIllustration";
import {
  FeatureIllustration1,
  FeatureIllustration2,
  FeatureIllustration3,
  StepsIllustration,
} from "@/components/FeatureIllustrations";
import TokenCard from "@/components/TokenCard";
import { trendingTokens } from "@/lib/mock-data";
import { ArrowRight, Rocket, BarChart3, Users, Shield, Zap, Bot } from "lucide-react";
import { SiBitcoin } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-32">
        {/* Massive Ambient Background Glows */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[800px] pointer-events-none opacity-60 mix-blend-screen" style={{
          background: 'radial-gradient(ellipse at top, rgba(157, 78, 221, 0.25) 0%, rgba(0, 187, 249, 0.1) 40%, transparent 70%)',
          filter: 'blur(60px)'
        }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-[2.5rem] bg-[rgba(10,10,20,0.5)] backdrop-blur-3xl px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28 relative overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-[0_0_80px_-20px_rgba(157,78,221,0.2)]">

            {/* Inner Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
            }} />

            <div className="relative flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
              {/* Left: text */}
              <div className="max-w-xl text-center lg:text-left z-10">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-5 py-2 text-[13px] font-medium text-white mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all hover:bg-[rgba(255,255,255,0.08)] hover:scale-[1.02] cursor-default">
                  <SiBitcoin size={14} className="text-[var(--color-gold)] drop-shadow-[0_0_8px_rgba(255,183,3,0.8)]" />
                  <span className="tracking-wide">Powered by Stacks & Bitcoin</span>
                </div>

                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Launch Your
                  <br className="hidden lg:block" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] via-[#00F5D4] to-[#00BBF9] animate-gradient block mt-2">
                    Community Token
                  </span>
                  <span className="block mt-2">on Bitcoin.</span>
                </h1>

                <p className="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                  The ultimate token launchpad and social trading hub.
                  Create, discover, and trade vibrant community tokens — completely secured by Bitcoin.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/launch"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[15px] font-semibold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_var(--color-purple-glow)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    <Rocket size={18} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="relative z-10 tracking-wide">Launch Now</span>
                  </Link>
                  <Link
                    href="/explore"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[15px] font-semibold text-white bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  >
                    <span className="tracking-wide">Explore Markets</span>
                    <ArrowRight size={18} className="text-[var(--color-text-secondary)]" />
                  </Link>
                </div>
              </div>

              {/* Right: illustration */}
              <div className="w-full max-w-lg lg:max-w-xl flex-shrink-0 relative z-10 perspective-1000">
                <div className="transform-gpu transition-transform duration-700 hover:scale-105 hover:rotate-y-12">
                  <HeroIllustration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PARTNERS / CHAINS ====== */}
      <section className="relative z-10 py-6 border-y border-[var(--color-border)] bg-[rgba(5,5,10,0.4)] backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {[
              { icon: SiBitcoin, label: "Bitcoin Native" },
              { icon: Shield, label: "Stacks Secured" },
              { icon: Zap, label: "SIP-010 Standard" },
              { icon: Bot, label: "Clarity Smart Contracts" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-[14px] font-semibold text-white tracking-widest uppercase">
                <Icon size={24} className="text-white" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURES MARQUEE ====== */}
      <section className="overflow-hidden bg-[#9D4EDD] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 Mix-blend-overlay" />
        <div className="py-3 sm:py-4">
          <p className="text-center text-[13px] sm:text-[15px] font-bold text-white tracking-[0.2em] uppercase whitespace-nowrap animate-pulse-glow" style={{ fontFamily: "var(--font-heading)" }}>
            ✦ WHERE COMMUNITY MEETS LIQUIDITY ✦ LAUNCH IN MINUTES ✦ TRADE INSTANTLY ✦
          </p>
        </div>
      </section>

      {/* ====== FEATURE SECTIONS ====== */}
      <section className="py-24 sm:py-32 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-28">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The definitive studio for
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-[#00BBF9]">Next-Gen Tokens</span>
            </h2>
            <p className="mt-6 text-[17px] text-[var(--color-text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
              We abstracted away the complex cryptography so you can focus on building your community.
              Deploy bonding curves, launch liquidity, and ignite social trading.
            </p>
          </div>

          {/* Feature 1: Launch */}
          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2 mb-32 group">
            <div className="lg:pr-12">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(157,78,221,0.1)] border border-[rgba(157,78,221,0.2)] px-4 py-1.5 text-[12px] font-bold tracking-widest text-[#9D4EDD] uppercase mb-6 shadow-[0_0_20px_rgba(157,78,221,0.15)]">
                <Rocket size={14} />
                Frictionless Launch
              </div>
              <h3
                className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Zero Code.
                <br />
                Instant Liquidity.
              </h3>
              <p className="text-[16px] text-[var(--color-text-secondary)] font-light leading-relaxed mb-8">
                Deploy a fully compliant SIP-010 token onto the Stacks blockchain in a matter of minutes.
                Our elegant wizard configures the smart contract, sets up the mathematical bonding curve, and publishes your token page in one atomic transaction.
              </p>
              <Link href="/launch" className="text-[15px] font-semibold text-[#00BBF9] hover:text-[#00F5D4] inline-flex items-center gap-2 transition-colors">
                Start building your token <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative flex justify-center p-8 bg-[rgba(10,10,20,0.5)] rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(157,78,221,0.2)]">
              <FeatureIllustration1 />
            </div>
          </div>

          {/* Feature 2: Trade */}
          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2 mb-32 group">
            <div className="order-2 lg:order-1 relative flex justify-center p-8 bg-[rgba(10,10,20,0.5)] rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,245,212,0.15)]">
              <FeatureIllustration2 />
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(0,245,212,0.1)] border border-[rgba(0,245,212,0.2)] px-4 py-1.5 text-[12px] font-bold tracking-widest text-[#00F5D4] uppercase mb-6 shadow-[0_0_20px_rgba(0,245,212,0.15)]">
                <BarChart3 size={14} />
                Pro Trading
              </div>
              <h3
                className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Real-Time Analytics &
                <br />
                Seamless Swaps
              </h3>
              <p className="text-[16px] text-[var(--color-text-secondary)] font-light leading-relaxed mb-8">
                Experience trading as it should be. Beautiful candlestick charts update in milliseconds, while our optimized swap router ensures you get the absolute best price against the bonding curve with minimal slippage.
              </p>
              <Link href="/explore" className="text-[15px] font-semibold text-[#9D4EDD] hover:text-[#F15BB5] inline-flex items-center gap-2 transition-colors">
                Explore active markets <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Feature 3: Community */}
          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2 group">
            <div className="lg:pr-12">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(0,187,249,0.1)] border border-[rgba(0,187,249,0.2)] px-4 py-1.5 text-[12px] font-bold tracking-widest text-[#00BBF9] uppercase mb-6 shadow-[0_0_20px_rgba(0,187,249,0.15)]">
                <Users size={14} />
                Social Layer
              </div>
              <h3
                className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Token-Gated
                <br />
                Communities.
              </h3>
              <p className="text-[16px] text-[var(--color-text-secondary)] font-light leading-relaxed mb-8">
                Tokens are nothing without the people behind them. Every token deployed features a built-in cryptographic social feed. Gate alpha, host governance votes, and reward your most loyal holders.
              </p>
            </div>
            <div className="relative flex justify-center p-8 bg-[rgba(10,10,20,0.5)] rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,187,249,0.15)]">
              <FeatureIllustration3 />
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="py-24 sm:py-32 border-y border-[var(--color-border)] relative bg-[rgba(5,5,10,0.6)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Architected for <span className="text-[var(--color-text-secondary)]">Simplicity</span>
            </h2>
          </div>

          <div className="flex justify-center mb-20">
            <StepsIllustration />
          </div>

          <div className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-3 stagger-children max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Authenticate",
                desc: "Securely sign in using Leather or Xverse. Your keys, your total control.",
                active: false,
              },
              {
                step: "02",
                title: "Configure",
                desc: "Define your tokenomics, upload assets, and select a mathematical liquidity curve.",
                active: false,
              },
              {
                step: "03",
                title: "Deploy",
                desc: "A single transaction immutably publishes your asset to the Stacks network forever.",
                active: true,
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-[2rem] p-10 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                {item.active && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(157,78,221,0.1)] to-transparent pointer-events-none" />
                )}
                <div
                  className={`mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl font-bold text-[22px] tracking-tight relative z-10 ${item.active
                    ? "bg-gradient-to-br from-[#9D4EDD] to-[#00BBF9] text-white shadow-[0_10px_30px_-10px_rgba(0,187,249,0.5)]"
                    : "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white"
                    }`}
                >
                  {item.step}
                </div>
                <h4 className="text-[19px] font-bold text-white mb-3 tracking-tight relative z-10" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h4>
                <p className="text-[14px] text-[var(--color-text-secondary)] font-light leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TRENDING TOKENS ====== */}
      <section className="py-24 sm:py-32 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Market Movers
              </h2>
              <p className="mt-3 text-[16px] text-[var(--color-text-secondary)] font-light">
                Discover the most highly traded community assets currently live on the protocol.
              </p>
            </div>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-[14px] font-bold tracking-widest text-[#9D4EDD] uppercase hover:text-[#00BBF9] transition-colors"
            >
              Analyze Markets <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {trendingTokens.slice(0, 6).map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="relative overflow-hidden py-32 sm:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(157,78,221,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card rounded-[3rem] p-12 sm:p-20 text-center border-[rgba(255,255,255,0.1)] shadow-[0_0_100px_-30px_rgba(157,78,221,0.3)]">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start Your Token
              <br />
              <span className="text-[var(--color-text-secondary)]">Empire Today.</span>
            </h2>
            <p className="text-[18px] text-[var(--color-text-secondary)] font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Join the elite ecosystem of builders deploying capital-efficient community tokens on Bitcoin's premier L2.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/launch"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-[16px] font-bold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_var(--color-purple-glow)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9D4EDD] to-[#00BBF9] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <Rocket size={20} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="relative z-10 tracking-wide">Initialize Deployment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
