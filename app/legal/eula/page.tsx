import type { Metadata } from "next";
import { LegalDocumentPage } from "../legal-shell";

export const metadata: Metadata = {
  title: "Acuerdo de Licencia de Usuario Final (EULA)",
  description:
    "Acuerdo de Licencia de Usuario Final (EULA) del software del grupo AD Caldas Innotec, S.A.: aplicaciones web, móviles y de escritorio, APIs y agentes de IA.",
  alternates: {
    canonical: "/legal/eula/",
    languages: {
      pt: "/legal/eula/?lang=pt",
      en: "/legal/eula/?lang=en",
      es: "/legal/eula/?lang=es",
      nb: "/legal/eula/?lang=nb",
      "x-default": "/legal/eula/?lang=en",
    },
  },
};

export default function EulaPage() {
  return <LegalDocumentPage doc="eula" />;
}
