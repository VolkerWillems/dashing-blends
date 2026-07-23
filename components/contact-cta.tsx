import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contentImage } from "@/lib/content-images";

export function ContactCta({
  eyebrow = "Een aanvraag doen",
  title = "Vertel wat je organiseert. Dan kijkt Dashing Blends gericht met je mee.",
  body = "Vermeld de datum, locatie, het aantal gasten en de dienst waar je interesse in hebt. Zo kan Duane snel en concreet reageren.",
  image,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  image?: string;
}) {
  const ctaImage = image ?? contentImage(8, "/hero/cocktails-02.png");

  return (
    <section className="section-shell py-20 sm:py-24 lg:py-28">
      <div className="cta-card grid overflow-hidden border border-border lg:grid-cols-[1.04fr_0.96fr]">
        <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70 sm:w-12" />
            <span className="eyebrow-copy text-secondary">{eyebrow}</span>
          </div>
          <h2 className="display-copy mt-6 max-w-4xl text-4xl leading-[0.98] sm:text-5xl xl:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{body}</p>
          <Button asChild size="lg" className="mt-8 w-fit uppercase tracking-[0.1em]">
            <Link href="/contact">
              Naar contact
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <div className="cta-media min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src={ctaImage}
            alt="Cocktails en barservice van Dashing Blends"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
