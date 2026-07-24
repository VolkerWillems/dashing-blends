import type { MetadataRoute } from "next";

const baseUrl = "https://dashing-blends.nl";
const lastModified = new Date("2026-07-24");

const routes: Array<{
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/cocktailworkshops", changeFrequency: "monthly", priority: 0.9 },
  { path: "/mobiele-cocktailbar", changeFrequency: "monthly", priority: 0.9 },
  { path: "/horeca-support", changeFrequency: "monthly", priority: 0.85 },
  { path: "/over", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
