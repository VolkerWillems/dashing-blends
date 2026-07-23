import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashing Blends | Cocktails & Hospitality",
  description:
    "Mobiele cocktailbar, cocktailworkshops en horeca support vanuit Venlo voor events met smaak, service en beleving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
