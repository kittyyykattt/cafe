import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Instrument_Sans, Playfair_Display, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { activeTheme, siteConfig } from "@/data/siteConfig";
import { CustomCursor } from "@/components/animation/custom-cursor";
import { DesignWatermark } from "@/components/DesignWatermark";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body-family",
  weight: ["400", "500", "600", "700"],
});

const monoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Template`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth antialiased ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body
        className="min-h-full bg-[var(--color-background)] text-[var(--color-foreground)]"
        style={
          {
            "--color-background": activeTheme.background,
            "--color-foreground": activeTheme.foreground,
            "--color-card": activeTheme.card,
            "--color-muted": activeTheme.muted,
            "--color-border": activeTheme.border,
            "--color-primary": activeTheme.primary,
            "--color-accent": activeTheme.accent,
            "--font-heading": activeTheme.headingFont,
            "--font-body": activeTheme.bodyFont,
          } as CSSProperties
        }
      >
        <CustomCursor />
        <DesignWatermark />
        {children}
      </body>
    </html>
  );
}
