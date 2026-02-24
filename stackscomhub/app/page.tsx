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
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E1B4B] via-[#12122B] to-[#0F0A2A] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 relative overflow-hidden border border-[rgba(139,92,246,0.15)]">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12)_0%,transparent_70%)] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06)_0%,transparent_70%)] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }} />

            <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
              {/* Left: text */}
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-xs font-medium text-white/80 mb-6 backdrop-blur-sm">
                  <SiBitcoin size={12} className="text-[var(--color-gold)]" />
                  Powered by Stacks & Bitcoin
                </div>
                <h1
                  className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Launch Your{" "}
                  <span className="gradient-text-alt">Community Token</span>{" "}
                  on Bitcoin
                </h1>
                <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed">
                  The token launchpad and social trading hub built on Stacks.
                  Create, discover, and trade community tokens — all secured by
                  Bitcoin.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/launch"
                    className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm"
                  >
                    <Rocket size={16} />
                    Launch Token
                  </Link>
                  <Link
                    href="/explore"
                    className="btn-outline inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm text-white/80 border-white/15 hover:border-white/30 hover:text-white hover:bg-white/[0.04]"
                  >
                    Explore Tokens
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right: illustration */}
              <div className="w-full max-w-sm lg:max-w-md flex-shrink-0">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PARTNERS / CHAINS ====== */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {[
              { icon: SiBitcoin, label: "Bitcoin" },
              { icon: Shield, label: "Stacks" },
              { icon: Zap, label: "SIP-010" },
              { icon: Bot, label: "Clarity" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
                <Icon size={20} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURES MARQUEE ====== */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#4C1D95] px-6 py-4 animate-gradient" style={{ backgroundSize: '200% 200%' }}>
            <p
              className="text-center text-sm sm:text-base font-semibold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ✨ Where Community Meets Innovation and Token Clarity ✨
            </p>
          </div>
        </div>
      </section>

      {/* ====== FEATURE SECTIONS ====== */}
      <section className="py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Unleashing the Power of
              <br />
              <span className="gradient-text-alt">Community Tokens</span>
            </h2>
            <p className="mt-5 text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Everything you need to launch, trade, and grow a community token
              — from bonding curves to social feeds, all in one platform.
            </p>
          </div>

          {/* Feature 1: Launch */}
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 mb-24">
            <div>
              <div className="badge-purple inline-flex items-center gap-2 mb-5">
                <Rocket size={12} />
                Launch
              </div>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Instant, Secure
                <br />
                Token Launches
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Deploy a fully compliant SIP-010 token on Stacks in minutes.
                Our guided wizard handles the smart contract, bonding curve, and
                token page creation — no coding required.
              </p>
            </div>
            <div className="flex justify-center">
              <FeatureIllustration1 />
            </div>
          </div>

          {/* Feature 2: Trade */}
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <FeatureIllustration2 />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green-dim)] px-3 py-1 text-xs font-semibold text-[var(--color-green)] mb-5">
                <BarChart3 size={12} />
                Trade
              </div>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Multi-Token Trading &
                <br />
                Live Analytics
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Buy and sell community tokens against bonding curves. Track live
                prices with professional candlestick charts, manage slippage,
                and watch your portfolio grow in real-time.
              </p>
            </div>
          </div>

          {/* Feature 3: Community */}
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cyan-dim)] px-3 py-1 text-xs font-semibold text-[var(--color-cyan)] mb-5">
                <Users size={12} />
                Community
              </div>
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Smart Community Feeds &
                <br />
                Token-Gated Content
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Every token gets its own community feed. Post updates,
                governance proposals, and airdrop announcements. Gate content to
                verified holders to keep the conversation high-signal.
              </p>
            </div>
            <div className="flex justify-center">
              <FeatureIllustration3 />
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="py-16 sm:py-28 border-y border-[var(--color-border)] relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(139,92,246,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              From Setup to First
              <br />
              <span className="gradient-text-alt">Token in Minutes</span>
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Three simple steps to launch your community token, secured by
              Bitcoin through the Stacks blockchain.
            </p>
          </div>

          {/* Steps illustration */}
          <div className="flex justify-center">
            <StepsIllustration />
          </div>

          {/* Steps detail cards */}
          <div className="grid grid-cols-1 gap-6 mt-14 sm:grid-cols-3 stagger-children">
            {[
              {
                step: "1",
                title: "Connect Your Wallet",
                desc: "Sign in with Leather or Xverse. No passwords, no email — just your Stacks wallet.",
                active: false,
              },
              {
                step: "2",
                title: "Design Your Token",
                desc: "Pick a name, ticker, and bonding curve. Upload your logo and set your tokenomics.",
                active: false,
              },
              {
                step: "3",
                title: "Launch & Grow",
                desc: "Deploy your SIP-010 contract on-chain. Your token page goes live instantly.",
                active: true,
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-2xl p-6 text-center">
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl font-bold text-lg ${item.active
                      ? "bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-lg shadow-purple-500/20"
                      : "bg-[var(--color-purple-light)] text-[var(--color-purple)]"
                    }`}
                >
                  {item.step}
                </div>
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TRENDING TOKENS ====== */}
      <section className="py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Trending Tokens
              </h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                The hottest community tokens on Stacks right now
              </p>
            </div>
            <Link
              href="/explore"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-purple)] hover:text-[var(--color-purple-dark)] transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {trendingTokens.slice(0, 6).map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/explore"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-purple)]"
            >
              View all tokens <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="border-t border-[var(--color-border)] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative">
          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--color-text-primary)] mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Launch Your
              <br />
              <span className="gradient-text-alt">Community Token?</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10">
              Join hundreds of communities already building on Stacks. Your
              token is just a few clicks away.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/launch"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-sm"
              >
                <Rocket size={16} />
                Get Started
              </Link>
              <Link
                href="/explore"
                className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-sm"
              >
                Explore Tokens
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
