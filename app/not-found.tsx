import Link from "next/link";
import { ArrowLeft, Martini } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="overflow-hidden">
      <SiteHeader />
      <section className="section-shell grid min-h-[68dvh] place-items-center py-20 sm:py-28">
        <div className="subtle-panel motion-surface max-w-4xl p-8 text-center sm:p-14 lg:p-18">
          <div className="mx-auto flex size-16 items-center justify-center border-[3px] border-[var(--ink)] bg-secondary text-[var(--ink)] shadow-[5px_5px_0_var(--ink)]">
            <Martini className="size-7" aria-hidden />
          </div>
          <p className="eyebrow-copy mt-8">404 · Verkeerde afslag</p>
          <h1 className="display-copy mt-7 text-[clamp(3rem,8vw,6.8rem)]">
            Deze cocktail staat niet op de kaart.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            De pagina bestaat niet of is verplaatst. De bar is gelukkig nog gewoon open.
          </p>
          <Button asChild size="lg" className="mt-9">
            <Link href="/">
              <ArrowLeft className="size-4" aria-hidden />
              Terug naar home
            </Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
