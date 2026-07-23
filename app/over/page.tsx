import type { Metadata } from "next";
import Image from "next/image";
import { BriefcaseBusiness, GlassWater, HeartHandshake } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Over Dashing Blends",
  description:
    "Maak kennis met Duane en Dashing Blends: cocktails, gastvrijheid en professionele horecaondersteuning vanuit Venlo.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Over Dashing Blends"
        title="Gastvrijheid met aandacht voor het moment."
        introduction="Dashing Blends is het bedrijf van Duane Chia. Vanuit Venlo verzorgt hij cocktailworkshops, mobiele barservice en horecaondersteuning voor particuliere en zakelijke opdrachtgevers."
        image="/duane-04.webp"
        imageAlt="Duane van Dashing Blends met een dienblad cocktails"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="fade-up">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Duane Chia</span>
            </div>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Ervaring in horeca, barservice en gastcontact.
            </h2>
          </div>

          <div className="fade-up max-w-3xl space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Duane heeft een achtergrond in horecaondernemerschap en hospitality. Die ervaring zie je terug in de manier waarop Dashing Blends werkt: praktisch, persoonlijk en met oog voor zowel de gast als de opdrachtgever.
            </p>
            <p>
              Een goede cocktail is meer dan een recept. Timing, presentatie en contact aan de bar bepalen minstens zoveel van de ervaring. Daarom worden techniek en gastvrijheid altijd als één geheel benaderd.
            </p>
            <p>
              Dashing Blends werkt op locatie en stemt iedere opdracht af op de gelegenheid, de groep en de beschikbare voorzieningen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="subtle-panel fade-up border border-border p-8 sm:p-10">
            <GlassWater className="text-secondary" aria-hidden />
            <h3 className="display-copy mt-9 text-4xl">Vakmanschap</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              Kennis van cocktails, materialen en bartechnieken, helder uitgelegd of professioneel uitgevoerd.
            </p>
          </article>
          <article className="subtle-panel fade-up border border-border p-8 sm:p-10">
            <HeartHandshake className="text-secondary" aria-hidden />
            <h3 className="display-copy mt-9 text-4xl">Gastvrijheid</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              Aandacht voor gasten en een ontspannen benadering zonder in te leveren op professionaliteit.
            </p>
          </article>
          <article className="subtle-panel fade-up border border-border p-8 sm:p-10">
            <BriefcaseBusiness className="text-secondary" aria-hidden />
            <h3 className="display-copy mt-9 text-4xl">Duidelijkheid</h3>
            <p className="mt-5 leading-8 text-muted-foreground">
              Concrete afspraken over invulling, planning en praktische zaken voordat de opdracht begint.
            </p>
          </article>
        </div>
      </section>

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
                src="/duane-03.webp"
                alt="Duane achter de bar"
                fill
                sizes="(min-width: 1024px) 38vw, 55vw"
                className="object-cover object-center"
              />
              <div className="editorial-overlay" />
            </div>
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Werkwijze</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Persoonlijk contact, passend voorstel, goede uitvoering.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              De voorbereiding begint met een duidelijke inventarisatie van datum, locatie, groep en verwachtingen. Vanuit daar wordt bepaald welke dienst en invulling passend zijn.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
