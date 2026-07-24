import fs from "node:fs";
import path from "node:path";

const supportedImage = /\.(avif|gif|jpe?g|png|webp)$/i;

const imageCache = new Map<string, string[]>();

function getImages(directoryName: string): string[] {
  const cached = imageCache.get(directoryName);

  if (cached) {
    return cached;
  }

  const directory = path.join(process.cwd(), "public", directoryName);

  try {
    const images = fs
      .readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && supportedImage.test(entry.name))
      .map((entry) => `/${directoryName}/${entry.name}`)
      .sort((left, right) => left.localeCompare(right, "nl", { numeric: true }));

    imageCache.set(directoryName, images);
    return images;
  } catch {
    imageCache.set(directoryName, []);
    return [];
  }
}

export function getContentImages(): string[] {
  return getImages("content");
}

export function getComicImages(): string[] {
  return getImages("comic");
}

export function contentImage(index: number, fallback: string): string {
  const images = getContentImages();

  if (images.length === 0) {
    return fallback;
  }

  return images[index % images.length] ?? fallback;
}

export function comicImage(index: number, fallback: string): string {
  return getComicImages()[index] ?? fallback;
}
