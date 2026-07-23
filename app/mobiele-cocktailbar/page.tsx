import type { Metadata } from "next";
import Image from "next/image";
import { Check, Martini, PartyPopper, Sparkles } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Mobiele cocktailbar | Dashing Blends",
  description:
    "Een mobiele cocktailbar en bartender op locatie voor bruiloften, bedrijfsfeesten, privéfeesten en evenementen in Venlo en omgeving.",
};

const occasions = [
  "Bruiloften en recepties",
  "Bedrijfsfeesten en borrels",
  "Verjaardagen en privéfeesten",
  "Festivals en evenementen",
  "Openingen en zakelijke bijeenkomsten",
];

const included = [
  "Een ervaren bartender op locatie",
  "Professionele cocktailmaterialen",
  "Afstemming van de cocktailkaart",
  "Voorbereiding en presentatie",
  "Optioneel inzetbaar met een mobiele bar",
];

export default function MobileCocktailBarPage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Mobiele cocktailbar"
        title="Een professionele barervaring op jouw locatie."
        introduction="Dashing Blends verzorgt cocktails en gastvrijheid op locatie. Van bartender en materialen tot een complete mobiele bar, afgestemd op het type evenement en de gasten."
        image="/duane-03.webp"
        imageAlt="Duane schenkt een cocktail achter de bar"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="fade-up lg:pr-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Barservice op maat</span>
            </div>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Passend bij de locatie, het moment en het tempo van de avond.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              Geen evenement is hetzelfde. Daarom wordt vooraf besproken welke cocktails passen, hoeveel gasten er zijn en welke praktische voorzieningen op locatie beschikbaar zijn.
            </p>
          </div>

          <div className="fade-up grid gap-6 sm:grid-cols-2">
            <div className="subtle-panel border border-border p-8">
              <Martini className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-4xl">Cocktailkaart</h3>
              <p className="mt-5 leading-8 text-muted-foreground">
                De selectie wordt afgestemd op de gelegenheid. Ook alcoholvrije opties kunnen onderdeel zijn van de kaart.
              </p>
            </div>
            <div className="subtle-panel border border-border p-8">
              <PartyPopper className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-4xl">Gastcontact</h3>
              <p className="mt-5 leading-8 text-muted-foreground">
                De service is professioneel en toegankelijk. Gasten krijgen aandacht zonder dat de bar de rest van het evenement overheerst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="image-frame fade-up min-h-[660px]">
            <Image
              src="/duane-01.webp"
              alt="Dashing Blends verzorgt cocktails op locatie"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-[67%_center]"
            />
            <div className="editorial-overlay" />
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Wat kan worden verzorgd</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl">Van bartender tot complete baropstelling.</h2>
            <ul className="mt-9 grid gap-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-border/70 pb-4">
                  <Check className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="fade-up">
            <p className="eyebrow-copy text-secondary">Geschikt voor</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl">Particulier en zakelijk.</h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {occasions.map((occasion) => (
              <div key={occasion} className="fade-up bg-card p-7 sm:p-9">
                <Sparkles className="size-5 text-secondary" aria-hidden />
                <p className="display-copy mt-8 text-3xl leading-tight">{occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Een mobiele cocktailbar voor jouw evenement?"
        body="Stuur de datum, locatie, het verwachte aantal gasten en een korte omschrijving van de gelegenheid. Dan kan Dashing Blends de mogelijkheden gericht beoordelen."
      />
      <SiteFooter />
    </main>
  );
}
