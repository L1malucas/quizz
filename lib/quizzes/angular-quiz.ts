import { Quiz } from "@/utils/interfaces";

export const angularQuiz: Quiz = {
  id: 10,
  slug: "angular",
  title: "Angular",
  description: "Teste seus conhecimentos sobre Angular, abrangendo conceitos básicos, intermediários e avançados.",
  timeLimit: 15,
  questions: [
    {
      id: 1,
      question: "O que é Angular?",
      options: [
        "Um framework JavaScript para construção de aplicações web",
        "Uma biblioteca para manipulação de DOM",
        "Uma linguagem de programação",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 2,
      question: "Qual é a principal linguagem usada no desenvolvimento Angular?",
      options: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 3,
      question: "O que é o Angular CLI?",
      options: [
        "Uma ferramenta de linha de comando para criar e gerenciar projetos Angular",
        "Uma biblioteca de componentes",
        "Um gerenciador de estado",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 4,
      question: "Como criar um novo projeto Angular usando o CLI?",
      options: [
        "ng new nome-do-projeto",
        "ng create nome-do-projeto",
        "ng generate nome-do-projeto",
        "ng build nome-do-projeto"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 5,
      question: "O que é um 'componente' no Angular?",
      options: [
        "Uma classe TypeScript com um template HTML associado",
        "Um arquivo CSS",
        "Um endpoint de API",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 6,
      question: "Qual é o decorador usado para definir um componente em Angular?",
      options: [
        "@Component",
        "@Module",
        "@Service",
        "@Directive"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 7,
      question: "O que é 'data binding' no Angular?",
      options: [
        "Sincronização de dados entre o modelo e a view",
        "Gerenciamento de rotas",
        "Validação de formulários",
        "Teste de componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 8,
      question: "Qual é o tipo de data binding que atualiza a view quando o modelo muda?",
      options: [
        "One-way binding (property binding)",
        "Two-way binding",
        "Event binding",
        "Interpolation"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 9,
      question: "Como criar um componente usando o Angular CLI?",
      options: [
        "ng generate component nome-do-componente",
        "ng create component nome-do-componente",
        "ng build component nome-do-componente",
        "ng test component nome-do-componente"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 10,
      question: "O que é um 'NgModule' no Angular?",
      options: [
        "Um decorador para organizar e configurar módulos",
        "Um componente de UI",
        "Um serviço de backend",
        "Um tipo de teste"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 11,
      question: "Qual é o módulo raiz padrão em uma aplicação Angular?",
      options: [
        "AppModule",
        "RootModule",
        "MainModule",
        "CoreModule"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 12,
      question: "O que é o 'bootstrap' em um NgModule?",
      options: [
        "O componente inicial que é carregado na inicialização",
        "Um serviço de backend",
        "Um tipo de teste",
        "Um arquivo CSS"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 13,
      question: "Como exibir uma variável no template usando interpolação?",
      options: [
        "{{ variavel }}",
        "[variavel]",
        "(variavel)",
        "*variavel"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 14,
      question: "O que é uma 'diretiva' no Angular?",
      options: [
        "Um comportamento ou manipulação aplicada a elementos do DOM",
        "Um componente de UI",
        "Um serviço de backend",
        "Um tipo de teste"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 15,
      question: "Qual é a diretiva usada para repetir elementos em uma lista?",
      options: [
        "*ngFor",
        "*ngIf",
        "*ngSwitch",
        "*ngModel"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 16,
      question: "Como condicionalmente exibir um elemento no template?",
      options: [
        "Usando *ngIf",
        "Usando *ngFor",
        "Usando *ngSwitch",
        "Usando *ngModel"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 17,
      question: "O que é um 'pipe' no Angular?",
      options: [
        "Uma maneira de transformar dados no template",
        "Um gerenciador de estado",
        "Um mecanismo de roteamento",
        "Uma ferramenta de teste"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 18,
      question: "Qual é o pipe usado para formatar datas no Angular?",
      options: [
        "date",
        "currency",
        "uppercase",
        "json"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 19,
      question: "Como importar o 'FormsModule' em um NgModule?",
      options: [
        "imports: [FormsModule]",
        "declarations: [FormsModule]",
        "providers: [FormsModule]",
        "exports: [FormsModule]"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 20,
      question: "O que é o 'ng serve' no Angular CLI?",
      options: [
        "Um comando para iniciar um servidor de desenvolvimento",
        "Um comando para gerar componentes",
        "Um comando para testar a aplicação",
        "Um comando para construir a aplicação"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Intermediate Questions (20)
    {
      id: 21,
      question: "O que é 'dependency injection' no Angular?",
      options: [
        "Um padrão para fornecer dependências a classes",
        "Um mecanismo de roteamento",
        "Uma ferramenta de teste",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 22,
      question: "Como criar um serviço no Angular usando o CLI?",
      options: [
        "ng generate service nome-do-servico",
        "ng create service nome-do-servico",
        "ng build service nome-do-servico",
        "ng test service nome-do-servico"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 23,
      question: "O que é o 'HttpClient' no Angular?",
      options: [
        "Um serviço para fazer requisições HTTP",
        "Um componente de UI",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 24,
      question: "Como importar o 'HttpClientModule' em um NgModule?",
      options: [
        "imports: [HttpClientModule]",
        "declarations: [HttpClientModule]",
        "providers: [HttpClientModule]",
        "exports: [HttpClientModule]"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 25,
      question: "O que é 'RxJS' no contexto do Angular?",
      options: [
        "Uma biblioteca para programação reativa",
        "Uma ferramenta de roteamento",
        "Uma biblioteca de testes",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 26,
      question: "O que é um 'Observable' no RxJS?",
      options: [
        "Um objeto que emite dados ao longo do tempo",
        "Um componente de UI",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 27,
      question: "Como implementar roteamento no Angular?",
      options: [
        "Usando o módulo 'RouterModule'",
        "Usando apenas componentes",
        "Usando eventos globais",
        "Usando apenas serviços"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 28,
      question: "Como definir uma rota no Angular?",
      options: [
        "Usando o array 'routes' com objetos { path, component }",
        "Usando apenas templates",
        "Usando apenas serviços",
        "Usando apenas pipes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 29,
      question: "O que é o 'RouterOutlet' no Angular?",
      options: [
        "Um componente que exibe o conteúdo da rota atual",
        "Um serviço de roteamento",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 30,
      question: "Como passar parâmetros em uma rota no Angular?",
      options: [
        "Usando ':param' no caminho da rota",
        "Usando apenas serviços",
        "Usando apenas pipes",
        "Usando apenas templates"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 31,
      question: "O que é 'ReactiveFormsModule' no Angular?",
      options: [
        "Um módulo para formulários reativos",
        "Um módulo para roteamento",
        "Um módulo para testes",
        "Um módulo para animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 32,
      question: "Como criar um formulário reativo no Angular?",
      options: [
        "Usando FormGroup e FormControl",
        "Usando apenas templates",
        "Usando apenas serviços",
        "Usando apenas pipes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 33,
      question: "O que é um 'guard' no roteamento do Angular?",
      options: [
        "Um serviço que controla o acesso a rotas",
        "Um componente de UI",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 34,
      question: "Qual é o propósito do 'CanActivate' guard?",
      options: [
        "Controlar se uma rota pode ser ativada",
        "Controlar se uma rota pode ser desativada",
        "Controlar se um componente pode ser criado",
        "Controlar se um serviço pode ser injetado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 35,
      question: "O que é 'lazy loading' no Angular?",
      options: [
        "Carregar módulos sob demanda para melhorar a performance",
        "Carregar todos os módulos de uma vez",
        "Usar mais serviços",
        "Evitar o uso de pipes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 36,
      question: "Como implementar 'lazy loading' no Angular?",
      options: [
        "Usando loadChildren no roteamento",
        "Usando apenas templates",
        "Usando apenas serviços",
        "Usando apenas pipes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 37,
      question: "O que é um 'resolver' no roteamento do Angular?",
      options: [
        "Um serviço que pré-carrega dados antes de ativar uma rota",
        "Um componente de UI",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 38,
      question: "Como testar componentes no Angular?",
      options: [
        "Usando Jasmine e Karma",
        "Usando apenas console.log",
        "Usando ferramentas de build",
        "Usando apenas TypeScript"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 39,
      question: "O que é o 'TestBed' no Angular?",
      options: [
        "Uma ferramenta para configurar e testar componentes",
        "Um componente de UI",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 40,
      question: "Como criar um pipe personalizado no Angular?",
      options: [
        "Usando o decorador @Pipe e implementando PipeTransform",
        "Usando apenas templates",
        "Usando apenas serviços",
        "Usando apenas componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Advanced Questions (10)
    {
      id: 41,
      question: "O que é 'Angular Universal'?",
      options: [
        "Uma tecnologia para renderização no lado do servidor",
        "Uma biblioteca de componentes",
        "Um gerenciador de estado",
        "Uma ferramenta de teste"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 42,
      question: "Como otimizar a performance de uma aplicação Angular?",
      options: [
        "Usando lazy loading, AOT e change detection otimizada",
        "Usando mais serviços",
        "Usando apenas templates",
        "Usando apenas pipes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 43,
      question: "O que é 'AOT' (Ahead-of-Time) no Angular?",
      options: [
        "Compilação do código Angular antes da execução no navegador",
        "Compilação do código durante a execução",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 44,
      question: "O que é 'change detection' no Angular?",
      options: [
        "O mecanismo que detecta mudanças no modelo e atualiza a view",
        "O mecanismo que gerencia rotas",
        "O mecanismo que valida formulários",
        "O mecanismo que testa componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 45,
      question: "Como otimizar a 'change detection' no Angular?",
      options: [
        "Usando OnPush strategy e immutable data",
        "Usando mais serviços",
        "Usando apenas templates",
        "Usando apenas pipes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 46,
      question: "O que é 'NgZone' no Angular?",
      options: [
        "Um serviço que gerencia a execução de código fora da zona de detecção de mudanças",
        "Um componente de UI",
        "Um tipo de teste",
        "Um gerenciador de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 47,
      question: "Como criar uma diretiva personalizada no Angular?",
      options: [
        "Usando o decorador @Directive e manipulando o DOM",
        "Usando apenas templates",
        "Usando apenas serviços",
        "Usando apenas pipes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 48,
      question: "O que é 'Ivy' no Angular?",
      options: [
        "O motor de renderização introduzido na versão 9",
        "Uma biblioteca de componentes",
        "Um gerenciador de estado",
        "Uma ferramenta de teste"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 49,
      question: "Como gerenciar estado em uma aplicação Angular?",
      options: [
        "Usando NgRx ou serviços compartilhados",
        "Usando apenas templates",
        "Usando apenas pipes",
        "Usando apenas componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 50,
      question: "O que é 'NgRx' no Angular?",
      options: [
        "Uma biblioteca para gerenciamento de estado reativo",
        "Uma ferramenta de roteamento",
        "Uma biblioteca de testes",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    }
  ]
}