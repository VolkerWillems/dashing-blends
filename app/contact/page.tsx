import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact | Dashing Blends",
  description:
    "Neem contact op met Dashing Blends voor een cocktailworkshop, mobiele cocktailbar of horecaondersteuning in Venlo en omgeving.",
};

const details = [
  "Gewenste datum en tijden",
  "Locatie van de opdracht",
  "Aantal deelnemers of gasten",
  "Cocktailworkshop, mobiele bar of horeca support",
  "Eventuele wensen voor cocktails en mocktails",
  "Beschikbare voorzieningen op locatie",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />

      <section className="section-shell grid min-h-[72dvh] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="fade-up flex flex-col gap-7 lg:pr-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-secondary/70" />
            <span className="eyebrow-copy text-secondary">Contact</span>
          </div>
          <h1 className="display-copy text-6xl leading-[0.86] text-foreground sm:text-7xl xl:text-[7.2rem]">
            Bespreek jouw gelegenheid met Dashing Blends.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Voor vragen en aanvragen kun je rechtstreeks mailen. Hoe concreter de informatie, hoe gerichter Duane de mogelijkheden kan beoordelen.
          </p>
          <Button asChild size="lg" className="w-fit uppercase tracking-[0.1em]">
            <a href="mailto:info@dashingblends.nl?subject=Aanvraag%20Dashing%20Blends">
              <Mail data-icon="inline-start" />
              info@dashingblends.nl
            </a>
          </Button>
        </div>

        <div className="subtle-panel fade-up border border-border p-8 sm:p-12 lg:p-14">
          <p className="eyebrow-copy text-secondary">Contactgegevens</p>
          <div className="mt-8 grid gap-8">
            <a href="mailto:info@dashingblends.nl" className="group border-b border-border/70 pb-7">
              <Mail className="size-5 text-secondary" aria-hidden />
              <p className="mt-5 text-sm uppercase tracking-[0.14em] text-muted-foreground">E-mail</p>
              <p className="display-copy mt-2 text-3xl transition group-hover:text-secondary sm:text-4xl">
                info@dashingblends.nl
              </p>
            </a>
            <div>
              <MapPin className="size-5 text-secondary" aria-hidden />
              <p className="mt-5 text-sm uppercase tracking-[0.14em] text-muted-foreground">Werkgebied</p>
              <p className="display-copy mt-2 text-3xl sm:text-4xl">Venlo, Tegelen en omgeving</p>
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section border-y border-border/70 py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="fade-up">
            <p className="eyebrow-copy text-secondary">Vermeld bij een aanvraag</p>
            <h2 className="display-copy mt-5 text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">
              De informatie die nodig is voor een passend antwoord.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {details.map((detail, index) => (
              <div key={detail} className="fade-up bg-card p-7 sm:p-9">
                <p className="display-copy text-4xl text-primary/55">0{index + 1}</p>
                <p className="mt-6 text-base leading-7">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="fade-up grid gap-8 border-y border-border/70 py-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow-copy text-secondary">Eerst de diensten bekijken?</p>
            <h2 className="display-copy mt-4 text-4xl sm:text-5xl">Bekijk wat Dashing Blends op locatie kan verzorgen.</h2>
          </div>
          <Button asChild variant="outline" size="lg" className="uppercase tracking-[0.1em]">
            <Link href="/#diensten">
              Naar de diensten
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
