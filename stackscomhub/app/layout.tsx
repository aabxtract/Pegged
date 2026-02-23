import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pegged — Community Token Launchpad on Stacks",
  description:
    "Launch, discover, and trade community tokens on the Stacks blockchain. A social trading hub powered by Bitcoin.",
  keywords: [
    "Stacks",
    "Bitcoin",
    "token launchpad",
    "community tokens",
    "SIP-010",
    "DeFi",
    "trading",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
