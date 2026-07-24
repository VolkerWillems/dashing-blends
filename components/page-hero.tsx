import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  introduction,
  image,
  imageAlt,
  imagePosition = "object-center",
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}) {
  return (
    <section id="page-content" className="page-hero-layout section-shell grid gap-10 py-10 sm:py-14 lg:min-h-[calc(100dvh-88px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-16 xl:gap-18">
      <div className="page-hero-copy flex flex-col gap-6 lg:pr-4">
        <p className="eyebrow-copy">{eyebrow}</p>
        <h1 className="display-copy max-w-4xl text-[clamp(3rem,6.1vw,6.9rem)] text-foreground">{title}</h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 xl:text-xl">
          {introduction}
        </p>
      </div>

      <figure className="page-hero-image page-hero-media min-h-[500px] sm:min-h-[650px] lg:min-h-[72dvh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 53vw, 100vw"
          className={`object-cover ${imagePosition}`}
        />
        <div className="absolute left-4 top-4 z-10 border-[3px] border-[var(--ink)] bg-secondary px-3 py-2 text-[0.63rem] font-black uppercase tracking-[0.14em] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)] sm:left-7 sm:top-7">
          Dashing Blends · Venlo
        </div>
        <figcaption className="absolute inset-x-5 bottom-5 z-10 border-[3px] border-[var(--ink)] bg-[var(--paper)] p-4 text-[var(--ink)] shadow-[5px_5px_0_var(--ink)] sm:inset-x-8 sm:bottom-8 sm:p-5">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[var(--magenta-dark)]">
            Cocktails & hospitality op locatie
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
