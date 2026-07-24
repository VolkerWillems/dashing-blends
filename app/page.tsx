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
  title: "Cocktailworkshops, mobiele cocktailbar en horeca support",
  description:
    "Dashing Blends verzorgt cocktailworkshops, mobiele cocktailbar en flexibele horecaondersteuning op locatie in Venlo en omgeving.",
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    number: "01",
    title: "Cocktailworkshops",
    eyebrow: "Zelf shaken en proeven",
    description:
      "Interactieve workshops op locatie voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen.",
    href: "/cocktailworkshops",
    image: "/comic/duane-shake-06.png",
    icon: GlassWater,
    points: ["Cocktails en mocktails", "Professionele materialen", "Persoonlijke begeleiding"],
  },
  {
    number: "02",
    title: "Mobiele cocktailbar",
    eyebrow: "Barservice op locatie",
    description:
      "Een bartender, cocktailmaterialen en desgewenst een mobiele bar voor bruiloften, bedrijfsfeesten en evenementen.",
    href: "/mobiele-cocktailbar",
    image: "/comic/duane-cocktail-05.png",
    icon: PartyPopper,
    points: ["Cocktailkaart op maat", "Volledige barservice", "Verzorgde presentatie"],
  },
  {
    number: "03",
    title: "Horeca support",
    eyebrow: "Flexibele versterking",
    description:
      "Ervaren ondersteuning achter de bar, in de bediening en tijdens piekmomenten voor horeca- en eventteams.",
    href: "/horeca-support",
    image: "/comic/duane-team-04.png",
    icon: Handshake,
    points: ["Bar en bediening", "Praktisch inzetbaar", "Professioneel gastcontact"],
  },
];

const process = [
  ["01", "Aanvraag", "Datum, locatie, groepsgrootte en gewenste dienst."],
  ["02", "Afstemming", "Invulling, voorzieningen en cocktailvoorkeuren."],
  ["03", "Voorbereiding", "Materialen, planning en werkzaamheden worden geregeld."],
  ["04", "Op locatie", "Duane verzorgt de afgesproken uitvoering."],
];

export default function Home() {
  const heroImage = "/comic/duane-shake-01.png";
  const editorialImage = "/comic/duane-work-02.png";
  const ctaImage = "/comic/duane-shots-03.png";

  return (
    <main id="main-content" className="overflow-hidden">
      <SiteHeader />

      <section className="hero-layout section-shell grid gap-10 py-10 sm:py-14 lg:min-h-[calc(100dvh-88px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-16 xl:gap-18">
        <div className="hero-copy fade-up flex flex-col gap-7 lg:pr-4">
          <p className="eyebrow-copy">Cocktails & hospitality · Venlo</p>

          <h1 className="display-copy max-w-4xl text-[clamp(2.9rem,5.55vw,6.55rem)] text-foreground">
            Cocktails met karakter. Service met aandacht.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 xl:text-xl">
            Dashing Blends verzorgt cocktailworkshops, een mobiele cocktailbar en flexibele horecaondersteuning voor particuliere en zakelijke gelegenheden in Venlo en omgeving.
          </p>

          <div className="hero-actions flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Bespreek je aanvraag
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#diensten">Bekijk de diensten</Link>
            </Button>
          </div>

          <dl className="hero-facts grid grid-cols-3 border-[3px] border-[var(--ink)] bg-card shadow-[6px_6px_0_var(--ink)]">
            {[
              ["Basis", "Venlo"],
              ["Werkgebied", "Op locatie"],
              ["Aanpak", "Persoonlijk"],
            ].map(([label, value], index) => (
              <div key={label} className={`p-4 sm:p-5 ${index > 0 ? "border-l-[3px] border-[var(--ink)]" : ""}`}>
                <dt className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-secondary sm:text-[0.65rem]">
                  {label}
                </dt>
                <dd className="mt-2 text-xs font-bold text-foreground sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="hero-visual fade-up min-h-[540px] sm:min-h-[680px] lg:min-h-[76dvh]">
          <Image
            src={heroImage}
            alt="Duane van Dashing Blends tijdens een cocktailworkshop in vintage comicstijl"
            fill
            priority
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover object-[50%_28%]"
          />

          <div className="absolute left-4 top-4 z-10 border-[3px] border-[var(--ink)] bg-secondary px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)] sm:left-7 sm:top-7">
            Chapter 01 · The Shake
          </div>

          <figcaption className="absolute inset-x-5 bottom-5 z-10 border-[3px] border-[var(--ink)] bg-[var(--paper)] p-4 text-[var(--ink)] shadow-[5px_5px_0_var(--ink)] sm:inset-x-8 sm:bottom-8 sm:p-6">
            <p className="text-[0.63rem] font-black uppercase tracking-[0.14em] text-[var(--magenta-dark)]">Dashing Blends</p>
            <p className="display-copy mt-2 max-w-2xl text-3xl text-[var(--ink)] sm:text-5xl">
              Een barervaring die bij het moment past.
            </p>
          </figcaption>
        </figure>
      </section>

      <section id="diensten" className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <p className="eyebrow-copy">Diensten</p>
            <h2 className="display-copy mt-6 max-w-5xl text-4xl sm:text-6xl xl:text-7xl">
              Drie manieren om Dashing Blends in te zetten.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:leading-8 lg:justify-self-end">
            Iedere opdracht wordt zorgvuldig afgestemd op de gelegenheid, locatie, groepsgrootte en gewenste sfeer.
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
                    alt={`${service.title} door Dashing Blends in vintage comicstijl`}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition duration-500 hover:scale-[1.025]"
                  />
                  <span className="absolute right-4 top-4 z-10 border-[3px] border-[var(--ink)] bg-primary px-3 py-2 text-xs font-black text-primary-foreground shadow-[4px_4px_0_var(--ink)]">
                    {service.number}
                  </span>
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
        alt="Duane achter een mobiele cocktailbar in vintage comicstijl"
        eyebrow="Op locatie"
        title="Een verzorgde barervaring begint ruim voordat het eerste glas wordt geserveerd."
        imagePosition="center"
      />

      <section className="section-shell grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:py-28">
        <figure className="image-frame min-h-[560px] sm:min-h-[720px]">
          <Image
            src={editorialImage}
            alt="Duane van Dashing Blends aan het werk in vintage comicstijl"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <figcaption className="absolute bottom-5 left-5 z-10 max-w-[80%] border-[3px] border-[var(--ink)] bg-secondary px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)] sm:bottom-8 sm:left-8">
            Ervaring, voorbereiding en persoonlijk gastcontact.
          </figcaption>
        </figure>

        <div className="fade-up">
          <p className="eyebrow-copy">Over Duane</p>
          <h2 className="display-copy mt-6 text-4xl sm:text-6xl xl:text-7xl">
            Vakmanschap achter de bar. Rust in de uitvoering.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>
              Dashing Blends is het bedrijf van Duane Chia. Zijn ervaring in horecaondernemerschap en hospitality zie je terug in de voorbereiding, presentatie en omgang met gasten.
            </p>
            <p>
              De aanpak is praktisch en persoonlijk: vooraf helder afstemmen, op locatie flexibel handelen en kwaliteit leveren zonder onnodige drukte eromheen.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link href="/over">Meer over Dashing Blends</Link>
          </Button>
        </div>
      </section>

      <section className="process-section border-y-[5px] border-[var(--ink)] py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <p className="eyebrow-copy">Werkwijze</p>
          <h2 className="display-copy mt-6 max-w-4xl text-4xl sm:text-6xl xl:text-7xl">
            Duidelijk van aanvraag tot uitvoering.
          </h2>
          <div className="motion-grid mt-12 grid border-l-[4px] border-t-[4px] border-[var(--ink)] bg-card shadow-[9px_9px_0_var(--ink)] sm:grid-cols-2 xl:grid-cols-4">
            {process.map(([number, title, body]) => (
              <article key={number} className="border-b-[4px] border-r-[4px] border-[var(--ink)] p-6 sm:p-8 lg:p-9">
                <p className="inline-flex border-[3px] border-[var(--ink)] bg-primary px-2.5 py-1 text-xs font-black tracking-[0.14em] text-primary-foreground shadow-[3px_3px_0_var(--ink)]">
                  {number}
                </p>
                <h3 className="display-copy mt-8 text-3xl sm:text-4xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ParallaxDivider
        image="/comic/duane-mixing-09.png"
        alt="Duane mixt cocktails in vintage comicstijl"
        eyebrow="Dashing Blends"
        title="De uitstraling ondersteunt de gelegenheid, zonder de avond over te nemen."
        imagePosition="center"
        align="right"
      />

      <ContactCta image={ctaImage} />
      <SiteFooter />
    </main>
  );
}
