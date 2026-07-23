import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, GlassWater, Handshake, PartyPopper } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { ParallaxDivider } from "@/components/parallax-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { contentImage } from "@/lib/content-images";

const services = [
  {
    title: "Cocktailworkshops",
    eyebrow: "Zelf shaken en proeven",
    description:
      "Interactieve workshops op locatie voor bedrijfsuitjes, vrijgezellenfeesten, verjaardagen en vriendengroepen.",
    href: "/cocktailworkshops",
    image: contentImage(1, "/hero/mixing-02.png"),
    icon: GlassWater,
    points: ["Cocktails en mocktails", "Professionele materialen", "Persoonlijke begeleiding"],
  },
  {
    title: "Mobiele cocktailbar",
    eyebrow: "Barservice op locatie",
    description:
      "Een bartender, cocktailmaterialen en desgewenst een mobiele bar voor bruiloften, bedrijfsfeesten en evenementen.",
    href: "/mobiele-cocktailbar",
    image: contentImage(2, "/hero/shakers-01.png"),
    icon: PartyPopper,
    points: ["Cocktailkaart op maat", "Volledige barservice", "Verzorgde presentatie"],
  },
  {
    title: "Horeca support",
    eyebrow: "Flexibele versterking",
    description:
      "Ervaren ondersteuning achter de bar, in de bediening en tijdens piekmomenten voor horeca- en eventteams.",
    href: "/horeca-support",
    image: contentImage(3, "/hero/mix-01.png"),
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
  const heroImage = contentImage(0, "/hero/mixing-01.png");
  const editorialImage = contentImage(4, "/duane-04.webp");
  const ctaImage = contentImage(5, "/hero/cocktails-02.png");

  return (
    <main className="overflow-hidden">
      <SiteHeader />

      <section className="section-shell grid gap-10 py-10 sm:py-14 lg:min-h-[calc(100dvh-88px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-16 xl:gap-20">
        <div className="fade-up flex flex-col gap-7 lg:pr-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70 sm:w-12" />
            <span className="eyebrow-copy text-secondary">Cocktails & hospitality · Venlo</span>
          </div>
          <h1 className="display-copy max-w-4xl text-[clamp(3.5rem,7.2vw,8rem)] leading-[0.9] text-foreground">
            Cocktails met karakter. Service met aandacht.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 xl:text-xl">
            Dashing Blends verzorgt cocktailworkshops, een mobiele cocktailbar en flexibele horecaondersteuning voor particuliere en zakelijke gelegenheden in Venlo en omgeving.
          </p>
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
          <div className="grid grid-cols-3 gap-3 border-y border-border/70 py-5 sm:gap-6">
            <div>
              <p className="eyebrow-copy text-muted-foreground">Basis</p>
              <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">Venlo</p>
            </div>
            <div>
              <p className="eyebrow-copy text-muted-foreground">Werkgebied</p>
              <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">Op locatie</p>
            </div>
            <div>
              <p className="eyebrow-copy text-muted-foreground">Aanpak</p>
              <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">Persoonlijk</p>
            </div>
          </div>
        </div>

        <figure className="hero-visual fade-up min-h-[480px] sm:min-h-[620px] lg:min-h-[76dvh]">
          <Image
            src={heroImage}
            alt="Cocktail in bereiding in een stijlvolle barsetting"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center"
          />
          <figcaption className="absolute inset-x-6 bottom-6 z-10 sm:inset-x-10 sm:bottom-10">
            <p className="eyebrow-copy text-secondary">Dashing Blends</p>
            <p className="display-copy mt-3 max-w-2xl text-3xl leading-[0.98] sm:text-5xl">
              Een stijlvolle barervaring die past bij het moment.
            </p>
          </figcaption>
        </figure>
      </section>

      <section id="diensten" className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <p className="eyebrow-copy text-secondary">Diensten</p>
            <h2 className="display-copy mt-5 max-w-5xl text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
              Eén vertrouwd gezicht voor cocktails en hospitality.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:leading-8 lg:justify-self-end">
            Iedere opdracht wordt afgestemd op de gelegenheid, locatie en groep. Geen standaardpakket dat overal overheen wordt gegooid, want daar wordt niemand vrolijk van.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card overflow-hidden border border-border bg-card/55">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} door Dashing Blends`}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition duration-700 hover:scale-[1.025]"
                  />
                  <div className="absolute bottom-5 left-5 z-10 flex size-11 items-center justify-center border border-secondary/30 bg-background/80 text-secondary backdrop-blur-sm">
                    <Icon className="size-5" aria-hidden />
                  </div>
                </div>
                <div className="p-7 sm:p-8">
                  <p className="eyebrow-copy text-secondary">{service.eyebrow}</p>
                  <h3 className="display-copy mt-4 text-3xl leading-none sm:text-4xl">{service.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">{service.description}</p>
                  <ul className="mt-6 grid gap-3 border-t border-border/70 pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm">
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
        image="/parallax/parallax-01.jpg"
        alt="Donkere cocktailbar met sfeervolle verlichting"
        eyebrow="Op locatie"
        title="Een verzorgde barervaring begint ruim voordat het eerste glas wordt geserveerd."
        imagePosition="center"
      />

      <section className="section-shell grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
        <div className="image-frame min-h-[460px] sm:min-h-[620px]">
          <Image
            src={editorialImage}
            alt="Duane van Dashing Blends tijdens een opdracht"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <p className="eyebrow-copy text-secondary">Over Duane</p>
          <h2 className="display-copy mt-5 text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
            Vakmanschap achter de bar. Rust in de uitvoering.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>
              Dashing Blends is het bedrijf van Duane Chia. Zijn ervaring in horecaondernemerschap en hospitality zie je terug in de voorbereiding, presentatie en omgang met gasten.
            </p>
            <p>
              De aanpak is praktisch en persoonlijk: vooraf helder afstemmen, op locatie flexibel handelen en kwaliteit leveren zonder onnodige drukte eromheen.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="mt-8 uppercase tracking-[0.1em]">
            <Link href="/over">Meer over Dashing Blends</Link>
          </Button>
        </div>
      </section>

      <section className="process-section border-y border-border/70 py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <p className="eyebrow-copy text-secondary">Werkwijze</p>
          <h2 className="display-copy mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-6xl xl:text-7xl">
            Duidelijk van aanvraag tot uitvoering.
          </h2>
          <div className="mt-12 grid border-l border-t border-border/70 sm:grid-cols-2 xl:grid-cols-4">
            {process.map(([number, title, body]) => (
              <article key={number} className="border-b border-r border-border/70 p-6 sm:p-8 lg:p-9">
                <p className="text-xs font-semibold tracking-[0.18em] text-secondary">{number}</p>
                <h3 className="display-copy mt-8 text-3xl sm:text-4xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ParallaxDivider
        image="/parallax/parallax-02.jpg"
        alt="Cocktailglazen in een warme avondsetting"
        eyebrow="Dashing Blends"
        title="De uitstraling ondersteunt de gelegenheid, zonder de avond over te nemen."
        imagePosition="center"
      />

      <ContactCta image={ctaImage} />
      <SiteFooter />
    </main>
  );
}
