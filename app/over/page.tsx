import type { Metadata } from "next";
import Image from "next/image";
import { BriefcaseBusiness, GlassWater, HeartHandshake } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ParallaxDivider } from "@/components/parallax-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Over Dashing Blends en Duane Chia",
  description:
    "Maak kennis met Duane Chia en Dashing Blends: cocktails, gastvrijheid, mobiele barservice en horeca support vanuit Venlo.",
  alternates: {
    canonical: "/over",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Over ons"
        title="Van liefde voor cocktails en gastvrijheid naar een professioneel hospitalitybedrijf."
        introduction="Dashing Blends is het bedrijf van Duane Chia. Vanuit Venlo helpt hij bedrijven en particulieren met cocktailworkshops, mobiele cocktailservice en professionele horecaondersteuning."
        image="/comic/duane-team-04.png"
        imageAlt="Duane Chia van Dashing Blends tijdens een hospitalityopdracht"
        imagePosition="object-center"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="fade-up">
            <div className="flex items-center gap-4">
              <span className="section-rule h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Duane Chia</span>
            </div>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Cocktails, hospitality en service als één complete ervaring.
            </h2>
          </div>

          <div className="fade-up max-w-3xl space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Wat begon als een liefde voor cocktails en gastvrijheid groeide uit tot een bedrijf dat horecabedrijven, evenementorganisatoren en particuliere opdrachtgevers ondersteunt met professionele service.
            </p>
            <p>
              Dashing Blends draait niet alleen om het maken van cocktails. De voorbereiding, presentatie, het contact met gasten en de flexibiliteit op locatie bepalen samen de kwaliteit van de ervaring.
            </p>
            <p>
              Iedere opdracht wordt persoonlijk afgestemd op de gelegenheid, de locatie, de gasten en de gewenste sfeer. Zo ontstaat geen standaardpakket, maar een passende invulling voor het moment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="motion-grid grid gap-6 md:grid-cols-3">
          <article className="subtle-panel motion-surface fade-up border border-border p-8 sm:p-10">
            <GlassWater className="text-secondary" aria-hidden />
            <h3 className="display-copy mt-9 text-4xl">Kwaliteit</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              Professionele cocktails, goede materialen en aandacht voor de uitvoering van begin tot eind.
            </p>
          </article>
          <article className="subtle-panel motion-surface fade-up border border-border p-8 sm:p-10">
            <HeartHandshake className="text-secondary" aria-hidden />
            <h3 className="display-copy mt-9 text-4xl">Gastvrijheid</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              Oprechte aandacht voor gasten en een ontspannen sfeer die past bij de gelegenheid.
            </p>
          </article>
          <article className="subtle-panel motion-surface fade-up border border-border p-8 sm:p-10">
            <BriefcaseBusiness className="text-secondary" aria-hidden />
            <h3 className="display-copy mt-9 text-4xl">Maatwerk</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              Flexibele dienstverlening voor particuliere en zakelijke opdrachtgevers, afgestemd op praktische wensen en budget.
            </p>
          </article>
        </div>
      </section>

      <ParallaxDivider
        image="/comic/duane-cocktail-05.png"
        alt="Dashing Blends combineert cocktails en gastvrijheid"
        eyebrow="Expect the Unexpected"
        title="Een professionele uitstraling, ontspannen sfeer en een ervaring waar gasten over napraten."
        imagePosition="center"
        size="compact"
        align="right"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="grid grid-cols-[0.72fr_1fr] gap-4 sm:gap-5">
            <div className="image-frame motion-media fade-up min-h-[440px] sm:min-h-[520px] md:translate-y-10">
              <Image
                src="/comic/duane-shots-03.png"
                alt="Cocktailservice door Dashing Blends"
                fill
                sizes="(min-width: 1024px) 32vw, 45vw"
                className="object-cover object-center"
              />
              <div className="editorial-overlay" />
            </div>
            <div className="image-frame motion-media fade-up min-h-[520px] sm:min-h-[620px]">
              <Image
                src="/comic/duane-shake-01.png"
                alt="Duane demonstreert cocktailtechnieken"
                fill
                sizes="(min-width: 1024px) 38vw, 55vw"
                className="object-cover object-[50%_28%]"
              />
              <div className="editorial-overlay" />
            </div>
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Gevestigd in Venlo</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Lokaal gevestigd, flexibel inzetbaar.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              Dashing Blends is voornamelijk actief in Venlo en omgeving. Afhankelijk van de opdracht en planning zijn werkzaamheden ook buiten de regio mogelijk.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              De samenwerking begint met persoonlijk contact en een duidelijke inventarisatie. Daarna volgt een voorstel dat aansluit op de gelegenheid en de gewenste dienstverlening.
            </p>
          </div>
        </div>
      </section>

      <ContactCta
        title="Benieuwd wat Dashing Blends voor jou kan betekenen?"
        body="Neem contact op voor een cocktailworkshop, mobiele cocktailbar of professionele horecaondersteuning."
        image="/comic/duane-work-02.png"
      />
      <SiteFooter />
    </main>
  );
}
