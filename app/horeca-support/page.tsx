import type { Metadata } from "next";
import Image from "next/image";
import { Check, Handshake, ShieldCheck, UsersRound } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ParallaxDivider } from "@/components/parallax-divider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Horeca support | Dashing Blends",
  description:
    "Flexibele horecaondersteuning voor bars, bediening, evenementen en piekmomenten in Venlo en omgeving.",
};

const supportOptions = [
  "Ondersteuning achter de bar",
  "Bediening tijdens evenementen",
  "Extra capaciteit tijdens piekmomenten",
  "Ondersteuning van bestaande horecateams",
  "Representatieve inzet op zakelijke gelegenheden",
];

export default function HospitalitySupportPage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <PageHero
        eyebrow="Horeca support"
        title="Ervaren versterking wanneer het telt."
        introduction="Dashing Blends ondersteunt horecabedrijven en eventteams met flexibele inzet achter de bar, in de bediening en tijdens drukke momenten. Professioneel, representatief en snel ingewerkt."
        image="/comic/duane-work-02.png"
        imageAlt="Duane werkt achter de bar in vintage comicstijl"
        imagePosition="object-center"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="fade-up">
            <div className="flex items-center gap-4">
              <span className="section-rule h-px w-12 bg-secondary/70" />
              <span className="eyebrow-copy text-secondary">Flexibel inzetbaar</span>
            </div>
            <h2 className="display-copy mt-7 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Extra capaciteit zonder onnodig gedoe.
            </h2>
          </div>

          <div className="fade-up grid gap-6 sm:grid-cols-3">
            <div className="subtle-panel motion-surface border border-border p-7">
              <Handshake className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-3xl">Snel aansluiten</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Duidelijke briefing, snel overzicht en direct meedraaien binnen het bestaande team.
              </p>
            </div>
            <div className="subtle-panel motion-surface border border-border p-7">
              <ShieldCheck className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-3xl">Professioneel</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Representatieve service met aandacht voor gasten, collega’s en de werkwijze van de locatie.
              </p>
            </div>
            <div className="subtle-panel motion-surface border border-border p-7">
              <UsersRound className="text-secondary" aria-hidden />
              <h3 className="display-copy mt-8 text-3xl">Teamgericht</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Ondersteuning die rust brengt tijdens pieken en niet extra management vraagt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="image-frame motion-media fade-up min-h-[650px]">
            <Image
              src="/comic/duane-team-04.png"
              alt="Duane werkt samen met een horecateam in vintage comicstijl"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="editorial-overlay" />
          </div>

          <div className="fade-up lg:pl-10">
            <p className="eyebrow-copy text-secondary">Mogelijke inzet</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl">
              Ondersteuning voor horeca en evenementen.
            </h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              De precieze inzet wordt vooraf afgestemd op de locatie, werkzaamheden, tijden en samenstelling van het team.
            </p>
            <ul className="feature-list mt-9 grid gap-4">
              {supportOptions.map((item) => (
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
        image="/comic/duane-barwork-08.png"
        alt="Duane werkt achter de bar in vintage comicstijl"
        eyebrow="Rust in de uitvoering"
        title="Een sterk team merkt extra ondersteuning. De gast merkt vooral dat alles soepel loopt."
        imagePosition="center"
        size="compact"
      />

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="fade-up lg:pr-10">
            <p className="eyebrow-copy text-secondary">Voor opdrachtgevers</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              Duidelijke afspraken vooraf.
            </h2>
          </div>
          <div className="fade-up subtle-panel motion-surface border border-border p-8 sm:p-12">
            <p className="text-lg leading-9 text-muted-foreground">
              Voor een passende inzet zijn datum, werktijden, locatie, verwachte drukte, werkzaamheden en kledingvoorschriften belangrijk. Met die informatie kan Dashing Blends snel aangeven wat mogelijk is.
            </p>
          </div>
        </div>
      </section>

      <ContactCta
        title="Extra horecaondersteuning nodig?"
        body="Stuur de datum, tijden, locatie en een korte omschrijving van de werkzaamheden. Dan kan Duane gericht reageren op de aanvraag."
      />
      <SiteFooter />
    </main>
  );
}
