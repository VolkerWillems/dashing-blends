import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  GlassWater,
  Handshake,
  Mail,
  MapPin,
  MenuSquare,
  PartyPopper,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Diensten", href: "#diensten" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Over Duane", href: "#over" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Cocktailworkshops",
    eyebrow: "Samen shaken",
    description:
      "Een interactieve workshop voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen. Geen droge demonstratie, maar zelf maken, proeven en beleven.",
    icon: GlassWater,
    image: "/duane-02.webp",
    imagePosition: "object-[50%_28%]",
    points: ["Professionele technieken", "Cocktails en mocktails", "Persoonlijke begeleiding"],
  },
  {
    title: "Mobiele cocktailbar",
    eyebrow: "Bar op locatie",
    description:
      "Een complete cocktailervaring voor bruiloften, bedrijfsfeesten, festivals en privé-events, afgestemd op de sfeer, locatie en gasten.",
    icon: PartyPopper,
    image: "/duane-01.webp",
    imagePosition: "object-[66%_center]",
    points: ["Bartender op locatie", "Cocktailmaterialen", "Optioneel met mobiele bar"],
  },
  {
    title: "Horeca support",
    eyebrow: "Flexibele versterking",
    description:
      "Extra capaciteit voor bars, bediening en eventteams. Representatief, ervaren en gewend om zonder eindeloze briefing direct mee te draaien.",
    icon: Handshake,
    image: "/duane-03.webp",
    imagePosition: "object-center",
    points: ["Bar en bediening", "Events en horeca", "Rust tijdens piekmomenten"],
  },
];

const moments = [
  "Bedrijfsborrels",
  "Bruiloften",
  "Privéfeesten",
  "Festivals",
  "Vrijgezellenfeesten",
  "Horecateams",
];

const process = [
  {
    title: "Kennismaken",
    description: "We bespreken datum, locatie, groep, sfeer en wat je gasten aan het einde van de avond moeten onthouden.",
  },
  {
    title: "Concept bepalen",
    description: "Workshop, mobiele bar, support of een combinatie. Geen standaardpakket dat toevallig in jouw agenda past.",
  },
  {
    title: "Tot in detail",
    description: "Heldere afspraken over materialen, timing, cocktailkaart, presentatie en alle praktische details.",
  },
  {
    title: "Showtime",
    description: "Professionele service, oprechte gastvrijheid en cocktails die precies bij het moment passen.",
  },
];

const highlights = [
  "Persoonlijke aanpak en maatwerk voor ieder evenement",
  "Professionele cocktails met oprechte gastvrijheid",
  "Flexibel inzetbaar voor particuliere en zakelijke events",
  "Actief meedenken van voorbereiding tot uitvoering",
];

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="flex max-w-4xl flex-col gap-5">
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-secondary/70" />
        <span className="eyebrow-copy text-secondary">{eyebrow}</span>
      </div>
      <h2 className="display-copy text-5xl leading-[0.92] text-foreground sm:text-6xl xl:text-7xl">
        {title}
      </h2>
      {body ? <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{body}</p> : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <figure className="hero-visual">
      <Image
        src="/duane-03.webp"
        alt="Duane bereidt een cocktail achter de bar"
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />

      <div className="absolute left-8 top-8 z-10 flex items-center gap-3 border border-secondary/30 bg-background/72 px-4 py-3 backdrop-blur-md sm:left-10 sm:top-10">
        <Image src="/logodashingblends.webp" width={42} height={42} alt="" aria-hidden />
        <div className="leading-tight">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em]">Dashing Blends</p>
          <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-secondary">
            Venlo · est. hospitality
          </p>
        </div>
      </div>

      <figcaption className="absolute bottom-9 left-8 right-8 z-10 sm:bottom-10 sm:left-10 sm:right-10">
        <div className="gold-rule mb-6 h-px" />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow-copy text-secondary">Behind the bar</p>
            <p className="display-copy mt-2 max-w-xl text-4xl leading-none text-foreground sm:text-5xl">
              Craft, character & a little theatre.
            </p>
          </div>
          <div className="border-l border-secondary/35 pl-5 text-sm leading-7 text-muted-foreground">
            <p>Mobiele bar</p>
            <p>Workshops</p>
            <p>Hospitality support</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
        <div className="section-shell flex min-h-20 items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3" aria-label="Dashing Blends home">
            <Image src="/logodashingblends.webp" width={46} height={46} alt="" aria-hidden priority />
            <div className="leading-tight">
              <p className="text-sm font-black uppercase tracking-[0.08em]">Dashing Blends</p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary">
                Cocktails & hospitality
              </p>
            </div>
          </a>

          <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm" className="uppercase tracking-[0.12em]">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>

          <Button asChild className="hidden uppercase tracking-[0.12em] sm:inline-flex">
            <a href="mailto:info@dashingblends.nl">
              <Mail data-icon="inline-start" />
              Aanvragen
            </a>
          </Button>

          <Button asChild variant="outline" size="icon" className="lg:hidden" aria-label="Ga naar diensten">
            <a href="#diensten">
              <MenuSquare />
            </a>
          </Button>
        </div>
      </header>

      <section className="section-shell grid min-h-[calc(100dvh-80px)] items-center gap-12 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
        <div className="flex flex-col gap-9 lg:pr-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-secondary/70" />
            <span className="eyebrow-copy text-secondary">Cocktail atelier · Venlo</span>
          </div>

          <div className="flex flex-col gap-7">
            <h1 className="display-copy text-6xl leading-[0.82] text-foreground sm:text-7xl xl:text-[7.2rem] 2xl:text-[8.4rem]">
              Cocktails met klasse. Service met karakter.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Dashing Blends brengt een stijlvolle speakeasy-ervaring naar jouw locatie. Met ambachtelijke cocktails,
              ontspannen hospitality en precies genoeg show om de avond memorabel te maken.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="uppercase tracking-[0.12em]">
              <a href="mailto:info@dashingblends.nl?subject=Aanvraag%20Dashing%20Blends">
                Plan je event
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="uppercase tracking-[0.12em]">
              <a href="#diensten">Ontdek de diensten</a>
            </Button>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-y border-border py-6">
            <div>
              <dt className="eyebrow-copy text-muted-foreground">Basis</dt>
              <dd className="mt-2 display-copy text-2xl text-secondary">Venlo</dd>
            </div>
            <div>
              <dt className="eyebrow-copy text-muted-foreground">Voor</dt>
              <dd className="mt-2 display-copy text-2xl text-secondary">Privé & zakelijk</dd>
            </div>
            <div>
              <dt className="eyebrow-copy text-muted-foreground">Stijl</dt>
              <dd className="mt-2 display-copy text-2xl text-secondary">Maatwerk</dd>
            </div>
          </dl>
        </div>

        <HeroVisual />
      </section>

      <section className="border-y border-border/80 bg-card/40 py-5">
        <div className="section-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {moments.map((moment, index) => (
            <div key={moment} className="flex items-center gap-8">
              <span className="eyebrow-copy text-muted-foreground">{moment}</span>
              {index < moments.length - 1 ? <span className="hidden size-1 rounded-full bg-primary md:block" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="diensten" className="section-shell py-24 sm:py-32">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.52fr] xl:items-end">
          <SectionHeading
            eyebrow="Diensten"
            title="Een barervaring die jouw gelegenheid een eigen signatuur geeft."
            body="Van een intieme workshop tot een volledige cocktailbar op locatie. Iedere dienst krijgt dezelfde aandacht voor kwaliteit, presentatie en gastcontact."
          />
          <p className="text-base leading-8 text-muted-foreground xl:max-w-md xl:justify-self-end">
            Geen neon circus en geen dertien-in-een-dozijn cocktailkaart. Wel goede ingrediënten, beheerste presentatie en een
            sfeer die past bij jouw gasten.
          </p>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="service-card vintage-panel overflow-hidden border border-border transition duration-500 hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <Image
                    src={service.image}
                    alt={`${service.title} door Dashing Blends`}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover grayscale-[20%] transition duration-700 hover:scale-105 hover:grayscale-0 ${service.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 z-10 flex size-12 items-center justify-center border border-secondary/40 bg-background/80 text-secondary backdrop-blur">
                    <Icon aria-hidden />
                  </div>
                </div>

                <div className="relative z-10 p-7 sm:p-8">
                  <p className="eyebrow-copy text-primary">{service.eyebrow}</p>
                  <h3 className="display-copy mt-4 text-4xl leading-none text-card-foreground">{service.title}</h3>
                  <p className="mt-6 text-sm leading-7 text-muted-foreground @md:text-base">{service.description}</p>
                  <div className="gold-rule my-7 h-px" />
                  <ul className="flex flex-col gap-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm">
                        <span className="flex size-5 items-center justify-center border border-primary/50 bg-primary/10 text-primary">
                          <Check aria-hidden className="size-3.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-card/35 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="grid grid-cols-[0.72fr_1fr] gap-5">
            <div className="image-frame min-h-[520px] translate-y-12">
              <Image
                src="/duane-02.webp"
                alt="Duane tijdens een cocktailworkshop"
                fill
                sizes="(min-width: 1024px) 32vw, 45vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="image-frame min-h-[620px]">
              <Image
                src="/duane-01.webp"
                alt="Dashing Blends in actie achter de bar"
                fill
                sizes="(min-width: 1024px) 38vw, 55vw"
                className="object-cover object-[68%_center]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-7 lg:pl-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">The Dashing standard</span>
            </div>
            <h2 className="display-copy text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Niet zomaar drankjes. Een zorgvuldig geregisseerd moment.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Goede cocktails zijn techniek. Een goede avond is timing, aandacht en aanvoelen wat een gast nodig heeft.
              Dashing Blends combineert die twee, zonder dat het geforceerd of overdreven wordt.
            </p>
            <blockquote className="border-l border-primary pl-6">
              <p className="display-copy text-3xl leading-tight text-secondary">
                “De beste service voelt moeiteloos, juist omdat achter de schermen alles klopt.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <Badge variant="secondary" className="w-fit uppercase tracking-[0.18em]">
              Waarom dit werkt
            </Badge>
            <h2 className="display-copy text-5xl leading-[0.9] sm:text-6xl xl:text-7xl">
              Gasten onthouden niet alleen wat er in hun glas zat.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-primary-foreground/78">
              Ze onthouden de sfeer, de aandacht en het gevoel dat alles precies op zijn plaats viel.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-primary-foreground/20 bg-primary-foreground/20 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="bg-primary p-7 sm:p-8">
                <Sparkles aria-hidden className="mb-8 text-secondary" />
                <p className="display-copy text-3xl leading-tight">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="werkwijze" className="section-shell py-24 sm:py-32">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Van eerste idee naar laatste cocktail, zonder gedoe."
          body="Een helder proces, duidelijke afspraken en genoeg ruimte om het concept persoonlijk te maken. Mensen hebben al genoeg vergaderingen over vergaderingen."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {process.map((step, index) => (
            <article key={step.title} className="vintage-panel min-h-80 bg-card p-7 sm:p-8">
              <div className="relative z-10">
                <p className="display-copy text-5xl text-primary/70">0{index + 1}</p>
                <div className="gold-rule my-7 h-px" />
                <h3 className="display-copy text-4xl">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="over" className="section-shell grid gap-12 py-24 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="image-frame min-h-[680px]">
          <Image
            src="/duane-04.webp"
            alt="Duane van Dashing Blends met een selectie cocktails"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background via-background/75 to-transparent p-8 pt-32 sm:p-10 sm:pt-40">
            <p className="eyebrow-copy text-secondary">Founder & bartender</p>
            <p className="display-copy mt-3 text-5xl">Duane</p>
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:pl-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-secondary/70" />
            <span className="eyebrow-copy text-secondary">Over Dashing Blends</span>
          </div>
          <h2 className="display-copy text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
            Gastvrijheid is geen extraatje. Het is de hele beleving.
          </h2>
          <div className="flex flex-col gap-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Dashing Blends is ontstaan vanuit liefde voor cocktails en horeca. Inmiddels draait het om complete
              ervaringen waarin kwaliteit, presentatie en persoonlijke aandacht samenkomen.
            </p>
            <p>
              Duane denkt mee in de voorbereiding, schakelt soepel op locatie en zorgt dat gasten zich gezien voelen.
              Professioneel waar het moet, ontspannen waar het kan.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-border bg-card p-5">
              <UsersRound aria-hidden className="text-primary" />
              <p className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">Groepen</p>
              <p className="display-copy mt-2 text-2xl">Klein tot groot</p>
            </div>
            <div className="border border-border bg-card p-5">
              <CalendarCheck aria-hidden className="text-primary" />
              <p className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">Planning</p>
              <p className="display-copy mt-2 text-2xl">Flexibel</p>
            </div>
            <div className="border border-border bg-card p-5">
              <MapPin aria-hidden className="text-primary" />
              <p className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">Regio</p>
              <p className="display-copy mt-2 text-2xl">Venlo e.o.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-24 pt-12 sm:pb-32">
        <div className="vintage-panel grid overflow-hidden border border-border lg:grid-cols-[1fr_0.72fr]">
          <div className="relative z-10 p-7 sm:p-10 lg:p-14">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Klaar om te plannen?</span>
            </div>
            <h2 className="display-copy mt-7 max-w-4xl text-5xl leading-[0.9] sm:text-6xl xl:text-7xl">
              Vertel wat je organiseert. Dan maken we er iets smaakvols van.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Mail je datum, locatie, groepsgrootte en het type event. Dan kan Dashing Blends gericht meedenken over
              workshop, cocktailbar, horeca support of een passende combinatie.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="uppercase tracking-[0.1em]">
                <a href="mailto:info@dashingblends.nl?subject=Aanvraag%20Dashing%20Blends">
                  info@dashingblends.nl
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="uppercase tracking-[0.1em]">
                <a href="#diensten">Bekijk de mogelijkheden</a>
              </Button>
            </div>
          </div>

          <aside className="relative z-10 border-t border-border bg-background/38 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
            <h3 className="eyebrow-copy text-secondary">Handig om mee te sturen</h3>
            <ul className="mt-8 flex flex-col gap-5">
              {["Datum en locatie", "Aantal gasten", "Gewenste dienst", "Sfeer of thema", "Binnen of buiten"].map(
                (item) => (
                  <li key={item} className="flex items-center justify-between gap-4 border-b border-border pb-5">
                    <span>{item}</span>
                    <ChevronRight aria-hidden className="text-primary" />
                  </li>
                ),
              )}
            </ul>
          </aside>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="section-shell flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logodashingblends.webp" width={44} height={44} alt="" aria-hidden />
            <div>
              <p className="font-extrabold uppercase tracking-[0.08em]">Dashing Blends</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Cocktails, hospitality & beleving
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Venlo · info@dashingblends.nl</p>
        </div>
      </footer>
    </main>
  );
}
