import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";

import "./globals.css";

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
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
