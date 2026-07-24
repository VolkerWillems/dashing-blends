export const THEME_STORAGE_KEY = "dashing-blends-style-settings";

export type HeadingScale = "compact" | "balanced" | "large";
export type SectionSpacing = "compact" | "balanced" | "spacious";
export type MotionLevel = "off" | "subtle" | "normal";
export type TextureLevel = "off" | "subtle" | "normal";
export type CtaImageFit = "cover" | "contain";

export type ThemeSettings = {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  foreground: string;
  mutedForeground: string;
  bodyLetterSpacing: number;
  headingScale: HeadingScale;
  sectionSpacing: SectionSpacing;
  motionLevel: MotionLevel;
  textureLevel: TextureLevel;
  ctaImageFit: CtaImageFit;
};

export const defaultThemeSettings: ThemeSettings = {
  background: "#160d15",
  surface: "#24131f",
  primary: "#ca007d",
  secondary: "#d5aa4c",
  foreground: "#f5dfad",
  mutedForeground: "#bcae8d",
  bodyLetterSpacing: 0.032,
  headingScale: "balanced",
  sectionSpacing: "balanced",
  motionLevel: "subtle",
  textureLevel: "subtle",
  ctaImageFit: "contain",
};

const allowedValues = {
  headingScale: ["compact", "balanced", "large"],
  sectionSpacing: ["compact", "balanced", "spacious"],
  motionLevel: ["off", "subtle", "normal"],
  textureLevel: ["off", "subtle", "normal"],
  ctaImageFit: ["cover", "contain"],
} as const;

function isHexColor(value: unknown): value is string {
  return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
}

function isAllowed<T extends keyof typeof allowedValues>(key: T, value: unknown): value is (typeof allowedValues)[T][number] {
  return typeof value === "string" && (allowedValues[key] as readonly string[]).includes(value);
}

export function normalizeThemeSettings(value: unknown): ThemeSettings {
  if (!value || typeof value !== "object") return defaultThemeSettings;

  const candidate = value as Partial<ThemeSettings>;
  const spacing = Number(candidate.bodyLetterSpacing);

  return {
    background: isHexColor(candidate.background) ? candidate.background : defaultThemeSettings.background,
    surface: isHexColor(candidate.surface) ? candidate.surface : defaultThemeSettings.surface,
    primary: isHexColor(candidate.primary) ? candidate.primary : defaultThemeSettings.primary,
    secondary: isHexColor(candidate.secondary) ? candidate.secondary : defaultThemeSettings.secondary,
    foreground: isHexColor(candidate.foreground) ? candidate.foreground : defaultThemeSettings.foreground,
    mutedForeground: isHexColor(candidate.mutedForeground)
      ? candidate.mutedForeground
      : defaultThemeSettings.mutedForeground,
    bodyLetterSpacing: Number.isFinite(spacing)
      ? Math.min(0.06, Math.max(0, spacing))
      : defaultThemeSettings.bodyLetterSpacing,
    headingScale: isAllowed("headingScale", candidate.headingScale)
      ? candidate.headingScale
      : defaultThemeSettings.headingScale,
    sectionSpacing: isAllowed("sectionSpacing", candidate.sectionSpacing)
      ? candidate.sectionSpacing
      : defaultThemeSettings.sectionSpacing,
    motionLevel: isAllowed("motionLevel", candidate.motionLevel)
      ? candidate.motionLevel
      : defaultThemeSettings.motionLevel,
    textureLevel: isAllowed("textureLevel", candidate.textureLevel)
      ? candidate.textureLevel
      : defaultThemeSettings.textureLevel,
    ctaImageFit: isAllowed("ctaImageFit", candidate.ctaImageFit)
      ? candidate.ctaImageFit
      : defaultThemeSettings.ctaImageFit,
  };
}
