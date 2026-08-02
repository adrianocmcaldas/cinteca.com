import type { Metadata, Viewport } from "next";
import { Bai_Jamjuree, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const display = Bai_Jamjuree({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cinteca.es"),
  title: {
    default: "Cinteca · AD Caldas Innotec, S.A.",
    template: "%s · Cinteca",
  },
  description:
    "Sitio corporativo oficial de AD Caldas Innotec, S.A., titular de la marca Cinteca y promotora de software, IA, telecomunicaciones, automatización e infraestructura tecnológica.",
  keywords: [
    "AD Caldas Innotec",
    "Cinteca",
    "LegalNeuron",
    "NordixBIOS",
    "NCS Engine",
    "software",
    "inteligencia artificial",
    "telecomunicaciones",
    "automatización industrial",
    "automatización residencial",
    "electrónica aplicada",
    "sistemas embebidos",
    "microcontroladores",
    "DevOps",
    "cloud computing",
    "GPU",
    "SEO",
    "GEO",
    "LLMO",
    "infraestructura tecnológica",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cinteca.es",
    siteName: "Cinteca",
    title: "Cinteca · AD Caldas Innotec, S.A.",
    description:
      "Software, IA, telecomunicaciones, automatización e infraestructura de AD Caldas Innotec, S.A.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Cinteca · AD Caldas Innotec, S.A.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinteca · AD Caldas Innotec, S.A.",
    description:
      "Software, IA, telecomunicaciones, automatización e infraestructura de AD Caldas Innotec, S.A.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#edf2f1",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
