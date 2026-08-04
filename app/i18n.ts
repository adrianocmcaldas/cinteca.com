export type Locale = "en" | "es" | "pt" | "nb";

export type Capability = {
  code: string;
  title: string;
  direct: string[];
  adjacent: string[];
};

type Product = {
  name: string;
  code: string;
  url: string;
  description: string;
  tag?: string;
};

type Activity = {
  code: string;
  title: string;
  description: string;
};

type LegalArticle = {
  title: string;
  body: string;
};

type PrivacyArticle = {
  label: string;
  title: string;
  body: string;
};

export type SiteCopy = {
  localeName: string;
  htmlLang: string;
  metadata: { title: string; description: string };
  languageLabel: string;
  navigationLabel: string;
  menuLabel: string;
  nav: {
    company: string;
    capabilities: string;
    products: string;
    contact: string;
    legal: string;
    privacy: string;
  };
  registryLabel: string;
  hero: {
    eyebrow: string;
    titlePre: string;
    titleAccent: string;
    intro: string;
    ctaProducts: string;
    ctaContact: string;
    entity: string;
    companyName: string;
    taxId: string;
    registry: string;
    contact: string;
    contactValue: string;
    completeIdentity: string;
  };
  status: string[];
  statusLabel: string;
  company: {
    label: string;
    title: string;
    paragraphs: string[];
    linkLabel: string;
    linkTitle: string;
    linkBody: string;
    activitiesLabel: string;
    activities: Activity[];
  };
  capabilities: {
    label: string;
    title: string;
    intro: string;
    direct: string;
    adjacent: string;
    domains: string;
    topics: string;
    topicCount: string;
    note: string;
    items: Capability[];
  };
  products: {
    label: string;
    title: string;
    intro: string;
    items: Product[];
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    formLabel: string;
    protectedLabel: string;
    name: string;
    email: string;
    company: string;
    optional: string;
    subject: string;
    message: string;
    privacyAcknowledgement: string;
    privacyLink: string;
    verification: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    turnstileError: string;
    configurationError: string;
  };
  legal: {
    label: string;
    title: string;
    intro: string;
    facts: [string, string][];
    email: string;
    contactChannel: string;
    contactChannelValue: string;
    website: string;
    articles: LegalArticle[];
    fullDocuments: string;
  };
  privacy: {
    label: string;
    title: string;
    intro: string;
    items: PrivacyArticle[];
    fullDocuments: string;
  };
  footer: {
    brandRelation: string;
    noTracking: string;
    contact: string;
    legal: string;
    privacy: string;
    legalCenter: string;
  };
};

export const localeOptions: { code: Locale; short: string; label: string; lang: string }[] = [
  { code: "pt", short: "PT", label: "Português", lang: "pt" },
  { code: "en", short: "EN", label: "English", lang: "en" },
  { code: "es", short: "ES", label: "Español", lang: "es" },
  { code: "nb", short: "NO", label: "Norsk bokmål", lang: "nb" },
];

const productUrls = {
  legalNeuron: "https://legalneuron.es",
  nordixBios: "https://nordixbios.com",
  ncsEngine: "https://ncsengine.com",
};

const address = "Calle Blanco, 10 · Torrecera · 11595 Jerez de la Frontera · Cádiz · España";
const registry = "Cádiz · Tomo 2350 · Folio 9 · Sección 8 · Hoja CA-56553 · Inscripción 4";

const enCapabilities: Capability[] = [
  {
    code: "DIR",
    title: "Technology leadership and IT management",
    direct: [
      "IT leadership and CTO experience",
      "Technology strategy and roadmaps",
      "Technical team management",
      "Budgets, suppliers and contracts",
      "Architecture and platform decisions",
      "Project and portfolio management",
      "Multinational technology operations",
    ],
    adjacent: [
      "IT governance and enterprise architecture",
      "ITSM, service catalogue and CMDB",
      "Technical due diligence and audits",
      "FinOps and investment optimisation",
      "Risk and compliance management",
      "Technology procurement and licensing",
      "Change management and digital transformation",
      "Product and programme leadership",
    ],
  },
  {
    code: "SWE",
    title: "Software engineering and architecture",
    direct: [
      "Custom software development",
      "Backend, frontend and full stack",
      "APIs, services and integrations",
      "Application architecture",
      "SQL and NoSQL databases",
      "Process automation",
      "From simple products to complex systems",
    ],
    adjacent: [
      "Microservices and distributed systems",
      "Event-driven architecture",
      "SaaS, multi-tenant systems and platforms",
      "Messaging, queues and streaming",
      "Legacy system modernisation",
      "Testing, QA and automation",
      "Performance, scalability and resilience",
      "API documentation and governance",
    ],
  },
  {
    code: "APP",
    title: "Web, mobile and desktop applications",
    direct: [
      "Web applications and portals",
      "Windows, Linux and macOS",
      "Android, iOS and iPadOS",
      "Native and hybrid applications",
      "Hardware-integrated applications",
      "Software distribution and updates",
      "Cross-platform experiences",
    ],
    adjacent: [
      "PWA and offline-first strategies",
      "Synchronisation and conflict resolution",
      "Accessibility and internationalisation",
      "Product design and user experience",
      "Product telemetry and analytics",
      "App stores, signing and provisioning",
      "Client application security",
      "Performance and energy optimisation",
    ],
  },
  {
    code: "AIM",
    title: "Artificial intelligence and signal processing",
    direct: [
      "Digital signal processing",
      "Creation and application of AI algorithms",
      "Model development and training",
      "Signal and time-series processing",
      "Intelligent automation",
      "AI applications in real products",
      "Model evaluation and tuning",
    ],
    adjacent: [
      "Machine learning and deep learning",
      "LLMs, agents and tools",
      "RAG, semantic search and vector databases",
      "Computer vision, audio and speech",
      "NLP, classification and extraction",
      "MLOps, LLMOps and model observability",
      "Responsible AI, security and evaluation",
      "Local, cloud and edge inference",
    ],
  },
  {
    code: "DAT",
    title: "Data, integration and knowledge",
    direct: [
      "Data modelling and persistence",
      "Processing pipelines",
      "Systems integration",
      "ETL and workflow automation",
      "Structured and unstructured data processing",
      "Information search and retrieval",
      "Data delivery through APIs",
    ],
    adjacent: [
      "Data warehouse, data lake and lakehouse",
      "Analytics, BI and reporting",
      "Batch and streaming processing",
      "Data governance, catalogue and lineage",
      "Quality, MDM and normalisation",
      "CDC and real-time integration",
      "Vector databases and knowledge graphs",
      "Privacy and data lifecycle",
    ],
  },
  {
    code: "GPU",
    title: "GPU, PODs and high-performance computing",
    direct: [
      "Creation and use of GPU environments",
      "Design and operation of computing PODs",
      "Accelerated training and inference",
      "Capacity sizing",
      "Containers for AI workloads",
      "Computing resource optimisation",
      "Operation of compute-intensive workloads",
    ],
    adjacent: [
      "CUDA and acceleration libraries",
      "GPU clusters and distributed training",
      "HPC, parallelism and simulation",
      "Model serving, batching and autoscaling",
      "Quantisation and inference optimisation",
      "Accelerator orchestration and scheduling",
      "GPU observability and accounting",
      "Edge AI and specialised accelerators",
    ],
  },
  {
    code: "TEL",
    title: "Telecommunications and networks",
    direct: [
      "Network design and administration",
      "Local and distributed infrastructure",
      "Enterprise connectivity",
      "Routing, switching, VLAN and VPN",
      "Wi-Fi and wired networks",
      "Diagnostics and monitoring",
      "Carrier and link management",
    ],
    adjacent: [
      "LAN, WAN, SD-WAN and MPLS",
      "TCP/IP, BGP, OSPF and QoS",
      "DNS, DHCP and IPAM",
      "VoIP, SIP and unified communications",
      "Fibre optics, radio and microwave",
      "4G, 5G, LPWAN and IoT",
      "NOC, redundancy and high availability",
      "Load balancing, CDN and perimeter security",
    ],
  },
  {
    code: "CLD",
    title: "Cloud, infrastructure and DevOps",
    direct: [
      "AWS, Microsoft Azure and Google Cloud",
      "Local, cloud and hybrid infrastructure",
      "Systems and server administration",
      "DevOps and operational automation",
      "CI/CD and deployment management",
      "Containers and managed services",
      "Owned and third-party infrastructure",
    ],
    adjacent: [
      "Kubernetes and orchestration",
      "Infrastructure as code",
      "Platform engineering and internal portals",
      "SRE, SLIs, SLOs and observability",
      "Linux, Windows Server and virtualisation",
      "Storage, backup and archiving",
      "Hybrid cloud, multicloud and migrations",
      "Capacity, cost and continuity",
    ],
  },
  {
    code: "EMB",
    title: "Electronics and embedded systems",
    direct: [
      "Electrical and computer engineering",
      "Analogue and digital electronics",
      "Microcontrollers and firmware",
      "Sensors, actuators and interfaces",
      "Instrumentation and data acquisition",
      "Hardware-software prototyping and integration",
      "Signal processing on devices",
    ],
    adjacent: [
      "Embedded C/C++ and RTOS",
      "UART, SPI, I²C, CAN and fieldbuses",
      "PCB design and prototyping",
      "FPGA and programmable logic",
      "Power supplies, power electronics and motor control",
      "Signal conditioning",
      "Hardware testing, EMC and validation",
      "Bootloaders and remote updates",
    ],
  },
  {
    code: "AUT",
    title: "Industrial, residential and OT automation",
    direct: [
      "Residential and industrial automation",
      "PLCs and control logic",
      "Sensor and actuator integration",
      "Control, supervision and telemetry",
      "Building and facility automation",
      "Connected systems and remote control",
      "Integration between IT and physical operations",
    ],
    adjacent: [
      "SCADA, HMI, Modbus and OPC UA",
      "MQTT, IIoT and edge computing",
      "BACnet, KNX and smart buildings",
      "Matter, Zigbee, Z-Wave and Home Assistant",
      "Industrial networks and OT cybersecurity",
      "Energy efficiency and management",
      "Predictive maintenance and digital twins",
      "Robotics and machinery integration",
    ],
  },
  {
    code: "SEC",
    title: "Security, privacy and continuity",
    direct: [
      "Operational security for systems and networks",
      "Identity and access management",
      "Environment hardening and updates",
      "Segmentation and perimeter protection",
      "Backup and restoration",
      "Event and incident monitoring",
      "Security embedded in operations",
    ],
    adjacent: [
      "Zero Trust and privileged access",
      "SIEM, SOC and incident response",
      "Vulnerability and penetration-test coordination",
      "Cloud, application and supply-chain security",
      "GDPR, privacy and data governance",
      "Disaster recovery and business continuity",
      "Policies, audits and compliance",
      "Third-party risk management",
    ],
  },
  {
    code: "OPS",
    title: "Operations, support and managed services",
    direct: [
      "Infrastructure administration",
      "Operation of owned and third-party environments",
      "Monitoring and incident resolution",
      "Maintenance and lifecycle management",
      "Automation through scripts and runbooks",
      "Migrations and production launches",
      "Multidisciplinary technical support",
    ],
    adjacent: [
      "Service desk, NOC and 24×7 models",
      "Incident, problem and change management",
      "Inventory, assets and configuration",
      "Capacity, availability and performance",
      "Patching and vulnerability management",
      "SLAs, OLAs, SLIs and SLOs",
      "Documentation and knowledge transfer",
      "Outsourcing and supplier coordination",
    ],
  },
  {
    code: "DIG",
    title: "Web, communication and digital growth",
    direct: [
      "Website creation and management",
      "Media and social network management",
      "Paid digital advertising",
      "Technical and editorial SEO",
      "GEO and LLMO",
      "Content and brand presence",
      "Digital measurement and optimisation",
    ],
    adjacent: [
      "E-commerce, CMS and portals",
      "Analytics, attribution and tag management",
      "CRO and experimentation",
      "CRM, loyalty and marketing automation",
      "Structured data and knowledge panels",
      "Reputation and community management",
      "Web accessibility and performance",
      "Omnichannel strategy and customer lifecycle",
    ],
  },
];

const esCapabilities: Capability[] = [
  {
    code: "DIR",
    title: "Dirección tecnológica y gestión de TI",
    direct: ["Dirección de TI y experiencia como CTO", "Estrategia tecnológica y roadmaps", "Gestión de equipos técnicos", "Presupuestos, proveedores y contratos", "Arquitectura y decisiones de plataforma", "Gestión de proyectos y portafolios", "Operación tecnológica multinacional"],
    adjacent: ["Gobierno de TI y arquitectura empresarial", "ITSM, catálogo de servicios y CMDB", "Due diligence y auditoría técnica", "FinOps y optimización de inversión", "Gestión de riesgos y cumplimiento", "Compras y licenciamiento tecnológico", "Gestión del cambio y transformación digital", "Dirección de producto y programas"],
  },
  {
    code: "SWE",
    title: "Ingeniería y arquitectura de software",
    direct: ["Desarrollo de software a medida", "Backend, frontend y full stack", "APIs, servicios e integraciones", "Arquitectura de aplicaciones", "Bases de datos SQL y NoSQL", "Automatización de procesos", "De productos simples a sistemas complejos"],
    adjacent: ["Microservicios y sistemas distribuidos", "Arquitectura orientada a eventos", "SaaS, multi-tenant y plataformas", "Mensajería, colas y streaming", "Modernización de sistemas heredados", "Pruebas, QA y automatización", "Rendimiento, escalabilidad y resiliencia", "Documentación y gobierno de APIs"],
  },
  {
    code: "APP",
    title: "Aplicaciones web, móviles y de escritorio",
    direct: ["Aplicaciones web y portales", "Windows, Linux y macOS", "Android, iOS y iPadOS", "Aplicaciones nativas e híbridas", "Integración de aplicaciones con hardware", "Distribución y actualización de software", "Experiencias multiplataforma"],
    adjacent: ["PWA y estrategias offline-first", "Sincronización y resolución de conflictos", "Accesibilidad e internacionalización", "Diseño de producto y experiencia de usuario", "Telemetría y analítica de producto", "App stores, firma y aprovisionamiento", "Seguridad de aplicaciones cliente", "Optimización de rendimiento y consumo"],
  },
  {
    code: "AIM",
    title: "Inteligencia artificial y procesamiento de señales",
    direct: ["Procesamiento digital de señales", "Creación y aplicación de algoritmos de IA", "Entrenamiento y desarrollo de modelos", "Tratamiento de señales y series temporales", "Automatización inteligente", "Aplicaciones de IA en productos reales", "Evaluación y ajuste de modelos"],
    adjacent: ["Machine learning y deep learning", "LLMs, agentes y herramientas", "RAG, búsqueda semántica y bases vectoriales", "Visión computacional, audio y voz", "NLP, clasificación y extracción", "MLOps, LLMOps y observabilidad de modelos", "IA responsable, seguridad y evaluación", "Inferencia local, cloud y edge"],
  },
  {
    code: "DAT",
    title: "Datos, integración y conocimiento",
    direct: ["Modelado y persistencia de datos", "Pipelines de procesamiento", "Integración entre sistemas", "ETL y automatización de flujos", "Tratamiento de datos estructurados y no estructurados", "Búsqueda y recuperación de información", "Exposición de datos mediante APIs"],
    adjacent: ["Data warehouse, data lake y lakehouse", "Analítica, BI y reporting", "Procesamiento batch y streaming", "Gobierno, catálogo y linaje de datos", "Calidad, MDM y normalización", "CDC e integración en tiempo real", "Bases vectoriales y knowledge graphs", "Privacidad y ciclo de vida del dato"],
  },
  {
    code: "GPU",
    title: "GPU, PODs y computación de alto rendimiento",
    direct: ["Creación y utilización de entornos GPU", "Diseño y operación de PODs de computación", "Entrenamiento e inferencia acelerados", "Dimensionamiento de capacidad", "Contenedores para cargas de IA", "Optimización de recursos de cómputo", "Operación de cargas intensivas"],
    adjacent: ["CUDA y bibliotecas de aceleración", "Clusters GPU y entrenamiento distribuido", "HPC, paralelismo y simulación", "Serving, batching y autoscaling de modelos", "Cuantización y optimización de inferencia", "Orquestación y scheduling de aceleradores", "Observabilidad y contabilidad de GPU", "Edge AI y aceleradores especializados"],
  },
  {
    code: "TEL",
    title: "Telecomunicaciones y redes",
    direct: ["Diseño y administración de redes", "Infraestructura local y distribuida", "Conectividad empresarial", "Routing, switching, VLAN y VPN", "Wi-Fi y redes cableadas", "Diagnóstico y monitorización", "Gestión de operadores y enlaces"],
    adjacent: ["LAN, WAN, SD-WAN y MPLS", "TCP/IP, BGP, OSPF y QoS", "DNS, DHCP e IPAM", "VoIP, SIP y comunicaciones unificadas", "Fibra óptica, radio y microondas", "4G, 5G, LPWAN e IoT", "NOC, redundancia y alta disponibilidad", "Balanceo, CDN y seguridad perimetral"],
  },
  {
    code: "CLD",
    title: "Cloud, infraestructura y DevOps",
    direct: ["AWS, Microsoft Azure y Google Cloud", "Infraestructura local, cloud e híbrida", "Administración de sistemas y servidores", "DevOps y automatización operativa", "CI/CD y gestión de despliegues", "Contenedores y servicios gestionados", "Infraestructuras propias y de terceros"],
    adjacent: ["Kubernetes y orquestación", "Infraestructura como código", "Platform engineering y portales internos", "SRE, SLIs, SLOs y observabilidad", "Linux, Windows Server y virtualización", "Almacenamiento, backup y archivado", "Cloud híbrida, multicloud y migraciones", "Capacidad, costes y continuidad"],
  },
  {
    code: "EMB",
    title: "Electrónica y sistemas embarcados",
    direct: ["Ingeniería eléctrica y de computación", "Electrónica analógica y digital", "Microcontroladores y firmware", "Sensores, actuadores e interfaces", "Instrumentación y adquisición de datos", "Prototipado e integración hardware-software", "Tratamiento de señales en dispositivos"],
    adjacent: ["Embedded C/C++ y RTOS", "UART, SPI, I²C, CAN y buses de campo", "Diseño y prototipado de PCB", "FPGA y lógica programable", "Fuentes, potencia y control de motores", "Acondicionamiento de señal", "Pruebas, EMC y validación de hardware", "Bootloaders y actualización remota"],
  },
  {
    code: "AUT",
    title: "Automatización industrial, residencial y OT",
    direct: ["Automatización residencial e industrial", "CLPs y lógica de control", "Integración de sensores y actuadores", "Control, supervisión y telemetría", "Automatización de instalaciones", "Sistemas conectados y control remoto", "Integración entre TI y operación física"],
    adjacent: ["SCADA, HMI, Modbus y OPC UA", "MQTT, IIoT y edge computing", "BACnet, KNX y edificios inteligentes", "Matter, Zigbee, Z-Wave y Home Assistant", "Redes industriales y ciberseguridad OT", "Eficiencia y gestión energética", "Mantenimiento predictivo y gemelos digitales", "Robótica e integración de maquinaria"],
  },
  {
    code: "SEC",
    title: "Seguridad, privacidad y continuidad",
    direct: ["Seguridad operativa de sistemas y redes", "Gestión de identidades y accesos", "Hardening y actualización de entornos", "Segmentación y protección perimetral", "Backup y restauración", "Supervisión de eventos e incidentes", "Seguridad incorporada a la operación"],
    adjacent: ["Zero Trust y acceso privilegiado", "SIEM, SOC y respuesta a incidentes", "Vulnerabilidades y coordinación de pentesting", "Seguridad cloud, aplicaciones y supply chain", "RGPD, privacidad y gobierno de datos", "Disaster recovery y continuidad de negocio", "Políticas, auditoría y cumplimiento", "Gestión de riesgos de terceros"],
  },
  {
    code: "OPS",
    title: "Operación, soporte y servicios gestionados",
    direct: ["Administración de infraestructura", "Operación de entornos propios y de terceros", "Monitorización y resolución de incidentes", "Mantenimiento y ciclo de vida", "Automatización mediante scripts y runbooks", "Migraciones y puesta en producción", "Soporte técnico multidisciplinar"],
    adjacent: ["Service desk, NOC y modelos 24×7", "Gestión de incidentes, problemas y cambios", "Inventario, activos y configuración", "Capacidad, disponibilidad y rendimiento", "Patching y gestión de vulnerabilidades", "SLAs, OLAs, SLIs y SLOs", "Documentación y transferencia de conocimiento", "Outsourcing y coordinación de proveedores"],
  },
  {
    code: "DIG",
    title: "Web, comunicación y crecimiento digital",
    direct: ["Creación y gestión de sitios web", "Gestión de medios y redes sociales", "Publicidad digital de pago", "SEO técnico y editorial", "GEO y LLMO", "Contenido y presencia de marca", "Medición y optimización digital"],
    adjacent: ["E-commerce, CMS y portales", "Analytics, atribución y tag management", "CRO y experimentación", "CRM, fidelización y marketing automation", "Datos estructurados y knowledge panels", "Reputación y gestión de comunidades", "Accesibilidad y rendimiento web", "Estrategia omnicanal y ciclo de cliente"],
  },
];

const ptCapabilities: Capability[] = [
  {
    code: "DIR",
    title: "Direção tecnológica e gestão de TI",
    direct: ["Direção de TI e experiência como CTO", "Estratégia tecnológica e roadmaps", "Gestão de equipes técnicas", "Orçamentos, fornecedores e contratos", "Arquitetura e decisões de plataforma", "Gestão de projetos e portfólios", "Operação tecnológica multinacional"],
    adjacent: ["Governança de TI e arquitetura empresarial", "ITSM, catálogo de serviços e CMDB", "Due diligence e auditoria técnica", "FinOps e otimização de investimentos", "Gestão de riscos e conformidade", "Compras e licenciamento de tecnologia", "Gestão da mudança e transformação digital", "Direção de produtos e programas"],
  },
  {
    code: "SWE",
    title: "Engenharia e arquitetura de software",
    direct: ["Desenvolvimento de software sob medida", "Backend, frontend e full stack", "APIs, serviços e integrações", "Arquitetura de aplicações", "Bancos de dados SQL e NoSQL", "Automação de processos", "De produtos simples a sistemas complexos"],
    adjacent: ["Microsserviços e sistemas distribuídos", "Arquitetura orientada a eventos", "SaaS, multi-tenant e plataformas", "Mensageria, filas e streaming", "Modernização de sistemas legados", "Testes, QA e automação", "Desempenho, escalabilidade e resiliência", "Documentação e governança de APIs"],
  },
  {
    code: "APP",
    title: "Aplicações web, móveis e desktop",
    direct: ["Aplicações web e portais", "Windows, Linux e macOS", "Android, iOS e iPadOS", "Aplicações nativas e híbridas", "Integração de aplicações com hardware", "Distribuição e atualização de software", "Experiências multiplataforma"],
    adjacent: ["PWA e estratégias offline-first", "Sincronização e resolução de conflitos", "Acessibilidade e internacionalização", "Design de produto e experiência do usuário", "Telemetria e análise de produto", "Lojas de aplicativos, assinatura e provisionamento", "Segurança de aplicações cliente", "Otimização de desempenho e consumo"],
  },
  {
    code: "AIM",
    title: "Inteligência artificial e processamento de sinais",
    direct: ["Processamento digital de sinais", "Criação e aplicação de algoritmos de IA", "Desenvolvimento e treinamento de modelos", "Tratamento de sinais e séries temporais", "Automação inteligente", "Aplicações de IA em produtos reais", "Avaliação e ajuste de modelos"],
    adjacent: ["Machine learning e deep learning", "LLMs, agentes e ferramentas", "RAG, busca semântica e bancos vetoriais", "Visão computacional, áudio e voz", "NLP, classificação e extração", "MLOps, LLMOps e observabilidade de modelos", "IA responsável, segurança e avaliação", "Inferência local, cloud e edge"],
  },
  {
    code: "DAT",
    title: "Dados, integração e conhecimento",
    direct: ["Modelagem e persistência de dados", "Pipelines de processamento", "Integração entre sistemas", "ETL e automação de fluxos", "Tratamento de dados estruturados e não estruturados", "Busca e recuperação de informação", "Disponibilização de dados por APIs"],
    adjacent: ["Data warehouse, data lake e lakehouse", "Analytics, BI e relatórios", "Processamento batch e streaming", "Governança, catálogo e linhagem de dados", "Qualidade, MDM e normalização", "CDC e integração em tempo real", "Bancos vetoriais e grafos de conhecimento", "Privacidade e ciclo de vida dos dados"],
  },
  {
    code: "GPU",
    title: "GPU, PODs e computação de alto desempenho",
    direct: ["Criação e uso de ambientes GPU", "Projeto e operação de PODs de computação", "Treinamento e inferência acelerados", "Dimensionamento de capacidade", "Contêineres para cargas de IA", "Otimização de recursos computacionais", "Operação de cargas intensivas"],
    adjacent: ["CUDA e bibliotecas de aceleração", "Clusters GPU e treinamento distribuído", "HPC, paralelismo e simulação", "Serving, batching e autoscaling de modelos", "Quantização e otimização de inferência", "Orquestração e agendamento de aceleradores", "Observabilidade e contabilização de GPU", "Edge AI e aceleradores especializados"],
  },
  {
    code: "TEL",
    title: "Telecomunicações e redes",
    direct: ["Projeto e administração de redes", "Infraestrutura local e distribuída", "Conectividade empresarial", "Routing, switching, VLAN e VPN", "Wi-Fi e redes cabeadas", "Diagnóstico e monitoramento", "Gestão de operadoras e enlaces"],
    adjacent: ["LAN, WAN, SD-WAN e MPLS", "TCP/IP, BGP, OSPF e QoS", "DNS, DHCP e IPAM", "VoIP, SIP e comunicações unificadas", "Fibra óptica, rádio e micro-ondas", "4G, 5G, LPWAN e IoT", "NOC, redundância e alta disponibilidade", "Balanceamento, CDN e segurança de perímetro"],
  },
  {
    code: "CLD",
    title: "Cloud, infraestrutura e DevOps",
    direct: ["AWS, Microsoft Azure e Google Cloud", "Infraestrutura local, cloud e híbrida", "Administração de sistemas e servidores", "DevOps e automação operacional", "CI/CD e gestão de implantações", "Contêineres e serviços gerenciados", "Infraestruturas próprias e de terceiros"],
    adjacent: ["Kubernetes e orquestração", "Infraestrutura como código", "Platform engineering e portais internos", "SRE, SLIs, SLOs e observabilidade", "Linux, Windows Server e virtualização", "Armazenamento, backup e arquivamento", "Cloud híbrida, multicloud e migrações", "Capacidade, custos e continuidade"],
  },
  {
    code: "EMB",
    title: "Eletrônica e sistemas embarcados",
    direct: ["Engenharia elétrica e de computação", "Eletrônica analógica e digital", "Microcontroladores e firmware", "Sensores, atuadores e interfaces", "Instrumentação e aquisição de dados", "Prototipagem e integração hardware-software", "Processamento de sinais em dispositivos"],
    adjacent: ["Embedded C/C++ e RTOS", "UART, SPI, I²C, CAN e barramentos de campo", "Projeto e prototipagem de PCB", "FPGA e lógica programável", "Fontes, potência e controle de motores", "Condicionamento de sinal", "Testes, EMC e validação de hardware", "Bootloaders e atualização remota"],
  },
  {
    code: "AUT",
    title: "Automação industrial, residencial e OT",
    direct: ["Automação residencial e industrial", "CLPs e lógica de controle", "Integração de sensores e atuadores", "Controle, supervisão e telemetria", "Automação de instalações", "Sistemas conectados e controle remoto", "Integração entre TI e operação física"],
    adjacent: ["SCADA, HMI, Modbus e OPC UA", "MQTT, IIoT e edge computing", "BACnet, KNX e edifícios inteligentes", "Matter, Zigbee, Z-Wave e Home Assistant", "Redes industriais e cibersegurança OT", "Eficiência e gestão energética", "Manutenção preditiva e gêmeos digitais", "Robótica e integração de máquinas"],
  },
  {
    code: "SEC",
    title: "Segurança, privacidade e continuidade",
    direct: ["Segurança operacional de sistemas e redes", "Gestão de identidades e acessos", "Hardening e atualização de ambientes", "Segmentação e proteção de perímetro", "Backup e restauração", "Supervisão de eventos e incidentes", "Segurança incorporada à operação"],
    adjacent: ["Zero Trust e acesso privilegiado", "SIEM, SOC e resposta a incidentes", "Vulnerabilidades e coordenação de pentests", "Segurança cloud, de aplicações e supply chain", "RGPD, privacidade e governança de dados", "Disaster recovery e continuidade de negócios", "Políticas, auditoria e conformidade", "Gestão de riscos de terceiros"],
  },
  {
    code: "OPS",
    title: "Operação, suporte e serviços gerenciados",
    direct: ["Administração de infraestrutura", "Operação de ambientes próprios e de terceiros", "Monitoramento e resolução de incidentes", "Manutenção e ciclo de vida", "Automação com scripts e runbooks", "Migrações e entrada em produção", "Suporte técnico multidisciplinar"],
    adjacent: ["Service desk, NOC e modelos 24×7", "Gestão de incidentes, problemas e mudanças", "Inventário, ativos e configuração", "Capacidade, disponibilidade e desempenho", "Patching e gestão de vulnerabilidades", "SLAs, OLAs, SLIs e SLOs", "Documentação e transferência de conhecimento", "Outsourcing e coordenação de fornecedores"],
  },
  {
    code: "DIG",
    title: "Web, comunicação e crescimento digital",
    direct: ["Criação e gestão de sites", "Gestão de mídias e redes sociais", "Publicidade digital paga", "SEO técnico e editorial", "GEO e LLMO", "Conteúdo e presença de marca", "Medição e otimização digital"],
    adjacent: ["E-commerce, CMS e portais", "Analytics, atribuição e tag management", "CRO e experimentação", "CRM, fidelização e marketing automation", "Dados estruturados e knowledge panels", "Reputação e gestão de comunidades", "Acessibilidade e desempenho web", "Estratégia omnichannel e ciclo do cliente"],
  },
];

const nbCapabilities: Capability[] = [
  {
    code: "DIR",
    title: "Teknologiledelse og IT-styring",
    direct: ["IT-ledelse og erfaring som CTO", "Teknologistrategi og veikart", "Ledelse av tekniske team", "Budsjetter, leverandører og kontrakter", "Arkitektur- og plattformbeslutninger", "Prosjekt- og porteføljestyring", "Multinasjonal teknologidrift"],
    adjacent: ["IT-governance og virksomhetsarkitektur", "ITSM, tjenestekatalog og CMDB", "Teknisk due diligence og revisjon", "FinOps og investeringsoptimalisering", "Risiko- og samsvarsstyring", "Teknologiinnkjøp og lisensiering", "Endringsledelse og digital transformasjon", "Produkt- og programledelse"],
  },
  {
    code: "SWE",
    title: "Programvareutvikling og arkitektur",
    direct: ["Skreddersydd programvareutvikling", "Backend, frontend og fullstack", "API-er, tjenester og integrasjoner", "Applikasjonsarkitektur", "SQL- og NoSQL-databaser", "Prosessautomatisering", "Fra enkle produkter til komplekse systemer"],
    adjacent: ["Mikrotjenester og distribuerte systemer", "Hendelsesdrevet arkitektur", "SaaS, flerleietakersystemer og plattformer", "Meldinger, køer og strømming", "Modernisering av eldre systemer", "Testing, kvalitetssikring og automatisering", "Ytelse, skalerbarhet og robusthet", "API-dokumentasjon og styring"],
  },
  {
    code: "APP",
    title: "Web-, mobil- og skrivebordsapplikasjoner",
    direct: ["Webapplikasjoner og portaler", "Windows, Linux og macOS", "Android, iOS og iPadOS", "Native og hybride applikasjoner", "Applikasjoner integrert med maskinvare", "Distribusjon og oppdatering av programvare", "Plattformuavhengige brukeropplevelser"],
    adjacent: ["PWA og offline-first-strategier", "Synkronisering og konfliktløsing", "Tilgjengelighet og internasjonalisering", "Produktdesign og brukeropplevelse", "Produkttelemetri og analyse", "Appbutikker, signering og klargjøring", "Sikkerhet i klientapplikasjoner", "Optimalisering av ytelse og energibruk"],
  },
  {
    code: "AIM",
    title: "Kunstig intelligens og signalbehandling",
    direct: ["Digital signalbehandling", "Utvikling og anvendelse av KI-algoritmer", "Modellutvikling og trening", "Behandling av signaler og tidsserier", "Intelligent automatisering", "KI i reelle produkter", "Evaluering og finjustering av modeller"],
    adjacent: ["Maskinlæring og dyp læring", "LLM-er, agenter og verktøy", "RAG, semantisk søk og vektordatabaser", "Datasyn, lyd og tale", "NLP, klassifisering og uttrekk", "MLOps, LLMOps og modellobservabilitet", "Ansvarlig KI, sikkerhet og evaluering", "Lokal, sky- og edge-inferens"],
  },
  {
    code: "DAT",
    title: "Data, integrasjon og kunnskap",
    direct: ["Datamodellering og persistens", "Prosesseringspipelines", "Systemintegrasjon", "ETL og automatisering av arbeidsflyt", "Behandling av strukturerte og ustrukturerte data", "Informasjonssøk og gjenfinning", "Tilgjengeliggjøring av data via API-er"],
    adjacent: ["Datavarehus, datasjø og lakehouse", "Analyse, BI og rapportering", "Batch- og strømmebehandling", "Datastyring, katalog og opphav", "Kvalitet, MDM og normalisering", "CDC og sanntidsintegrasjon", "Vektordatabaser og kunnskapsgrafer", "Personvern og datalivssyklus"],
  },
  {
    code: "GPU",
    title: "GPU, POD-er og høyytelsesdatabehandling",
    direct: ["Etablering og bruk av GPU-miljøer", "Design og drift av beregnings-POD-er", "Akselerert trening og inferens", "Kapasitetsdimensjonering", "Containere for KI-arbeidslaster", "Optimalisering av beregningsressurser", "Drift av beregningsintensive arbeidslaster"],
    adjacent: ["CUDA og akselerasjonsbiblioteker", "GPU-klynger og distribuert trening", "HPC, parallellisering og simulering", "Modellservering, batching og autoskalering", "Kvantisering og inferensoptimalisering", "Orkestrering og planlegging av akseleratorer", "GPU-observabilitet og kostnadsføring", "Edge AI og spesialiserte akseleratorer"],
  },
  {
    code: "TEL",
    title: "Telekommunikasjon og nettverk",
    direct: ["Design og administrasjon av nettverk", "Lokal og distribuert infrastruktur", "Virksomhetstilkobling", "Routing, switching, VLAN og VPN", "Wi-Fi og kablede nettverk", "Diagnostikk og overvåking", "Styring av operatører og forbindelser"],
    adjacent: ["LAN, WAN, SD-WAN og MPLS", "TCP/IP, BGP, OSPF og QoS", "DNS, DHCP og IPAM", "VoIP, SIP og samordnet kommunikasjon", "Fiberoptikk, radio og mikrobølge", "4G, 5G, LPWAN og IoT", "NOC, redundans og høy tilgjengelighet", "Lastbalansering, CDN og perimetersikkerhet"],
  },
  {
    code: "CLD",
    title: "Sky, infrastruktur og DevOps",
    direct: ["AWS, Microsoft Azure og Google Cloud", "Lokal, skybasert og hybrid infrastruktur", "System- og serveradministrasjon", "DevOps og driftsautomatisering", "CI/CD og utrullingsstyring", "Containere og administrerte tjenester", "Egen og tredjeparts infrastruktur"],
    adjacent: ["Kubernetes og orkestrering", "Infrastruktur som kode", "Plattformutvikling og interne portaler", "SRE, SLI-er, SLO-er og observabilitet", "Linux, Windows Server og virtualisering", "Lagring, sikkerhetskopiering og arkivering", "Hybridsky, multisky og migrasjoner", "Kapasitet, kostnader og kontinuitet"],
  },
  {
    code: "EMB",
    title: "Elektronikk og innebygde systemer",
    direct: ["Elektro- og dataingeniørfag", "Analog og digital elektronikk", "Mikrokontrollere og fastvare", "Sensorer, aktuatorer og grensesnitt", "Instrumentering og datainnsamling", "Prototyping og integrasjon av maskin- og programvare", "Signalbehandling i enheter"],
    adjacent: ["Innebygd C/C++ og RTOS", "UART, SPI, I²C, CAN og feltbusser", "PCB-design og prototyping", "FPGA og programmerbar logikk", "Strømforsyning, effektelektronikk og motorstyring", "Signalkondisjonering", "Maskinvaretesting, EMC og validering", "Bootloadere og fjernoppdatering"],
  },
  {
    code: "AUT",
    title: "Industri-, bolig- og OT-automatisering",
    direct: ["Bolig- og industriautomatisering", "PLS-er og kontrollogikk", "Integrasjon av sensorer og aktuatorer", "Styring, overvåking og telemetri", "Bygg- og anleggsautomatisering", "Tilkoblede systemer og fjernstyring", "Integrasjon mellom IT og fysisk drift"],
    adjacent: ["SCADA, HMI, Modbus og OPC UA", "MQTT, IIoT og edge computing", "BACnet, KNX og smarte bygg", "Matter, Zigbee, Z-Wave og Home Assistant", "Industrielle nettverk og OT-sikkerhet", "Energieffektivitet og energistyring", "Prediktivt vedlikehold og digitale tvillinger", "Robotikk og maskinintegrasjon"],
  },
  {
    code: "SEC",
    title: "Sikkerhet, personvern og kontinuitet",
    direct: ["Driftssikkerhet for systemer og nettverk", "Identitets- og tilgangsstyring", "Herding og oppdatering av miljøer", "Segmentering og perimetersikring", "Sikkerhetskopiering og gjenoppretting", "Overvåking av hendelser og avvik", "Sikkerhet integrert i driften"],
    adjacent: ["Zero Trust og privilegert tilgang", "SIEM, SOC og hendelseshåndtering", "Sårbarheter og koordinering av penetrasjonstesting", "Sikkerhet i sky, applikasjoner og leverandørkjede", "GDPR, personvern og datastyring", "Katastrofegjenoppretting og forretningskontinuitet", "Retningslinjer, revisjon og samsvar", "Risikostyring av tredjeparter"],
  },
  {
    code: "OPS",
    title: "Drift, støtte og administrerte tjenester",
    direct: ["Infrastrukturadministrasjon", "Drift av egne og tredjeparts miljøer", "Overvåking og hendelsesløsning", "Vedlikehold og livssyklusstyring", "Automatisering med skript og runbooks", "Migrasjoner og produksjonssetting", "Tverrfaglig teknisk støtte"],
    adjacent: ["Service desk, NOC og 24×7-modeller", "Hendelses-, problem- og endringsstyring", "Inventar, eiendeler og konfigurasjon", "Kapasitet, tilgjengelighet og ytelse", "Patching og sårbarhetsstyring", "SLA-er, OLA-er, SLI-er og SLO-er", "Dokumentasjon og kunnskapsoverføring", "Outsourcing og leverandørkoordinering"],
  },
  {
    code: "DIG",
    title: "Web, kommunikasjon og digital vekst",
    direct: ["Utvikling og forvaltning av nettsteder", "Forvaltning av medier og sosiale nettverk", "Betalt digital annonsering", "Teknisk og redaksjonell SEO", "GEO og LLMO", "Innhold og merkevaretilstedeværelse", "Digital måling og optimalisering"],
    adjacent: ["E-handel, CMS og portaler", "Analyse, attribusjon og tag management", "CRO og eksperimentering", "CRM, lojalitet og markedsføringsautomatisering", "Strukturerte data og knowledge panels", "Omdømme- og community management", "Tilgjengelighet og webytelse", "Omnikanalstrategi og kundelivssyklus"],
  },
];

export const translations: Record<Locale, SiteCopy> = {
  en: {
    localeName: "English",
    htmlLang: "en",
    metadata: {
      title: "Cinteca · AD Caldas Innotec, S.A.",
      description: "Official corporate website of AD Caldas Innotec, S.A., owner of the Cinteca brand: software products, AI and digital infrastructure — NordixBIOS (Agentic AI Factory), LegalNeuron and NCS Engine.",
    },
    languageLabel: "Language",
    navigationLabel: "Main navigation",
    menuLabel: "Menu",
    nav: { company: "Company", capabilities: "Capabilities", products: "Products", contact: "Contact", legal: "Legal notice", privacy: "Privacy" },
    registryLabel: "Register",
    hero: {
      eyebrow: "Official corporate website",
      titlePre: "Applied technology,",
      titleAccent: "built to operate.",
      intro: "Cinteca is the technology brand of AD Caldas Innotec, S.A. The company develops and manages software products, artificial intelligence and digital infrastructure for professionals and organisations.",
      ctaProducts: "View products",
      ctaContact: "Protected contact",
      entity: "Spanish commercial company",
      companyName: "Legal name",
      taxId: "Tax ID",
      registry: "Registry",
      contact: "Contact",
      contactValue: "Protected channel",
      completeIdentity: "View complete company details",
    },
    status: ["Active company", "Technology activity since 2014", "Global scope · International projects", "Products with their own identity"],
    statusLabel: "Company status",
    company: {
      label: "The company",
      title: "One company. Distinct technology products.",
      paragraphs: [
        "AD Caldas Innotec, S.A. is a Spanish commercial company providing services related to information and communication technologies, including the creation, development and management of web resources and software applications.",
        "Cinteca identifies the group’s technology and corporate core. This framework supports products and brands with their own identities for legal, business and infrastructure contexts. It explains why the corporate domain and the advertised products can use different names while remaining part of the same business ecosystem. Projects already extend across different countries, and existing products are designed for progressive global expansion.",
      ],
      linkLabel: "Corporate relationship",
      linkTitle: "Brand ↔ owning company",
      linkBody: "Cinteca is the technology brand and corporate identity linked to AD Caldas Innotec, S.A., a company incorporated in Spain with Tax ID A66316399. AD Caldas Innotec, S.A. owns this website and provides the corporate framework through which Cinteca’s technology activity is presented.",
      activitiesLabel: "Areas of activity",
      activities: [
        { code: "INTELLIGENCE", title: "Agentic AI Factory", description: "AI workers, agents, models and intelligent automation." },
        { code: "SOFTWARE", title: "Products and platforms", description: "Web, mobile and desktop applications, APIs and integrations." },        { code: "INFRASTRUCTURE", title: "Systems and operations", description: "Cloud, local and hybrid environments, networks and accelerated computing." },
        { code: "ENGINEERING", title: "Technology integration", description: "Telecommunications, automation, electronics and connected systems." },
      ],
    },
    capabilities: {
      label: "Capabilities",
      title: "Complete know-how, without turning it into a résumé.",
      intro: "This map separates directly established experience from adjacent disciplines that can be led, integrated or managed with specialists according to each project’s scope.",
      direct: "Direct knowledge",
      adjacent: "Leadership and integration",
      domains: "domains",
      topics: "capabilities",
      topicCount: "topics",
      note: "“Leadership and integration” does not claim individual mastery of every speciality. It identifies areas that Cinteca can assess, contract, coordinate and govern with technical accountability.",
      items: enCapabilities,
    },
    products: {
      label: "Products",
      title: "Products with their own identity.",
      intro: "Each product addresses a specific context and has its own domain, communication and value proposition.",
      items: [
        { name: "NordixBIOS", code: "AGENTIC AI FACTORY", url: productUrls.nordixBios, tag: "Latest project", description: "Agentic AI Factory: connects to your software — ERP, CRM, POS or vertical SaaS — and provides the full infrastructure to create and operate AI workers across every layer, under your brand." },
        { name: "LegalNeuron", code: "LEGAL AI", url: productUrls.legalNeuron, description: "Artificial intelligence and management software for legal professionals and law firms. It supports the analysis, review and automation of legal documents and processes." },        { name: "NCS Engine", code: "AI INFRASTRUCTURE", url: productUrls.ncsEngine, description: "Secure infrastructure for deploying and operating artificial intelligence in cloud, local and hybrid environments." },
      ],
    },
    contact: {
      label: "Contact",
      title: "Protected contact.",
      intro: "Send your enquiry through this protected channel. Your email address and our destination mailbox are never published on the website.",
      formLabel: "Communication record",
      protectedLabel: "Protected by Cloudflare Turnstile",
      name: "Name",
      email: "Your email",
      company: "Company",
      optional: "Optional",
      subject: "Subject",
      message: "Message",
      privacyAcknowledgement: "I have read the privacy information for this contact channel.",
      privacyLink: "View privacy policy",
      verification: "Human verification",
      send: "Send securely",
      sending: "Sending…",
      success: "Your message has been sent securely. We will reply by email.",
      error: "The message could not be sent. Please review the fields and try again.",
      turnstileError: "Human verification expired or failed. Please try again.",
      configurationError: "The protected contact channel is not yet configured.",
    },
    legal: {
      label: "Legal notice",
      title: "Website owner details.",
      intro: "Information provided permanently, directly and free of charge in accordance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce.",
      facts: [["Legal name", "AD Caldas Innotec, S.A."], ["Tax ID", "A66316399"], ["Corporate relationship", "Cinteca is the technology brand of AD Caldas Innotec, S.A., the entity that owns this website and is responsible for its corporate activity."], ["Registered office", address], ["Commercial Registry", registry]],
      email: "Email",
      contactChannel: "Electronic contact",
      contactChannelValue: "Protected contact form available on this website",
      website: "Website",
      articles: [
        { title: "Purpose and access", body: "This website presents corporate information about AD Caldas Innotec, S.A., the Cinteca brand and its products. Access is open and free of charge. The information is general and does not constitute a contractual offer or professional advice." },
        { title: "Intellectual property", body: "The brands, names, texts and other content on this website belong to their respective owners. Their use in any way that could cause confusion about origin or ownership is not authorised." },
        { title: "External links", body: "Links to product websites lead to independent domains with their own terms and policies. AD Caldas Innotec, S.A. does not control third-party content linked from those websites." },
        { title: "Applicable law", body: "This website is governed by Spanish law. Any dispute will be subject to the courts and tribunals determined by applicable regulations." },
      ],
      fullDocuments: "Full legal documents of the group:",
    },
    privacy: {
      label: "Privacy",
      title: "Privacy policy.",
      intro: "This website uses no advertising or audience analytics. The contact form uses AWS infrastructure, SMTP delivery and Cloudflare Turnstile solely to receive enquiries and prevent abuse.",
      items: [
        { label: "Controller", title: "AD Caldas Innotec, S.A.", body: "Tax ID A66316399. Registered office and contact details are provided in the legal notice." },
        { label: "Data processed", title: "Only what is needed to respond.", body: "We process the name, email, company, subject and message you submit, together with limited technical data needed for Turnstile verification and service security." },
        { label: "Purpose and legal basis", title: "To respond to your communication.", body: "Data is used to answer enquiries or manage pre-contractual steps, based on your request and the legitimate interest in maintaining professional communications." },
        { label: "Retention", title: "For as long as necessary.", body: "Data will be retained while the communication is handled and afterwards for the periods required to meet legal obligations or possible liabilities." },
        { label: "Recipients", title: "No sale or commercial transfer.", body: "AWS, the configured email provider and Cloudflare Turnstile may process the data strictly as necessary service providers, subject to the corresponding safeguards." },
        { label: "Your rights", title: "Access, correction and control.", body: "You may request access, correction, deletion, objection, restriction or portability through the protected contact form. You may also lodge a complaint with the Spanish Data Protection Agency (AEPD)." },
      ],
      fullDocuments: "Full documents — privacy policy, terms of use and EULA:",
    },
    footer: { brandRelation: "Technology brand of AD Caldas Innotec, S.A.", noTracking: "No advertising or audience analytics.", contact: "Protected contact", legal: "Legal notice", privacy: "Privacy", legalCenter: "Legal center" },
  },
  es: {
    localeName: "Español",
    htmlLang: "es",
    metadata: { title: "Cinteca · AD Caldas Innotec, S.A.", description: "Sitio corporativo oficial de AD Caldas Innotec, S.A., titular de la marca Cinteca: productos de software, IA e infraestructura digital — NordixBIOS (Agentic AI Factory), LegalNeuron y NCS Engine." },
    languageLabel: "Idioma",
    navigationLabel: "Navegación principal",
    menuLabel: "Menú",
    nav: { company: "Empresa", capabilities: "Capacidades", products: "Productos", contact: "Contacto", legal: "Aviso legal", privacy: "Privacidad" },
    registryLabel: "Registro",
    hero: { eyebrow: "Sitio corporativo oficial", titlePre: "Tecnología aplicada,", titleAccent: "construida para operar.", intro: "Cinteca es la marca tecnológica de AD Caldas Innotec, S.A. La compañía desarrolla y gestiona productos de software, inteligencia artificial e infraestructura digital para profesionales y organizaciones.", ctaProducts: "Ver productos", ctaContact: "Contacto protegido", entity: "Entidad mercantil española", companyName: "Razón social", taxId: "NIF", registry: "Registro", contact: "Contacto", contactValue: "Canal protegido", completeIdentity: "Ver identificación completa" },
    status: ["Empresa activa", "Actividad tecnológica desde 2014", "Alcance global · Proyectos internacionales", "Productos con identidad propia"],
    statusLabel: "Estado de la empresa",
    company: {
      label: "La empresa", title: "Una entidad. Distintos productos tecnológicos.",
      paragraphs: ["AD Caldas Innotec, S.A. es una sociedad mercantil española dedicada a la prestación de servicios relacionados con las tecnologías de la información y la comunicación, incluyendo la creación, el desarrollo y la gestión de recursos web y aplicaciones de software.", "Cinteca identifica el núcleo tecnológico y corporativo del grupo. Bajo este marco se impulsan productos y marcas con identidad propia para ámbitos jurídicos, empresariales y de infraestructura. Esta estructura explica que el dominio corporativo y los productos anunciados puedan utilizar nombres diferentes sin dejar de formar parte del mismo ecosistema empresarial. Los proyectos ya se extienden a distintos países y los productos existentes están concebidos para una expansión global progresiva."],
      linkLabel: "Vinculación societaria", linkTitle: "Marca ↔ sociedad titular", linkBody: "Cinteca es la marca tecnológica y la identidad corporativa vinculada a AD Caldas Innotec, S.A., sociedad mercantil constituida en España con NIF A66316399. AD Caldas Innotec, S.A. es la entidad titular de este sitio y el marco societario desde el que se presenta la actividad tecnológica de Cinteca.", activitiesLabel: "Ámbitos de actividad",
      activities: [ { code: "INTELIGENCIA", title: "Agentic AI Factory", description: "Trabajadores IA, agentes, modelos y automatización inteligente." }, { code: "SOFTWARE", title: "Productos y plataformas", description: "Aplicaciones web, móviles y de escritorio, APIs e integraciones." },{ code: "INFRAESTRUCTURA", title: "Sistemas y operación", description: "Cloud, entornos locales e híbridos, redes y computación acelerada." }, { code: "INGENIERÍA", title: "Integración tecnológica", description: "Telecomunicaciones, automatización, electrónica y sistemas conectados." }],
    },
    capabilities: { label: "Capacidades", title: "Know-how completo, sin convertirlo en un currículum.", intro: "El mapa distingue la experiencia directamente consolidada de las disciplinas adyacentes que pueden ser dirigidas, integradas o administradas con especialistas según el alcance del proyecto.", direct: "Conocimiento directo", adjacent: "Dirección e integración", domains: "dominios", topics: "capacidades", topicCount: "temas", note: "“Dirección e integración” no pretende atribuir dominio individual de cada especialidad: identifica ámbitos que Cinteca puede evaluar, contratar, coordinar y gobernar con responsabilidad técnica.", items: esCapabilities },
    products: { label: "Productos", title: "Productos con identidad propia.", intro: "Cada producto responde a un contexto específico y dispone de su propio dominio, comunicación y propuesta de valor.", items: [ { name: "NordixBIOS", code: "AGENTIC AI FACTORY", url: productUrls.nordixBios, tag: "Proyecto más reciente", description: "Agentic AI Factory: se conecta a tu software — ERP, CRM, TPV o SaaS vertical — y pone la infraestructura completa para crear y operar trabajadores IA en todas las capas, con tu marca." },{ name: "LegalNeuron", code: "LEGAL AI", url: productUrls.legalNeuron, description: "Software de inteligencia artificial y gestión para profesionales del derecho y despachos. Facilita el análisis, la revisión y la automatización de documentos y procesos jurídicos." },{ name: "NCS Engine", code: "AI INFRASTRUCTURE", url: productUrls.ncsEngine, description: "Infraestructura segura para desplegar y operar inteligencia artificial en entornos cloud, locales e híbridos." }] },
    contact: { label: "Contacto", title: "Contacto protegido.", intro: "Envíe su consulta mediante este canal protegido. Su dirección de correo y nuestro buzón de destino no se publican en el sitio.", formLabel: "Registro de comunicación", protectedLabel: "Protegido por Cloudflare Turnstile", name: "Nombre", email: "Su correo electrónico", company: "Empresa", optional: "Opcional", subject: "Asunto", message: "Mensaje", privacyAcknowledgement: "He leído la información de privacidad de este canal de contacto.", privacyLink: "Ver política de privacidad", verification: "Verificación humana", send: "Enviar de forma segura", sending: "Enviando…", success: "Su mensaje se ha enviado de forma segura. Responderemos por correo electrónico.", error: "No se ha podido enviar el mensaje. Revise los campos e inténtelo de nuevo.", turnstileError: "La verificación humana ha caducado o ha fallado. Inténtelo de nuevo.", configurationError: "El canal de contacto protegido todavía no está configurado." },
    legal: {
      label: "Aviso legal", title: "Identificación del titular.", intro: "Información facilitada de forma permanente, directa y gratuita de conformidad con el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico.",
      facts: [["Denominación social", "AD Caldas Innotec, S.A."], ["NIF", "A66316399"], ["Vinculación societaria", "Cinteca es la marca tecnológica de AD Caldas Innotec, S.A., entidad titular del sitio y responsable de su actividad corporativa."], ["Domicilio social", address], ["Registro Mercantil", registry]], email: "Correo electrónico", contactChannel: "Contacto electrónico", contactChannelValue: "Formulario de contacto protegido disponible en este sitio", website: "Sitio web",
      articles: [{ title: "Objeto y acceso", body: "Este sitio presenta información corporativa sobre AD Caldas Innotec, S.A., la marca Cinteca y sus productos. El acceso es libre y gratuito. La información tiene carácter general y no constituye una oferta contractual ni asesoramiento profesional." }, { title: "Propiedad intelectual", body: "Las marcas, denominaciones, textos y demás contenidos de este sitio pertenecen a sus respectivos titulares. No se autoriza su uso de forma que pueda inducir a confusión sobre su origen o titularidad." }, { title: "Enlaces externos", body: "Los enlaces a los sitios de los productos conducen a dominios independientes, con sus propias condiciones y políticas. AD Caldas Innotec, S.A. no controla contenidos de terceros enlazados desde esos sitios." }, { title: "Legislación aplicable", body: "Este sitio se rige por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la normativa aplicable." }],
      fullDocuments: "Documentos legales completos del grupo:",
    },
    privacy: { label: "Privacidad", title: "Política de privacidad.", intro: "Este sitio no utiliza analítica publicitaria ni de audiencia. El formulario de contacto utiliza infraestructura de AWS, entrega SMTP y Cloudflare Turnstile exclusivamente para recibir consultas y prevenir abusos.", items: [{ label: "Responsable", title: "AD Caldas Innotec, S.A.", body: "NIF A66316399. Domicilio y contacto indicados en el aviso legal." }, { label: "Datos tratados", title: "Solo lo necesario para responder.", body: "Tratamos el nombre, correo, empresa, asunto y mensaje que envíe, junto con datos técnicos limitados necesarios para la verificación Turnstile y la seguridad del servicio." }, { label: "Finalidad y base jurídica", title: "Atender su comunicación.", body: "Los datos se utilizan para responder consultas o gestionar medidas precontractuales, sobre la base de su solicitud y del interés legítimo en mantener comunicaciones profesionales." }, { label: "Conservación", title: "Durante el tiempo necesario.", body: "Se conservarán mientras se atiende la comunicación y, después, durante los plazos exigidos para cumplir obligaciones legales o atender posibles responsabilidades." }, { label: "Destinatarios", title: "Sin venta ni cesión comercial.", body: "AWS, el proveedor de correo configurado y Cloudflare Turnstile pueden tratar los datos únicamente como proveedores necesarios y con las garantías correspondientes." }, { label: "Sus derechos", title: "Acceso, rectificación y control.", body: "Puede solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad mediante el formulario protegido. También puede reclamar ante la Agencia Española de Protección de Datos (AEPD)." }], fullDocuments: "Documentos completos — política de privacidad, términos de uso y EULA:" },
    footer: { brandRelation: "Marca tecnológica de AD Caldas Innotec, S.A.", noTracking: "Sin analítica publicitaria ni de audiencia.", contact: "Contacto protegido", legal: "Aviso legal", privacy: "Privacidad", legalCenter: "Centro legal" },
  },
  pt: {
    localeName: "Português",
    htmlLang: "pt",
    metadata: { title: "Cinteca · AD Caldas Innotec, S.A.", description: "Site corporativo oficial da AD Caldas Innotec, S.A., titular da marca Cinteca: produtos de software, IA e infraestrutura digital — NordixBIOS (Agentic AI Factory), LegalNeuron e NCS Engine." },
    languageLabel: "Idioma",
    navigationLabel: "Navegação principal",
    menuLabel: "Menu",
    nav: { company: "Empresa", capabilities: "Competências", products: "Produtos", contact: "Contato", legal: "Aviso legal", privacy: "Privacidade" },
    registryLabel: "Registro",
    hero: { eyebrow: "Site corporativo oficial", titlePre: "Tecnologia aplicada,", titleAccent: "construída para operar.", intro: "Cinteca é a marca tecnológica da AD Caldas Innotec, S.A. A empresa desenvolve e gerencia produtos de software, inteligência artificial e infraestrutura digital para profissionais e organizações.", ctaProducts: "Ver produtos", ctaContact: "Contato protegido", entity: "Sociedade mercantil espanhola", companyName: "Razão social", taxId: "NIF", registry: "Registro", contact: "Contato", contactValue: "Canal protegido", completeIdentity: "Ver identificação completa" },
    status: ["Empresa ativa", "Atividade tecnológica desde 2014", "Atuação global · Projetos internacionais", "Produtos com identidade própria"],
    statusLabel: "Estado da empresa",
    company: {
      label: "A empresa", title: "Uma entidade. Diferentes produtos tecnológicos.",
      paragraphs: ["AD Caldas Innotec, S.A. é uma sociedade mercantil espanhola dedicada à prestação de serviços relacionados às tecnologias da informação e comunicação, incluindo a criação, o desenvolvimento e a gestão de recursos web e aplicações de software.", "Cinteca identifica o núcleo tecnológico e corporativo do grupo. Sob essa estrutura são desenvolvidos produtos e marcas com identidade própria para os setores jurídico, empresarial e de infraestrutura. Isso explica por que o domínio corporativo e os produtos anunciados podem usar nomes diferentes e ainda fazer parte do mesmo ecossistema empresarial. Os projetos já abrangem diferentes países, e os produtos existentes são concebidos para uma expansão global progressiva."],
      linkLabel: "Vínculo societário", linkTitle: "Marca ↔ sociedade titular", linkBody: "Cinteca é a marca tecnológica e a identidade corporativa vinculada à AD Caldas Innotec, S.A., sociedade mercantil constituída na Espanha com NIF A66316399. A AD Caldas Innotec, S.A. é a entidade titular deste site e a estrutura societária a partir da qual a atividade tecnológica da Cinteca é apresentada.", activitiesLabel: "Áreas de atuação",
      activities: [ { code: "INTELIGÊNCIA", title: "Agentic AI Factory", description: "Trabalhadores de IA, agentes, modelos e automação inteligente." }, { code: "SOFTWARE", title: "Produtos e plataformas", description: "Aplicações web, móveis e desktop, APIs e integrações." },{ code: "INFRAESTRUTURA", title: "Sistemas e operação", description: "Cloud, ambientes locais e híbridos, redes e computação acelerada." }, { code: "ENGENHARIA", title: "Integração tecnológica", description: "Telecomunicações, automação, eletrônica e sistemas conectados." }],
    },
    capabilities: { label: "Competências", title: "Know-how completo, sem transformá-lo em um currículo.", intro: "O mapa separa a experiência diretamente consolidada das disciplinas relacionadas que podem ser dirigidas, integradas ou administradas com especialistas conforme o escopo de cada projeto.", direct: "Conhecimento direto", adjacent: "Direção e integração", domains: "domínios", topics: "competências", topicCount: "temas", note: "“Direção e integração” não pretende atribuir domínio individual de cada especialidade. Identifica áreas que a Cinteca pode avaliar, contratar, coordenar e governar com responsabilidade técnica.", items: ptCapabilities },
    products: { label: "Produtos", title: "Produtos com identidade própria.", intro: "Cada produto responde a um contexto específico e possui domínio, comunicação e proposta de valor próprios.", items: [ { name: "NordixBIOS", code: "AGENTIC AI FACTORY", url: productUrls.nordixBios, tag: "Projeto mais recente", description: "Agentic AI Factory: conecta-se ao seu software — ERP, CRM, POS ou SaaS vertical — e fornece a infraestrutura completa para criar e operar trabalhadores de IA em todas as camadas, com a sua marca." },{ name: "LegalNeuron", code: "LEGAL AI", url: productUrls.legalNeuron, description: "Software de inteligência artificial e gestão para profissionais do direito e escritórios. Facilita a análise, revisão e automação de documentos e processos jurídicos." },{ name: "NCS Engine", code: "AI INFRASTRUCTURE", url: productUrls.ncsEngine, description: "Infraestrutura segura para implantar e operar inteligência artificial em ambientes cloud, locais e híbridos." }] },
    contact: { label: "Contato", title: "Contato protegido.", intro: "Envie sua consulta por este canal protegido. Seu e-mail e nossa caixa de destino nunca são publicados no site.", formLabel: "Registro de comunicação", protectedLabel: "Protegido por Cloudflare Turnstile", name: "Nome", email: "Seu e-mail", company: "Empresa", optional: "Opcional", subject: "Assunto", message: "Mensagem", privacyAcknowledgement: "Li as informações de privacidade deste canal de contato.", privacyLink: "Ver política de privacidade", verification: "Verificação humana", send: "Enviar com segurança", sending: "Enviando…", success: "Sua mensagem foi enviada com segurança. Responderemos por e-mail.", error: "Não foi possível enviar a mensagem. Revise os campos e tente novamente.", turnstileError: "A verificação humana expirou ou falhou. Tente novamente.", configurationError: "O canal de contato protegido ainda não está configurado." },
    legal: {
      label: "Aviso legal", title: "Identificação do titular.", intro: "Informação disponibilizada de forma permanente, direta e gratuita em conformidade com o artigo 10 da Lei espanhola 34/2002, de Serviços da Sociedade da Informação e Comércio Eletrônico.",
      facts: [["Razão social", "AD Caldas Innotec, S.A."], ["NIF", "A66316399"], ["Vínculo societário", "Cinteca é a marca tecnológica da AD Caldas Innotec, S.A., entidade titular do site e responsável por sua atividade corporativa."], ["Sede social", address], ["Registro Mercantil", registry]], email: "E-mail", contactChannel: "Contato eletrônico", contactChannelValue: "Formulário de contato protegido disponível neste site", website: "Site",
      articles: [{ title: "Objeto e acesso", body: "Este site apresenta informações corporativas sobre a AD Caldas Innotec, S.A., a marca Cinteca e seus produtos. O acesso é livre e gratuito. As informações são gerais e não constituem oferta contratual nem aconselhamento profissional." }, { title: "Propriedade intelectual", body: "As marcas, denominações, textos e demais conteúdos deste site pertencem aos seus respectivos titulares. Não é autorizado seu uso de forma que possa causar confusão sobre sua origem ou titularidade." }, { title: "Links externos", body: "Os links para os sites dos produtos levam a domínios independentes, com seus próprios termos e políticas. A AD Caldas Innotec, S.A. não controla conteúdos de terceiros vinculados a partir desses sites." }, { title: "Legislação aplicável", body: "Este site é regido pela legislação espanhola. Qualquer controvérsia será submetida aos tribunais competentes conforme a regulamentação aplicável." }],
      fullDocuments: "Documentos legais completos do grupo:",
    },
    privacy: { label: "Privacidade", title: "Política de privacidade.", intro: "Este site não utiliza analytics de publicidade ou audiência. O formulário de contato utiliza infraestrutura AWS, entrega SMTP e Cloudflare Turnstile exclusivamente para receber consultas e prevenir abusos.", items: [{ label: "Responsável", title: "AD Caldas Innotec, S.A.", body: "NIF A66316399. Sede e contato indicados no aviso legal." }, { label: "Dados tratados", title: "Somente o necessário para responder.", body: "Tratamos o nome, e-mail, empresa, assunto e mensagem enviados, além de dados técnicos limitados necessários para a verificação Turnstile e a segurança do serviço." }, { label: "Finalidade e base jurídica", title: "Atender à sua comunicação.", body: "Os dados são utilizados para responder consultas ou administrar medidas pré-contratuais, com base em sua solicitação e no interesse legítimo de manter comunicações profissionais." }, { label: "Conservação", title: "Durante o tempo necessário.", body: "Os dados serão conservados enquanto a comunicação for atendida e, depois, pelos prazos exigidos para cumprir obrigações legais ou possíveis responsabilidades." }, { label: "Destinatários", title: "Sem venda ou cessão comercial.", body: "AWS, o provedor de e-mail configurado e o Cloudflare Turnstile podem tratar os dados somente como fornecedores necessários e sujeitos às garantias correspondentes." }, { label: "Seus direitos", title: "Acesso, retificação e controle.", body: "Você pode solicitar acesso, retificação, exclusão, oposição, limitação ou portabilidade pelo formulário protegido. Também pode reclamar perante a Agência Espanhola de Proteção de Dados (AEPD)." }], fullDocuments: "Documentos completos — política de privacidade, termos de uso e EULA:" },
    footer: { brandRelation: "Marca tecnológica da AD Caldas Innotec, S.A.", noTracking: "Sem analytics de publicidade ou audiência.", contact: "Contato protegido", legal: "Aviso legal", privacy: "Privacidade", legalCenter: "Centro legal" },
  },
  nb: {
    localeName: "Norsk bokmål",
    htmlLang: "nb",
    metadata: { title: "Cinteca · AD Caldas Innotec, S.A.", description: "Det offisielle firmanettstedet til AD Caldas Innotec, S.A., eier av merket Cinteca: programvareprodukter, KI og digital infrastruktur — NordixBIOS (Agentic AI Factory), LegalNeuron og NCS Engine." },
    languageLabel: "Språk",
    navigationLabel: "Hovednavigasjon",
    menuLabel: "Meny",
    nav: { company: "Selskapet", capabilities: "Kompetanse", products: "Produkter", contact: "Kontakt", legal: "Juridisk informasjon", privacy: "Personvern" },
    registryLabel: "Register",
    hero: { eyebrow: "Offisielt firmanettsted", titlePre: "Anvendt teknologi,", titleAccent: "bygget for drift.", intro: "Cinteca er teknologimerket til AD Caldas Innotec, S.A. Selskapet utvikler og forvalter programvareprodukter, kunstig intelligens og digital infrastruktur for fagpersoner og virksomheter.", ctaProducts: "Se produktene", ctaContact: "Beskyttet kontakt", entity: "Spansk aksjeselskap", companyName: "Juridisk navn", taxId: "Skatte-ID", registry: "Register", contact: "Kontakt", contactValue: "Beskyttet kanal", completeIdentity: "Se fullstendige selskapsopplysninger" },
    status: ["Aktivt selskap", "Teknologivirksomhet siden 2014", "Globalt virkeområde · Internasjonale prosjekter", "Produkter med egen identitet"],
    statusLabel: "Selskapsstatus",
    company: {
      label: "Selskapet", title: "Ett selskap. Ulike teknologiprodukter.",
      paragraphs: ["AD Caldas Innotec, S.A. er et spansk aksjeselskap som leverer tjenester innen informasjons- og kommunikasjonsteknologi, inkludert utvikling og forvaltning av nettressurser og programvareapplikasjoner.", "Cinteca representerer konsernets teknologiske og selskapsmessige kjerne. Innenfor denne rammen utvikles produkter og merkevarer med egen identitet for juridiske, forretningsmessige og infrastrukturelle områder. Dette forklarer hvorfor selskapsdomenet og produktene kan ha ulike navn og fortsatt tilhøre samme virksomhetsøkosystem. Prosjektene omfatter allerede flere land, og de eksisterende produktene er utviklet med sikte på gradvis global ekspansjon."],
      linkLabel: "Selskapsforbindelse", linkTitle: "Merke ↔ eierselskap", linkBody: "Cinteca er teknologimerket og den selskapsmessige identiteten knyttet til AD Caldas Innotec, S.A., et selskap stiftet i Spania med skatte-ID A66316399. AD Caldas Innotec, S.A. eier dette nettstedet og er den selskapsmessige rammen for presentasjonen av Cintecas teknologivirksomhet.", activitiesLabel: "Virksomhetsområder",
      activities: [ { code: "INTELLIGENS", title: "Agentic AI Factory", description: "KI-arbeidere, agenter, modeller og intelligent automatisering." }, { code: "PROGRAMVARE", title: "Produkter og plattformer", description: "Web-, mobil- og skrivebordsapplikasjoner, API-er og integrasjoner." },{ code: "INFRASTRUKTUR", title: "Systemer og drift", description: "Sky, lokale og hybride miljøer, nettverk og akselerert databehandling." }, { code: "INGENIØRFAG", title: "Teknologiintegrasjon", description: "Telekommunikasjon, automatisering, elektronikk og tilkoblede systemer." }],
    },
    capabilities: { label: "Kompetanse", title: "Komplett know-how, uten å gjøre den om til en CV.", intro: "Oversikten skiller mellom direkte etablert erfaring og tilgrensende fagområder som kan ledes, integreres eller administreres sammen med spesialister ut fra prosjektets omfang.", direct: "Direkte kunnskap", adjacent: "Ledelse og integrasjon", domains: "domener", topics: "kompetanseområder", topicCount: "temaer", note: "«Ledelse og integrasjon» innebærer ikke påstand om individuell ekspertise i alle fagområder. Det viser områder Cinteca kan vurdere, kontrahere, koordinere og styre med teknisk ansvar.", items: nbCapabilities },
    products: { label: "Produkter", title: "Produkter med egen identitet.", intro: "Hvert produkt dekker en bestemt kontekst og har eget domene, kommunikasjon og verdiforslag.", items: [ { name: "NordixBIOS", code: "AGENTIC AI FACTORY", url: productUrls.nordixBios, tag: "Nyeste prosjekt", description: "Agentic AI Factory: kobles til programvaren din — ERP, CRM, kasse eller vertikal SaaS — og leverer full infrastruktur for å skape og drifte KI-arbeidere i alle lag, under din merkevare." },{ name: "LegalNeuron", code: "LEGAL AI", url: productUrls.legalNeuron, description: "Programvare for kunstig intelligens og administrasjon for jurister og advokatfirmaer. Den støtter analyse, gjennomgang og automatisering av juridiske dokumenter og prosesser." },{ name: "NCS Engine", code: "AI INFRASTRUCTURE", url: productUrls.ncsEngine, description: "Sikker infrastruktur for utrulling og drift av kunstig intelligens i skybaserte, lokale og hybride miljøer." }] },
    contact: { label: "Kontakt", title: "Beskyttet kontakt.", intro: "Send henvendelsen gjennom denne beskyttede kanalen. Din e-postadresse og vår mottakeradresse publiseres aldri på nettstedet.", formLabel: "Kommunikasjonsregister", protectedLabel: "Beskyttet av Cloudflare Turnstile", name: "Navn", email: "Din e-post", company: "Selskap", optional: "Valgfritt", subject: "Emne", message: "Melding", privacyAcknowledgement: "Jeg har lest personverninformasjonen for denne kontaktkanalen.", privacyLink: "Se personvernerklæringen", verification: "Menneskelig verifisering", send: "Send sikkert", sending: "Sender…", success: "Meldingen er sendt sikkert. Vi svarer på e-post.", error: "Meldingen kunne ikke sendes. Kontroller feltene og prøv igjen.", turnstileError: "Den menneskelige verifiseringen utløp eller mislyktes. Prøv igjen.", configurationError: "Den beskyttede kontaktkanalen er ennå ikke konfigurert." },
    legal: {
      label: "Juridisk informasjon", title: "Opplysninger om nettstedets eier.", intro: "Informasjonen gis permanent, direkte og kostnadsfritt i samsvar med artikkel 10 i den spanske loven 34/2002 om informasjonssamfunnstjenester og elektronisk handel.",
      facts: [["Juridisk navn", "AD Caldas Innotec, S.A."], ["Skatte-ID", "A66316399"], ["Selskapsforbindelse", "Cinteca er teknologimerket til AD Caldas Innotec, S.A., enheten som eier nettstedet og er ansvarlig for den selskapsmessige virksomheten."], ["Forretningsadresse", address], ["Foretaksregister", registry]], email: "E-post", contactChannel: "Elektronisk kontakt", contactChannelValue: "Beskyttet kontaktskjema tilgjengelig på dette nettstedet", website: "Nettsted",
      articles: [{ title: "Formål og tilgang", body: "Dette nettstedet presenterer selskapsinformasjon om AD Caldas Innotec, S.A., merket Cinteca og produktene. Tilgangen er åpen og kostnadsfri. Informasjonen er generell og utgjør ikke et kontraktsmessig tilbud eller profesjonell rådgivning." }, { title: "Immaterielle rettigheter", body: "Merker, navn, tekster og annet innhold på nettstedet tilhører sine respektive eiere. Bruk som kan skape forvirring om opprinnelse eller eierskap, er ikke tillatt." }, { title: "Eksterne lenker", body: "Lenker til produktnettsteder fører til uavhengige domener med egne vilkår og retningslinjer. AD Caldas Innotec, S.A. kontrollerer ikke tredjepartsinnhold som lenkes fra disse nettstedene." }, { title: "Gjeldende lov", body: "Nettstedet er underlagt spansk lov. Eventuelle tvister behandles av domstolene som følger av gjeldende regelverk." }],
      fullDocuments: "Konsernets fullstendige juridiske dokumenter:",
    },
    privacy: { label: "Personvern", title: "Personvernerklæring.", intro: "Nettstedet bruker ingen annonse- eller publikumsanalyse. Kontaktskjemaet bruker AWS-infrastruktur, SMTP-levering og Cloudflare Turnstile utelukkende for å motta henvendelser og hindre misbruk.", items: [{ label: "Behandlingsansvarlig", title: "AD Caldas Innotec, S.A.", body: "Skatte-ID A66316399. Forretningsadresse og kontaktopplysninger finnes i den juridiske informasjonen." }, { label: "Data som behandles", title: "Bare det som er nødvendig for å svare.", body: "Vi behandler navn, e-post, selskap, emne og melding du sender, sammen med begrensede tekniske data som er nødvendige for Turnstile-verifisering og tjenestens sikkerhet." }, { label: "Formål og rettslig grunnlag", title: "Å besvare henvendelsen.", body: "Data brukes til å besvare spørsmål eller håndtere tiltak før avtaleinngåelse, basert på din forespørsel og den berettigede interessen i profesjonell kommunikasjon." }, { label: "Lagring", title: "Så lenge det er nødvendig.", body: "Data lagres mens henvendelsen behandles og deretter i periodene som kreves for å oppfylle rettslige forpliktelser eller håndtere mulig ansvar." }, { label: "Mottakere", title: "Ingen salg eller kommersiell overføring.", body: "AWS, den konfigurerte e-postleverandøren og Cloudflare Turnstile kan behandle data bare som nødvendige leverandører og underlagt egnede garantier." }, { label: "Dine rettigheter", title: "Innsyn, retting og kontroll.", body: "Du kan be om innsyn, retting, sletting, protest, begrensning eller dataportabilitet via det beskyttede skjemaet. Du kan også klage til det spanske datatilsynet (AEPD)." }], fullDocuments: "Fullstendige dokumenter — personvernerklæring, bruksvilkår og EULA:" },
    footer: { brandRelation: "Teknologimerket til AD Caldas Innotec, S.A.", noTracking: "Ingen annonse- eller publikumsanalyse.", contact: "Beskyttet kontakt", legal: "Juridisk informasjon", privacy: "Personvern", legalCenter: "Juridisk senter" },
  },
};

export function resolveLocale(languageTags: readonly string[]): Locale {
  for (const languageTag of languageTags) {
    const normalised = languageTag.trim().toLowerCase();
    const base = normalised.split("-")[0];

    if (base === "pt" || base === "en" || base === "es") return base;
    if (base === "nb" || base === "no") return "nb";
  }

  return "en";
}
