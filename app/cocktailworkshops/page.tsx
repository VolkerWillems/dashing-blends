import type { Metadata } from "next";
import Image from "next/image";
import { Check, GlassWater, UsersRound } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cocktailworkshops | Dashing Blends",
  description:
    "Cocktailworkshops op locatie voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen in Venlo en omgeving.",
};

const suitableFor = [
  "Bedrijfsuitjes en teamactiviteiten",
  "Vrijgezellenfeesten",
  "Verjaardagen en privéfeesten",
  "Vriendengroepen",
  "Groepen die alcoholvrije cocktails willen opnemen",
];

const workshopFlow = [
  {
    title: "Ontvangst en uitleg",
    body: "Duane introduceert de materialen, basistechnieken en smaken waarmee de groep aan de slag gaat.",
  },
  {
    title: "Zelf shaken en bouwen",
    body: "De deelnemers maken de cocktails zelf. Er is ruimte voor vragen, proeven en persoonlijke begeleiding.",
  },
  {
    title: "Samen proeven",
    body: "De gemaakte cocktails worden gezamenlijk geproefd. De workshop blijft ontspannen, praktisch en toegankelijk.",
  },
];

export default function CocktailWorkshopsPage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Cocktailworkshops op locatie"
        title="Zelf shaken, proeven en beleven."
        introduction="Dashing Blends verzorgt interactieve cocktailworkshops voor groepen. Geen lange demonstratie, maar zelf aan de slag met professionele materialen, technieken en begeleiding van Duane."
        image="/comic/duane-team-04.png"
        imageAlt="Duane begeleidt een groep tijdens een cocktailworkshop in vintage comicstijl"
        imagePosition="object-center"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="fade-up">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Wat je kunt verwachten</span>
            </div>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Een workshop waarin iedereen echt meedoet.
            </h2>
          </div>

          <div className="fade-up grid gap-6 sm:grid-cols-2">
            <div className="subtle-panel border border-border p-7 sm:p-9">
              <GlassWater className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-4xl">Cocktails en mocktails</h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                De workshop kan bestaan uit cocktails, alcoholvrije varianten of een combinatie. De invulling wordt vooraf afgestemd op de groep en gelegenheid.
              </p>
            </div>
            <div className="subtle-panel border border-border p-7 sm:p-9">
              <UsersRound className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-4xl">Persoonlijke begeleiding</h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Duane legt de technieken helder uit en begeleidt de deelnemers tijdens het maken. Ervaring achter de bar is niet nodig.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="image-frame fade-up min-h-[640px]">
            <Image
              src="/comic/duane-shake-01.png"
              alt="Duane demonstreert cocktailtechnieken tijdens een workshop in vintage comicstijl"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_28%]"
            />
            <div className="editorial-overlay" />
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Voor welke gelegenheden</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl">Geschikt voor een ontspannen groepsactiviteit.</h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              De workshop wordt op locatie verzorgd en kan worden afgestemd op de samenstelling van de groep, de beschikbare tijd en de gewenste sfeer.
            </p>
            <ul className="mt-9 grid gap-4">
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

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell">
          <div className="fade-up max-w-4xl">
            <p className="eyebrow-copy text-secondary">Opbouw van de workshop</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">Duidelijk opgebouwd, zonder schoolbankgevoel.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
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
        title="Een cocktailworkshop plannen voor jouw groep?"
        body="Stuur de gewenste datum, locatie, het aantal deelnemers en eventuele voorkeuren voor cocktails of mocktails mee."
      />
      <SiteFooter />
    </main>
  );
}
