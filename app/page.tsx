import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, GlassWater, Handshake, PartyPopper } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { ParallaxDivider } from "@/components/parallax-divider";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Cocktailworkshops",
    eyebrow: "Zelf shaken en proeven",
    description:
      "Interactieve workshops op locatie voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen. Met cocktails, mocktails en persoonlijke begeleiding.",
    href: "/cocktailworkshops",
    image: "/duane-02.webp",
    imagePosition: "object-[50%_22%]",
    icon: GlassWater,
    points: ["Professionele materialen", "Praktische uitleg", "Afgestemd op de groep"],
  },
  {
    title: "Mobiele cocktailbar",
    eyebrow: "Barservice op locatie",
    description:
      "Een bartender, cocktailmaterialen en desgewenst een mobiele bar voor bruiloften, bedrijfsfeesten, privéfeesten en evenementen.",
    href: "/mobiele-cocktailbar",
    image: "/duane-03.webp",
    imagePosition: "object-center",
    icon: PartyPopper,
    points: ["Cocktailkaart op maat", "Cocktails en mocktails", "Professioneel gastcontact"],
  },
  {
    title: "Horeca support",
    eyebrow: "Flexibele versterking",
    description:
      "Ervaren ondersteuning achter de bar, in de bediening en tijdens piekmomenten voor horecabedrijven en eventteams.",
    href: "/horeca-support",
    image: "/duane-01.webp",
    imagePosition: "object-[68%_center]",
    icon: Handshake,
    points: ["Bar en bediening", "Snel inzetbaar", "Particulier en zakelijk"],
  },
];

const process = [
  {
    title: "Aanvraag",
    body: "De datum, locatie, groepsgrootte en gewenste dienst vormen het vertrekpunt.",
  },
  {
    title: "Afstemming",
    body: "Dashing Blends bespreekt de invulling, praktische voorzieningen en eventuele cocktailvoorkeuren.",
  },
  {
    title: "Voorbereiding",
    body: "Materialen, planning en werkzaamheden worden vooraf helder afgestemd.",
  },
  {
    title: "Op locatie",
    body: "Duane verzorgt de afgesproken workshop, barservice of horecaondersteuning.",
  },
];

const occasions = ["Bedrijfsuitjes", "Bruiloften", "Privéfeesten", "Vrijgezellenfeesten", "Evenementen", "Horecateams"];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />

      <section className="section-shell grid min-h-[calc(100dvh-80px)] items-center gap-12 py-14 lg:grid-cols-[0.84fr_1.16fr] lg:py-20">
        <div className="fade-up flex flex-col gap-9 lg:pr-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-secondary/70" />
            <span className="eyebrow-copy text-secondary">Cocktails & hospitality · Venlo</span>
          </div>

          <div className="flex flex-col gap-7">
            <h1 className="display-copy text-6xl leading-[0.84] text-foreground sm:text-7xl xl:text-[7.6rem] 2xl:text-[8.4rem]">
              Cocktails en hospitality op locatie.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Dashing Blends verzorgt cocktailworkshops, een mobiele cocktailbar en flexibele horecaondersteuning voor particuliere en zakelijke gelegenheden in Venlo en omgeving.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="uppercase tracking-[0.1em]">
              <Link href="/contact">
                Bespreek je aanvraag
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="uppercase tracking-[0.1em]">
              <Link href="#diensten">Bekijk de diensten</Link>
            </Button>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-y border-border/70 py-6">
            <div>
              <dt className="eyebrow-copy text-muted-foreground">Basis</dt>
              <dd className="display-copy mt-2 text-2xl text-secondary">Venlo</dd>
            </div>
            <div>
              <dt className="eyebrow-copy text-muted-foreground">Werkgebied</dt>
              <dd className="display-copy mt-2 text-2xl text-secondary">Op locatie</dd>
            </div>
            <div>
              <dt className="eyebrow-copy text-muted-foreground">Contact</dt>
              <dd className="display-copy mt-2 text-2xl text-secondary">Persoonlijk</dd>
            </div>
          </dl>
        </div>

        <figure className="hero-visual fade-up">
          <Image
            src="/hero/mixing-01.png"
            alt="Cocktail in bereiding in een stijlvolle donkere barsetting"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-center"
          />
          <div className="editorial-overlay" />
          <figcaption className="absolute inset-x-8 bottom-8 z-10 sm:inset-x-10 sm:bottom-10">
            <div className="gold-rule mb-6 h-px" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow-copy text-secondary">Dashing Blends</p>
                <p className="display-copy mt-2 max-w-xl text-4xl leading-none sm:text-5xl">
                  Cocktails, workshops en professionele service.
                </p>
              </div>
              <p className="max-w-xs text-sm leading-7 text-muted-foreground">
                Persoonlijke uitvoering door Duane, afgestemd op jouw locatie en gelegenheid.
              </p>
            </div>
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-border/70 bg-card/25 py-5">
        <div className="section-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {occasions.map((occasion, index) => (
            <div key={occasion} className="flex items-center gap-8">
              <span className="eyebrow-copy text-muted-foreground">{occasion}</span>
              {index < occasions.length - 1 ? <span className="hidden size-1 rounded-full bg-secondary/60 md:block" /> : null}
            </div>
          ))}
        </div>
      </section>

      <ParallaxDivider
        image="/parallax/parallax-01.jpg"
        alt="Donkere cocktailbar met sfeervolle verlichting"
        eyebrow="Cocktails met aandacht"
        title="Een verzorgde barervaring begint lang voordat het eerste glas wordt geserveerd."
        imagePosition="object-center"
      />

      <section id="diensten" className="section-shell py-24 sm:py-32">
        <div className="fade-up grid gap-10 xl:grid-cols-[1fr_0.55fr] xl:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Diensten</span>
            </div>
            <h2 className="display-copy mt-7 max-w-5xl text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Drie manieren om Dashing Blends in te zetten.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground xl:justify-self-end">
            Iedere opdracht begint met duidelijke informatie over datum, locatie, groep en gewenste invulling. Van daaruit wordt bepaald wat praktisch en passend is.
          </p>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card subtle-panel fade-up overflow-hidden border border-border transition duration-500 hover:-translate-y-1 hover:border-secondary/35">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70">
                  <Image
                    src={service.image}
                    alt={`${service.title} door Dashing Blends`}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover grayscale-[12%] transition duration-700 hover:scale-[1.035] hover:grayscale-0 ${service.imagePosition}`}
                  />
                  <div className="editorial-overlay" />
                  <div className="absolute bottom-5 left-5 z-10 flex size-12 items-center justify-center border border-secondary/35 bg-background/80 text-secondary backdrop-blur">
                    <Icon aria-hidden />
                  </div>
                </div>
                <div className="relative z-10 p-7 sm:p-8">
                  <p className="eyebrow-copy text-secondary">{service.eyebrow}</p>
                  <h3 className="display-copy mt-4 text-4xl leading-none">{service.title}</h3>
                  <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">{service.description}</p>
                  <ul className="mt-7 grid gap-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm">
                        <Check className="size-4 text-secondary" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className="mt-8 text-secondary">
                    <Link href={service.href}>
                      Meer informatie
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ParallaxDivider
        image="/parallax/parallax-02.jpg"
        alt="Cocktailglazen in een warme avondsetting"
        eyebrow="Op locatie"
        title="De uitstraling van de bar sluit aan op de gelegenheid, zonder de avond over te nemen."
        imagePosition="object-center"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="grid grid-cols-[0.72fr_1fr] gap-5">
            <div className="image-frame fade-up min-h-[520px] translate-y-10">
              <Image
                src="/duane-02.webp"
                alt="Duane tijdens een cocktailworkshop"
                fill
                sizes="(min-width: 1024px) 32vw, 45vw"
                className="object-cover object-[50%_20%]"
              />
              <div className="editorial-overlay" />
            </div>
            <div className="image-frame fade-up min-h-[620px]">
              <Image
                src="/duane-04.webp"
                alt="Duane met een dienblad cocktails"
                fill
                sizes="(min-width: 1024px) 38vw, 55vw"
                className="object-cover object-center"
              />
              <div className="editorial-overlay" />
            </div>
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Over Duane</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Ervaring in cocktails, horeca en gastcontact.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                Dashing Blends is het bedrijf van Duane Chia. Vanuit zijn achtergrond in horecaondernemerschap en hospitality verzorgt hij opdrachten waarbij vakmanschap en persoonlijke service samenkomen.
              </p>
              <p>
                De aanpak is praktisch: vooraf goed afstemmen, op locatie flexibel handelen en gasten op een natuurlijke manier aandacht geven.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-9 uppercase tracking-[0.1em]">
              <Link href="/over">Meer over Dashing Blends</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="fade-up max-w-4xl">
          <p className="eyebrow-copy text-secondary">Werkwijze</p>
          <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
            Van aanvraag naar uitvoering.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {process.map((step, index) => (
            <article key={step.title} className="fade-up bg-card p-7 sm:p-9">
              <p className="display-copy text-5xl text-primary/50">0{index + 1}</p>
              <div className="gold-rule my-7 h-px" />
              <h3 className="display-copy text-4xl">{step.title}</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ParallaxDivider
        image="/parallax/parallax-03.jpg"
        alt="Sfeervol glaswerk en cocktaildetails"
        eyebrow="Dashing Blends"
        title="Duidelijke voorbereiding, rustige uitvoering en aandacht voor iedere gast."
        imagePosition="object-center"
      />

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
