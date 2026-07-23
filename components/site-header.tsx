import Image from "next/image";
import Link from "next/link";
import { Mail, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Cocktailworkshops", href: "/cocktailworkshops" },
  { label: "Mobiele cocktailbar", href: "/mobiele-cocktailbar" },
  { label: "Horeca support", href: "/horeca-support" },
  { label: "Over", href: "/over" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Dashing Blends home">
          <Image src="/logodashingblends.webp" width={46} height={46} alt="Dashing Blends" priority />
          <div className="leading-tight">
            <p className="text-sm font-black uppercase tracking-[0.08em]">Dashing Blends</p>
            <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-secondary">
              Cocktails & hospitality
            </p>
          </div>
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm" className="text-[0.68rem] uppercase tracking-[0.12em]">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <Button asChild className="hidden uppercase tracking-[0.1em] sm:inline-flex">
          <Link href="/contact">
            <Mail data-icon="inline-start" />
            Aanvragen
          </Link>
        </Button>

        <details className="group relative xl:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center border border-border bg-card text-foreground transition hover:border-secondary/50 [&::-webkit-details-marker]:hidden">
            <Menu className="size-5" aria-hidden />
            <span className="sr-only">Open navigatie</span>
          </summary>
          <nav className="absolute right-0 top-14 w-72 border border-border bg-card/98 p-3 shadow-2xl backdrop-blur-xl" aria-label="Mobiele navigatie">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-border/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition last:border-0 hover:bg-muted/60 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
