import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Sitio corporativo oficial de AD Caldas Innotec, S.A., titular de la marca Cinteca y promotora de software, IA, telecomunicaciones, automatización e infraestructura tecnológica.",
  alternates: {
    canonical: "https://cinteca.es",
  },
};

const products = [
  {
    name: "LegalNeuron",
    code: "LEGAL AI",
    url: "https://legalneuron.es",
    description:
      "Software de inteligencia artificial y gestión para profesionales del derecho y despachos. Facilita el análisis, la revisión y la automatización de documentos y procesos jurídicos.",
  },
  {
    name: "NordixBIOS",
    code: "EMBEDDED AI",
    url: "https://nordixbios.com/es/",
    description:
      "Asistente de inteligencia artificial de marca blanca que se integra en software existente, ejecuta operaciones y acompaña la evolución del producto.",
  },
  {
    name: "NCS Engine",
    code: "AI INFRASTRUCTURE",
    url: "https://ncsengine.com",
    description:
      "Infraestructura segura para desplegar y operar inteligencia artificial en entornos cloud, locales e híbridos.",
  },
];

const capabilities = [
  {
    code: "DIR",
    title: "Dirección tecnológica y gestión de TI",
    direct: [
      "Dirección de TI y experiencia como CTO",
      "Estrategia tecnológica y roadmaps",
      "Gestión de equipos técnicos",
      "Presupuestos, proveedores y contratos",
      "Arquitectura y decisiones de plataforma",
      "Gestión de proyectos y portafolios",
      "Operación tecnológica multinacional",
    ],
    adjacent: [
      "Gobierno de TI y arquitectura empresarial",
      "ITSM, catálogo de servicios y CMDB",
      "Due diligence y auditoría técnica",
      "FinOps y optimización de inversión",
      "Gestión de riesgos y cumplimiento",
      "Compras y licenciamiento tecnológico",
      "Gestión del cambio y transformación digital",
      "Dirección de producto y programas",
    ],
  },
  {
    code: "SWE",
    title: "Ingeniería y arquitectura de software",
    direct: [
      "Desarrollo de software a medida",
      "Backend, frontend y full stack",
      "APIs, servicios e integraciones",
      "Arquitectura de aplicaciones",
      "Bases de datos SQL y NoSQL",
      "Automatización de procesos",
      "Productos simples y sistemas complejos",
    ],
    adjacent: [
      "Microsservicios y sistemas distribuidos",
      "Arquitectura orientada a eventos",
      "SaaS, multi-tenant y plataformas",
      "Mensajería, colas y streaming",
      "Modernización de sistemas heredados",
      "Pruebas, QA y automatización",
      "Rendimiento, escalabilidad y resiliencia",
      "Documentación y gobierno de APIs",
    ],
  },
  {
    code: "APP",
    title: "Aplicaciones web, móviles y de escritorio",
    direct: [
      "Aplicaciones web y portales",
      "Windows, Linux y macOS",
      "Android, iOS y iPadOS",
      "Aplicaciones nativas e híbridas",
      "Integración de aplicaciones con hardware",
      "Distribución y actualización de software",
      "Experiencias multiplataforma",
    ],
    adjacent: [
      "PWA y estrategias offline-first",
      "Sincronización y resolución de conflictos",
      "Accesibilidad e internacionalización",
      "Diseño de producto y experiencia de usuario",
      "Telemetría y analítica de producto",
      "App stores, firma y aprovisionamiento",
      "Seguridad de aplicaciones cliente",
      "Optimización de rendimiento y consumo",
    ],
  },
  {
    code: "AIM",
    title: "Inteligencia artificial y procesamiento de señales",
    direct: [
      "Procesamiento digital de señales desde 2003",
      "Creación y aplicación de algoritmos de IA",
      "Entrenamiento y desarrollo de modelos",
      "Tratamiento de señales y series temporales",
      "Automatización inteligente",
      "Aplicaciones de IA en productos reales",
      "Evaluación y ajuste de modelos",
    ],
    adjacent: [
      "Machine learning y deep learning",
      "LLMs, agentes y herramientas",
      "RAG, búsqueda semántica y bases vectoriales",
      "Visión computacional, audio y voz",
      "NLP, clasificación y extracción",
      "MLOps, LLMOps y observabilidad de modelos",
      "IA responsable, seguridad y evaluación",
      "Inferencia local, cloud y edge",
    ],
  },
  {
    code: "DAT",
    title: "Datos, integración y conocimiento",
    direct: [
      "Modelado y persistencia de datos",
      "Pipelines de procesamiento",
      "Integración entre sistemas",
      "ETL y automatización de flujos",
      "Tratamiento de datos estructurados y no estructurados",
      "Búsqueda y recuperación de información",
      "Exposición de datos mediante APIs",
    ],
    adjacent: [
      "Data warehouse, data lake y lakehouse",
      "Analítica, BI y reporting",
      "Procesamiento batch y streaming",
      "Gobierno, catálogo y linaje de datos",
      "Calidad, MDM y normalización",
      "CDC e integración en tiempo real",
      "Bases vectoriales y knowledge graphs",
      "Privacidad y ciclo de vida del dato",
    ],
  },
  {
    code: "GPU",
    title: "GPU, PODs y computación de alto rendimiento",
    direct: [
      "Creación y utilización de entornos GPU",
      "Diseño y operación de PODs de computación",
      "Entrenamiento e inferencia acelerados",
      "Dimensionamiento de capacidad",
      "Contenedores para cargas de IA",
      "Optimización de recursos de cómputo",
      "Operación de cargas intensivas",
    ],
    adjacent: [
      "CUDA y bibliotecas de aceleración",
      "Clusters GPU y entrenamiento distribuido",
      "HPC, paralelismo y simulación",
      "Serving, batching y autoscaling de modelos",
      "Cuantización y optimización de inferencia",
      "Orquestación y scheduling de aceleradores",
      "Observabilidad y contabilidad de GPU",
      "Edge AI y aceleradores especializados",
    ],
  },
  {
    code: "TEL",
    title: "Telecomunicaciones y redes",
    direct: [
      "Diseño y administración de redes",
      "Infraestructura local y distribuida",
      "Conectividad empresarial",
      "Routing, switching, VLAN y VPN",
      "Wi-Fi y redes cableadas",
      "Diagnóstico y monitorización",
      "Gestión de operadores y enlaces",
    ],
    adjacent: [
      "LAN, WAN, SD-WAN y MPLS",
      "TCP/IP, BGP, OSPF y QoS",
      "DNS, DHCP e IPAM",
      "VoIP, SIP y comunicaciones unificadas",
      "Fibra óptica, radio y microondas",
      "4G, 5G, LPWAN e IoT",
      "NOC, redundancia y alta disponibilidad",
      "Balanceo, CDN y seguridad perimetral",
    ],
  },
  {
    code: "CLD",
    title: "Cloud, infraestructura y DevOps",
    direct: [
      "AWS, Microsoft Azure y Google Cloud",
      "Infraestructura local, cloud e híbrida",
      "Administración de sistemas y servidores",
      "DevOps y automatización operativa",
      "CI/CD y gestión de despliegues",
      "Contenedores y servicios gestionados",
      "Infraestructuras propias y de terceros",
    ],
    adjacent: [
      "Kubernetes y orquestación",
      "Infraestructura como código",
      "Platform engineering y portales internos",
      "SRE, SLIs, SLOs y observabilidad",
      "Linux, Windows Server y virtualización",
      "Almacenamiento, backup y archivado",
      "Cloud híbrida, multicloud y migraciones",
      "Capacidad, costes y continuidad",
    ],
  },
  {
    code: "EMB",
    title: "Electrónica y sistemas embarcados",
    direct: [
      "Ingeniería eléctrica y de computación",
      "Electrónica analógica y digital",
      "Microcontroladores y firmware",
      "Sensores, actuadores e interfaces",
      "Instrumentación y adquisición de datos",
      "Prototipado e integración hardware-software",
      "Tratamiento de señales en dispositivos",
    ],
    adjacent: [
      "Embedded C/C++ y RTOS",
      "UART, SPI, I²C, CAN y buses de campo",
      "Diseño y prototipado de PCB",
      "FPGA y lógica programable",
      "Fuentes, potencia y control de motores",
      "Acondicionamiento de señal",
      "Pruebas, EMC y validación de hardware",
      "Bootloaders y actualización remota",
    ],
  },
  {
    code: "AUT",
    title: "Automatización industrial, residencial y OT",
    direct: [
      "Automatización residencial e industrial",
      "CLPs y lógica de control",
      "Integración de sensores y actuadores",
      "Control, supervisión y telemetría",
      "Automatización de instalaciones",
      "Sistemas conectados y control remoto",
      "Integración entre TI y operación física",
    ],
    adjacent: [
      "SCADA, HMI, Modbus y OPC UA",
      "MQTT, IIoT y edge computing",
      "BACnet, KNX y edificios inteligentes",
      "Matter, Zigbee, Z-Wave y Home Assistant",
      "Redes industriales y ciberseguridad OT",
      "Eficiencia y gestión energética",
      "Mantenimiento predictivo y gemelos digitales",
      "Robótica e integración de maquinaria",
    ],
  },
  {
    code: "SEC",
    title: "Seguridad, privacidad y continuidad",
    direct: [
      "Seguridad operativa de sistemas y redes",
      "Gestión de identidades y accesos",
      "Hardening y actualización de entornos",
      "Segmentación y protección perimetral",
      "Backup y restauración",
      "Supervisión de eventos e incidentes",
      "Seguridad incorporada a la operación",
    ],
    adjacent: [
      "Zero Trust y acceso privilegiado",
      "SIEM, SOC y respuesta a incidentes",
      "Vulnerabilidades y coordinación de pentesting",
      "Seguridad cloud, aplicaciones y supply chain",
      "RGPD, privacidad y gobierno de datos",
      "Disaster recovery y continuidad de negocio",
      "Políticas, auditoría y cumplimiento",
      "Gestión de riesgos de terceros",
    ],
  },
  {
    code: "OPS",
    title: "Operación, soporte y servicios gestionados",
    direct: [
      "Administración de infraestructura",
      "Operación de entornos propios y de terceros",
      "Monitorización y resolución de incidentes",
      "Mantenimiento y ciclo de vida",
      "Automatización mediante scripts y runbooks",
      "Migraciones y puesta en producción",
      "Soporte técnico multidisciplinar",
    ],
    adjacent: [
      "Service desk, NOC y modelos 24×7",
      "Gestión de incidentes, problemas y cambios",
      "Inventario, activos y configuración",
      "Capacidad, disponibilidad y rendimiento",
      "Patching y gestión de vulnerabilidades",
      "SLAs, OLAs, SLIs y SLOs",
      "Documentación y transferencia de conocimiento",
      "Outsourcing y coordinación de proveedores",
    ],
  },
  {
    code: "DIG",
    title: "Web, comunicación y crecimiento digital",
    direct: [
      "Creación y gestión de sitios web",
      "Gestión de medios y redes sociales",
      "Publicidad digital de pago",
      "SEO técnico y editorial",
      "GEO y LLMO",
      "Contenido y presencia de marca",
      "Medición y optimización digital",
    ],
    adjacent: [
      "E-commerce, CMS y portales",
      "Analytics, atribución y tag management",
      "CRO y experimentación",
      "CRM, fidelización y marketing automation",
      "Datos estructurados y knowledge panels",
      "Reputación y gestión de comunidades",
      "Accesibilidad y rendimiento web",
      "Estrategia omnicanal y ciclo de cliente",
    ],
  },
];

const companyFacts = [
  ["Denominación social", "AD Caldas Innotec, S.A."],
  ["NIF", "A66316399"],
  [
    "Vinculación societaria",
    "Cinteca es la marca tecnológica de AD Caldas Innotec, S.A., entidad titular del sitio y responsable de su actividad corporativa.",
  ],
  ["Domicilio social", "Calle Blanco, 10 · Torrecera · 11595 Jerez de la Frontera · Cádiz · España"],
  ["Registro Mercantil", "Cádiz · Tomo 2350 · Folio 9 · Sección 8 · Hoja CA-56553 · Inscripción 4"],
];

const companyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cinteca.es/#organization",
      name: "AD Caldas Innotec, S.A.",
      alternateName: "Cinteca",
      legalName: "AD Caldas Innotec, S.A.",
      url: "https://cinteca.es",
      taxID: "A66316399",
      foundingDate: "2014-06-06",
      email: "adriano@cinteca.es",
      telephone: "+34665478150",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Blanco, 10, Torrecera",
        postalCode: "11595",
        addressLocality: "Jerez de la Frontera",
        addressRegion: "Cádiz",
        addressCountry: "ES",
      },
      brand: {
        "@id": "https://cinteca.es/#brand",
      },
      sameAs: products.map((product) => product.url),
      knowsAbout: capabilities.flatMap((capability) => [
        capability.title,
        ...capability.direct,
        ...capability.adjacent,
      ]),
      description:
        "Empresa tecnológica española dedicada al desarrollo y gestión de software, inteligencia artificial, telecomunicaciones, automatización e infraestructura digital.",
    },
    {
      "@type": "Brand",
      "@id": "https://cinteca.es/#brand",
      name: "Cinteca",
      url: "https://cinteca.es",
    },
    {
      "@type": "WebSite",
      "@id": "https://cinteca.es/#website",
      name: "Cinteca",
      url: "https://cinteca.es",
      publisher: {
        "@id": "https://cinteca.es/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <main id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd) }}
      />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Cinteca — inicio">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>cinteca</span>
        </a>

        <p className="header-entity">AD Caldas Innotec, S.A.</p>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#empresa">Empresa</a>
          <a href="#capacidades">Capacidades</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
          <a href="#aviso-legal">Aviso legal</a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Abrir menú">Menú</summary>
          <nav aria-label="Navegación móvil">
            <a href="#empresa">Empresa</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#productos">Productos</a>
            <a href="#contacto">Contacto</a>
            <a href="#aviso-legal">Aviso legal</a>
            <a href="#privacidad">Privacidad</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Sitio corporativo oficial</p>
          <h1 id="hero-title">Tecnología aplicada, construida para operar.</h1>
          <p className="hero-intro">
            Cinteca es la marca tecnológica de AD Caldas Innotec, S.A. La
            compañía desarrolla y gestiona productos de software, inteligencia
            artificial e infraestructura digital para profesionales y empresas.
          </p>
        </div>

        <aside className="identity-card" aria-label="Identificación de la empresa">
          <div className="identity-heading">
            <p>Entidad mercantil española</p>
            <span>ES</span>
          </div>
          <dl>
            <div>
              <dt>Razón social</dt>
              <dd>AD Caldas Innotec, S.A.</dd>
            </div>
            <div>
              <dt>NIF</dt>
              <dd>A66316399</dd>
            </div>
            <div>
              <dt>Registro</dt>
              <dd>RM Cádiz · Hoja CA-56553</dd>
            </div>
            <div>
              <dt>Contacto</dt>
              <dd>
                <a href="mailto:adriano@cinteca.es">adriano@cinteca.es</a>
              </dd>
            </div>
          </dl>
          <a className="identity-link" href="#aviso-legal">
            Ver identificación completa <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </section>

      <div className="status-strip" aria-label="Información del sitio">
        <p><span aria-hidden="true" /> Empresa activa</p>
        <p>Actividad tecnológica desde 2014</p>
        <p>España · Europa · Internacional</p>
        <p>Sin cookies ni seguimiento</p>
      </div>

      <section className="section company" id="empresa">
        <div className="section-label">
          <p>La empresa</p>
          <span>01</span>
        </div>
        <div className="company-copy">
          <h2>Una entidad. Distintos productos tecnológicos.</h2>
          <div className="company-paragraphs">
            <p>
              AD Caldas Innotec, S.A. es una sociedad mercantil española dedicada
              a la prestación de servicios relacionados con las tecnologías de la
              información y la comunicación, incluyendo la creación, el desarrollo
              y la gestión de recursos web y aplicaciones de software.
            </p>
            <p>
              Cinteca identifica el núcleo tecnológico y corporativo del grupo. Bajo
              este marco se impulsan productos y marcas con identidad propia para
              ámbitos jurídicos, empresariales y de infraestructura. Esta estructura
              explica que el dominio corporativo y los productos anunciados puedan
              utilizar nombres diferentes sin dejar de formar parte del mismo
              ecosistema empresarial.
            </p>
          </div>

          <div className="corporate-link">
            <div>
              <span>Vinculación societaria</span>
              <strong>Marca ↔ sociedad titular</strong>
            </div>
            <p>
              <b>Cinteca</b> es la marca tecnológica y la identidad corporativa
              vinculada a <b>AD Caldas Innotec, S.A.</b>, sociedad mercantil
              constituida en España con <b>NIF A66316399</b>. AD Caldas Innotec,
              S.A. es la entidad titular de este sitio y el marco societario desde
              el que se presenta la actividad tecnológica de Cinteca.
            </p>
          </div>

          <div className="activity-grid" aria-label="Ámbitos de actividad">
            <article>
              <span>SOFTWARE</span>
              <h3>Productos y plataformas</h3>
              <p>Aplicaciones web, móviles y de escritorio, APIs e integraciones.</p>
            </article>
            <article>
              <span>INTELIGENCIA</span>
              <h3>IA aplicada</h3>
              <p>Asistentes, modelos, automatización y procesamiento de información.</p>
            </article>
            <article>
              <span>INFRAESTRUCTURA</span>
              <h3>Sistemas y operación</h3>
              <p>Cloud, entornos locales e híbridos, redes y computación acelerada.</p>
            </article>
            <article>
              <span>INGENIERÍA</span>
              <h3>Integración tecnológica</h3>
              <p>Telecomunicaciones, automatización, electrónica y sistemas conectados.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section capabilities" id="capacidades">
        <div className="section-label">
          <p>Capacidades</p>
          <span>02</span>
        </div>
        <div className="capabilities-content">
          <div className="section-heading capabilities-heading">
            <h2>Know-how completo, sin convertirlo en un currículum.</h2>
            <p>
              El mapa distingue la experiencia directamente consolidada de las
              disciplinas adyacentes que pueden ser dirigidas, integradas o
              administradas con especialistas según el alcance del proyecto.
            </p>
          </div>

          <div className="capability-legend" aria-label="Niveles de capacidad">
            <p><span className="legend-direct" aria-hidden="true" /> Conocimiento directo</p>
            <p><span className="legend-adjacent" aria-hidden="true" /> Dirección e integración</p>
            <p>{capabilities.length} dominios · {capabilities.reduce((total, capability) => total + capability.direct.length + capability.adjacent.length, 0)} capacidades</p>
          </div>

          <div className="capability-list">
            {capabilities.map((capability) => (
              <details className="capability-card" key={capability.code}>
                <summary>
                  <span className="capability-code">{capability.code}</span>
                  <span className="capability-title">{capability.title}</span>
                  <span className="capability-count">
                    {capability.direct.length + capability.adjacent.length} temas
                  </span>
                  <span className="capability-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="capability-detail">
                  <div>
                    <h3><span className="legend-direct" aria-hidden="true" /> Conocimiento directo</h3>
                    <ul>
                      {capability.direct.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3><span className="legend-adjacent" aria-hidden="true" /> Dirección e integración</h3>
                    <ul>
                      {capability.adjacent.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <p className="capability-note">
            “Dirección e integración” no pretende atribuir dominio individual de
            cada especialidad: identifica ámbitos que la Cinteca puede evaluar,
            contratar, coordinar y gobernar con responsabilidad técnica.
          </p>
        </div>
      </section>

      <section className="section products" id="productos">
        <div className="section-label">
          <p>Productos</p>
          <span>03</span>
        </div>
        <div className="products-content">
          <div className="section-heading">
            <h2>Productos con identidad propia.</h2>
            <p>
              Cada producto responde a un contexto específico y dispone de su
              propio dominio, comunicación y propuesta de valor.
            </p>
          </div>

          <div className="product-list">
            {products.map((product, index) => (
              <a
                className="product-row"
                href={product.url}
                target="_blank"
                rel="noreferrer"
                key={product.name}
              >
                <span className="product-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="product-name">
                  <span>{product.code}</span>
                  <h3>{product.name}</h3>
                </div>
                <p>{product.description}</p>
                <span className="product-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="contacto">
        <div className="section-label light-label">
          <p>Contacto</p>
          <span>04</span>
        </div>
        <div className="contact-content">
          <div>
            <h2>Contacto directo.</h2>
            <p>
              No utilizamos formularios. Puede contactar con la empresa por
              correo electrónico o teléfono.
            </p>
          </div>
          <address>
            <a href="mailto:adriano@cinteca.es">
              <span>Correo electrónico</span>
              <strong>adriano@cinteca.es</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="tel:+34665478150">
              <span>Teléfono</span>
              <strong>+34 665 478 150</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <div>
              <span>Domicilio social</span>
              <strong>
                Calle Blanco, 10 · Torrecera<br />
                11595 Jerez de la Frontera · Cádiz · España
              </strong>
            </div>
          </address>
        </div>
      </section>

      <section className="section legal" id="aviso-legal">
        <div className="section-label">
          <p>Aviso legal</p>
          <span>05</span>
        </div>
        <div className="legal-content">
          <div className="legal-intro">
            <h2>Identificación del titular.</h2>
            <p>
              Información facilitada de forma permanente, directa y gratuita de
              conformidad con el artículo 10 de la Ley 34/2002, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico.
            </p>
          </div>

          <dl className="legal-facts">
            {companyFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            <div>
              <dt>Correo electrónico</dt>
              <dd><a href="mailto:adriano@cinteca.es">adriano@cinteca.es</a></dd>
            </div>
            <div>
              <dt>Teléfono</dt>
              <dd><a href="tel:+34665478150">+34 665 478 150</a></dd>
            </div>
            <div>
              <dt>Sitio web</dt>
              <dd>https://cinteca.es</dd>
            </div>
          </dl>

          <div className="legal-text">
            <article>
              <h3>Objeto y acceso</h3>
              <p>
                Este sitio presenta información corporativa sobre AD Caldas
                Innotec, S.A., la marca Cinteca y sus productos. El acceso es libre
                y gratuito. La información tiene carácter general y no constituye
                una oferta contractual ni asesoramiento profesional.
              </p>
            </article>
            <article>
              <h3>Propiedad intelectual</h3>
              <p>
                Las marcas, denominaciones, textos y demás contenidos de este sitio
                pertenecen a sus respectivos titulares. No se autoriza su uso de
                forma que pueda inducir a confusión sobre su origen o titularidad.
              </p>
            </article>
            <article>
              <h3>Enlaces externos</h3>
              <p>
                Los enlaces a los sitios de los productos conducen a dominios
                independientes, con sus propias condiciones y políticas. AD Caldas
                Innotec, S.A. no controla contenidos de terceros enlazados desde
                esos sitios.
              </p>
            </article>
            <article>
              <h3>Legislación aplicable</h3>
              <p>
                Este sitio se rige por la legislación española. Para cualquier
                controversia serán competentes los juzgados y tribunales que
                correspondan conforme a la normativa aplicable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section privacy" id="privacidad">
        <div className="section-label">
          <p>Privacidad</p>
          <span>06</span>
        </div>
        <div className="privacy-content">
          <div className="legal-intro">
            <h2>Política de privacidad.</h2>
            <p>
              Este sitio no utiliza formularios, cuentas de usuario, cookies ni
              herramientas de analítica o publicidad. La navegación por sí misma
              no crea perfiles de usuario.
            </p>
          </div>

          <div className="privacy-grid">
            <article>
              <span>Responsable</span>
              <h3>AD Caldas Innotec, S.A.</h3>
              <p>NIF A66316399. Domicilio y contacto indicados en el aviso legal.</p>
            </article>
            <article>
              <span>Datos tratados</span>
              <h3>Solo los que usted envíe.</h3>
              <p>
                Si escribe o llama, trataremos los datos de contacto y el contenido
                que facilite voluntariamente.
              </p>
            </article>
            <article>
              <span>Finalidad y base jurídica</span>
              <h3>Atender su comunicación.</h3>
              <p>
                Los datos se utilizan para responder consultas o gestionar medidas
                precontractuales, sobre la base de su solicitud y del interés
                legítimo en mantener comunicaciones profesionales.
              </p>
            </article>
            <article>
              <span>Conservación</span>
              <h3>Durante el tiempo necesario.</h3>
              <p>
                Se conservarán mientras se atiende la comunicación y, después,
                durante los plazos exigidos para cumplir obligaciones legales o
                atender posibles responsabilidades.
              </p>
            </article>
            <article>
              <span>Destinatarios</span>
              <h3>Sin venta ni cesión comercial.</h3>
              <p>
                No se comunican datos a terceros salvo obligación legal o
                proveedores necesarios sujetos a las garantías correspondientes.
              </p>
            </article>
            <article>
              <span>Sus derechos</span>
              <h3>Acceso, rectificación y control.</h3>
              <p>
                Puede solicitar acceso, rectificación, supresión, oposición,
                limitación o portabilidad escribiendo a
                <a href="mailto:adriano@cinteca.es"> adriano@cinteca.es</a>. También
                puede reclamar ante la
                <a href="https://www.aepd.es" target="_blank" rel="noreferrer"> AEPD</a>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio" aria-label="Cinteca — volver al inicio">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>cinteca</span>
          </a>
          <p>
            Marca tecnológica de <strong>AD Caldas Innotec, S.A.</strong>
          </p>
          <a href="mailto:adriano@cinteca.es">adriano@cinteca.es</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AD Caldas Innotec, S.A.</p>
          <p>Este sitio no utiliza cookies, analytics ni formularios.</p>
          <div>
            <a href="#aviso-legal">Aviso legal</a>
            <a href="#privacidad">Privacidad</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
