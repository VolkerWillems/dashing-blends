import type { Metadata } from "next";
import Image from "next/image";
import { Check, GlassWater, UsersRound } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ParallaxDivider } from "@/components/parallax-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cocktail workshop op locatie",
  description:
    "Interactieve cocktailworkshops voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen in Venlo en omgeving.",
  alternates: {
    canonical: "/cocktailworkshops",
  },
};

const suitableFor = [
  "Bedrijfsuitjes en teamactiviteiten",
  "Vrijgezellenfeesten",
  "Verjaardagen en privéfeesten",
  "Vriendengroepen",
  "Groepen die cocktails en mocktails willen combineren",
];

const workshopFlow = [
  {
    title: "Kennismaken",
    body: "De groep maakt kennis met de materialen, smaken en basistechnieken van een professionele bartender.",
  },
  {
    title: "Zelf aan de slag",
    body: "Iedere deelnemer gaat shaken, bouwen en garneren onder persoonlijke begeleiding van Duane.",
  },
  {
    title: "Samen proeven",
    body: "De zelfgemaakte cocktails en mocktails worden geproefd in een ontspannen en sociale setting.",
  },
];

export default function CocktailWorkshopsPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Cocktail Workshop"
        title="Ontdek samen de wereld van cocktails."
        introduction="Een interactieve workshop waarin je technieken van een professionele bartender leert en geniet van cocktails die je zelf hebt gemaakt. Geschikt voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen."
        image="/comic/duane-team-04.png"
        imageAlt="Dashing Blends begeleidt een interactieve cocktailworkshop"
        imagePosition="object-center"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="fade-up">
            <div className="flex items-center gap-4">
              <span className="section-rule h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Interactief en persoonlijk</span>
            </div>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Geen demonstratie aan de zijlijn, maar zelf maken en beleven.
            </h2>
          </div>

          <div className="motion-grid grid gap-6 sm:grid-cols-2">
            <div className="subtle-panel motion-surface border border-border p-7 sm:p-9">
              <GlassWater className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-4xl">Cocktails en mocktails</h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                De invulling kan bestaan uit alcoholische cocktails, alcoholvrije varianten of een combinatie. Smaken en recepten worden vooraf afgestemd op de groep.
              </p>
            </div>
            <div className="subtle-panel motion-surface border border-border p-7 sm:p-9">
              <UsersRound className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-4xl">Professionele begeleiding</h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Duane legt technieken en materialen toegankelijk uit en begeleidt iedereen tijdens het maken. Ervaring is niet nodig.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="image-frame motion-media fade-up min-h-[640px]">
            <Image
              src="/comic/duane-shake-01.png"
              alt="Cocktailtechnieken tijdens een workshop van Dashing Blends"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_28%]"
            />
            <div className="editorial-overlay" />
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Voor welke gelegenheden</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl">
              Een sociale activiteit die wordt afgestemd op jouw groep.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              De workshop wordt op locatie verzorgd en aangepast aan de groepsgrootte, beschikbare tijd, gewenste sfeer en praktische mogelijkheden.
            </p>
            <ul className="feature-list mt-9 grid gap-4">
              {suitableFor.map((item) => (
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
        image="/comic/duane-mixing-09.png"
        alt="Cocktails maken tijdens een workshop van Dashing Blends"
        eyebrow="Leren, shaken en genieten"
        title="Een professionele cocktailworkshop met ruimte voor techniek, plezier en persoonlijke aandacht."
        imagePosition="center"
        size="compact"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell">
          <div className="fade-up max-w-4xl">
            <p className="eyebrow-copy text-secondary">Opbouw van de workshop</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Duidelijk opgebouwd en volledig gericht op samen doen.
            </h2>
          </div>
          <div className="motion-grid mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {workshopFlow.map((step, index) => (
              <article key={step.title} className="fade-up bg-card p-8 sm:p-10">
                <p className="display-copy text-5xl text-primary/55">0{index + 1}</p>
                <div className="gold-rule my-7 h-px" />
                <h3 className="display-copy text-4xl">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Een cocktailworkshop organiseren?"
        body="Stuur de gewenste datum, locatie, het aantal deelnemers en eventuele voorkeuren voor cocktails of mocktails. Dashing Blends denkt mee over een passende invulling."
        image="/comic/duane-shake-06.png"
      />
      <SiteFooter />
    </main>
  );
}
