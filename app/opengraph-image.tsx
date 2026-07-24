import { ImageResponse } from "next/og";

export const alt = "Dashing Blends | Cocktails & Hospitality";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 68px",
          background:
            "radial-gradient(circle at 82% 16%, rgba(191, 25, 105, 0.32), transparent 34%), linear-gradient(145deg, #120a11 0%, #1b0b19 58%, #090608 100%)",
          color: "#f6dfaa",
          fontFamily: "Arial, sans-serif",
          border: "14px solid #080508",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "fit-content",
            padding: "12px 18px",
            background: "#d5aa45",
            color: "#120a11",
            border: "4px solid #080508",
            boxShadow: "8px 8px 0 #080508",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Venlo · Op locatie
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 920,
              fontSize: 86,
              lineHeight: 0.94,
              fontWeight: 900,
              letterSpacing: "-0.035em",
              textTransform: "uppercase",
              textShadow: "5px 5px 0 #080508",
            }}
          >
            Cocktails met karakter.
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              color: "#d4c09b",
              fontSize: 30,
              lineHeight: 1.25,
              fontWeight: 600,
            }}
          >
            Cocktailworkshops, mobiele cocktailbar en horeca support door Dashing Blends.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "3px solid rgba(213, 170, 69, 0.72)",
            paddingTop: 22,
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>Dashing Blends</span>
          <span style={{ color: "#d5aa45" }}>Cocktails & Hospitality</span>
        </div>
      </div>
    ),
    size,
  );
}
