import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dashing Blends | Cocktails & Hospitality",
    short_name: "Dashing Blends",
    description:
      "Cocktailworkshops, mobiele cocktailbar en horeca support op locatie vanuit Venlo.",
    start_url: "/",
    display: "standalone",
    background_color: "#120a11",
    theme_color: "#8f174f",
    lang: "nl-NL",
    icons: [
      {
        src: "/logodashingblends.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
