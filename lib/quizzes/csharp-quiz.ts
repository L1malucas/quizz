import { Quiz } from "@/utils/interfaces";

export const csharpDotnetQuiz: Quiz = {
  id: 5,
  slug: "csharp-dotnet",
  title: "C# e .NET",
  description: "Teste seus conhecimentos sobre C# e .NET, abrangendo conceitos básicos, intermediários e avançados.",
  timeLimit: 15,
  questions: [
    // Beginner Questions (20)
    {
      id: 1,
      question: "O que é C#?",
      options: [
        "Uma linguagem de programação orientada a objetos",
        "Um framework JavaScript",
        "Um banco de dados",
        "Uma ferramenta de build"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 2,
      question: "O que é o .NET?",
      options: [
        "Uma plataforma de desenvolvimento da Microsoft",
        "Uma biblioteca JavaScript",
        "Um sistema operacional",
        "Uma linguagem de programação"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 3,
      question: "Qual é a palavra-chave usada para declarar uma variável em C#?",
      options: [
        "var",
        "let",
        "const",
        "define"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 4,
      question: "Como declarar uma constante em C#?",
      options: [
        "const int x = 10;",
        "static int x = 10;",
        "final int x = 10;",
        "let x = 10;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 5,
      question: "Qual é o tipo de dado para números inteiros em C#?",
      options: [
        "int",
        "string",
        "float",
        "bool"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 6,
      question: "O que é um 'namespace' em C#?",
      options: [
        "Um contêiner para organizar código",
        "Um tipo de variável",
        "Uma função embutida",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 7,
      question: "Como escrever um comentário de linha única em C#?",
      options: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
        "<!-- Comentário -->"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 8,
      question: "Qual é a estrutura de controle para repetição em C#?",
      options: [
        "for",
        "if",
        "switch",
        "try"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 9,
      question: "O que faz o operador '==' em C#?",
      options: [
        "Compara igualdade entre dois valores",
        "Atribui um valor",
        "Compara tipos",
        "Incrementa um valor"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 10,
      question: "Como definir uma classe em C#?",
      options: [
        "class MinhaClasse { }",
        "struct MinhaClasse { }",
        "interface MinhaClasse { }",
        "module MinhaClasse { }"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 11,
      question: "O que é um 'método' em C#?",
      options: [
        "Uma função definida dentro de uma classe",
        "Uma variável global",
        "Um tipo de dado",
        "Um namespace"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 12,
      question: "Qual é o tipo retornado por um método que não retorna nada?",
      options: [
        "void",
        "null",
        "int",
        "string"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 13,
      question: "Como acessar um membro estático em C#?",
      options: [
        "Usando o nome da classe",
        "Usando uma instância da classe",
        "Usando um namespace",
        "Usando um delegate"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 14,
      question: "O que é uma 'string' em C#?",
      options: [
        "Um tipo de dado para texto",
        "Um tipo de dado para números",
        "Um tipo de dado para booleanos",
        "Um tipo de dado para objetos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 15,
      question: "Como lidar com exceções em C#?",
      options: [
        "Usando try-catch",
        "Usando if-else",
        "Usando for",
        "Usando switch"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 16,
      question: "O que é o 'Console.WriteLine' em C#?",
      options: [
        "Um método para exibir texto no console",
        "Um método para ler entrada do usuário",
        "Um método para criar arquivos",
        "Um método para conectar ao banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 17,
      question: "Qual é a diferença entre 'public' e 'private' em C#?",
      options: [
        "'public' é acessível de qualquer lugar, 'private' é restrito à classe",
        "'private' é acessível de qualquer lugar, 'public' é restrito",
        "Ambos são idênticos",
        "'public' é mais rápido"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 18,
      question: "O que é uma 'propriedade' em C#?",
      options: [
        "Um membro que encapsula um campo com get e set",
        "Um método estático",
        "Um tipo de dado",
        "Um namespace"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 19,
      question: "Como declarar um array em C#?",
      options: [
        "int[] numeros = new int[5];",
        "array numeros = new array[5];",
        "int numeros[] = new int[5];",
        "list numeros = new list[5];"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 20,
      question: "O que é o 'Main' em um programa C#?",
      options: [
        "O ponto de entrada do programa",
        "Um método para manipular arquivos",
        "Um tipo de dado",
        "Um namespace"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Intermediate Questions (20)
    {
      id: 21,
      question: "O que é o 'async/await' em C#?",
      options: [
        "Um mecanismo para programação assíncrona",
        "Um mecanismo para loops",
        "Um mecanismo para exceções",
        "Um mecanismo para herança"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 22,
      question: "O que é 'LINQ' em C#?",
      options: [
        "Uma tecnologia para consultas em coleções",
        "Uma biblioteca para requisições HTTP",
        "Um framework para UI",
        "Uma ferramenta de build"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 23,
      question: "Como implementar herança em C#?",
      options: [
        "Usando a palavra-chave ': '",
        "Usando a palavra-chave 'extends'",
        "Usando a palavra-chave 'implements'",
        "Usando a palavra-chave 'inherits'"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 24,
      question: "O que é uma 'interface' em C#?",
      options: [
        "Um contrato que define métodos sem implementação",
        "Uma classe abstrata",
        "Um tipo de dado primitivo",
        "Um namespace"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 25,
      question: "O que é o 'Entity Framework' no .NET?",
      options: [
        "Um ORM para mapeamento de banco de dados",
        "Um framework para UI",
        "Uma ferramenta de teste",
        "Uma biblioteca para requisições HTTP"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 26,
      question: "Como criar uma API com ASP.NET Core?",
      options: [
        "Usando controladores e rotas",
        "Usando apenas classes estáticas",
        "Usando apenas XML",
        "Usando apenas JavaScript"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 27,
      question: "O que é 'dependency injection' no .NET?",
      options: [
        "Um padrão para fornecer dependências a classes",
        "Um mecanismo de roteamento",
        "Uma ferramenta de teste",
        "Uma biblioteca para animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 28,
      question: "O que é um 'delegate' em C#?",
      options: [
        "Um tipo que representa referências a métodos",
        "Um tipo de dado primitivo",
        "Um namespace",
        "Uma classe abstrata"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 29,
      question: "O que é o 'using' em C#?",
      options: [
        "Uma diretiva para importar namespaces",
        "Uma palavra-chave para loops",
        "Uma palavra-chave para exceções",
        "Uma palavra-chave para herança"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 30,
      question: "Como usar 'generics' em C#?",
      options: [
        "Definindo tipos parametrizados como List<T>",
        "Definindo apenas tipos estáticos",
        "Definindo apenas interfaces",
        "Definindo apenas delegates"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 31,
      question: "O que é 'middleware' no ASP.NET Core?",
      options: [
        "Componentes que processam requisições HTTP",
        "Componentes para estilização",
        "Componentes para validação de formulários",
        "Componentes para gerenciamento de estado"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 32,
      question: "O que é um 'event' em C#?",
      options: [
        "Um mecanismo para notificar assinantes de ações",
        "Um tipo de dado primitivo",
        "Um namespace",
        "Uma classe abstrata"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 33,
      question: "Como configurar autenticação no ASP.NET Core?",
      options: [
        "Usando Identity ou JWT",
        "Usando apenas cookies",
        "Usando apenas XML",
        "Usando apenas SQL"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 34,
      question: "O que é o 'Task' em C#?",
      options: [
        "Um tipo para representar operações assíncronas",
        "Um tipo para representar loops",
        "Um tipo para representar exceções",
        "Um tipo para representar herança"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 35,
      question: "O que é 'Blazor' no .NET?",
      options: [
        "Um framework para aplicações web interativas",
        "Um banco de dados",
        "Uma ferramenta de teste",
        "Uma linguagem de programação"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 36,
      question: "Como usar 'extension methods' em C#?",
      options: [
        "Definindo métodos estáticos em classes estáticas",
        "Definindo métodos em interfaces",
        "Definindo métodos em namespaces",
        "Definindo métodos em delegates"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 37,
      question: "O que é 'reflection' em C#?",
      options: [
        "Um mecanismo para inspecionar tipos em tempo de execução",
        "Um mecanismo para loops",
        "Um mecanismo para exceções",
        "Um mecanismo para herança"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 38,
      question: "O que é 'Nullable<T>' em C#?",
      options: [
        "Um tipo que permite valores nulos para tipos de valor",
        "Um tipo que proíbe valores nulos",
        "Um tipo que representa objetos",
        "Um tipo que representa arrays"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 39,
      question: "Como testar aplicações .NET?",
      options: [
        "Usando xUnit ou NUnit",
        "Usando apenas console.log",
        "Usando ferramentas de build",
        "Usando apenas JavaScript"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 40,
      question: "O que é 'SignalR' no .NET?",
      options: [
        "Uma biblioteca para comunicação em tempo real",
        "Uma ferramenta de teste",
        "Um banco de dados",
        "Uma linguagem de programação"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Advanced Questions (10)
    {
      id: 41,
      question: "O que é 'expression trees' em C#?",
      options: [
        "Estruturas para representar código como dados",
        "Estruturas para representar loops",
        "Estruturas para representar exceções",
        "Estruturas para representar herança"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 42,
      question: "Como implementar 'pattern matching' em C#?",
      options: [
        "Usando switch expressions ou is",
        "Usando apenas if-else",
        "Usando apenas for",
        "Usando apenas try-catch"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 43,
      question: "O que é 'MAUI' no .NET?",
      options: [
        "Um framework para aplicações multiplataforma",
        "Um banco de dados",
        "Uma ferramenta de teste",
        "Uma linguagem de programação"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 44,
      question: "Como usar 'dynamic' em C#?",
      options: [
        "Para tipos resolvidos em tempo de execução",
        "Para tipos estáticos",
        "Para tipos genéricos",
        "Para tipos nulos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 45,
      question: "O que é 'gRPC' no .NET?",
      options: [
        "Um framework para comunicação de alta performance",
        "Um banco de dados",
        "Uma ferramenta de teste",
        "Uma linguagem de programação"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 46,
      question: "O que é 'memory management' no .NET?",
      options: [
        "Gerenciamento automático de memória pelo garbage collector",
        "Gerenciamento manual de memória",
        "Gerenciamento de loops",
        "Gerenciamento de exceções"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 47,
      question: "Como implementar 'parallel programming' em C#?",
      options: [
        "Usando Parallel.For ou Task Parallel Library",
        "Usando apenas for",
        "Usando apenas if-else",
        "Usando apenas try-catch"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 48,
      question: "O que é 'source generators' em C#?",
      options: [
        "Um recurso para gerar código em tempo de compilação",
        "Um recurso para gerar testes",
        "Um recurso para gerar bancos de dados",
        "Um recurso para gerar UI"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 49,
      question: "O que é 'minimal APIs' no ASP.NET Core?",
      options: [
        "Uma maneira simplificada de criar APIs com menos cerimônia",
        "Uma maneira complexa de criar APIs",
        "Uma maneira de criar bancos de dados",
        "Uma maneira de criar testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 50,
      question: "Como otimizar performance em aplicações .NET?",
      options: [
        "Usando caching, async/await e profiling",
        "Usando apenas classes estáticas",
        "Usando apenas XML",
        "Usando apenas JavaScript"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    }
  ]
}