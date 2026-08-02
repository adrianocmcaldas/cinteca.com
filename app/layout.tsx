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
    "Official corporate website of AD Caldas Innotec, S.A., owner of the Cinteca technology brand.",
  alternates: {
    canonical: "https://cinteca.es",
    languages: {
      pt: "/?lang=pt",
      en: "/?lang=en",
      es: "/?lang=es",
      nb: "/?lang=nb",
      "x-default": "/?lang=en",
    },
  },
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
    locale: "en_GB",
    alternateLocale: ["pt_PT", "es_ES", "nb_NO"],
    url: "https://cinteca.es",
    siteName: "Cinteca",
    title: "Cinteca · AD Caldas Innotec, S.A.",
    description:
      "Software, AI, telecommunications, automation and infrastructure by AD Caldas Innotec, S.A.",
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
      "Software, AI, telecommunications, automation and infrastructure by AD Caldas Innotec, S.A.",
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
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
