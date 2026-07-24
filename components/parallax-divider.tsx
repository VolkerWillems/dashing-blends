"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;

    if (!section || !media) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;

      if (reducedMotion.matches) {
        media.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom < -120 || rect.top > viewportHeight + 120) return;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const normalizedDistance = (sectionCenter - viewportCenter) / (viewportHeight + rect.height);
      const strength = window.innerWidth < 768 ? 90 : 150;
      const offset = Math.max(-strength, Math.min(strength, normalizedDistance * strength * 2.2));

      media.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const imageStyle = {
    objectPosition: normalizePosition(imagePosition),
  } satisfies CSSProperties;

  return (
    <section
      ref={sectionRef}
      className="parallax-divider"
      data-size={size}
      data-align={align}
      aria-label={alt}
    >
      <div ref={mediaRef} className="parallax-divider-media" aria-hidden="true">
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
