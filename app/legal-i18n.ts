import type { Locale } from "./i18n";

/*
 * Legal Center copy — the complete text of the three group documents
 * (Privacy Policy, Terms and Conditions of Use, EULA) in the four site
 * languages. Kept apart from app/i18n.ts on purpose: this file is large
 * and only loaded by the /legal routes.
 *
 * The Spanish version is the prevailing one; every other language is a
 * faithful translation of the same clauses.
 */

export type LegalDocKey = "privacidad" | "terminos" | "eula";

export type LegalTable = {
  headers: [string, string];
  rows: [string, string][];
};

export type LegalSection = {
  title: string;
  body: string[];
  table?: LegalTable;
  list?: { style: "bullet" | "roman"; items: string[] };
  after?: string[];
};

export type LegalDocument = {
  docLabel: string;
  title: string;
  summary: string;
  sections: LegalSection[];
};

export type LegalCopy = {
  htmlLang: string;
  languageLabel: string;
  registryLabel: string;
  versionLine: string;
  prevalenceNote: string;
  contactLabel: string;
  otherDocuments: string;
  hub: {
    label: string;
    title: string;
    intro: string[];
    scopeLabel: string;
    scopeItems: string[];
    excludedNote: string;
  };
  documents: Record<LegalDocKey, LegalDocument>;
};

export const legalDocKeys: readonly LegalDocKey[] = [
  "privacidad",
  "terminos",
  "eula",
];

const en: LegalCopy = {
  htmlLang: "en",
  languageLabel: "Language",
  registryLabel: "Legal register",
  versionLine: "Version 1.0 · August 2026",
  prevalenceNote:
    "These documents are published in Portuguese, English, Spanish and Norwegian. In the event of any discrepancy between language versions, the Spanish version shall prevail.",
  contactLabel: "Single contact channel",
  otherDocuments: "Other documents in this Legal Center",
  hub: {
    label: "Legal Center",
    title: "Legal Center",
    intro: [
      "This Legal Center gathers the documents that govern the use of the websites, products and services of the AD Caldas Innotec, S.A. group — a Spanish company with Tax ID A66316399, registered at the Commercial Registry of Cádiz, Sheet CA-56553, with registered office at Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spain — including its investee company NEX FAN ESPAÑA, S.L. (Tax ID B56715154, Commercial Registry of Cádiz), operator of the LegalNeuron product.",
      "The three documents below — Privacy Policy, Terms and Conditions of Use and End User License Agreement (EULA) — form a single set of group-wide policies and apply to the following properties:",
    ],
    scopeLabel: "Scope — covered properties",
    scopeItems: [
      "cinteca.es — corporate website of AD Caldas Innotec, S.A.",
      "adrianocaldas.com — personal and professional website",
      "nordixbios.com — NordixBIOS / Agentic AI Factory",
      "ncsengine.com — NCS Engine",
      "nordixsystems.com — Nordix Systems",
      "legalneuron.es — LegalNeuron, operated by NEX FAN ESPAÑA, S.L.",
      "cinte.com.br — CINTE (Brazil)",
      "the mobile and desktop applications and the APIs associated with these products",
    ],
    excludedNote:
      "Websites created in collaboration with third parties — among others, Plorea, Grupo Laeras and Innocards Loyalty — have their own policies and are not covered by these documents.",
  },
  documents: {
    privacidad: {
      docLabel: "Privacy Policy",
      title: "Privacy Policy",
      summary:
        "How the group processes personal data across its websites and products: categories, purposes, GDPR rights, LGPD (Brazil) and references for users in the United States.",
      sections: [
        {
          title: "Controller and scope",
          body: [
            "The data controller is AD Caldas Innotec, S.A., a Spanish company with Tax ID A66316399, registered at the Commercial Registry of Cádiz, Sheet CA-56553, with registered office at Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spain. Where the service used is LegalNeuron, the operating entity is NEX FAN ESPAÑA, S.L. (Tax ID B56715154, Commercial Registry of Cádiz), an investee company of AD Caldas Innotec, S.A.; both entities apply this same policy.",
            "This single group policy applies to the properties listed in the Legal Center: cinteca.es, adrianocaldas.com, nordixbios.com (NordixBIOS / Agentic AI Factory), ncsengine.com (NCS Engine), nordixsystems.com (Nordix Systems), legalneuron.es (LegalNeuron), cinte.com.br (CINTE, Brazil) and the mobile and desktop applications and APIs associated with these products. Websites created in collaboration with third parties have their own policies and fall outside this document.",
          ],
        },
        {
          title: "Data we process",
          body: [
            "We process only the data needed for each purpose. Depending on the service, this may include:",
          ],
          list: {
            style: "bullet",
            items: [
              "Identification and contact data: name, email address, company and the content of messages sent through our forms.",
              "Account data: credentials, preferences and settings for products that require registration.",
              "Billing data: the tax and payment details needed to manage the contractual relationship with customers.",
              "Minimal technical data: access and security logs, IP addresses and the data generated by anti-abuse verification (Cloudflare Turnstile).",
              "Content submitted to the services: documents and information provided by the user for processing, including content handled by artificial-intelligence features.",
            ],
          },
        },
        {
          title: "Purposes and legal bases",
          body: [
            "Each processing activity relies on a legal basis under Article 6 of the GDPR:",
          ],
          table: {
            headers: ["Purpose", "Legal basis"],
            rows: [
              [
                "Responding to enquiries and contact requests",
                "Pre-contractual measures and the legitimate interest in handling professional communications",
              ],
              [
                "Providing the contracted services and products",
                "Performance of a contract",
              ],
              [
                "Security, abuse prevention and service continuity",
                "Legitimate interest in protecting the infrastructure and its users",
              ],
              [
                "Complying with tax, commercial and other legal obligations",
                "Legal obligation",
              ],
              [
                "Commercial communications",
                "Express consent; not practised on the group's corporate websites",
              ],
            ],
          },
        },
        {
          title: "Cookies and tracking",
          body: [
            "The group's corporate websites use no advertising or audience-analytics cookies. Only strictly necessary technical elements are used, such as the Cloudflare Turnstile anti-abuse verification on contact forms.",
            "Products that require signing in may use functional session cookies, which are essential to maintain authentication and user preferences. We do not sell personal data and we do not share it with advertising networks.",
          ],
        },
        {
          title: "Artificial-intelligence features",
          body: [
            "The group's products — including NordixBIOS / Agentic AI Factory and LegalNeuron — process content through artificial-intelligence systems following the customer's instructions. AI-generated results are technological assistance and may require verification; human supervision is recommended and, for decisions with legal or otherwise significant effects, required.",
            "Customer data and content are not used to train third-party foundation models without an express agreement with the customer.",
          ],
        },
        {
          title: "Recipients and sub-processors",
          body: [
            "To provide the services we rely on infrastructure and delivery providers — for example Amazon Web Services, Cloudflare and email providers — acting as processors or sub-processors under contracts compliant with Article 28 of the GDPR. There are no commercial transfers of personal data. Data will be disclosed to authorities only where a legal obligation exists.",
          ],
        },
        {
          title: "International transfers",
          body: [
            "Some providers may process data outside the European Economic Area. Where this happens, the transfer is covered by adequate safeguards: adequacy decisions of the European Commission or standard contractual clauses, supplemented with additional measures where necessary.",
          ],
        },
        {
          title: "Retention",
          body: [
            "Data is kept for as long as necessary for the purpose for which it was collected and, afterwards, blocked for the periods required to comply with legal obligations or to address potential liabilities. Content processed by the services is retained according to the customer's settings and instructions.",
          ],
        },
        {
          title: "Your rights under the GDPR",
          body: [
            "You may exercise at any time your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw any consent given, through the single contact channel: the protected form available at cinteca.es/#contacto.",
            "If you consider that the processing does not comply with the law, you may lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) or with the supervisory authority of your place of residence.",
          ],
        },
        {
          title: "Data subjects in Brazil (LGPD)",
          body: [
            "For data subjects located in Brazil, this policy is supplemented by the Brazilian General Data Protection Law (Law No. 13.709/2018 — LGPD). Those data subjects may exercise the rights of Article 18 of the LGPD — confirmation of processing, access, correction, anonymisation, portability, deletion and information about disclosures — through the same contact channel, and may also address the Brazilian National Data Protection Authority (ANPD).",
          ],
        },
        {
          title: "Users in the United States",
          body: [
            "We do not sell personal data and we do not share it for behavioural advertising. Users residing in states with their own privacy laws — for example California — may exercise the rights those laws grant them (access, deletion, correction and non-discrimination for exercising them) through the same contact channel.",
          ],
        },
        {
          title: "Minors, security and changes",
          body: [
            "Our websites and services are not directed at children under 14 — or under the higher age, up to 16, established by local law — and we do not knowingly collect data from minors.",
            "We apply technical and organisational measures appropriate to the risk: encryption in transit, access control, data minimisation, security logging and internal incident-response procedures.",
            "Changes to this policy will be published on this page with an indication of the version and date. Version 1.0 · August 2026.",
          ],
        },
      ],
    },
    terminos: {
      docLabel: "Terms and Conditions of Use",
      title: "Terms and Conditions of Use",
      summary:
        "The rules governing access to and use of the group's websites, products and services, including the use of artificial-intelligence features.",
      sections: [
        {
          title: "Identification and scope",
          body: [
            "These Terms and Conditions of Use govern access to and use of the websites, products and services of the AD Caldas Innotec, S.A. group (Tax ID A66316399, Commercial Registry of Cádiz, Sheet CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spain), including the services operated by its investee company NEX FAN ESPAÑA, S.L. (Tax ID B56715154). The scope of application covers the properties listed in the Legal Center.",
            "Accessing or using any of the properties implies acceptance of these terms. Certain products may additionally be subject to particular conditions, which shall prevail to the extent they are specific.",
          ],
        },
        {
          title: "Access and accounts",
          body: [
            "Some services require registration. The user undertakes to provide truthful and up-to-date information, to keep their credentials confidential and to report without delay any unauthorised use of their account. The user is responsible for the activity carried out with their credentials, unless they can show third-party use not attributable to them.",
          ],
        },
        {
          title: "Rules of use",
          body: ["When using the services, the user agrees not to:"],
          list: {
            style: "roman",
            items: [
              "publish, transmit or store unlawful, defamatory or discriminatory content, or content that infringes third-party rights;",
              "introduce malware, malicious code or any element capable of damaging or altering the systems of the group or of third parties;",
              "infringe intellectual or industrial property rights, trade secrets or other rights;",
              "send unsolicited bulk communications (spam) or use the services for abusive prospecting;",
              "spread false or misleading information, or manipulate results generated by the services in order to mislead;",
              "impersonate third parties or misrepresent their affiliation with a person or entity;",
              "decompile, disassemble or carry out unauthorised reverse engineering outside the cases permitted by law;",
              "abuse the APIs, circumvent technical limits, quotas or security mechanisms, or access systems or data without authorisation;",
              "use the services, including artificial-intelligence features, to infringe third-party rights or applicable law.",
            ],
          },
          after: [
            "The group may suspend or restrict access where there are reasonable indications of a breach, with notice where possible.",
          ],
        },
        {
          title: "User content",
          body: [
            "The user retains ownership of the content they submit to the services. The user grants the group a limited, non-exclusive and revocable licence, solely to the extent necessary to operate, maintain and improve the service according to the chosen settings. The user warrants that they hold the necessary rights over the content provided and that it does not infringe third-party rights.",
          ],
        },
        {
          title: "Intellectual property",
          body: [
            "The trademarks, names, logos, software, texts and other content of the group — including Cinteca, NordixBIOS, Agentic AI Factory, NCS Engine, Nordix Systems and LegalNeuron — belong to AD Caldas Innotec, S.A., to its group companies or to their licensors. Use of the services grants the user no intellectual or industrial property right beyond what is strictly necessary to use them in accordance with these terms.",
          ],
        },
        {
          title: "Artificial-intelligence services",
          body: [
            "Certain services incorporate artificial-intelligence features. AI-generated results constitute technological assistance: they may contain errors, inaccuracies or omissions and do not constitute professional advice of any kind — legal, medical, financial, tax or otherwise.",
            "The user must review the results before relying on them and maintain human supervision over any decision with legal or otherwise significant effects. The group is not liable for decisions taken without such review.",
          ],
        },
        {
          title: "Third-party services and links",
          body: [
            "The websites and products may contain links to, or integrations with, third-party services, which are governed by their own terms and policies. The group does not control, and assumes no responsibility for, the content or practices of external websites. Projects developed in collaboration with third parties have their own terms.",
          ],
        },
        {
          title: "Availability",
          body: [
            "The group devotes reasonable efforts to maintaining the availability and continuity of the services, without guaranteeing uninterrupted operation. Interruptions may occur due to maintenance, updates, incidents or external causes. Where possible, planned maintenance will be announced with reasonable notice.",
          ],
        },
        {
          title: "Warranties and liability",
          body: [
            "Unless otherwise provided in particular conditions, the websites and services are provided “as is” and “as available”, without warranties other than those required by law, to the maximum extent permitted by the applicable rules.",
            "Nothing in these terms limits or excludes rights granted to the user by mandatory law, including consumer law. For paid services, the group's total aggregate liability is limited to the amounts actually paid by the customer in the twelve months preceding the event giving rise to the claim, except in cases of wilful misconduct or gross negligence.",
          ],
        },
        {
          title: "Indemnification",
          body: [
            "A user who breaches these terms shall hold the group harmless from third-party claims, damages, penalties and reasonable expenses — including defence costs — arising directly from that breach, without prejudice to the rights granted to the user by mandatory law.",
          ],
        },
        {
          title: "General provisions",
          body: [
            "If any clause is declared void or unenforceable, the remaining clauses shall remain valid, and the affected clause shall be replaced by a valid one with equivalent effect. Failure to exercise a right does not imply a waiver of it. The group may assign its contractual position to companies of its group, informing the user where required.",
          ],
        },
        {
          title: "Governing law, jurisdiction and prevailing version",
          body: [
            "These terms are governed by Spanish law. Unless a mandatory consumer-protection rule provides otherwise, disputes shall be submitted to the courts of Jerez de la Frontera (Cádiz, Spain).",
            "These terms are published in several languages; in the event of discrepancy, the Spanish version shall prevail. Changes will be published in the Legal Center with an indication of the version and date. Version 1.0 · August 2026.",
          ],
        },
      ],
    },
    eula: {
      docLabel: "End User License Agreement",
      title: "End User License Agreement (EULA)",
      summary:
        "The license under which the group's software is used: web, mobile and desktop applications, APIs and AI agents.",
      sections: [
        {
          title: "Parties and subject matter",
          body: [
            "This End User License Agreement (“EULA”) is entered into between the user and AD Caldas Innotec, S.A. (Tax ID A66316399, Commercial Registry of Cádiz, Sheet CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spain) or, where the product is LegalNeuron, NEX FAN ESPAÑA, S.L. (Tax ID B56715154). It applies to the group's software: the web, mobile and desktop applications, APIs and AI agents of the products listed in the Legal Center. Particular conditions of each product may supplement this agreement and shall prevail to the extent they are specific.",
          ],
        },
        {
          title: "License grant",
          body: [
            "Subject to compliance with this EULA and, where applicable, to payment of the subscription, the group grants the user a limited, non-exclusive, non-transferable and revocable license to use the software in accordance with its documentation and the contracted plan. Sublicensing is not permitted without express authorisation.",
          ],
        },
        {
          title: "Restrictions",
          body: [
            "Except with express authorisation or to the extent mandatorily permitted by law, the user may not:",
          ],
          list: {
            style: "bullet",
            items: [
              "decompile, disassemble or reverse engineer the software, except in the cases provided for by law (for example, interoperability);",
              "redistribute, resell, rent, lend or make the software available to unauthorised third parties;",
              "circumvent or disable technical limits, quotas, security mechanisms or license controls;",
              "use the software or its results to develop, through reverse engineering, a competing product.",
            ],
          },
        },
        {
          title: "Subscriptions and payment",
          body: [
            "The commercial conditions — plans, prices, billing periods and renewal — are set out in the commercial terms of each product. Non-payment may lead to suspension of the service, with reasonable prior notice, and to termination of the contract if the non-payment persists.",
          ],
        },
        {
          title: "AI and outputs",
          body: [
            "To the extent permitted by law and provided the subscription is paid up, the rights over the results generated by the software for the customer (“outputs”) belong to the customer. The customer is responsible for the use made of those results and for verifying their accuracy and suitability.",
            "Human supervision is mandatory for any decision with legal or otherwise significant effects based on AI outputs. Presenting AI outputs as professional advice issued by a licensed person is prohibited.",
          ],
        },
        {
          title: "Data",
          body: [
            "The processing of personal data is governed by the group's Privacy Policy. For business customers, a data processing agreement (DPA) is available on request through the contact channel. Customer data and content are not used to train third-party models without an express agreement.",
          ],
        },
        {
          title: "Intellectual property",
          body: [
            "The software, its code, architecture, interfaces and documentation remain at all times the property of the group or its licensors. This EULA transfers no ownership right. Suggestions and feedback provided by the user may be used to improve the services without any obligation of compensation, without affecting the customer's content or data.",
          ],
        },
        {
          title: "Updates",
          body: [
            "The software may install updates automatically for security, correction or improvement purposes. Features may evolve, be replaced or be withdrawn; where a change substantially reduces essential features of a paid plan, the customer will be informed with reasonable notice.",
          ],
        },
        {
          title: "Limited warranty",
          body: [
            "The group warrants that the software will substantially conform to its documentation. It does not warrant that operation will be uninterrupted or error-free. All other warranties are excluded to the maximum extent permitted by law, without prejudice to the rights granted to the user by mandatory law, including consumer law.",
          ],
        },
        {
          title: "Limitation of liability",
          body: [
            "To the maximum extent permitted by law, the group shall not be liable for indirect damages, loss of profit, loss of data not attributable to the group or reputational damage. Total aggregate liability is limited to the amounts paid by the customer in the twelve months preceding the event giving rise to the claim or, if the software is used free of charge, to one hundred euros (EUR 100). These limitations do not apply in cases of wilful misconduct or gross negligence, or in any other case where the law prohibits limiting them.",
          ],
        },
        {
          title: "Term and termination",
          body: [
            "This EULA remains in force while the user uses the software or maintains an active subscription. It ends when the subscription ends or upon termination for a serious breach not remedied within a reasonable period after notice. Upon termination, use of the software shall cease and the customer's data shall be deleted or returned, without prejudice to copies that must be kept under a legal obligation.",
          ],
        },
        {
          title: "Governing law, jurisdiction and final provisions",
          body: [
            "This EULA is governed by Spanish law. Disputes shall be submitted to the courts of Jerez de la Frontera (Cádiz, Spain), unless a mandatory rule provides otherwise.",
            "The agreement is published in several languages; in the event of discrepancy, the Spanish version shall prevail. Single contact channel: protected form at cinteca.es/#contacto. Version 1.0 · August 2026.",
          ],
        },
      ],
    },
  },
};

const es: LegalCopy = {
  htmlLang: "es",
  languageLabel: "Idioma",
  registryLabel: "Registro legal",
  versionLine: "Versión 1.0 · agosto de 2026",
  prevalenceNote:
    "Estos documentos se publican en portugués, inglés, español y noruego. En caso de divergencia entre las versiones lingüísticas, prevalecerá la versión en español.",
  contactLabel: "Canal único de contacto",
  otherDocuments: "Otros documentos de este Centro Legal",
  hub: {
    label: "Centro Legal",
    title: "Centro Legal",
    intro: [
      "Este Centro Legal reúne los documentos que regulan el uso de los sitios web, productos y servicios del grupo AD Caldas Innotec, S.A. — sociedad mercantil española con NIF A66316399, inscrita en el Registro Mercantil de Cádiz, Hoja CA-56553, y con domicilio social en Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, España — incluida su sociedad participada NEX FAN ESPAÑA, S.L. (CIF B56715154, Registro Mercantil de Cádiz), operadora del producto LegalNeuron.",
      "Los tres documentos siguientes — Política de Privacidad, Términos y Condiciones de Uso y Acuerdo de Licencia de Usuario Final (EULA) — constituyen un conjunto único de políticas de grupo y se aplican a las siguientes propiedades:",
    ],
    scopeLabel: "Ámbito — propiedades cubiertas",
    scopeItems: [
      "cinteca.es — sitio corporativo de AD Caldas Innotec, S.A.",
      "adrianocaldas.com — sitio personal y profesional",
      "nordixbios.com — NordixBIOS / Agentic AI Factory",
      "ncsengine.com — NCS Engine",
      "nordixsystems.com — Nordix Systems",
      "legalneuron.es — LegalNeuron, operado por NEX FAN ESPAÑA, S.L.",
      "cinte.com.br — CINTE (Brasil)",
      "las aplicaciones móviles y de escritorio y las APIs asociadas a estos productos",
    ],
    excludedNote:
      "Quedan excluidos los sitios creados en colaboración con terceros — entre otros, Plorea, Grupo Laeras e Innocards Loyalty —, que disponen de sus propias políticas y no están cubiertos por estos documentos.",
  },
  documents: {
    privacidad: {
      docLabel: "Política de Privacidad",
      title: "Política de Privacidad",
      summary:
        "Cómo trata el grupo los datos personales en sus sitios y productos: categorías, finalidades, derechos RGPD, LGPD (Brasil) y referencias para usuarios de los Estados Unidos.",
      sections: [
        {
          title: "Responsable y ámbito de aplicación",
          body: [
            "El responsable del tratamiento es AD Caldas Innotec, S.A., sociedad mercantil española con NIF A66316399, inscrita en el Registro Mercantil de Cádiz, Hoja CA-56553, y con domicilio social en Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, España. Cuando el servicio utilizado sea LegalNeuron, la entidad operadora es NEX FAN ESPAÑA, S.L. (CIF B56715154, Registro Mercantil de Cádiz), sociedad participada por AD Caldas Innotec, S.A.; ambas entidades aplican esta misma política.",
            "Esta política única de grupo se aplica a las propiedades enumeradas en el Centro Legal: cinteca.es, adrianocaldas.com, nordixbios.com (NordixBIOS / Agentic AI Factory), ncsengine.com (NCS Engine), nordixsystems.com (Nordix Systems), legalneuron.es (LegalNeuron), cinte.com.br (CINTE, Brasil) y las aplicaciones móviles y de escritorio y las APIs asociadas a estos productos. Los sitios creados en colaboración con terceros disponen de políticas propias y quedan fuera de este documento.",
          ],
        },
        {
          title: "Datos que tratamos",
          body: [
            "Tratamos únicamente los datos necesarios para cada finalidad. Según el servicio, pueden incluir:",
          ],
          list: {
            style: "bullet",
            items: [
              "Datos de identificación y contacto: nombre, correo electrónico, empresa y el contenido de los mensajes enviados a través de nuestros formularios.",
              "Datos de cuenta: credenciales, preferencias y configuración de los productos que requieren registro.",
              "Datos de facturación: los datos fiscales y de pago necesarios para gestionar la relación contractual con los clientes.",
              "Datos técnicos mínimos: registros de acceso y seguridad, direcciones IP y los datos generados por la verificación anti-abuso (Cloudflare Turnstile).",
              "Contenidos enviados a los servicios: documentos e información que el usuario aporta para su procesamiento, incluidos los contenidos tratados por funcionalidades de inteligencia artificial.",
            ],
          },
        },
        {
          title: "Finalidades y bases jurídicas",
          body: [
            "Cada tratamiento se apoya en una base jurídica del artículo 6 del RGPD:",
          ],
          table: {
            headers: ["Finalidad", "Base jurídica"],
            rows: [
              [
                "Responder a consultas y solicitudes de contacto",
                "Medidas precontractuales e interés legítimo en atender comunicaciones profesionales",
              ],
              [
                "Prestar los servicios y productos contratados",
                "Ejecución del contrato",
              ],
              [
                "Seguridad, prevención de abusos y continuidad del servicio",
                "Interés legítimo en proteger la infraestructura y a sus usuarios",
              ],
              [
                "Cumplir obligaciones fiscales, mercantiles y de otra índole",
                "Obligación legal",
              ],
              [
                "Comunicaciones comerciales",
                "Consentimiento expreso; no se practican en los sitios corporativos del grupo",
              ],
            ],
          },
        },
        {
          title: "Cookies y rastreo",
          body: [
            "Los sitios corporativos del grupo no utilizan cookies de publicidad ni de análisis de audiencia. Solo se emplean elementos técnicos estrictamente necesarios, como la verificación anti-abuso de Cloudflare Turnstile en los formularios de contacto.",
            "Los productos que requieren inicio de sesión pueden utilizar cookies funcionales de sesión, imprescindibles para mantener la autenticación y las preferencias del usuario. No vendemos datos personales ni los compartimos con redes publicitarias.",
          ],
        },
        {
          title: "Funcionalidades de inteligencia artificial",
          body: [
            "Los productos del grupo — incluidos NordixBIOS / Agentic AI Factory y LegalNeuron — tratan contenidos mediante sistemas de inteligencia artificial siguiendo las instrucciones del cliente. Los resultados generados por IA constituyen asistencia tecnológica y pueden requerir verificación; la supervisión humana es recomendada y, en decisiones con efectos jurídicos o significativos, exigida.",
            "Los datos y contenidos de los clientes no se utilizan para entrenar modelos de fundación de terceros sin un acuerdo expreso con el cliente.",
          ],
        },
        {
          title: "Destinatarios y subencargados",
          body: [
            "Para prestar los servicios recurrimos a proveedores de infraestructura y entrega — por ejemplo, Amazon Web Services, Cloudflare y proveedores de correo electrónico — que actúan como encargados o subencargados del tratamiento en virtud de contratos conformes con el artículo 28 del RGPD. No se realizan cesiones comerciales de datos personales. Solo se comunicarán datos a las autoridades cuando exista una obligación legal.",
          ],
        },
        {
          title: "Transferencias internacionales",
          body: [
            "Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. Cuando esto ocurre, la transferencia se ampara en garantías adecuadas: decisiones de adecuación de la Comisión Europea o cláusulas contractuales tipo, complementadas con medidas adicionales cuando resulte necesario.",
          ],
        },
        {
          title: "Plazos de conservación",
          body: [
            "Los datos se conservan durante el tiempo necesario para la finalidad que motivó su recogida y, después, bloqueados durante los plazos exigidos para cumplir obligaciones legales o atender posibles responsabilidades. Los contenidos tratados por los servicios se conservan según la configuración y las instrucciones del cliente.",
          ],
        },
        {
          title: "Sus derechos conforme al RGPD",
          body: [
            "Puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento prestado, a través del canal único de contacto: el formulario protegido disponible en cinteca.es/#contacto.",
            "Si considera que el tratamiento no se ajusta a la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) o ante la autoridad de control de su lugar de residencia.",
          ],
        },
        {
          title: "Titulares en Brasil (LGPD)",
          body: [
            "Para los titulares de datos situados en Brasil, esta política se complementa con la Ley General de Protección de Datos brasileña (Ley n.º 13.709/2018 — LGPD). Dichos titulares pueden ejercer los derechos del artículo 18 de la LGPD — confirmación del tratamiento, acceso, corrección, anonimización, portabilidad, eliminación e información sobre comunicaciones — a través del mismo canal de contacto, y pueden dirigirse además a la Autoridad Nacional de Protección de Datos brasileña (ANPD).",
          ],
        },
        {
          title: "Usuarios en los Estados Unidos",
          body: [
            "No vendemos datos personales ni los compartimos para publicidad comportamental. Los usuarios residentes en estados con leyes de privacidad propias — por ejemplo, California — pueden ejercer los derechos que dichas leyes les reconozcan (acceso, eliminación, corrección y no discriminación por su ejercicio) a través del mismo canal de contacto.",
          ],
        },
        {
          title: "Menores, seguridad y modificaciones",
          body: [
            "Nuestros sitios y servicios no se dirigen a menores de 14 años — o de la edad superior, hasta 16, que establezca la normativa local — y no recogemos conscientemente datos de menores.",
            "Aplicamos medidas técnicas y organizativas apropiadas al riesgo: cifrado en tránsito, control de accesos, minimización de datos, registros de seguridad y procedimientos internos de respuesta a incidentes.",
            "Las modificaciones de esta política se publicarán en esta misma página con indicación de la versión y de la fecha. Versión 1.0 · agosto de 2026.",
          ],
        },
      ],
    },
    terminos: {
      docLabel: "Términos y Condiciones de Uso",
      title: "Términos y Condiciones de Uso",
      summary:
        "Las reglas que rigen el acceso y el uso de los sitios, productos y servicios del grupo, incluida la utilización de funcionalidades de inteligencia artificial.",
      sections: [
        {
          title: "Identificación y ámbito",
          body: [
            "Estos Términos y Condiciones de Uso regulan el acceso y la utilización de los sitios web, productos y servicios del grupo AD Caldas Innotec, S.A. (NIF A66316399, Registro Mercantil de Cádiz, Hoja CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, España), incluidos los servicios operados por su sociedad participada NEX FAN ESPAÑA, S.L. (CIF B56715154). El ámbito de aplicación comprende las propiedades enumeradas en el Centro Legal.",
            "El acceso o el uso de cualquiera de las propiedades implica la aceptación de estos términos. Determinados productos pueden estar sujetos, además, a condiciones particulares, que prevalecerán en lo que resulten específicas.",
          ],
        },
        {
          title: "Acceso y cuenta",
          body: [
            "Algunos servicios requieren registro. El usuario se compromete a facilitar información veraz y actualizada, a custodiar la confidencialidad de sus credenciales y a comunicar sin demora cualquier uso no autorizado de su cuenta. El usuario responde de la actividad realizada con sus credenciales, salvo que acredite un uso ajeno que no le sea imputable.",
          ],
        },
        {
          title: "Reglas de uso",
          body: ["Al utilizar los servicios, el usuario se obliga a no:"],
          list: {
            style: "roman",
            items: [
              "publicar, transmitir o almacenar contenidos ilícitos, difamatorios, discriminatorios o que vulneren derechos de terceros;",
              "introducir malware, código malicioso o cualquier elemento capaz de dañar o alterar los sistemas del grupo o de terceros;",
              "infringir derechos de propiedad intelectual o industrial, secretos empresariales u otros derechos;",
              "enviar comunicaciones masivas no solicitadas (spam) o utilizar los servicios para prospección abusiva;",
              "difundir información falsa o engañosa, o manipular resultados generados por los servicios con ánimo de inducir a error;",
              "suplantar la identidad de terceros o falsear su vinculación con una persona o entidad;",
              "descompilar, desensamblar o realizar ingeniería inversa no autorizada fuera de los supuestos permitidos por la ley;",
              "abusar de las APIs, eludir límites técnicos, cuotas o mecanismos de seguridad, o acceder sin autorización a sistemas o datos;",
              "utilizar los servicios, incluidas las funcionalidades de inteligencia artificial, para vulnerar derechos de terceros o la normativa aplicable.",
            ],
          },
          after: [
            "El grupo podrá suspender o restringir el acceso cuando existan indicios razonables de incumplimiento, con notificación cuando resulte posible.",
          ],
        },
        {
          title: "Contenidos del usuario",
          body: [
            "El usuario conserva la titularidad de los contenidos que envía a los servicios. Otorga al grupo una licencia limitada, no exclusiva y revocable, exclusivamente en la medida necesaria para operar, mantener y mejorar el servicio conforme a la configuración elegida. El usuario garantiza que dispone de los derechos necesarios sobre los contenidos aportados y que estos no vulneran derechos de terceros.",
          ],
        },
        {
          title: "Propiedad intelectual",
          body: [
            "Las marcas, denominaciones, logotipos, software, textos y demás contenidos del grupo — incluidos Cinteca, NordixBIOS, Agentic AI Factory, NCS Engine, Nordix Systems y LegalNeuron — pertenecen a AD Caldas Innotec, S.A., a las sociedades de su grupo o a sus licenciantes. El uso de los servicios no atribuye al usuario ningún derecho de propiedad intelectual o industrial más allá de lo estrictamente necesario para utilizarlos conforme a estos términos.",
          ],
        },
        {
          title: "Servicios de inteligencia artificial",
          body: [
            "Determinados servicios incorporan funcionalidades de inteligencia artificial. Los resultados generados por IA constituyen asistencia tecnológica: pueden contener errores, imprecisiones u omisiones y no constituyen asesoramiento profesional de ningún tipo — jurídico, médico, financiero, fiscal ni de otra naturaleza.",
            "El usuario debe revisar los resultados antes de utilizarlos y mantener supervisión humana sobre cualquier decisión con efectos jurídicos o significativos. El grupo no responde de las decisiones adoptadas sin dicha revisión.",
          ],
        },
        {
          title: "Servicios de terceros y enlaces",
          body: [
            "Los sitios y productos pueden contener enlaces o integraciones con servicios de terceros, que se rigen por sus propios términos y políticas. El grupo no controla ni asume responsabilidad por los contenidos o prácticas de sitios externos. Los proyectos desarrollados en colaboración con terceros disponen de términos propios.",
          ],
        },
        {
          title: "Disponibilidad",
          body: [
            "El grupo dedica esfuerzos razonables a mantener la disponibilidad y continuidad de los servicios, sin garantizar su funcionamiento ininterrumpido. Pueden producirse interrupciones por mantenimiento, actualizaciones, incidencias o causas ajenas. Cuando resulte posible, las intervenciones planificadas se comunicarán con antelación razonable.",
          ],
        },
        {
          title: "Garantías y responsabilidad",
          body: [
            "Salvo lo dispuesto en condiciones particulares, los sitios y servicios se facilitan «en el estado en que se encuentran» y «según disponibilidad», sin más garantías que las legalmente exigibles, en la máxima medida permitida por la normativa aplicable.",
            "Nada de lo previsto en estos términos limita o excluye derechos que la normativa imperativa — incluida la de consumidores y usuarios — reconozca al usuario. En los servicios de pago, la responsabilidad total agregada del grupo se limita a los importes efectivamente abonados por el cliente en los doce meses anteriores al hecho que origine la reclamación, salvo dolo o negligencia grave.",
          ],
        },
        {
          title: "Indemnización",
          body: [
            "El usuario que incumpla estos términos mantendrá indemne al grupo frente a reclamaciones de terceros, daños, sanciones y gastos razonables — incluidos los honorarios de defensa — derivados directamente de dicho incumplimiento, sin perjuicio de los derechos que la normativa imperativa reconozca al usuario.",
          ],
        },
        {
          title: "Disposiciones generales",
          body: [
            "Si alguna cláusula fuera declarada nula o inaplicable, las restantes conservarán su validez, y la cláusula afectada se sustituirá por otra válida de efecto equivalente. La falta de ejercicio de un derecho no implica renuncia al mismo. El grupo podrá ceder su posición contractual a sociedades de su grupo, informando al usuario cuando resulte preceptivo.",
          ],
        },
        {
          title: "Ley aplicable, jurisdicción y versión prevalente",
          body: [
            "Estos términos se rigen por la legislación española. Salvo que una norma imperativa de protección de los consumidores disponga otra cosa, las controversias se someterán a los juzgados y tribunales de Jerez de la Frontera (Cádiz, España).",
            "Estos términos se publican en varios idiomas; en caso de divergencia, prevalecerá la versión en español. Las modificaciones se publicarán en el Centro Legal con indicación de la versión y de la fecha. Versión 1.0 · agosto de 2026.",
          ],
        },
      ],
    },
    eula: {
      docLabel: "Acuerdo de Licencia de Usuario Final",
      title: "Acuerdo de Licencia de Usuario Final (EULA)",
      summary:
        "La licencia bajo la cual se utiliza el software del grupo: aplicaciones web, móviles y de escritorio, APIs y agentes de IA.",
      sections: [
        {
          title: "Partes y objeto",
          body: [
            "Este Acuerdo de Licencia de Usuario Final («EULA») se celebra entre el usuario y AD Caldas Innotec, S.A. (NIF A66316399, Registro Mercantil de Cádiz, Hoja CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, España) o, cuando el producto sea LegalNeuron, NEX FAN ESPAÑA, S.L. (CIF B56715154). Se aplica al software del grupo: las aplicaciones web, móviles y de escritorio, las APIs y los agentes de IA de los productos enumerados en el Centro Legal. Las condiciones particulares de cada producto pueden complementar este acuerdo y prevalecerán en lo específico.",
          ],
        },
        {
          title: "Licencia",
          body: [
            "Con sujeción al cumplimiento de este EULA y, en su caso, al pago de la suscripción, el grupo concede al usuario una licencia limitada, no exclusiva, intransferible y revocable para utilizar el software conforme a su documentación y al plan contratado. No se permite conceder sublicencias sin autorización expresa.",
          ],
        },
        {
          title: "Restricciones",
          body: [
            "Salvo autorización expresa o en la medida en que la ley lo permita con carácter imperativo, el usuario no podrá:",
          ],
          list: {
            style: "bullet",
            items: [
              "descompilar, desensamblar o realizar ingeniería inversa del software, salvo en los supuestos legalmente previstos (por ejemplo, interoperabilidad);",
              "redistribuir, revender, alquilar, prestar o poner el software a disposición de terceros no autorizados;",
              "eludir o desactivar límites técnicos, cuotas, mecanismos de seguridad o controles de licencia;",
              "utilizar el software o sus resultados para desarrollar, mediante ingeniería inversa, un producto competidor.",
            ],
          },
        },
        {
          title: "Suscripciones y pago",
          body: [
            "Las condiciones económicas — planes, precios, períodos de facturación y renovación — se establecen en las condiciones comerciales de cada producto. El impago podrá dar lugar a la suspensión del servicio, previa notificación con antelación razonable, y a la resolución del contrato si el impago persiste.",
          ],
        },
        {
          title: "IA y resultados (outputs)",
          body: [
            "En la medida permitida por la ley y siempre que la suscripción se encuentre al corriente de pago, los derechos sobre los resultados generados por el software para el cliente («outputs») corresponden al cliente. El cliente es responsable del uso que haga de dichos resultados y de verificar su exactitud e idoneidad.",
            "La supervisión humana es obligatoria en cualquier decisión con efectos jurídicos o significativos basada en outputs de IA. Queda prohibido presentar outputs de IA como asesoramiento profesional emitido por una persona habilitada.",
          ],
        },
        {
          title: "Datos",
          body: [
            "El tratamiento de datos personales se rige por la Política de Privacidad del grupo. Para clientes empresariales existe un acuerdo de encargo de tratamiento (DPA), disponible previa solicitud a través del canal de contacto. Los datos y contenidos del cliente no se utilizan para entrenar modelos de terceros sin acuerdo expreso.",
          ],
        },
        {
          title: "Propiedad intelectual",
          body: [
            "El software, su código, arquitectura, interfaces y documentación permanecen en todo momento bajo la titularidad del grupo o de sus licenciantes. Este EULA no transmite ningún derecho de propiedad. Las sugerencias y comentarios (feedback) que el usuario aporte podrán utilizarse para mejorar los servicios sin obligación de compensación, sin que ello afecte a los contenidos ni a los datos del cliente.",
          ],
        },
        {
          title: "Actualizaciones",
          body: [
            "El software puede instalar actualizaciones de forma automática por motivos de seguridad, corrección o mejora. Las funcionalidades pueden evolucionar, sustituirse o retirarse; cuando un cambio reduzca de forma sustancial funcionalidades esenciales de un plan de pago, se informará al cliente con antelación razonable.",
          ],
        },
        {
          title: "Garantía limitada",
          body: [
            "El grupo garantiza que el software se ajustará sustancialmente a su documentación. No garantiza que su funcionamiento sea ininterrumpido o esté libre de errores. Quedan excluidas todas las demás garantías en la máxima medida permitida por la ley, sin perjuicio de los derechos que la normativa imperativa — incluida la de consumidores — reconozca al usuario.",
          ],
        },
        {
          title: "Limitación de responsabilidad",
          body: [
            "En la máxima medida permitida por la ley, el grupo no responderá de daños indirectos, lucro cesante, pérdida de datos no imputable al grupo ni daños reputacionales. La responsabilidad total agregada se limita a los importes abonados por el cliente en los doce meses anteriores al hecho que origine la reclamación o, si el software se utiliza de forma gratuita, a cien euros (100 €). Estas limitaciones no se aplican en casos de dolo o negligencia grave ni en los demás supuestos en que la ley prohíba limitarlas.",
          ],
        },
        {
          title: "Vigencia y terminación",
          body: [
            "Este EULA permanece en vigor mientras el usuario utilice el software o mantenga una suscripción activa. Terminará con la finalización de la suscripción o por resolución en caso de incumplimiento grave no subsanado en un plazo razonable tras su notificación. A la terminación, cesará el uso del software y se eliminarán o devolverán los datos del cliente, sin perjuicio de las copias que deban conservarse por obligación legal.",
          ],
        },
        {
          title: "Ley aplicable, jurisdicción y disposiciones finales",
          body: [
            "Este EULA se rige por la legislación española. Las controversias se someterán a los juzgados y tribunales de Jerez de la Frontera (Cádiz, España), salvo que una norma imperativa disponga otra cosa.",
            "El acuerdo se publica en varios idiomas; en caso de divergencia, prevalecerá la versión en español. Canal único de contacto: formulario protegido en cinteca.es/#contacto. Versión 1.0 · agosto de 2026.",
          ],
        },
      ],
    },
  },
};

const pt: LegalCopy = {
  htmlLang: "pt",
  languageLabel: "Idioma",
  registryLabel: "Registro legal",
  versionLine: "Versão 1.0 · agosto de 2026",
  prevalenceNote:
    "Estes documentos são publicados em português, inglês, espanhol e norueguês. Em caso de divergência entre as versões linguísticas, prevalecerá a versão em espanhol.",
  contactLabel: "Canal único de contato",
  otherDocuments: "Outros documentos deste Centro Legal",
  hub: {
    label: "Centro Legal",
    title: "Centro Legal",
    intro: [
      "Este Centro Legal reúne os documentos que regulam o uso dos sites, produtos e serviços do grupo AD Caldas Innotec, S.A. — sociedade mercantil espanhola com NIF A66316399, inscrita no Registro Mercantil de Cádiz, Folha CA-56553, com sede em Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Espanha — incluindo sua sociedade participada NEX FAN ESPAÑA, S.L. (CIF B56715154, Registro Mercantil de Cádiz), operadora do produto LegalNeuron.",
      "Os três documentos a seguir — Política de Privacidade, Termos e Condições de Uso e Acordo de Licença de Usuário Final (EULA) — formam um conjunto único de políticas de grupo e aplicam-se às seguintes propriedades:",
    ],
    scopeLabel: "Âmbito — propriedades cobertas",
    scopeItems: [
      "cinteca.es — site corporativo da AD Caldas Innotec, S.A.",
      "adrianocaldas.com — site pessoal e profissional",
      "nordixbios.com — NordixBIOS / Agentic AI Factory",
      "ncsengine.com — NCS Engine",
      "nordixsystems.com — Nordix Systems",
      "legalneuron.es — LegalNeuron, operado pela NEX FAN ESPAÑA, S.L.",
      "cinte.com.br — CINTE (Brasil)",
      "os aplicativos móveis e desktop e as APIs associadas a esses produtos",
    ],
    excludedNote:
      "Ficam excluídos os sites criados em colaboração com terceiros — entre outros, Plorea, Grupo Laeras e Innocards Loyalty —, que dispõem de políticas próprias e não são cobertos por estes documentos.",
  },
  documents: {
    privacidad: {
      docLabel: "Política de Privacidade",
      title: "Política de Privacidade",
      summary:
        "Como o grupo trata dados pessoais em seus sites e produtos: categorias, finalidades, direitos GDPR, LGPD (Brasil) e referências para usuários dos Estados Unidos.",
      sections: [
        {
          title: "Responsável e âmbito de aplicação",
          body: [
            "O responsável pelo tratamento é a AD Caldas Innotec, S.A., sociedade mercantil espanhola com NIF A66316399, inscrita no Registro Mercantil de Cádiz, Folha CA-56553, com sede em Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Espanha. Quando o serviço utilizado for o LegalNeuron, a entidade operadora é a NEX FAN ESPAÑA, S.L. (CIF B56715154, Registro Mercantil de Cádiz), sociedade participada pela AD Caldas Innotec, S.A.; ambas as entidades aplicam esta mesma política.",
            "Esta política única de grupo aplica-se às propriedades listadas no Centro Legal: cinteca.es, adrianocaldas.com, nordixbios.com (NordixBIOS / Agentic AI Factory), ncsengine.com (NCS Engine), nordixsystems.com (Nordix Systems), legalneuron.es (LegalNeuron), cinte.com.br (CINTE, Brasil) e os aplicativos móveis e desktop e as APIs associadas a esses produtos. Os sites criados em colaboração com terceiros dispõem de políticas próprias e ficam fora deste documento.",
          ],
        },
        {
          title: "Dados que tratamos",
          body: [
            "Tratamos apenas os dados necessários para cada finalidade. Conforme o serviço, podem incluir:",
          ],
          list: {
            style: "bullet",
            items: [
              "Dados de identificação e contato: nome, e-mail, empresa e o conteúdo das mensagens enviadas por meio de nossos formulários.",
              "Dados de conta: credenciais, preferências e configurações dos produtos que exigem cadastro.",
              "Dados de faturamento: os dados fiscais e de pagamento necessários para administrar a relação contratual com os clientes.",
              "Dados técnicos mínimos: registros de acesso e segurança, endereços IP e os dados gerados pela verificação antiabuso (Cloudflare Turnstile).",
              "Conteúdos enviados aos serviços: documentos e informações que o usuário fornece para processamento, incluindo os conteúdos tratados por funcionalidades de inteligência artificial.",
            ],
          },
        },
        {
          title: "Finalidades e bases jurídicas",
          body: [
            "Cada tratamento apoia-se em uma base jurídica do artigo 6 do GDPR:",
          ],
          table: {
            headers: ["Finalidade", "Base jurídica"],
            rows: [
              [
                "Responder a consultas e solicitações de contato",
                "Medidas pré-contratuais e interesse legítimo em atender comunicações profissionais",
              ],
              [
                "Prestar os serviços e produtos contratados",
                "Execução do contrato",
              ],
              [
                "Segurança, prevenção de abusos e continuidade do serviço",
                "Interesse legítimo em proteger a infraestrutura e seus usuários",
              ],
              [
                "Cumprir obrigações fiscais, mercantis e de outra natureza",
                "Obrigação legal",
              ],
              [
                "Comunicações comerciais",
                "Consentimento expresso; não são praticadas nos sites corporativos do grupo",
              ],
            ],
          },
        },
        {
          title: "Cookies e rastreamento",
          body: [
            "Os sites corporativos do grupo não utilizam cookies de publicidade nem de análise de audiência. São empregados apenas elementos técnicos estritamente necessários, como a verificação antiabuso do Cloudflare Turnstile nos formulários de contato.",
            "Os produtos que exigem login podem utilizar cookies funcionais de sessão, imprescindíveis para manter a autenticação e as preferências do usuário. Não vendemos dados pessoais nem os compartilhamos com redes de publicidade.",
          ],
        },
        {
          title: "Funcionalidades de inteligência artificial",
          body: [
            "Os produtos do grupo — incluindo NordixBIOS / Agentic AI Factory e LegalNeuron — tratam conteúdos por meio de sistemas de inteligência artificial seguindo as instruções do cliente. Os resultados gerados por IA constituem assistência tecnológica e podem exigir verificação; a supervisão humana é recomendada e, em decisões com efeitos jurídicos ou significativos, exigida.",
            "Os dados e conteúdos dos clientes não são utilizados para treinar modelos de fundação de terceiros sem acordo expresso com o cliente.",
          ],
        },
        {
          title: "Destinatários e suboperadores",
          body: [
            "Para prestar os serviços, recorremos a fornecedores de infraestrutura e entrega — por exemplo, Amazon Web Services, Cloudflare e provedores de e-mail — que atuam como operadores ou suboperadores do tratamento com base em contratos conformes ao artigo 28 do GDPR. Não são realizadas cessões comerciais de dados pessoais. Dados só serão comunicados às autoridades quando existir obrigação legal.",
          ],
        },
        {
          title: "Transferências internacionais",
          body: [
            "Alguns fornecedores podem tratar dados fora do Espaço Econômico Europeu. Quando isso ocorre, a transferência é amparada por garantias adequadas: decisões de adequação da Comissão Europeia ou cláusulas contratuais-padrão, complementadas com medidas adicionais quando necessário.",
          ],
        },
        {
          title: "Prazos de conservação",
          body: [
            "Os dados são conservados pelo tempo necessário à finalidade que motivou sua coleta e, depois, bloqueados pelos prazos exigidos para cumprir obrigações legais ou atender a possíveis responsabilidades. Os conteúdos tratados pelos serviços são conservados conforme a configuração e as instruções do cliente.",
          ],
        },
        {
          title: "Seus direitos conforme o GDPR",
          body: [
            "Você pode exercer a qualquer momento seus direitos de acesso, retificação, apagamento, oposição, limitação do tratamento e portabilidade, bem como retirar o consentimento prestado, por meio do canal único de contato: o formulário protegido disponível em cinteca.es/#contacto.",
            "Se considerar que o tratamento não está em conformidade com a normativa, você pode apresentar reclamação à Agência Espanhola de Proteção de Dados (www.aepd.es) ou à autoridade de controle do seu local de residência.",
          ],
        },
        {
          title: "Titulares no Brasil (LGPD)",
          body: [
            "Para os titulares de dados situados no Brasil, esta política é complementada pela Lei Geral de Proteção de Dados (Lei n.º 13.709/2018 — LGPD). Esses titulares podem exercer os direitos do artigo 18 da LGPD — confirmação do tratamento, acesso, correção, anonimização, portabilidade, eliminação e informação sobre compartilhamentos — pelo mesmo canal de contato, e podem ainda dirigir-se à Autoridade Nacional de Proteção de Dados (ANPD).",
          ],
        },
        {
          title: "Usuários nos Estados Unidos",
          body: [
            "Não vendemos dados pessoais nem os compartilhamos para publicidade comportamental. Os usuários residentes em estados com leis de privacidade próprias — por exemplo, a Califórnia — podem exercer os direitos que essas leis lhes reconheçam (acesso, exclusão, correção e não discriminação pelo exercício) pelo mesmo canal de contato.",
          ],
        },
        {
          title: "Menores, segurança e alterações",
          body: [
            "Nossos sites e serviços não se dirigem a menores de 14 anos — ou da idade superior, até 16, que a normativa local estabeleça — e não coletamos conscientemente dados de menores.",
            "Aplicamos medidas técnicas e organizativas apropriadas ao risco: criptografia em trânsito, controle de acessos, minimização de dados, registros de segurança e procedimentos internos de resposta a incidentes.",
            "As alterações desta política serão publicadas nesta mesma página com indicação da versão e da data. Versão 1.0 · agosto de 2026.",
          ],
        },
      ],
    },
    terminos: {
      docLabel: "Termos e Condições de Uso",
      title: "Termos e Condições de Uso",
      summary:
        "As regras que regem o acesso e o uso dos sites, produtos e serviços do grupo, incluindo a utilização de funcionalidades de inteligência artificial.",
      sections: [
        {
          title: "Identificação e âmbito",
          body: [
            "Estes Termos e Condições de Uso regulam o acesso e a utilização dos sites, produtos e serviços do grupo AD Caldas Innotec, S.A. (NIF A66316399, Registro Mercantil de Cádiz, Folha CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Espanha), incluindo os serviços operados por sua sociedade participada NEX FAN ESPAÑA, S.L. (CIF B56715154). O âmbito de aplicação compreende as propriedades listadas no Centro Legal.",
            "O acesso ou o uso de qualquer das propriedades implica a aceitação destes termos. Determinados produtos podem estar sujeitos, adicionalmente, a condições particulares, que prevalecerão naquilo que forem específicas.",
          ],
        },
        {
          title: "Acesso e conta",
          body: [
            "Alguns serviços exigem cadastro. O usuário compromete-se a fornecer informações verdadeiras e atualizadas, a manter a confidencialidade de suas credenciais e a comunicar sem demora qualquer uso não autorizado de sua conta. O usuário responde pela atividade realizada com suas credenciais, salvo se comprovar uso por terceiro que não lhe seja imputável.",
          ],
        },
        {
          title: "Regras de uso",
          body: ["Ao utilizar os serviços, o usuário obriga-se a não:"],
          list: {
            style: "roman",
            items: [
              "publicar, transmitir ou armazenar conteúdos ilícitos, difamatórios, discriminatórios ou que violem direitos de terceiros;",
              "introduzir malware, código malicioso ou qualquer elemento capaz de danificar ou alterar os sistemas do grupo ou de terceiros;",
              "infringir direitos de propriedade intelectual ou industrial, segredos empresariais ou outros direitos;",
              "enviar comunicações massivas não solicitadas (spam) ou utilizar os serviços para prospecção abusiva;",
              "difundir informações falsas ou enganosas, ou manipular resultados gerados pelos serviços com o intuito de induzir a erro;",
              "assumir a identidade de terceiros ou falsear sua vinculação com uma pessoa ou entidade;",
              "descompilar, desmontar ou realizar engenharia reversa não autorizada fora das hipóteses permitidas por lei;",
              "abusar das APIs, contornar limites técnicos, cotas ou mecanismos de segurança, ou acessar sem autorização sistemas ou dados;",
              "utilizar os serviços, incluindo as funcionalidades de inteligência artificial, para violar direitos de terceiros ou a normativa aplicável.",
            ],
          },
          after: [
            "O grupo poderá suspender ou restringir o acesso quando houver indícios razoáveis de descumprimento, com notificação quando possível.",
          ],
        },
        {
          title: "Conteúdos do usuário",
          body: [
            "O usuário conserva a titularidade dos conteúdos que envia aos serviços. Concede ao grupo uma licença limitada, não exclusiva e revogável, exclusivamente na medida necessária para operar, manter e melhorar o serviço conforme a configuração escolhida. O usuário garante que dispõe dos direitos necessários sobre os conteúdos fornecidos e que estes não violam direitos de terceiros.",
          ],
        },
        {
          title: "Propriedade intelectual",
          body: [
            "As marcas, denominações, logotipos, software, textos e demais conteúdos do grupo — incluindo Cinteca, NordixBIOS, Agentic AI Factory, NCS Engine, Nordix Systems e LegalNeuron — pertencem à AD Caldas Innotec, S.A., às sociedades de seu grupo ou a seus licenciantes. O uso dos serviços não atribui ao usuário nenhum direito de propriedade intelectual ou industrial além do estritamente necessário para utilizá-los conforme estes termos.",
          ],
        },
        {
          title: "Serviços de inteligência artificial",
          body: [
            "Determinados serviços incorporam funcionalidades de inteligência artificial. Os resultados gerados por IA constituem assistência tecnológica: podem conter erros, imprecisões ou omissões e não constituem aconselhamento profissional de nenhum tipo — jurídico, médico, financeiro, fiscal ou de outra natureza.",
            "O usuário deve revisar os resultados antes de utilizá-los e manter supervisão humana sobre qualquer decisão com efeitos jurídicos ou significativos. O grupo não responde pelas decisões tomadas sem essa revisão.",
          ],
        },
        {
          title: "Serviços de terceiros e links",
          body: [
            "Os sites e produtos podem conter links ou integrações com serviços de terceiros, que se regem por seus próprios termos e políticas. O grupo não controla nem assume responsabilidade pelos conteúdos ou práticas de sites externos. Os projetos desenvolvidos em colaboração com terceiros dispõem de termos próprios.",
          ],
        },
        {
          title: "Disponibilidade",
          body: [
            "O grupo dedica esforços razoáveis para manter a disponibilidade e a continuidade dos serviços, sem garantir seu funcionamento ininterrupto. Podem ocorrer interrupções por manutenção, atualizações, incidentes ou causas alheias. Quando possível, as intervenções planejadas serão comunicadas com antecedência razoável.",
          ],
        },
        {
          title: "Garantias e responsabilidade",
          body: [
            "Salvo o disposto em condições particulares, os sites e serviços são fornecidos «no estado em que se encontram» e «conforme a disponibilidade», sem outras garantias além das legalmente exigíveis, na máxima medida permitida pela normativa aplicável.",
            "Nada do previsto nestes termos limita ou exclui direitos que a normativa imperativa — incluída a de consumidores e usuários — reconheça ao usuário. Nos serviços pagos, a responsabilidade total agregada do grupo limita-se aos valores efetivamente pagos pelo cliente nos doze meses anteriores ao fato que originar a reclamação, salvo dolo ou negligência grave.",
          ],
        },
        {
          title: "Indenização",
          body: [
            "O usuário que descumprir estes termos manterá o grupo indene frente a reclamações de terceiros, danos, sanções e despesas razoáveis — incluindo honorários de defesa — decorrentes diretamente desse descumprimento, sem prejuízo dos direitos que a normativa imperativa reconheça ao usuário.",
          ],
        },
        {
          title: "Disposições gerais",
          body: [
            "Se alguma cláusula for declarada nula ou inaplicável, as demais conservarão sua validade, e a cláusula afetada será substituída por outra válida de efeito equivalente. O não exercício de um direito não implica renúncia a ele. O grupo poderá ceder sua posição contratual a sociedades de seu grupo, informando o usuário quando for obrigatório.",
          ],
        },
        {
          title: "Lei aplicável, jurisdição e versão prevalente",
          body: [
            "Estes termos regem-se pela legislação espanhola. Salvo se uma norma imperativa de proteção dos consumidores dispuser de outra forma, as controvérsias serão submetidas aos juízos e tribunais de Jerez de la Frontera (Cádiz, Espanha).",
            "Estes termos são publicados em vários idiomas; em caso de divergência, prevalecerá a versão em espanhol. As alterações serão publicadas no Centro Legal com indicação da versão e da data. Versão 1.0 · agosto de 2026.",
          ],
        },
      ],
    },
    eula: {
      docLabel: "Acordo de Licença de Usuário Final",
      title: "Acordo de Licença de Usuário Final (EULA)",
      summary:
        "A licença sob a qual o software do grupo é utilizado: aplicações web, móveis e desktop, APIs e agentes de IA.",
      sections: [
        {
          title: "Partes e objeto",
          body: [
            "Este Acordo de Licença de Usuário Final («EULA») é celebrado entre o usuário e a AD Caldas Innotec, S.A. (NIF A66316399, Registro Mercantil de Cádiz, Folha CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Espanha) ou, quando o produto for o LegalNeuron, a NEX FAN ESPAÑA, S.L. (CIF B56715154). Aplica-se ao software do grupo: as aplicações web, móveis e desktop, as APIs e os agentes de IA dos produtos listados no Centro Legal. As condições particulares de cada produto podem complementar este acordo e prevalecerão no que for específico.",
          ],
        },
        {
          title: "Licença",
          body: [
            "Sujeito ao cumprimento deste EULA e, quando aplicável, ao pagamento da assinatura, o grupo concede ao usuário uma licença limitada, não exclusiva, intransferível e revogável para utilizar o software conforme sua documentação e o plano contratado. Não é permitido conceder sublicenças sem autorização expressa.",
          ],
        },
        {
          title: "Restrições",
          body: [
            "Salvo autorização expressa ou na medida em que a lei o permita de forma imperativa, o usuário não poderá:",
          ],
          list: {
            style: "bullet",
            items: [
              "descompilar, desmontar ou realizar engenharia reversa do software, salvo nas hipóteses legalmente previstas (por exemplo, interoperabilidade);",
              "redistribuir, revender, alugar, emprestar ou disponibilizar o software a terceiros não autorizados;",
              "contornar ou desativar limites técnicos, cotas, mecanismos de segurança ou controles de licença;",
              "utilizar o software ou seus resultados para desenvolver, mediante engenharia reversa, um produto concorrente.",
            ],
          },
        },
        {
          title: "Assinaturas e pagamento",
          body: [
            "As condições econômicas — planos, preços, períodos de faturamento e renovação — são estabelecidas nas condições comerciais de cada produto. A falta de pagamento poderá acarretar a suspensão do serviço, mediante notificação com antecedência razoável, e a resolução do contrato se a inadimplência persistir.",
          ],
        },
        {
          title: "IA e resultados (outputs)",
          body: [
            "Na medida permitida por lei e desde que a assinatura esteja com os pagamentos em dia, os direitos sobre os resultados gerados pelo software para o cliente («outputs») pertencem ao cliente. O cliente é responsável pelo uso que fizer desses resultados e por verificar sua exatidão e adequação.",
            "A supervisão humana é obrigatória em qualquer decisão com efeitos jurídicos ou significativos baseada em outputs de IA. É proibido apresentar outputs de IA como aconselhamento profissional emitido por pessoa habilitada.",
          ],
        },
        {
          title: "Dados",
          body: [
            "O tratamento de dados pessoais rege-se pela Política de Privacidade do grupo. Para clientes empresariais existe um acordo de tratamento de dados (DPA), disponível mediante solicitação pelo canal de contato. Os dados e conteúdos do cliente não são utilizados para treinar modelos de terceiros sem acordo expresso.",
          ],
        },
        {
          title: "Propriedade intelectual",
          body: [
            "O software, seu código, arquitetura, interfaces e documentação permanecem, em todos os momentos, sob a titularidade do grupo ou de seus licenciantes. Este EULA não transmite nenhum direito de propriedade. As sugestões e comentários (feedback) fornecidos pelo usuário poderão ser utilizados para melhorar os serviços sem obrigação de compensação, sem que isso afete os conteúdos ou os dados do cliente.",
          ],
        },
        {
          title: "Atualizações",
          body: [
            "O software pode instalar atualizações de forma automática por motivos de segurança, correção ou melhoria. As funcionalidades podem evoluir, ser substituídas ou retiradas; quando uma alteração reduzir de forma substancial funcionalidades essenciais de um plano pago, o cliente será informado com antecedência razoável.",
          ],
        },
        {
          title: "Garantia limitada",
          body: [
            "O grupo garante que o software se ajustará substancialmente à sua documentação. Não garante que seu funcionamento seja ininterrupto ou livre de erros. Ficam excluídas todas as demais garantias na máxima medida permitida por lei, sem prejuízo dos direitos que a normativa imperativa — incluída a de consumidores — reconheça ao usuário.",
          ],
        },
        {
          title: "Limitação de responsabilidade",
          body: [
            "Na máxima medida permitida por lei, o grupo não responderá por danos indiretos, lucros cessantes, perda de dados não imputável ao grupo nem danos reputacionais. A responsabilidade total agregada limita-se aos valores pagos pelo cliente nos doze meses anteriores ao fato que originar a reclamação ou, se o software for utilizado gratuitamente, a cem euros (100 €). Essas limitações não se aplicam em casos de dolo ou negligência grave nem nas demais hipóteses em que a lei proíba limitá-las.",
          ],
        },
        {
          title: "Vigência e rescisão",
          body: [
            "Este EULA permanece em vigor enquanto o usuário utilizar o software ou mantiver uma assinatura ativa. Terminará com o fim da assinatura ou por resolução em caso de descumprimento grave não sanado em prazo razoável após a notificação. Com a rescisão, cessará o uso do software e os dados do cliente serão excluídos ou devolvidos, sem prejuízo das cópias que devam ser conservadas por obrigação legal.",
          ],
        },
        {
          title: "Lei aplicável, jurisdição e disposições finais",
          body: [
            "Este EULA rege-se pela legislação espanhola. As controvérsias serão submetidas aos juízos e tribunais de Jerez de la Frontera (Cádiz, Espanha), salvo se uma norma imperativa dispuser de outra forma.",
            "O acordo é publicado em vários idiomas; em caso de divergência, prevalecerá a versão em espanhol. Canal único de contato: formulário protegido em cinteca.es/#contacto. Versão 1.0 · agosto de 2026.",
          ],
        },
      ],
    },
  },
};

const nb: LegalCopy = {
  htmlLang: "nb",
  languageLabel: "Språk",
  registryLabel: "Juridisk register",
  versionLine: "Versjon 1.0 · august 2026",
  prevalenceNote:
    "Disse dokumentene publiseres på portugisisk, engelsk, spansk og norsk. Ved avvik mellom språkversjonene har den spanske versjonen forrang.",
  contactLabel: "Felles kontaktkanal",
  otherDocuments: "Andre dokumenter i dette juridiske senteret",
  hub: {
    label: "Juridisk senter",
    title: "Juridisk senter",
    intro: [
      "Dette juridiske senteret samler dokumentene som regulerer bruken av nettstedene, produktene og tjenestene til konsernet AD Caldas Innotec, S.A. — et spansk selskap med skatte-ID A66316399, registrert i handelsregisteret i Cádiz, ark CA-56553, med forretningsadresse Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spania — inkludert dets tilknyttede selskap NEX FAN ESPAÑA, S.L. (skatte-ID B56715154, handelsregisteret i Cádiz), som driver produktet LegalNeuron.",
      "De tre dokumentene nedenfor — personvernerklæringen, vilkårene for bruk og sluttbrukerlisensavtalen (EULA) — utgjør ett felles sett med konsernpolicyer og gjelder for følgende eiendommer:",
    ],
    scopeLabel: "Virkeområde — omfattede eiendommer",
    scopeItems: [
      "cinteca.es — firmanettstedet til AD Caldas Innotec, S.A.",
      "adrianocaldas.com — personlig og profesjonelt nettsted",
      "nordixbios.com — NordixBIOS / Agentic AI Factory",
      "ncsengine.com — NCS Engine",
      "nordixsystems.com — Nordix Systems",
      "legalneuron.es — LegalNeuron, drevet av NEX FAN ESPAÑA, S.L.",
      "cinte.com.br — CINTE (Brasil)",
      "mobil- og skrivebordsapplikasjonene og API-ene knyttet til disse produktene",
    ],
    excludedNote:
      "Nettsteder utviklet i samarbeid med tredjeparter — blant andre Plorea, Grupo Laeras og Innocards Loyalty — har egne retningslinjer og omfattes ikke av disse dokumentene.",
  },
  documents: {
    privacidad: {
      docLabel: "Personvernerklæring",
      title: "Personvernerklæring",
      summary:
        "Hvordan konsernet behandler personopplysninger på sine nettsteder og i sine produkter: kategorier, formål, GDPR-rettigheter, LGPD (Brasil) og referanser for brukere i USA.",
      sections: [
        {
          title: "Behandlingsansvarlig og virkeområde",
          body: [
            "Behandlingsansvarlig er AD Caldas Innotec, S.A., et spansk selskap med skatte-ID A66316399, registrert i handelsregisteret i Cádiz, ark CA-56553, med forretningsadresse Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spania. Når tjenesten som brukes er LegalNeuron, er driftsenheten NEX FAN ESPAÑA, S.L. (skatte-ID B56715154, handelsregisteret i Cádiz), et selskap som AD Caldas Innotec, S.A. har eierandel i; begge enhetene følger denne samme erklæringen.",
            "Denne felles konsernerklæringen gjelder for eiendommene oppført i det juridiske senteret: cinteca.es, adrianocaldas.com, nordixbios.com (NordixBIOS / Agentic AI Factory), ncsengine.com (NCS Engine), nordixsystems.com (Nordix Systems), legalneuron.es (LegalNeuron), cinte.com.br (CINTE, Brasil) samt mobil- og skrivebordsapplikasjonene og API-ene knyttet til disse produktene. Nettsteder utviklet i samarbeid med tredjeparter har egne retningslinjer og faller utenfor dette dokumentet.",
          ],
        },
        {
          title: "Hvilke opplysninger vi behandler",
          body: [
            "Vi behandler bare de opplysningene som er nødvendige for hvert formål. Avhengig av tjenesten kan dette omfatte:",
          ],
          list: {
            style: "bullet",
            items: [
              "Identifikasjons- og kontaktopplysninger: navn, e-postadresse, selskap og innholdet i meldinger sendt via skjemaene våre.",
              "Kontoopplysninger: påloggingsinformasjon, preferanser og innstillinger for produkter som krever registrering.",
              "Faktureringsopplysninger: skatte- og betalingsopplysningene som trengs for å håndtere kundeforholdet.",
              "Minimale tekniske data: tilgangs- og sikkerhetslogger, IP-adresser og data generert av misbruksverifiseringen (Cloudflare Turnstile).",
              "Innhold sendt til tjenestene: dokumenter og informasjon som brukeren leverer for behandling, inkludert innhold som behandles av funksjoner for kunstig intelligens.",
            ],
          },
        },
        {
          title: "Formål og rettslig grunnlag",
          body: [
            "Hver behandling bygger på et rettslig grunnlag etter artikkel 6 i GDPR:",
          ],
          table: {
            headers: ["Formål", "Rettslig grunnlag"],
            rows: [
              [
                "Besvare henvendelser og kontaktforespørsler",
                "Tiltak før avtaleinngåelse og berettiget interesse i å håndtere profesjonell kommunikasjon",
              ],
              [
                "Levere avtalte tjenester og produkter",
                "Oppfyllelse av avtale",
              ],
              [
                "Sikkerhet, misbruksforebygging og tjenestekontinuitet",
                "Berettiget interesse i å beskytte infrastrukturen og brukerne",
              ],
              [
                "Oppfylle skattemessige, selskapsrettslige og andre rettslige forpliktelser",
                "Rettslig forpliktelse",
              ],
              [
                "Kommersiell kommunikasjon",
                "Uttrykkelig samtykke; praktiseres ikke på konsernets firmanettsteder",
              ],
            ],
          },
        },
        {
          title: "Informasjonskapsler og sporing",
          body: [
            "Konsernets firmanettsteder bruker ingen informasjonskapsler for annonsering eller publikumsanalyse. Det brukes bare strengt nødvendige tekniske elementer, som misbruksverifiseringen fra Cloudflare Turnstile i kontaktskjemaene.",
            "Produkter som krever pålogging, kan bruke funksjonelle øktinformasjonskapsler som er nødvendige for å opprettholde autentisering og brukerpreferanser. Vi selger ikke personopplysninger og deler dem ikke med annonsenettverk.",
          ],
        },
        {
          title: "Funksjoner for kunstig intelligens",
          body: [
            "Konsernets produkter — inkludert NordixBIOS / Agentic AI Factory og LegalNeuron — behandler innhold gjennom systemer for kunstig intelligens etter kundens instruksjoner. KI-genererte resultater er teknologisk assistanse og kan kreve verifisering; menneskelig tilsyn anbefales og kreves ved beslutninger med rettslige eller andre vesentlige virkninger.",
            "Kundenes data og innhold brukes ikke til å trene tredjeparters grunnmodeller uten en uttrykkelig avtale med kunden.",
          ],
        },
        {
          title: "Mottakere og underdatabehandlere",
          body: [
            "For å levere tjenestene benytter vi leverandører av infrastruktur og leveranse — for eksempel Amazon Web Services, Cloudflare og e-postleverandører — som opptrer som databehandlere eller underdatabehandlere i henhold til avtaler i samsvar med artikkel 28 i GDPR. Det skjer ingen kommersiell overføring av personopplysninger. Opplysninger utleveres til myndigheter bare når det foreligger en rettslig forpliktelse.",
          ],
        },
        {
          title: "Internasjonale overføringer",
          body: [
            "Enkelte leverandører kan behandle opplysninger utenfor Det europeiske økonomiske samarbeidsområdet. Når dette skjer, er overføringen dekket av egnede garantier: EU-kommisjonens beslutninger om tilstrekkelig beskyttelsesnivå eller standard kontraktsklausuler, supplert med ytterligere tiltak der det er nødvendig.",
          ],
        },
        {
          title: "Lagringstid",
          body: [
            "Opplysningene lagres så lenge det er nødvendig for formålet de ble samlet inn for, og deretter sperret i de periodene som kreves for å oppfylle rettslige forpliktelser eller håndtere mulig ansvar. Innhold som behandles av tjenestene, lagres i henhold til kundens innstillinger og instruksjoner.",
          ],
        },
        {
          title: "Dine rettigheter etter GDPR",
          body: [
            "Du kan når som helst utøve dine rettigheter til innsyn, retting, sletting, protest, begrensning av behandlingen og dataportabilitet, samt trekke tilbake gitt samtykke, gjennom den felles kontaktkanalen: det beskyttede skjemaet på cinteca.es/#contacto.",
            "Hvis du mener at behandlingen ikke er i samsvar med regelverket, kan du klage til det spanske datatilsynet (www.aepd.es) eller til tilsynsmyndigheten der du bor.",
          ],
        },
        {
          title: "Registrerte i Brasil (LGPD)",
          body: [
            "For registrerte personer i Brasil suppleres denne erklæringen av den brasilianske personvernloven (lov nr. 13.709/2018 — LGPD). Disse personene kan utøve rettighetene i LGPD artikkel 18 — bekreftelse på behandling, innsyn, retting, anonymisering, portabilitet, sletting og informasjon om utleveringer — gjennom samme kontaktkanal, og kan også henvende seg til den brasilianske datatilsynsmyndigheten (ANPD).",
          ],
        },
        {
          title: "Brukere i USA",
          body: [
            "Vi selger ikke personopplysninger og deler dem ikke for atferdsbasert annonsering. Brukere bosatt i delstater med egne personvernlover — for eksempel California — kan utøve rettighetene disse lovene gir dem (innsyn, sletting, retting og ikke-diskriminering ved utøvelse) gjennom samme kontaktkanal.",
          ],
        },
        {
          title: "Mindreårige, sikkerhet og endringer",
          body: [
            "Våre nettsteder og tjenester retter seg ikke mot barn under 14 år — eller under den høyere alderen, inntil 16 år, som lokal lovgivning fastsetter — og vi samler ikke bevisst inn opplysninger om mindreårige.",
            "Vi anvender tekniske og organisatoriske tiltak tilpasset risikoen: kryptering under overføring, tilgangskontroll, dataminimering, sikkerhetslogging og interne prosedyrer for hendelseshåndtering.",
            "Endringer i denne erklæringen publiseres på denne siden med angivelse av versjon og dato. Versjon 1.0 · august 2026.",
          ],
        },
      ],
    },
    terminos: {
      docLabel: "Vilkår for bruk",
      title: "Vilkår for bruk",
      summary:
        "Reglene som styrer tilgang til og bruk av konsernets nettsteder, produkter og tjenester, inkludert bruken av funksjoner for kunstig intelligens.",
      sections: [
        {
          title: "Identifikasjon og virkeområde",
          body: [
            "Disse vilkårene for bruk regulerer tilgang til og bruk av nettstedene, produktene og tjenestene til konsernet AD Caldas Innotec, S.A. (skatte-ID A66316399, handelsregisteret i Cádiz, ark CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spania), inkludert tjenestene som drives av det tilknyttede selskapet NEX FAN ESPAÑA, S.L. (skatte-ID B56715154). Virkeområdet omfatter eiendommene oppført i det juridiske senteret.",
            "Tilgang til eller bruk av noen av eiendommene innebærer aksept av disse vilkårene. Enkelte produkter kan i tillegg være underlagt særvilkår, som har forrang der de er spesifikke.",
          ],
        },
        {
          title: "Tilgang og konto",
          body: [
            "Enkelte tjenester krever registrering. Brukeren forplikter seg til å oppgi korrekt og oppdatert informasjon, holde påloggingsinformasjonen konfidensiell og uten opphold melde fra om uautorisert bruk av kontoen. Brukeren er ansvarlig for aktivitet utført med sin påloggingsinformasjon, med mindre det kan dokumenteres tredjeparts bruk som ikke kan tilskrives brukeren.",
          ],
        },
        {
          title: "Bruksregler",
          body: ["Ved bruk av tjenestene forplikter brukeren seg til ikke å:"],
          list: {
            style: "roman",
            items: [
              "publisere, overføre eller lagre ulovlig, ærekrenkende eller diskriminerende innhold, eller innhold som krenker tredjeparts rettigheter;",
              "introdusere skadelig programvare, ondsinnet kode eller andre elementer som kan skade eller endre konsernets eller tredjeparters systemer;",
              "krenke immaterielle eller industrielle rettigheter, forretningshemmeligheter eller andre rettigheter;",
              "sende uønskede massehenvendelser (spam) eller bruke tjenestene til aggressiv prospektering;",
              "spre falsk eller villedende informasjon, eller manipulere resultater generert av tjenestene i den hensikt å villede;",
              "utgi seg for å være en annen eller gi et uriktig bilde av sin tilknytning til en person eller enhet;",
              "dekompilere, demontere eller utføre uautorisert omvendt utvikling utover det loven tillater;",
              "misbruke API-ene, omgå tekniske begrensninger, kvoter eller sikkerhetsmekanismer, eller skaffe seg uautorisert tilgang til systemer eller data;",
              "bruke tjenestene, inkludert funksjonene for kunstig intelligens, til å krenke tredjeparts rettigheter eller gjeldende regelverk.",
            ],
          },
          after: [
            "Konsernet kan suspendere eller begrense tilgangen ved rimelig grunn til å anta brudd, med varsel der det er mulig.",
          ],
        },
        {
          title: "Brukerinnhold",
          body: [
            "Brukeren beholder eierskapet til innholdet som sendes til tjenestene. Brukeren gir konsernet en begrenset, ikke-eksklusiv og gjenkallelig lisens, utelukkende i den grad det er nødvendig for å drifte, vedlikeholde og forbedre tjenesten i henhold til valgte innstillinger. Brukeren garanterer å ha de nødvendige rettighetene til innholdet som leveres, og at det ikke krenker tredjeparts rettigheter.",
          ],
        },
        {
          title: "Immaterielle rettigheter",
          body: [
            "Konsernets varemerker, navn, logoer, programvare, tekster og annet innhold — inkludert Cinteca, NordixBIOS, Agentic AI Factory, NCS Engine, Nordix Systems og LegalNeuron — tilhører AD Caldas Innotec, S.A., selskapene i konsernet eller deres lisensgivere. Bruk av tjenestene gir ikke brukeren noen immateriell eller industriell rettighet utover det som er strengt nødvendig for å bruke dem i samsvar med disse vilkårene.",
          ],
        },
        {
          title: "KI-tjenester",
          body: [
            "Enkelte tjenester inneholder funksjoner for kunstig intelligens. KI-genererte resultater utgjør teknologisk assistanse: de kan inneholde feil, unøyaktigheter eller utelatelser og utgjør ikke profesjonell rådgivning av noe slag — verken juridisk, medisinsk, finansiell, skattemessig eller annen.",
            "Brukeren må gjennomgå resultatene før de tas i bruk og opprettholde menneskelig tilsyn med enhver beslutning med rettslige eller andre vesentlige virkninger. Konsernet er ikke ansvarlig for beslutninger tatt uten slik gjennomgang.",
          ],
        },
        {
          title: "Tredjepartstjenester og lenker",
          body: [
            "Nettstedene og produktene kan inneholde lenker til eller integrasjoner med tredjepartstjenester, som styres av egne vilkår og retningslinjer. Konsernet kontrollerer ikke og påtar seg ikke ansvar for innholdet eller praksisen på eksterne nettsteder. Prosjekter utviklet i samarbeid med tredjeparter har egne vilkår.",
          ],
        },
        {
          title: "Tilgjengelighet",
          body: [
            "Konsernet gjør rimelige anstrengelser for å opprettholde tjenestenes tilgjengelighet og kontinuitet, uten å garantere uavbrutt drift. Avbrudd kan forekomme på grunn av vedlikehold, oppdateringer, hendelser eller eksterne årsaker. Der det er mulig, varsles planlagt vedlikehold i rimelig tid.",
          ],
        },
        {
          title: "Garantier og ansvar",
          body: [
            "Med mindre annet følger av særvilkår, leveres nettstedene og tjenestene «som de er» og «som tilgjengelig», uten andre garantier enn dem loven krever, i den utstrekning gjeldende regelverk tillater.",
            "Ingenting i disse vilkårene begrenser eller utelukker rettigheter som ufravikelig lovgivning — inkludert forbrukerlovgivning — gir brukeren. For betalte tjenester er konsernets samlede totalansvar begrenset til beløpene kunden faktisk har betalt i de tolv månedene forut for hendelsen som gir grunnlag for kravet, unntatt ved forsett eller grov uaktsomhet.",
          ],
        },
        {
          title: "Skadesløsholdelse",
          body: [
            "En bruker som bryter disse vilkårene, skal holde konsernet skadesløst for tredjeparts krav, skader, sanksjoner og rimelige utgifter — inkludert forsvarskostnader — som følger direkte av bruddet, uten at det berører rettigheter som ufravikelig lovgivning gir brukeren.",
          ],
        },
        {
          title: "Alminnelige bestemmelser",
          body: [
            "Hvis en bestemmelse erklæres ugyldig eller ikke kan håndheves, forblir de øvrige bestemmelsene gyldige, og den berørte bestemmelsen erstattes av en gyldig bestemmelse med tilsvarende virkning. Manglende utøvelse av en rettighet innebærer ikke at den frafalles. Konsernet kan overdra sin avtaleposisjon til selskaper i konsernet, med informasjon til brukeren der det er påkrevd.",
          ],
        },
        {
          title: "Lovvalg, verneting og gjeldende språkversjon",
          body: [
            "Disse vilkårene er underlagt spansk lov. Med mindre en ufravikelig forbrukervernregel bestemmer noe annet, skal tvister behandles av domstolene i Jerez de la Frontera (Cádiz, Spania).",
            "Vilkårene publiseres på flere språk; ved avvik har den spanske versjonen forrang. Endringer publiseres i det juridiske senteret med angivelse av versjon og dato. Versjon 1.0 · august 2026.",
          ],
        },
      ],
    },
    eula: {
      docLabel: "Sluttbrukerlisensavtale",
      title: "Sluttbrukerlisensavtale (EULA)",
      summary:
        "Lisensen som konsernets programvare brukes under: web-, mobil- og skrivebordsapplikasjoner, API-er og KI-agenter.",
      sections: [
        {
          title: "Parter og formål",
          body: [
            "Denne sluttbrukerlisensavtalen («EULA») inngås mellom brukeren og AD Caldas Innotec, S.A. (skatte-ID A66316399, handelsregisteret i Cádiz, ark CA-56553, Calle Blanco, 10, Torrecera, 11595 Jerez de la Frontera, Cádiz, Spania) eller, når produktet er LegalNeuron, NEX FAN ESPAÑA, S.L. (skatte-ID B56715154). Den gjelder for konsernets programvare: web-, mobil- og skrivebordsapplikasjonene, API-ene og KI-agentene i produktene oppført i det juridiske senteret. Særvilkår for hvert produkt kan supplere denne avtalen og har forrang der de er spesifikke.",
          ],
        },
        {
          title: "Lisens",
          body: [
            "Under forutsetning av at denne EULA-en overholdes og, der det er aktuelt, at abonnementet betales, gir konsernet brukeren en begrenset, ikke-eksklusiv, ikke-overførbar og gjenkallelig lisens til å bruke programvaren i samsvar med dokumentasjonen og den avtalte planen. Underlisensiering er ikke tillatt uten uttrykkelig tillatelse.",
          ],
        },
        {
          title: "Begrensninger",
          body: [
            "Uten uttrykkelig tillatelse, eller utover det loven ufravikelig tillater, kan brukeren ikke:",
          ],
          list: {
            style: "bullet",
            items: [
              "dekompilere, demontere eller utføre omvendt utvikling av programvaren, unntatt i lovbestemte tilfeller (for eksempel interoperabilitet);",
              "videredistribuere, videreselge, leie ut, låne bort eller gjøre programvaren tilgjengelig for uautoriserte tredjeparter;",
              "omgå eller deaktivere tekniske begrensninger, kvoter, sikkerhetsmekanismer eller lisenskontroller;",
              "bruke programvaren eller resultatene av den til å utvikle et konkurrerende produkt gjennom omvendt utvikling.",
            ],
          },
        },
        {
          title: "Abonnement og betaling",
          body: [
            "De økonomiske betingelsene — planer, priser, faktureringsperioder og fornyelse — fastsettes i de kommersielle vilkårene for hvert produkt. Manglende betaling kan føre til suspensjon av tjenesten, etter varsel i rimelig tid, og til heving av avtalen hvis betalingsmisligholdet vedvarer.",
          ],
        },
        {
          title: "KI og resultater (outputs)",
          body: [
            "I den utstrekning loven tillater det, og forutsatt at abonnementet er betalt, tilhører rettighetene til resultatene programvaren genererer for kunden («outputs») kunden. Kunden er ansvarlig for bruken av disse resultatene og for å kontrollere at de er korrekte og egnede.",
            "Menneskelig tilsyn er obligatorisk ved enhver beslutning med rettslige eller andre vesentlige virkninger basert på KI-outputs. Det er forbudt å presentere KI-outputs som profesjonell rådgivning gitt av en autorisert person.",
          ],
        },
        {
          title: "Data",
          body: [
            "Behandlingen av personopplysninger styres av konsernets personvernerklæring. For bedriftskunder finnes en databehandleravtale (DPA), tilgjengelig på forespørsel via kontaktkanalen. Kundens data og innhold brukes ikke til å trene tredjeparters modeller uten uttrykkelig avtale.",
          ],
        },
        {
          title: "Immaterielle rettigheter",
          body: [
            "Programvaren, dens kode, arkitektur, grensesnitt og dokumentasjon forblir til enhver tid konsernets eller lisensgivernes eiendom. Denne EULA-en overfører ingen eiendomsrett. Forslag og tilbakemeldinger (feedback) fra brukeren kan brukes til å forbedre tjenestene uten kompensasjonsplikt, uten at dette berører kundens innhold eller data.",
          ],
        },
        {
          title: "Oppdateringer",
          body: [
            "Programvaren kan installere oppdateringer automatisk av hensyn til sikkerhet, feilretting eller forbedring. Funksjoner kan videreutvikles, erstattes eller fjernes; når en endring vesentlig reduserer sentrale funksjoner i en betalt plan, informeres kunden i rimelig tid.",
          ],
        },
        {
          title: "Begrenset garanti",
          body: [
            "Konsernet garanterer at programvaren i det vesentlige vil samsvare med dokumentasjonen. Det garanteres ikke at driften vil være uavbrutt eller feilfri. Alle andre garantier er utelukket i den utstrekning loven tillater, uten at det berører rettigheter som ufravikelig lovgivning — inkludert forbrukerlovgivning — gir brukeren.",
          ],
        },
        {
          title: "Ansvarsbegrensning",
          body: [
            "I den utstrekning loven tillater, er konsernet ikke ansvarlig for indirekte tap, tapt fortjeneste, tap av data som ikke kan tilskrives konsernet, eller omdømmetap. Det samlede totalansvaret er begrenset til beløpene kunden har betalt i de tolv månedene forut for hendelsen som gir grunnlag for kravet, eller, hvis programvaren brukes gratis, til hundre euro (100 €). Disse begrensningene gjelder ikke ved forsett eller grov uaktsomhet, eller i andre tilfeller der loven forbyr slike begrensninger.",
          ],
        },
        {
          title: "Varighet og opphør",
          body: [
            "Denne EULA-en gjelder så lenge brukeren bruker programvaren eller har et aktivt abonnement. Den opphører når abonnementet avsluttes, eller ved heving på grunn av vesentlig mislighold som ikke rettes innen rimelig tid etter varsel. Ved opphør skal bruken av programvaren avsluttes, og kundens data slettes eller tilbakeleveres, med forbehold om kopier som må oppbevares i henhold til rettslige forpliktelser.",
          ],
        },
        {
          title: "Lovvalg, verneting og sluttbestemmelser",
          body: [
            "Denne EULA-en er underlagt spansk lov. Tvister skal behandles av domstolene i Jerez de la Frontera (Cádiz, Spania), med mindre en ufravikelig regel bestemmer noe annet.",
            "Avtalen publiseres på flere språk; ved avvik har den spanske versjonen forrang. Felles kontaktkanal: beskyttet skjema på cinteca.es/#contacto. Versjon 1.0 · august 2026.",
          ],
        },
      ],
    },
  },
};

export const legalTranslations: Record<Locale, LegalCopy> = {
  en,
  es,
  pt,
  nb,
};
