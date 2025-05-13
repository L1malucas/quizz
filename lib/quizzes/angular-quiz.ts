import { Quiz } from "@/utils/interfaces";

export const angularQuiz: Quiz = {
  id: 10,
  slug: "angular",
  title: "Angular",
  description: "Teste seus conhecimentos sobre Angular, abrangendo conceitos fundamentais, intermediários e avançados do framework.",
  timeLimit: 15,
  questions: [
    {
      id: 1,
      question: "O que é o motor Ivy no Angular?",
      options: [
        "O compilador e renderizador introduzido na versão 9",
        "Uma biblioteca de animações",
        "Um gerenciador de estado",
        "Um framework de testes"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 2,
      question: "Qual comando do Angular CLI cria um novo projeto?",
      options: [
        "ng new meu-projeto",
        "ng create meu-projeto",
        "ng init meu-projeto",
        "ng start meu-projeto"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 3,
      question: "O que é change detection no Angular?",
      options: [
        "O processo de atualizar a view com base em mudanças no modelo",
        "O gerenciamento de rotas dinâmicas",
        "A validação de dados no backend",
        "A execução de testes unitários"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 4,
      question: "Como exibir o valor de uma variável em um template Angular?",
      options: [
        "{{ minhaVariavel }}",
        "[[ minhaVariavel ]]",
        "(( minhaVariavel ))",
        "** minhaVariavel **"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 5,
      question: "Qual é a função do HttpClient no Angular?",
      options: [
        "Realizar requisições HTTP para APIs externas",
        "Gerenciar o estado da aplicação",
        "Renderizar componentes no DOM",
        "Executar animações no template"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 6,
      question: "O que é NgRx no contexto do Angular?",
      options: [
        "Uma biblioteca para gerenciamento de estado reativo",
        "Um módulo de roteamento avançado",
        "Uma ferramenta de compilação",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 7,
      question: "Qual é a função de um pipe no Angular?",
      options: [
        "Transformar dados exibidos no template",
        "Gerenciar eventos de usuário",
        "Configurar rotas dinâmicas",
        "Executar testes unitários"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 8,
      question: "Como otimizar a change detection em Angular?",
      options: [
        "Usando ChangeDetectionStrategy.OnPush e dados imutáveis",
        "Usando ngIf em todos os componentes",
        "Carregando todos os serviços no bootstrap",
        "Evitando o uso de Observables"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 9,
      question: "Qual é a função do Angular CLI?",
      options: [
        "Automatizar a criação, build e testes de projetos Angular",
        "Gerenciar dependências de backend",
        "Criar animações para componentes",
        "Executar consultas a bancos de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 10,
      question: "Como criar um formulário reativo em Angular?",
      options: [
        "Usando FormGroup e FormControl no componente",
        "Usando ngModel no template",
        "Usando diretivas estruturais",
        "Usando pipes de validação"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 11,
      question: "O que caracteriza o framework Angular?",
      options: [
        "Um framework TypeScript para desenvolvimento de aplicações web dinâmicas",
        "Uma biblioteca para manipulação direta do DOM",
        "Uma linguagem de programação para backend",
        "Um sistema de gerenciamento de banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 12,
      question: "Qual é o papel do RxJS no Angular?",
      options: [
        "Facilitar a programação reativa com Observables",
        "Gerenciar rotas dinâmicas",
        "Compilar templates em tempo real",
        "Executar testes unitários"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 13,
      question: "Como importar o FormsModule em um NgModule?",
      options: [
        "imports: [FormsModule]",
        "declarations: [FormsModule]",
        "exports: [FormsModule]",
        "providers: [FormsModule]"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 14,
      question: "O que é uma diretiva em Angular?",
      options: [
        "Um comportamento ou manipulação aplicada a elementos do DOM",
        "Um componente de interface gráfica",
        "Um serviço para chamadas HTTP",
        "Um módulo de configuração global"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 15,
      question: "Qual pipe Angular é usado para formatar datas?",
      options: [
        "date",
        "formatDate",
        "time",
        "datetime"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 16,
      question: "O que define um componente em Angular?",
      options: [
        "Uma classe TypeScript associada a um template HTML e estilos",
        "Um módulo de roteamento",
        "Um serviço de injeção de dependências",
        "Um arquivo de configuração global"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 17,
      question: "Como configurar roteamento em uma aplicação Angular?",
      options: [
        "Usando RouterModule e definindo rotas com path e component",
        "Usando serviços de navegação",
        "Usando diretivas no template",
        "Usando pipes para redirecionamento"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 18,
      question: "O que é o RouterOutlet no Angular?",
      options: [
        "Um marcador que renderiza o componente da rota ativa",
        "Um serviço de navegação",
        "Uma diretiva de validação",
        "Um pipe de transformação"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 19,
      question: "Qual linguagem é usada como base para desenvolvimento em Angular?",
      options: [
        "TypeScript",
        "JavaScript",
        "Python",
        "C#"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 20,
      question: "O que é data binding no contexto do Angular?",
      options: [
        "Sincronização automática entre o modelo de dados e a interface do usuário",
        "Validação de formulários no backend",
        "Gerenciamento de rotas dinâmicas",
        "Compilação de templates em tempo real"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 21,
      question: "Qual decorador é utilizado para declarar um componente em Angular?",
      options: [
        "@Component",
        "@NgModule",
        "@Injectable",
        "@Directive"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 22,
      question: "Como criar um pipe personalizado no Angular?",
      options: [
        "Usando @Pipe e implementando PipeTransform",
        "Usando @Directive no componente",
        "Usando @Injectable no serviço",
        "Usando @NgModule no módulo"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 23,
      question: "O que é lazy loading no contexto do Angular?",
      options: [
        "Carregar módulos sob demanda para reduzir o tempo de inicialização",
        "Carregar todos os componentes ao iniciar a aplicação",
        "Usar serviços para gerenciar estado",
        "Compilar templates em tempo real"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 24,
      question: "Qual é a função do NgZone no Angular?",
      options: [
        "Controlar a execução de código fora da detecção de mudanças",
        "Gerenciar rotas dinâmicas",
        "Renderizar componentes no DOM",
        "Executar requisições HTTP"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 25,
      question: "Como implementar lazy loading em rotas Angular?",
      options: [
        "Usando loadChildren no RouterModule",
        "Usando ngIf no template",
        "Usando serviços de navegação",
        "Usando pipes no roteador"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 26,
      question: "Qual comando gera um novo componente com o Angular CLI?",
      options: [
        "ng generate component meu-componente",
        "ng create component meu-componente",
        "ng make component meu-componente",
        "ng build component meu-componente"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 27,
      question: "O que é um resolver no roteamento Angular?",
      options: [
        "Um serviço que carrega dados antes de ativar uma rota",
        "Um componente de interface gráfica",
        "Uma diretiva de validação",
        "Um pipe de transformação"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 28,
      question: "Como otimizar a performance de uma aplicação Angular?",
      options: [
        "Usando AOT, lazy loading e change detection OnPush",
        "Carregando todos os módulos no bootstrap",
        "Usando ngFor em listas grandes",
        "Evitando o uso de pipes"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 29,
      question: "O que é Angular Universal?",
      options: [
        "Uma solução para renderização no lado do servidor",
        "Uma biblioteca de componentes visuais",
        "Um framework de testes unitários",
        "Um gerenciador de estado global"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 30,
      question: "Qual é a função do TestBed no Angular?",
      options: [
        "Configurar e testar componentes em um ambiente isolado",
        "Gerenciar eventos assíncronos",
        "Renderizar templates no DOM",
        "Executar requisições HTTP"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 31,
      question: "O que é injeção de dependência no Angular?",
      options: [
        "Um padrão de design para fornecer serviços a classes automaticamente",
        "Um mecanismo de roteamento dinâmico",
        "Uma técnica de otimização de performance",
        "Um método para validação de formulários"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 32,
      question: "Qual ferramenta é comumente usada para testes unitários em Angular?",
      options: [
        "Jasmine com Karma",
        "Mocha com Chai",
        "Jest com Enzyme",
        "Cypress com Sinon"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 33,
      question: "Como criar uma diretiva personalizada no Angular?",
      options: [
        "Usando @Directive e manipulando o elemento do DOM",
        "Usando @Component no template",
        "Usando @Injectable no serviço",
        "Usando @Pipe no módulo"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 34,
      question: "O que é o ReactiveFormsModule no Angular?",
      options: [
        "Um módulo para criar formulários baseados em programação reativa",
        "Um módulo para animações dinâmicas",
        "Um módulo para gerenciamento de rotas",
        "Um módulo para testes unitários"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 35,
      question: "Como exibir condicionalmente um elemento em um template Angular?",
      options: [
        "Com a diretiva *ngIf",
        "Com a diretiva *ngFor",
        "Com a diretiva *ngShow",
        "Com a diretiva *ngHide"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 36,
      question: "Qual diretiva Angular é usada para iterar sobre uma lista no template?",
      options: [
        "*ngFor",
        "*ngIf",
        "*ngSwitch",
        "*ngWhile"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 37,
      question: "O que é compilação AOT no Angular?",
      options: [
        "Compilar o código Angular antes do carregamento no navegador",
        "Compilar o código em tempo de execução",
        "Gerenciar eventos assíncronos",
        "Validar formulários dinamicamente"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 38,
      question: "Como criar um serviço com o Angular CLI?",
      options: [
        "ng generate service meu-servico",
        "ng create service meu-servico",
        "ng make service meu-servico",
        "ng build service meu-servico"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 39,
      question: "Qual é a função de um route guard no Angular?",
      options: [
        "Proteger o acesso a rotas com base em condições",
        "Renderizar componentes no DOM",
        "Gerenciar eventos de usuário",
        "Transformar dados no template"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 40,
      question: "O que faz o guard CanActivate no Angular?",
      options: [
        "Verifica se uma rota pode ser acessada",
        "Valida formulários no template",
        "Gerencia eventos assíncronos",
        "Compila templates dinamicamente"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 41,
      question: "Qual é a função de um NgModule no Angular?",
      options: [
        "Organizar e configurar conjuntos de funcionalidades da aplicação",
        "Renderizar templates no DOM",
        "Executar requisições HTTP",
        "Gerenciar eventos de usuário"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 42,
      question: "Qual é o nome do módulo raiz padrão em uma aplicação Angular?",
      options: [
        "AppModule",
        "MainModule",
        "RootModule",
        "CoreModule"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 43,
      question: "O que significa 'bootstrap' em um NgModule?",
      options: [
        "O processo de inicialização do componente principal da aplicação",
        "A configuração de rotas iniciais",
        "A injeção de serviços globais",
        "A compilação de estilos CSS"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 44,
      question: "Qual tipo de data binding permite atualização unidirecional do modelo para a view?",
      options: [
        "Property binding",
        "Two-way binding",
        "Event binding",
        "Structural binding"
      ],
      correctAnswer: 0,
      correctLetter: "C"
    },
    {
      id: 45,
      question: "Como importar o HttpClientModule em um NgModule?",
      options: [
        "imports: [HttpClientModule]",
        "declarations: [HttpClientModule]",
        "exports: [HttpClientModule]",
        "providers: [HttpClientModule]"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 46,
      question: "O que define um Observable no RxJS?",
      options: [
        "Um fluxo de dados assíncrono que emite valores ao longo do tempo",
        "Um componente de interface gráfica",
        "Um serviço de validação de dados",
        "Um módulo de configuração global"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    },
    {
      id: 47,
      question: "Como definir uma rota com parâmetros no Angular?",
      options: [
        "Usando :id no caminho da rota",
        "Usando query strings no template",
        "Usando serviços de roteamento",
        "Usando pipes no roteador"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 48,
      question: "Qual é a função do comando 'ng serve' no Angular CLI?",
      options: [
        "Iniciar um servidor de desenvolvimento local",
        "Compilar a aplicação para produção",
        "Gerar novos componentes",
        "Executar testes unitários"
      ],
      correctAnswer: 0,
      correctLetter:"C"
    },
    {
      id: 49,
      question: "Qual é uma abordagem comum para gerenciar estado em Angular?",
      options: [
        "Usar NgRx ou serviços compartilhados",
        "Usar localStorage para todos os dados",
        "Usar pipes para estado global",
        "Usar diretivas para estado local"
      ],
      correctAnswer: 0,
      correctLetter: "D"
    },
    {
      id: 50,
      question: "Como o NgRx implementa o padrão Redux no Angular?",
      options: [
        "Usando ações, redutores e store para gerenciar estado",
        "Usando diretivas para atualizar o DOM",
        "Usando pipes para transformar estado",
        "Usando serviços para roteamento"
      ],
      correctAnswer: 0,
      correctLetter: "B"
    }
  ]
}