import { Quiz } from "@/utils/interfaces";

export const typescriptQuiz: Quiz = {
  id: 7,
  slug: "typescript",
  title: "TypeScript",
  description: "Teste seus conhecimentos sobre TypeScript, incluindo conceitos básicos, intermediários e avançados.",
  timeLimit: 15,
  questions: [
    // Beginner Questions (20)
    {
      id: 1,
      question: "O que é TypeScript?",
      options: [
        "Uma linguagem de programação totalmente nova",
        "Um superset de JavaScript que adiciona tipagem estática",
        "Um framework para construir aplicações web",
        "Uma biblioteca para manipulação de DOM"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 2,
      question: "Qual é a extensão de arquivo usada para TypeScript?",
      options: [
        ".js",
        ".ts",
        ".tsx",
        ".jsx"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 3,
      question: "Como declarar uma variável com tipo 'number' em TypeScript?",
      options: [
        "let x: number;",
        "let x = number;",
        "var x: Number;",
        "const x = number;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 4,
      question: "Qual é o tipo padrão inferido para uma variável não inicializada em TypeScript?",
      options: [
        "null",
        "undefined",
        "any",
        "void"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 5,
      question: "O que faz a palavra-chave 'any' em TypeScript?",
      options: [
        "Define um tipo específico para uma variável",
        "Desativa a verificação de tipo para uma variável",
        "Define uma função assíncrona",
        "Cria uma constante imutável"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 6,
      question: "Qual é a sintaxe correta para uma interface em TypeScript?",
      options: [
        "interface Pessoa { nome: string; idade: number; }",
        "class Pessoa { nome: string; idade: number; }",
        "type Pessoa = { nome: string; idade: number; }",
        "struct Pessoa { nome: string; idade: number; }"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 7,
      question: "Como definir um array de strings em TypeScript?",
      options: [
        "let nomes: string[];",
        "let nomes: Array<string>;",
        "Ambas as opções acima",
        "let nomes: string;"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 8,
      question: "O que é um 'type alias' em TypeScript?",
      options: [
        "Uma função que retorna um tipo",
        "Um nome alternativo para um tipo",
        "Uma classe abstrata",
        "Um módulo externo"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 9,
      question: "Qual é o tipo retornado por uma função que não retorna nada?",
      options: [
        "null",
        "undefined",
        "void",
        "any"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 10,
      question: "Como declarar uma constante em TypeScript?",
      options: [
        "let x = 10;",
        "const x = 10;",
        "var x = 10;",
        "static x = 10;"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 11,
      question: "Qual é a diferença entre 'let' e 'const' em TypeScript?",
      options: [
        "'let' é para constantes, 'const' é para variáveis",
        "'let' permite reatribuição, 'const' não",
        "'const' é mais rápido que 'let'",
        "Não há diferença"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 12,
      question: "O que é uma tupla em TypeScript?",
      options: [
        "Um array com tipos fixos e comprimento fixo",
        "Um objeto com propriedades dinâmicas",
        "Uma função com argumentos opcionais",
        "Um tipo genérico"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 13,
      question: "Como definir uma função com parâmetros tipados?",
      options: [
        "function soma(a: number, b: number): number { return a + b; }",
        "function soma(a, b): number { return a + b; }",
        "function soma(a: number, b: number) { return a + b; }",
        "function soma(a, b: number): number { return a + b; }"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 14,
      question: "O que é o operador '!' em TypeScript?",
      options: [
        "Operador de negação lógica",
        "Operador de não-nulo",
        "Operador de incremento",
        "Operador de comparação estrita"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 15,
      question: "Como importar um módulo em TypeScript?",
      options: [
        "import { modulo } from './modulo';",
        "require('./modulo');",
        "include './modulo';",
        "load './modulo';"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 16,
      question: "Qual é o propósito do arquivo 'tsconfig.json'?",
      options: [
        "Definir rotas para uma aplicação web",
        "Configurar opções do compilador TypeScript",
        "Gerenciar dependências do projeto",
        "Definir estilos CSS"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 17,
      question: "O que é um 'enum' em TypeScript?",
      options: [
        "Uma estrutura de controle de fluxo",
        "Um conjunto de valores nomeados",
        "Um tipo de dado primitivo",
        "Uma função recursiva"
      ],
      correctAnswer: 1,
      correctLetter: "B"
    },
    {
      id: 18,
      question: "Qual é a diferença entre 'null' e 'undefined' em TypeScript?",
      options: [
        "'null' é um valor intencionalmente vazio, 'undefined' é ausência de valor",
        "'undefined' é um valor intencionalmente vazio, 'null' é ausência de valor",
        "São idênticos em TypeScript",
        "'null' é usado apenas em objetos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 19,
      question: "Como definir uma propriedade opcional em uma interface?",
      options: [
        "nome?: string;",
        "nome: string?;",
        "nome: string | undefined;",
        "nome: optional string;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 20,
      question: "O que acontece se uma variável é declarada sem tipo em TypeScript?",
      options: [
        "Ela recebe o tipo 'any'",
        "Ela recebe o tipo 'unknown'",
        "O compilador gera um erro",
        "Ela recebe o tipo 'void'"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Intermediate Questions (20)
    {
      id: 21,
      question: "O que é o tipo 'unknown' em TypeScript?",
      options: [
        "Um tipo que aceita qualquer valor, mas requer verificação antes do uso",
        "Um tipo que representa valores nulos",
        "Um tipo para funções assíncronas",
        "Um tipo para arrays dinâmicos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 22,
      question: "Como usar genéricos em TypeScript?",
      options: [
        "function identidade<T>(valor: T): T { return valor; }",
        "function identidade(valor: any): any { return valor; }",
        "function identidade<T>(valor: T) { return valor; }",
        "function identidade(valor: T): T { return valor; }"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 23,
      question: "O que é 'type narrowing' em TypeScript?",
      options: [
        "Restringir um tipo para um subtipo mais específico",
        "Converter um tipo para string",
        "Definir um tipo genérico",
        "Remover propriedades opcionais"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 24,
      question: "Como definir uma união de tipos em TypeScript?",
      options: [
        "type Exemplo = string | number;",
        "type Exemplo = string & number;",
        "type Exemplo = string, number;",
        "type Exemplo = string || number;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 25,
      question: "O que é o operador 'as' em TypeScript?",
      options: [
        "Um operador para conversão de tipos",
        "Um operador para comparação",
        "Um operador para atribuição",
        "Um operador para loops"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 26,
      question: "Qual é a diferença entre 'interface' e 'type' em TypeScript?",
      options: [
        "'interface' pode ser estendida com 'extends', 'type' não",
        "'type' pode representar tipos primitivos e uniões, 'interface' é mais restrita",
        "Ambas as opções acima",
        "Não há diferença"
      ],
      correctAnswer: 2,
      correctLetter: "C"
    },
    {
      id: 27,
      question: "Como declarar uma função sobrecarregada em TypeScript?",
      options: [
        "function exemplo(a: string): string; function exemplo(a: number): number;",
        "function exemplo(a: string | number): string | number;",
        "function exemplo(a: any): any;",
        "function exemplo(a: string, a: number): string;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 28,
      question: "O que é o tipo 'never' em TypeScript?",
      options: [
        "Um tipo que representa valores que nunca ocorrem",
        "Um tipo que aceita qualquer valor",
        "Um tipo para funções assíncronas",
        "Um tipo para valores nulos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 29,
      question: "Como usar 'mapped types' em TypeScript?",
      options: [
        "type Exemplo = { [K in keyof T]: T[K]; }",
        "type Exemplo = { [K: string]: T; }",
        "type Exemplo = T[];",
        "type Exemplo = { K: T; }"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 30,
      question: "O que é 'strictNullChecks' no tsconfig.json?",
      options: [
        "Habilita verificações rigorosas para null e undefined",
        "Desativa verificações de tipo",
        "Habilita suporte a módulos",
        "Define o modo estrito para funções"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 31,
      question: "Como usar 'conditional types' em TypeScript?",
      options: [
        "type Exemplo<T> = T extends string ? number : boolean;",
        "type Exemplo<T> = T ? number : boolean;",
        "type Exemplo<T> = T == string ? number : boolean;",
        "type Exemplo<T> = T || number;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 32,
      question: "O que é um 'type guard' em TypeScript?",
      options: [
        "Uma função ou verificação que restringe o tipo de uma variável",
        "Um operador para conversão de tipos",
        "Um tipo para funções assíncronas",
        "Um mecanismo para proteger o código"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 33,
      question: "Como usar 'discriminated unions' em TypeScript?",
      options: [
        "Usando uma propriedade comum para diferenciar tipos",
        "Usando genéricos para combinar tipos",
        "Usando interfaces abstratas",
        "Usando classes para tipos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 34,
      question: "O que é o operador 'keyof' em TypeScript?",
      options: [
        "Retorna as chaves de um tipo como um tipo literal",
        "Retorna os valores de um tipo",
        "Define uma chave primária",
        "Cria um tipo genérico"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 35,
      question: "Como declarar uma propriedade somente leitura em TypeScript?",
      options: [
        "readonly nome: string;",
        "const nome: string;",
        "static nome: string;",
        "final nome: string;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 36,
      question: "O que é 'declaration merging' em TypeScript?",
      options: [
        "Combinar múltiplas declarações de interface com o mesmo nome",
        "Mesclar tipos genéricos",
        "Unir objetos em runtime",
        "Combinar arquivos TypeScript"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 37,
      question: "Como usar 'utility types' como 'Partial<T>'?",
      options: [
        "type Exemplo = Partial<T>;",
        "type Exemplo = T[];",
        "type Exemplo = T & Partial<T>;",
        "type Exemplo = T | Partial<T>;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 38,
      question: "O que é o tipo 'this' em TypeScript?",
      options: [
        "Um tipo que representa o contexto da função atual",
        "Um tipo para variáveis globais",
        "Um tipo para funções assíncronas",
        "Um tipo para valores nulos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 39,
      question: "Como usar 'type assertions' em TypeScript?",
      options: [
        "let x = valor as string;",
        "let x = valor: string;",
        "let x = cast(valor, string);",
        "let x = valor is string;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 40,
      question: "O que é o tipo 'Record' em TypeScript?",
      options: [
        "Um tipo utilitário para criar objetos com chaves e valores específicos",
        "Um tipo para arrays dinâmicos",
        "Um tipo para funções assíncronas",
        "Um tipo para valores nulos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Advanced Questions (10)
    {
      id: 41,
      question: "O que é 'infer' em tipos condicionais?",
      options: [
        "Permite extrair um tipo dentro de uma expressão condicional",
        "Define um tipo genérico",
        "Cria uma união de tipos",
        "Restringe um tipo a um valor específico"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 42,
      question: "Como usar 'template literal types' em TypeScript?",
      options: [
        "type Exemplo = `${'a' | 'b'}${'c' | 'd'}`;",
        "type Exemplo = 'a' | 'b';",
        "type Exemplo = string;",
        "type Exemplo = `a${string}`;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 43,
      question: "O que é 'module augmentation' em TypeScript?",
      options: [
        "Adicionar declarações a um módulo existente",
        "Criar um novo módulo",
        "Mesclar múltiplos módulos",
        "Exportar tipos genéricos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 44,
      question: "Como usar 'declaration files' (.d.ts)?",
      options: [
        "Para definir tipos para código JavaScript existente",
        "Para criar funções assíncronas",
        "Para gerenciar dependências",
        "Para definir estilos CSS"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 45,
      question: "O que é 'variance' em TypeScript?",
      options: [
        "A relação entre tipos em hierarquias, como covariância e contravariância",
        "A conversão automática de tipos",
        "A definição de tipos genéricos",
        "A restrição de tipos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 46,
      question: "Como usar 'symbol' como tipo em TypeScript?",
      options: [
        "let sym: symbol = Symbol('id');",
        "let sym: Symbol = new Symbol('id');",
        "let sym: symbol = 'id';",
        "let sym: Symbol = Symbol;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 47,
      question: "O que é 'ambient declarations' em TypeScript?",
      options: [
        "Declarações de tipos para código externo sem implementação",
        "Declarações de funções assíncronas",
        "Declarações de variáveis globais",
        "Declarações de classes abstratas"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 48,
      question: "Como usar 'intersection types' em TypeScript?",
      options: [
        "type Exemplo = T & U;",
        "type Exemplo = T | U;",
        "type Exemplo = T + U;",
        "type Exemplo = T, U;"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 49,
      question: "O que é 'type inference' em TypeScript?",
      options: [
        "O compilador deduz automaticamente o tipo de uma variável",
        "O compilador converte tipos dinamicamente",
        "O compilador ignora tipos",
        "O compilador gera erros para tipos indefinidos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 50,
      question: "Como usar 'advanced type functions' como 'ReturnType'?",
      options: [
        "type Exemplo = ReturnType<typeof funcao>;",
        "type Exemplo = typeof funcao;",
        "type Exemplo = funcao.ReturnType;",
        "type Exemplo = funcao();"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    }
  ]
}