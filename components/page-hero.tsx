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
    <section className="section-shell grid gap-10 py-10 sm:py-14 lg:min-h-[calc(100dvh-88px)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-16 xl:gap-20">
      <div className="fade-up flex flex-col gap-6 lg:pr-4">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-secondary/70 sm:w-12" />
          <span className="eyebrow-copy text-secondary">{eyebrow}</span>
        </div>
        <h1 className="display-copy max-w-4xl text-[clamp(3.25rem,7vw,7.4rem)] leading-[0.92] text-foreground">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 xl:text-xl">
          {introduction}
        </p>
      </div>

      <figure className="page-hero-image fade-up min-h-[420px] sm:min-h-[560px] lg:min-h-[70dvh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className={`object-cover ${imagePosition}`}
        />
      </figure>
    </section>
  );
}
