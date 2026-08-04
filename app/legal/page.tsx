import type { Metadata } from "next";
import { LegalHub } from "./legal-shell";

export const metadata: Metadata = {
  title: "Centro Legal",
  description:
    "Centro Legal del grupo AD Caldas Innotec, S.A.: Política de Privacidad, Términos y Condiciones de Uso y Acuerdo de Licencia de Usuario Final (EULA) en portugués, inglés, español y noruego.",
  alternates: {
    canonical: "/legal/",
    languages: {
      pt: "/legal/?lang=pt",
      en: "/legal/?lang=en",
      es: "/legal/?lang=es",
      nb: "/legal/?lang=nb",
      "x-default": "/legal/?lang=en",
    },
  },
};

export default function LegalHubPage() {
  return <LegalHub />;
}
