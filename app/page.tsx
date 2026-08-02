import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Engenharia aplicada, software, inteligência artificial, telecomunicações, automação e infraestrutura para transformar complexidade em sistemas confiáveis.",
  alternates: {
    canonical: "https://cinteca.es",
  },
};

const knowledgeDomains = [
  {
    code: "DIR",
    title: "Direção e estratégia tecnológica",
    intro:
      "Tecnologia alinhada ao negócio, com decisões claras sobre arquitetura, investimento, risco e evolução.",
    topics: [
      "Estratégia de TI",
      "Roadmaps tecnológicos",
      "Arquitetura corporativa",
      "Due diligence técnica",
      "Governança de TI",
      "Gestão de portfólio",
      "Orçamento e FinOps",
      "Seleção de fornecedores",
      "Contratos e SLAs",
      "ITSM e operação",
      "Gestão de equipas",
      "Transformação digital",
    ],
  },
  {
    code: "SWE",
    title: "Engenharia de software",
    intro:
      "Produtos, plataformas e integrações desenhados para crescer sem perder clareza, desempenho ou segurança.",
    topics: [
      "Arquitetura de sistemas",
      "Backend e frontend",
      "APIs e integrações",
      "Microsserviços",
      "Sistemas distribuídos",
      "Bases SQL e NoSQL",
      "Mensageria e eventos",
      "Testes e qualidade",
      "Modernização de legados",
      "SaaS e plataformas",
      "Open source",
      "Documentação técnica",
    ],
  },
  {
    code: "AIM",
    title: "IA, dados e processamento de sinais",
    intro:
      "Da investigação algorítmica à aplicação prática de modelos em dados, sinais, imagens, texto e séries temporais.",
    topics: [
      "Machine learning",
      "Deep learning",
      "Processamento digital de sinais",
      "Visão computacional",
      "Áudio e voz",
      "Séries temporais",
      "Otimização",
      "LLMs e agentes",
      "RAG e busca semântica",
      "MLOps e LLMOps",
      "Pipelines de dados",
      "Inferência em edge",
    ],
  },
  {
    code: "GPU",
    title: "Computação acelerada",
    intro:
      "Ambientes de alto desempenho para treino, inferência, simulação e cargas paralelas.",
    topics: [
      "GPUs e clusters",
      "PODs de computação",
      "Orquestração de cargas",
      "CUDA e aceleração",
      "Treino distribuído",
      "Serving de modelos",
      "Otimização de memória",
      "Contêineres para IA",
      "Observabilidade de GPU",
      "Capacidade e custos",
      "HPC",
      "Edge AI",
    ],
  },
  {
    code: "TEL",
    title: "Redes e telecomunicações",
    intro:
      "Conectividade local, distribuída e crítica — do meio físico à visibilidade operacional.",
    topics: [
      "LAN, WAN e SD-WAN",
      "Wi-Fi corporativo",
      "TCP/IP, BGP e OSPF",
      "VLAN, VPN e QoS",
      "VoIP, SIP e UC",
      "Fibra e rádio",
      "4G, 5G e IoT",
      "DNS, DHCP e IPAM",
      "Balanceamento e CDN",
      "Monitorização de rede",
      "Redundância",
      "NOC e gestão de operadoras",
    ],
  },
  {
    code: "CLD",
    title: "Cloud, plataformas e DevOps",
    intro:
      "Infraestruturas reproduzíveis e observáveis em ambientes locais, híbridos ou multicloud.",
    topics: [
      "AWS, Azure e Google Cloud",
      "Cloud híbrida e multicloud",
      "Linux e Windows Server",
      "Contêineres e Kubernetes",
      "CI/CD",
      "Infraestrutura como código",
      "Platform engineering",
      "SRE e observabilidade",
      "Logs, métricas e traces",
      "Virtualização",
      "Armazenamento e backup",
      "FinOps e otimização",
    ],
  },
  {
    code: "SEC",
    title: "Segurança e continuidade",
    intro:
      "Proteção incorporada ao desenho, à operação e à recuperação dos sistemas.",
    topics: [
      "Security by design",
      "IAM e acesso privilegiado",
      "Zero Trust",
      "Hardening",
      "Segurança de redes",
      "Segurança cloud",
      "Gestão de vulnerabilidades",
      "SIEM e resposta a incidentes",
      "Backup e disaster recovery",
      "Continuidade de negócio",
      "Privacidade e RGPD",
      "Políticas e auditoria",
    ],
  },
  {
    code: "EMB",
    title: "Eletrónica e sistemas embarcados",
    intro:
      "Software e hardware encontram-se em dispositivos, sensores e equipamentos conectados.",
    topics: [
      "Microcontroladores",
      "Firmware e embedded C/C++",
      "RTOS",
      "Sensores e atuadores",
      "Instrumentação",
      "Aquisição de dados",
      "Eletrónica analógica e digital",
      "Interfaces e barramentos",
      "Prototipagem de PCB",
      "Fontes e potência",
      "FPGA e lógica programável",
      "Testes de bancada",
    ],
  },
  {
    code: "AUT",
    title: "Automação industrial e residencial",
    intro:
      "Controlo, telemetria e integração para instalações, máquinas e edifícios inteligentes.",
    topics: [
      "CLPs e controlo",
      "SCADA e HMI",
      "Modbus e OPC UA",
      "MQTT e telemetria",
      "BACnet e KNX",
      "CAN e redes industriais",
      "Home Assistant",
      "Matter, Zigbee e Z-Wave",
      "Eficiência energética",
      "Controlo de motores",
      "Manutenção preditiva",
      "IIoT e edge computing",
    ],
  },
  {
    code: "APP",
    title: "Aplicações multiplataforma",
    intro:
      "Experiências consistentes em web, desktop, dispositivos móveis e ambientes especializados.",
    topics: [
      "Web apps e PWAs",
      "Windows, Linux e macOS",
      "Android e iOS",
      "Aplicações nativas e híbridas",
      "Offline-first",
      "Sincronização de dados",
      "Integração com hardware",
      "UX e acessibilidade",
      "Distribuição e atualizações",
      "Telemetria de produto",
      "Desempenho",
      "Internacionalização",
    ],
  },
  {
    code: "OPS",
    title: "Operação e serviços geridos",
    intro:
      "Ambientes acompanhados de ponta a ponta, próprios ou de terceiros, com responsabilidade operacional clara.",
    topics: [
      "Administração de sistemas",
      "Service desk e suporte",
      "Monitorização 24×7",
      "Gestão de capacidade",
      "Patching e ciclo de vida",
      "Gestão de ativos",
      "Runbooks e automação",
      "SLIs, SLOs e SLAs",
      "Gestão de incidentes",
      "Problem management",
      "Migrações",
      "Operação de terceiros",
    ],
  },
  {
    code: "DIG",
    title: "Presença digital e crescimento",
    intro:
      "Tecnologia, conteúdo e medição integrados para transformar presença digital em resultados.",
    topics: [
      "Sites e e-commerce",
      "SEO técnico e editorial",
      "GEO e LLMO",
      "Publicidade paga",
      "Analytics e atribuição",
      "CRO e experimentação",
      "Mídias e redes sociais",
      "Automação de marketing",
      "CRM e fidelização",
      "Tag management",
      "Dados estruturados",
      "Performance web",
    ],
  },
];

const ownedProjects = [
  "cinte.com.br",
  "legalneuron.es",
  "legalneuron.com.br",
  "nordixbios.com",
  "ncsengine.com",
  "nordixsystems.com",
];

const thirdPartyProjects = ["plorea.com", "grupolaeras.com", "innocardloyalty.ch"];

const method = [
  {
    verb: "Enquadrar",
    text: "Objetivo, contexto, risco, restrições e critérios de sucesso antes da escolha de ferramentas.",
  },
  {
    verb: "Arquitetar",
    text: "Desenho do sistema completo, das integrações e da operação futura — sem silos artificiais.",
  },
  {
    verb: "Construir",
    text: "Implementação incremental com qualidade verificável, documentação e transferência de conhecimento.",
  },
  {
    verb: "Operar",
    text: "Observabilidade, segurança, continuidade e responsabilidade sobre o que está em produção.",
  },
  {
    verb: "Evoluir",
    text: "Medição contínua para reduzir fricção, custo e risco enquanto a capacidade aumenta.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cinteca",
  url: "https://cinteca.es",
  description:
    "Engenharia aplicada, software, inteligência artificial, telecomunicações, automação e infraestrutura.",
  areaServed: ["Europe", "Brazil", "Remote"],
  knowsAbout: knowledgeDomains.flatMap((domain) => domain.topics),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Cinteca — início">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>cinteca</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#conhecimento">Conhecimento</a>
          <a href="#metodo">Método</a>
          <a href="#projetos">Projetos</a>
          <a className="nav-contact" href="#contacto">
            Falar connosco
          </a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação móvel">
            <a href="#conhecimento">Conhecimento</a>
            <a href="#metodo">Método</a>
            <a href="#projetos">Projetos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            Engenharia aplicada <span>•</span> Tecnologia sem silos
          </p>
          <h1>
            Complexidade
            <span className="hero-shift">conectada.</span>
            <span className="hero-accent">Soluções que funcionam.</span>
          </h1>
          <p className="hero-intro">
            A Cinteca integra estratégia, software, IA, telecomunicações,
            eletrónica, automação e infraestrutura para construir sistemas
            completos — do sinal ao negócio.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#conhecimento">
              Explorar capacidades
              <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="#contacto">
              Colocar um desafio
            </a>
          </div>
        </div>

        <div className="system-map" aria-label="Mapa dos domínios tecnológicos da Cinteca">
          <div className="map-grid" aria-hidden="true" />
          <div className="map-line map-line-a" aria-hidden="true" />
          <div className="map-line map-line-b" aria-hidden="true" />
          <div className="map-line map-line-c" aria-hidden="true" />
          <div className="map-core">
            <span className="core-pulse" aria-hidden="true" />
            <strong>cin</strong>
            <small>integração</small>
          </div>
          <a className="map-node node-ai" href="#domain-AIM">
            <span>AIM</span> IA + sinais
          </a>
          <a className="map-node node-cloud" href="#domain-CLD">
            <span>CLD</span> cloud + ops
          </a>
          <a className="map-node node-tel" href="#domain-TEL">
            <span>TEL</span> redes + telecom
          </a>
          <a className="map-node node-embedded" href="#domain-EMB">
            <span>EMB</span> eletrónica
          </a>
          <a className="map-node node-auto" href="#domain-AUT">
            <span>AUT</span> automação
          </a>
          <a className="map-node node-software" href="#domain-SWE">
            <span>SWE</span> software
          </a>
          <p className="map-caption">Um sistema. Muitos níveis de decisão.</p>
        </div>
      </section>

      <section className="proof-strip" aria-label="Princípios de atuação">
        <p>Visão de ponta a ponta</p>
        <p>Independência tecnológica</p>
        <p>Execução + operação</p>
        <p>Europa · Brasil · remoto</p>
      </section>

      <section className="section knowledge" id="conhecimento">
        <div className="section-heading">
          <p className="section-kicker">Mapa de conhecimento</p>
          <h2>Da estratégia ao circuito.</h2>
          <p>
            A competência mais valiosa não é conhecer uma ferramenta isolada.
            É saber como as peças influenciam umas às outras — e coordenar a
            profundidade certa para cada projeto.
          </p>
        </div>

        <div className="knowledge-guide">
          <span>{knowledgeDomains.length} territórios conectados</span>
          <span>Abra cada campo para ver o alcance</span>
        </div>

        <div className="knowledge-grid">
          {knowledgeDomains.map((domain) => (
            <details className="knowledge-card" id={`domain-${domain.code}`} key={domain.code}>
              <summary>
                <span className="domain-code">{domain.code}</span>
                <span className="domain-title">{domain.title}</span>
                <span className="domain-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="domain-content">
                <p>{domain.intro}</p>
                <ul>
                  {domain.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        <p className="scope-note">
          Este mapa descreve o território que a Cinteca pode liderar, executar
          ou coordenar. A composição de especialistas e parceiros adapta-se à
          escala, ao risco e à natureza de cada desafio.
        </p>
      </section>

      <section className="section origin">
        <div className="origin-statement">
          <span className="signal-label">2003 → hoje</span>
          <p>
            Uma base construída entre engenharia elétrica, engenharia da
            computação e investigação em processamento digital de sinais —
            ampliada por décadas de sistemas reais, liderança tecnológica e
            operação crítica.
          </p>
        </div>
        <div className="origin-side">
          <p>
            A Cinteca não é um currículo em formato de site. É a síntese de uma
            forma de trabalhar: compreender o sistema inteiro, dominar o que é
            essencial e reunir a capacidade certa para entregar.
          </p>
        </div>
      </section>

      <section className="section method" id="metodo">
        <div className="section-heading method-heading">
          <p className="section-kicker">Como trabalhamos</p>
          <h2>Responsabilidade por todo o ciclo.</h2>
        </div>

        <ol className="method-list">
          {method.map((item, index) => (
            <li key={item.verb}>
              <span className="method-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.verb}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="principles">
          <article>
            <span aria-hidden="true">↗</span>
            <h3>Neutra por desenho</h3>
            <p>
              A tecnologia serve ao problema. Fabricantes, clouds e stacks são
              escolhidos por adequação, não por preferência automática.
            </p>
          </article>
          <article>
            <span aria-hidden="true">◎</span>
            <h3>Operável desde o início</h3>
            <p>
              Segurança, custos, observabilidade, suporte e continuidade entram
              na arquitetura — não depois dela.
            </p>
          </article>
          <article>
            <span aria-hidden="true">≈</span>
            <h3>Profundidade coordenada</h3>
            <p>
              Competência própria onde importa, especialistas quando acrescentam
              valor e uma visão única a ligar tudo.
            </p>
          </article>
        </div>
      </section>

      <section className="section projects" id="projetos">
        <div className="section-heading projects-heading">
          <p className="section-kicker">Ecossistema de projetos</p>
          <h2>Ideias próprias. Contextos diversos.</h2>
          <p>
            Produtos, plataformas e presenças digitais que materializam esta
            capacidade em diferentes setores e modelos de colaboração.
          </p>
        </div>

        <div className="project-columns">
          <div className="project-group owned">
            <div className="project-group-heading">
              <span>01</span>
              <div>
                <p>Proprietários</p>
                <small>Marcas, produtos e tecnologia própria</small>
              </div>
            </div>
            <div className="project-links">
              {ownedProjects.map((project) => (
                <a href={`https://${project}`} target="_blank" rel="noreferrer" key={project}>
                  <span>{project}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="project-group client">
            <div className="project-group-heading">
              <span>02</span>
              <div>
                <p>Projetos para terceiros</p>
                <small>Colaborações e soluções desenvolvidas</small>
              </div>
            </div>
            <div className="project-links">
              {thirdPartyProjects.map((project) => (
                <a href={`https://${project}`} target="_blank" rel="noreferrer" key={project}>
                  <span>{project}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-copy">
          <p className="section-kicker">Próximo sistema</p>
          <h2>
            Tem um desafio que não cabe numa única especialidade?
          </h2>
        </div>
        <div className="contact-action">
          <p>
            Conte-nos o contexto. Começamos pelas perguntas certas e desenhamos
            o caminho a partir daí.
          </p>
          <a href="mailto:contacto@cinteca.es">
            contacto@cinteca.es <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="Cinteca — voltar ao início">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>cinteca</span>
        </a>
        <p>Engenharia aplicada · Software · Sistemas conectados</p>
        <p>© {new Date().getFullYear()} Cinteca</p>
      </footer>
    </main>
  );
}
