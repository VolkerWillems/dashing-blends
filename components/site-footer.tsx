import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Cocktailworkshops", href: "/cocktailworkshops" },
  { label: "Mobiele cocktailbar", href: "/mobiele-cocktailbar" },
  { label: "Horeca support", href: "/horeca-support" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/20 py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <Image src="/logodashingblends.webp" width={46} height={46} alt="Dashing Blends" />
            <div>
              <p className="font-extrabold uppercase tracking-[0.08em]">Dashing Blends</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-secondary">Venlo en omgeving</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            Cocktailworkshops, een mobiele cocktailbar en professionele horecaondersteuning voor particuliere en zakelijke gelegenheden.
          </p>
        </div>

        <div>
          <p className="eyebrow-copy text-secondary">Diensten</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
            {services.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow-copy text-secondary">Contact</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="mailto:info@dashingblends.nl" className="transition hover:text-foreground">
              info@dashingblends.nl
            </a>
            <span>Venlo / Tegelen</span>
            <Link href="/contact" className="transition hover:text-foreground">
              Aanvraag versturen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
