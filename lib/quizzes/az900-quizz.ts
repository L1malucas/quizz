import { Quiz } from "@/utils/interfaces";

export const az900Quiz: Quiz = {
  id: 13,
  slug: "az900",
  title: "Microsoft Azure Fundamentals (AZ-900)",
  description: "Teste seus conhecimentos sobre conceitos fundamentais do Microsoft Azure, incluindo serviços principais, segurança, governança, preços e suporte, simulando a prova AZ-900.",
  timeLimit: 45,
  questions: [
    // Easy Questions (20)
    {
      id: 1,
      question: "O que é o Microsoft Azure?",
      options: [
        "Um sistema operacional da Microsoft",
        "Uma plataforma de computação em nuvem",
        "Um software de produtividade",
        "Um banco de dados relacional"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 2,
      question: "Qual é o principal benefício da computação em nuvem em relação à infraestrutura local?",
      options: [
        "Maior custo inicial",
        "Escalabilidade sob demanda",
        "Manutenção obrigatória de hardware",
        "Limitação de recursos"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 3,
      question: "Qual modelo de serviço em nuvem permite que os usuários gerenciem apenas os aplicativos e dados, enquanto o provedor gerencia o restante?",
      options: [
        "IaaS",
        "PaaS",
        "SaaS",
        "FaaS"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 4,
      question: "Qual é o nome do serviço de identidade do Azure usado para autenticação e autorização?",
      options: [
        "Azure Key Vault",
        "Microsoft Entra ID",
        "Azure Security Center",
        "Azure Monitor"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 5,
      question: "Qual é o objetivo principal do Azure Blob Storage?",
      options: [
        "Hospedar máquinas virtuais",
        "Armazenar dados não estruturados",
        "Executar funções serverless",
        "Gerenciar bancos de dados relacionais"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 6,
      question: "Qual é o modelo de implantação em nuvem que combina recursos locais e na nuvem?",
      options: [
        "Nuvem pública",
        "Nuvem privada",
        "Nuvem híbrida",
        "Nuvem comunitária"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 7,
      question: "Qual serviço do Azure é usado para hospedar aplicativos web?",
      options: [
        "Azure Virtual Machines",
        "Azure App Service",
        "Azure Kubernetes Service",
        "Azure Functions"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 8,
      question: "O que significa 'economias de escala' no contexto da computação em nuvem?",
      options: [
        "Aumentar os custos com mais usuários",
        "Reduzir custos operando em grande escala",
        "Manter os mesmos custos independentemente da escala",
        "Investir em hardware local"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 9,
      question: "Qual é o tempo padrão para completar o exame AZ-900?",
      options: [
        "30 minutos",
        "45 minutos",
        "60 minutos",
        "90 minutos"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 10,
      question: "Qual é a pontuação mínima para passar no exame AZ-900?",
      options: [
        "600",
        "700",
        "800",
        "900"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 11,
      question: "Qual recurso do Azure é usado para monitoramento e diagnóstico de aplicativos?",
      options: [
        "Azure Monitor",
        "Azure Firewall",
        "Azure Policy",
        "Azure Backup"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 12,
      question: "O que é um Acordo de Nível de Serviço (SLA) no Azure?",
      options: [
        "Um contrato de suporte técnico",
        "Uma garantia de disponibilidade de serviço",
        "Um plano de preços",
        "Um modelo de implantação"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 13,
      question: "Qual é o serviço do Azure para gerenciar chaves criptográficas?",
      options: [
        "Azure Key Vault",
        "Azure Security Center",
        "Azure Active Directory",
        "Azure Sentinel"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 14,
      question: "Qual é o propósito do Azure Virtual Network?",
      options: [
        "Hospedar bancos de dados",
        "Gerenciar identidades",
        "Conectar recursos em uma rede virtual",
        "Armazenar arquivos"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 15,
      question: "Qual é o principal benefício do modelo de preços pay-as-you-go do Azure?",
      options: [
        "Custo fixo mensal",
        "Pagamento apenas pelos recursos usados",
        "Contrato de longo prazo",
        "Custo inicial elevado"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 16,
      question: "Qual serviço do Azure é usado para backups automáticos?",
      options: [
        "Azure Backup",
        "Azure Site Recovery",
        "Azure Archive Storage",
        "Azure Data Factory"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 17,
      question: "O que é o Azure Marketplace?",
      options: [
        "Um serviço de armazenamento",
        "Uma loja online para soluções de terceiros",
        "Um serviço de computação",
        "Um painel de monitoramento"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 18,
      question: "Qual é o propósito do Azure Policy?",
      options: [
        "Gerenciar custos",
        "Aplicar regras de conformidade",
        "Monitorar desempenho",
        "Criar máquinas virtuais"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 19,
      question: "Qual é a função do Azure Advisor?",
      options: [
        "Fornecer recomendações personalizadas",
        "Gerenciar backups",
        "Hospedar aplicativos web",
        "Proteger contra ameaças"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 20,
      question: "Qual é o serviço do Azure para computação sem servidor?",
      options: [
        "Azure Virtual Machines",
        "Azure Functions",
        "Azure App Service",
        "Azure Kubernetes Service"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    // Medium Questions (20)
    {
      id: 21,
      question: "Qual é a diferença principal entre Azure Virtual Machines e Azure App Service?",
      options: [
        "Azure Virtual Machines é PaaS, enquanto Azure App Service é IaaS",
        "Azure Virtual Machines oferece controle total do sistema operacional, enquanto Azure App Service é PaaS",
        "Azure App Service é usado para bancos de dados, enquanto Azure Virtual Machines é para aplicativos web",
        "Não há diferença, ambos são serviços idênticos"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 22,
      question: "Qual opção de redundância de armazenamento do Azure suporta dados em várias regiões geográficas com acesso de leitura na região secundária?",
      options: [
        "Locally redundant storage (LRS)",
        "Zone-redundant storage (ZRS)",
        "Geo-redundant storage (GRS)",
        "Read-access geo-redundant storage (RA-GRS)"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 23,
      question: "Você precisa recomendar um plano de suporte do Azure que permita solicitar uma avaliação de design de ambiente. Qual plano você recomendaria?",
      options: [
        "Basic",
        "Developer",
        "Standard",
        "Professional Direct"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 24,
      question: "Qual serviço do Azure é usado para orquestrar fluxos de trabalho de dados?",
      options: [
        "Azure Data Factory",
        "Azure Synapse Analytics",
        "Azure Data Lake",
        "Azure Stream Analytics"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 25,
      question: "Qual é o propósito do Azure ExpressRoute?",
      options: [
        "Proteger contra ataques DDoS",
        "Criar conexões privadas entre datacenters locais e o Azure",
        "Gerenciar chaves criptográficas",
        "Hospedar contêineres"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 26,
      question: "Qual é a principal vantagem do Azure Kubernetes Service (AKS)?",
      options: [
        "Gerenciamento automatizado de clusters Kubernetes",
        "Armazenamento de dados não estruturados",
        "Hospedagem de máquinas virtuais",
        "Monitoramento de aplicativos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 27,
      question: "Qual é o serviço do Azure usado para proteger contra ataques DDoS?",
      options: [
        "Azure Firewall",
        "Azure DDoS Protection",
        "Azure Security Center",
        "Azure Sentinel"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 28,
      question: "Qual é o propósito do Azure Cost Management?",
      options: [
        "Monitorar o desempenho de aplicativos",
        "Gerenciar e otimizar custos do Azure",
        "Proteger dados sensíveis",
        "Criar redes virtuais"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 29,
      question: "Qual é a função do Azure Sentinel?",
      options: [
        "Gerenciamento de identidade",
        "Monitoramento de segurança e resposta a incidentes",
        "Hospedagem de aplicativos web",
        "Backup de dados"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 30,
      question: "Você precisa hospedar 10 aplicativos web com domínios personalizados e 10 GB de armazenamento cada. Qual plano do Azure App Service é mais econômico?",
      options: [
        "Free",
        "Shared",
        "Basic",
        "Standard"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 31,
      question: "Qual é o propósito do Azure Virtual Machine Scale Sets?",
      options: [
        "Gerenciar bancos de dados",
        "Escalar automaticamente máquinas virtuais",
        "Hospedar aplicativos serverless",
        "Proteger redes virtuais"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 32,
      question: "Qual é o serviço do Azure para análise de big data?",
      options: [
        "Azure Synapse Analytics",
        "Azure Data Factory",
        "Azure Blob Storage",
        "Azure Functions"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 33,
      question: "Qual é a diferença entre CapEx e OpEx no contexto do Azure?",
      options: [
        "CapEx é despesa operacional, OpEx é despesa de capital",
        "CapEx é despesa de capital, OpEx é despesa operacional",
        "Ambos são despesas de capital",
        "Ambos são despesas operacionais"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 34,
      question: "Qual é o propósito do Azure VPN Gateway?",
      options: [
        "Hospedar aplicativos web",
        "Criar conexões seguras entre redes locais e o Azure",
        "Gerenciar chaves criptográficas",
        "Monitorar tráfego de rede"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 35,
      question: "Qual é o serviço do Azure para gerenciamento de contêineres?",
      options: [
        "Azure Container Instances",
        "Azure Virtual Machines",
        "Azure App Service",
        "Azure Blob Storage"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 36,
      question: "Qual é o propósito do Azure Resource Manager?",
      options: [
        "Gerenciar recursos do Azure de forma consistente",
        "Hospedar máquinas virtuais",
        "Proteger contra ameaças",
        "Armazenar dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 37,
      question: "Qual é o serviço do Azure para streaming de dados em tempo real?",
      options: [
        "Azure Stream Analytics",
        "Azure Data Factory",
        "Azure Synapse Analytics",
        "Azure Data Lake"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 38,
      question: "Qual é o propósito do Azure Active Directory B2C?",
      options: [
        "Gerenciar identidades de consumidores",
        "Hospedar aplicativos web",
        "Proteger redes virtuais",
        "Armazenar dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 39,
      question: "Qual é o serviço do Azure para recuperação de desastres?",
      options: [
        "Azure Backup",
        "Azure Site Recovery",
        "Azure Archive Storage",
        "Azure Monitor"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 40,
      question: "Qual é o propósito do Azure Traffic Manager?",
      options: [
        "Gerenciar tráfego de rede global",
        "Proteger contra ataques DDoS",
        "Hospedar contêineres",
        "Armazenar arquivos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Hard Questions (10)
    {
      id: 41,
      question: "Uma empresa possui datacenters em duas regiões geográficas e deseja configurar resiliência de site com replicação de dados. Qual opção de redundância de armazenamento do Azure você recomendaria para leitura em ambas as regiões?",
      options: [
        "Locally redundant storage (LRS)",
        "Zone-redundant storage (ZRS)",
        "Geo-redundant storage (GRS)",
        "Read-access geo-redundant storage (RA-GRS)"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 42,
      question: "Você está implantando máquinas virtuais no Azure e precisa garantir alta disponibilidade. Qual recurso você usaria para distribuir máquinas virtuais em diferentes zonas de disponibilidade?",
      options: [
        "Azure Load Balancer",
        "Azure Virtual Machine Scale Sets",
        "Availability Zones",
        "Azure Traffic Manager"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 43,
      question: "Uma empresa deseja migrar aplicativos legados que requerem hardware de mainframe especializado e aplicativos modernos compartilhados. Qual modelo de implantação em nuvem é mais adequado?",
      options: [
        "Nuvem pública",
        "Nuvem privada",
        "Nuvem híbrida",
        "Nuvem comunitária"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 44,
      question: "Qual é a principal diferença entre o Azure Monitor e o Azure Sentinel?",
      options: [
        "Azure Monitor é para segurança, enquanto Azure Sentinel é para monitoramento",
        "Azure Monitor é para monitoramento e diagnóstico, enquanto Azure Sentinel é para segurança e resposta a incidentes",
        "Ambos são serviços de segurança idênticos",
        "Azure Monitor é para backups, enquanto Azure Sentinel é para monitoramento"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 45,
      question: "Você precisa implantar 10 aplicativos web com balanceamento de carga e instâncias dedicadas. Qual plano do Azure App Service atende a esses requisitos com o menor custo?",
      options: [
        "Free",
        "Shared",
        "Basic",
        "Standard"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 46,
      question: "Qual é o propósito do Azure Blueprints?",
      options: [
        "Gerenciar custos",
        "Automatizar a implantação de ambientes conformes",
        "Monitorar tráfego de rede",
        "Hospedar contêineres"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 47,
      question: "Uma empresa deseja usar o Azure para análise de dados em tempo real. Qual serviço é mais adequado?",
      options: [
        "Azure Data Factory",
        "Azure Stream Analytics",
        "Azure Synapse Analytics",
        "Azure Data Lake"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 48,
      question: "Qual é a principal diferença entre o Azure Policy e o Azure Role-Based Access Control (RBAC)?",
      options: [
        "Azure Policy define permissões, enquanto RBAC define regras de conformidade",
        "Azure Policy aplica regras de conformidade, enquanto RBAC gerencia permissões de acesso",
        "Ambos são serviços de monitoramento",
        "Não há diferença, são idênticos"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 49,
      question: "Você precisa garantir que os recursos do Azure sejam implantados apenas em regiões específicas. Qual serviço você usaria?",
      options: [
        "Azure Monitor",
        "Azure Policy",
        "Azure Security Center",
        "Azure Backup"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 50,
      question: "Uma empresa deseja usar o Azure para hospedar um aplicativo com requisitos de baixa latência em várias regiões. Qual serviço você recomendaria para gerenciar o tráfego global?",
      options: [
        "Azure Load Balancer",
        "Azure Traffic Manager",
        "Azure VPN Gateway",
        "Azure ExpressRoute"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 51,
      question: "Uma empresa deseja migrar seus servidores locais para o Azure para reduzir custos com manutenção de hardware. Qual serviço do Azure ela deve usar para hospedar máquinas virtuais?",
      options: [
        "Azure Kubernetes Service",
        "Azure App Service",
        "Azure Virtual Machines",
        "Azure Functions"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 52,
      question: "Um administrador precisa garantir que apenas usuários autenticados acessem um aplicativo hospedado no Azure. Qual serviço deve ser configurado para gerenciar autenticação e autorização?",
      options: [
        "Azure Monitor",
        "Azure Key Vault",
        "Azure Firewall",
        "Microsoft Entra ID"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 53,
      question: "Uma organização planeja armazenar grandes quantidades de dados não estruturados, como documentos e imagens, no Azure. Qual serviço é mais adequado para essa necessidade?",
      options: [
        "Azure Cosmos DB",
        "Azure Blob Storage",
        "Azure SQL Database",
        "Azure Data Lake"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 54,
      question: "Uma empresa deseja implantar um aplicativo web no Azure sem gerenciar a infraestrutura subjacente. Qual serviço do Azure ela deve escolher?",
      options: [
        "Azure Virtual Machines",
        "Azure Container Instances",
        "Azure Virtual Network",
        "Azure App Service"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 55,
      question: "Um gerente de TI precisa garantir que os dados de um aplicativo sejam replicados em várias regiões geográficas para alta disponibilidade. Qual opção de redundância de armazenamento do Azure é mais apropriada?",
      options: [
        "Zone-redundant storage (ZRS)",
        "Locally redundant storage (LRS)",
        "Geo-redundant storage (GRS)",
        "Read-access geo-redundant storage (RA-GRS)"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 56,
      question: "Uma empresa deseja executar funções sem servidor que sejam acionadas por eventos, como uploads de arquivos. Qual serviço do Azure é mais adequado?",
      options: [
        "Azure Virtual Machines",
        "Azure Functions",
        "Azure Logic Apps",
        "Azure App Service"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 57,
      question: "Um administrador precisa monitorar o desempenho de vários recursos do Azure, como máquinas virtuais e bancos de dados. Qual serviço ele deve usar?",
      options: [
        "Azure Advisor",
        "Azure Monitor",
        "Azure Policy",
        "Azure Security Center"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 58,
      question: "Uma organização deseja criar uma conexão privada entre seu datacenter local e o Azure para maior segurança. Qual serviço do Azure ela deve implementar?",
      options: [
        "Azure Load Balancer",
        "Azure ExpressRoute",
        "Azure VPN Gateway",
        "Azure Traffic Manager"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 59,
      question: "Uma empresa precisa garantir que seus recursos no Azure estejam em conformidade com políticas internas, como usar apenas regiões específicas. Qual serviço deve ser configurado?",
      options: [
        "Azure Blueprints",
        "Azure Cost Management",
        "Azure Policy",
        "Azure Monitor"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 60,
      question: "Um desenvolvedor precisa armazenar chaves criptográficas de forma segura para um aplicativo no Azure. Qual serviço é mais apropriado?",
      options: [
        "Azure Blob Storage",
        "Azure Active Directory",
        "Azure Key Vault",
        "Azure Security Center"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 61,
      question: "Uma empresa deseja otimizar os custos do Azure analisando os gastos mensais e identificando recursos subutilizados. Qual ferramenta ela deve usar?",
      options: [
        "Azure Policy",
        "Azure Cost Management",
        "Azure Monitor",
        "Azure Advisor"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 62,
      question: "Um administrador precisa configurar backups automáticos para máquinas virtuais no Azure. Qual serviço ele deve usar?",
      options: [
        "Azure Archive Storage",
        "Azure Data Factory",
        "Azure Backup",
        "Azure Site Recovery"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 63,
      question: "Uma empresa deseja implantar um aplicativo que exige orquestração de contêineres no Azure. Qual serviço é mais adequado?",
      options: [
        "Azure Virtual Machines",
        "Azure App Service",
        "Azure Container Instances",
        "Azure Kubernetes Service"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 64,
      question: "Um gerente de segurança deseja proteger um aplicativo contra ataques DDoS no Azure. Qual serviço ele deve configurar?",
      options: [
        "Azure Key Vault",
        "Azure DDoS Protection",
        "Azure Sentinel",
        "Azure Firewall"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 65,
      question: "Uma organização precisa gerenciar o tráfego global para um aplicativo hospedado em várias regiões do Azure. Qual serviço é mais apropriado?",
      options: [
        "Azure ExpressRoute",
        "Azure Traffic Manager",
        "Azure VPN Gateway",
        "Azure Load Balancer"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 66,
      question: "Uma empresa deseja implementar um plano de recuperação de desastres para seus aplicativos no Azure. Qual serviço ela deve usar?",
      options: [
        "Azure Monitor",
        "Azure Site Recovery",
        "Azure Archive Storage",
        "Azure Backup"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 67,
      question: "Um desenvolvedor precisa criar um pipeline de dados para integrar várias fontes de dados no Azure. Qual serviço é mais adequado?",
      options: [
        "Azure Data Factory",
        "Azure Synapse Analytics",
        "Azure Stream Analytics",
        "Azure Data Lake"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 68,
      question: "Uma empresa deseja analisar dados em tempo real, como logs de eventos de um aplicativo. Qual serviço do Azure é mais apropriado?",
      options: [
        "Azure Blob Storage",
        "Azure Stream Analytics",
        "Azure Data Factory",
        "Azure Synapse Analytics"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 69,
      question: "Um administrador precisa garantir que as permissões de acesso aos recursos do Azure sejam gerenciadas com base em funções. Qual mecanismo ele deve usar?",
      options: [
        "Azure Blueprints",
        "Azure Role-Based Access Control (RBAC)",
        "Azure Security Center",
        "Azure Policy"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 70,
      question: "Uma organização deseja comprar soluções de terceiros para integrar com seus aplicativos no Azure. Onde ela pode encontrar essas soluções?",
      options: [
        "Azure Advisor",
        "Azure Marketplace",
        "Azure Security Center",
        "Azure Portal"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 71,
      question: "Uma empresa precisa hospedar um aplicativo com requisitos de baixa latência em várias regiões. Qual serviço do Azure ela deve usar para distribuir o tráfego?",
      options: [
        "Azure Firewall",
        "Azure Traffic Manager",
        "Azure VPN Gateway",
        "Azure Load Balancer"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 72,
      question: "Uma organização deseja realizar análises de big data no Azure. Qual serviço é mais adequado?",
      options: [
        "Azure Synapse Analytics",
        "Azure Data Factory",
        "Azure Stream Analytics",
        "Azure Cosmos DB"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 73,
      question: "Uma empresa deseja garantir que seus recursos no Azure sejam implantados de forma consistente e em conformidade com padrões internos. Qual serviço ela deve usar?",
      options: [
        "Azure Monitor",
        "Azure Blueprints",
        "Azure Cost Management",
        "Azure Policy"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 74,
      question: "Um administrador precisa configurar uma rede virtual para isolar recursos no Azure. Qual serviço ele deve usar?",
      options: [
        "Azure Virtual Network",
        "Azure VPN Gateway",
        "Azure ExpressRoute",
        "Azure Traffic Manager"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 75,
      question: "Uma empresa deseja usar o Azure para gerenciar identidades de consumidores em um aplicativo voltado para o cliente. Qual serviço é mais adequado?",
      options: [
        "Azure Sentinel",
        "Azure Active Directory B2C",
        "Azure Key Vault",
        "Microsoft Entra ID"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 76,
      question: "Um gerente de TI precisa escolher um plano de suporte do Azure que inclua revisões de arquitetura. Qual plano ele deve selecionar?",
      options: [
        "Basic",
        "Developer",
        "Standard",
        "Professional Direct"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 77,
      question: "Uma organização deseja hospedar um banco de dados NoSQL globalmente distribuído no Azure. Qual serviço é mais adequado?",
      options: [
        "Azure Data Lake",
        "Azure Cosmos DB",
        "Azure SQL Database",
        "Azure Blob Storage"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 78,
      question: "Um administrador precisa garantir que as máquinas virtuais no Azure sejam escaladas automaticamente com base na demanda. Qual recurso ele deve usar?",
      options: [
        "Azure Virtual Machine Scale Sets",
        "Azure Load Balancer",
        "Azure Traffic Manager",
        "Azure App Service"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 79,
      question: "Uma empresa deseja monitorar ameaças de segurança em tempo real no Azure. Qual serviço ela deve usar?",
      options: [
        "Azure Advisor",
        "Azure Sentinel",
        "Azure Firewall",
        "Azure Monitor"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 80,
      question: "Um desenvolvedor precisa implantar um aplicativo em várias zonas de disponibilidade para alta disponibilidade. Qual recurso do Azure ele deve usar?",
      options: [
        "Azure Traffic Manager",
        "Availability Zones",
        "Azure Virtual Machine Scale Sets",
        "Azure Load Balancer"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    }
  ]
};