import { Quiz } from "@/utils/interfaces";

export const frameworksQuiz: Quiz = {
  id: 3,
  slug: "frameworks",
  title: "Práticas de Desenvolvimento",	  
  description: "Teste seus conhecimentos sobre DDD, SOLID, TDD, Clean Code e Design Patterns.",
  timeLimit: 18,
  questions: [
    // Iniciante (20 questões)
    {
      id: 1,
      question: "O que significa a sigla DDD?",
      options: [
        "Domain Driven Design",
        "Data Driven Design",
        "Domain Driven Development",
        "Data Driven Development"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 2,
      question: "Qual é o princípio SOLID que diz que uma classe deve ter apenas uma razão para mudar?",
      options: [
        "Single Responsibility",
        "Open/Closed",
        "Liskov Substitution",
        "Interface Segregation"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 3,
      question: "O que significa TDD?",
      options: [
        "Test Driven Development",
        "Test Data Development",
        "Type Driven Development",
        "Task Driven Development"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 4,
      question: "No Clean Code, qual é a recomendação sobre nomes de variáveis?",
      options: [
        "Usar nomes curtos e genéricos",
        "Usar nomes longos e descritivos",
        "Usar apenas números",
        "Usar abreviações sempre"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 5,
      question: "Qual padrão de projeto é usado para criar objetos sem especificar a classe exata?",
      options: [
        "Factory Method",
        "Singleton",
        "Observer",
        "Decorator"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 6,
      question: "No DDD, o que é um Aggregate?",
      options: [
        "Um grupo de objetos tratados como uma unidade",
        "Uma classe abstrata",
        "Um tipo de teste unitário",
        "Um padrão de projeto"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 7,
      question: "Qual princípio SOLID fala sobre herança correta entre classes?",
      options: [
        "Liskov Substitution",
        "Dependency Inversion",
        "Single Responsibility",
        "Open/Closed"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 8,
      question: "Em TDD, qual é a sequência correta do ciclo?",
      options: [
        "Escrever teste, escrever código, refatorar",
        "Escrever código, testar, refatorar",
        "Refatorar, testar, escrever código",
        "Testar, refatorar, escrever código"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 9,
      question: "No Clean Code, funções devem idealmente:",
      options: [
        "Ter muitas responsabilidades",
        "Ser pequenas e fazer uma coisa",
        "Ter nomes genéricos",
        "Ser longas e complexas"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 10,
      question: "Qual padrão de projeto garante uma única instância de uma classe?",
      options: [
        "Singleton",
        "Adapter",
        "Facade",
        "Strategy"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 11,
      question: "No DDD, o que é um Bounded Context?",
      options: [
        "Um limite definido onde um modelo é consistente",
        "Um tipo de banco de dados",
        "Um padrão de projeto",
        "Um teste automatizado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 12,
      question: "Qual princípio SOLID diz que classes devem ser abertas para extensão, mas fechadas para modificação?",
      options: [
        "Open/Closed",
        "Single Responsibility",
        "Interface Segregation",
        "Dependency Inversion"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 13,
      question: "Em TDD, o que significa um teste 'vermelho'?",
      options: [
        "O teste falhou",
        "O teste passou",
        "O código está incompleto",
        "O teste está desatualizado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 14,
      question: "No Clean Code, qual é a importância de comentários?",
      options: [
        "Devem explicar código óbvio",
        "Devem ser evitados ou explicar intenções",
        "Devem ser usados em todas as linhas",
        "Devem ser longos e detalhados"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 15,
      question: "Qual padrão de projeto permite adicionar funcionalidades a um objeto dinamicamente?",
      options: [
        "Decorator",
        "Proxy",
        "Composite",
        "Bridge"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 16,
      question: "No DDD, o que é uma Entity?",
      options: [
        "Um objeto com identidade única",
        "Um banco de dados",
        "Um teste unitário",
        "Um padrão de projeto"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 17,
      question: "Qual princípio SOLID fala sobre depender de abstrações, não de implementações concretas?",
      options: [
        "Dependency Inversion",
        "Liskov Substitution",
        "Interface Segregation",
        "Single Responsibility"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 18,
      question: "Em TDD, o que significa um teste 'verde'?",
      options: [
        "O teste passou",
        "O teste falhou",
        "O código está incompleto",
        "O teste está desatualizado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 19,
      question: "No Clean Code, qual é a recomendação sobre tratamento de erros?",
      options: [
        "Ignorar erros sempre",
        "Usar try-catch de forma clara e específica",
        "Misturar erros com lógica de negócios",
        "Usar códigos de erro numéricos"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 20,
      question: "Qual padrão de projeto é usado para notificar mudanças de estado a múltiplos objetos?",
      options: [
        "Observer",
        "Mediator",
        "Command",
        "Chain of Responsibility"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },

    // Intermediário (30 questões)
    {
      id: 21,
      question: "No DDD, qual é o papel de um Repository?",
      options: [
        "Gerenciar coleções de objetos como se fossem em memória",
        "Criar instâncias de classes",
        "Executar testes unitários",
        "Gerenciar transações HTTP"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 22,
      question: "Como o princípio Open/Closed pode ser implementado em uma aplicação?",
      options: [
        "Usando herança e polimorfismo",
        "Modificando classes existentes",
        "Criando classes finais",
        "Usando variáveis globais"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 23,
      question: "Em TDD, qual é o objetivo da refatoração?",
      options: [
        "Melhorar a estrutura do código sem alterar comportamento",
        "Adicionar novas funcionalidades",
        "Corrigir bugs imediatamente",
        "Escrever novos testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 24,
      question: "No Clean Code, por que evitar 'flags' em funções?",
      options: [
        "Porque confundem a responsabilidade da função",
        "Porque melhoram a legibilidade",
        "Porque são obrigatórias",
        "Porque aumentam performance"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 25,
      question: "Qual padrão de projeto é usado para simplificar a interface de um sistema complexo?",
      options: [
        "Facade",
        "Adapter",
        "Bridge",
        "Proxy"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 26,
      question: "No DDD, o que diferencia uma Entity de um Value Object?",
      options: [
        "Entity tem identidade, Value Object não",
        "Value Object tem identidade, Entity não",
        "Entity é imutável, Value Object não",
        "Value Object é persistido, Entity não"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 27,
      question: "Como o princípio Interface Segregation ajuda na manutenção do código?",
      options: [
        "Evita que classes implementem métodos desnecessários",
        "Garante herança correta",
        "Reduz o tamanho das classes",
        "Aumenta a coesão das funções"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 28,
      question: "Em TDD, o que é um teste de integração?",
      options: [
        "Testa a interação entre diferentes módulos",
        "Testa apenas uma função isolada",
        "Testa a interface do usuário",
        "Testa o desempenho do sistema"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 29,
      question: "No Clean Code, qual é a vantagem de formatar o código consistentemente?",
      options: [
        "Facilita a leitura e manutenção",
        "Aumenta a performance",
        "Reduz o tamanho do arquivo",
        "Elimina a necessidade de testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 30,
      question: "Qual padrão de projeto permite que objetos sejam tratados como uma árvore de componentes?",
      options: [
        "Composite",
        "Decorator",
        "Flyweight",
        "Strategy"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 31,
      question: "No DDD, qual é o propósito de um Domain Service?",
      options: [
        "Encapsular lógica que não pertence a uma Entity ou Value Object",
        "Gerenciar conexões de banco de dados",
        "Executar testes automatizados",
        "Criar interfaces gráficas"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 32,
      question: "Como o princípio Liskov Substitution impacta o design de classes?",
      options: [
        "Garante que subclasses possam substituir a classe base sem erros",
        "Permite modificação de classes base",
        "Evita herança em todos os casos",
        "Força o uso de interfaces"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 33,
      question: "Em TDD, por que escrever o teste antes do código?",
      options: [
        "Para definir o comportamento esperado primeiro",
        "Para acelerar o desenvolvimento",
        "Para evitar refatoração",
        "Para garantir 100% de cobertura"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 34,
      question: "No Clean Code, o que é 'código morto'?",
      options: [
        "Código comentado ou não utilizado",
        "Código otimizado",
        "Código com bugs",
        "Código em produção"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 35,
      question: "Qual padrão de projeto encapsula um comando como um objeto?",
      options: [
        "Command",
        "Mediator",
        "Observer",
        "Template Method"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 36,
      question: "No DDD, o que é um Evento de Domínio?",
      options: [
        "Algo que aconteceu no domínio e é relevante",
        "Uma classe abstrata",
        "Um tipo de teste",
        "Uma interface gráfica"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 37,
      question: "Qual é o impacto de violar o princípio Single Responsibility?",
      options: [
        "Classes difíceis de manter e testar",
        "Código mais rápido",
        "Menor uso de memória",
        "Maior reusabilidade"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 38,
      question: "Em TDD, o que é um mock?",
      options: [
        "Um objeto simulado para testar interações",
        "Um teste automatizado",
        "Um padrão de projeto",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 39,
      question: "No Clean Code, por que evitar duplicação de código?",
      options: [
        "Porque dificulta manutenção",
        "Porque aumenta performance",
        "Porque reduz testes",
        "Porque é obrigatório"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 40,
      question: "Qual padrão de projeto define uma família de algoritmos intercambiáveis?",
      options: [
        "Strategy",
        "State",
        "Template Method",
        "Visitor"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 41,
      question: "No DDD, o que é um Aggregate Root?",
      options: [
        "A Entity principal que controla o Aggregate",
        "Um tipo de teste",
        "Um banco de dados",
        "Um padrão de projeto"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 42,
      question: "Como o princípio Dependency Inversion promove flexibilidade?",
      options: [
        "Permite trocar implementações sem mudar o código cliente",
        "Reduz o número de classes",
        "Elimina herança",
        "Aumenta a coesão"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 43,
      question: "Em TDD, o que é cobertura de testes?",
      options: [
        "Percentual de código exercitado pelos testes",
        "Número total de testes",
        "Tempo de execução dos testes",
        "Complexidade do código"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 44,
      question: "No Clean Code, o que é uma 'função pura'?",
      options: [
        "Função sem efeitos colaterais",
        "Função com muitos parâmetros",
        "Função com retorno void",
        "Função recursiva"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 45,
      question: "Qual padrão de projeto controla o acesso a um objeto?",
      options: [
        "Proxy",
        "Facade",
        "Adapter",
        "Bridge"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 46,
      question: "No DDD, qual é a importância do Ubiquitous Language?",
      options: [
        "Garante comunicação clara entre desenvolvedores e especialistas",
        "Reduz o tamanho do código",
        "Aumenta a performance",
        "Elimina testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 47,
      question: "Qual é a consequência de violar o princípio Interface Segregation?",
      options: [
        "Classes com métodos desnecessários",
        "Código mais rápido",
        "Maior coesão",
        "Menor manutenção"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 48,
      question: "Em TDD, o que é um stub?",
      options: [
        "Um objeto que retorna valores fixos para testes",
        "Um teste automatizado",
        "Um padrão de projeto",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 49,
      question: "No Clean Code, por que usar nomes significativos para variáveis?",
      options: [
        "Para expressar intenção clara",
        "Para reduzir o tamanho do código",
        "Para aumentar a performance",
        "Para evitar comentários"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 50,
      question: "Qual padrão de projeto separa a construção de um objeto complexo da sua representação?",
      options: [
        "Builder",
        "Factory Method",
        "Prototype",
        "Abstract Factory"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },

    // Avançado (20 questões)
    {
      id: 51,
      question: "No DDD, como os Bounded Contexts se relacionam em um sistema grande?",
      options: [
        "Por integração via Context Mapping",
        "Por herança direta",
        "Por testes unitários",
        "Por banco de dados compartilhado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 52,
      question: "Como o princípio Open/Closed pode ser violado em um sistema legado?",
      options: [
        "Modificando classes existentes para novas funcionalidades",
        "Usando interfaces",
        "Aplicando polimorfismo",
        "Criando testes unitários"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 53,
      question: "Em TDD, o que é um teste de aceitação?",
      options: [
        "Teste que valida requisitos do usuário",
        "Teste de desempenho",
        "Teste de unidade",
        "Teste de integração"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 54,
      question: "No Clean Code, o que é 'code smell'?",
      options: [
        "Indícios de problemas no design do código",
        "Código otimizado",
        "Código com alta performance",
        "Código sem testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 55,
      question: "Qual padrão de projeto é mais adequado para gerenciar estados complexos de um objeto?",
      options: [
        "State",
        "Strategy",
        "Command",
        "Mediator"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 56,
      question: "No DDD, como os Domain Events ajudam na integração entre Bounded Contexts?",
      options: [
        "Permitem comunicação assíncrona de eventos relevantes",
        "Substituem bancos de dados",
        "Eliminam testes",
        "Criando herança entre contextos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 57,
      question: "Como o princípio Liskov Substitution pode ser violado?",
      options: [
        "Quando uma subclasse altera o comportamento esperado da superclasse",
        "Quando usamos interfaces",
        "Quando evitamos herança",
        "Quando usamos polimorfismo"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 58,
      question: "Em TDD, o que é Behavior Driven Development (BDD)?",
      options: [
        "Uma extensão de TDD focada em comportamento do sistema",
        "Um tipo de teste de performance",
        "Um padrão de projeto",
        "Uma técnica de refatoração"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 59,
      question: "No Clean Code, o que é o princípio DRY?",
      options: [
        "Don't Repeat Yourself, evitar duplicação",
        "Do Repeat Yourself, repetir código",
        "Don't Refactor Yet, evitar refatoração",
        "Do Review Yourself, revisar código"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 60,
      question: "Qual padrão de projeto é usado para compartilhar objetos leves e reduzir uso de memória?",
      options: [
        "Flyweight",
        "Prototype",
        "Singleton",
        "Builder"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 61,
      question: "No DDD, qual é o risco de não definir bem um Bounded Context?",
      options: [
        "Modelos inconsistentes e conflitos semânticos",
        "Código mais rápido",
        "Menor necessidade de testes",
        "Maior performance"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 62,
      question: "Como o princípio Dependency Inversion facilita testes unitários?",
      options: [
        "Permite injetar dependências mockadas",
        "Reduz o número de classes",
        "Elimina herança",
        "Aumenta a coesão"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 63,
      question: "Em TDD, o que é um teste de regressão?",
      options: [
        "Teste que garante que novas mudanças não quebram funcionalidades existentes",
        "Teste de performance",
        "Teste de interface",
        "Teste de unidade"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 64,
      question: "No Clean Code, o que é o princípio KISS?",
      options: [
        "Keep It Simple, Stupid, manter o código simples",
        "Keep It Short, Stupid, manter o código curto",
        "Keep It Safe, Stupid, manter o código seguro",
        "Keep It Smart, Stupid, manter o código esperto"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 65,
      question: "Qual padrão de projeto é usado para criar famílias de objetos relacionados?",
      options: [
        "Abstract Factory",
        "Factory Method",
        "Builder",
        "Prototype"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 66,
      question: "No DDD, como os Aggregates garantem consistência?",
      options: [
        "Controlando todas as mudanças através do Aggregate Root",
        "Usando herança",
        "Evitando testes",
        "Criando interfaces"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 67,
      question: "Como o princípio Single Responsibility impacta a coesão de uma classe?",
      options: [
        "Aumenta a coesão ao focar em uma única responsabilidade",
        "Reduz a coesão",
        "Não afeta a coesão",
        "Elimina a coesão"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 68,
      question: "Em TDD, o que é um teste de ponta a ponta (end-to-end)?",
      options: [
        "Teste que valida todo o fluxo do sistema",
        "Teste de unidade",
        "Teste de performance",
        "Teste de integração"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 69,
      question: "No Clean Code, o que é o princípio YAGNI?",
      options: [
        "You Aren't Gonna Need It, evitar código desnecessário",
        "You Always Get New Issues, aceitar bugs",
        "You Are Getting New Ideas, adicionar funcionalidades",
        "You Always Gain New Insights, refatorar sempre"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 70,
      question: "Qual padrão de projeto é usado para definir uma estrutura padrão para um algoritmo?",
      options: [
        "Template Method",
        "Strategy",
        "State",
        "Command"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    }
  ]
}