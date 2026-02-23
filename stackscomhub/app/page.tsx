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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl bg-[var(--color-purple)] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Left: text */}
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white mb-6">
                  <SiBitcoin size={12} />
                  Powered by Stacks & Bitcoin
                </div>
                <h1
                  className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Launch Your Community Token on Bitcoin
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                  The token launchpad and social trading hub built on Stacks.
                  Create, discover, and trade community tokens — all secured by
                  Bitcoin.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/launch"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-purple)] shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
                  >
                    <Rocket size={16} />
                    Launch Token
                  </Link>
                  <Link
                    href="/explore"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
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
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
              <SiBitcoin size={20} />
              Bitcoin
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
              <Shield size={20} />
              Stacks
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
              <Zap size={20} />
              SIP-010
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
              <Bot size={20} />
              Clarity
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES MARQUEE ====== */}
      <section className="bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[var(--color-purple)] px-6 py-4">
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
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Unleashing the Power of
              <br />
              Community Tokens
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Everything you need to launch, trade, and grow a community token
              — from bonding curves to social feeds, all in one platform.
            </p>
          </div>

          {/* Feature 1: Launch */}
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 mb-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-purple-light)] px-3 py-1 text-xs font-semibold text-[var(--color-purple)] mb-4">
                <Rocket size={12} />
                Launch
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-3"
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
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 mb-20">
            <div className="order-2 lg:order-1 flex justify-center">
              <FeatureIllustration2 />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[var(--color-green)] mb-4">
                <BarChart3 size={12} />
                Trade
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-3"
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
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-[var(--color-cyan)] mb-4">
                <Users size={12} />
                Community
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-3"
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
      <section className="bg-[var(--color-bg-secondary)] py-16 sm:py-24 border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              From Setup to First
              <br />
              Token in Minutes
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
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-3 stagger-children">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-purple-light)] text-[var(--color-purple)] font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Connect Your Wallet
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Sign in with Leather or Xverse. No passwords, no email — just
                your Stacks wallet.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-purple-light)] text-[var(--color-purple)] font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Design Your Token
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Pick a name, ticker, and bonding curve. Upload your logo and set
                your tokenomics.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-purple)] text-white font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Launch & Grow
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Deploy your SIP-010 contract on-chain. Your token page goes live
                instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRENDING TOKENS ====== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
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
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[var(--color-purple)] hover:underline"
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
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-purple)] hover:underline"
            >
              View all tokens <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Launch Your
              <br />
              Community Token?
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
              Join hundreds of communities already building on Stacks. Your
              token is just a few clicks away.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/launch"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-purple)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all hover:bg-[var(--color-purple-dark)] hover:shadow-purple-300 active:scale-[0.98]"
              >
                <Rocket size={16} />
                Get Started
              </Link>
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-purple)] hover:text-[var(--color-purple)]"
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
