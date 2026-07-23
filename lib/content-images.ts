import fs from "node:fs";
import path from "node:path";

const supportedImage = /\.(avif|gif|jpe?g|png|webp)$/i;

let cachedImages: string[] | undefined;

export function getContentImages(): string[] {
  if (cachedImages) {
    return cachedImages;
  }

  const contentDirectory = path.join(process.cwd(), "public", "content");

  try {
    cachedImages = fs
      .readdirSync(contentDirectory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && supportedImage.test(entry.name))
      .map((entry) => `/content/${entry.name}`)
      .sort((left, right) => left.localeCompare(right, "nl", { numeric: true }));
  } catch {
    cachedImages = [];
  }

  return cachedImages;
}

export function contentImage(index: number, fallback: string): string {
  const images = getContentImages();

  if (images.length === 0) {
    return fallback;
  }

  return images[index % images.length] ?? fallback;
}
