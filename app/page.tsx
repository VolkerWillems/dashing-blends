import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, GlassWater, Handshake, PartyPopper } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { ParallaxDivider } from "@/components/parallax-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dashing Blends | Cocktails & Hospitality",
  description:
    "Cocktailworkshops, mobiele cocktailbar en professionele horeca support voor particuliere en zakelijke evenementen vanuit Venlo.",
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    number: "01",
    title: "Cocktail Workshops",
    eyebrow: "Zelf shaken en ontdekken",
    description:
      "Een interactieve workshop waarin je samen de wereld van cocktails ontdekt. Geschikt voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen.",
    href: "/cocktailworkshops",
    image: "/comic/duane-shake-06.png",
    icon: GlassWater,
    points: ["Professionele bartendertechnieken", "Cocktails en mocktails", "Samen maken en proeven"],
  },
  {
    number: "02",
    title: "Mobiele Cocktailbar",
    eyebrow: "Cocktailervaring op locatie",
    description:
      "Een complete cocktailservice voor intieme privéfeesten, bruiloften, bedrijfsfeesten, festivals en grotere evenementen.",
    href: "/mobiele-cocktailbar",
    image: "/comic/duane-cocktail-05.png",
    icon: PartyPopper,
    points: ["Professionele bartender", "Stijlvolle cocktails", "Service afgestemd op jouw event"],
  },
  {
    number: "03",
    title: "Horeca Support",
    eyebrow: "Flexibele versterking",
    description:
      "Professionele ondersteuning voor bars, bediening, evenementen en horecateams wanneer tijdelijk extra capaciteit nodig is.",
    href: "/horeca-support",
    image: "/comic/duane-team-04.png",
    icon: Handshake,
    points: ["Snel inzetbaar", "Flexibel meedraaien", "Ervaren gastcontact"],
  },
];

const reasons = [
  "Persoonlijke aanpak en maatwerk voor ieder evenement",
  "Professionele cocktails en oprechte gastvrijheid",
  "Flexibel inzetbaar voor particuliere en zakelijke opdrachtgevers",
  "Kwaliteit, sfeer en beleving staan centraal",
  "Actief meedenken van voorbereiding tot uitvoering",
];

export default function Home() {
  return (
    <main id="main-content" className="overflow-hidden">
      <SiteHeader />

      <section id="page-content" className="hero-layout section-shell grid gap-10 py-10 sm:py-14 lg:min-h-[calc(100dvh-88px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-16 xl:gap-18">
        <div className="hero-copy fade-up flex flex-col gap-7 lg:pr-4">
          <p className="eyebrow-copy">Dashing Blends · Cocktails & Hospitality</p>
          <h1 className="display-copy max-w-4xl text-[clamp(2.9rem,5.55vw,6.55rem)] text-foreground">
            Van bartender tot complete cocktailervaring op locatie.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 xl:text-xl">
            Dashing Blends verzorgt cocktailworkshops, een stijlvolle mobiele cocktailbar en ervaren horecaondersteuning voor evenementen in Venlo, de regio en daarbuiten wanneer de opdracht dat toelaat.
          </p>
          <div className="hero-actions flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact opnemen
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#diensten">Bekijk onze diensten</Link>
            </Button>
          </div>
          <dl className="hero-facts grid grid-cols-3 border-[3px] border-[var(--ink)] bg-card shadow-[6px_6px_0_var(--ink)]">
            {[
              ["Gevestigd", "Venlo"],
              ["Inzet", "Op locatie"],
              ["Aanpak", "Maatwerk"],
            ].map(([label, value], index) => (
              <div key={label} className={`p-4 sm:p-5 ${index > 0 ? "border-l-[3px] border-[var(--ink)]" : ""}`}>
                <dt className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-secondary sm:text-[0.65rem]">{label}</dt>
                <dd className="mt-2 text-xs font-bold text-foreground sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="hero-visual fade-up min-h-[540px] sm:min-h-[680px] lg:min-h-[76dvh]">
          <Image
            src="/comic/duane-shake-01.png"
            alt="Dashing Blends verzorgt cocktails en hospitality op locatie"
            fill
            priority
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover object-[50%_28%]"
          />
          <div className="absolute left-4 top-4 z-10 border-[3px] border-[var(--ink)] bg-secondary px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)] sm:left-7 sm:top-7">
            Cocktails · Workshops · Hospitality
          </div>
          <figcaption className="absolute inset-x-5 bottom-5 z-10 border-[3px] border-[var(--ink)] bg-[var(--paper)] p-4 text-[var(--ink)] shadow-[5px_5px_0_var(--ink)] sm:inset-x-8 sm:bottom-8 sm:p-6">
            <p className="text-[0.63rem] font-black uppercase tracking-[0.14em] text-[var(--magenta-dark)]">Dashing Blends</p>
            <p className="display-copy mt-2 max-w-2xl text-3xl text-[var(--ink)] sm:text-5xl">
              Cocktails, hospitality en beleving voor jouw evenement.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="section-shell grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-28">
        <div className="fade-up">
          <p className="eyebrow-copy">Dashing Blends</p>
          <h2 className="display-copy mt-6 text-4xl sm:text-6xl xl:text-7xl">
            Een ervaring waarin kwaliteit, sfeer en gastvrijheid samenkomen.
          </h2>
        </div>
        <div className="fade-up space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
          <p>
            Iedere opdracht wordt afgestemd op de wensen van de opdrachtgever, de gasten en de sfeer van het evenement. Geen standaardpakket, maar een persoonlijke invulling met aandacht voor service, flexibiliteit en detail.
          </p>
          <p>
            Het draait niet alleen om het serveren van een goede cocktail. Van het eerste contact tot het laatste glas staat een professionele uitstraling, ontspannen sfeer en sterke gastbeleving centraal.
          </p>
        </div>
      </section>

      <section id="diensten" className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <p className="eyebrow-copy">Onze diensten</p>
            <h2 className="display-copy mt-6 max-w-5xl text-4xl sm:text-6xl xl:text-7xl">
              Drie manieren om jouw evenement of horecateam te versterken.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:leading-8 lg:justify-self-end">
            Van een interactieve workshop tot volledige cocktailservice of tijdelijke horecaondersteuning.
          </p>
        </div>

        <div className="motion-grid mt-12 grid gap-8 lg:mt-16 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card bg-card">
                <div className="relative aspect-[16/11] overflow-hidden border-b-[4px] border-[var(--ink)]">
                  <Image
                    src={service.image}
                    alt={`${service.title} door Dashing Blends`}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition duration-500 hover:scale-[1.025]"
                  />
                  <span className="absolute right-4 top-4 z-10 border-[3px] border-[var(--ink)] bg-primary px-3 py-2 text-xs font-black text-primary-foreground shadow-[4px_4px_0_var(--ink)]">{service.number}</span>
                  <div className="absolute bottom-4 left-4 z-10 flex size-12 items-center justify-center border-[3px] border-[var(--ink)] bg-secondary text-[var(--ink)] shadow-[4px_4px_0_var(--ink)]">
                    <Icon className="size-5" aria-hidden />
                  </div>
                </div>
                <div className="p-7 sm:p-8">
                  <p className="eyebrow-copy">{service.eyebrow}</p>
                  <h3 className="display-copy mt-5 text-3xl sm:text-4xl">{service.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{service.description}</p>
                  <ul className="feature-list mt-6 grid gap-3 border-t-[3px] border-[var(--ink)] pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm font-semibold">
                        <Check className="size-4 shrink-0 text-secondary" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="card-link mt-7">
                    Meer informatie
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ParallaxDivider
        image="/comic/duane-retro-07.png"
        alt="Dashing Blends mobiele cocktailbar op locatie"
        eyebrow="Waarom Dashing Blends"
        title="Persoonlijke service, professionele uitvoering en een beleving die bij het evenement past."
        imagePosition="center"
      />

      <section className="section-shell grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-28">
        <figure className="image-frame min-h-[560px] sm:min-h-[720px]">
          <Image
            src="/comic/duane-work-02.png"
            alt="Duane van Dashing Blends aan het werk"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <figcaption className="absolute bottom-5 left-5 z-10 max-w-[80%] border-[3px] border-[var(--ink)] bg-secondary px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)] sm:bottom-8 sm:left-8">
            Gastvrijheid, kwaliteit en beleving.
          </figcaption>
        </figure>

        <div className="fade-up">
          <p className="eyebrow-copy">Waarom kiezen voor Dashing Blends?</p>
          <h2 className="display-copy mt-6 text-4xl sm:text-6xl xl:text-7xl">
            Een betrouwbare partner die actief met je meedenkt.
          </h2>
          <ul className="feature-list mt-8 grid gap-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-4 border-b border-border/70 pb-4">
                <Check className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link href="/over">Meer over Dashing Blends</Link>
          </Button>
        </div>
      </section>

      <section className="process-section border-y-[5px] border-[var(--ink)] py-20 sm:py-24 lg:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow-copy">Gevestigd in Venlo</p>
            <h2 className="display-copy mt-6 text-4xl sm:text-6xl xl:text-7xl">Flexibel inzetbaar, ook buiten de regio.</h2>
          </div>
          <div className="subtle-panel motion-surface p-8 sm:p-12">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Dashing Blends is voornamelijk actief in Venlo en omgeving. Afhankelijk van de opdracht, planning en praktische mogelijkheden kan de dienstverlening ook buiten de regio worden ingezet.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Zoek je een hospitalityprofessional die snel schakelt en direct waarde toevoegt aan jouw evenement of organisatie, dan worden de mogelijkheden graag persoonlijk besproken.
            </p>
          </div>
        </div>
      </section>

      <ParallaxDivider
        image="/comic/duane-mixing-09.png"
        alt="Dashing Blends mixt cocktails voor een evenement"
        eyebrow="Expect the Unexpected"
        title="Van liefde voor cocktails en gastvrijheid naar professionele service voor bedrijven en particulieren."
        imagePosition="center"
        align="right"
      />

      <ContactCta
        title="Klaar om jouw evenement naar een hoger niveau te tillen?"
        body="Vertel wat je organiseert en welke dienst je zoekt. Dashing Blends denkt mee over een invulling die aansluit op jouw wensen, gasten en locatie."
        image="/comic/duane-shots-03.png"
      />
      <SiteFooter />
    </main>
  );
}
