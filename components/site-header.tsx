"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Cocktailworkshops", href: "/cocktailworkshops" },
  { label: "Mobiele cocktailbar", href: "/mobiele-cocktailbar" },
  { label: "Horeca support", href: "/horeca-support" },
  { label: "Over", href: "/over" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="section-shell flex h-[76px] items-center justify-between gap-5 lg:h-[88px]">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Dashing Blends home">
          <Image
            src="/logodashingblends.webp"
            width={48}
            height={48}
            alt="Dashing Blends"
            priority
            className="size-10 shrink-0 object-contain sm:size-12"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-bold uppercase tracking-[0.08em] sm:text-base">Dashing Blends</p>
            <p className="mt-1 hidden text-[0.61rem] font-semibold uppercase tracking-[0.19em] text-secondary/90 sm:block">
              Cocktails & hospitality
            </p>
          </div>
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="header-cta hidden sm:inline-flex">
            <Mail className="size-4" aria-hidden />
            Aanvraag
          </Link>
          <button
            type="button"
            className="menu-toggle xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Sluit navigatie" : "Open navigatie"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "mobile-nav-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="section-shell flex h-full flex-col py-8 sm:py-10">
          <p className="eyebrow-copy text-secondary">Navigatie</p>
          <nav className="mt-7 flex flex-col border-t border-border/70" aria-label="Mobiele navigatie">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                tabIndex={open ? 0 : -1}
              >
                <span className="text-xs text-secondary/80">0{index + 1}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
            <a href="mailto:info@dashingblends.nl" className="mobile-contact-link" tabIndex={open ? 0 : -1}>
              info@dashingblends.nl
            </a>
            <Link href="/contact" className="header-cta justify-center" tabIndex={open ? 0 : -1}>
              Bespreek je aanvraag
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
