import type { Quiz } from "@/lib/quiz-data"

export const jsQuiz: Quiz = {
  id: 1,
  slug: "mongodb",
  title: "Javascript",
  description: "Teste seus conhecimentos sobre conceitos, operações e melhores práticas do Javascript.",
  timeLimit: 12,
  questions:[
    // Basic Questions (20)
    {
      "id": 1,
      "question": "Qual palavra-chave em JavaScript é usada para declarar uma variável que pode ser reatribuída?",
      "options": [
        "const",
        "let",
        "var",
        "static"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "question": "Qual operador JavaScript verifica igualdade de valor e tipo?",
      "options": [
        "==",
        "===",
        "!=",
        "!=="
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 3,
      "question": "Qual método JavaScript adiciona um elemento ao final de um array?",
      "options": [
        "pop()",
        "push()",
        "shift()",
        "unshift()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 4,
      "question": "Qual estrutura JavaScript executa um bloco de código enquanto uma condição é verdadeira?",
      "options": [
        "if",
        "while",
        "switch",
        "try"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 5,
      "question": "Qual palavra-chave JavaScript impede a redeclaração de uma variável no mesmo escopo?",
      "options": [
        "var",
        "let",
        "const",
        "static"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 6,
      "question": "Qual método JavaScript converte uma string em um número inteiro?",
      "options": [
        "toString()",
        "parseInt()",
        "parseFloat()",
        "Number()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 7,
      "question": "Qual operador JavaScript é usado para concatenar strings?",
      "options": [
        "&",
        "+",
        "*",
        "||"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 8,
      "question": "Qual método JavaScript remove o último elemento de um array?",
      "options": [
        "pop()",
        "push()",
        "shift()",
        "unshift()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 9,
      "question": "Qual palavra-chave JavaScript é usada para definir uma função?",
      "options": [
        "func",
        "function",
        "def",
        "method"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "question": "Qual método JavaScript retorna o comprimento de uma string?",
      "options": [
        "size()",
        "length()",
        "length",
        "count()"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "question": "Qual operador JavaScript verifica se uma condição é falsa?",
      "options": [
        "&&",
        "||",
        "!",
        "=="
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 12,
      "question": "Qual método JavaScript adiciona um elemento ao início de um array?",
      "options": [
        "pop()",
        "push()",
        "shift()",
        "unshift()"
      ],
      "correctAnswer": 3,
      "correctLetter": "D"
    },
    {
      "id": 13,
      "question": "Qual estrutura JavaScript é usada para lidar com erros?",
      "options": [
        "if-else",
        "try-catch",
        "switch",
        "while"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "question": "Qual método JavaScript converte uma string para letras minúsculas?",
      "options": [
        "toUpperCase()",
        "toLowerCase()",
        "lower()",
        "caseLower()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 15,
      "question": "Qual operador JavaScript é usado para combinar condições lógicas?",
      "options": [
        "&&",
        "+",
        "||",
        "!"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 16,
      "question": "Qual método JavaScript retorna uma substring de uma string?",
      "options": [
        "slice()",
        "split()",
        "substring()",
        "substr()"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 17,
      "question": "Qual palavra-chave JavaScript interrompe a execução de um loop?",
      "options": [
        "stop",
        "break",
        "exit",
        "return"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 18,
      "question": "Qual método JavaScript divide uma string em um array com base em um delimitador?",
      "options": [
        "slice()",
        "split()",
        "substring()",
        "join()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 19,
      "question": "Qual método JavaScript verifica se um array contém um elemento específico?",
      "options": [
        "contains()",
        "includes()",
        "has()",
        "find()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 20,
      "question": "Qual operador JavaScript atribui um valor a uma variável?",
      "options": [
        "==",
        "=",
        "===",
        ":"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    // Intermediate Questions (20)
    {
      "id": 21,
      "question": "Qual método JavaScript cria um novo array com os resultados de uma função aplicada a cada elemento?",
      "options": [
        "filter()",
        "map()",
        "reduce()",
        "forEach()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 22,
      "question": "Qual palavra-chave JavaScript é usada para definir uma função assíncrona?",
      "options": [
        "sync",
        "async",
        "await",
        "promise"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 23,
      "question": "Qual método JavaScript filtra elementos de um array com base em uma condição?",
      "options": [
        "map()",
        "filter()",
        "reduce()",
        "forEach()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 24,
      "question": "Qual objeto JavaScript é usado para armazenar dados no formato chave-valor no navegador?",
      "options": [
        "SessionStorage",
        "LocalStorage",
        "Cookie",
        "Cache"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 25,
      "question": "Qual método JavaScript combina dois ou mais arrays?",
      "options": [
        "concat()",
        "join()",
        "merge()",
        "combine()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 26,
      "question": "Qual palavra-chave JavaScript é usada dentro de uma função para referenciar o objeto que a contém?",
      "options": [
        "self",
        "this",
        "that",
        "context"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 27,
      "question": "Qual método JavaScript reduz um array a um único valor aplicando uma função?",
      "options": [
        "map()",
        "filter()",
        "reduce()",
        "forEach()"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 28,
      "question": "Qual método JavaScript executa uma função para cada elemento de um array?",
      "options": [
        "map()",
        "filter()",
        "forEach()",
        "reduce()"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 29,
      "question": "Qual objeto JavaScript é usado para realizar requisições HTTP?",
      "options": [
        "XMLHttpRequest",
        "Fetch",
        "Ajax",
        "HttpRequest"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 30,
      "question": "Qual método JavaScript retorna o índice de um elemento em um array?",
      "options": [
        "find()",
        "indexOf()",
        "search()",
        "locate()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 31,
      "question": "Qual palavra-chave JavaScript é usada para pausar a execução até que uma Promise seja resolvida?",
      "options": [
        "async",
        "await",
        "then",
        "promise"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 32,
      "question": "Qual método JavaScript ordena os elementos de um array?",
      "options": [
        "sort()",
        "order()",
        "arrange()",
        "rank()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 33,
      "question": "Qual método JavaScript converte um array em uma string com elementos separados por um delimitador?",
      "options": [
        "split()",
        "join()",
        "concat()",
        "toString()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 34,
      "question": "Qual objeto JavaScript representa uma promessa de um valor futuro?",
      "options": [
        "Future",
        "Promise",
        "Async",
        "Defer"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 35,
      "question": "Qual método JavaScript verifica se todos os elementos de um array satisfazem uma condição?",
      "options": [
        "every()",
        "some()",
        "filter()",
        "find()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 36,
      "question": "Qual método JavaScript verifica se pelo menos um elemento de um array satisfaz uma condição?",
      "options": [
        "every()",
        "some()",
        "filter()",
        "find()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 37,
      "question": "Qual método JavaScript retorna o primeiro elemento de um array que satisfaz uma condição?",
      "options": [
        "filter()",
        "find()",
        "some()",
        "every()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 38,
      "question": "Qual método JavaScript remove elementos de um array em um índice específico?",
      "options": [
        "slice()",
        "splice()",
        "cut()",
        "remove()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 39,
      "question": "Qual método JavaScript executa uma função após um intervalo de tempo específico?",
      "options": [
        "setTimeout()",
        "setInterval()",
        "delay()",
        "wait()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 40,
      "question": "Qual método JavaScript executa uma função repetidamente em intervalos de tempo?",
      "options": [
        "setTimeout()",
        "setInterval()",
        "loop()",
        "repeat()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    // Advanced Questions (10)
    {
      "id": 41,
      "question": "O que acontece quando uma função JavaScript é chamada com a palavra-chave 'new'?",
      "options": [
        "A função é executada normalmente",
        "Um novo objeto é criado e 'this' é vinculado a ele",
        "A função retorna um valor undefined",
        "A função é registrada como um evento"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 42,
      "question": "Qual método JavaScript impede a execução de um evento padrão, como o envio de um formulário?",
      "options": [
        "stopPropagation()",
        "preventDefault()",
        "stopImmediatePropagation()",
        "cancelEvent()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 43,
      "question": "Qual padrão de design JavaScript é usado para encapsular dados e métodos relacionados em um único objeto?",
      "options": [
        "Singleton",
        "Module",
        "Factory",
        "Observer"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 44,
      "question": "Qual método JavaScript é usado para desestruturar um objeto ou array?",
      "options": [
        "spread",
        "destructure",
        "... (operador de espalhamento)",
        "unpack"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 45,
      "question": "Qual recurso JavaScript permite a definição de métodos com nomes dinâmicos?",
      "options": [
        "Computed Property Names",
        "Dynamic Methods",
        "Template Literals",
        "Object.defineProperty"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 46,
      "question": "Qual método JavaScript é usado para criar um iterador a partir de um objeto?",
      "options": [
        "Symbol.iterator",
        "iterate()",
        "forEach()",
        "next()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 47,
      "question": "Qual recurso JavaScript permite a execução de código em um contexto isolado?",
      "options": [
        "Closure",
        "IIFE",
        "Module",
        "Sandbox"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 48,
      "question": "Qual método JavaScript é usado para definir propriedades de um objeto com controle de acesso?",
      "options": [
        "Object.defineProperty",
        "Object.setProperty",
        "Object.create",
        "Object.assign"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 49,
      "question": "Qual recurso JavaScript permite a criação de funções com parâmetros padrão?",
      "options": [
        "Default Parameters",
        "Rest Parameters",
        "Spread Operator",
        "Optional Parameters"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 50,
      "question": "Qual método JavaScript é usado para combinar múltiplas Promises e esperar que todas sejam resolvidas?",
      "options": [
        "Promise.all()",
        "Promise.race()",
        "Promise.any()",
        "Promise.resolve()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    }
  ]
}
