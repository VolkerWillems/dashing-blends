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
  { label: "Over", href: "#over" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Cocktailworkshops",
    eyebrow: "Samen shaken",
    description:
      "Een interactieve workshop voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen. Leren, proeven en vooral samen iets beleven.",
    icon: GlassWater,
    points: ["Professionele technieken", "Cocktails en mocktails", "Geschikt voor kleine groepen"],
  },
  {
    title: "Mobiele cocktailbar",
    eyebrow: "Bar op locatie",
    description:
      "Een complete cocktailervaring voor bruiloften, bedrijfsfeesten, festivals en prive-events, afgestemd op sfeer, locatie en gasten.",
    icon: PartyPopper,
    points: ["Bartender op locatie", "Cocktailmaterialen", "Optioneel met mobiele bar"],
  },
  {
    title: "Horeca support",
    eyebrow: "Flexibele versterking",
    description:
      "Extra capaciteit voor bars, bediening en eventteams. Snel inzetbaar, representatief en gewend om direct mee te draaien.",
    icon: Handshake,
    points: ["Bar en bediening", "Events en horeca", "Rust in piekmomenten"],
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
    description: "We bespreken datum, locatie, groep, sfeer en wat je gasten moeten ervaren.",
  },
  {
    title: "Concept kiezen",
    description: "Workshop, mobiele bar, support of een mix daarvan. Altijd passend bij jouw setting.",
  },
  {
    title: "Voorbereiden",
    description: "Heldere afspraken over materialen, timing, cocktailkaart en praktische details.",
  },
  {
    title: "Shinen op locatie",
    description: "Professionele service, gastvrij contact en cocktails die het moment groter maken.",
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
    <div className="flex max-w-3xl flex-col gap-4">
      <Badge variant="accent" className="w-fit">
        {eyebrow}
      </Badge>
      <h2 className="display-copy text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {body ? <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{body}</p> : null}
    </div>
  );
}

function BrandVisual() {
  return (
    <div className="bar-visual" aria-label="Sfeervisual van een mobiele cocktailbar met citrus-accenten">
      <div className="absolute left-6 top-6 flex items-center gap-3 rounded-md border border-border bg-background/70 px-4 py-3 backdrop-blur sm:left-8 sm:top-8">
        <Image src="/logodashingblends.webp" width={40} height={40} alt="" aria-hidden />
        <div className="leading-tight">
          <p className="text-sm font-bold">Dashing Blends</p>
          <p className="text-xs text-muted-foreground">Cocktails & hospitality</p>
        </div>
      </div>

      <div className="absolute inset-x-8 top-[28%] h-px glass-line" />
      <div className="absolute bottom-8 left-6 right-6 grid gap-3 sm:left-8 sm:right-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="rounded-md border border-border bg-background/74 p-5 backdrop-blur">
          <p className="text-sm uppercase text-muted-foreground">Signature mood</p>
          <p className="display-copy mt-2 text-3xl leading-none text-primary sm:text-4xl">
            Expect the Unexpected
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:w-52">
          {["Lime", "Ice", "Shake"].map((label, index) => (
            <div
              key={label}
              className="aspect-square rounded-md border border-border bg-card/82 p-3 text-xs font-semibold text-muted-foreground"
            >
              <span className="block text-foreground">0{index + 1}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 top-24 size-28 rounded-full border border-primary/40 bg-primary/10" />
      <div className="absolute right-20 top-36 size-16 rounded-full border border-accent/40 bg-accent/20" />
      <div className="absolute bottom-44 left-12 h-36 w-24 rounded-b-full rounded-t-md border border-border bg-foreground/8 backdrop-blur-sm" />
      <div className="absolute bottom-44 left-44 h-24 w-20 rounded-b-full rounded-t-md border border-border bg-secondary/15 backdrop-blur-sm" />
      <div className="absolute bottom-36 right-20 h-28 w-28 rotate-12 rounded-md border border-border bg-accent/15" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-border bg-background/82 backdrop-blur-xl">
        <div className="section-shell flex min-h-20 items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="Dashing Blends home">
            <Image src="/logodashingblends.webp" width={44} height={44} alt="" aria-hidden priority />
            <div className="leading-tight">
              <p className="text-sm font-black uppercase tracking-normal">Dashing Blends</p>
              <p className="text-xs text-muted-foreground">Venlo · op locatie</p>
            </div>
          </a>

          <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>

          <Button asChild className="hidden sm:inline-flex">
            <a href="mailto:info@dashingblends.nl">
              <Mail data-icon="inline-start" />
              Aanvragen
            </a>
          </Button>

          <Button asChild variant="outline" size="icon" className="md:hidden" aria-label="Ga naar diensten">
            <a href="#diensten">
              <MenuSquare />
            </a>
          </Button>
        </div>
      </header>

      <section className="section-shell grid min-h-[calc(100dvh-80px)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Mobiele cocktailbar</Badge>
            <Badge variant="outline">Workshops</Badge>
            <Badge variant="outline">Horeca support</Badge>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="display-copy text-5xl leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
              Cocktails die je event laten landen.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Dashing Blends brengt professionele cocktails, warme hospitality en een stijlvolle barervaring naar
              events in en rond Venlo. Van bartender tot complete cocktailbeleving op locatie.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:info@dashingblends.nl?subject=Aanvraag%20Dashing%20Blends">
                Plan je event
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#diensten">Bekijk diensten</a>
            </Button>
          </div>

          <dl className="grid grid-cols-3 gap-3 border-y border-border py-5">
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Basis</dt>
              <dd className="mt-1 font-semibold">Venlo</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Voor</dt>
              <dd className="mt-1 font-semibold">Privé & zakelijk</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Stijl</dt>
              <dd className="mt-1 font-semibold">Maatwerk</dd>
            </div>
          </dl>
        </div>

        <BrandVisual />
      </section>

      <section className="border-y border-border bg-card/40 py-5">
        <div className="section-shell flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          {moments.map((moment) => (
            <span key={moment} className="rounded-sm border border-border bg-background/45 px-3 py-2">
              {moment}
            </span>
          ))}
        </div>
      </section>

      <section id="diensten" className="section-shell py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="Diensten"
            title="Een barervaring die zich naar jouw moment vormt."
            body="Geen standaardpakket. Wel een duidelijke keuze uit workshops, barservice en support, met genoeg flexibiliteit om het precies passend te maken."
          />
          <p className="text-base leading-7 text-muted-foreground lg:max-w-md lg:justify-self-end">
            Of je nu een avond volledig wilt ontzorgen of alleen extra slagkracht achter de bar zoekt: Dashing
            Blends sluit aan op het tempo, de sfeer en de schaal van jouw event.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="service-card rounded-lg border border-border bg-card p-6 shadow-[0_22px_60px_oklch(0_0_0_/_0.18)] transition-colors hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">{service.eyebrow}</p>
                    <h3 className="display-copy mt-3 text-3xl leading-none text-card-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-md bg-muted text-primary">
                    <Icon aria-hidden />
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted-foreground @md:text-base">{service.description}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm">
                      <span className="flex size-5 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                        <Check aria-hidden />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-foreground py-20 text-background sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <Badge variant="secondary" className="w-fit">
              Waarom dit werkt
            </Badge>
            <h2 className="display-copy text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              Gasten onthouden geen bar. Ze onthouden hoe de avond voelde.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-lg border border-background/15 bg-background/6 p-5">
                <Sparkles aria-hidden className="mb-5 text-secondary" />
                <p className="font-semibold leading-7">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="werkwijze" className="section-shell py-20 sm:py-28">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Van eerste vraag naar laatste cocktail, zonder gedoe."
          body="Een compact proces met heldere afspraken, zodat jij weet wat er geregeld is en waar nog keuzes gemaakt moeten worden."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-border bg-card/80 p-5">
              <p className="text-sm font-semibold text-primary">Stap {index + 1}</p>
              <h3 className="display-copy mt-5 text-3xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="over" className="section-shell grid gap-10 py-20 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md bg-muted p-5">
              <UsersRound aria-hidden className="text-primary" />
              <p className="mt-8 text-sm text-muted-foreground">Voor groepen</p>
              <p className="display-copy mt-2 text-3xl">Klein tot groot</p>
            </div>
            <div className="rounded-md bg-muted p-5">
              <CalendarCheck aria-hidden className="text-primary" />
              <p className="mt-8 text-sm text-muted-foreground">Planning</p>
              <p className="display-copy mt-2 text-3xl">Flexibel</p>
            </div>
            <div className="rounded-md bg-muted p-5 sm:col-span-2">
              <MapPin aria-hidden className="text-primary" />
              <p className="mt-8 text-sm text-muted-foreground">Regio</p>
              <p className="display-copy mt-2 text-4xl">Venlo en omgeving</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Badge variant="accent" className="w-fit">
            Over Dashing Blends
          </Badge>
          <h2 className="display-copy text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
            Gastvrijheid is geen onderdeel van het evenement. Het is de beleving.
          </h2>
          <div className="flex flex-col gap-5 text-base leading-8 text-muted-foreground">
            <p>
              Dashing Blends is ontstaan vanuit liefde voor cocktails en horeca. Inmiddels draait het om complete
              ervaringen waarin kwaliteit, presentatie en persoonlijke aandacht samenkomen.
            </p>
            <p>
              De aanpak is betrokken en professioneel: meedenken in de voorbereiding, soepel schakelen op locatie
              en gasten het gevoel geven dat alles klopt.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-20 sm:py-28">
        <div className="grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[1fr_0.8fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <Badge variant="accent" className="w-fit">
              Klaar om te plannen?
            </Badge>
            <h2 className="display-copy mt-6 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
              Vertel wat je organiseert. Dan maken we er iets smaakvols van.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              Mail je datum, locatie, groepsgrootte en het type event. Dan kan Dashing Blends gericht meedenken over
              workshop, cocktailbar, horeca support of een passende combinatie.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="mailto:info@dashingblends.nl?subject=Aanvraag%20Dashing%20Blends">
                  info@dashingblends.nl
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#diensten">Nog even vergelijken</a>
              </Button>
            </div>
          </div>

          <aside className="border-t border-border bg-background/50 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">Handig om mee te sturen</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {["Datum en locatie", "Aantal gasten", "Gewenste dienst", "Sfeer of thema", "Binnen of buiten"].map(
                (item) => (
                  <li key={item} className="flex items-center justify-between gap-4 border-b border-border pb-4">
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
        <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logodashingblends.webp" width={40} height={40} alt="" aria-hidden />
            <div>
              <p className="font-bold">Dashing Blends</p>
              <p className="text-sm text-muted-foreground">Cocktails, hospitality en beleving</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Venlo · info@dashingblends.nl</p>
        </div>
      </footer>
    </main>
  );
}
