import { defaultThemeSettings, normalizeThemeSettings, THEME_STORAGE_KEY, type ThemeSettings } from "@/lib/theme-settings";

export function applyThemeSettings(settings: ThemeSettings) {
  if (typeof document === "undefined") return;

  const normalized = normalizeThemeSettings(settings);
  const root = document.documentElement;

  root.style.setProperty("--background", normalized.background);
  root.style.setProperty("--card", normalized.surface);
  root.style.setProperty("--popover", normalized.surface);
  root.style.setProperty("--primary", normalized.primary);
  root.style.setProperty("--magenta", normalized.primary);
  root.style.setProperty("--secondary", normalized.secondary);
  root.style.setProperty("--mustard", normalized.secondary);
  root.style.setProperty("--foreground", normalized.foreground);
  root.style.setProperty("--paper", normalized.foreground);
  root.style.setProperty("--muted-foreground", normalized.mutedForeground);
  root.style.setProperty("--paper-muted", normalized.mutedForeground);
  root.style.setProperty("--db-body-tracking", `${normalized.bodyLetterSpacing.toFixed(3)}em`);

  root.dataset.dbHeadingScale = normalized.headingScale;
  root.dataset.dbSectionSpacing = normalized.sectionSpacing;
  root.dataset.dbMotion = normalized.motionLevel;
  root.dataset.dbTexture = normalized.textureLevel;
  root.dataset.dbCtaImageFit = normalized.ctaImageFit;

  const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (themeMeta) themeMeta.content = normalized.background;
}

export function readStoredThemeSettings(): ThemeSettings {
  if (typeof window === "undefined") return defaultThemeSettings;

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored ? normalizeThemeSettings(JSON.parse(stored)) : defaultThemeSettings;
  } catch {
    return defaultThemeSettings;
  }
}

export function storeThemeSettings(settings: ThemeSettings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(normalizeThemeSettings(settings)));
}

export function clearStoredThemeSettings() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(THEME_STORAGE_KEY);
}
