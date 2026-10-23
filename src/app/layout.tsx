import type { Metadata } from "next";
import { Chakra_Petch, Archivo } from "next/font/google";
import "./globals.css";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Constructora P.G — Arquitectura, construcción y mantención en Santiago",
  description:
    "Del plano a la entrega con un único responsable: quinchos y terrazas, cocinas integrales, casas y remodelaciones, mantención y accesos. Precios reales en UF, pago en cuotas y garantía que no termina con la entrega. Santiago, Chile.",
  icons: {
    icon: "/brand/constructora_pg_icon.png",
  },
  openGraph: {
    title: "Constructora P.G — Arquitectura, construcción y mantención en Santiago",
    description:
      "Del plano a la entrega, sin intermediarios. Precios reales publicados en UF, pago en cuotas con Transbank y garantía que no termina con la entrega.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${chakra.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
