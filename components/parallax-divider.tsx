import Image from "next/image";

export function ParallaxDivider({
  image,
  alt,
  eyebrow,
  title,
  imagePosition = "object-center",
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  imagePosition?: string;
}) {
  return (
    <section className="parallax-divider" aria-label={alt}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        className={`parallax-divider-media ${imagePosition}`}
      />
      <div className="parallax-divider-shade" />
      {eyebrow || title ? (
        <div className="section-shell parallax-divider-copy">
          {eyebrow ? <p className="eyebrow-copy text-secondary">{eyebrow}</p> : null}
          {title ? <p className="display-copy mt-4 max-w-4xl text-4xl leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">{title}</p> : null}
        </div>
      ) : null}
    </section>
  );
}
