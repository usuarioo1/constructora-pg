import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Constructora P.G — arquitectura, construcción y mantención en Santiago de Chile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconData = await readFile(
  join(process.cwd(), "public", "brand", "constructora_pg_icon.png"),
  "base64",
);
const iconSrc = `data:image/png;base64,${iconData}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,19,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,19,0.055) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={iconSrc} width={64} height={64} alt="" />
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 3,
                color: "#111113",
                textTransform: "uppercase",
              }}
            >
              Constructora P.G
            </div>
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 3,
              color: "#43464d",
              textTransform: "uppercase",
            }}
          >
            Santiago · Chile
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.04,
              color: "#111113",
            }}
          >
            Del plano a la entrega,
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.04,
              color: "#2b50ab",
            }}
          >
            sin intermediarios.
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 30,
              fontWeight: 500,
              color: "#43464d",
            }}
          >
            Quinchos · Cocinas integrales · Casas · Remodelaciones
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#3f6fd4",
            padding: "24px 36px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            Precios reales en UF · Pago en cuotas
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            Cotiza por WhatsApp
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
