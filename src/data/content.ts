import {
  Solution,
  CaseStudy,
  MetricItem,
  ProcessStep,
  TechCategory,
  TeamMember,
  Testimonial,
  FaqItem,
} from '../types';

export const BRAND = {
  name: 'VERTEX DIGITAL',
  slogan: 'Tecnologia para transformar negócios.',
  description:
    'Criamos experiências digitais, produtos e soluções tecnológicas para empresas que querem evoluir.',
  heroSecondary:
    'Engenharia de software de ponta, design focado em resultados operacionais e arquitetura moderna para impulsionar a maturidade digital da sua organização.',
  copyrightNotice:
    '© 2026 VERTEX DIGITAL. Todos os direitos reservados. Projeto conceitual demonstrativo.',
  demoNotice:
    'Conteúdo demonstrativo elaborado para representação e arquitetura visual.',
};

export const SOLUTIONS: Solution[] = [
  {
    id: 'web-dev',
    title: 'Desenvolvimento Web',
    description:
      'Portais, plataformas corporativas e interfaces de alto impacto com foco em tempo de resposta ultra-rápido, SEO técnico e usabilidade impecável.',
    features: [
      'Renderização de alto desempenho e baixa latência',
      'Arquitetura de componentes modulares e escaláveis',
      'Design responsivo adaptativo com acessibilidade nativa',
    ],
    deliverables: 'Plataformas web customizadas, painéis administrativos e portais corporativos',
    techFocus: 'React · TypeScript · Next.js · Tailwind CSS',
  },
  {
    id: 'applications',
    title: 'Aplicações',
    description:
      'Sistemas digitais robustos, softwares operacionais e aplicações sob medida projetadas para ambientes com regras de negócio complexas.',
    features: [
      'Sistemas para gestão de processos críticos de negócio',
      'Aplicações desktop e web progressivas (PWA)',
      'Segurança em camadas e controle de acessos granulares',
    ],
    deliverables: 'Softwares de produtividade interna e ferramentas de clientes',
    techFocus: 'Arquitetura de Microsserviços · Multi-tenant · WebSockets',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description:
      'Ecossistemas de venda modernos, catálogos digitais de alta capacidade e jornadas de checkout desenhadas para maximizar conversão e retenção.',
    features: [
      'Fluxos de compra simplificados com checkout sem fricção',
      'Integração com inventários em tempo real e logística',
      'Arquiteturas headless para alta velocidade de carregamento',
    ],
    deliverables: 'Lojas virtuais B2B/B2C, catálogos digitais e portais de pedidos',
    techFocus: 'Headless Commerce · Gateways de Pagamento · APIs REST/GraphQL',
  },
  {
    id: 'automation',
    title: 'Automação',
    description:
      'Eliminação de gargalos repetitivos e automação de rotinas de ponta a ponta com orquestração inteligente de fluxos e sincronização de dados.',
    features: [
      'Pipelines automatizados de processamento de documentos',
      'Conexão contínua entre bancos de dados e ferramentas operacionais',
      'Notificações orientadas a eventos e relatórios programados',
    ],
    deliverables: 'Workflows autônomos, robôs de conciliação e triggers de eventos',
    techFocus: 'Workers Assíncronos · Message Brokers · Orquestradores de Filas',
  },
  {
    id: 'digital-experiences',
    title: 'Experiências Digitais',
    description:
      'Criação de produtos digitais com refinamento estético, microinterações fluidas e design focado no comportamento do usuário final.',
    features: [
      'Design systems corporativos escaláveis e documentados',
      'Prototipagem de alta fidelidade e validação ergonômica',
      'Análise de jornada e otimização de atritos de conversão',
    ],
    deliverables: 'Interfaces ricas, design systems e esteiras de navegação otimizadas',
    techFocus: 'Figma Tokens · Motion Design · Ergonomia Digital',
  },
  {
    id: 'tech-consulting',
    title: 'Consultoria Tecnológica',
    description:
      'Diagnóstico de stack, modernização de infraestrutura legada e planejamento estratégico de arquitetura técnica para sustentar o crescimento empresarial.',
    features: [
      'Auditoria de qualidade de código, segurança e escalabilidade',
      'Planejamento de migração estruturada para computação em nuvem',
      'Definição de boas práticas de engenharia e governança técnica',
    ],
    deliverables: 'Relatórios técnicos de maturidade, roadmaps de migração e matrizes de risco',
    techFocus: 'Cloud Architecture · DevOps · Avaliação de Débito Técnico',
  },
];

export const CASES: CaseStudy[] = [
  {
    id: 'atlas',
    name: 'Atlas',
    category: 'Logística & Operações',
    description:
      'Plataforma integrada de rastreamento e despacho operacional com visualização em tempo real de frotas e nós de distribuição.',
    image: '/src/assets/images/case_atlas_1790887617378.jpg',
    summary:
      'Estruturação de um ecossistema completo para telemetria e coordenação logística, conectando terminais terrestres e centros de distribuição.',
    metricsLabel: 'Tempo médio de resposta operacional',
    metricsValue: '-42% latência',
    highlights: [
      'Monitoramento de cargas e eventos operacionais em tempo real',
      'Painel de controle com renderização acelerada de mapas e rotas',
      'Camada de alertas com despachos automatizados de contingência',
    ],
    architecture: ['WebSockets', 'PostgreSQL', 'Golang', 'React & WebGL'],
  },
  {
    id: 'flow',
    name: 'Flow',
    category: 'Automação de Workflows',
    description:
      'Sistema de fluxo de trabalho e orquestração de tarefas que conecta setores operacionais e elimina gargalos em aprovações contratuais e financeiras.',
    image: '/src/assets/images/case_flow_1790887627685.jpg',
    summary:
      'Centralização de fluxos departamentais com regras condicionais customizadas e rastreamento transparente de cada etapa de deliberação interna.',
    metricsLabel: 'Ciclo médio de aprovação de processos',
    metricsValue: '3.8x mais rápido',
    highlights: [
      'Construtor visual de fluxogramas e gatilhos de aprovação',
      'Auditoria imutável de eventos com carimbo de tempo seguro',
      'Sincronização bidirecional com ferramentas corporativas',
    ],
    architecture: ['Node.js', 'Redis', 'TypeScript', 'Docker'],
  },
  {
    id: 'orbit',
    name: 'Orbit',
    category: 'Visualização de Dados',
    description:
      'Ecossistema analítico para agregação de múltiplos pontos de contato corporativos e exibição de dashboards multidimensionais em tempo real.',
    image: '/src/assets/images/case_orbit_1790887637131.jpg',
    summary:
      'Unificação de fontes dispersas de dados operacionais e mercadológicos em painéis interativos com granularidade ajustável e alta fidelidade visual.',
    metricsLabel: 'Processamento de eventos diários',
    metricsValue: '12M+ registros',
    highlights: [
      'Módulos de visualização gráfica sob demanda com drill-down',
      'Exportação estruturada de relatórios operacionais e gerenciais',
      'Mecanismos de caching multinível para consultas complexas',
    ],
    architecture: ['TimescaleDB', 'GraphQL', 'Next.js', 'Tailwind'],
  },
  {
    id: 'nexus',
    name: 'Nexus',
    category: 'Integração & Infraestrutura',
    description:
      'Arquitetura de microsserviços e integração omnichannel unificando ERPs legados, gateways de pagamento e sistemas de mensageria.',
    image: '/src/assets/images/case_nexus_1790887647838.jpg',
    summary:
      'Malha de comunicação resiliente que traduz protocolos distintos em um barramento padronizado, garantindo consistência em transações financeiras.',
    metricsLabel: 'Confiabilidade em transações de pico',
    metricsValue: '99.98% entrega',
    highlights: [
      'Garantia de idempotência e tolerância a falhas distribuídas',
      'Conectores modulares para legados sem interrupção de serviço',
      'Painel de observabilidade em tempo real com rastreamento distribuído',
    ],
    architecture: ['APIs REST & gRPC', 'RabbitMQ', 'PostgreSQL', 'Kubernetes'],
  },
];

export const METRICS: MetricItem[] = [
  {
    id: 'projects',
    value: '+120',
    label: 'projetos desenvolvidos',
    context: 'Soluções concebidas para modernizar operações e produtos digitais.',
  },
  {
    id: 'satisfaction',
    value: '98%',
    label: 'satisfação apurada',
    context: 'Avaliação técnica baseada em entregas pontuais e conformidade de escopo.',
  },
  {
    id: 'segments',
    value: '24',
    label: 'segmentos atendidos',
    context: 'Variedade de indústrias, serviços e plataformas corporativas.',
  },
  {
    id: 'experience',
    value: '8',
    label: 'anos de experiência',
    context: 'Atuação contínua com metodologias ágeis e engenharia moderna.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Descoberta',
    summary: 'Entendimento do negócio, objetivos e necessidades.',
    details:
      'Análise aprofundada do cenário operacional da empresa, mapeamento de dores técnicas, definição de personas de uso e identificação dos requisitos indispensáveis para o sucesso.',
    deliverables: [
      'Mapeamento de stakeholders e requisitos',
      'Levantamento de restrições de infraestrutura',
      'Definição dos critérios de aceitação',
    ],
  },
  {
    number: '02',
    title: 'Estratégia',
    summary: 'Definição da solução e direcionamento do projeto.',
    details:
      'Estruturação da arquitetura de software, escolha da stack tecnológica ideal, modelagem de banco de dados e planejamento detalhado do cronograma de marcos (milestones).',
    deliverables: [
      'Documento de arquitetura técnica (ADR)',
      'Roadmap de entregas em sprints quinzenais',
      'Matriz de riscos e estratégia de mitigação',
    ],
  },
  {
    number: '03',
    title: 'Design',
    summary: 'Criação da experiência visual e funcional.',
    details:
      'Construção de fluxos ergonômicos, wireframes e interfaces de alta fidelidade no Figma, refinando interações e validando a usabilidade antes da primeira linha de código.',
    deliverables: [
      'Design System corporativo componentizado',
      'Protótipos navegáveis de alta definição',
      'Guia de estilo e acessibilidade digital',
    ],
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    summary: 'Construção e implementação da solução.',
    details:
      'Engenharia de software com código limpo, cobertura de testes automatizados, esteiras de integração contínua (CI/CD) e revisões contínuas de segurança e performance.',
    deliverables: [
      'Repositório estruturado e versionado',
      'Testes unitários e de integração contínua',
      'Ambientes segregados de desenvolvimento e homologação',
    ],
  },
  {
    number: '05',
    title: 'Lançamento',
    summary: 'Preparação, publicação e evolução do projeto.',
    details:
      'Implantação assistida no ambiente de produção com zero downtime, testes de estresse, treinamento operacional das equipes internas e acompanhamento métrico contínuo.',
    deliverables: [
      'Deploy em produção com infraestrutura monitorada',
      'Documentação técnica de handoff e manuais',
      'Plano de sustentação e evolução contínua',
    ],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Front-end',
    description:
      'Construção de interfaces modernas, reativas e com rendering de alto desempenho para qualquer dispositivo.',
    technologies: [
      {
        name: 'React & TypeScript',
        description: 'Desenvolvimento modular com tipagem estática e componentes reutilizáveis.',
        useCase: 'Painéis corporativos e aplicações interativas',
      },
      {
        name: 'Next.js & Vite',
        description: 'Bundling otimizado, SSR (Server-Side Rendering) e carregamento sob demanda.',
        useCase: 'Portais públicos e plataformas de alta escala',
      },
      {
        name: 'Tailwind CSS',
        description: 'Estilização utilitária de ponta, design system nativo e responsividade precisa.',
        useCase: 'Consistência visual e performance de folha de estilos',
      },
      {
        name: 'WebGL & Canvas',
        description: 'Renderização gráfica acelerada por hardware para visualização dinâmica de dados.',
        useCase: 'Dashboards analíticos e mapas interativos',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Back-end',
    description:
      'Engenharia de servidores e microsserviços focada em alta concorrência, baixa latência e tolerância a falhas.',
    technologies: [
      {
        name: 'Node.js & NestJS',
        description: 'Ecossistema assíncrono modular com arquitetura orientada a serviços.',
        useCase: 'APIs escaláveis e servidores de aplicação',
      },
      {
        name: 'Golang',
        description: 'Linguagem compilada de altíssima performance para concorrência massiva.',
        useCase: 'Microsserviços de telemetria e processamento intensivo',
      },
      {
        name: 'Python',
        description: 'Manipulação eficiente de dados estruturados e rotinas de automação analítica.',
        useCase: 'Scripts de ingestão e pipelines analíticos',
      },
      {
        name: 'Arquitetura de Microsserviços',
        description: 'Isolamento de domínios corporativos para deploys independentes.',
        useCase: 'Sistemas que demandam escalabilidade elástica',
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    description:
      'Infraestrutura em nuvem provisionada por código com alta disponibilidade e balanceamento elástico.',
    technologies: [
      {
        name: 'Docker & Kubernetes',
        description: 'Conteinerização padronizada e orquestração de pods em múltiplos clusters.',
        useCase: 'Imutabilidade de deploy e orquestração de nós',
      },
      {
        name: 'Computação Serverless',
        description: 'Execução de funções orientadas a eventos com escalabilidade instantânea.',
        useCase: 'Processamento de webhooks e tarefas sob demanda',
      },
      {
        name: 'Esteiras de CI/CD',
        description: 'Pipelines automatizados de verificação, build e deploy seguro.',
        useCase: 'Entregas contínuas com testes de regressão',
      },
      {
        name: 'Infraestrutura como Código',
        description: 'Gerenciamento declarativo e auditável de recursos de nuvem.',
        useCase: 'Reprodutibilidade de ambientes e segurança operacional',
      },
    ],
  },
  {
    id: 'apis',
    name: 'APIs',
    description:
      'Padronização de interfaces de comunicação com contratos claros, segurança criptográfica e documentação interativa.',
    technologies: [
      {
        name: 'RESTful & OpenAPI',
        description: 'Contratos padronizados com verbos HTTP semânticos e documentação automatizada.',
        useCase: 'Integrações universais entre aplicações externas e internas',
      },
      {
        name: 'GraphQL',
        description: 'Consultas precisas em que o cliente solicita exatamente o schema de dados necessário.',
        useCase: 'Front-ends que consomem múltiplos relacionamentos',
      },
      {
        name: 'gRPC & Protocol Buffers',
        description: 'Comunicação binária multiplexada sobre HTTP/2 com latência mínima.',
        useCase: 'Comunicação síncrona interna entre microsserviços',
      },
      {
        name: 'Webhooks & Event Streams',
        description: 'Notificação instantânea orientada a eventos com assinaturas criptográficas.',
        useCase: 'Sincronização assíncrona com gateways e parceiros',
      },
    ],
  },
  {
    id: 'database',
    name: 'Banco de Dados',
    description:
      'Armazenamento persistente e transacional estruturado para alta integridade e consultas complexas.',
    technologies: [
      {
        name: 'PostgreSQL',
        description: 'Banco relacional líder em confiabilidade ACID, indexação avançada e suporte a JSONB.',
        useCase: 'Núcleo transacional e regras de negócio estruturadas',
      },
      {
        name: 'Redis',
        description: 'Armazenamento em memória para caching ultra-rápido, controle de sessão e pub/sub.',
        useCase: 'Aceleração de respostas e gerenciamento de estado',
      },
      {
        name: 'Bancos Orientados a Documentos',
        description: 'Esquemas flexíveis para catálogos heterogêneos e registros semiestruturados.',
        useCase: 'Armazenamento de payloads variáveis e logs',
      },
      {
        name: 'Time-Series Engines',
        description: 'Otimização para métricas cronológicas, telemetria contínua e séries temporais.',
        useCase: 'Históricos de auditoria e monitoramento analítico',
      },
    ],
  },
  {
    id: 'automation-tech',
    name: 'Automação',
    description:
      'Mecanismos de orquestração de tarefas assíncronas para eliminação de intervenção manual e gargalos.',
    technologies: [
      {
        name: 'Message Queues (RabbitMQ / SQS)',
        description: 'Filas desacopladas para processamento assíncrono com garantia de entrega.',
        useCase: 'Tratamento de picos de carga e despachos demorados',
      },
      {
        name: 'Agendadores de Tarefas',
        description: 'Execuções cronometradas com tratamento robusto de retries e fallbacks.',
        useCase: 'Conciliações contábeis e expurgo controlado de dados',
      },
      {
        name: 'Pipelines ETL',
        description: 'Extração, transformação e carregamento contínuo de registros empresariais.',
        useCase: 'Alimentação contínua de data lakes e armazéns analíticos',
      },
      {
        name: 'Triggers de Integridade',
        description: 'Verificação contínua de inconsistências de dados com alertas imediatos.',
        useCase: 'Garantia de consistência em bases federadas',
      },
    ],
  },
  {
    id: 'integrations',
    name: 'Integrações',
    description:
      'Interconexão de plataformas corporativas sem necessidade de reescrever sistemas centrais existentes.',
    technologies: [
      {
        name: 'Gateways de Pagamento',
        description: 'Implementação de checkouts transparentes, split de pagamentos e conciliação.',
        useCase: 'Faturamento recorrente e comércio digital',
      },
      {
        name: 'Sistemas ERP',
        description: 'Conexão segura com plataformas como SAP, TOTVS e softwares corporativos legados.',
        useCase: 'Sincronização de pedidos, estoque e notas fiscais',
      },
      {
        name: 'CRMs e Marketing',
        description: 'Ingestão e atualização contínua de leads em plataformas como Salesforce e HubSpot.',
        useCase: 'Rastreabilidade do ciclo de vida de clientes',
      },
      {
        name: 'Mensageria & Notificações',
        description: 'Envio transacional de alertas via e-mail corporativo, SMS e canais corporativos.',
        useCase: 'Comunicação pontual e confirmação de eventos críticos',
      },
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'lucas',
    name: 'Lucas Prado',
    role: 'Liderança de Engenharia de Software',
    specialty: 'Arquitetura de Sistemas & Performance',
    bio: 'Foco na concepção de plataformas corporativas de alta disponibilidade, governança de código e sustentação técnica de produtos em escala.',
  },
  {
    id: 'beatriz',
    name: 'Beatriz Meireles',
    role: 'Arquitetura de Soluções & Cloud',
    specialty: 'Infraestrutura Distribuída & Segurança',
    bio: 'Especialista em dimensionamento de ambientes em nuvem, esteiras de entrega contínua e modelos de microsserviços resilientes.',
  },
  {
    id: 'thiago',
    name: 'Thiago Castro',
    role: 'Design de Produtos Digitais',
    specialty: 'Ergonomia de Interfaces & Design System',
    bio: 'Desenvolve ecossistemas visuais e funcionais com rigor tipográfico, clareza de navegação e foco na eficiência do usuário corporativo.',
  },
  {
    id: 'mariana',
    name: 'Mariana Fontes',
    role: 'Engenharia de Plataforma & Integrações',
    specialty: 'APIs Resilientes & Conectores Corporativos',
    bio: 'Atua na ponte entre sistemas legados e aplicações modernas, desenhando malhas de integração com idempotência e tolerância a falhas.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'A precisão na arquitetura e a entrega pontual da plataforma trouxeram a robustez que nossa operação exigia para suportar o crescimento sem atritos técnicos.',
    authorRole: 'Diretoria de Operações',
    segment: 'Setor de Logística e Cadeia de Suprimentos',
    impact: 'Redução de 40% em incidentes de sincronização operacional',
  },
  {
    id: 'test-2',
    quote:
      'O redesenho completo de nossa aplicação web reduziu o tempo de carregamento e melhorou significativamente a retenção dos usuários corporativos.',
    authorRole: 'Liderança de Tecnologia',
    segment: 'Plataforma B2B de Serviços Corporativos',
    impact: 'Aceleração de 3x no tempo de carregamento de páginas críticas',
  },
  {
    id: 'test-3',
    quote:
      'A integração dos sistemas legados em uma malha de APIs fluida nos deu autonomia para lançar novas funcionalidades com total segurança e previsibilidade.',
    authorRole: 'Gestão de Projetos Digitais',
    segment: 'Comércio Eletrônico e Distribuição Especializada',
    impact: 'Unificação de 5 sistemas legados em um fluxo contínuo',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona o desenvolvimento de um projeto?',
    answer:
      'O desenvolvimento segue um processo estruturado em etapas claras: Descoberta, Estratégia, Design, Desenvolvimento e Lançamento. Trabalhamos com ciclos quinzenais de entrega (sprints), garantindo que sua equipe acompanhe a evolução do produto em tempo real em ambientes dedicados de homologação.',
    topic: 'Metodologia',
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo pode levar um projeto?',
    answer:
      'O cronograma varia conforme a complexidade e o escopo da solução. Projetos de plataformas web ou portais corporativos costumam levar de 6 a 12 semanas. Soluções mais complexas com integrações profundas de ERPs ou arquitetura de microsserviços podem demandar de 3 a 6 meses, com entregas de valor faseadas desde o primeiro mês.',
    topic: 'Cronograma',
  },
  {
    id: 'faq-3',
    question: 'É possível criar uma solução personalizada?',
    answer:
      'Sim. Todas as soluções desenvolvidas pela VERTEX DIGITAL são desenhadas exclusivamente para atender às especificidades de negócio da sua organização. Não utilizamos templates prontos ou estruturas rígidas; a arquitetura de software, o design system e a modelagem do banco de dados são customizados para as suas necessidades operacionais.',
    topic: 'Personalização',
  },
  {
    id: 'faq-4',
    question: 'A empresa trabalha com integrações?',
    answer:
      'Sim. Desenvolvemos conectores seguros e malhas de integração com gateways de pagamento, plataformas ERP (como SAP e TOTVS), CRMs corporativos (como Salesforce e HubSpot), sistemas legados e serviços em nuvem, garantindo integridade de dados e conformidade em todas as transações.',
    topic: 'Integrações',
  },
  {
    id: 'faq-5',
    question: 'É possível evoluir um projeto existente?',
    answer:
      'Com certeza. Realizamos diagnósticos de engenharia para avaliar código existente, identificar gargalos de performance e definir planos de refatoração ou modernização progressiva. É possível reescrever módulos críticos sem a necessidade de paralisar as operações atuais da sua empresa.',
    topic: 'Modernização',
  },
];
