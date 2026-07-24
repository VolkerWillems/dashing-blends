"use client";

import { useEffect } from "react";

import { applyThemeSettings } from "@/lib/theme-client";
import { normalizeThemeSettings, THEME_STORAGE_KEY } from "@/lib/theme-settings";

export function ThemeRuntime() {
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (stored) applyThemeSettings(normalizeThemeSettings(JSON.parse(stored)));
    } catch {
      // Invalid local settings are ignored so the production design remains untouched.
    }
  }, []);

  return null;
}
