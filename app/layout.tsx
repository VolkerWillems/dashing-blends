import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import "./refinements.css";
import "./parallax-fix.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://dashing-blends.nl"),
  title: {
    default: "Dashing Blends | Cocktails & Hospitality",
    template: "%s | Dashing Blends",
  },
  description:
    "Cocktailworkshops, een mobiele cocktailbar en horeca support vanuit Venlo voor particuliere en zakelijke gelegenheden.",
  openGraph: {
    title: "Dashing Blends | Cocktails & Hospitality",
    description:
      "Cocktailworkshops, een mobiele cocktailbar en horeca support vanuit Venlo voor particuliere en zakelijke gelegenheden.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
