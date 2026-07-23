import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Cocktailworkshops", href: "/cocktailworkshops" },
  { label: "Mobiele cocktailbar", href: "/mobiele-cocktailbar" },
  { label: "Horeca support", href: "/horeca-support" },
];

const company = [
  { label: "Home", href: "/" },
  { label: "Over Dashing Blends", href: "/over" },
  { label: "Contact", href: "/contact" },
];

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="eyebrow-copy text-secondary">{title}</p>
      <div className="mt-5 flex flex-col gap-3.5 text-sm text-muted-foreground">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="footer-link">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell py-14 sm:py-18 lg:py-20">
        <div className="grid gap-12 border-b border-border/70 pb-12 sm:pb-14 lg:grid-cols-[1.3fr_0.65fr_0.65fr_0.9fr] lg:gap-10">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-4" aria-label="Dashing Blends home">
              <Image src="/logodashingblends.webp" width={58} height={58} alt="Dashing Blends" className="size-14 object-contain" />
              <div>
                <p className="text-base font-bold uppercase tracking-[0.08em]">Dashing Blends</p>
                <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-secondary">
                  Cocktails & hospitality
                </p>
              </div>
            </Link>
            <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Cocktailworkshops, mobiele barservice en professionele horecaondersteuning op locatie vanuit Venlo en Tegelen.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://nl.linkedin.com/in/duane-chia-27945b62"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Dashing Blends op LinkedIn"
              >
                <Linkedin className="size-4" aria-hidden />
                LinkedIn
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
              <a href="mailto:info@dashingblends.nl" className="social-link" aria-label="E-mail Dashing Blends">
                <Mail className="size-4" aria-hidden />
                E-mail
              </a>
            </div>
          </div>

          <FooterLinks title="Diensten" links={services} />
          <FooterLinks title="Website" links={company} />

          <div>
            <p className="eyebrow-copy text-secondary">Contact</p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <a href="mailto:info@dashingblends.nl" className="footer-contact">
                <Mail className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden />
                <span>info@dashingblends.nl</span>
              </a>
              <div className="footer-contact">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden />
                <span>Venlo, Tegelen en omgeving</span>
              </div>
              <Link href="/contact" className="footer-link mt-2 text-foreground">
                Aanvraag versturen
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dashing Blends. Alle rechten voorbehouden.</p>
          <p className="uppercase tracking-[0.14em]">Venlo · Tegelen · Op locatie</p>
        </div>
      </div>
    </footer>
  );
}
