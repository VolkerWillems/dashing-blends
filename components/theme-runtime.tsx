"use client";

import { useEffect } from "react";

import { applyThemeSettings, readStoredThemeSettings } from "@/lib/theme-client";

export function ThemeRuntime() {
  useEffect(() => {
    applyThemeSettings(readStoredThemeSettings());
  }, []);

  return null;
}
