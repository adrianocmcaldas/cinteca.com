import type { Metadata } from "next";
import { LegalDocumentPage } from "../legal-shell";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description:
    "Términos y Condiciones de Uso de los sitios, productos y servicios del grupo AD Caldas Innotec, S.A., incluida la utilización de funcionalidades de inteligencia artificial.",
  alternates: {
    canonical: "/legal/terminos/",
    languages: {
      pt: "/legal/terminos/?lang=pt",
      en: "/legal/terminos/?lang=en",
      es: "/legal/terminos/?lang=es",
      nb: "/legal/terminos/?lang=nb",
      "x-default": "/legal/terminos/?lang=en",
    },
  },
};

export default function TermsPage() {
  return <LegalDocumentPage doc="terminos" />;
}
