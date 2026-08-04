import type { Metadata } from "next";
import { LegalDocumentPage } from "../legal-shell";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad del grupo AD Caldas Innotec, S.A.: categorías de datos, finalidades, bases jurídicas, derechos RGPD, LGPD (Brasil) y referencias para usuarios de los Estados Unidos.",
  alternates: {
    canonical: "/legal/privacidad/",
    languages: {
      pt: "/legal/privacidad/?lang=pt",
      en: "/legal/privacidad/?lang=en",
      es: "/legal/privacidad/?lang=es",
      nb: "/legal/privacidad/?lang=nb",
      "x-default": "/legal/privacidad/?lang=en",
    },
  },
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage doc="privacidad" />;
}
