import type { Metadata } from "next";
import Image from "next/image";
import { Check, Clock3, Martini, PartyPopper } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ParallaxDivider } from "@/components/parallax-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Mobiele cocktailbar voor evenementen",
  description:
    "Professionele cocktails, bartender en mobiele cocktailbar voor verjaardagen, bruiloften, bedrijfsfeesten, festivals en evenementen.",
  alternates: {
    canonical: "/mobiele-cocktailbar",
  },
};

const fixedPackage = [
  "Vooraf afgesproken aantal cocktails",
  "Professionele bartender",
  "Alle benodigde cocktailmaterialen",
  "Glaswerk",
];

const hourlyPackage = [
  "Professionele bartender",
  "Benodigde cocktailmaterialen",
  "Glaswerk",
  "Flexibele inzet op basis van de duur van het evenement",
];

const benefits = [
  "Professionele cocktails met hoogwaardige ingrediënten",
  "Persoonlijke service en een gastvrije uitstraling",
  "Flexibele arrangementen voor kleine en grote evenementen",
  "Geschikt voor particuliere en zakelijke opdrachtgevers",
  "Een cocktailervaring die aansluit bij de sfeer van jouw evenement",
];

export default function MobileCocktailBarPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Dashing Blends Cocktailbar"
        title="Breng extra sfeer en beleving naar jouw evenement."
        introduction="Met de mobiele cocktailbar van Dashing Blends haal je professionele cocktails, een ervaren bartender en persoonlijke gastvrijheid naar jouw locatie. De service wordt afgestemd op jouw wensen, gasten en evenement."
        image="/comic/duane-shots-03.png"
        imageAlt="Dashing Blends verzorgt een mobiele cocktailbar op locatie"
        imagePosition="object-center"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="fade-up">
            <p className="eyebrow-copy text-secondary">Professionele cocktails en gastvrijheid</p>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Een goede cocktail is meer dan een drankje.
            </h2>
          </div>
          <div className="fade-up space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Een cocktail brengt gasten samen, maakt gesprekken los en geeft een evenement extra uitstraling. Dashing Blends combineert de drankjes daarom met actieve aandacht voor sfeer en gastbeleving.
            </p>
            <p>
              De mobiele cocktailbar is geschikt voor verjaardagen, bruiloften, bedrijfsfeesten, festivals en exclusieve evenementen. De cocktailservice wordt volledig afgestemd op de locatie, het aantal gasten en de gewenste invulling.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="mb-14 max-w-5xl fade-up">
          <p className="eyebrow-copy text-secondary">Twee flexibele arrangementen</p>
          <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
            Kies een vaste afname of flexibele service op uurbasis.
          </h2>
        </div>

        <div className="motion-grid grid gap-8 lg:grid-cols-2">
          <article className="subtle-panel motion-surface border border-border p-8 sm:p-10">
            <Martini className="text-secondary" aria-hidden />
            <p className="eyebrow-copy mt-8">Cocktail arrangement</p>
            <h3 className="display-copy mt-5 text-4xl sm:text-5xl">Op afnamebasis</h3>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Geschikt voor verjaardagen, privéfeesten, borrels en kleinere evenementen waarbij je vooraf duidelijkheid wilt over het aantal cocktails.
            </p>
            <h4 className="mt-8 text-sm font-black uppercase tracking-[0.12em] text-secondary">Inclusief</h4>
            <ul className="feature-list mt-5 grid gap-4">
              {fixedPackage.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-border/70 pb-4">
                  <Check className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-7 text-muted-foreground">
              Een professionele mobiele cocktailbar in verschillende uitvoeringen kan optioneel worden toegevoegd. Wanneer het evenement langer doorgaat, kunnen extra cocktails worden verzorgd als de planning en voorraad dat toelaten.
            </p>
          </article>

          <article className="subtle-panel motion-surface border border-border p-8 sm:p-10">
            <Clock3 className="text-secondary" aria-hidden />
            <p className="eyebrow-copy mt-8">Cocktailservice</p>
            <h3 className="display-copy mt-5 text-4xl sm:text-5xl">Op uurbasis</h3>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Een passende keuze voor grotere evenementen waar flexibiliteit belangrijk is en het aantal cocktails moet kunnen meegroeien met het werkelijke verbruik.
            </p>
            <h4 className="mt-8 text-sm font-black uppercase tracking-[0.12em] text-secondary">Inclusief</h4>
            <ul className="feature-list mt-5 grid gap-4">
              {hourlyPackage.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-border/70 pb-4">
                  <Check className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-7 text-muted-foreground">
              Cocktails en ingrediënten zijn bij deze vorm niet standaard inbegrepen. Mogelijkheden zijn nacalculatie, eigen inkoop op basis van een samengestelde lijst, verlenging van de service en inzet van meerdere bartenders.
            </p>
          </article>
        </div>
      </section>

      <ParallaxDivider
        image="/comic/duane-retro-07.png"
        alt="Dashing Blends cocktailbar tijdens een evenement"
        eyebrow="Van intiem tot grootschalig"
        title="De cocktailservice beweegt mee met het formaat, tempo en karakter van jouw evenement."
        imagePosition="center"
        size="compact"
        align="right"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="image-frame motion-media fade-up min-h-[620px]">
            <Image
              src="/comic/duane-cocktail-05.png"
              alt="Professionele cocktailservice van Dashing Blends"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-center"
            />
            <div className="editorial-overlay" />
          </div>
          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Waarom Dashing Blends?</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl">
              Professionele service die bij jouw evenement past.
            </h2>
            <ul className="feature-list mt-9 grid gap-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-border/70 pb-4">
                  <Check className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="subtle-panel motion-surface grid gap-8 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
          <PartyPopper className="size-10 text-secondary" aria-hidden />
          <div>
            <p className="eyebrow-copy">Passend voorstel</p>
            <h2 className="display-copy mt-5 text-4xl sm:text-5xl">
              Van een intieme verjaardag tot een evenement met honderden gasten.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              Dashing Blends denkt mee over een invulling die aansluit op jouw wensen, budget, locatie en verwachte bezoekersaantal.
            </p>
          </div>
        </div>
      </section>

      <ContactCta
        title="Benieuwd naar de mogelijkheden voor jouw evenement?"
        body="Stuur de datum, locatie, het aantal gasten en een korte omschrijving van de gelegenheid. Je ontvangt vervolgens een voorstel dat past bij de gewenste cocktailservice."
        image="/comic/duane-work-02.png"
      />
      <SiteFooter />
    </main>
  );
}
