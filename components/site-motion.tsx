"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const motionSelector =
  ".fade-up, .motion-grid > *, .section-rule, .cta-card, .parallax-divider-copy > *";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelector));

    elements.forEach((element) => {
      const motionGrid = element.parentElement?.classList.contains("motion-grid");
      const parallaxCopy = element.parentElement?.classList.contains("parallax-divider-copy");

      if (motionGrid || parallaxCopy) {
        const siblings = Array.from(element.parentElement?.children ?? []);
        const index = siblings.indexOf(element);
        element.style.setProperty("--motion-delay", `${Math.min(index, 5) * 70}ms`);
      }
    });

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    const frameId = window.requestAnimationFrame(() => root.classList.add("motion-ready"));

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
