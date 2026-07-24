import Image from "next/image";
import type { CSSProperties } from "react";

function normalizePosition(value: string): string {
  if (value === "object-center") return "center";
  if (value === "object-top") return "center top";
  if (value === "object-bottom") return "center bottom";
  return value.replace("object-[", "").replace("]", "").replaceAll("_", " ");
}

export function ParallaxDivider({
  image,
  alt,
  eyebrow,
  title,
  imagePosition = "center",
  size = "regular",
  align = "left",
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  imagePosition?: string;
  size?: "regular" | "compact";
  align?: "left" | "right";
}) {
  const imageStyle = {
    objectPosition: normalizePosition(imagePosition),
  } satisfies CSSProperties;

  return (
    <section className="parallax-divider" data-size={size} data-align={align} aria-label={alt}>
      <div className="parallax-divider-media" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="parallax-divider-image"
          style={imageStyle}
        />
      </div>

      {eyebrow || title ? (
        <div className="section-shell parallax-divider-copy">
          {eyebrow ? <p className="eyebrow-copy text-secondary">{eyebrow}</p> : null}
          {title ? (
            <p className="display-copy mt-5 max-w-4xl text-4xl leading-[0.96] text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
