export const questions: Question[] = [
  {
    question:
      "1. Qual serviço AWS ajudará uma empresa a identificar o usuário que deletou uma instância Amazon EC2 ontem?",
    options: [
      "A. Amazon CloudWatch",
      "B. AWS Trusted Advisor",
      "C. AWS CloudTrail",
      "D. Amazon Inspector",
    ],
    correctAnswer: ["C. AWS CloudTrail"],
    explanation:
      "AWS CloudTrail é um serviço que permite rastrear a atividade do usuário e o uso da API em toda a conta AWS, essencial para identificar ações específicas como a exclusão de uma instância EC2.",
    multiSelect: false,
  },
  {
    question:
      "2. Uma empresa precisa de uma rede de entrega de conteúdo que forneça entrega segura de dados, vídeos, aplicativos e APIs para usuários globalmente com baixa latência e altas velocidades de transferência. Qual serviço AWS atende a esses requisitos?",
    options: [
      "A. Amazon CloudFront",
      "B. Elastic Load Balancing",
      "C. Amazon S3",
      "D. Amazon Elastic Transcoder",
    ],
    correctAnswer: ["A. Amazon CloudFront"],
    explanation:
      "Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que integra com outros serviços AWS para fornecer conteúdo com baixa latência e altas velocidades de transferência globalmente.",
    multiSelect: false,
  },
  {
    question:
      "3. O Amazon Elastic File System (Amazon EFS) e o Amazon FSx oferecem qual tipo de armazenamento?",
    options: [
      "A. Armazenamento de arquivo",
      "B. Armazenamento de objeto",
      "C. Armazenamento de bloco",
      "D. Armazenamento de instância",
    ],
    correctAnswer: ["A. Armazenamento de arquivo"],
    explanation:
      "Tanto o Amazon EFS quanto o Amazon FSx oferecem soluções de armazenamento de arquivos, permitindo o acesso simultâneo a arquivos e pastas em uma rede.",
    multiSelect: false,
  },
  {
    question:
      "4. Uma empresa de varejo está migrando suas aplicações de infraestrutura de TI de on-premises para a AWS Cloud. Quais custos a empresa eliminará com essa migração? (Selecione DUAS.)",
    options: [
      "A. Custo das operações do data center",
      "B. Custo de licenciamento de aplicações",
      "C. Custo das campanhas de marketing",
      "D. Custo do hardware do servidor físico",
      "E. Custo da gestão de rede",
    ],
    correctAnswer: [
      "A. Custo das operações do data center",
      "D. Custo do hardware do servidor físico",
    ],
    explanation:
      "Ao migrar para a AWS Cloud, a empresa pode eliminar custos associados a operações de data center e hardware de servidor físico.",
    multiSelect: true,
  },
  {
    question:
      "5. Qual dos seguintes atua como um firewall no nível da instância para controlar o acesso de entrada e saída?",
    options: [
      "A. Lista de controle de acesso de rede",
      "B. Grupos de segurança",
      "C. AWS Trusted Advisor",
      "D. Gateways privados virtuais",
    ],
    correctAnswer: ["B. Grupos de segurança"],
    explanation:
      "Grupos de segurança atuam como firewalls no nível da instância, permitindo controlar o acesso de entrada e saída para as instâncias Amazon EC2.",
    multiSelect: false,
  },
  {
    question: "6. Uma Zona de Disponibilidade consiste em:",
    options: [
      "A. Um ou mais data centers em um único local",
      "B. Dois ou mais data centers em locais múltiplos",
      "C. Um ou mais hosts físicos em um único data center",
      "D. Dois ou mais hosts físicos em múltiplos data centers",
    ],
    correctAnswer: ["A. Um ou mais data centers em um único local"],
    explanation:
      "Uma Zona de Disponibilidade na AWS consiste em um ou mais data centers isolados dentro de uma região, cada um com energia, refrigeração e segurança física independentes.",
    multiSelect: false,
  },
  {
    question:
      "7. Quais dos seguintes são princípios de design da nuvem AWS? (Selecione DOIS.)",
    options: [
      "A. Pagar pelos recursos de computação antecipadamente",
      "B. Tomar decisões baseadas em dados para determinar o design arquitetônico da nuvem",
      "C. Enfatizar processos manuais para permitir mudanças",
      "D. Testar sistemas em escala de produção",
      "E. Refinar procedimentos operacionais com pouca frequência",
    ],
    correctAnswer: [
      "B. Tomar decisões baseadas em dados para determinar o design arquitetônico da nuvem",
      "D. Testar sistemas em escala de produção",
    ],
    explanation:
      "Tomar decisões baseadas em dados e testar sistemas em escala de produção são princípios de design da nuvem AWS que ajudam a construir sistemas seguros, eficientes e operacionalmente sólidos.",
    multiSelect: true,
  },
  {
    question:
      "8. Qual ferramenta ou serviço AWS fornece recomendações para ajudar os usuários a obter instâncias Amazon EC2 dimensionadas corretamente com base nos dados de uso histórico da carga de trabalho?",
    options: [
      "A. AWS Pricing Calculator",
      "B. AWS Compute Optimizer",
      "C. AWS App Runner",
      "D. AWS Systems Manager",
    ],
    correctAnswer: ["B. AWS Compute Optimizer"],
    explanation:
      "O AWS Compute Optimizer fornece recomendações para ajudar os usuários a obter instâncias Amazon EC2 dimensionadas corretamente com base nos dados de uso histórico da carga de trabalho.",
    multiSelect: false,
  },
  {
    question:
      "9. Quais tarefas são responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DUAS.)",
    options: [
      "A. Patch de dispositivos de rede da AWS",
      "B. Definir regras de senha do usuário",
      "C. Fornecer segurança física para os recursos de computação",
      "D. Configurar grupos de segurança",
      "E. Patch do sistema operacional de uma instância Amazon EC2",
    ],
    correctAnswer: [
      "A. Patch de dispositivos de rede da AWS",
      "C. Fornecer segurança física para os recursos de computação",
    ],
    explanation:
      "Aplicar patches em dispositivos de rede da AWS e fornecer segurança física para os recursos de computação são tarefas que são responsabilidade da AWS.",
    multiSelect: true,
  },
  {
    question:
      "10. A equipe de TI de uma empresa está gerenciando clusters de servidores de banco de dados MySQL. A equipe tem que aplicar patches no banco de dados e tirar snapshots de backup dos dados nos clusters. A empresa deseja mover essa carga de trabalho para a AWS para que essas tarefas sejam concluídas automaticamente. O que a empresa deve fazer para atender a esses requisitos?",
    options: [
      "A. Implantar clusters de servidores de banco de dados MySQL em instâncias Amazon EC2",
      "B. Usar Amazon RDS com um banco de dados MySQL",
      "C. Usar um template AWS CloudFormation para implantar servidores de banco de dados MySQL em instâncias Amazon EC2",
      "D. Migrar todos os dados do banco de dados MySQL para o Amazon S3",
    ],
    correctAnswer: ["B. Usar Amazon RDS com um banco de dados MySQL"],
    explanation:
      "Usar Amazon RDS com um banco de dados MySQL permite automatizar tarefas como aplicação de patches e backups.",
    multiSelect: false,
  },
  {
    question:
      "11. Uma empresa tem uma carga de trabalho que requer que dados sejam coletados, analisados e armazenados on-premises. A empresa deseja estender o uso dos serviços AWS para funcionar on-premises com acesso à rede da empresa e ao VPC da empresa. Qual serviço AWS atende a esse requisito?",
    options: [
      "A. AWS Outposts",
      "B. AWS Storage Gateway",
      "C. AWS Direct Connect",
      "D. AWS Snowball",
    ],
    correctAnswer: ["A. AWS Outposts"],
    explanation:
      "O AWS Outposts permite executar serviços AWS on-premises, estendendo o AWS para ambientes físicos, mantendo uma experiência de nuvem consistente.",
    multiSelect: false,
  },
  {
    question:
      "12. Uma empresa está construindo uma arquitetura sem servidor que conecta dados de aplicativos de múltiplas fontes de dados. A empresa precisa de uma solução que não exija código adicional. Qual serviço AWS atende a esses requisitos?",
    options: [
      "A. AWS Lambda",
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "C. Amazon CloudWatch",
      "D. Amazon EventBridge",
    ],
    correctAnswer: ["D. Amazon EventBridge"],
    explanation:
      "Amazon EventBridge é uma solução sem servidor que facilita a conexão de dados de aplicativos de múltiplas fontes sem exigir código adicional.",
    multiSelect: false,
  },
  {
    question:
      "13. Uma empresa implanta sua aplicação em instâncias Amazon EC2. O aplicativo ocasionalmente experimenta aumentos súbitos na demanda. A empresa deseja garantir que seu aplicativo possa responder a mudanças na demanda com o menor custo possível. Qual serviço ou ferramenta AWS atenderá a esses requisitos?",
    options: [
      "A. AWS Auto Scaling",
      "B. AWS Compute Optimizer",
      "C. AWS Cost Explorer",
      "D. AWS Well-Architected Framework",
    ],
    correctAnswer: ["A. AWS Auto Scaling"],
    explanation:
      "O AWS Auto Scaling ajuda a garantir que a aplicação possa atender a aumentos súbitos na demanda de maneira custo-efetiva.",
    multiSelect: false,
  },
  {
    question:
      "14. Quais das seguintes são vantagens da nuvem AWS? (Selecione DUAS.)",
    options: [
      "A. Trocar despesas variáveis por despesas de capital",
      "B. Grandes economias de escala",
      "C. Lançar globalmente em minutos",
      "D. Concentrar-se na gestão da infraestrutura de hardware",
      "E. Superprovisionar para garantir capacidade",
    ],
    correctAnswer: [
      "B. Grandes economias de escala",
      "C. Lançar globalmente em minutos",
    ],
    explanation:
      "A nuvem AWS proporciona grandes economias de escala e a capacidade de lançar recursos globalmente em minutos.",
    multiSelect: true,
  },
  {
    question:
      "15. Quais tarefas são responsabilidades do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DUAS.)",
    options: [
      "A. Determinar dependências de aplicativos com sistemas operacionais",
      "B. Fornecer acesso de usuário com AWS Identity and Access Management (IAM)",
      "C. Garantir a segurança física do data center em uma Zona de Disponibilidade",
      "D. Aplicar patches no hipervisor",
      "E. Garantir a disponibilidade de rede em Zonas de Disponibilidade",
    ],
    correctAnswer: [
      "A. Determinar dependências de aplicativos com sistemas operacionais",
      "B. Fornecer acesso de usuário com AWS Identity and Access Management (IAM)",
    ],
    explanation:
      "É responsabilidade do cliente determinar dependências de aplicativos e fornecer acesso de usuário utilizando AWS IAM, conforme o modelo de responsabilidade compartilhada da AWS.",
    multiSelect: true,
  },
  {
    question:
      "16. Qual dos seguintes promove as melhores práticas arquitetônicas da AWS Cloud para projetar e operar sistemas confiáveis, seguros, eficientes e economicamente viáveis?",
    options: [
      "A. AWS Serverless Application Model framework",
      "B. AWS Business Support",
      "C. Princípio do privilégio mínimo",
      "D. AWS Well-Architected Framework",
    ],
    correctAnswer: ["D. AWS Well-Architected Framework"],
    explanation:
      "O AWS Well-Architected Framework promove as melhores práticas arquitetônicas da AWS Cloud para ajudar a projetar e operar sistemas que sejam confiáveis, seguros, eficientes e economicamente viáveis.",
    multiSelect: false,
  },
  {
    question:
      "17. Usar o Amazon Elastic Container Service (Amazon ECS) para quebrar uma arquitetura monolítica em microserviços é um exemplo de:",
    options: [
      "A. Uma arquitetura fracamente acoplada",
      "B. Uma arquitetura fortemente acoplada",
      "C. Uma arquitetura sem estado",
      "D. Uma arquitetura com estado",
    ],
    correctAnswer: ["A. Uma arquitetura fracamente acoplada"],
    explanation:
      "Usar o Amazon ECS para dividir uma arquitetura monolítica em microserviços é um exemplo de uma arquitetura fracamente acoplada, onde os componentes são independentes e comunicam-se entre si por meio de interfaces bem definidas.",
    multiSelect: false,
  },
  {
    question:
      "18. Uma empresa transfere sua infraestrutura de on-premises para a nuvem AWS. Agora, a empresa pode provisionar instâncias adicionais do Amazon EC2 sempre que necessário. Com essa capacidade, a empresa pode lançar novas campanhas de marketing em 3 dias em vez de 3 semanas. Qual benefício da nuvem AWS este cenário demonstra?",
    options: [
      "A. Economia de custos",
      "B. Resiliência operacional melhorada",
      "C. Agilidade de negócios aumentada",
      "D. Segurança aprimorada",
    ],
    correctAnswer: ["C. Agilidade de negócios aumentada"],
    explanation:
      "Este cenário demonstra a agilidade de negócios aumentada como um benefício da nuvem AWS, permitindo que a empresa responda rapidamente às necessidades do mercado e lance campanhas de marketing significativamente mais rápido.",
    multiSelect: false,
  },
  {
    question:
      "19. Uma empresa está usando um serviço de terceiros para fazer backup de 10 TB de dados em uma biblioteca de fitas. O servidor de backup local está ficando sem espaço. A empresa quer usar os serviços da AWS para os backups sem alterar seus fluxos de trabalho de backup existentes. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. AWS Storage Gateway",
      "C. Amazon Elastic Container Service (Amazon ECS)",
      "D. AWS Lambda",
    ],
    correctAnswer: ["B. AWS Storage Gateway"],
    explanation:
      "A empresa deve usar o AWS Storage Gateway, mais especificamente a opção Tape Gateway, para integrar seus fluxos de trabalho de backup existentes com a AWS sem a necessidade de alterações significativas, permitindo o backup para a nuvem de forma eficiente.",
    multiSelect: false,
  },
  {
    question:
      "20. Uma empresa precisa monitorar continuamente seu ambiente para analisar a atividade da rede e da conta e identificar ameaças de segurança potenciais. Qual serviço da AWS a empresa deve usar para atender a essas necessidades?",
    options: [
      "A. AWS Artifact",
      "B. Amazon Macie",
      "C. AWS Identity and Access Management (IAM)",
      "D. Amazon GuardDuty",
    ],
    correctAnswer: ["D. Amazon GuardDuty"],
    explanation:
      "Amazon GuardDuty é um serviço que oferece detecção de ameaças e monitoramento contínuo para o ambiente da AWS, analisando a atividade da rede e da conta para identificar comportamentos anormais ou não autorizados.",
    multiSelect: false,
  },
  {
    question:
      "21. Um engenheiro de nuvem deseja saber a porcentagem das unidades de computação alocadas que estão em uso para uma instância específica da Amazon EC2. Qual serviço da AWS pode fornecer essas informações?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS Artifact",
    ],
    correctAnswer: ["C. Amazon CloudWatch"],
    explanation:
      "Amazon CloudWatch pode fornecer métricas detalhadas sobre a utilização de instâncias da Amazon EC2, incluindo a porcentagem de unidades de computação alocadas em uso, permitindo aos usuários monitorar e otimizar o desempenho.",
    multiSelect: false,
  },
  {
    question:
      "22. Qual serviço ou recurso da AWS é utilizado para solucionar problemas de conectividade de rede entre instâncias da Amazon EC2?",
    options: [
      "A. AWS Certificate Manager (ACM)",
      "B. Gateway de Internet",
      "C. VPC Flow Logs",
      "D. AWS CloudHSM",
    ],
    correctAnswer: ["C. VPC Flow Logs"],
    explanation:
      "VPC Flow Logs permite que os usuários capturem informações sobre o tráfego IP que flui para dentro e para fora das interfaces de rede em sua VPC, ajudando na solução de problemas de conectividade de rede entre instâncias da Amazon EC2.",
    multiSelect: false,
  },
  {
    question:
      "23. Qual serviço da AWS fornece armazenamento de objetos altamente durável?",
    options: [
      "A. Amazon S3",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon FSx",
    ],
    correctAnswer: ["A. Amazon S3"],
    explanation:
      "Amazon S3 fornece armazenamento de objetos altamente durável, projetado para armazenar e recuperar qualquer quantidade de dados de qualquer lugar, oferecendo escalabilidade, segurança, durabilidade e alta disponibilidade.",
    multiSelect: false,
  },
  {
    question:
      "24. Qual serviço ou recurso da AWS dá aos usuários a capacidade de provisionar uma conexão de rede privada dedicada de sua rede interna para a AWS?",
    options: [
      "A. AWS CloudHSM",
      "B. AWS Direct Connect",
      "C. AWS VPN",
      "D. Amazon Connect",
    ],
    correctAnswer: ["B. AWS Direct Connect"],
    explanation:
      "AWS Direct Connect permite aos usuários estabelecer uma conexão de rede privada dedicada de sua rede interna para a AWS, o que pode reduzir custos de rede, aumentar a largura de banda e fornecer uma conexão mais consistente do que conexões baseadas em internet.",
    multiSelect: false,
  },
  {
    question:
      "25. Uma empresa está usando um serviço de terceiros para fazer backup de 10 TB de dados em uma biblioteca de fitas. O servidor de backup local está ficando sem espaço. A empresa quer usar os serviços da AWS para os backups sem alterar seus fluxos de trabalho de backup existentes. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. AWS Storage Gateway",
      "C. Amazon Elastic Container Service (Amazon ECS)",
      "D. AWS Lambda",
    ],
    correctAnswer: ["B. AWS Storage Gateway"],
    explanation:
      "A empresa deve usar o AWS Storage Gateway, mais especificamente a opção Tape Gateway, para integrar seus fluxos de trabalho de backup existentes com a AWS sem a necessidade de alterações significativas, permitindo o backup para a nuvem de forma eficiente.",
    multiSelect: false,
  },
  {
    question:
      "26. Uma empresa precisa monitorar continuamente seu ambiente para analisar a atividade da rede e da conta e identificar ameaças de segurança potenciais. Qual serviço da AWS a empresa deve usar para atender a essas necessidades?",
    options: [
      "A. AWS Artifact",
      "B. Amazon Macie",
      "C. AWS Identity and Access Management (IAM)",
      "D. Amazon GuardDuty",
    ],
    correctAnswer: ["D. Amazon GuardDuty"],
    explanation:
      "Amazon GuardDuty é um serviço que oferece detecção de ameaças e monitoramento contínuo para o ambiente da AWS, analisando a atividade da rede e da conta para identificar comportamentos anormais ou não autorizados.",
    multiSelect: false,
  },
  {
    question:
      "27. Um engenheiro de nuvem deseja saber a porcentagem das unidades de computação alocadas que estão em uso para uma instância específica da Amazon EC2. Qual serviço da AWS pode fornecer essas informações?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS Artifact",
    ],
    correctAnswer: ["C. Amazon CloudWatch"],
    explanation:
      "Amazon CloudWatch pode fornecer métricas detalhadas sobre a utilização de instâncias da Amazon EC2, incluindo a porcentagem de unidades de computação alocadas em uso, permitindo aos usuários monitorar e otimizar o desempenho.",
    multiSelect: false,
  },
  {
    question:
      "28. Qual serviço ou recurso da AWS é utilizado para solucionar problemas de conectividade de rede entre instâncias da Amazon EC2?",
    options: [
      "A. AWS Certificate Manager (ACM)",
      "B. Gateway de Internet",
      "C. VPC Flow Logs",
      "D. AWS CloudHSM",
    ],
    correctAnswer: ["C. VPC Flow Logs"],
    explanation:
      "VPC Flow Logs permite que os usuários capturem informações sobre o tráfego IP que flui para dentro e para fora das interfaces de rede em sua VPC, ajudando na solução de problemas de conectividade de rede entre instâncias da Amazon EC2.",
    multiSelect: false,
  },
  {
    question:
      "29. Qual serviço da AWS fornece armazenamento de objetos altamente durável?",
    options: [
      "A. Amazon S3",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon FSx",
    ],
    correctAnswer: ["A. Amazon S3"],
    explanation:
      "Amazon S3 fornece armazenamento de objetos altamente durável, projetado para armazenar e recuperar qualquer quantidade de dados de qualquer lugar, oferecendo escalabilidade, segurança, durabilidade e alta disponibilidade.",
    multiSelect: false,
  },
  {
    question:
      "30. Uma empresa deseja que suas instâncias da Amazon EC2 operem em um ambiente altamente disponível, mesmo em caso de desastre natural em uma área geográfica específica. Qual solução atinge esse objetivo?",
    options: [
      "A. Usar instâncias EC2 em uma única Zona de Disponibilidade",
      "B. Usar instâncias EC2 em múltiplas Regiões da AWS",
      "C. Usar instâncias EC2 em múltiplos locais de borda",
      "D. Usar Amazon CloudFront com as instâncias EC2 configuradas como origem",
    ],
    correctAnswer: ["B. Usar instâncias EC2 em múltiplas Regiões da AWS"],
    explanation:
      "Operar instâncias da Amazon EC2 em múltiplas Regiões da AWS pode garantir alta disponibilidade e continuidade dos serviços mesmo em caso de uma falha ou desastre natural em uma área geográfica específica.",
    multiSelect: false,
  },
  {
    question:
      "31. Qual serviço da AWS um engenheiro de nuvem deve usar para visualizar chamadas de API para serviços da AWS?",
    options: [
      "A. Amazon CloudWatch",
      "B. AWS CloudTrail",
      "C. AWS Config",
      "D. AWS Artifact",
    ],
    correctAnswer: ["B. AWS CloudTrail"],
    explanation:
      "AWS CloudTrail é o serviço que permite aos usuários gravar, monitorar e reter eventos relacionados a chamadas de API na AWS, fornecendo visibilidade sobre a atividade do usuário e operações realizadas em sua conta da AWS.",
    multiSelect: false,
  },
  {
    question:
      "32. Uma empresa precisa configurar regras para identificar ameaças e proteger aplicativos de acessos maliciosos na rede. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. Amazon QuickSight",
      "C. AWS WAF",
      "D. Amazon Detective",
    ],
    correctAnswer: ["C. AWS WAF"],
    explanation:
      "AWS WAF é o serviço que permite aos usuários criar regras personalizadas para bloquear padrões de tráfego maliciosos e proteger seus aplicativos de ameaças comuns na web.",
    multiSelect: false,
  },
  {
    question:
      "33. Uma empresa deseja migrar seu data warehouse local para a AWS. As informações no data warehouse são usadas para alimentar painéis de análise. Qual serviço da AWS a empresa deve usar para o data warehouse?",
    options: [
      "A. Amazon ElastiCache",
      "B. Amazon Aurora",
      "C. Amazon RDS",
      "D. Amazon Redshift",
    ],
    correctAnswer: ["D. Amazon Redshift"],
    explanation:
      "Amazon Redshift é o serviço de data warehouse da AWS, projetado especificamente para análises de grandes volumes de dados e ideal para alimentar painéis de análise com grandes conjuntos de dados.",
    multiSelect: false,
  },
  {
    question:
      "34. Uma empresa deseja hospedar seus bancos de dados relacionais na AWS. Os bancos de dados têm esquemas predefinidos que a empresa precisa replicar na AWS. Quais serviços da AWS a empresa poderia usar para os bancos de dados? (Selecione DOIS.)",
    options: [
      "A. Amazon Aurora",
      "B. Amazon RDS",
      "C. Amazon DocumentDB (com compatibilidade com MongoDB)",
      "D. Amazon Neptune",
      "E. Amazon DynamoDB",
    ],
    correctAnswer: ["A. Amazon Aurora", "B. Amazon RDS"],
    explanation:
      "Amazon Aurora e Amazon RDS são serviços da AWS que oferecem soluções para hospedar bancos de dados relacionais com esquemas predefinidos, fornecendo a capacidade de replicar, escalar e gerenciar esses bancos de dados de forma eficiente.",
    multiSelect: true,
  },
  {
    question:
      "35. Uma empresa de varejo está construindo um novo aplicativo móvel. A empresa está avaliando se deve construir o aplicativo em um data center local ou na nuvem AWS. Qual serviço a empresa deve considerar?",
    options: [
      "A. Amazon FSx para Windows File Server",
      "B. Amazon WorkSpaces virtual Windows desktop",
      "C. AWS Directory Service para Microsoft Active Directory",
      "D. Amazon RDS para Microsoft SQL Server",
    ],
    correctAnswer: ["C. AWS Directory Service para Microsoft Active Directory"],
    explanation:
      "AWS Directory Service para Microsoft Active Directory permite que a empresa utilize um serviço gerenciado para Active Directory na AWS, facilitando a integração e gerenciamento de usuários e recursos de segurança para o novo aplicativo móvel.",
    multiSelect: false,
  },
  {
    question:
      "36. Quais princípios de design apoiam o pilar de confiabilidade do AWS Well-Architected Framework? (Selecione DOIS.)",
    options: [
      "A. Realizar operações como código",
      "B. Habilitar rastreabilidade",
      "C. Escalar automaticamente para atender à demanda",
      "D. Implantar recursos globalmente para melhorar o tempo de resposta",
      "E. Recuperar-se automaticamente de falhas",
    ],
    correctAnswer: [
      "C. Escalar automaticamente para atender à demanda",
      "E. Recuperar-se automaticamente de falhas",
    ],
    explanation:
      "Os princípios de escalar automaticamente para atender à demanda e de recuperar-se automaticamente de falhas apoiam o pilar de confiabilidade do AWS Well-Architected Framework, garantindo que os sistemas possam lidar com alterações na demanda e se recuperar de interrupções.",
    multiSelect: true,
  },
  {
    question:
      "37. Um engenheiro de nuvem deseja conhecer o percentual de unidades de computação alocadas que estão em uso para uma instância específica da Amazon EC2. Qual serviço da AWS pode fornecer essas informações?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS Artifact",
    ],
    correctAnswer: ["C. Amazon CloudWatch"],
    explanation:
      "Amazon CloudWatch pode fornecer essa informação por meio de métricas que detalham a utilização de instâncias da Amazon EC2, permitindo que os usuários visualizem e otimizem o uso dos recursos.",
    multiSelect: false,
  },
  {
    question:
      "38. Qual serviço ou recurso da AWS é usado para solucionar problemas de conectividade de rede entre instâncias da Amazon EC2?",
    options: [
      "A. AWS Certificate Manager (ACM)",
      "B. Gateway de Internet",
      "C. VPC Flow Logs",
      "D. AWS CloudHSM",
    ],
    correctAnswer: ["C. VPC Flow Logs"],
    explanation:
      "VPC Flow Logs é um recurso que permite aos usuários capturar informações sobre o tráfego de rede para e de suas VPCs, ajudando a solucionar problemas de conectividade.",
    multiSelect: false,
  },
  {
    question:
      "39. Qual serviço da AWS fornece armazenamento de objetos altamente durável?",
    options: [
      "A. Amazon S3",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon FSx",
    ],
    correctAnswer: ["A. Amazon S3"],
    explanation:
      "Amazon S3 fornece armazenamento de objetos altamente durável, ideal para uma grande variedade de casos de uso de armazenamento na nuvem.",
    multiSelect: false,
  },
  {
    question:
      "40. Qual serviço ou recurso da AWS dá aos usuários a capacidade de provisionar uma conexão de rede privada dedicada de sua rede interna para a AWS?",
    options: [
      "A. AWS CloudHSM",
      "B. AWS Direct Connect",
      "C. AWS VPN",
      "D. Amazon Connect",
    ],
    correctAnswer: ["B. AWS Direct Connect"],
    explanation:
      "AWS Direct Connect permite aos usuários estabelecer uma conexão de rede privada dedicada de suas redes internas para a AWS, proporcionando uma experiência de rede mais consistente e com maior largura de banda.",
    multiSelect: false,
  },
  {
    question:
      "41. Uma empresa deseja que suas instâncias da Amazon EC2 operem em um ambiente altamente disponível, mesmo em caso de desastre natural em uma área geográfica específica. Qual solução atinge esse objetivo?",
    options: [
      "A. Usar instâncias EC2 em uma única Zona de Disponibilidade",
      "B. Usar instâncias EC2 em múltiplas Regiões da AWS",
      "C. Usar instâncias EC2 em múltiplos locais de borda",
      "D. Usar Amazon CloudFront com as instâncias EC2 configuradas como a origem",
    ],
    correctAnswer: ["B. Usar instâncias EC2 em múltiplas Regiões da AWS"],
    explanation:
      "Usar instâncias EC2 em múltiplas Regiões da AWS pode ajudar a garantir a alta disponibilidade do aplicativo, mesmo em caso de desastres naturais que afetem uma área geográfica específica.",
    multiSelect: false,
  },
  {
    question:
      "42. Qual é o método recomendado para proteger dados sensíveis em trânsito na AWS?",
    options: [
      "A. Usar o AWS Shield",
      "B. Usar SSL/TLS",
      "C. Usar o AWS WAF",
      "D. Usar políticas de segurança IAM",
    ],
    correctAnswer: ["B. Usar SSL/TLS"],
    explanation:
      "O método recomendado para proteger dados sensíveis em trânsito na AWS é o uso de SSL/TLS (Secure Socket Layer/Transport Layer Security), que criptografa os dados em trânsito e assegura uma comunicação segura.",
    multiSelect: false,
  },
  {
    question:
      "43. O que o Amazon RDS automatiza que beneficia os administradores de banco de dados?",
    options: [
      "A. Escrita de consultas SQL",
      "B. Design de esquema de banco de dados",
      "C. Backup e recuperação de instâncias de banco de dados",
      "D. Geração de relatórios de negócios",
    ],
    correctAnswer: ["C. Backup e recuperação de instâncias de banco de dados"],
    explanation:
      "O Amazon RDS automatiza tarefas de administração de banco de dados, como backups, patching e recuperação, o que beneficia os administradores de banco de dados ao reduzir a carga de trabalho manual.",
    multiSelect: false,
  },
  {
    question:
      "44. Qual AWS service é melhor para distribuir o tráfego entre múltiplas instâncias da Amazon EC2?",
    options: [
      "A. Amazon EC2 Auto Scaling",
      "B. AWS Direct Connect",
      "C. Amazon Route 53",
      "D. Elastic Load Balancer",
    ],
    correctAnswer: ["D. Elastic Load Balancer"],
    explanation:
      "O Elastic Load Balancer (ELB) é o serviço AWS projetado para distribuir automaticamente o tráfego de entrada entre várias instâncias da Amazon EC2, garantindo a alta disponibilidade e escalabilidade da aplicação.",
    multiSelect: false,
  },
  {
    question: "45. Qual é a função do AWS CloudFormation?",
    options: [
      "A. Monitorar o desempenho da aplicação",
      "B. Gerenciar a segurança da rede",
      "C. Provisionar e gerenciar recursos da AWS",
      "D. Automatizar o deploy de aplicativos",
    ],
    correctAnswer: ["C. Provisionar e gerenciar recursos da AWS"],
    explanation:
      "O AWS CloudFormation permite aos usuários provisionar e gerenciar recursos da AWS, usando 'modelos' para criar e gerenciar uma coleção de recursos relacionados, automatizando sua infraestrutura como código.",
    multiSelect: false,
  },
  {
    question: "46. Como os custos são calculados no Amazon S3?",
    options: [
      "A. Baseado no número de solicitações GET",
      "B. Baseado no número de objetos armazenados",
      "C. Baseado no tamanho total dos dados armazenados e transferência de dados",
      "D. Baseado na duração do armazenamento de dados",
    ],
    correctAnswer: [
      "C. Baseado no tamanho total dos dados armazenados e transferência de dados",
    ],
    explanation:
      "Os custos no Amazon S3 são calculados com base no tamanho total dos dados armazenados e na transferência de dados, incluindo o armazenamento de objetos, solicitações e transferências de dados.",
    multiSelect: false,
  },
  {
    question:
      "47. Qual serviço AWS ajuda na detecção de falhas de segurança em aplicações?",
    options: [
      "A. AWS Inspector",
      "B. AWS Shield",
      "C. Amazon GuardDuty",
      "D. AWS WAF",
    ],
    correctAnswer: ["A. AWS Inspector"],
    explanation:
      "AWS Inspector é um serviço de avaliação de segurança automático que ajuda a melhorar a segurança e a conformidade das aplicações, detectando falhas de segurança e vulnerabilidades.",
    multiSelect: false,
  },
  {
    question: "48. Qual característica descreve o Amazon DynamoDB?",
    options: [
      "A. Banco de dados relacional",
      "B. Banco de dados de documentos",
      "C. Banco de dados NoSQL",
      "D. Data warehouse",
    ],
    correctAnswer: ["C. Banco de dados NoSQL"],
    explanation:
      "O Amazon DynamoDB é um banco de dados NoSQL rápido e flexível, projetado para aplicações de Internet em escala, proporcionando alta performance, escalabilidade e confiabilidade.",
    multiSelect: false,
  },
  {
    question: "49. O que o AWS Lambda permite aos desenvolvedores fazer?",
    options: [
      "A. Gerenciar instâncias EC2",
      "B. Executar código em resposta a gatilhos",
      "C. Alocar automaticamente Elastic IP",
      "D. Monitorar aplicações em tempo real",
    ],
    correctAnswer: ["B. Executar código em resposta a gatilhos"],
    explanation:
      "O AWS Lambda permite aos desenvolvedores executar código em resposta a gatilhos como mudanças em dados ou solicitações de usuário, sem provisionar ou gerenciar servidores.",
    multiSelect: false,
  },
  {
    question: "50. Qual é o propósito principal do Amazon S3?",
    options: [
      "A. Executar funções sem servidor",
      "B. Armazenamento de objetos escalável",
      "C. Hospedar aplicações web",
      "D. Processamento de dados em grande escala",
    ],
    correctAnswer: ["B. Armazenamento de objetos escalável"],
    explanation:
      "O propósito principal do Amazon S3 é fornecer um armazenamento de objetos escalável, com durabilidade e disponibilidade de dados para uma ampla gama de casos de uso.",
    multiSelect: false,
  },
  {
    question: "51. O que é AWS Direct Connect?",
    options: [
      "A. Um serviço para conectar redes on-premises à AWS",
      "B. Uma ferramenta para transferência de arquivos grandes",
      "C. Um serviço de mensageria instantânea",
      "D. Um sistema de gerenciamento de banco de dados",
    ],
    correctAnswer: ["A. Um serviço para conectar redes on-premises à AWS"],
    explanation:
      "O AWS Direct Connect é um serviço que fornece uma conexão de rede dedicada de sua infraestrutura on-premises para a AWS, reduzindo custos de rede, aumentando a largura de banda e proporcionando uma experiência de rede mais consistente.",
    multiSelect: false,
  },
  {
    question:
      "52. Qual serviço da AWS um engenheiro de nuvem deve usar para visualizar chamadas de API para serviços da AWS?",
    options: [
      "A. Amazon CloudWatch",
      "B. AWS CloudTrail",
      "C. AWS Config",
      "D. AWS Artifact",
    ],
    correctAnswer: ["B. AWS CloudTrail"],
    explanation:
      "AWS CloudTrail é um serviço que fornece um histórico das chamadas de API para serviços da AWS, permitindo aos usuários auditar e revisar atividades na conta.",
    multiSelect: false,
  },
  {
    question:
      "53. Como um usuário da AWS pode realizar avaliações de segurança em instâncias Amazon EC2, NAT gateways e Elastic Load Balancers de forma aprovada pela AWS?",
    options: [
      "A. Inundar um alvo com solicitações",
      "B. Usar o Amazon Inspector",
      "C. Realizar testes de penetração",
      "D. Usar o AWS Service Health Dashboard",
    ],
    correctAnswer: ["B. Usar o Amazon Inspector"],
    explanation:
      "O Amazon Inspector é um serviço de avaliação de segurança automatizado que ajuda a melhorar a segurança e a conformidade de aplicações implantadas na AWS. Após realizar uma avaliação, o Amazon Inspector produz uma lista detalhada de achados de segurança priorizados pelo nível de gravidade.",
    multiSelect: false,
  },
  {
    question:
      "54. Quais fatores afetam os custos na nuvem da AWS? (Selecione DOIS.)",
    options: [
      "A. O número de funções AWS Lambda não utilizadas",
      "B. O número de buckets Amazon S3 configurados",
      "C. Transferências de dados de entrada sem aceleração",
      "D. Transferências de dados de saída sem aceleração",
      "E. Recursos de computação que estão atualmente em uso",
    ],
    correctAnswer: [
      "D. Transferências de dados de saída sem aceleração",
      "E. Recursos de computação que estão atualmente em uso",
    ],
    explanation:
      "Transferências de dados de saída sem aceleração e recursos de computação que estão atualmente em uso são fatores que afetam os custos na nuvem da AWS.",
    multiSelect: true,
  },
  {
    question:
      "55. Qual é um princípio de eficiência de custos relacionado à nuvem da AWS?",
    options: [
      "A. Dimensionar corretamente os serviços com base nas necessidades de capacidade",
      "B. Usar o Painel de Cobrança para acessar informações sobre contas mensais",
      "C. Usar AWS Organizations para combinar as despesas de várias contas em uma única fatura",
      "D. Marcar todos os recursos da AWS",
    ],
    correctAnswer: [
      "A. Dimensionar corretamente os serviços com base nas necessidades de capacidade",
    ],
    explanation:
      "Um dos princípios de eficiência de custos relacionados à nuvem da AWS é dimensionar corretamente os serviços com base nas necessidades de capacidade. Isso significa escolher o tipo e tamanho mais apropriados de recursos da AWS para atender às necessidades de desempenho e escalabilidade das aplicações, evitando superdimensionamento ou subdimensionamento.",
    multiSelect: false,
  },
  {
    question:
      "56. Uma empresa está configurando seu ambiente de nuvem da AWS. Os administradores da empresa precisam agrupar usuários e aplicar permissões ao grupo. Qual serviço ou recurso da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "A. AWS Organizations",
      "B. Grupos de recursos",
      "C. Marcação de recursos",
      "D. AWS Identity and Access Management (IAM)",
    ],
    correctAnswer: ["D. AWS Identity and Access Management (IAM)"],
    explanation:
      "O serviço ou recurso da AWS que a empresa pode usar para agrupar usuários e aplicar permissões ao grupo é o AWS Identity and Access Management (IAM). O IAM permite criar e gerenciar usuários e grupos e atribuir políticas que definem as permissões para os usuários nos grupos.",
    multiSelect: false,
  },
  {
    question:
      "57. Uma empresa quer garantir que duas instâncias Amazon EC2 estejam em centros de dados separados com latência mínima de comunicação entre os centros. Como a empresa pode atender a esse requisito?",
    options: [
      "A. Colocar as instâncias EC2 em duas regiões AWS separadas conectadas com uma conexão de emparelhamento VPC",
      "B. Colocar as instâncias EC2 em duas zonas de disponibilidade separadas dentro da mesma região AWS",
      "C. Colocar uma instância EC2 no local e a outra em uma região AWS. Em seguida, conectá-las usando uma conexão de VPN da AWS",
      "D. Colocar ambas as instâncias EC2 em um grupo de colocação para largura de banda dedicada",
    ],
    correctAnswer: [
      "B. Colocar as instâncias EC2 em duas zonas de disponibilidade separadas dentro da mesma região AWS",
    ],
    explanation:
      "Colocar as instâncias EC2 em duas zonas de disponibilidade separadas dentro da mesma região AWS é a melhor maneira de atender ao requisito. Zonas de disponibilidade são locais isolados dentro de uma região AWS que possuem energia independente, refrigeração e segurança física, e estão conectadas entre si com redes de alta largura de banda e baixa latência.",
    multiSelect: false,
  },
  {
    question:
      "58. Um engenheiro de segurança deseja uma solução da AWS de locatário único para criar, controlar e gerenciar suas próprias chaves criptográficas para atender aos requisitos regulatórios de segurança de dados. Qual serviço da AWS o engenheiro deve usar?",
    options: [
      "A. AWS Key Management Service (AWS KMS)",
      "B. AWS Certificate Manager (ACM)",
      "C. AWS CloudHSM",
      "D. AWS Systems Manager",
    ],
    correctAnswer: ["C. AWS CloudHSM"],
    explanation:
      "O serviço da AWS que o engenheiro deve usar é o AWS CloudHSM. O AWS CloudHSM oferece módulos de segurança de hardware (HSMs) dedicados que permitem aos clientes criar, controlar e gerenciar suas próprias chaves criptográficas na nuvem da AWS.",
    multiSelect: false,
  },
  {
    question:
      "59. Uma empresa está projetando uma solução de gerenciamento de acesso e identidade para uma aplicação. A empresa quer que os usuários possam usar suas contas de mídia social, email ou compras online para acessar a aplicação. Qual serviço da AWS oferece essa funcionalidade?",
    options: [
      "A. AWS IAM Identity Center (AWS Single Sign-On)",
      "B. AWS Config",
      "C. Amazon Cognito",
      "D. AWS Identity and Access Management (IAM)",
    ],
    correctAnswer: ["C. Amazon Cognito"],
    explanation:
      "A resposta correta é C porque o Amazon Cognito fornece federação de identidade e autenticação de usuário para aplicações web e móveis. O Amazon Cognito permite que os usuários façam login com suas contas de mídia social, email ou compras online.",
    multiSelect: false,
  },
  {
    question:
      "60. Qual é o benefício de migrar para a nuvem AWS em termos de melhoria do tempo de colocação no mercado?",
    options: [
      "A. Velocidade de implantação reduzida",
      "B. Segurança de aplicativos aumentada",
      "C. Aumento da agilidade empresarial",
      "D. Capacidades de backup aumentadas",
    ],
    correctAnswer: ["C. Aumento da agilidade empresarial"],
    explanation:
      "A agilidade empresarial aumentada é um benefício de migrar para a nuvem AWS em termos de melhoria do tempo de colocação no mercado.",
    multiSelect: false,
  },
  {
    question:
      "61. Qual benefício está incluído no plano de Suporte Empresarial da AWS?",
    options: [
      "A. Suporte da Rede de Parceiros AWS (APN) sem custo",
      "B. Suporte designado de um gerente de conta técnica da AWS (TAM)",
      "C. Suporte no local de engenheiros da AWS",
      "D. Compliance gerenciado pela AWS como código com AWS Config",
    ],
    correctAnswer: [
      "B. Suporte designado de um gerente de conta técnica da AWS (TAM)",
    ],
    explanation:
      "O plano de Suporte Empresarial da AWS é o nível mais alto de suporte que oferece aos clientes um serviço semelhante a um concierge, onde o foco principal é ajudá-los a alcançar seus resultados e encontrar sucesso na nuvem.",
    multiSelect: false,
  },
  {
    question:
      "62. Uma empresa deseja acompanhar os custos de serviço da sua conta AWS. A empresa também deseja receber notificações quando os custos previstos alcançarem um nível específico. Qual serviço ou ferramenta da AWS oferece essa funcionalidade?",
    options: [
      "A. AWS Budgets",
      "B. AWS Cost Explorer",
      "C. Planos de Economia",
      "D. AWS Billing Conductor",
    ],
    correctAnswer: ["A. AWS Budgets"],
    explanation:
      "O AWS Budgets permite definir orçamentos personalizados que alertam você quando seus custos ou uso excedem (ou estão previstos para exceder) a quantia orçada.",
    multiSelect: false,
  },
  {
    question:
      "63. Qual pilar do AWS Well-Architected Framework foca no retorno sobre o investimento de migrar para a nuvem AWS?",
    options: [
      "A. Sustentabilidade",
      "B. Otimização de custos",
      "C. Excelência operacional",
      "D. Confiabilidade",
    ],
    correctAnswer: ["B. Otimização de custos"],
    explanation:
      "A otimização de custos é o pilar do AWS Well-Architected Framework que foca no retorno sobre o investimento de migrar para a nuvem AWS.",
    multiSelect: false,
  },
  {
    question:
      "64. Qual pilar do AWS Well-Architected Framework foca na capacidade de executar workloads de forma eficaz, obter insights sobre operações e melhorar continuamente os processos e procedimentos de suporte?",
    options: [
      "A. Otimização de custos",
      "B. Confiabilidade",
      "C. Excelência operacional",
      "D. Eficiência de desempenho",
    ],
    correctAnswer: ["C. Excelência operacional"],
    explanation:
      "O pilar de excelência operacional do AWS Well-Architected Framework foca na capacidade de executar workloads de forma eficaz, obter insights sobre operações e melhorar continuamente os processos e procedimentos de suporte.",
    multiSelect: false,
  },
  {
    question:
      "65. Qual das seguintes é uma característica do usuário raiz da conta AWS?",
    options: [
      "A. O usuário raiz é o único usuário que pode ser configurado com autenticação de dois fatores (MFA).",
      "B. O usuário raiz é o único usuário que pode acessar o Console de Gerenciamento da AWS.",
      "C. O usuário raiz é a primeira identidade de login disponível quando uma conta AWS é criada.",
      "D. O usuário raiz tem uma senha que não pode ser alterada.",
    ],
    correctAnswer: [
      "C. O usuário raiz é a primeira identidade de login disponível quando uma conta AWS é criada.",
    ],
    explanation:
      "O usuário raiz da conta AWS é a primeira identidade de login disponível quando uma conta AWS é criada. Ele tem acesso completo a todos os serviços e recursos da conta.",
    multiSelect: false,
  },
  {
    question:
      "66. Quais opções a AWS disponibiliza para clientes que desejam aprender sobre segurança na nuvem em um ambiente conduzido por instrutor? (Selecione DUAS.)",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Online Tech Talks",
      "C. Blog da AWS",
      "D. Fóruns da AWS",
      "E. Treinamento em Sala de Aula da AWS",
    ],
    correctAnswer: [
      "B. AWS Online Tech Talks",
      "E. Treinamento em Sala de Aula da AWS",
    ],
    explanation:
      "As opções corretas são B e E porque os AWS Online Tech Talks e o Treinamento em Sala de Aula da AWS são opções disponibilizadas pela AWS para clientes que desejam aprender sobre segurança na nuvem em um ambiente conduzido por instrutor.",
    multiSelect: true,
  },
  {
    question:
      "67. Qual serviço da AWS utiliza uma combinação de publishers e assinantes?",
    options: [
      "A. AWS Lambda",
      "B. Amazon Simple Notification Service (Amazon SNS)",
      "C. Amazon CloudWatch",
      "D. AWS CloudFormation",
    ],
    correctAnswer: ["B. Amazon Simple Notification Service (Amazon SNS)"],
    explanation:
      "O Amazon Simple Notification Service (Amazon SNS) é um serviço que oferece mensagens pub/sub totalmente gerenciadas. A mensageria pub/sub é um padrão que utiliza uma combinação de publicadores e assinantes.",
    multiSelect: false,
  },
  {
    question:
      "68. Quais das seguintes são vantagens que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS? (Selecione DUAS.)",
    options: [
      "A. A AWS treina a equipe da empresa no uso de todos os serviços AWS.",
      "B. A AWS gerencia toda a segurança na nuvem.",
      "C. A AWS oferece suporte gratuito de gerentes de contas técnicas (TAMs).",
      "D. A AWS oferece alta disponibilidade.",
      "E. A AWS fornece economias de escala.",
    ],
    correctAnswer: [
      "D. A AWS oferece alta disponibilidade.",
      "E. A AWS fornece economias de escala.",
    ],
    explanation:
      "As respostas corretas são D e E porque a AWS oferece alta disponibilidade e a AWS fornece economias de escala, que são vantagens que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS. Alta disponibilidade significa que a AWS tem uma infraestrutura global que permite aos clientes implantar seus aplicativos e dados em várias regiões e zonas de disponibilidade. Isso aumenta a tolerância a falhas e a resiliência de seus aplicativos e reduz o impacto das falhas. Economias de escala significam que a AWS pode alcançar custos variáveis mais baixos do que os clientes podem conseguir por conta própria. Isso permite que os clientes paguem apenas pelos recursos que usam e escalem para cima ou para baixo conforme necessário.",
    multiSelect: true,
  },
  {
    question:
      "69. Qual dos seguintes representa um conceito de nuvem que essa arquitetura representa ao implantar um aplicativo em várias regiões da AWS e configurar a falha automática entre essas regiões?",
    options: [
      "A. Segurança",
      "B. Confiabilidade",
      "C. Escalabilidade",
      "D. Otimização de custos",
    ],
    correctAnswer: ["B. Confiabilidade"],
    explanation:
      "A confiabilidade é o conceito de nuvem que esta arquitetura representa. Confiabilidade é a capacidade de um sistema de se recuperar de interrupções da infraestrutura ou serviço, adquirir dinamicamente recursos de computação para atender à demanda e mitigar interrupções como configurações incorretas ou problemas de rede transitórios. Implantar um aplicativo em várias regiões da AWS e configurar a falha automática entre essas regiões aumenta a confiabilidade do aplicativo, reduzindo o impacto das falhas regionais e aumentando a disponibilidade do aplicativo.",
    multiSelect: false,
  },
  {
    question:
      "70. Qual dos seguintes é um benefício de desacoplar uma arquitetura de nuvem AWS?",
    options: [
      "A. Latência reduzida",
      "B. Capacidade de atualizar componentes independentemente",
      "C. Custos diminuídos",
      "D. Menos componentes para gerenciar",
    ],
    correctAnswer: ["B. Capacidade de atualizar componentes independentemente"],
    explanation:
      "Um benefício de desacoplar uma arquitetura de nuvem AWS é a capacidade de atualizar componentes independentemente. O desacoplamento é uma forma de projetar sistemas para reduzir interdependências e minimizar o impacto de mudanças. O desacoplamento permite que os componentes interajam entre si por meio de interfaces bem definidas, em vez de referências diretas. Isso reduz o risco de falhas e erros se propagarem pelo sistema e permite maior escalabilidade, disponibilidade e manutenção. Ao desacoplar uma arquitetura de nuvem AWS, o usuário pode atualizar ou modificar um componente sem afetar os outros componentes.",
    multiSelect: false,
  },
  {
    question:
      "71. Uma empresa está lançando um novo aplicativo na nuvem AWS. O aplicativo será executado em uma instância da Amazon EC2. Mais instâncias EC2 serão necessárias quando a carga de trabalho aumentar. Qual serviço ou ferramenta AWS a empresa pode usar para lançar o número de instâncias EC2 necessárias para lidar com a carga de trabalho?",
    options: [
      "A. Balanceamento de Carga Elástico",
      "B. Auto Scaling da Amazon EC2",
      "C. AWS App2Container (A2C)",
      "D. AWS Systems Manager",
    ],
    correctAnswer: ["B. Auto Scaling da Amazon EC2"],
    explanation:
      "O Auto Scaling da Amazon EC2 é o serviço ou ferramenta AWS que pode ajudar a empresa a lançar o número de instâncias EC2 necessárias para lidar com a carga de trabalho. O Auto Scaling da Amazon EC2 ajusta automaticamente a capacidade das instâncias EC2 com base na demanda e nas políticas de escalonamento pré-definidas. O Auto Scaling da Amazon EC2 também ajuda a melhorar a disponibilidade e reduzir os custos, escalando dentro e fora conforme necessário.",
    multiSelect: false,
  },
  {
    question:
      "72. Quais dos seguintes serviços ou recursos da AWS permitem a notação de bloco CIDR ao fornecer um intervalo de endereços IP? (Selecione DUAS.)",
    options: [
      "A. Security groups",
      "B. Amazon Machine Image (AMI)",
      "C. Network access control list (network ACL)",
      "D. AWS Budgets",
      "E. Amazon Elastic Block Store (Amazon EBS)",
    ],
    correctAnswer: [
      "A. Security groups",
      "C. Network access control list (network ACL)",
    ],
    explanation:
      "As respostas corretas são A e C porque os grupos de segurança e as listas de controle de acesso à rede (Network ACLs) são serviços ou recursos da AWS que permitem a notação de bloco CIDR ao fornecer um intervalo de endereços IP. Os grupos de segurança atuam como um firewall para as instâncias do Amazon EC2 associadas, controlando o tráfego de entrada e saída no nível da instância. As Network ACLs atuam como um firewall para as sub-redes associadas, controlando o tráfego de entrada e saída no nível da sub-rede. Ambos, grupos de segurança e Network ACLs, usam a notação de bloco CIDR para especificar os intervalos de endereços IP que são permitidos ou negados.",
    multiSelect: true,
  },

  {
    question:
      "73. Qual dos seguintes serviços AWS fornece a capacidade de hospedar um banco de dados NoSQL na Nuvem AWS?",
    options: [
      "A. Amazon Aurora",
      "B. Amazon DynamoDB",
      "C. Amazon RDS",
      "D. Amazon Redshift",
    ],
    correctAnswer: ["B. Amazon DynamoDB"],
    explanation:
      "O Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e previsível com escalabilidade perfeita. Ele suporta modelos de dados de chave-valor e documento, e permite que você crie tabelas que podem armazenar e recuperar qualquer quantidade de dados e atender a qualquer nível de tráfego de solicitações. Você também pode usar os Streams do DynamoDB para capturar eventos de modificação de dados nas tabelas do DynamoDB.",
    multiSelect: false,
  },

  {
    question:
      "74. Qual serviço da AWS um usuário pode usar para identificar qualquer grupo de segurança que esteja permitindo tráfego SSH de entrada irrestrito?",
    options: [
      "A. Amazon Cognito",
      "B. AWS Shield",
      "C. Amazon Macie",
      "D. AWS Trusted Advisor",
    ],
    correctAnswer: ["D. AWS Trusted Advisor"],
    explanation:
      "A resposta correta para a questão é D porque o AWS Trusted Advisor é um serviço da AWS que pode ser usado para realizar a tarefa de identificar qualquer grupo de segurança que permita tráfego SSH de entrada irrestrito. O AWS Trusted Advisor avalia o ambiente AWS do cliente e identifica maneiras de otimizar sua infraestrutura AWS, melhorar a segurança e o desempenho, reduzir custos e monitorar cotas de serviço. Uma das verificações que o Trusted Advisor realiza é a verificação Security Groups - Specific Ports Unrestricted, que sinaliza grupos de segurança que permitem acesso irrestrito a portas específicas, como a porta 22 para SSH. Os clientes podem usar essa verificação para revisar e modificar as regras do grupo de segurança para restringir o acesso SSH apenas a fontes autorizadas.",
    multiSelect: false,
  },

  {
    question:
      "75. Uma empresa deseja usar a AWS Cloud para gerenciar o acesso e as permissões para seus aplicativos de software como serviço (SaaS) de terceiros. A empresa deseja usar um portal onde os usuários finais possam acessar contas e aplicativos AWS atribuídos na nuvem.",
    options: [
      "A. Amazon Cognito",
      "B. AWS IAM Identity Center (AWS Single Sign-On)",
      "C. AWS Identity and Access Management (IAM)",
      "D. AWS Directory Service for Microsoft Active Directory",
    ],
    correctAnswer: ["B. AWS IAM Identity Center (AWS Single Sign-On)"],
    explanation:
      "O AWS IAM Identity Center (AWS Single Sign-On) é o serviço da AWS que a empresa deve usar para atender aos requisitos de gerenciamento de acesso e permissões para seus aplicativos SaaS de terceiros. O AWS Single Sign-On é um serviço baseado na nuvem que facilita o gerenciamento centralizado do acesso single sign-on (SSO) a várias contas AWS e aplicativos corporativos. Você pode usar o AWS Single Sign-On para permitir que seus usuários façam login em um portal de usuário com suas credenciais corporativas existentes e acessem todas as suas contas e aplicativos atribuídos de um único lugar.",
    multiSelect: false,
  },

  {
    question:
      "76. Qual serviço AWS é um serviço web DNS altamente disponível e escalável?",
    options: [
      "A. Amazon VPC",
      "B. Amazon CloudFront",
      "C. Amazon Route 53",
      "D. Amazon Connect",
    ],
    correctAnswer: ["C. Amazon Route 53"],
    explanation:
      "O Amazon Route 53 é um serviço web DNS altamente disponível e escalável. Ele é projetado para oferecer aos desenvolvedores e empresas uma maneira extremamente confiável e econômica de rotear usuários finais para aplicativos da Internet, traduzindo nomes de domínio nos endereços IP numéricos que os computadores usam para se conectar uns aos outros. O Amazon Route 53 também oferece outros recursos, como verificações de integridade, gerenciamento de tráfego, registro de nome de domínio e DNSSEC.",
    multiSelect: false,
  },

  {
    question:
      "77. Qual é a quantidade total de armazenamento oferecida pelo Amazon S3?",
    options: ["A. 100MB", "B. 5 GB", "C. 5 TB", "D. Ilimitado"],
    correctAnswer: ["D. Ilimitado"],
    explanation:
      "O Amazon S3 oferece armazenamento ilimitado para qualquer quantidade de dados. Você pode armazenar quantos objetos quiser, e cada objeto pode ter até 5 terabytes. Você paga apenas pelo espaço de armazenamento que realmente usa, e não há compromissos mínimos ou taxas antecipadas. O Amazon S3 também fornece alta durabilidade, disponibilidade, escalabilidade e segurança para seus dados.",
    multiSelect: false,
  },

  {
    question:
      "78. Uma grande empresa tem uma carga de trabalho que exige que o hardware permaneça local. A empresa deseja usar os mesmos serviços de plano de controle e gerenciamento que atualmente usa na AWS.",
    options: [
      "A. AWS Device Farm",
      "B. AWS Fargate",
      "C. AWS Outposts",
      "D. AWS Ground Station",
    ],
    correctAnswer: ["C. AWS Outposts"],
    explanation:
      "A resposta correta é C porque o AWS Outposts é um serviço da AWS que permite que a empresa atenda aos requisitos. O AWS Outposts é um serviço totalmente gerenciado que estende a infraestrutura, os serviços, as APIs e as ferramentas da AWS para praticamente qualquer data center, espaço de co-localização ou instalação local. O AWS Outposts permite que os clientes executem suas cargas de trabalho no mesmo hardware e software que a AWS usa em sua nuvem, mantendo o acesso e controle locais. As outras opções estão incorretas porque não são serviços da AWS que permitem que a empresa atenda aos requisitos. O AWS Device Farm é um serviço da AWS que permite que os clientes testem seus aplicativos móveis e da web em dispositivos reais na nuvem da AWS. O AWS Fargate é um serviço da AWS que permite que os clientes executem contêineres sem ter que gerenciar servidores ou clusters. O AWS Ground Station é um serviço da AWS que permite que os clientes se comuniquem com satélites e baixem dados da órbita.",
    multiSelect: false,
  },

  {
    question:
      "79. Quais são as responsabilidades de uma empresa que está usando o AWS Lambda? (Selecione DUAS.)",
    options: [
      "A. Segurança dentro do código",
      "B. Seleção de recursos de CPU",
      "C. Aplicação de patches no sistema operacional",
      "D. Escrita e atualização do código",
      "E. Segurança da infraestrutura subjacente",
    ],
    correctAnswer: [
      "A. Segurança dentro do código",
      "D. Escrita e atualização do código",
    ],
    explanation:
      "As responsabilidades de uma empresa que está usando o AWS Lambda são a segurança dentro do código e a escrita e atualização do código. O AWS Lambda é um serviço de computação sem servidor que permite que você execute código sem provisionar ou gerenciar servidores, escalonamento ou aplicação de patches. O AWS Lambda cuida da segurança da infraestrutura subjacente, como o sistema operacional, a rede e o firewall. No entanto, a empresa ainda é responsável pela segurança do código em si, como criptografar dados confidenciais, validar a entrada e tratar erros. A empresa também é responsável por escrever e atualizar o código que define a função Lambda e escolher o ambiente de runtime, como Node.js, Python ou Java. O AWS Lambda não requer a seleção de recursos de CPU, pois aloca automaticamente com base na configuração de memória.",
    multiSelect: true,
  },

  {
    question:
      "80. Quais das seguintes são responsabilidades do cliente de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DUAS.)",
    options: [
      "A. Segurança física das instalações da AWS",
      "B. Configuração de grupos de segurança",
      "C. Criptografia de dados do cliente na AWS",
      "D. Gerenciamento da infraestrutura do AWS Lambda",
      "E. Gerenciamento da largura de banda de rede de cada região da AWS",
    ],
    correctAnswer: [
      "B. Configuração de grupos de segurança",
      "C. Criptografia de dados do cliente na AWS",
    ],
    explanation:
      "O modelo de responsabilidade compartilhada da AWS descreve como a AWS e o cliente compartilham a responsabilidade pela segurança e conformidade do ambiente AWS. A AWS é responsável pela segurança da nuvem, que inclui a segurança física das instalações da AWS, a infraestrutura, o hardware, o software e a rede que executam os serviços da AWS. O cliente é responsável pela segurança na nuvem, que inclui a configuração de grupos de segurança, a criptografia de dados do cliente na AWS, o gerenciamento da infraestrutura do AWS Lambda e o gerenciamento da largura de banda de rede de cada região da AWS.",
    multiSelect: true,
  },

  {
    question:
      "81. Qual serviço da AWS um profissional de nuvem deve usar para receber orientação em tempo real para o provisionamento de recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço?",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Config",
      "C. AWS Security Hub",
      "D. AWS Systems Manager",
    ],
    correctAnswer: ["A. AWS Trusted Advisor"],
    explanation:
      "O AWS Trusted Advisor é o serviço da AWS que fornece orientação em tempo real para o provisionamento de recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço. O AWS Trusted Advisor inspeciona o ambiente AWS do usuário e fornece recomendações para melhorar o desempenho, a segurança e a confiabilidade, reduzir custos e seguir as melhores práticas. O AWS Trusted Advisor também alerta o usuário quando ele está se aproximando ou excedendo seus limites de serviço e ajuda a solicitar aumentos de limite.",
    multiSelect: false,
  },

  {
    question:
      "82. Uma empresa está executando aplicativos em instâncias do Amazon EC2 na mesma conta AWS para vários projetos diferentes. A empresa deseja rastrear os custos de infraestrutura para cada um dos projetos separadamente. A empresa deve realizar esse rastreamento com o menor impacto possível na infraestrutura existente e sem custos adicionais.",
    options: [
      "A. Use um tipo diferente de instância EC2 para cada projeto.",
      "B. Publique métricas personalizadas do Amazon CloudWatch específicas do projeto para cada aplicativo.",
      "C. Implante instâncias EC2 para cada projeto em uma conta AWS separada.",
      "D. Use tags de alocação de custos com valores específicos para cada projeto.",
    ],
    correctAnswer: [
      "D. Use tags de alocação de custos com valores específicos para cada projeto.",
    ],
    explanation:
      "A resposta correta é D porque as tags de alocação de custos são uma maneira de rastrear os custos de infraestrutura para cada um dos projetos separadamente. As tags de alocação de custos são pares de chave-valor que podem ser anexados aos recursos da AWS, como instâncias EC2, e usados para categorizar e agrupá-los para fins de faturamento. As outras opções são incorretas porque não atendem aos requisitos da questão. Usar um tipo diferente de instância EC2 para cada projeto não ajuda a rastrear os custos de cada projeto e pode impactar o desempenho e a compatibilidade dos aplicativos. Publicar métricas personalizadas do Amazon CloudWatch específicas do projeto para cada aplicativo não ajuda a rastrear os custos de cada projeto e pode incorrer em custos adicionais por usar o CloudWatch. Implantar instâncias EC2 para cada projeto em uma conta AWS separada ajuda a rastrear os custos de cada projeto, mas impacta a infraestrutura existente e incorrer em custos adicionais por usar várias contas.",
    multiSelect: false,
  },

  {
    question:
      "83. Qual serviço ou recurso da AWS captura informações sobre o tráfego de rede de entrada e saída de uma instância do Amazon EC2?",
    options: [
      "A. VPC Reachability Analyzer",
      "B. Amazon Athena",
      "C. VPC Flow Logs",
      "D. AWS X-Ray",
    ],
    correctAnswer: ["C. VPC Flow Logs"],
    explanation:
      "A resposta correta é C porque os VPC Flow Logs são um serviço ou recurso da AWS que captura informações sobre o tráfego de rede de entrada e saída de uma instância do Amazon EC2. Os VPC Flow Logs são um recurso que permite que os clientes capturem informações sobre o tráfego IP de entrada e saída das interfaces de rede em suas VPCs. Os VPC Flow Logs podem ajudar os clientes a monitorar e solucionar problemas de conectividade, como tráfego que não está chegando a uma instância ou tráfego sendo rejeitado por um grupo de segurança. As outras opções estão incorretas porque não são serviços ou recursos da AWS que capturam informações sobre o tráfego de rede de entrada e saída de uma instância do Amazon EC2. O VPC Reachability Analyzer é um serviço ou recurso da AWS que permite que os clientes realizem testes de conectividade entre recursos em suas VPCs e identifiquem problemas de configuração que impedem a conectividade. O Amazon Athena é um serviço da AWS que permite que os clientes consultem dados armazenados no Amazon S3 usando SQL padrão. O AWS X-Ray é um serviço da AWS que permite que os clientes analisem e depurem aplicativos distribuídos, como aqueles construídos usando uma arquitetura de microsserviços.",
    multiSelect: false,
  },
  {
    question:
      "84. Quais das seguintes são responsabilidades do cliente de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DUAS.)",
    options: [
      "A. Segurança física das instalações da AWS",
      "B. Configuração de grupos de segurança",
      "C. Criptografia de dados do cliente na AWS",
      "D. Gerenciamento da infraestrutura do AWS Lambda",
      "E. Gerenciamento da largura de banda de rede de cada região da AWS",
    ],
    correctAnswer: [
      "B. Configuração de grupos de segurança",
      "C. Criptografia de dados do cliente na AWS",
    ],
    explanation:
      "O modelo de responsabilidade compartilhada da AWS descreve como a AWS e o cliente compartilham a responsabilidade pela segurança e conformidade do ambiente AWS. A AWS é responsável pela segurança da nuvem, que inclui a segurança física das instalações da AWS, a infraestrutura, o hardware, o software e a rede que executam os serviços da AWS. O cliente é responsável pela segurança na nuvem, que inclui a configuração de grupos de segurança, a criptografia de dados do cliente na AWS, o gerenciamento da infraestrutura do AWS Lambda e o gerenciamento da largura de banda de rede de cada região da AWS.",
    multiSelect: true,
  },

  {
    question:
      "85. Qual serviço da AWS um profissional de nuvem deve usar para receber orientação em tempo real para o provisionamento de recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço?",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Config",
      "C. AWS Security Hub",
      "D. AWS Systems Manager",
    ],
    correctAnswer: ["A. AWS Trusted Advisor"],
    explanation:
      "O AWS Trusted Advisor é o serviço da AWS que fornece orientação em tempo real para o provisionamento de recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço. O AWS Trusted Advisor inspeciona o ambiente AWS do usuário e fornece recomendações para melhorar o desempenho, a segurança e a confiabilidade, reduzir custos e seguir as melhores práticas. O AWS Trusted Advisor também alerta o usuário quando ele está se aproximando ou excedendo seus limites de serviço e ajuda a solicitar aumentos de limite.",
    multiSelect: false,
  },

  {
    question:
      "86. Uma empresa está executando aplicativos em instâncias do Amazon EC2 na mesma conta AWS para vários projetos diferentes. A empresa deseja rastrear os custos de infraestrutura para cada um dos projetos separadamente. A empresa deve realizar esse rastreamento com o menor impacto possível na infraestrutura existente e sem custos adicionais.",
    options: [
      "A. Use um tipo diferente de instância EC2 para cada projeto.",
      "B. Publique métricas personalizadas do Amazon CloudWatch específicas do projeto para cada aplicativo.",
      "C. Implante instâncias EC2 para cada projeto em uma conta AWS separada.",
      "D. Use tags de alocação de custos com valores específicos para cada projeto.",
    ],
    correctAnswer: [
      "D. Use tags de alocação de custos com valores específicos para cada projeto.",
    ],
    explanation:
      "A resposta correta é D porque as tags de alocação de custos são uma maneira de rastrear os custos de infraestrutura para cada um dos projetos separadamente. As tags de alocação de custos são pares de chave-valor que podem ser anexados aos recursos da AWS, como instâncias EC2, e usados para categorizar e agrupá-los para fins de faturamento. As outras opções são incorretas porque não atendem aos requisitos da questão. Usar um tipo diferente de instância EC2 para cada projeto não ajuda a rastrear os custos de cada projeto e pode impactar o desempenho e a compatibilidade dos aplicativos. Publicar métricas personalizadas do Amazon CloudWatch específicas do projeto para cada aplicativo não ajuda a rastrear os custos de cada projeto e pode incorrer em custos adicionais por usar o CloudWatch. Implantar instâncias EC2 para cada projeto em uma conta AWS separada ajuda a rastrear os custos de cada projeto, mas impacta a infraestrutura existente e incorrer em custos adicionais por usar várias contas.",
    multiSelect: false,
  },

  {
    question:
      "87. Qual serviço ou recurso da AWS captura informações sobre o tráfego de rede de entrada e saída de uma instância do Amazon EC2?",
    options: [
      "A. VPC Reachability Analyzer",
      "B. Amazon Athena",
      "C. VPC Flow Logs",
      "D. AWS X-Ray",
    ],
    correctAnswer: ["C. VPC Flow Logs"],
    explanation:
      "A resposta correta é C porque os VPC Flow Logs são um serviço ou recurso da AWS que captura informações sobre o tráfego de rede de entrada e saída de uma instância do Amazon EC2. Os VPC Flow Logs são um recurso que permite que os clientes capturem informações sobre o tráfego IP de entrada e saída das interfaces de rede em suas VPCs. Os VPC Flow Logs podem ajudar os clientes a monitorar e solucionar problemas de conectividade, como tráfego que não está chegando a uma instância ou tráfego sendo rejeitado por um grupo de segurança. As outras opções estão incorretas porque não são serviços ou recursos da AWS que capturam informações sobre o tráfego de rede de entrada e saída de uma instância do Amazon EC2. O VPC Reachability Analyzer é um serviço ou recurso da AWS que permite que os clientes realizem testes de conectividade entre recursos em suas VPCs e identifiquem problemas de configuração que impedem a conectividade. O Amazon Athena é um serviço da AWS que permite que os clientes consultem dados armazenados no Amazon S3 usando SQL padrão. O AWS X-Ray é um serviço da AWS que permite que os clientes analisem e depurem aplicativos distribuídos, como aqueles construídos usando uma arquitetura de microsserviços.",
    multiSelect: false,
  },

  {
    question:
      "88. Uma empresa está migrando um aplicativo que inclui um banco de dados Oracle para a AWS. A empresa não pode reescrever o aplicativo.",
    options: [
      "A. Amazon Athena",
      "B. Amazon DynamoDB",
      "C. Amazon RDS",
      "D. Amazon DocumentDB (with MongoDB compatibility)",
    ],
    correctAnswer: ["C. Amazon RDS"],
    explanation:
      "O Amazon Relational Database Service (Amazon RDS) é um serviço que fornece mecanismos de banco de dados relacional totalmente gerenciados. O Amazon RDS suporta vários mecanismos de banco de dados, incluindo Oracle, MySQL, PostgreSQL, MariaDB, SQL Server e Amazon Aurora. O Amazon RDS pode ser usado para migrar um aplicativo que inclui um banco de dados Oracle para a AWS sem reescrever o aplicativo, desde que o aplicativo seja compatível com a versão e edição do Oracle suportada pelo Amazon RDS. O Amazon RDS também pode fornecer benefícios como alta disponibilidade, escalabilidade, segurança, backup e restauração, e otimização de desempenho.",
    multiSelect: false,
  },

  {
    question:
      "89. Qual recurso ou recurso da AWS é um modelo de instância do Amazon EC2 implantável que é pré-empacotado com requisitos de software e segurança?",
    options: [
      "A. Volume do Amazon Elastic Block Store (Amazon EBS)",
      "B. Modelo do AWS CloudFormation",
      "C. Snapshot do Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon Machine Image (AMI)",
    ],
    correctAnswer: ["D. Amazon Machine Image (AMI)"],
    explanation:
      "Uma Amazon Machine Image (AMI) é um modelo de instância do Amazon EC2 implantável que é pré-empacotado com requisitos de software e segurança. Ele fornece as informações necessárias para iniciar uma instância, que é um servidor virtual na nuvem. Você pode usar uma AMI para iniciar quantas instâncias precisar. Você também pode criar suas próprias AMIs personalizadas ou usar AMIs compartilhadas por outros usuários da AWS.",
    multiSelect: false,
  },

  {
    question:
      "90. Qual serviço ou ferramenta da AWS pode ser usado para consolidar pagamentos de uma empresa com várias contas da AWS?",
    options: [
      "A. AWS Cost and Usage Report",
      "B. AWS Organizations",
      "C. Cost Explorer",
      "D. AWS Budgets",
    ],
    correctAnswer: ["B. AWS Organizations"],
    explanation:
      "O AWS Organizations é um serviço de gerenciamento de contas que permite consolidar várias contas da AWS em uma organização que você cria e gerencia centralmente. O AWS Organizations inclui recursos de faturamento consolidado e gerenciamento de contas que permitem atender melhor às necessidades de orçamento, segurança e conformidade da sua empresa.",
    multiSelect: false,
  },

  {
    question:
      "91. Quais serviços e recursos da AWS são fornecidos a todos os clientes sem nenhum custo? (Selecione DOIS.)",
    options: [
      "A. Amazon Aurora",
      "B. VPC",
      "C. Amazon SageMaker",
      "D. AWS Identity and Access Management (IAM)",
      "E. Amazon Polly",
    ],
    correctAnswer: ["B. VPC", "D. AWS Identity and Access Management (IAM)"],
    explanation:
      "Os serviços e recursos da AWS que são fornecidos a todos os clientes sem nenhum custo são VPC e AWS Identity and Access Management (IAM). VPC é um serviço que permite iniciar recursos da AWS em uma rede virtual isolada logicamente que você define. Você pode criar e usar uma VPC sem nenhum custo adicional e paga apenas pelos recursos que iniciar na VPC, como instâncias EC2 ou volumes EBS. IAM é um serviço que permite gerenciar o acesso e as permissões para os recursos da AWS. Você pode criar e usar usuários, grupos, funções e políticas do IAM sem nenhum custo adicional e paga apenas pelos recursos da AWS que as entidades do IAM acessam. Amazon Aurora, Amazon SageMaker e Amazon Polly não são serviços gratuitos e cobram com base no uso e nos recursos escolhidos.",
    multiSelect: true,
  },

  {
    question: "92. Qual das opções a seguir descreve uma região da AWS?",
    options: [
      "A. Um local específico dentro de uma área geográfica que fornece alta disponibilidade",
      "B. Um conjunto de data centers que abrangem vários países",
      "C. Uma visão global do ambiente de computação em nuvem de um usuário",
      "D. Uma coleção de bancos de dados que podem ser acessados apenas de uma área geográfica específica",
    ],
    correctAnswer: [
      "A. Um local específico dentro de uma área geográfica que fornece alta disponibilidade",
    ],
    explanation:
      "Uma região da AWS é um local específico dentro de uma área geográfica que fornece alta disponibilidade. Uma região da AWS consiste em duas ou mais zonas de disponibilidade, que são locais isolados dentro da mesma região. Cada zona de disponibilidade tem energia, resfriamento e segurança física independentes, e está conectada às outras zonas de disponibilidade na mesma região por uma rede de baixa latência, alta taxa de transferência e altamente redundante. Os serviços da AWS estão disponíveis em várias regiões em todo o mundo, permitindo que o usuário escolha onde executar seus aplicativos e armazenar seus dados.",
    multiSelect: false,
  },

  {
    question:
      "93. Qual pilar da Estrutura Well-Architected da AWS inclui um princípio de design sobre medir a eficiência geral das cargas de trabalho em termos de valor de negócio?",
    options: [
      "A. Excelência operacional",
      "B. Segurança",
      "C. Confiabilidade",
      "D. Otimização de custos",
    ],
    correctAnswer: ["A. Excelência operacional"],
    explanation:
      "O pilar de excelência operacional da Estrutura Well-Architected da AWS inclui um princípio de design sobre medir a eficiência geral das cargas de trabalho em termos de valor de negócio. Esse princípio afirma que você deve monitorar e medir os principais indicadores de desempenho (KPIs) e definir metas e limites que se alinhem com seus objetivos de negócios. Você também deve usar loops de feedback para melhorar continuamente seus processos e procedimentos.",
    multiSelect: false,
  },

  {
    question:
      "94. Uma empresa vem armazenando relatórios mensais em um bucket do Amazon S3. A empresa exporta os dados do relatório para arquivos de valores separados por vírgula (.csv). Um desenvolvedor deseja escrever uma consulta simples que possa ler todos esses arquivos e gerar um relatório de resumo.",
    options: [
      "A. Amazon S3 Select",
      "B. Amazon Athena",
      "C. Amazon Redshift",
      "D. Amazon EC2",
    ],
    correctAnswer: ["B. Amazon Athena"],
    explanation:
      "O Amazon Athena é o serviço da AWS que o desenvolvedor deve usar para escrever uma consulta simples que possa ler todos os arquivos .csv armazenados em um bucket do Amazon S3 e gerar um relatório de resumo. O Amazon Athena é um serviço de consulta interativa que permite aos usuários analisar dados no Amazon S3 usando SQL padrão. O Amazon Athena não requer nenhuma configuração ou gerenciamento de servidor, e os usuários pagam apenas pelas consultas que executam. O Amazon Athena pode lidar com vários formatos de dados, incluindo .csv, e pode se integrar a outros serviços da AWS, como o Amazon QuickSight, para visualização de dados.",
    multiSelect: false,
  },

  {
    question:
      "95. Ao projetar cargas de trabalho da AWS para estarem operacionais mesmo quando há falhas de componentes, qual é uma prática recomendada da AWS?",
    options: [
      "A. Realizar testes de recuperação de desastres trimestrais.",
      "B. Colocar o componente principal na região us-east-1.",
      "C. Projetar para failover automático para recursos saudáveis.",
      "D. Projetar cargas de trabalho para se ajustarem a uma única instância do Amazon EC2.",
    ],
    correctAnswer: [
      "C. Projetar para failover automático para recursos saudáveis.",
    ],
    explanation:
      "Projetar para failover automático para recursos saudáveis é uma prática recomendada da AWS ao projetar cargas de trabalho da AWS para estarem operacionais mesmo quando há falhas de componentes. Isso significa que você deve arquitetar seu sistema para lidar com a perda de um ou mais componentes sem afetar a disponibilidade ou o desempenho do seu aplicativo. Você pode usar vários serviços e recursos da AWS para alcançar isso, como Auto Scaling, Elastic Load Balancing, Amazon Route 53, Amazon CloudFormation e AWS CloudFormation.",
    multiSelect: false,
  },

  {
    question:
      "96. Uma empresa deseja proteger suas informações, sistemas e ativos da Nuvem AWS enquanto realiza tarefas de avaliação e mitigação de riscos.",
    options: [
      "A. Confiabilidade",
      "B. Segurança",
      "C. Excelência operacional",
      "D. Eficiência de desempenho",
    ],
    correctAnswer: ["B. Segurança"],
    explanation:
      "O pilar da Estrutura Well-Architected da AWS que é apoiado pelos objetivos de proteger informações, sistemas e ativos da Nuvem AWS enquanto realiza tarefas de avaliação e mitigação de riscos é a segurança. Segurança é a capacidade de proteger informações, sistemas e ativos enquanto fornece valor de negócios por meio de avaliações de risco e estratégias de mitigação. O pilar de segurança abrange tópicos como gerenciamento de identidade e acesso, proteção de dados, proteção de infraestrutura, controles de detecção, resposta a incidentes e conformidade.",
    multiSelect: false,
  },
  {
    question:
      "97. Uma empresa tem um aplicativo que usa serviços da AWS. Durante eventos de escalonamento, a empresa deseja manter o uso do aplicativo dentro das cotas de serviço da AWS. Quais serviços deverão ser utilizados? (Selecione DUAS.)",
    options: [
      "A. Console do Service Quotas",
      "B. AWS Trusted Advisor",
      "C. AWS Systems Manager",
      "D. AWS Shield",
      "E. AWS Cost Explorer",
    ],
    correctAnswer: ["A. Console do Service Quotas", "B. AWS Trusted Advisor"],
    explanation:
      "As respostas corretas são A e B porque o console do Service Quotas e o AWS Trusted Advisor são serviços ou ferramentas da AWS que podem relatar as cotas para que a empresa possa melhorar a confiabilidade do aplicativo. O console do Service Quotas é uma ferramenta da AWS que permite aos usuários visualizar e gerenciar suas cotas para serviços da AWS a partir de um local central. Os usuários podem usar o console do Service Quotas para solicitar aumentos de cota, rastrear o uso de cotas e configurar alarmes para limites de cota próximos. O AWS Trusted Advisor é um serviço da AWS que fornece orientação em tempo real para ajudar os usuários a seguir as melhores práticas da AWS para segurança, desempenho, otimização de custos e tolerância a falhas. Uma das categorias de verificações que o AWS Trusted Advisor realiza são os limites de serviço, que monitoram o uso de cada serviço da AWS e alertam os usuários quando eles estão próximos de atingir o limite padrão. As outras opções estão incorretas porque não são serviços ou ferramentas da AWS que podem relatar as cotas para que a empresa possa melhorar a confiabilidade do aplicativo. AWS Systems Manager é um serviço da AWS que permite aos usuários automatizar tarefas operacionais, gerenciar configuração e conformidade, e monitorar a integridade e o desempenho do sistema. AWS Shield é um serviço da AWS que protege os usuários contra ataques de negação de serviço distribuído (DDoS). AWS Cost Explorer é uma ferramenta da AWS que permite aos usuários visualizar, entender e gerenciar seus custos e uso da AWS.",
    multiSelect: true,
  },

  {
    question:
      "98. Qual serviço AWS é um banco de dados de chave-valor que fornece latência de sub-milissegundos em grande escala?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon Aurora",
      "C. Amazon DocumentDB (with MongoDB compatibility)",
      "D. Amazon Neptune",
    ],
    correctAnswer: ["A. Amazon DynamoDB"],
    explanation:
      "A resposta correta é A porque o Amazon DynamoDB é um banco de dados de chave-valor que fornece latência de sub-milissegundos em grande escala. O Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado, sem servidor e escalável que suporta modelos de dados de chave-valor e documento. As outras opções estão incorretas porque não são bancos de dados de chave-valor. O Amazon Aurora é um banco de dados relacional compatível com MySQL e PostgreSQL. O Amazon DocumentDB (com compatibilidade com MongoDB) é um banco de dados de documentos compatível com MongoDB. O Amazon Neptune é um banco de dados de grafos que suporta modelos de grafos de propriedades e RDF.",
    multiSelect: false,
  },

  {
    question:
      "99. Qual recurso da Nuvem AWS oferece aos usuários a capacidade de pagar com base nas necessidades atuais, em vez de necessidades previstas?",
    options: [
      "A. AWS Budgets",
      "B. Preços pagos conforme o uso",
      "C. Descontos por volume",
      "D. Savings Plans",
    ],
    correctAnswer: ["B. Preços pagos conforme o uso"],
    explanation:
      "O preço pago conforme o uso é o recurso da Nuvem AWS que oferece aos usuários a capacidade de pagar com base nas necessidades atuais, em vez de necessidades previstas. O preço pago conforme o uso significa que os usuários pagam apenas pelos serviços e recursos da AWS que usam, sem quaisquer compromissos antecipados ou de longo prazo. Isso permite que os usuários aumentem ou diminuam seu uso de acordo com seus requisitos de negócios em constante mudança e evitem pagar por capacidade ociosa ou não utilizada. O preço pago conforme o uso também permite que os usuários se beneficiem das economias de escala e custos mais baixos da AWS à medida que expandem seus negócios.",
    multiSelect: false,
  },

  {
    question:
      "100. Qual serviço ou ferramenta da AWS ajuda a gerenciar centralmente o faturamento e permitir o acesso controlado aos recursos em contas da AWS?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Organizations",
      "C. AWS Cost Explorer",
      "D. AWS Budgets",
    ],
    correctAnswer: ["B. AWS Organizations"],
    explanation:
      "O AWS Organizations ajuda a gerenciar centralmente o faturamento e permitir o acesso controlado aos recursos em contas da AWS. O AWS Organizations é um serviço que permite ao usuário consolidar várias contas da AWS em uma organização que pode ser gerenciada como uma única unidade. O AWS Organizations permite que o usuário crie grupos de contas e aplique políticas a eles, como políticas de controle de serviço (SCPs) que especificam os serviços e ações que os usuários e funções podem acessar nas contas. O AWS Organizations também permite que o usuário use o faturamento consolidado, que combina o uso e os encargos de todas as contas na organização em uma única fatura.",
    multiSelect: false,
  },

  {
    question:
      "101. Quais dos seguintes são componentes de uma conexão AWS Site-to-Site VPN? (Selecione DOIS.)",
    options: [
      "A. AWS Storage Gateway",
      "B. Gateway privado virtual",
      "C. Gateway NAT",
      "D. Gateway do cliente",
      "E. Internet Gateway",
    ],
    correctAnswer: ["B. Gateway privado virtual", "D. Gateway do cliente"],
    explanation:
      "As respostas corretas são B e D porque um gateway privado virtual e um gateway de cliente são componentes de uma conexão AWS Site-to-Site VPN. Um gateway privado virtual é o lado da AWS da conexão VPN que se conecta à VPC do cliente. Um gateway de cliente é o lado do cliente da conexão VPN que reside na rede do cliente. As outras opções estão incorretas porque não são componentes de uma conexão AWS Site-to-Site VPN. O AWS Storage Gateway é um serviço que conecta aplicativos de software locais com armazenamento baseado em nuvem. O gateway NAT é um serviço que permite que instâncias em uma sub-rede privada se conectem à Internet ou a outros serviços da AWS, mas impede a Internet de iniciar uma conexão com essas instâncias. O Internet Gateway é um serviço que permite a comunicação entre instâncias em uma VPC e a Internet.",
    multiSelect: true,
  },

  {
    question:
      "102. Qual tarefa é responsabilidade de um cliente, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "A. Gerenciamento dos sistemas operacionais convidados",
      "B. Manutenção da configuração de dispositivos de infraestrutura",
      "C. Gerenciamento dos sistemas operacionais host e da virtualização",
      "D. Manutenção do software que alimenta as Zonas de Disponibilidade",
    ],
    correctAnswer: ["A. Gerenciamento dos sistemas operacionais convidados"],
    explanation:
      "O gerenciamento dos sistemas operacionais convidados é uma responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS. O modelo de responsabilidade compartilhada da AWS define as diferentes responsabilidades de segurança e conformidade da AWS e do cliente. A AWS é responsável pela segurança da nuvem, que inclui a infraestrutura física, o hardware, o software e as instalações que executam a Nuvem AWS. O cliente é responsável pela segurança na nuvem, que inclui a configuração e o gerenciamento dos sistemas operacionais convidados, aplicativos, dados e proteção do tráfego de rede.",
    multiSelect: false,
  },

  {
    question:
      "103. Uma empresa precisa migrar todas as suas equipes de desenvolvimento para um ambiente de desenvolvimento integrado (IDE) baseado em nuvem.",
    options: [
      "A. AWS CodeBuild",
      "B. AWS Cloud9",
      "C. AWS OpsWorks",
      "D. AWS Cloud Development Kit (AWS CDK)",
    ],
    correctAnswer: ["B. AWS Cloud9"],
    explanation:
      "A resposta correta é B porque o AWS Cloud9 é um serviço da AWS que permite que os usuários executem suas cargas de trabalho personalizadas e de não produção existentes na Nuvem AWS de forma rápida e econômica. O AWS Cloud9 é um ambiente de desenvolvimento integrado (IDE) baseado em nuvem que permite aos usuários escrever, executar e depurar código a partir de um navegador da web. O AWS Cloud9 suporta várias linguagens de programação, como Python, Java, Node.js e muito mais. O AWS Cloud9 também fornece aos usuários um terminal que pode acessar serviços e recursos da AWS, como instâncias do Amazon EC2, funções do AWS Lambda e pilhas do AWS CloudFormation. As outras opções estão incorretas porque não são serviços da AWS que permitem que os usuários executem suas cargas de trabalho personalizadas e de não produção existentes na Nuvem AWS de forma rápida e econômica. O AWS CodeBuild é um serviço da AWS que permite que os usuários compilem, testem e empacotem seu código para implantação. O AWS OpsWorks é um serviço da AWS que permite que os usuários configurem e gerenciem seus aplicativos usando Chef ou Puppet. O AWS Cloud Development Kit (AWS CDK) é um serviço da AWS que permite que os usuários definam e provisionem sua infraestrutura em nuvem usando linguagens de programação familiares, como TypeScript, Python, Java e C#.",
    multiSelect: false,
  },

  {
    question:
      "104. Qual dos seguintes é um princípio de design recomendado da Estrutura Well-Architected da AWS?",
    options: [
      "A. Reduzir o tempo de inatividade fazendo alterações na infraestrutura com pouca frequência e em grandes incrementos.",
      "B. Investir tempo para configurar a infraestrutura manualmente.",
      "C. Aprender a melhorar a partir de falhas operacionais.",
      "D. Usar design de aplicativo monolítico para centralização.",
    ],
    correctAnswer: ["C. Aprender a melhorar a partir de falhas operacionais."],
    explanation:
      "A resposta correta é C porque aprender a melhorar a partir de falhas operacionais é um princípio de design recomendado da Estrutura Well-Architected da AWS. A Estrutura Well-Architected da AWS é um conjunto de melhores práticas e diretrizes para projetar e operar sistemas confiáveis, seguros, eficientes e econômicos na nuvem. A Estrutura Well-Architected da AWS consiste em cinco pilares: excelência operacional, segurança, confiabilidade, eficiência de desempenho e otimização de custos. Cada pilar tem um conjunto de princípios de design que descrevem as características de um sistema bem arquitetado. Aprender a melhorar a partir de falhas operacionais é um princípio de design do pilar de excelência operacional, que se concentra em executar e monitorar sistemas para fornecer valor de negócios e melhorar continuamente os processos e procedimentos de suporte. As outras opções estão incorretas porque não são princípios de design recomendados da Estrutura Well-Architected da AWS. Reduzir o tempo de inatividade fazendo alterações na infraestrutura com pouca frequência e em grandes incrementos não é um princípio de design da Estrutura Well-Architected da AWS, mas sim uma fonte de risco e ineficiência. Um sistema bem arquitetado deve implementar mudanças com frequência e em pequenos incrementos para minimizar o impacto e o escopo das falhas. Investir tempo para configurar a infraestrutura manualmente não é um princípio de design da Estrutura Well-Architected da AWS, mas sim uma fonte de erro humano e inconsistência. Um sistema bem arquitetado deve automatizar tarefas manuais para melhorar a velocidade e a precisão das operações. Usar design de aplicativo monolítico para centralização não é um princípio de design da Estrutura Well-Architected da AWS, mas sim uma fonte de complexidade e rigidez. Um sistema bem arquitetado deve usar componentes fracamente acoplados e distribuídos para permitir escalabilidade e resiliência.",
    multiSelect: false,
  },

  {
    question:
      "105. Qual serviço de banco de dados da AWS fornece armazenamento de dados na memória?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon ElastiCache",
      "C. Amazon RDS",
      "D. Amazon Timestream",
    ],
    correctAnswer: ["B. Amazon ElastiCache"],
    explanation:
      "A resposta correta é B porque o Amazon ElastiCache é um serviço que fornece armazenamento de dados na memória.",
    multiSelect: false,
  },
  {
    question:
      "106. Qual serviço da AWS deve ser usado para armazenar credenciais de banco de dados com o máximo de segurança?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Secrets Manager",
      "C. Amazon S3",
      "D. AWS Key Management Service (AWS KMS)",
    ],
    correctAnswer: ["B. AWS Secrets Manager"],
    explanation:
      "O AWS Secrets Manager deve ser usado para armazenar credenciais de banco de dados com máxima segurança. Ele protege segredos como credenciais, senhas e chaves de API, permitindo armazenamento, criptografia, rotação e recuperação seguros.",
    multiSelect: false,
  },
  {
    question:
      "107. Uma empresa tem um site de compras online e deseja armazenar os dados de cartão de crédito dos clientes. A empresa deve atender aos padrões da Indústria de Cartões de Pagamento (PCI).",
    options: [
      "A. Amazon Cloud Directory",
      "B. AWS Artifact",
      "C. AWS Trusted Advisor",
      "D. Amazon Inspector",
    ],
    correctAnswer: ["B. AWS Artifact"],
    explanation:
      "O AWS Artifact fornece acesso à documentação de conformidade da AWS, como relatórios de auditoria, certificações de segurança e acordos, permitindo que os clientes baixem, revisem e aceitem os documentos relevantes para o uso dos serviços da AWS.",
    multiSelect: false,
  },

  {
    question:
      "108. Uma empresa deseja gerenciar centralmente políticas de segurança e serviços de faturamento em um ambiente multicontas da AWS. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS Organizations",
      "C. AWS Resource Access Manager (AWS RAM)",
      "D. AWS Config",
    ],
    correctAnswer: ["B. AWS Organizations"],
    explanation:
      "O AWS Organizations ajuda a gerenciar e governar centralmente seu ambiente à medida que você cresce e escala seus recursos da AWS. Você pode criar grupos de contas e aplicar políticas a eles, além de consolidar a cobrança de várias contas.",
    multiSelect: false,
  },

  {
    question:
      "109. Uma empresa está hospedando um aplicativo web em um contêiner Docker no Amazon EC2. A AWS é responsável por quais das seguintes tarefas?",
    options: [
      "A. Escalar o aplicativo web e serviços desenvolvidos com Docker",
      "B. Provisionar ou agendar contêineres para executar em clusters e manter sua disponibilidade",
      "C. Executar manutenção de hardware nas instalações da AWS que executam a Nuvem AWS",
      "D. Gerenciar o sistema operacional convidado, incluindo atualizações e patches de segurança",
    ],
    correctAnswer: [
      "C. Executar manutenção de hardware nas instalações da AWS que executam a Nuvem AWS",
    ],
    explanation:
      "Faz parte do modelo de responsabilidade compartilhada, onde a AWS é responsável pela segurança da nuvem e o cliente pela segurança na nuvem. A AWS também é responsável pela infraestrutura global que executa todos os serviços oferecidos na Nuvem AWS.",
    multiSelect: false,
  },

  {
    question:
      "110. Quando um usuário deseja utilizar suas próprias licenças de software por soquete, núcleo ou máquina virtual para um servidor Microsoft Windows em execução na AWS, qual tipo de instância do Amazon EC2 é necessário?",
    options: [
      "A. Instâncias Spot",
      "B. Instâncias Dedicadas",
      "C. Hosts Dedicados",
      "D. Instâncias Reservadas",
    ],
    correctAnswer: ["C. Hosts Dedicados"],
    explanation:
      "Os Hosts Dedicados são instâncias do Amazon EC2 necessárias quando um usuário deseja utilizar suas próprias licenças de software por soquete, núcleo ou máquina virtual para um servidor Microsoft Windows em execução na AWS. Eles são servidores físicos dedicados a um único cliente e permitem que os clientes usem suas licenças de software vinculadas a servidores existentes.",
    multiSelect: false,
  },

  {
    question:
      "111. Qual serviço ou recurso da AWS oferece proteção contra ataques HTTP para usuários que executam aplicações web voltadas para o público?",
    options: [
      "A. Grupos de segurança",
      "B. ACLs de rede",
      "C. AWS Shield Standard",
      "D. AWS WAF",
    ],
    correctAnswer: ["D. AWS WAF"],
    explanation:
      "O AWS WAF é um firewall de aplicação web que ajuda os usuários a proteger seus aplicativos web de exploits comuns, como injeção de SQL, cross-site scripting e ataques de bot. Os usuários podem criar regras personalizadas para definir o tráfego da web que desejam permitir, bloquear ou contar.",
    multiSelect: false,
  },

  {
    question:
      "112. Uma empresa deseja implantar e gerenciar um aplicativo baseado em Docker na AWS.",
    options: [
      "A. Um orquestrador Docker de código aberto em instâncias do Amazon EC2",
      "B. AWS AppSync",
      "C. Amazon Elastic Container Registry (Amazon ECR)",
      "D. Amazon Elastic Container Service (Amazon ECS)",
    ],
    correctAnswer: ["D. Amazon Elastic Container Service (Amazon ECS)"],
    explanation:
      "O Amazon ECS é um serviço de orquestração de contêineres totalmente gerenciado que facilita a execução, o dimensionamento e a proteção de aplicativos de contêineres Docker na AWS. Ele elimina a necessidade de instalar, operar e escalar sua própria infraestrutura de gerenciamento de clusters.",
    multiSelect: false,
  },

  {
    question:
      "113. Um engenheiro de nuvem precisa baixar documentos de segurança e conformidade da AWS para uma auditoria futura.",
    options: [
      "A. AWS Trusted Advisor",
      "B. AWS Artifact",
      "C. AWS Well-Architected Tool",
      "D. AWS Systems Manager",
    ],
    correctAnswer: ["B. AWS Artifact"],
    explanation:
      "O AWS Artifact é um portal de autoatendimento que permite aos usuários acessar e baixar relatórios de conformidade e acordos da AWS. Esses documentos fornecem evidências da conformidade da AWS com padrões e regulamentos de segurança globais, regionais e específicos do setor.",
    multiSelect: false,
  },

  {
    question:
      "114. O aplicativo de uma empresa armazena dados em um bucket do Amazon S3. A empresa tem uma função do AWS Lambda que processa dados no bucket S3. A empresa precisa invocar a função uma vez por dia em um horário específico.",
    options: [
      "A. AWS Managed Services (AMS)",
      "B. AWS CodeStar",
      "C. Amazon EventBridge",
      "D. AWS Step Functions",
    ],
    correctAnswer: ["C. Amazon EventBridge"],
    explanation:
      "O Amazon EventBridge permite criar regras agendadas que acionam seus destinos em um horário ou intervalo específico, como uma vez por dia. O AMS fornece gerenciamento operacional, o AWS CodeStar gerencia projetos de desenvolvimento de software e o AWS Step Functions coordena fluxos de trabalho sem servidor.",
    multiSelect: false,
  },
  {
    question:
      "115. Uma empresa deseja estabelecer uma camada de segurança em sua VPC que atuará como um firewall para controlar o tráfego da sub-rede.",
    options: [
      "A. Tabelas de roteamento",
      "B. Listas de controle de acesso de rede (ACLs de rede)",
      "C. Grupos de segurança",
      "D. Amazon GuardDuty",
    ],
    correctAnswer: ["C. Grupos de segurança"],
    explanation:
      "Os grupos de segurança são firewalls com estado que controlam o tráfego de entrada e saída no nível da instância. Você pode associá-los a cada instância em uma VPC e especificar as regras para permitir ou negar o tráfego. As tabelas de roteamento direcionam o tráfego, as ACLs de rede são firewalls sem estado no nível da sub-rede e o Amazon GuardDuty é um serviço de detecção de ameaças.",
    multiSelect: false,
  },

  {
    question:
      "116. Uma empresa está migrando um servidor de banco de dados relacional para a nuvem da AWS e deseja minimizar a sobrecarga administrativa das tarefas de manutenção do banco de dados.",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon EC2",
      "C. Amazon Redshift",
      "D. Amazon RDS",
    ],
    correctAnswer: ["D. Amazon RDS"],
    explanation:
      "O Amazon RDS é um serviço de banco de dados relacional totalmente gerenciado que lida com tarefas rotineiras de banco de dados, como provisionamento, aplicação de patches, backup, recuperação, detecção de falhas e reparo. Ele suporta vários mecanismos de banco de dados, como MySQL, PostgreSQL, Oracle, SQL Server e Amazon Aurora.",
    multiSelect: false,
  },

  {
    question:
      "117. Um profissional de nuvem está analisando o desempenho e o uso de instâncias do Amazon EC2 para fornecer recomendações de possíveis economias de custos.",
    options: [
      "A. Dimensionamento automático",
      "B. Dimensionamento correto",
      "C. Balanceamento de carga",
      "D. Alta disponibilidade",
    ],
    correctAnswer: ["B. Dimensionamento correto"],
    explanation:
      "O dimensionamento correto é o processo de otimizar o desempenho e o custo de seus recursos da AWS, selecionando o tipo, tamanho e configuração mais apropriados com base nos requisitos e padrões de uso da carga de trabalho. Isso pode ajudar a reduzir o superprovisionamento ou a subutilização de recursos.",
    multiSelect: false,
  },

  {
    question:
      "118. Uma empresa migrou recentemente para a nuvem da AWS e precisa determinar se suas instâncias do Amazon EC2 recém-importadas têm o tamanho e o tipo apropriados.",
    options: [
      "A. AWS Auto Scaling",
      "B. AWS Control Tower",
      "C. AWS Trusted Advisor",
      "D. AWS Compute Optimizer",
      "E. Amazon Forecast",
    ],
    correctAnswer: ["C. AWS Trusted Advisor", "D. AWS Compute Optimizer"],
    explanation:
      "O AWS Trusted Advisor fornece recomendações de melhores práticas e pode ajudar a identificar instâncias EC2 subutilizadas ou ociosas, sugerindo maneiras de reduzir custos e melhorar o desempenho. O AWS Compute Optimizer analisa a configuração e as métricas de utilização das instâncias EC2 e fornece recomendações para tipos, tamanhos e configurações de instância ideais.",
    multiSelect: true,
  },

  {
    question:
      "119. Qual plano de suporte da AWS atribui um agente de concierge da AWS à conta de uma empresa?",
    options: [
      "A. AWS Basic Support",
      "B. AWS Developer Support",
      "C. AWS Business Support",
      "D. AWS Enterprise Support",
    ],
    correctAnswer: ["D. AWS Enterprise Support"],
    explanation:
      "O AWS Enterprise Support é o nível mais alto de suporte oferecido pela AWS e fornece a assistência mais abrangente e personalizada. Um agente de concierge da AWS é um gerente de conta técnica dedicado que atua como um único ponto de contato para a empresa, ajudando a otimizar o ambiente AWS, resolver problemas e acessar especialistas da AWS.",
    multiSelect: false,
  },

  {
    question:
      "120. Qual é uma vantagem da computação em nuvem da AWS que minimiza os custos variáveis?",
    options: [
      "A. Alta disponibilidade",
      "B. Economias de escala",
      "C. Alcance global",
      "D. Agilidade",
    ],
    correctAnswer: ["B. Economias de escala"],
    explanation:
      "A AWS pode alcançar custos mais baixos por unidade de recursos de computação, distribuindo os custos fixos de construção e manutenção de data centers entre um grande número de clientes. Como resultado, a AWS pode oferecer preços mais baixos e previsíveis aos seus clientes, que pagam apenas pelos recursos que consomem.",
    multiSelect: false,
  },

  {
    question:
      "121. Qual das opções a seguir é uma proposta de valor da AWS que descreve a capacidade de um usuário de escalar a infraestrutura com base na demanda?",
    options: [
      "A. Velocidade de inovação",
      "B. Elasticidade de recursos",
      "C. Arquitetura desacoplada",
      "D. Implantação global",
    ],
    correctAnswer: ["B. Elasticidade de recursos"],
    explanation:
      "A elasticidade de recursos significa que o usuário pode provisionar ou desprovisionar recursos de forma rápida e fácil, sem qualquer compromisso antecipado ou contrato de longo prazo. Isso pode ajudar a otimizar o custo e o desempenho do aplicativo, além de responder às necessidades de negócios em constante mudança e às expectativas dos clientes.",
    multiSelect: false,
  },

  {
    question:
      "122. Qual dos seguintes está disponível para uma empresa que possui um plano de suporte AWS Business Support?",
    options: [
      "A. Concierge de suporte da AWS",
      "B. Equipe de resposta a DDoS (DRT) da AWS",
      "C. Gerente técnico de conta (TAM) da AWS",
      "D. API do AWS Health",
    ],
    correctAnswer: ["D. API do AWS Health"],
    explanation:
      "A API do AWS Health fornece acesso programático às informações do AWS Health que são apresentadas no Painel de integridade pessoal da AWS. Ela pode ajudar os usuários a obter informações oportunas e personalizadas sobre eventos que podem afetar a disponibilidade e o desempenho de seus recursos da AWS.",
    multiSelect: false,
  },

  {
    question:
      "123. Uma empresa possui um aplicativo com requisitos robustos de hardware. O aplicativo deve ser acessado por estudantes que estão usando laptops leves e de baixo custo.",
    options: [
      "A. Amazon AppStream 2.0",
      "B. AWS AppSync",
      "C. Amazon WorkLink",
      "D. AWS Elastic Beanstalk",
    ],
    correctAnswer: ["A. Amazon AppStream 2.0"],
    explanation:
      "O Amazon AppStream 2.0 é um serviço de streaming de aplicativos totalmente gerenciado e seguro que permite que os clientes transmitam aplicativos de desktop da AWS para qualquer dispositivo com um navegador web. Ele lida com o provisionamento, dimensionamento, aplicação de patches e manutenção da infraestrutura de backend, oferecendo alta performance e experiência do usuário responsiva.",
    multiSelect: false,
  },
  {
    question: "124. O que é uma Zona de Disponibilidade?",
    options: [
      "A. Um local onde os usuários podem implantar serviços selecionados da AWS onde atualmente não existe uma região da AWS",
      "B. Um ou mais data centers distintos com energia, rede e conectividade redundantes",
      "C. Um ou mais clusters de servidores onde novas cargas de trabalho podem ser implantadas",
      "D. Uma rede de entrega de conteúdo (CDN) rápida que entrega dados, vídeos, aplicativos e APIs com segurança aos usuários globalmente",
    ],
    correctAnswer: [
      "B. Um ou mais data centers distintos com energia, rede e conectividade redundantes",
    ],
    explanation:
      "As Zonas de Disponibilidade são locais fisicamente separados dentro de uma região da AWS que são projetados para serem isolados de falhas e conectados por uma rede de baixa latência, alta taxa de transferência e altamente redundante. Cada Zona de Disponibilidade contém um ou mais data centers que abrigam os servidores e dispositivos de armazenamento que executam os serviços da AWS.",
    multiSelect: false,
  },

  {
    question:
      "125. Quais dos seguintes são princípios de design para confiabilidade na nuvem da AWS? (Selecione DOIS)",
    options: [
      "A. Construir arquiteturas com recursos fortemente acoplados.",
      "B. Usar o AWS Trusted Advisor para atender às melhores práticas de segurança.",
      "C. Usar automação para se recuperar imediatamente de falhas.",
      "D. Dimensionar corretamente as instâncias do Amazon EC2 para garantir o desempenho ideal.",
      "E. Simular falhas para testar processos de recuperação.",
    ],
    correctAnswer: [
      "C. Usar automação para se recuperar imediatamente de falhas.",
      "E. Simular falhas para testar processos de recuperação.",
    ],
    explanation:
      "Ao usar a automação, os sistemas podem detectar e corrigir falhas sem intervenção humana, reduzindo o impacto e a duração das falhas e melhorando a disponibilidade do sistema. Testar regularmente os procedimentos de recuperação usando cenários simulados pode ajudar a identificar lacunas e melhorar o processo de recuperação.",
    multiSelect: true,
  },
  {
    question:
      "126. Quem é responsável pelo descomissionamento de dispositivos de armazenamento subjacentes ao fim de vida útil usados para hospedar dados na AWS?",
    options: [
      "A. Cliente",
      "B. AWS",
      "C. Criador da conta",
      "D. Equipe de auditoria",
    ],
    correctAnswer: ["B. AWS"],
    explanation:
      "AWS é responsável pelo descomissionamento de dispositivos de armazenamento subjacentes ao fim de vida útil, usando métodos detalhados no DoD 5220.22-M ou NIST 800-88.",
    multiSelect: false,
  },
  {
    question:
      "127. Qual serviço da AWS exige que o cliente atualize o sistema operacional convidado?",
    options: [
      "A. AWS Lambda",
      "B. Amazon OpenSearch Service",
      "C. Amazon EC2",
      "D. Amazon ElastiCache",
    ],
    correctAnswer: ["C. Amazon EC2"],
    explanation:
      "Os clientes são responsáveis por atualizar e corrigir o sistema operacional convidado nas instâncias do Amazon EC2.",
    multiSelect: false,
  },
  {
    question:
      "128. Qual perspectiva inclui capacidades fundamentais do AWS Cloud Adoption Framework?",
    options: [
      "A. Sustentabilidade",
      "B. Operações",
      "C. Eficiência de Desempenho",
      "D. Confiabilidade",
    ],
    correctAnswer: ["B. Operações"],
    explanation:
      "Operações é uma capacidade fundamental no AWS Cloud Adoption Framework, focando em processos de suporte e manutenção.",
    multiSelect: false,
  },
  {
    question:
      "129. Qual princípio de design da nuvem da AWS é seguido ao usar o AWS CloudTrail?",
    options: [
      "A. Recuperar automaticamente",
      "B. Realizar operações como código",
      "C. Medir eficiência",
      "D. Garantir rastreabilidade",
    ],
    correctAnswer: ["D. Garantir rastreabilidade"],
    explanation:
      "Usar o AWS CloudTrail alinha-se com o princípio de design de garantir rastreabilidade ao registrar chamadas de API e eventos.",
    multiSelect: false,
  },
  {
    question:
      "130. Qual serviço da AWS oferece uma CDN global para entrega segura de conteúdo com alta velocidade e baixa latência?",
    options: [
      "A. Amazon EC2",
      "B. Amazon CloudFront",
      "C. Amazon CloudWatch",
      "D. AWS CloudFormation",
    ],
    correctAnswer: ["B. Amazon CloudFront"],
    explanation:
      "Amazon CloudFront é um serviço de CDN global para entrega segura e rápida de conteúdo.",
    multiSelect: false,
  },
  {
    question:
      "131. Para uma carga de trabalho de produção estável de um ano, qual opção de compra de instância da AWS é a mais econômica?",
    options: [
      "A. Hosts Dedicados",
      "B. Instâncias Reservadas",
      "C. Instâncias Sob Demanda",
      "D. Instâncias Spot",
    ],
    correctAnswer: ["B. Instâncias Reservadas"],
    explanation:
      "Instâncias Reservadas oferecem descontos significativos e são adequadas para cargas de trabalho estáveis e de longo prazo.",
    multiSelect: false,
  },
  {
    question:
      "132. Para acessar um relatório sobre o impacto ambiental do uso da AWS, qual serviço ou recurso uma empresa deve usar?",
    options: [
      "A. AWS Organizations",
      "B. Política de IAM",
      "C. Console de Faturamento da AWS",
      "D. Amazon SNS",
    ],
    correctAnswer: ["C. Console de Faturamento da AWS"],
    explanation:
      "O console de Faturamento da AWS fornece relatórios sobre o impacto ambiental estimado do uso da AWS.",
    multiSelect: false,
  },
  {
    question:
      "133. Quais opções são perspectivas que incluem capacidades fundamentais do AWS Cloud Adoption Framework? (Selecione DUAS.)",
    options: [
      "A. Sustentabilidade",
      "B. Segurança",
      "C. Operações",
      "D. Eficiência de Desempenho",
      "E. Confiabilidade",
    ],
    correctAnswer: ["C. Operações", "D. Eficiência de Desempenho"],
    explanation:
      "Operações e Eficiência de Desempenho são capacidades fundamentais no AWS Cloud Adoption Framework.",
    multiSelect: true,
  },
  {
    question:
      "134. Para otimizar custos de computação de longo prazo de funções AWS Lambda e instâncias Amazon EC2, qual opção de compra da AWS deve ser escolhida?",
    options: [
      "A. Hosts Dedicados",
      "B. Planos de Economia de Computação",
      "C. Instâncias Reservadas",
      "D. Instâncias Spot",
    ],
    correctAnswer: ["B. Planos de Economia de Computação"],
    explanation:
      "Planos de Economia de Computação oferecem até 66% de desconto e são adequados para otimização de custos de computação de longo prazo.",
    multiSelect: false,
  },
  {
    question:
      "135. Para um armazenamento de dados em memória compatível com a nuvem, qual serviço da AWS deve ser usado?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon ElastiCache",
      "C. Amazon EBS",
      "D. Amazon Redshift",
    ],
    correctAnswer: ["B. Amazon ElastiCache"],
    explanation:
      "Amazon ElastiCache oferece soluções escaláveis de armazenamento de dados em memória, compatíveis com motores de código aberto.",
    multiSelect: false,
  },
  {
    question:
      "136. Qual serviço ou ferramenta da AWS oferece acesso sob demanda a relatórios de segurança e conformidade da AWS?",
    options: [
      "A. AWS Artifact",
      "B. AWS Trusted Advisor",
      "C. Amazon Inspector",
      "D. Console de Faturamento da AWS",
    ],
    correctAnswer: ["A. AWS Artifact"],
    explanation:
      "AWS Artifact oferece acesso sob demanda a relatórios de segurança e conformidade da AWS e acordos.",
    multiSelect: false,
  },
  {
    question:
      "137. Qual plano de suporte da AWS inclui serviço de concierge, um gerente de conta técnica (TAM) designado e suporte técnico 24/7?",
    options: [
      "A. Suporte Básico da AWS",
      "B. Suporte Empresarial da AWS",
      "C. Suporte Business da AWS",
      "D. Suporte Desenvolvedor da AWS",
    ],
    correctAnswer: ["B. Suporte Empresarial da AWS"],
    explanation:
      "Suporte Empresarial da AWS oferece serviço de concierge, um TAM designado e suporte técnico 24/7.",
    multiSelect: false,
  },
  {
    question:
      "138. Para entregar arquivos estáticos globalmente de forma segura, qual solução da AWS deve ser usada?",
    options: [
      "A. Amazon Kinesis Data Streams",
      "B. Amazon CloudFront com Amazon S3",
      "C. Instâncias Amazon EC2 com um Balanceador de Carga de Aplicativo",
      "D. Amazon EFS",
    ],
    correctAnswer: ["B. Amazon CloudFront com Amazon S3"],
    explanation:
      "Amazon CloudFront com Amazon S3 fornece uma maneira segura e rápida de entregar arquivos estáticos globalmente.",
    multiSelect: false,
  },
  {
    question:
      "139. Qual princípio de design está incluído no pilar de excelência operacional do AWS Well-Architected Framework?",
    options: [
      "A. Criar documentação anotada",
      "B. Antecipar falhas",
      "C. Garantir eficiência de desempenho",
      "D. Otimizar custos",
    ],
    correctAnswer: ["A. Criar documentação anotada"],
    explanation:
      "Criar documentação anotada apoia a excelência operacional ao melhorar a compreensão e gerenciamento das cargas de trabalho.",
    multiSelect: false,
  },
  {
    question:
      "140. Para migrar o Microsoft SQL Server de on-premises para a nuvem da AWS com redução de sobrecarga de gerenciamento, qual serviço da AWS deve ser usado?",
    options: [
      "A. Amazon Elastic Container Service",
      "B. Amazon SageMaker",
      "C. Amazon RDS",
      "D. Amazon Athena",
    ],
    correctAnswer: ["C. Amazon RDS"],
    explanation:
      "Amazon RDS suporta vários motores de banco de dados, incluindo Microsoft SQL Server, reduzindo a sobrecarga de gerenciamento.",
    multiSelect: false,
  },
  {
    question:
      "141. No modelo de responsabilidade compartilhada da AWS, o que 'segurança da nuvem' se refere?",
    options: [
      "A. Disponibilidade dos serviços AWS",
      "B. Segurança da infraestrutura da nuvem",
      "C. Políticas de senha para usuários IAM",
      "D. Segurança dos ambientes do cliente",
    ],
    correctAnswer: ["B. Segurança da infraestrutura da nuvem"],
    explanation:
      "'Segurança da nuvem' refere-se à responsabilidade da AWS em proteger a infraestrutura que executa os serviços da AWS.",
    multiSelect: false,
  },
  {
    question:
      "142. Para um aplicativo de compras que requer um serviço de banco de dados gerenciado para armazenamento de dados, qual serviço da AWS deve ser usado?",
    options: [
      "A. Amazon RDS",
      "B. Amazon Redshift",
      "C. Amazon ElastiCache",
      "D. Amazon Neptune",
    ],
    correctAnswer: ["A. Amazon RDS"],
    explanation:
      "Amazon RDS é adequado para aplicações que requerem serviços gerenciados de banco de dados relacional.",
    multiSelect: false,
  },
  {
    question:
      "143. Qual serviço ou ferramenta da AWS ajuda empresas a medir o impacto ambiental de seu uso da AWS?",
    options: [
      "A. Ferramenta de pegada de carbono do cliente da AWS",
      "B. AWS Compute Optimizer",
      "C. Pilar de Sustentabilidade",
      "D. OS-Climate",
    ],
    correctAnswer: ["A. Ferramenta de pegada de carbono do cliente da AWS"],
    explanation:
      "A ferramenta de pegada de carbono do cliente da AWS fornece insights sobre o impacto ambiental do uso da AWS.",
    multiSelect: false,
  },
  {
    question:
      "144. Para implantar aplicações de monitoramento próximas a máquinas de fábrica com a menor latência, qual solução da AWS deve ser usada?",
    options: [
      "A. AWS Outposts",
      "B. Amazon EC2",
      "C. AWS App Runner",
      "D. AWS Batch",
    ],
    correctAnswer: ["A. AWS Outposts"],
    explanation:
      "AWS Outposts permite a implantação de serviços da AWS mais próximos às instalações locais, reduzindo a latência.",
    multiSelect: false,
  },
  {
    question:
      "145. Para melhorar o impacto da sustentabilidade, quais práticas recomendadas uma empresa deve implementar? (Selecione DUAS.)",
    options: [
      "A. Escalar infraestrutura com carga de usuários",
      "B. Maximizar distância entre cargas de trabalho e locais dos usuários",
      "C. Eliminar ativos não utilizados",
      "D. Escalar recursos com capacidade excedente",
      "E. Escalar infraestrutura com base no número de usuários",
    ],
    correctAnswer: [
      "A. Escalar infraestrutura com carga de usuários",
      "C. Eliminar ativos não utilizados",
    ],
    explanation:
      "Escalar infraestrutura com carga de usuários e eliminar ativos não utilizados ajudam a reduzir resíduos e melhorar a sustentabilidade.",
    multiSelect: true,
  },
  {
    question:
      "146. No modelo de responsabilidade compartilhada da AWS, quais tarefas são de responsabilidade da AWS? (Selecione DUAS.)",
    options: [
      "A. Configurar IAM",
      "B. Configurar grupos de segurança de instâncias EC2",
      "C. Proteger o acesso às instalações da AWS",
      "D. Aplicar correções em aplicações de instâncias EC2",
      "E. Manutenção de infraestrutura",
    ],
    correctAnswer: [
      "C. Proteger o acesso às instalações da AWS",
      "E. Manutenção de infraestrutura",
    ],
    explanation:
      "A AWS é responsável por proteger o acesso físico às instalações e pela manutenção da infraestrutura no modelo de responsabilidade compartilhada.",
    multiSelect: true,
  },
  {
    question:
      "147. Em quais categorias o AWS Trusted Advisor fornece ações recomendadas? (Selecione DUAS.)",
    options: [
      "A. Patches de sistema operacional",
      "B. Otimização de custos",
      "C. Tarefas repetitivas",
      "D. Quotas de serviço",
      "E. Registros de atividade da conta",
    ],
    correctAnswer: ["B. Otimização de custos", "D. Quotas de serviço"],
    explanation:
      "O AWS Trusted Advisor é um serviço que fornece orientação em tempo real para ajudá-lo a provisionar seus recursos seguindo as melhores práticas da AWS. O Trusted Advisor fornece ações recomendadas em cinco categorias: otimização de custos, desempenho, segurança, tolerância a falhas e quotas de serviço.",
    multiSelect: true,
  },
  {
    question: "148. Qual serviço da AWS é sempre gratuito para os usuários?",
    options: [
      "A. Amazon S3",
      "B. Amazon Aurora",
      "C. Amazon EC2",
      "D. AWS Identity and Access Management (IAM)",
    ],
    correctAnswer: ["D. AWS Identity and Access Management (IAM)"],
    explanation:
      "AWS Identity and Access Management (IAM) é um serviço que permite aos usuários gerenciar o acesso aos recursos e serviços da AWS. O IAM é sempre gratuito para os usuários.",
    multiSelect: false,
  },
  {
    question:
      "149. Uma empresa deseja melhorar o desempenho global de seu serviço de comércio eletrônico na web. O que a empresa deve fazer para atender a esse requisito?",
    options: [
      "A. Mudar a classe de armazenamento do S3 para S3 Intelligent-Tiering.",
      "B. Implementar uma distribuição do Amazon CloudFront para armazenar em cache o conteúdo do servidor web.",
      "C. Usar o Amazon API Gateway para o serviço da web.",
      "D. Migrar os servidores de comércio eletrônico do website para o Amazon EC2 com rede aprimorada.",
    ],
    correctAnswer: [
      "B. Implementar uma distribuição do Amazon CloudFront para armazenar em cache o conteúdo do servidor web.",
    ],
    explanation:
      "O Amazon CloudFront é um serviço de rede de entrega de conteúdo (CDN) que entrega dados, vídeos, aplicativos e APIs de forma segura aos clientes em todo o mundo com baixa latência e altas velocidades de transferência.",
    multiSelect: false,
  },

  {
    question:
      "150. Quais serviços ou ferramentas da AWS são projetados para proteger uma carga de trabalho de injeções SQL, scripts entre sites e ataques DDoS? (Selecione DOIS.)",
    options: [
      "A. Ponto de término da VPC",
      "B. AWS Shield Standard",
      "C. AWS Config",
      "D. AWS WAF",
    ],
    correctAnswer: ["B. AWS Shield Standard", "D. AWS WAF"],
    explanation:
      "O AWS Shield Standard e o AWS WAF são serviços projetados para proteger cargas de trabalho contra injeções SQL, scripts entre sites e ataques DDoS.",
    multiSelect: true,
  },
  {
    question:
      "151. Uma empresa está construindo um aplicativo que receberá milhões de consultas de banco de dados por segundo. Qual serviço da AWS atenderá a essa necessidade?",
    options: [
      "A. Amazon DynamoDB",
      "B. AWS Cloud9",
      "C. Amazon ElastiCache para Memcached",
      "D. Amazon Neptune",
    ],
    correctAnswer: ["A. Amazon DynamoDB"],
    explanation:
      "O Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado que fornece desempenho rápido e previsível com escalabilidade perfeita.",
    multiSelect: false,
  },
  {
    question:
      "152. Uma empresa está usando o Amazon RDS e deseja aumentar a resiliência de sua aplicação crítica de negócios. Como a empresa pode aumentar a resiliência dessa aplicação?",
    options: [
      "A. Implementar uma cópia da aplicação em outra conta da AWS.",
      "B. Usar múltiplos VPCs para a aplicação.",
      "C. Usar múltiplas sub-redes para a aplicação.",
      "D. Usar múltiplas Zonas de Disponibilidade.",
    ],
    correctAnswer: ["D. Usar múltiplas Zonas de Disponibilidade."],
    explanation:
      "Usar múltiplas Zonas de Disponibilidade é a melhor maneira de aumentar a resiliência da aplicação, mantendo alta disponibilidade mesmo em caso de falhas.",
    multiSelect: false,
  },
  {
    question:
      "153. Um desenvolvedor precisa manter uma infraestrutura de ambiente de desenvolvimento e um ambiente de produção de forma repetível. Qual serviço da AWS o desenvolvedor deve usar para atender a esses requisitos?",
    options: [
      "A. AWS Ground Station",
      "B. AWS Shield",
      "C. AWS IoT Device Defender",
      "D. AWS CloudFormation",
    ],
    correctAnswer: ["D. AWS CloudFormation"],
    explanation:
      "O AWS CloudFormation permite modelar e provisionar recursos da AWS e de terceiros de forma previsível e repetível, ideal para manter múltiplos ambientes.",
    multiSelect: false,
  },
  {
    question:
      "154. Quais ações são exemplos do esforço de uma empresa para redimensionar seus recursos da AWS para controlar os custos na nuvem? (Selecione DUAS.)",
    options: [
      "A. Mudar de Amazon RDS para Amazon DynamoDB.",
      "B. Selecionar tipos de instâncias Amazon EC2 baseadas em padrões de utilização anteriores.",
      "C. Usar políticas de ciclo de vida do Amazon S3 para mover objetos pouco acessados para camadas de armazenamento de menor custo.",
      "D. Usar implantações Multi-AZ para Amazon RDS.",
      "E. Substituir instâncias Amazon EC2 existentes pelo AWS Elastic Beanstalk.",
    ],
    correctAnswer: [
      "B. Selecionar tipos de instâncias Amazon EC2 baseadas em padrões de utilização anteriores.",
      "C. Usar políticas de ciclo de vida do Amazon S3 para mover objetos pouco acessados para camadas de armazenamento de menor custo.",
    ],
    explanation:
      "Selecionar tipos de instância EC2 com base em utilização passada e usar políticas de ciclo de vida do S3 para reduzir custos são estratégias de otimização de custos.",
    multiSelect: true,
  },
  {
    question:
      "155. Uma empresa suspeita que seus recursos da AWS estão sendo usados para atividades ilegais. Qual grupo ou equipe da AWS a empresa deve notificar?",
    options: [
      "A. Equipe de Abuso da AWS",
      "B. Equipe de Suporte da AWS",
      "C. Gerentes de conta técnica da AWS",
      "D. Equipe de Serviços Profissionais da AWS",
    ],
    correctAnswer: ["A. Equipe de Abuso da AWS"],
    explanation:
      "Em caso de suspeita de atividades ilegais, a empresa deve notificar a Equipe de Abuso da AWS.",
    multiSelect: false,
  },
  {
    question:
      "156. Uma empresa possui um bucket do Amazon S3 contendo imagens de faturas financeiras digitalizadas. A empresa está construindo um aplicativo baseado em IA na AWS para identificar e ler os valores totais de saldo nas faturas. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "A. Amazon Forecast",
      "B. Amazon Textract",
      "C. Amazon Rekognition",
      "D. Amazon Lex",
    ],
    correctAnswer: ["B. Amazon Textract"],
    explanation:
      "O Amazon Textract é capaz de extrair texto e dados de documentos digitalizados, ideal para ler valores em faturas.",
    multiSelect: false,
  },
  {
    question:
      "157. Qual benefício da nuvem da AWS ajuda as empresas a alcançar custos de uso mais baixos devido ao uso agregado de todos os usuários da AWS?",
    options: [
      "A. Não é necessário adivinhar a capacidade",
      "B. Capacidade de se globalizar em minutos",
      "C. Economias de escala",
      "D. Aumento da velocidade e agilidade",
    ],
    correctAnswer: ["C. Economias de escala"],
    explanation:
      "Economias de escala permitem que a AWS ofereça custos mais baixos como resultado do uso agregado de todos os usuários da AWS.",
    multiSelect: false,
  },
  {
    question:
      "158. (QUESTÃO BONUS SAA-03) Uma empresa está hospedando uma aplicação web na AWS usando uma única instância Amazon EC2 que armazena documentos enviados pelos usuários em um volume Amazon EBS. Para melhor escalabilidade e disponibilidade, a empresa duplicou a arquitetura e criou uma segunda instância EC2 e volume EBS em outra Zona de Disponibilidade, colocando ambos atrás de um Application Load Balancer. Após completar essa mudança, os usuários relataram que, cada vez que atualizavam o site, eles podiam ver um subconjunto de seus documentos ou o outro, mas nunca todos os documentos ao mesmo tempo. O que o arquiteto de soluções deve propor para garantir que os usuários vejam todos os seus documentos de uma vez?",
    options: [
      "A. Copiar os dados para que ambos os volumes EBS contenham todos os documentos",
      "B. Configurar o Application Load Balancer para direcionar um usuário para o servidor com os documentos",
      "C. Copiar os dados de ambos os volumes EBS para o Amazon EFS. Modificar a aplicação para salvar novos documentos no Amazon EFS",
      "D. Configurar o Application Load Balancer para enviar a solicitação para ambos os servidores. Retornar cada documento do servidor correto",
    ],
    correctAnswer: [
      "C. Copiar os dados de ambos os volumes EBS para o Amazon EFS. Modificar a aplicação para salvar novos documentos no Amazon EFS",
    ],
    explanation:
      "A solução ideal envolve o uso do Amazon EFS, que é um sistema de armazenamento que pode ser acessado simultaneamente por várias instâncias EC2 de diferentes Zonas de Disponibilidade, garantindo que todos os usuários vejam todos os seus documentos independentemente da instância para a qual são direcionados pelo Application Load Balancer.",
    multiSelect: false,
  },
  {
    question:
      "159. Uma empresa está executando cargas de trabalho para múltiplos departamentos dentro de uma única VPC. A empresa precisa ser capaz de faturar cada departamento pelo seu uso de recursos. Qual ação a empresa deve tomar para realizar esse objetivo com o menor sobrecarga operacional possível?",
    options: [
      "A. Adicionar uma tag de departamento a cada recurso e configurar tags de alocação de custo.",
      "B. Mover cada recurso do departamento para sua própria VPC.",
      "C. Mover cada recurso do departamento para sua própria conta AWS.",
      "D. Usar AWS Organizations para obter um relatório de faturamento para cada departamento.",
    ],
    correctAnswer: [
      "A. Adicionar uma tag de departamento a cada recurso e configurar tags de alocação de custo.",
    ],
    explanation:
      "Adicionar uma tag de departamento a cada recurso e configurar tags de alocação de custo é uma ação que pode ajudar você a alcançar o objetivo de faturar cada departamento pelo seu uso de recursos com a menor sobrecarga operacional possível.",
    multiSelect: false,
  },
  {
    question:
      "160. Uma empresa precisa de um repositório que armazene código-fonte. A empresa precisa de uma maneira de atualizar o software em execução quando o código muda. Qual combinação de serviços AWS atende a esses requisitos? (Selecione DOIS.)",
    options: [
      "A. AWS CodeCommit",
      "B. AWS CodeDeploy",
      "C. Amazon DynamoDB",
      "D. Amazon S3",
      "E. Amazon Elastic Container Service (Amazon ECS)",
    ],
    correctAnswer: ["A. AWS CodeCommit", "B. AWS CodeDeploy"],
    explanation:
      "AWS CodeCommit e AWS CodeDeploy são corretos porque AWS CodeCommit é um serviço que fornece um serviço de controle de origem totalmente gerenciado que hospeda repositórios Git seguros, e AWS CodeDeploy é um serviço que automatiza implantações de código para qualquer instância, incluindo instâncias Amazon EC2 e servidores em execução no local.",
    multiSelect: true,
  },
  {
    question:
      "161. Uma empresa tem uma carga de trabalho de aplicativo que é projetada para ser sem estado e pode suportar interrupções ocasionais. O aplicativo realiza computações massivamente paralelas. Qual modelo de precificação de instâncias Amazon EC2 a empresa deve escolher para reduzir custos?",
    options: [
      "A. Instâncias Sob Demanda",
      "B. Instâncias Spot",
      "C. Instâncias Reservadas",
      "D. Instâncias Dedicadas",
    ],
    correctAnswer: ["B. Instâncias Spot"],
    explanation:
      "Instâncias Spot permitem que você aproveite a capacidade excedente do EC2 na nuvem da AWS disponível por um preço até 90% menor em comparação com os preços Sob Demanda.",
    multiSelect: false,
  },
  {
    question:
      "162. Uma empresa de manufatura tem um aplicativo crítico que funciona em um local remoto com uma conexão de internet lenta. A empresa quer migrar a carga de trabalho para a AWS. O aplicativo é sensível à latência e interrupções na conectividade. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. Zonas de Disponibilidade",
      "B. AWS Local Zones",
      "C. AWS Wavelength",
      "D. AWS Outposts",
    ],
    correctAnswer: ["D. AWS Outposts"],
    explanation:
      "AWS Outposts é um serviço que oferece racks de computação e armazenamento totalmente gerenciados e configuráveis, permitindo executar cargas de trabalho no local e conectar-se aos serviços da AWS na nuvem.",
    multiSelect: false,
  },
  {
    question:
      "163. Qual serviço da AWS é projetado para ajudar os usuários a orquestrar um processo de fluxo de trabalho para um conjunto de funções AWS Lambda?",
    options: [
      "A. Amazon DynamoDB",
      "B. AWS CodePipeline",
      "C. AWS Batch",
      "D. AWS Step Functions",
    ],
    correctAnswer: ["D. AWS Step Functions"],
    explanation:
      "AWS Step Functions é um serviço que permite coordenar vários serviços da AWS em fluxos de trabalho sem servidor que podem ser ativados por eventos.",
    multiSelect: false,
  },
  {
    question:
      "165. Uma empresa fornece um aplicativo como serviço (SaaS). A empresa tem um novo cliente que está baseado em um país diferente. Os dados do novo cliente precisam ser hospedados naquele país. Qual serviço ou componente de infraestrutura da AWS a empresa deve usar para atender a este requisito?",
    options: [
      "A. AWS Shield",
      "B. Amazon S3 Object Lock",
      "C. Regiões da AWS",
      "D. Grupos de colocação",
    ],
    correctAnswer: ["C. Regiões da AWS"],
    explanation:
      "Regiões da AWS são áreas geográficas em todo o mundo onde a AWS tem clusters de data centers. Ao hospedar os dados do cliente em uma Região específica da AWS, a empresa pode atender ao requisito de hospedar os dados no país do cliente.",
    multiSelect: false,
  },
  {
    question:
      "166. Uma empresa precisa hospedar um servidor web nas instâncias Amazon EC2 por pelo menos 1 ano. O servidor web não pode tolerar interrupções. Qual opção de compra de instância EC2 atenderá a esses requisitos da forma mais econômica?",
    options: [
      "A. Instâncias sob Demanda",
      "B. Instâncias Reservadas com Pagamento Parcial Adiantado",
      "C. Instâncias Spot",
      "D. Instâncias Reservadas sem Pagamento Adiantado",
    ],
    correctAnswer: ["B. Instâncias Reservadas com Pagamento Parcial Adiantado"],
    explanation:
      "Instâncias Reservadas com Pagamento Parcial Adiantado são a opção mais econômica para cargas de trabalho previsíveis que precisam de operação contínua.",
    multiSelect: false,
  },
  {
    question:
      "167. Qual grupo compartilha responsabilidade com a AWS pela segurança e conformidade de contas e recursos da AWS?",
    options: [
      "A. Fornecedores terceirizados",
      "B. Clientes",
      "C. Parceiros revendedores",
      "D. Provedores de internet",
    ],
    correctAnswer: ["B. Clientes"],
    explanation:
      "No modelo de responsabilidade compartilhada da AWS, os clientes são responsáveis pela segurança 'na nuvem', o que inclui controle de acesso e gerenciamento de dados.",
    multiSelect: false,
  },
  {
    question:
      "168. Uma empresa configurou uma VPC em sua conta AWS e criou uma sub-rede na VPC. A empresa quer tornar a sub-rede pública. Quais recursos da AWS a empresa deve usar para atender a esse requisito? (Selecione DUAS.)",
    options: [
      "A. Gateway de internet da Amazon VPC",
      "B. Gateway NAT da Amazon VPC",
      "C. Tabelas de roteamento da Amazon VPC",
      "D. ACLs de rede da Amazon VPC",
      "E. Grupos de segurança da Amazon EC2",
    ],
    correctAnswer: [
      "A. Gateway de internet da Amazon VPC",
      "C. Tabelas de roteamento da Amazon VPC",
    ],
    explanation:
      "Para tornar uma sub-rede pública, a empresa precisa usar um Gateway de Internet da Amazon VPC e configurar tabelas de roteamento apropriadas.",
    multiSelect: true,
  },
  {
    question:
      "169. Qual ferramenta ou serviço da AWS uma empresa deve usar para prever gastos com a AWS?",
    options: [
      "A. Amazon DevPay",
      "B. AWS Organizations",
      "C. AWS Trusted Advisor",
      "D. Cost Explorer",
    ],
    correctAnswer: ["D. Cost Explorer"],
    explanation:
      "Cost Explorer é uma ferramenta que permite aos usuários analisar e prever gastos com a AWS, ajudando a planejar orçamentos futuros.",
    multiSelect: false,
  },
  {
    question:
      "170. Qual dos seguintes é responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "A. Gerenciamento de identidade e acesso",
      "B. Inicialização de disco rígido",
      "C. Proteção do hardware do data center",
      "D. Segurança das Zonas de Disponibilidade",
    ],
    correctAnswer: ["A. Gerenciamento de identidade e acesso"],
    explanation:
      "No modelo de responsabilidade compartilhada da AWS, o gerenciamento de identidade e acesso é responsabilidade do cliente.",
    multiSelect: false,
  },
  {
    question:
      "171. Quais capacidades estão na perspectiva de plataforma do AWS Cloud Adoption Framework (AWS CAF)? (Selecione DUAS.)",
    options: [
      "A. Gerenciamento de desempenho e capacidade",
      "B. Engenharia de dados",
      "C. Integração contínua e entrega contínua (CI/CD)",
      "D. Proteção de infraestrutura",
      "E. Gerenciamento de mudanças e liberação",
    ],
    correctAnswer: [
      "B. Engenharia de dados",
      "C. Integração contínua e entrega contínua (CI/CD)",
    ],
    explanation:
      "Estas são duas das sete capacidades que estão na perspectiva de plataforma do AWS Cloud Adoption Framework (AWS CAF). A perspectiva de plataforma ajuda você a construir uma plataforma de nuvem híbrida escalável e de nível empresarial, modernizar as cargas de trabalho existentes e implementar novas soluções nativas da nuvem.",
    multiSelect: true,
  },
  {
    question:
      "172. Uma empresa quer consultar seus logs de servidores para obter insights sobre as experiências de seus clientes. Qual serviço da AWS armazenará esses dados de forma MAIS econômica?",
    options: [
      "A. Amazon Aurora",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon S3",
    ],
    correctAnswer: ["D. Amazon S3"],
    explanation:
      "O Amazon S3 é um serviço da AWS que fornece armazenamento de objetos escalável, durável e econômico na nuvem. O Amazon S3 pode armazenar qualquer quantidade e tipo de dados, como logs de servidores, e oferece várias classes de armazenamento com diferentes características de desempenho e preço.",
    multiSelect: false,
  },
  {
    question:
      "173. Uma empresa quer gerar uma lista de usuários do IAM. A empresa também quer visualizar o status de várias credenciais associadas aos usuários, como senha, chaves de acesso e dispositivos de autenticação multifator (MFA). Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    options: [
      "A. Relatório de credenciais do IAM",
      "B. AWS IAM Identity Center (AWS Single Sign-On)",
      "C. AWS Identity and Access Management Access Analyzer",
      "D. Relatório de Custo e Uso da AWS",
    ],
    correctAnswer: ["A. Relatório de credenciais do IAM"],
    explanation:
      "Um relatório de credenciais do IAM é um recurso do AWS Identity and Access Management (IAM) que permite visualizar e baixar um relatório que lista todos os usuários do IAM em sua conta e o status de suas várias credenciais, como senhas, chaves de acesso e dispositivos MFA.",
    multiSelect: false,
  },
  {
    question:
      "174. Qual serviço da AWS fornece um único local para rastrear o progresso das migrações de aplicativos?",
    options: [
      "A. AWS Application Discovery Service",
      "B. AWS Application Migration Service",
      "C. AWS Service Catalog",
      "D. AWS Migration Hub",
    ],
    correctAnswer: ["D. AWS Migration Hub"],
    explanation:
      "O AWS Migration Hub é um serviço que fornece um único local para rastrear o progresso das migrações de aplicativos em várias soluções da AWS e de parceiros. Ele permite que você escolha as ferramentas de migração da AWS e de parceiros que melhor atendem às suas necessidades, fornecendo visibilidade sobre o status das migrações em seu portfólio de aplicativos.",
    multiSelect: false,
  },
  {
    question:
      "175. Uma empresa executa um banco de dados MySQL em seu data center local. A empresa quer executar uma cópia desse banco de dados na nuvem da AWS. Qual serviço da AWS suportaria essa carga de trabalho?",
    options: [
      "A. Amazon RDS",
      "B. Amazon Neptune",
      "C. Amazon ElastiCache para Redis",
      "D. Amazon Quantum Ledger Database (Amazon QLDB)",
    ],
    correctAnswer: ["A. Amazon RDS"],
    explanation:
      "O Amazon Relational Database Service (Amazon RDS) é um serviço web que facilita a configuração, operação e escalabilidade de um banco de dados relacional na nuvem. Ele fornece capacidade econômica e redimensionável, automatizando tarefas de administração demoradas, como provisionamento de hardware, configuração de banco de dados, aplicação de patches e backups. O Amazon RDS suporta seis mecanismos de banco de dados populares: Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database e SQL Server.",
    multiSelect: false,
  },
  {
    question:
      "176. Uma empresa precisa implementar o gerenciamento de identidades para uma frota de aplicativos móveis executados na nuvem da AWS. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "A. Amazon Cognito",
      "B. AWS Security Hub",
      "C. AWS Shield",
      "D. AWS WAF",
    ],
    correctAnswer: ["A. Amazon Cognito"],
    explanation:
      "O Amazon Cognito é um serviço que fornece gerenciamento de identidades para aplicativos móveis e web, permitindo que os usuários se inscrevam, façam login e acessem recursos da AWS com diferentes provedores de identidade.",
    multiSelect: false,
  },
  {
    question:
      "177. Uma empresa precisa de um serviço de gerenciamento de vulnerabilidades automatizado que verifique continuamente as cargas de trabalho da AWS em busca de vulnerabilidades de software. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "A. Amazon GuardDuty",
      "B. Amazon Inspector",
      "C. AWS Security Hub",
      "D. AWS Shield",
    ],
    correctAnswer: ["B. Amazon Inspector"],
    explanation:
      "O Amazon Inspector é um serviço automatizado de gerenciamento de vulnerabilidades que verifica continuamente as cargas de trabalho da AWS em busca de vulnerabilidades de software e exposição não intencional à rede. O Amazon Inspector descobre automaticamente as cargas de trabalho, como instâncias do Amazon EC2, contêineres e funções Lambda, e as verifica em busca de vulnerabilidades de software e exposição não intencional à rede.",
    multiSelect: false,
  },
  {
    question:
      "178. Quais tarefas são responsabilidades do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DUAS.)",
    options: [
      "A. Configurar o firewall do grupo de segurança fornecido pela AWS.",
      "B. Classificar os ativos da empresa na nuvem da AWS.",
      "C. Determinar quais Zonas de Disponibilidade usar para os buckets do Amazon S3.",
      "D. Aplicar patches ou atualizar o Amazon DynamoDB.",
      "E. Selecionar instâncias do Amazon EC2 para executar o AWS Lambda.",
      "F. AWS Config",
    ],
    correctAnswer: [
      "A. Configurar o firewall do grupo de segurança fornecido pela AWS.",
      "B. Classificar os ativos da empresa na nuvem da AWS.",
    ],
    explanation:
      "De acordo com o modelo de responsabilidade compartilhada da AWS, o cliente é responsável pela segurança na nuvem, o que inclui as tarefas de configurar o firewall do grupo de segurança fornecido pela AWS e classificar os ativos da empresa na nuvem da AWS.",
    multiSelect: true,
  },
  {
    question:
      "179. Uma empresa quer monitorar o desempenho de sua carga de trabalho. A empresa quer garantir que os serviços em nuvem sejam entregues em um nível que atenda às suas necessidades de negócios. Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) atenderá a esses requisitos?",
    options: ["A. Negócios", "B. Governança", "C. Plataforma", "D. Operações"],
    correctAnswer: ["D. Operações"],
    explanation:
      "A perspectiva de Operações ajuda você a monitorar e gerenciar suas cargas de trabalho em nuvem para garantir que elas sejam entregues em um nível que atenda às suas necessidades de negócios. As partes interessadas comuns incluem o diretor de operações (COO), o diretor de nuvem, o gerente de operações em nuvem e os engenheiros de operações em nuvem.",
    multiSelect: false,
  },
  {
    question:
      "180. Uma empresa precisa de um serviço gerenciado de aprendizado de máquina (ML) que possa recomendar produtos com base nos comportamentos anteriores de um cliente. Qual serviço da AWS atende a esse requisito?",
    options: [
      "A. Amazon Personalize",
      "B. Amazon SageMaker",
      "C. Amazon Pinpoint",
      "D. Amazon Comprehend",
    ],
    correctAnswer: ["A. Amazon Personalize"],
    explanation:
      "O Amazon Personalize é um serviço totalmente gerenciado que permite aos desenvolvedores criar recomendações personalizadas para os clientes usando seus próprios dados. O Amazon Personalize pode processar e examinar automaticamente os dados, identificar o que é significativo, selecionar os algoritmos certos e treinar e otimizar um modelo de recomendação personalizado.",
    multiSelect: false,
  },
  {
    question:
      "181. Qual é o propósito de ter um gateway da Internet dentro de uma VPC?",
    options: [
      "A. Criar uma conexão VPN com a VPC",
      "B. Permitir a comunicação entre a VPC e a Internet",
      "C. Impor restrições de largura de banda no tráfego da Internet",
      "D. Balancear a carga do tráfego da Internet entre instâncias do Amazon EC2",
    ],
    correctAnswer: ["B. Permitir a comunicação entre a VPC e a Internet"],
    explanation:
      "Um gateway da Internet é um serviço que permite que o tráfego da Internet entre em uma VPC. Caso contrário, uma VPC é completamente segmentada e a única forma de acessá-la é potencialmente por meio de uma conexão VPN, em vez de uma conexão com a Internet. Um gateway da Internet é uma conexão lógica entre uma VPC da AWS e a Internet. Ele suporta tráfego IPv4 e IPv6 e não causa riscos de disponibilidade ou restrições de largura de banda no tráfego de rede.",
    multiSelect: false,
  },
  {
    question:
      "182. Uma empresa está construindo um aplicativo móvel para fornecer recomendações de compras aos seus clientes. A empresa quer usar um banco de dados de grafos como parte do mecanismo de recomendação de compras. Qual serviço de banco de dados da AWS a empresa deve escolher?",
    options: [
      "A. Amazon DynamoDB",
      "B. Amazon Aurora",
      "C. Amazon Neptune",
      "D. Amazon DocumentDB (com compatibilidade com MongoDB)",
    ],
    correctAnswer: ["C. Amazon Neptune"],
    explanation:
      "O Amazon Neptune é um serviço que fornece um banco de dados de grafos totalmente gerenciado que suporta grafos de propriedades e grafos RDF. Ele pode ser usado para construir aplicativos que trabalham com conjuntos de dados altamente conectados, como recomendações de compras, redes sociais, detecção de fraudes e grafos de conhecimento.",
    multiSelect: false,
  },
  {
    question:
      "183. Uma empresa tem equipes com diferentes funções e responsabilidades de trabalho. Os funcionários da empresa mudam frequentemente de equipe. A empresa precisa gerenciar as permissões dos funcionários para que sejam apropriadas para as responsabilidades do trabalho. Qual recurso do IAM a empresa deve usar para atender a esse requisito com a MENOR sobrecarga operacional?",
    options: [
      "A. Grupos de usuários do IAM",
      "B. Funções do IAM",
      "C. Perfis de instância do IAM",
      "D. Políticas do IAM para usuários individuais",
    ],
    correctAnswer: ["B. Funções do IAM"],
    explanation:
      "As funções do IAM são uma forma de conceder permissões temporárias a entidades que precisam acessar recursos da AWS, como usuários, aplicativos ou serviços. As funções do IAM permitem que os clientes atribuam permissões a entidades sem ter que criar ou gerenciar usuários ou credenciais do IAM para elas.",
    multiSelect: false,
  },
  {
    question:
      "184. Uma empresa quer projetar um aplicativo web confiável hospedado no Amazon EC2. Qual abordagem alcançará esse objetivo?",
    options: [
      "A. Lançar instâncias EC2 grandes na mesma Zona de Disponibilidade.",
      "B. Espalhar instâncias EC2 em mais de um grupo de segurança.",
      "C. Espalhar instâncias EC2 em mais de uma Zona de Disponibilidade.",
      "D. Usar uma Imagem de Máquina da Amazon (AMI) do AWS Marketplace.",
    ],
    correctAnswer: [
      "C. Espalhar instâncias EC2 em mais de uma Zona de Disponibilidade.",
    ],
    explanation:
      "A abordagem que alcançará o objetivo de projetar um aplicativo web confiável hospedado no Amazon EC2 é espalhar as instâncias EC2 em mais de uma Zona de Disponibilidade. Uma Zona de Disponibilidade é um local fisicamente isolado dentro de uma região da AWS que possui sua própria energia, refrigeração e conectividade de rede. Ao espalhar as instâncias EC2 em várias Zonas de Disponibilidade, os usuários podem aumentar a tolerância a falhas e a disponibilidade de seus aplicativos web, além de reduzir a latência para os usuários finais.",
    multiSelect: false,
  },
  {
    question:
      "185. Qual é a responsabilidade do cliente ao usar o AWS Lambda de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "A. Gerenciar o código dentro da função Lambda",
      "B. Confirmar se o hardware está funcionando no data center",
      "C. Aplicar patches no sistema operacional",
      "D. Desligar funções Lambda quando não estiverem mais em uso",
    ],
    correctAnswer: ["A. Gerenciar o código dentro da função Lambda"],
    explanation:
      "De acordo com o modelo de responsabilidade compartilhada da AWS, a AWS é responsável pela segurança da nuvem, enquanto os clientes são responsáveis pela segurança na nuvem. Isso significa que a AWS é responsável pelos servidores físicos, rede e sistema operacional que executam as funções Lambda, enquanto os clientes são responsáveis pela segurança de seu código e pelo IAM da AWS para o serviço Lambda e dentro de sua função.",
    multiSelect: false,
  },
  {
    question:
      "186. Uma equipe de desenvolvimento quer implantar vários ambientes de teste para um aplicativo de forma rápida e repetível. Qual serviço da AWS a equipe deve usar?",
    options: [
      "A. Amazon EC2",
      "B. AWS CloudFormation",
      "C. Amazon QuickSight",
      "D. Amazon Elastic Container Service (Amazon ECS)",
    ],
    correctAnswer: ["B. AWS CloudFormation"],
    explanation:
      "O AWS CloudFormation é um serviço que permite modelar e provisionar seus recursos da AWS usando modelos. Você pode definir sua infraestrutura como código e automatizar a criação e atualização de seus recursos. O AWS CloudFormation também suporta pilhas aninhadas, conjuntos de alterações e recursos de reversão para ajudá-lo a gerenciar ambientes complexos e dinâmicos.",
    multiSelect: false,
  },
  {
    question:
      "187. Um desenvolvedor deseja implantar um aplicativo rapidamente na AWS sem criar manualmente os recursos necessários. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "A. Amazon EC2",
      "B. AWS Elastic Beanstalk",
      "C. AWS CodeBuild",
      "D. Amazon Personalize",
    ],
    correctAnswer: ["B. AWS Elastic Beanstalk"],
    explanation:
      "O AWS Elastic Beanstalk é um serviço que permite implantar e gerenciar aplicativos na AWS sem criar e configurar manualmente os recursos necessários, como instâncias EC2, load balancers, grupos de segurança, bancos de dados e muito mais. O AWS Elastic Beanstalk lida automaticamente com o provisionamento, escalonamento, balanceamento de carga, monitoramento de integridade e atualização de seu aplicativo, enquanto dá a você controle total sobre os recursos subjacentes da AWS, se necessário.",
    multiSelect: false,
  },
  {
    question:
      "188. Quais serviços da AWS uma empresa pode usar para alcançar uma arquitetura fracamente acoplada? (Selecione DUAS.)",
    options: [
      "A. Amazon Workspaces",
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "C. Amazon Connect",
      "D. AWS Trusted Advisor",
      "E. AWS Step Functions",
    ],
    correctAnswer: [
      "B. Amazon Simple Queue Service (Amazon SQS)",
      "E. AWS Step Functions",
    ],
    explanation:
      "O Amazon Simple Queue Service (Amazon SQS) e o AWS Step Functions são serviços da AWS que podem ser usados para alcançar uma arquitetura fracamente acoplada. O Amazon SQS é um serviço de enfileiramento de mensagens totalmente gerenciado que permite desacoplar e escalar microsserviços, sistemas distribuídos e aplicativos sem servidor. O AWS Step Functions permite coordenar vários serviços da AWS em fluxos de trabalho sem servidor para que você possa criar e atualizar aplicativos rapidamente.",
    multiSelect: true,
  },
  {
    question:
      "189. Uma empresa precisa controlar o tráfego de entrada e saída para uma instância do Amazon EC2. Qual serviço ou recurso da AWS a empresa pode associar à instância EC2 para atender a esse requisito?",
    options: [
      "A. Network ACL",
      "B. Grupo de segurança",
      "C. AWS WAF",
      "D. Tabelas de rotas da VPC",
    ],
    correctAnswer: ["B. Grupo de segurança"],
    explanation:
      "Um grupo de segurança é um firewall virtual que pode ser associado a uma instância do Amazon EC2 para controlar o tráfego de entrada e saída da instância. Você pode especificar quais protocolos, portas e intervalos de IP de origem ou destino são permitidos ou negados pelo grupo de segurança.",
    multiSelect: false,
  },
  {
    question:
      "190. Uma empresa tem 5 TB de dados armazenados no Amazon S3. A empresa planeja ocasionalmente executar consultas nos dados para análise. Qual serviço da AWS a empresa deve usar para executar essas consultas da maneira MAIS econômica?",
    options: [
      "A. Amazon Redshift",
      "B. Amazon Athena",
      "C. Amazon Kinesis",
      "D. Amazon RDS",
    ],
    correctAnswer: ["B. Amazon Athena"],
    explanation:
      "O Amazon Athena é um serviço de análise interativo sem servidor que permite aos usuários executar consultas SQL em dados armazenados no Amazon S3. É ideal para consultas ocasionais em grandes conjuntos de dados, pois não requer provisionamento, configuração ou gerenciamento de servidores. Os usuários pagam apenas pelas consultas que executam, com base na quantidade de dados verificados.",
    multiSelect: false,
  },
  {
    question:
      "191. Uma empresa quer migrar seu banco de dados para um serviço gerenciado da AWS compatível com o PostgreSQL. Quais serviços da AWS atenderão a esses requisitos? (Selecione DOIS)",
    options: [
      "A. Amazon Athena",
      "B. Amazon RDS",
      "C. Amazon EC2",
      "D. Amazon DynamoDB",
      "E. Amazon Aurora",
    ],
    correctAnswer: ["B. Amazon RDS", "E. Amazon Aurora"],
    explanation:
      "O Amazon RDS e o Amazon Aurora são serviços gerenciados da AWS que suportam o mecanismo de banco de dados PostgreSQL. O Amazon RDS facilita a configuração, operação e escalonamento de implantações do PostgreSQL na nuvem, enquanto o Amazon Aurora é um mecanismo de banco de dados nativo da nuvem compatível com o PostgreSQL e oferece maior desempenho e disponibilidade.",
    multiSelect: true,
  },
  {
    question:
      "192. O aplicativo de uma empresa tem alto uso de clientes em determinados momentos do dia. A empresa quer reduzir o número de instâncias do Amazon EC2 em execução quando o uso do aplicativo é baixo. Qual serviço da AWS ou opção de compra de instâncias a empresa deve usar para atender a esse requisito?",
    options: [
      "A. Planos de Economia de Instâncias EC2",
      "B. Instâncias Spot",
      "C. Instâncias Reservadas",
      "D. Auto Scaling do Amazon EC2",
    ],
    correctAnswer: ["D. Auto Scaling do Amazon EC2"],
    explanation:
      "O Auto Scaling do Amazon EC2 é um serviço da AWS que pode ajudar os usuários a reduzir o número de instâncias do Amazon EC2 em execução quando o uso do aplicativo é baixo. O Auto Scaling do Amazon EC2 permite que os usuários criem políticas de escalonamento que ajustam automaticamente o número de instâncias EC2 com base na demanda ou em um cronograma.",
    multiSelect: false,
  },
  {
    question:
      "193. Uma empresa está executando um aplicativo monolítico local que não escala e é difícil de manter. A empresa tem um plano para migrar o aplicativo para a AWS e dividi-lo em microsserviços. Qual prática recomendada do AWS Well-Architected Framework a empresa está seguindo com esse plano?",
    options: [
      "A. Integrar testes funcionais como parte da implantação na AWS.",
      "B. Usar automação para implantar mudanças.",
      "C. Implantar o aplicativo em vários locais.",
      "D. Implementar dependências fracamente acopladas.",
    ],
    correctAnswer: ["D. Implementar dependências fracamente acopladas."],
    explanation:
      "A empresa está seguindo a prática recomendada de implementar dependências fracamente acopladas migrando o aplicativo para a AWS e dividindo-o em microsserviços. Dependências fracamente acopladas são um princípio de design do AWS Well-Architected Framework que ajuda a reduzir as interdependências entre componentes e melhorar a escalabilidade, confiabilidade e desempenho do sistema.",
    multiSelect: false,
  },
  {
    question:
      "194. Qual serviço ou recurso da AWS permite que os usuários criptografem dados em repouso no Amazon S3?",
    options: [
      "A. Políticas do IAM",
      "B. Criptografia do lado do servidor",
      "C. Amazon GuardDuty",
      "D. Criptografia do lado do cliente",
    ],
    correctAnswer: ["B. Criptografia do lado do servidor"],
    explanation:
      "A criptografia do lado do servidor é uma opção de criptografia que o Amazon S3 fornece para criptografar dados em repouso no Amazon S3. Com a criptografia do lado do servidor, o Amazon S3 criptografa um objeto antes de salvá-lo em disco em seus data centers e o descriptografa quando você faz o download dos objetos.",
    multiSelect: false,
  },

  {
    question:
      "195. Um engenheiro de TI precisa acessar os serviços da AWS a partir de um aplicativo local. Quais credenciais ou chaves o aplicativo precisa para autenticação?",
    options: [
      "A. Nome de usuário e senha da conta AWS",
      "B. Chave de acesso e segredo do IAM",
      "C. Pares de chaves do Amazon EC2",
      "D. Chaves do AWS Key Management Service (AWS KMS)",
    ],
    correctAnswer: ["B. Chave de acesso e segredo do IAM"],
    explanation:
      "As chaves de acesso do IAM são credenciais de longo prazo que consistem em um ID de chave de acesso e uma chave de acesso secreta. Você usa chaves de acesso para assinar solicitações programáticas que você faz para a AWS. Se você precisar acessar os serviços da AWS a partir de um aplicativo local, pode usar as chaves de acesso do IAM para autenticar suas solicitações.",
    multiSelect: false,
  },
  {
    question:
      "196. Uma empresa quer migrar seu aplicativo de computação de alto desempenho (HPC) para instâncias do Amazon EC2. O aplicativo tem vários componentes e deve ter tolerância a falhas e capacidade de failover automático. Qual solução de infraestrutura da AWS atenderá a esses requisitos com a MENOR latência entre os componentes?",
    options: [
      "A. Múltiplas regiões da AWS",
      "B. Múltiplas localizações de borda",
      "C. Múltiplas zonas de disponibilidade",
      "D. Caches de borda regionais",
    ],
    correctAnswer: ["C. Múltiplas zonas de disponibilidade"],
    explanation:
      "O uso de instâncias EC2 em várias zonas de disponibilidade é uma solução de infraestrutura da AWS que atende aos requisitos de migrar um aplicativo de computação de alto desempenho (HPC) para a AWS com tolerância a falhas e capacidades de failover, e com a menor latência entre os componentes.",
    multiSelect: false,
  },
  {
    question:
      "197. A elasticidade na nuvem da AWS se refere a qual dos seguintes? (Selecione DUAS.)",
    options: [
      "A. Com que rapidez uma instância do Amazon EC2 pode ser reiniciada",
      "B. A capacidade de ajustar os recursos conforme a demanda muda",
      "C. A quantidade máxima de RAM que uma instância do Amazon EC2 pode usar",
      "D. O modelo de cobrança pague pelo que usar",
      "E. Com que facilidade os recursos podem ser obtidos quando necessário",
    ],
    correctAnswer: [
      "B. A capacidade de ajustar os recursos conforme a demanda muda",
      "E. Com que facilidade os recursos podem ser obtidos quando necessário",
    ],
    explanation:
      "A elasticidade na nuvem da AWS se refere à capacidade de adquirir recursos conforme você precisa deles e liberar recursos quando você não precisa mais deles. Na nuvem, você quer fazer isso automaticamente. Isso significa que você pode ajustar os recursos conforme a demanda muda e pode obter facilmente os recursos quando eles são necessários.",
    multiSelect: true,
  },
  {
    question:
      "198. Quais serviços ou recursos da AWS permitem que os usuários criem uma conexão de rede entre duas VPCs? (Selecione DUAS.)",
    options: [
      "A. Endpoints da VPC",
      "B. Amazon Route 53",
      "C. Emparelhamento de VPC",
      "D. AWS Direct Connect",
      "E. AWS Transit Gateway",
    ],
    correctAnswer: ["C. Emparelhamento de VPC", "E. AWS Transit Gateway"],
    explanation:
      "O emparelhamento de VPC e o AWS Transit Gateway são dois serviços ou recursos da AWS que permitem que os usuários criem uma conexão de rede entre duas VPCs.",
    multiSelect: true,
  },
  {
    question:
      "199. Uma empresa tem uma biblioteca de fitas físicas para armazenar backups de dados. A biblioteca de fitas está ficando sem espaço. A empresa precisa estender a capacidade da biblioteca de fitas para a nuvem da AWS. Qual serviço da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      "A. Amazon Elastic File System (Amazon EFS)",
      "B. Amazon Elastic Block Store (Amazon EBS)",
      "C. Amazon S3",
      "D. AWS Storage Gateway",
    ],
    correctAnswer: ["D. AWS Storage Gateway"],
    explanation:
      "O AWS Storage Gateway é um serviço de armazenamento híbrido em nuvem que fornece acesso local a armazenamento em nuvem praticamente ilimitado. Você pode usar o AWS Storage Gateway para simplificar o gerenciamento de armazenamento e reduzir custos para casos de uso de armazenamento híbrido em nuvem. Um desses casos de uso é o backup baseado em fita, que permite armazenar backups de dados em fitas virtuais na nuvem da AWS.",
    multiSelect: false,
  },
  {
    question:
      "200. Qual serviço da AWS fornece criptografia em repouso para o Amazon RDS e para os volumes do Amazon Elastic Block Store (Amazon EBS)?",
    options: [
      "A. AWS Lambda",
      "B. AWS Key Management Service (AWS KMS)",
      "C. AWS WAF",
      "D. Amazon Rekognition",
    ],
    correctAnswer: ["B. AWS Key Management Service (AWS KMS)"],
    explanation:
      "O AWS Key Management Service (AWS KMS) é um serviço gerenciado que permite criptografar facilmente seus dados. O AWS KMS fornece controle centralizado das chaves de criptografia usadas para proteger seus dados. Você pode usar o AWS KMS para criptografar dados no Amazon RDS e nos volumes do Amazon EBS.",
    multiSelect: false,
  },
  {
    question:
      "201. Uma empresa está executando seu aplicativo na nuvem da AWS. A empresa deseja revisar periodicamente sua conta da AWS em busca de oportunidades de otimização de custos. Qual serviço ou ferramenta da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "A. AWS Cost Explorer",
      "B. AWS Trusted Advisor",
      "C. AWS Pricing Calculator",
      "D. AWS Budgets",
    ],
    correctAnswer: ["A. AWS Cost Explorer"],
    explanation:
      "O AWS Cost Explorer é um serviço ou ferramenta da AWS que a empresa pode usar para revisar periodicamente sua conta da AWS em busca de oportunidades de otimização de custos. O AWS Cost Explorer é uma ferramenta que permite à empresa visualizar, entender e gerenciar seus custos e uso da AWS ao longo do tempo.",
    multiSelect: false,
  },
  {
    question:
      "202. Qual serviço da AWS pode identificar quando uma instância do Amazon EC2 foi encerrada?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. AWS CloudTrail",
      "C. AWS Compute Optimizer",
      "D. Amazon EventBridge",
    ],
    correctAnswer: ["B. AWS CloudTrail"],
    explanation:
      "O AWS CloudTrail é o serviço da AWS que pode identificar quando uma instância do Amazon EC2 foi encerrada. O AWS CloudTrail é um serviço que registra chamadas de API e eventos para contas e recursos da AWS. O AWS CloudTrail pode capturar o evento TerminateInstances, que é acionado quando uma instância EC2 é encerrada por um usuário ou um serviço da AWS.",
    multiSelect: false,
  },
  {
    question:
      "203. Uma empresa está operando várias fábricas onde constrói produtos. A empresa precisa da capacidade de processar dados, armazenar dados e executar aplicativos com interdependências de sistemas locais que exigem baixa latência. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. AWS IoT Greengrass",
      "B. AWS Lambda",
      "C. AWS Outposts",
      "D. AWS Snowball Edge",
    ],
    correctAnswer: ["C. AWS Outposts"],
    explanation:
      "O AWS Outposts é um serviço que fornece infraestrutura e serviços da AWS totalmente gerenciados no local. Ele permite que os usuários executem aplicativos que exigem baixa latência e processamento de dados local, enquanto se conectam perfeitamente à nuvem da AWS para uma experiência híbrida consistente.",
    multiSelect: false,
  },
  {
    question:
      "204. Uma empresa criou um relatório de custo e uso da AWS e deseja visualizar o relatório. Qual serviço da AWS a empresa deve usar para ingerir e exibir essas informações?",
    options: [
      "A. Amazon QuickSight",
      "B. Amazon Pinpoint",
      "C. Amazon Neptune",
      "D. Amazon Kinesis",
    ],
    correctAnswer: ["A. Amazon QuickSight"],
    explanation:
      "O Amazon QuickSight é um serviço da AWS que fornece recursos de business intelligence e visualização de dados. O Amazon QuickSight permite ingerir, analisar e exibir dados de várias fontes, como relatórios de custo e uso da AWS, Amazon S3, Amazon Athena, Amazon Redshift e Amazon RDS.",
    multiSelect: false,
  },
  {
    question:
      "205. Uma empresa possui um grande número de instâncias Linux do Amazon EC2 em várias zonas de disponibilidade em uma região da AWS. Os aplicativos que são executados nas instâncias EC2 precisam acessar um conjunto comum de arquivos. Qual serviço ou dispositivo da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      "A. AWS Backup",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. AWS Snowball Edge Storage Optimized",
    ],
    correctAnswer: ["B. Amazon Elastic File System (Amazon EFS)"],
    explanation:
      "O Amazon Elastic File System (Amazon EFS) é um serviço que fornece um sistema de arquivos escalável e elástico para cargas de trabalho baseadas em Linux. Ele pode ser montado em várias instâncias do Amazon EC2 em diferentes zonas de disponibilidade dentro de uma região, permitindo que os aplicativos acessem um conjunto comum de arquivos.",
    multiSelect: false,
  },
  {
    question:
      "206. Qual serviço da AWS fornece armazenamento que pode ser montado em várias instâncias do Amazon EC2?",
    options: [
      "A. Amazon Workspaces",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. AWS Database Migration Service (AWS DMS)",
      "D. AWS Snowball Edge",
    ],
    correctAnswer: ["B. Amazon Elastic File System (Amazon EFS)"],
    explanation:
      "O Amazon EFS é um serviço totalmente gerenciado que fornece armazenamento de arquivos escalável e elástico para várias instâncias do Amazon EC2. O Amazon EFS suporta o protocolo Network File System (NFS), que permite que várias instâncias EC2 acessem o mesmo sistema de arquivos simultaneamente.",
    multiSelect: false,
  },
  {
    question:
      "207. Uma empresa deseja integrar o processamento de linguagem natural (NLP) em painéis de business intelligence (BI). A empresa quer fazer perguntas e receber respostas com visualizações relevantes. Qual serviço ou ferramenta da AWS atenderá a esses requisitos?",
    options: [
      "A. Amazon Macie",
      "B. Amazon Rekognition",
      "C. Amazon QuickSight Q",
      "D. Amazon Lex",
    ],
    correctAnswer: ["C. Amazon QuickSight Q"],
    explanation:
      "O Amazon QuickSight Q é um recurso de consulta em linguagem natural que permite aos usuários fazer perguntas sobre seus dados e receber respostas na forma de visualizações relevantes.",
    multiSelect: false,
  },
  {
    question:
      "208. Quais serviços da AWS podem ser usados para armazenar arquivos? (Selecione DUAS.)",
    options: [
      "A. Amazon S3",
      "B. AWS Lambda",
      "C. Amazon Elastic Block Store (Amazon EBS)",
      "D. Amazon SageMaker",
      "E. AWS Storage Gateway",
    ],
    correctAnswer: [
      "A. Amazon S3",
      "C. Amazon Elastic Block Store (Amazon EBS)",
    ],
    explanation:
      "O Amazon S3 e o Amazon EBS são dois serviços da AWS que podem ser usados para armazenar arquivos.",
    multiSelect: true,
  },
  {
    question:
      "209. Uma empresa deseja lançar seu aplicativo web em uma segunda região da AWS. A empresa precisa determinar quais serviços devem ser configurados regionalmente para este lançamento. Quais serviços da AWS podem ser configurados no nível da região? (Selecione DOIS.)",
    options: [
      "A. Amazon EC2",
      "B. Amazon Route 53",
      "C. Amazon CloudFront",
      "D. AWS WAF",
      "E. Amazon DynamoDB",
    ],
    correctAnswer: ["B. Amazon Route 53", "D. AWS WAF"],
    explanation:
      "O Amazon Route 53 e o AWS WAF são serviços da AWS que podem ser configurados no nível da região.",
    multiSelect: true,
  },
  {
    question:
      "210. Qual serviço da AWS fornece a capacidade de gerenciar a infraestrutura como código?",
    options: [
      "A. AWS CodePipeline",
      "B. AWS CodeDeploy",
      "C. AWS Direct Connect",
      "D. AWS CloudFormation",
    ],
    correctAnswer: ["D. AWS CloudFormation"],
    explanation:
      "O serviço da AWS que fornece a capacidade de gerenciar a infraestrutura como código é o AWS CloudFormation.",
    multiSelect: false,
  },
  {
    question:
      "211. Uma equipe de pesquisadores vai coletar dados em locais remotos ao redor do mundo. Muitos locais não têm conectividade com a internet. A equipe precisa capturar os dados no campo e transferi-los para a nuvem da AWS posteriormente. Qual serviço da AWS suportará esses requisitos?",
    options: [
      "A. AWS Outposts",
      "B. AWS Transfer Family",
      "C. AWS Snow Family",
      "D. AWS Migration Hub",
    ],
    correctAnswer: ["C. AWS Snow Family"],
    explanation:
      "A AWS Snow Family é um grupo de dispositivos que transportam dados para dentro e para fora da AWS. Os dispositivos da AWS Snow Family são dispositivos físicos que podem transferir até exabytes de dados. Um exabyte é igual a 1.000.000.000.000 megabytes. Os dispositivos da AWS Snow Family são projetados para uso em locais remotos onde a conectividade com a Internet é limitada ou indisponível.",
    multiSelect: false,
  },
  {
    question:
      "212. Uma empresa deseja definir metas de gastos da AWS e rastrear os custos em relação a essas metas. Qual ferramenta ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. AWS Cost Explorer",
      "B. AWS Budgets",
      "C. Relatório de Custo e Uso da AWS",
      "D. Planos de Economia",
    ],
    correctAnswer: ["B. AWS Budgets"],
    explanation:
      "O AWS Budgets é uma ferramenta que permite aos usuários definir metas de gastos da AWS e rastrear os custos em relação a essas metas. Os usuários podem criar orçamentos para várias dimensões, como serviço, conta vinculada, tag e muito mais. Os usuários também podem receber alertas quando os custos reais ou previstos excedem ou estão projetados para exceder o valor orçado.",
    multiSelect: false,
  },
  {
    question:
      "213. Uma empresa precisa de um servidor de arquivos totalmente gerenciado que suporte nativamente cargas de trabalho e sistemas de arquivos da Microsoft. O servidor de arquivos também deve suportar o protocolo SMB. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. Amazon Elastic File System (Amazon EFS)",
      "B. Amazon FSx for Lustre",
      "C. Amazon FSx for Windows File Server",
      "D. Amazon Elastic Block Store (Amazon EBS)",
    ],
    correctAnswer: ["C. Amazon FSx for Windows File Server"],
    explanation:
      "O Amazon FSx for Windows File Server é um servidor de arquivos totalmente gerenciado que suporta cargas de trabalho e sistemas de arquivos da Microsoft, incluindo o protocolo SMB. Ele fornece recursos como cotas de usuário, restauração de arquivos pelo usuário final e integração com o Microsoft Active Directory.",
    multiSelect: false,
  },
  {
    question:
      "214. Uma empresa precisa aplicar regras de segurança a uma sub-rede para instâncias do Amazon EC2. Qual serviço ou recurso da AWS fornece essa funcionalidade?",
    options: [
      "A. ACLs de rede",
      "B. Grupos de segurança",
      "C. AWS Certificate Manager (ACM)",
      "D. AWS Config",
    ],
    correctAnswer: ["A. ACLs de rede"],
    explanation:
      "As ACLs de rede (listas de controle de acesso à rede) são um serviço ou recurso da AWS que fornece a funcionalidade de aplicar regras de segurança a uma sub-rede para instâncias EC2. Uma sub-rede é uma partição lógica de uma rede IP dentro de uma VPC (nuvem privada virtual).",
    multiSelect: false,
  },
  {
    question:
      "215. Uma empresa está executando uma carga de trabalho na nuvem da AWS. Qual prática recomendada da AWS garante a arquitetura MAIS econômica para a carga de trabalho?",
    options: [
      "A. Acoplamento fraco",
      "B. Dimensionamento correto",
      "C. Cache",
      "D. Redundância",
    ],
    correctAnswer: ["B. Dimensionamento correto"],
    explanation:
      "A prática recomendada da AWS que garante a arquitetura mais econômica para a carga de trabalho é o dimensionamento correto. O dimensionamento correto significa selecionar o tipo de instância ou configuração de recursos mais apropriada que corresponda às necessidades da carga de trabalho.",
    multiSelect: false,
  },
  {
    question:
      "216. Qual serviço da AWS pode fornecer uma conexão de rede dedicada com baixa latência consistente do ambiente local para a nuvem da AWS?",
    options: [
      "A. Amazon VPC",
      "B. Amazon Kinesis Data Streams",
      "C. AWS Direct Connect",
      "D. Amazon OpenSearch Service",
    ],
    correctAnswer: ["C. AWS Direct Connect"],
    explanation:
      "O AWS Direct Connect é um serviço que fornece uma conexão de rede dedicada do ambiente local para a nuvem da AWS. Ele pode reduzir os custos de rede, aumentar a taxa de transferência da largura de banda e fornecer uma experiência de rede mais consistente do que as conexões baseadas na Internet.",
    multiSelect: false,
  },
  {
    question:
      "217. Qual modelo de precificação de instâncias do Amazon EC2 pode fornecer descontos de até 90%?",
    options: [
      "A. Instâncias Reservadas",
      "B. Sob Demanda",
      "C. Hosts Dedicados",
      "D. Instâncias Spot",
    ],
    correctAnswer: ["D. Instâncias Spot"],
    explanation:
      "As Instâncias Spot são instâncias do Amazon EC2 que estão disponíveis a um preço com desconto em comparação com o preço Sob Demanda. As Instâncias Spot usam a capacidade ociosa do EC2 que não está sendo usada por outros clientes, e o preço flutua com base na oferta e na demanda.",
    multiSelect: false,
  },
  {
    question:
      "218. Qual serviço da AWS permite que os usuários descubram e protejam dados confidenciais armazenados em buckets do Amazon S3?",
    options: [
      "A. Amazon Macie",
      "B. Amazon Detective",
      "C. Amazon GuardDuty",
      "D. AWS IAM Access Analyzer",
    ],
    correctAnswer: ["A. Amazon Macie"],
    explanation:
      "O Amazon Macie é um serviço de segurança e privacidade de dados oferecido pela AWS que usa aprendizado de máquina e correspondência de padrões para descobrir os dados confidenciais armazenados no Amazon S3.",
    multiSelect: false,
  },
  {
    question:
      "219. Uma empresa precisa armazenar dados pouco usados para arquivamento de dados e backups de longo prazo. Uma empresa precisa de um relatório histórico sobre como suas instâncias do Amazon EC2 foram modificadas no mês passado. Qual serviço da AWS pode ser usado para atender a esse requisito?",
    options: [
      "A. AWS Service Catalog",
      "B. AWS Config",
      "C. Amazon CloudWatch",
      "D. AWS Artifact",
    ],
    correctAnswer: ["B. AWS Config"],
    explanation:
      "O AWS Config é um serviço que permite avaliar, auditar e avaliar as configurações de seus recursos da AWS. O AWS Config monitora e registra continuamente as configurações de seus recursos da AWS e permite automatizar a avaliação das configurações registradas em relação às configurações desejadas.",
    multiSelect: false,
  },
  {
    question:
      "220. De acordo com o modelo de responsabilidade compartilhada da AWS, qual tarefa é responsabilidade do cliente?",
    options: [
      "A. Manter a infraestrutura necessária para executar o AWS Lambda",
      "B. Atualizar o sistema operacional das instâncias do Amazon DynamoDB",
      "C. Manter a infraestrutura do Amazon S3",
      "D. Atualizar o sistema operacional convidado nas instâncias do Amazon EC2",
    ],
    correctAnswer: [
      "D. Atualizar o sistema operacional convidado nas instâncias do Amazon EC2",
    ],
    explanation:
      "O modelo de responsabilidade compartilhada da AWS descreve a divisão de responsabilidades entre a AWS e o cliente pela segurança e conformidade. A AWS é responsável pela segurança da nuvem, que inclui o hardware, software, rede e instalações que executam os serviços da AWS. O cliente é responsável pela segurança na nuvem, que inclui os dados do cliente, aplicativos, sistemas operacionais e configurações de rede e firewall.",
    multiSelect: false,
  },
  {
    question:
      "221. Uma empresa deseja integrar seu site de compras online com credenciais de login de mídia social. Qual serviço da AWS a empresa pode usar para fazer essa integração?",
    options: [
      "A. AWS Directory Service",
      "B. AWS Identity and Access Management (IAM)",
      "C. Amazon Cognito",
      "D. AWS IAM Identity Center (AWS Single Sign-On)",
    ],
    correctAnswer: ["C. Amazon Cognito"],
    explanation:
      "O Amazon Cognito é um serviço que permite adicionar recursos de inscrição e login de usuários aos seus aplicativos web e móveis. O Amazon Cognito também suporta federação de identidade social e empresarial, o que significa que você pode permitir que seus usuários façam login com suas credenciais existentes de provedores de identidade como Google, Facebook, Apple e Amazon.",
    multiSelect: false,
  },
  {
    question:
      "222. Qual serviço ou recurso da AWS está associado a uma sub-rede em uma VPC e é usado para controlar o tráfego de entrada e saída?",
    options: [
      "A. Amazon Inspector",
      "B. ACLs de rede",
      "C. AWS Shield",
      "D. VPC Flow Logs",
    ],
    correctAnswer: ["B. ACLs de rede"],
    explanation:
      "As ACLs de rede (listas de controle de acesso à rede) são uma camada opcional de segurança para sua VPC que atua como um firewall para controlar o tráfego de entrada e saída de uma ou mais sub-redes.",
    multiSelect: false,
  },
  {
    question:
      "223. Qual vantagem da computação em nuvem uma empresa está aplicando quando usa regiões da AWS para aumentar a disponibilidade do aplicativo para usuários em diferentes países?",
    options: [
      "A. Precificação pague pelo uso",
      "B. Previsão de capacidade",
      "C. Economias de escala",
      "D. Alcance global",
    ],
    correctAnswer: ["D. Alcance global"],
    explanation:
      "O alcance global é uma vantagem da computação em nuvem que uma empresa pode aplicar quando usa regiões da AWS para aumentar a disponibilidade do aplicativo para usuários em diferentes países. O alcance global se refere à capacidade de implantar aplicativos e serviços em vários locais geográficos ao redor do mundo e atender aos clientes com baixa latência e alto desempenho.",
    multiSelect: false,
  },
  {
    question:
      "224. Quais tarefas são responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DUAS.)",
    options: [
      "A. Aplicar patches no sistema operacional do Amazon RDS.",
      "B. Atualizar o firmware da infraestrutura de rede.",
      "C. Gerenciar a criptografia de dados.",
      "D. Manter o controle de acesso físico em uma região da AWS.",
      "E. Conceder acesso de privilégio mínimo aos usuários do IAM.",
    ],
    correctAnswer: [
      "C. Gerenciar a criptografia de dados.",
      "E. Conceder acesso de privilégio mínimo aos usuários do IAM.",
    ],
    explanation:
      "De acordo com o modelo de responsabilidade compartilhada da AWS, o cliente é responsável pela segurança na nuvem, que inclui as tarefas de gerenciar a criptografia de dados e conceder acesso de privilégio mínimo aos usuários do IAM.",
    multiSelect: true,
  },
  {
    question:
      "225. Uma empresa está armazenando dados confidenciais de clientes em um bucket do Amazon S3. A empresa deseja proteger os dados contra exclusão ou sobrescrita acidental. Qual recurso do S3 a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. Regras de ciclo de vida do S3",
      "B. Versionamento do S3",
      "C. Políticas de bucket do S3",
      "D. Criptografia do lado do servidor do S3",
    ],
    correctAnswer: ["B. Versionamento do S3"],
    explanation:
      "O versionamento do S3 é um recurso que permite manter várias versões de um objeto no mesmo bucket. Você pode usar o versionamento do S3 para proteger seus dados contra exclusão ou sobrescrita acidental, habilitando-o em um bucket ou em um objeto específico.",
    multiSelect: false,
  },
  {
    question:
      "226. Um engenheiro de software deseja lançar uma máquina virtual (VM) e um banco de dados MySQL na AWS. Qual serviço da AWS atenderá a esses requisitos com o MENOR esforço operacional?",
    options: [
      "A. Amazon Elastic Container Service (Amazon ECS)",
      "B. AWS Elastic Beanstalk",
      "C. Amazon Lightsail",
      "D. Amazon EC2",
    ],
    correctAnswer: ["B. AWS Elastic Beanstalk"],
    explanation:
      "O AWS Elastic Beanstalk é um serviço que permite implantar e gerenciar aplicativos na nuvem da AWS sem se preocupar com a infraestrutura que executa esses aplicativos. Você simplesmente faz o upload do seu aplicativo e o Elastic Beanstalk lida automaticamente com os detalhes de provisionamento de capacidade, balanceamento de carga, escalonamento e monitoramento da integridade do aplicativo.",
    multiSelect: false,
  },
  {
    question:
      "227. Uma empresa deseja implantar aplicativos na nuvem da AWS o mais rápido possível. A empresa também precisa minimizar a complexidade relacionada ao gerenciamento de recursos da AWS. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. AWS Config",
      "B. AWS Elastic Beanstalk",
      "C. Amazon EC2",
      "D. Amazon Personalize",
    ],
    correctAnswer: ["B. AWS Elastic Beanstalk"],
    explanation:
      "O AWS Elastic Beanstalk é o serviço da AWS que permite que os clientes implantem aplicativos na nuvem da AWS o mais rápido possível. O AWS Elastic Beanstalk lida automaticamente com a implantação, desde o provisionamento de capacidade, balanceamento de carga e auto-scaling até o monitoramento da integridade do aplicativo.",
    multiSelect: false,
  },
  {
    question:
      "228. Uma empresa está planejando migrar para a nuvem da AWS e deseja se tornar mais responsiva às consultas e feedback dos clientes. A empresa deseja se concentrar na transformação organizacional. Uma empresa deseja dar aos seus clientes a capacidade de visualizar dados específicos que estão hospedados em buckets do Amazon S3. A empresa deseja manter o controle sobre os conjuntos de dados completos que a empresa compartilha com os clientes. Qual recurso do S3 atenderá a esses requisitos?",
    options: [
      "A. S3 Storage Lens",
      "B. S3 Cross-Region Replication (CRR)",
      "C. S3 Versioning",
      "D. S3 Access Points",
    ],
    correctAnswer: ["D. S3 Access Points"],
    explanation:
      "Os S3 Access Points são um recurso do Amazon S3 que permite gerenciar facilmente o acesso a dados específicos hospedados em buckets do S3. Os S3 Access Points são nomes de host exclusivos que os clientes podem usar para acessar dados em buckets do S3. Você pode criar vários pontos de acesso para um único bucket, cada um com seu próprio nome e permissões.",
    multiSelect: false,
  },
  {
    question:
      "229. Uma empresa está executando seu aplicativo na nuvem da AWS e deseja se proteger contra um ataque DDoS. A equipe de segurança da empresa deseja visibilidade quase em tempo real dos ataques DDoS. Qual serviço ou filtro de tráfego da AWS atenderá a esses requisitos com os recursos MAIS avançados para proteção contra DDoS?",
    options: [
      "A. AWS Shield Advanced",
      "B. AWS Shield",
      "C. Amazon GuardDuty",
      "D. ACLs de rede",
    ],
    correctAnswer: ["A. AWS Shield Advanced"],
    explanation:
      "O AWS Shield Advanced é um serviço gerenciado de proteção contra Negação de Serviço Distribuída (DDoS) que protege aplicativos em execução na AWS. O AWS Shield Advanced fornece acesso 24x7 à Equipe de Resposta a DDoS (DRT) da AWS e proteção contra ataques DDoS de qualquer tamanho ou duração.",
    multiSelect: false,
  },
  {
    question: "230. Qual é um benefício da computação sem servidor da AWS?",
    options: [
      "A. Implantação e gerenciamento de aplicativos não são necessários",
      "B. A segurança do aplicativo será totalmente gerenciada pela AWS",
      "C. Monitoramento e registro em log não são necessários",
      "D. O gerenciamento da infraestrutura é transferido para a AWS",
    ],
    correctAnswer: [
      "D. O gerenciamento da infraestrutura é transferido para a AWS",
    ],
    explanation:
      "A computação sem servidor da AWS é uma maneira de criar e executar aplicativos sem pensar em servidores. A AWS gerencia a infraestrutura para você, então você não precisa provisionar, escalar, aplicar patches ou monitorar servidores. Você só paga pelo tempo de computação que consome e pode se concentrar na lógica do seu aplicativo em vez de gerenciar servidores.",
    multiSelect: false,
  },
  {
    question:
      "231. Uma empresa precisa contratar consultores terceirizados para ajudar a manter e suportar seu ambiente AWS e as necessidades de negócios da empresa. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    options: [
      "A. AWS Support",
      "B. AWS Organizations",
      "C. AWS Service Catalog",
      "D. AWS Partner Network (APN)",
    ],
    correctAnswer: ["D. AWS Partner Network (APN)"],
    explanation:
      "O AWS Partner Network (APN) é uma comunidade global de parceiros de consultoria e tecnologia que oferecem uma ampla gama de serviços e soluções para clientes da AWS. Os parceiros da APN podem ajudar os clientes a projetar, arquitetar, construir, migrar e gerenciar suas cargas de trabalho e aplicativos na AWS.",
    multiSelect: false,
  },
  {
    question:
      "232. Uma empresa deseja garantir que todas as suas instâncias do Amazon EC2 tenham patches de sistema operacional em conformidade. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "A. AWS Compute Optimizer",
      "B. AWS Elastic Beanstalk",
      "C. AWS AppSync",
      "D. AWS Systems Manager",
    ],
    correctAnswer: ["D. AWS Systems Manager"],
    explanation:
      "O AWS Systems Manager oferece visibilidade e controle sobre sua infraestrutura na AWS. O Systems Manager fornece uma interface de usuário unificada para que você possa visualizar dados operacionais de vários serviços da AWS e permite automatizar tarefas operacionais em seus recursos da AWS.",
    multiSelect: false,
  },
  {
    question:
      "233. Uma empresa de comércio eletrônico migrou sua infraestrutura de TI de um data center local para a nuvem da AWS. Qual custo é responsabilidade direta da empresa?",
    options: [
      "A. Custo de licenças de software de aplicativos",
      "B. Custo da infraestrutura de hardware na AWS",
      "C. Custo de energia para os servidores da AWS",
      "D. Custo de segurança física para o data center da AWS",
    ],
    correctAnswer: ["A. Custo de licenças de software de aplicativos"],
    explanation:
      "O custo de licenças de software de aplicativos é a responsabilidade direta da empresa quando ela migra sua infraestrutura de TI de um data center local para a nuvem da AWS. Licenças de software de aplicativos são os acordos que concedem aos usuários o direito de usar produtos de software específicos, como sistemas operacionais, bancos de dados ou aplicativos.",
    multiSelect: false,
  },
  {
    question:
      "234. Uma empresa que possui várias unidades de negócios deseja gerenciar e governar centralmente seus ambientes de nuvem da AWS. A empresa deseja automatizar a criação de contas da AWS, aplicar políticas de controle de serviços (SCPs) e simplificar os processos de faturamento. Qual serviço ou ferramenta da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "A. AWS Organizations",
      "B. Cost Explorer",
      "C. AWS Budgets",
      "D. AWS Trusted Advisor",
    ],
    correctAnswer: ["A. AWS Organizations"],
    explanation:
      "O AWS Organizations é um serviço da AWS que permite gerenciar e governar centralmente seus ambientes de nuvem da AWS em várias unidades de negócios. O AWS Organizations permite criar uma organização que consiste em contas da AWS que você cria ou convida para ingressar.",
    multiSelect: false,
  },
  {
    question:
      "235. Uma empresa usa o AWS Organizations. A empresa deseja aplicar as melhores práticas de segurança do AWS Well-Architected Framework a todas as suas contas da AWS. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "A. Amazon Macie",
      "B. Amazon Detective",
      "C. AWS Control Tower",
      "D. AWS Secrets Manager",
    ],
    correctAnswer: ["C. AWS Control Tower"],
    explanation:
      "O AWS Control Tower é a maneira mais fácil de configurar e governar um ambiente seguro e de várias contas da AWS com base nas melhores práticas estabelecidas pela experiência da AWS trabalhando com milhares de empresas conforme elas migram para a nuvem. Com o AWS Control Tower, os construtores podem provisionar novas contas da AWS com alguns cliques, enquanto você tem a tranquilidade de saber que suas contas estão em conformidade com as políticas da sua organização.",
    multiSelect: false,
  },
  {
    question:
      "236. Uma empresa incentiva suas equipes a testarem regularmente cenários de falhas e a validarem sua compreensão sobre o impacto de falhas potenciais. Qual pilar do AWS Well-Architected Framework essa filosofia representa?",
    options: [
      "A. Excelência operacional",
      "B. Otimização de custos",
      "C. Eficiência de desempenho",
      "D. Segurança",
    ],
    correctAnswer: ["A. Excelência operacional"],
    explanation:
      "A filosofia de testar cenários de falha regularmente e validar a compreensão sobre o impacto de falhas potenciais representa o pilar de Excelência Operacional do AWS Well-Architected Framework.",
    multiSelect: false,
  },
  {
    question:
      "237. Uma empresa deseja migrar suas cargas de trabalho locais para a AWS Cloud. A empresa quer separar as cargas de trabalho para atribuição de custos a diferentes departamentos. Quais serviços ou recursos da AWS atendem a esses requisitos? (Selecione DOIS.)",
    options: [
      "A. Grupos de colocação",
      "B. Faturamento consolidado",
      "C. Localizações de borda",
      "D. AWS Config",
      "E. Múltiplas contas AWS",
    ],
    correctAnswer: ["B. Faturamento consolidado", "E. Múltiplas contas AWS"],
    explanation:
      "O faturamento consolidado e o uso de múltiplas contas AWS permitem que uma empresa separe as cargas de trabalho e atribua custos a diferentes departamentos de maneira eficiente.",
    multiSelect: true,
  },
  {
    question:
      "238. Uma empresa deseja altos níveis de detecção e mitigação em quase tempo real (NRT) contra ataques distribuídos de negação de serviço (DDoS) em aplicações que rodam na AWS. Qual serviço da AWS a empresa deve usar?",
    options: [
      "A. Amazon GuardDuty",
      "B. Amazon Inspector",
      "C. AWS Shield Advanced",
      "D. Amazon Macie",
    ],
    correctAnswer: ["C. AWS Shield Advanced"],
    explanation:
      "O AWS Shield Advanced oferece altos níveis de detecção e mitigação em quase tempo real (NRT) contra ataques distribuídos de negação de serviço (DDoS) em aplicações que rodam na AWS.",
    multiSelect: false,
  },
  {
    question:
      "239. Quais dos seguintes serviços podem ser usados para bloquear o tráfego de rede para uma instância? (Selecione DOIS.)",
    options: [
      "A. Grupos de segurança",
      "B. Registros de fluxo do Amazon VPC",
      "C. ACLs de rede",
      "D. Amazon CloudWatch",
      "E. AWS CloudTrail",
    ],
    correctAnswer: ["A. Grupos de segurança", "C. ACLs de rede"],
    explanation:
      "Grupos de segurança e ACLs de rede são dois serviços da AWS que podem ser usados para bloquear o tráfego de rede para uma instância.",
    multiSelect: true,
  },
  {
    question:
      "240. Uma empresa está migrando suas aplicações de um data center local para a AWS Cloud. A empresa deseja garantir que as aplicações sejam atribuídas apenas às permissões mínimas necessárias para realizar todas as operações. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "A. AWS Identity and Access Management (IAM)",
      "B. Amazon CloudWatch",
      "C. Amazon Macie",
      "D. Amazon GuardDuty",
    ],
    correctAnswer: ["A. AWS Identity and Access Management (IAM)"],
    explanation:
      "O AWS Identity and Access Management (IAM) permite que a empresa controle de forma segura o acesso aos serviços e recursos da AWS, garantindo que as aplicações sejam atribuídas apenas às permissões mínimas necessárias.",
    multiSelect: false,
  },
  {
    question:
      "241. Qual é o plano de suporte da AWS menos caro que fornece o conjunto completo de verificações de melhores práticas do AWS Trusted Advisor para otimização de custos?",
    options: [
      "A. Suporte Empresarial da AWS",
      "B. Suporte de Negócios da AWS",
      "C. Suporte para Desenvolvedores da AWS",
      "D. Suporte Básico da AWS",
    ],
    correctAnswer: ["B. Suporte de Negócios da AWS"],
    explanation:
      "O plano de Suporte de Negócios da AWS é o menos caro que fornece o conjunto completo de verificações de melhores práticas do AWS Trusted Advisor, ajudando na otimização de custos.",
    multiSelect: false,
  },
  {
    question:
      "242. Um desenvolvedor foi contratado por uma grande empresa e precisa de credenciais da AWS. Quais são as melhores práticas de segurança que devem ser seguidas? (Selecione DUAS.)",
    options: [
      "A. Conceder ao desenvolvedor acesso apenas aos recursos da AWS necessários para realizar o trabalho.",
      "B. Compartilhar as credenciais do usuário raiz da conta AWS com o desenvolvedor.",
      "C. Adicionar o desenvolvedor ao grupo de administradores no AWS IAM.",
      "D. Configurar uma política de senha que garanta que a senha do desenvolvedor não possa ser alterada.",
      "E. Garantir que a política de senha da conta exija um comprimento mínimo.",
    ],
    correctAnswer: [
      "A. Conceder ao desenvolvedor acesso apenas aos recursos da AWS necessários para realizar o trabalho.",
      "E. Garantir que a política de senha da conta exija um comprimento mínimo.",
    ],
    explanation:
      "É uma prática de segurança seguir o princípio do privilégio mínimo, concedendo acesso apenas ao necessário, e garantir políticas de senha fortes.",
    multiSelect: true,
  },
  {
    question:
      "243. Uma empresa quer monitorar grupos de segurança mal configurados que permitem acesso irrestrito a portas específicas. Qual serviço da AWS atende a esse requisito?",
    options: [
      "A. AWS Trusted Advisor",
      "B. Amazon CloudWatch",
      "C. Amazon GuardDuty",
      "D. AWS Health Dashboard",
    ],
    correctAnswer: ["A. AWS Trusted Advisor"],
    explanation:
      "O AWS Trusted Advisor fornece recomendações para ajudar você a seguir as práticas recomendadas da AWS, incluindo a monitoração de grupos de segurança mal configurados.",
    multiSelect: false,
  },
  {
    question:
      "244. Uma empresa planeja migrar para a nuvem AWS. A empresa está reunindo informações sobre sua infraestrutura local e requer informações como nome do host, endereço IP e endereço MAC. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "A. AWS DataSync",
      "B. AWS Application Migration Service",
      "C. AWS Application Discovery Service",
      "D. AWS Database Migration Service (AWS DMS)",
    ],
    correctAnswer: ["C. AWS Application Discovery Service"],
    explanation:
      "O AWS Application Discovery Service ajuda a planejar sua migração para a nuvem AWS coletando dados sobre sua infraestrutura local.",
    multiSelect: false,
  },
  {
    question:
      "245. Uma empresa está utilizando uma plataforma de dados central para gerenciar vários tipos de dados para seus clientes. A empresa quer usar serviços da AWS para descobrir, transformar e visualizar os dados. Quais combinações de serviços da AWS a empresa deve usar para atender a esses requisitos? (Selecione DOIS.)",
    options: [
      "A. AWS Glue",
      "B. Amazon Elastic File System (Amazon EFS)",
      "C. Amazon Redshift",
      "D. Amazon QuickSight",
      "E. Amazon Quantum Ledger Database (Amazon QLDB)",
    ],
    correctAnswer: ["A. AWS Glue", "C. Amazon Redshift"],
    explanation:
      "O AWS Glue pode ser usado para a descoberta e transformação de dados, enquanto o Amazon Redshift pode ser usado para análise e visualização de dados com o Amazon QuickSight.",
    multiSelect: true,
  },
  {
    question:
      "246. Uma empresa deseja monitorar e analisar continuamente seus registros de segurança de várias fontes da AWS. Qual serviço da AWS ela deve usar?",
    options: [
      "A. AWS CloudTrail",
      "B. AWS Config",
      "C. Amazon CloudWatch Logs",
      "D. Amazon GuardDuty",
    ],
    correctAnswer: ["D. Amazon GuardDuty"],
    explanation:
      "Amazon GuardDuty é um serviço que oferece detecção de ameaças, permitindo monitorar e analisar continuamente registros de segurança de várias fontes da AWS.",
    multiSelect: false,
  },
  {
    question:
      "247. Uma empresa precisa de um armazenamento durável para conteúdo estático e uma infraestrutura de armazenamento de dados infinitamente escalável com o menor custo. Qual serviço da AWS a empresa deve escolher?",
    options: [
      "A. Amazon Elastic Block Store (Amazon EBS)",
      "B. Amazon S3",
      "C. AWS Storage Gateway",
      "D. Amazon Elastic File System (Amazon EFS)",
    ],
    correctAnswer: ["B. Amazon S3"],
    explanation:
      "Amazon S3 fornece um armazenamento durável para conteúdo estático e uma infraestrutura de armazenamento de dados que é infinitamente escalável, sendo a opção de menor custo para tais necessidades.",
    multiSelect: false,
  },
  {
    question:
      "248. Uma empresa quer assegurar que suas instâncias Amazon EC2 tenham alta disponibilidade e tolerância a falhas. Qual prática a empresa deve adotar?",
    options: [
      "A. Distribuir instâncias entre múltiplas zonas de disponibilidade",
      "B. Utilizar instâncias Spot para todas as aplicações críticas",
      "C. Implementar instâncias EC2 em uma única zona de disponibilidade",
      "D. Selecionar um tipo de instância EC2 com o menor custo possível",
    ],
    correctAnswer: [
      "A. Distribuir instâncias entre múltiplas zonas de disponibilidade",
    ],
    explanation:
      "Distribuir instâncias entre múltiplas zonas de disponibilidade aumenta a alta disponibilidade e a tolerância a falhas das aplicações na AWS.",
    multiSelect: false,
  },
  {
    question:
      "249. Uma empresa quer automatizar o provisionamento, a configuração e o gerenciamento de seus recursos da AWS. Qual serviço da AWS ela deve usar?",
    options: [
      "A. AWS CodeDeploy",
      "B. AWS Config",
      "C. AWS CloudFormation",
      "D. Amazon CloudWatch",
    ],
    correctAnswer: ["C. AWS CloudFormation"],
    explanation:
      "AWS CloudFormation permite que a empresa automatize o provisionamento, a configuração e o gerenciamento de recursos da AWS, utilizando modelos para definir os recursos.",
    multiSelect: false,
  },
  {
    question:
      "250. Qual é a responsabilidade do cliente no modelo de responsabilidade compartilhada da AWS ao usar o Amazon RDS?",
    options: [
      "A. Instalar patches no sistema operacional do banco de dados",
      "B. Gerenciar a instância física subjacente ao banco de dados",
      "C. Aplicar patches no software do banco de dados",
      "D. Controlar o acesso aos dados no banco de dados",
    ],
    correctAnswer: ["D. Controlar o acesso aos dados no banco de dados"],
    explanation:
      "No modelo de responsabilidade compartilhada da AWS, enquanto a AWS gerencia a infraestrutura e o sistema operacional, o cliente é responsável por controlar o acesso aos dados armazenados no banco de dados.",
    multiSelect: false,
  },
];

export function getRandomQuestionURL(questionId?: number) {
  const index = Math.floor(Math.random() * questions.length);

  if (!questionId) {
    return `/${index}`;
  }

  if (index === questionId) {
    return getRandomQuestionURL(questionId);
  }

  return `/${index}`;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string[];
  explanation: string;
  multiSelect: boolean;
}
