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
    default: "Cinteca — Engenharia, software e sistemas conectados",
    template: "%s · Cinteca",
  },
  description:
    "Engenharia aplicada, software, inteligência artificial, telecomunicações, automação e infraestrutura para transformar complexidade em sistemas confiáveis.",
  keywords: [
    "engenharia de software",
    "inteligência artificial",
    "telecomunicações",
    "automação industrial",
    "sistemas embarcados",
    "cloud",
    "DevOps",
    "infraestrutura de TI",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cinteca.es",
    siteName: "Cinteca",
    title: "Cinteca — Complexidade conectada",
    description:
      "Engenharia aplicada para sistemas que atravessam software, IA, redes, cloud, eletrónica e automação.",
  },
  twitter: {
    card: "summary",
    title: "Cinteca — Complexidade conectada",
    description:
      "Engenharia aplicada para sistemas que atravessam software, IA, redes, cloud, eletrónica e automação.",
  },
};

export const viewport: Viewport = {
  themeColor: "#eef4f5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
