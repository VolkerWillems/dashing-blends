import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SiteMotion } from "@/components/site-motion";
import { StructuredData } from "@/components/structured-data";
import { ThemeRuntime } from "@/components/theme-runtime";

import "./globals.css";
import "./refinements.css";
import "./parallax-fix.css";
import "./finishing-touches.css";
import "./site-finish.css";
import "./typography-tuning.css";
import "./heading-fix.css";
import "./theme-overrides.css";

const displayFont = localFont({
  src: "../public/fonts/Shutdawn-Regular.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "500",
  style: "normal",
});

const bodyFont = localFont({
  src: [
    {
      path: "../public/fonts/Noirden-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Noirden-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Noirden-RegularOblique.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Noirden-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Noirden-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#120a11",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dashing-blends.nl"),
  applicationName: "Dashing Blends",
  title: {
    default: "Dashing Blends | Cocktails & Hospitality",
    template: "%s | Dashing Blends",
  },
  description:
    "Cocktailworkshops, een mobiele cocktailbar en horeca support vanuit Venlo voor particuliere en zakelijke gelegenheden.",
  keywords: [
    "cocktailworkshop Venlo",
    "mobiele cocktailbar",
    "bartender op locatie",
    "cocktail catering",
    "horeca support Venlo",
    "cocktails en mocktails",
  ],
  authors: [{ name: "Dashing Blends", url: "https://dashing-blends.nl" }],
  creator: "Dashing Blends",
  publisher: "Dashing Blends",
  category: "Hospitality",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/logodashingblends.webp",
    apple: "/logodashingblends.webp",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Dashing Blends | Cocktails & Hospitality",
    description:
      "Cocktailworkshops, een mobiele cocktailbar en horeca support vanuit Venlo voor particuliere en zakelijke gelegenheden.",
    url: "https://dashing-blends.nl",
    siteName: "Dashing Blends",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashing Blends | Cocktails & Hospitality",
    description:
      "Cocktailworkshops, mobiele cocktailbar en horeca support op locatie vanuit Venlo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#page-content">
          Direct naar de inhoud
        </a>
        <ThemeRuntime />
        <SiteMotion />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
