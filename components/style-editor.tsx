"use client";

import Link from "next/link";
import { Check, Copy, ExternalLink, RotateCcw, Save, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  applyThemeSettings,
  clearStoredThemeSettings,
  readStoredThemeSettings,
  storeThemeSettings,
} from "@/lib/theme-client";
import { defaultThemeSettings, type ThemeSettings } from "@/lib/theme-settings";

const presets: Record<string, ThemeSettings> = {
  current: defaultThemeSettings,
  calm: {
    ...defaultThemeSettings,
    headingScale: "compact",
    sectionSpacing: "compact",
    motionLevel: "subtle",
    textureLevel: "subtle",
  },
  comic: {
    ...defaultThemeSettings,
    headingScale: "large",
    sectionSpacing: "spacious",
    motionLevel: "normal",
    textureLevel: "normal",
    primary: "#d00086",
    secondary: "#e1b54f",
  },
};

const colorFields: Array<{
  key: keyof Pick<ThemeSettings, "background" | "surface" | "primary" | "secondary" | "foreground" | "mutedForeground">;
  label: string;
  help: string;
}> = [
  { key: "background", label: "Achtergrond", help: "De algemene donkere achtergrondkleur." },
  { key: "surface", label: "Panelen", help: "Kleur van kaarten, blokken en formulieren." },
  { key: "primary", label: "Magenta accent", help: "Buttons, actieve accenten en belangrijke acties." },
  { key: "secondary", label: "Goud accent", help: "Labels, lijnen en ondersteunende accenten." },
  { key: "foreground", label: "Hoofdtekst", help: "Koppen en lichte tekst." },
  { key: "mutedForeground", label: "Lopende tekst", help: "Bodytekst en rustigere informatie." },
];

export function StyleEditor() {
  const [settings, setSettings] = useState<ThemeSettings>(defaultThemeSettings);
  const [status, setStatus] = useState("Kies instellingen en bekijk het resultaat direct in de preview.");

  useEffect(() => {
    const stored = readStoredThemeSettings();
    setSettings(stored);
    applyThemeSettings(stored);
  }, []);

  useEffect(() => {
    applyThemeSettings(settings);
  }, [settings]);

  const exportText = useMemo(() => JSON.stringify(settings, null, 2), [settings]);

  function update<K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) {
    setSettings((current) => ({ ...current, [key]: value }));
    setStatus("Live preview bijgewerkt. Sla de instellingen op om ze in deze browser te bewaren.");
  }

  function applyPreset(name: string) {
    const preset = presets[name] ?? defaultThemeSettings;
    setSettings(preset);
    setStatus("Preset toegepast. Controleer de preview en sla op wanneer dit de juiste richting is.");
  }

  function saveSettings() {
    storeThemeSettings(settings);
    setStatus("Instellingen opgeslagen in deze browser.");
  }

  function resetSettings() {
    clearStoredThemeSettings();
    setSettings(defaultThemeSettings);
    applyThemeSettings(defaultThemeSettings);
    setStatus("Teruggezet naar de huidige Dashing Blends-stijl.");
  }

  async function copySettings() {
    try {
      await navigator.clipboard.writeText(exportText);
      setStatus("Configuratie gekopieerd. Deze kan rechtstreeks worden doorgestuurd.");
    } catch {
      setStatus("Kopiëren lukte niet. Selecteer de configuratie onderaan handmatig.");
    }
  }

  return (
    <main id="page-content" className="style-editor-shell">
      <header className="style-editor-header">
        <div>
          <p className="style-editor-kicker">Dashing Blends</p>
          <h1>Website style editor</h1>
          <p>
            Pas kleur, typografie, ruimte en beweging aan. De preview verandert direct, zodat niemand op basis van zes losse WhatsApp-berichten hoeft te raden wat “iets rustiger” betekent.
          </p>
        </div>
        <Link href="/" className="style-editor-link" target="_blank">
          Bekijk website
          <ExternalLink aria-hidden />
        </Link>
      </header>

      <div className="style-editor-grid">
        <form className="style-editor-form" onSubmit={(event) => event.preventDefault()}>
          <section className="editor-panel">
            <div className="editor-panel-heading">
              <SlidersHorizontal aria-hidden />
              <div>
                <h2>Snelle stijlkeuze</h2>
                <p>Begin met een preset en pas daarna details aan.</p>
              </div>
            </div>
            <div className="preset-grid">
              <button type="button" onClick={() => applyPreset("current")}>Huidige stijl</button>
              <button type="button" onClick={() => applyPreset("calm")}>Rustiger en strakker</button>
              <button type="button" onClick={() => applyPreset("comic")}>Meer comic-impact</button>
            </div>
          </section>

          <section className="editor-panel">
            <div className="editor-panel-heading">
              <div>
                <h2>Kleuren</h2>
                <p>Kies kleuren die direct op de hele website worden toegepast.</p>
              </div>
            </div>
            <div className="color-field-grid">
              {colorFields.map((field) => (
                <label key={field.key} className="color-field">
                  <span>
                    <strong>{field.label}</strong>
                    <small>{field.help}</small>
                  </span>
                  <span className="color-input-wrap">
                    <input
                      type="color"
                      value={settings[field.key]}
                      onChange={(event) => update(field.key, event.target.value)}
                      aria-label={field.label}
                    />
                    <code>{settings[field.key]}</code>
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section className="editor-panel">
            <div className="editor-panel-heading">
              <div>
                <h2>Typografie en ruimte</h2>
                <p>De veilige knoppen. Geen mogelijkheid om een heading per ongeluk 200 pixels groot te maken.</p>
              </div>
            </div>

            <label className="editor-field">
              <span>
                <strong>Kopgrootte</strong>
                <small>Geldt voor hero’s, sectiekoppen en kaarttitels.</small>
              </span>
              <select
                value={settings.headingScale}
                onChange={(event) => update("headingScale", event.target.value as ThemeSettings["headingScale"])}
              >
                <option value="compact">Compact</option>
                <option value="balanced">Gebalanceerd</option>
                <option value="large">Groot en uitgesproken</option>
              </select>
            </label>

            <label className="editor-field">
              <span>
                <strong>Ruimte tussen secties</strong>
                <small>Bepaalt hoeveel verticale ademruimte iedere pagina krijgt.</small>
              </span>
              <select
                value={settings.sectionSpacing}
                onChange={(event) => update("sectionSpacing", event.target.value as ThemeSettings["sectionSpacing"])}
              >
                <option value="compact">Compact</option>
                <option value="balanced">Gebalanceerd</option>
                <option value="spacious">Ruim</option>
              </select>
            </label>

            <label className="editor-range">
              <span>
                <strong>Letterspacing bodytekst</strong>
                <small>{settings.bodyLetterSpacing.toFixed(3)}em</small>
              </span>
              <input
                type="range"
                min="0"
                max="0.06"
                step="0.002"
                value={settings.bodyLetterSpacing}
                onChange={(event) => update("bodyLetterSpacing", Number(event.target.value))}
              />
            </label>
          </section>

          <section className="editor-panel">
            <div className="editor-panel-heading">
              <div>
                <h2>Effecten</h2>
                <p>Genoeg beweging voor karakter, niet genoeg om een cocktailkaart zeeziek te maken.</p>
              </div>
            </div>

            <label className="editor-field">
              <span>
                <strong>Animaties</strong>
                <small>Reveal-effecten, hoverreacties en transitions.</small>
              </span>
              <select
                value={settings.motionLevel}
                onChange={(event) => update("motionLevel", event.target.value as ThemeSettings["motionLevel"])}
              >
                <option value="off">Uit</option>
                <option value="subtle">Subtiel</option>
                <option value="normal">Normaal</option>
              </select>
            </label>

            <label className="editor-field">
              <span>
                <strong>Comictextuur</strong>
                <small>Halftone dots en printstructuur over de achtergrond.</small>
              </span>
              <select
                value={settings.textureLevel}
                onChange={(event) => update("textureLevel", event.target.value as ThemeSettings["textureLevel"])}
              >
                <option value="off">Uit</option>
                <option value="subtle">Subtiel</option>
                <option value="normal">Normaal</option>
              </select>
            </label>

            <label className="editor-field">
              <span>
                <strong>CTA-afbeeldingen</strong>
                <small>Kies tussen een gevuld vlak of het volledige artwork.</small>
              </span>
              <select
                value={settings.ctaImageFit}
                onChange={(event) => update("ctaImageFit", event.target.value as ThemeSettings["ctaImageFit"])}
              >
                <option value="contain">Volledig tonen</option>
                <option value="cover">Vlak vullen</option>
              </select>
            </label>
          </section>

          <div className="editor-actions">
            <button type="button" className="editor-primary-action" onClick={saveSettings}>
              <Save aria-hidden />
              Opslaan
            </button>
            <button type="button" onClick={copySettings}>
              <Copy aria-hidden />
              Kopieer instellingen
            </button>
            <button type="button" onClick={resetSettings}>
              <RotateCcw aria-hidden />
              Reset
            </button>
          </div>

          <p className="editor-status" role="status">
            <Check aria-hidden />
            {status}
          </p>

          <details className="editor-export">
            <summary>Technische configuratie tonen</summary>
            <textarea readOnly value={exportText} rows={16} aria-label="Technische stijlconfiguratie" />
          </details>
        </form>

        <aside className="style-preview" aria-label="Live stijlpreview">
          <div className="style-preview-sticky">
            <p className="style-preview-label">Live preview</p>
            <div className="preview-card">
              <span className="eyebrow-copy">Cocktails & hospitality</span>
              <h2 className="display-copy">Een sterke stijl zonder typografische ongelukken.</h2>
              <p>
                Dashing Blends verzorgt cocktailworkshops, mobiele cocktailservice en professionele horecaondersteuning vanuit Venlo.
              </p>
              <div className="preview-actions">
                <span>Contact opnemen</span>
                <span>Bekijk diensten</span>
              </div>
            </div>
            <div className="preview-swatches">
              {colorFields.slice(0, 4).map((field) => (
                <div key={field.key}>
                  <span style={{ background: settings[field.key] }} />
                  <small>{field.label}</small>
                </div>
              ))}
            </div>
            <p className="preview-note">
              De opgeslagen stijl geldt alleen in deze browser. Kopieer de configuratie om de gekozen stijl definitief in productie te laten zetten.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
