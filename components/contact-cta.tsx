import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactCta({
  eyebrow = "Een aanvraag doen",
  title = "Vertel wat je organiseert. Dan kijkt Dashing Blends gericht met je mee.",
  body = "Vermeld de datum, locatie, het aantal gasten en de dienst waar je interesse in hebt. Zo kan Duane snel en concreet reageren.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-shell py-24 sm:py-32">
      <div className="subtle-panel fade-up grid overflow-hidden border border-border lg:grid-cols-[1fr_0.45fr]">
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-secondary/70" />
            <span className="eyebrow-copy text-secondary">{eyebrow}</span>
          </div>
          <h2 className="display-copy mt-7 max-w-5xl text-5xl leading-[0.92] sm:text-6xl xl:text-7xl">{title}</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{body}</p>
          <Button asChild size="lg" className="mt-9 uppercase tracking-[0.1em]">
            <Link href="/contact">
              Naar contact
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
        <div className="relative min-h-64 border-t border-border lg:border-l lg:border-t-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,oklch(0.43_0.07_310_/_0.24),transparent_52%),linear-gradient(135deg,transparent,oklch(0.72_0.07_78_/_0.08))]" />
          <div className="absolute inset-8 border border-secondary/15" />
        </div>
      </div>
    </section>
  );
}
