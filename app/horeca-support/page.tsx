import type { Metadata } from "next";
import Image from "next/image";
import { Check, Handshake, ShieldCheck, UsersRound } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ParallaxDivider } from "@/components/parallax-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Horeca support voor bars, bediening en evenementen",
  description:
    "Professionele en flexibele horecaondersteuning voor bars, bediening, evenementen en bestaande horecateams vanuit Venlo.",
  alternates: {
    canonical: "/horeca-support",
  },
};

const supportOptions = [
  "Ondersteuning achter de bar",
  "Bediening tijdens evenementen",
  "Extra capaciteit tijdens piekmomenten",
  "Direct meedraaien binnen bestaande horecateams",
  "Representatieve inzet voor particuliere en zakelijke evenementen",
];

export default function HospitalitySupportPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Horeca Support"
        title="Professionele versterking wanneer extra capaciteit nodig is."
        introduction="Dashing Blends biedt ondersteuning voor bars, bediening, evenementen en horecateams. Flexibel inzetbaar, snel ingewerkt en gewend om direct binnen een bestaand team mee te draaien."
        image="/comic/duane-work-02.png"
        imageAlt="Professionele horecaondersteuning door Dashing Blends"
        imagePosition="object-center"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="fade-up">
            <div className="flex items-center gap-4">
              <span className="section-rule h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Tijdelijk extra capaciteit</span>
            </div>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Snel inzetbaar en gericht op een soepel draaiende operatie.
            </h2>
          </div>

          <div className="motion-grid grid gap-6 sm:grid-cols-3">
            <div className="subtle-panel motion-surface border border-border p-7">
              <Handshake className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-3xl">Flexibel</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Inzet wordt afgestemd op datum, werktijden, werkzaamheden en de samenstelling van het bestaande team.
              </p>
            </div>
            <div className="subtle-panel motion-surface border border-border p-7">
              <ShieldCheck className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-3xl">Professioneel</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Representatieve service met aandacht voor gasten, collega’s en de werkwijze van de opdrachtgever.
              </p>
            </div>
            <div className="subtle-panel motion-surface border border-border p-7">
              <UsersRound className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-3xl">Teamgericht</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Ondersteuning sluit praktisch aan en vraagt zo min mogelijk extra begeleiding tijdens drukke momenten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="image-frame motion-media fade-up min-h-[650px]">
            <Image
              src="/comic/duane-team-04.png"
              alt="Dashing Blends draait mee binnen een horecateam"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="editorial-overlay" />
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Mogelijke inzet</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl">
              Ondersteuning voor horeca, events en piekmomenten.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              De precieze rol wordt vooraf afgestemd op de locatie, verwachte drukte, werkzaamheden en praktische afspraken.
            </p>
            <ul className="feature-list mt-9 grid gap-4">
              {supportOptions.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-border/70 pb-4">
                  <Check className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ParallaxDivider
        image="/comic/duane-barwork-08.png"
        alt="Horeca support door Dashing Blends"
        eyebrow="Direct waarde toevoegen"
        title="De opdrachtgever merkt de extra capaciteit. De gast merkt vooral dat de service goed blijft lopen."
        imagePosition="center"
        size="compact"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="fade-up lg:pr-10">
            <p className="eyebrow-copy text-secondary">Voor opdrachtgevers</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Duidelijke afspraken vooraf, flexibel handelen op locatie.
            </h2>
          </div>
          <div className="fade-up subtle-panel motion-surface border border-border p-8 sm:p-12">
            <p className="text-lg leading-9 text-muted-foreground">
              Voor een passende inzet zijn datum, tijden, locatie, verwachte drukte, werkzaamheden en kledingvoorschriften belangrijk. Met die informatie kan Dashing Blends snel beoordelen wat mogelijk is.
            </p>
          </div>
        </div>
      </section>

      <ContactCta
        title="Tijdelijk extra horeca support nodig?"
        body="Stuur de datum, tijden, locatie en een korte omschrijving van de werkzaamheden. Dashing Blends reageert vervolgens gericht op de aanvraag."
        image="/comic/duane-barwork-08.png"
      />
      <SiteFooter />
    </main>
  );
}
