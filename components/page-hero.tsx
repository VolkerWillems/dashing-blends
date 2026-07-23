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
    <section className="section-shell grid min-h-[72dvh] items-center gap-12 py-16 lg:grid-cols-[0.86fr_1.14fr] lg:py-24">
      <div className="fade-up flex flex-col gap-7 lg:pr-8">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-secondary/70" />
          <span className="eyebrow-copy text-secondary">{eyebrow}</span>
        </div>
        <h1 className="display-copy text-6xl leading-[0.86] text-foreground sm:text-7xl xl:text-[7.2rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{introduction}</p>
      </div>

      <figure className="page-hero-image fade-up">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 54vw, 100vw"
          className={`object-cover ${imagePosition}`}
        />
        <div className="editorial-overlay" />
      </figure>
    </section>
  );
}
