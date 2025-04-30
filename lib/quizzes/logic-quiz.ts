import { Quiz } from "@/utils/interfaces";

export const logicQuiz: Quiz =   {
  id: 1,
  slug: "logic",
  title: "Lógica de Programação",
  description: "Teste seus conhecimentos sobre conceitos, operações e melhores práticas de lógica.",
  timeLimit: 12,
  questions:[
    // Basic Questions (20)
    {
      "id": 1,
      "question": "O que é uma variável em programação?",
      "options": [
        "Um valor fixo que não pode ser alterado",
        "Um espaço na memória para armazenar dados",
        "Uma função que executa uma tarefa",
        "Um tipo de loop"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "question": "Qual é a estrutura básica para tomar decisões em programação?",
      "options": [
        "Loop",
        "Condicional (if-else)",
        "Função",
        "Array"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 3,
      "question": "O que é um array em programação?",
      "options": [
        "Uma variável que armazena um único valor",
        "Uma coleção de elementos do mesmo tipo",
        "Uma função para ordenar dados",
        "Um tipo de condicional"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 4,
      "question": "Qual operador lógico representa 'E' (AND) em programação?",
      "options": [
        "||",
        "&&",
        "!",
        "^"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 5,
      "question": "Qual estrutura de repetição executa um bloco de código enquanto uma condição é verdadeira?",
      "options": [
        "If-else",
        "While",
        "Switch",
        "Function"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 6,
      "question": "O que é uma função em programação?",
      "options": [
        "Uma variável que armazena dados",
        "Um bloco de código que executa uma tarefa específica",
        "Uma estrutura de repetição",
        "Um tipo de array"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 7,
      "question": "Qual operador lógico representa 'OU' (OR) em programação?",
      "options": [
        "&&",
        "||",
        "!",
        "^"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 8,
      "question": "O que é uma matriz em programação?",
      "options": [
        "Uma variável que armazena um único valor",
        "Um array bidimensional",
        "Uma função para ordenação",
        "Um tipo de condicional"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 9,
      "question": "Qual é o propósito de um loop 'for' em programação?",
      "options": [
        "Tomar decisões",
        "Repetir um bloco de código um número fixo de vezes",
        "Armazenar dados",
        "Definir uma função"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "question": "Qual operador lógico representa 'NÃO' (NOT) em programação?",
      "options": [
        "&&",
        "||",
        "!",
        "^"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "question": "O que é um algoritmo em programação?",
      "options": [
        "Um tipo de variável",
        "Uma sequência de passos para resolver um problema",
        "Um tipo de array",
        "Uma estrutura condicional"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 12,
      "question": "Qual é a função de uma variável de contador em um loop?",
      "options": [
        "Armazenar o resultado final",
        "Controlar o número de iterações",
        "Executar uma função",
        "Armazenar um array"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 13,
      "question": "Qual é a diferença entre uma variável global e uma variável local?",
      "options": [
        "A global é imutável, a local é mutável",
        "A global é acessível em todo o programa, a local é limitada a um escopo",
        "A global armazena arrays, a local armazena números",
        "A global é usada em loops, a local em funções"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "question": "O que acontece se uma condição em um loop 'while' nunca for falsa?",
      "options": [
        "O loop termina imediatamente",
        "O loop executa indefinidamente (loop infinito)",
        "O programa para com um erro",
        "O loop pula para a próxima iteração"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 15,
      "question": "Qual é a estrutura usada para escolher entre múltiplas opções em programação?",
      "options": [
        "If-else",
        "Switch",
        "While",
        "For"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 16,
      "question": "O que é uma constante em programação?",
      "options": [
        "Uma variável que pode ser alterada",
        "Uma variável com valor fixo",
        "Um tipo de loop",
        "Uma função"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 17,
      "question": "Qual é o propósito de uma variável de acumulação em um loop?",
      "options": [
        "Controlar o número de iterações",
        "Armazenar o resultado acumulado de operações",
        "Executar uma função",
        "Armazenar um array"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 18,
      "question": "O que é um pseudocódigo?",
      "options": [
        "Um código em uma linguagem de programação",
        "Uma descrição informal de um algoritmo",
        "Um tipo de variável",
        "Uma estrutura de repetição"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 19,
      "question": "Qual é a função de um operador de incremento (++) em programação?",
      "options": [
        "Decrementar um valor",
        "Incrementar um valor em 1",
        "Multiplicar um valor",
        "Dividir um valor"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 20,
      "question": "O que é um tipo de dado em programação?",
      "options": [
        "Uma função para ordenar dados",
        "Uma classificação que define a natureza dos dados armazenados",
        "Uma estrutura de repetição",
        "Um operador lógico"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    // Intermediate Questions (20)
    {
      "id": 21,
      "question": "Qual é a principal diferença entre um array e uma matriz?",
      "options": [
        "Um array é bidimensional, uma matriz é unidimensional",
        "Um array é unidimensional, uma matriz é bidimensional",
        "Um array armazena strings, uma matriz armazena números",
        "Um array é imutável, uma matriz é mutável"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 22,
      "question": "Qual algoritmo de busca percorre cada elemento de uma lista até encontrar o valor desejado?",
      "options": [
        "Busca Binária",
        "Busca Linear",
        "Busca por Interpolação",
        "Busca por Salto"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 23,
      "question": "Qual algoritmo de ordenação compara pares de elementos adjacentes e os troca se estiverem fora de ordem?",
      "options": [
        "Quick Sort",
        "Bubble Sort",
        "Merge Sort",
        "Insertion Sort"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 24,
      "question": "O que é uma recursão em programação?",
      "options": [
        "Uma estrutura de repetição usando loops",
        "Uma função que chama a si mesma",
        "Um tipo de variável",
        "Uma estrutura condicional"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 25,
      "question": "Qual algoritmo de busca requer que a lista esteja ordenada para funcionar corretamente?",
      "options": [
        "Busca Linear",
        "Busca Binária",
        "Busca Sequencial",
        "Busca por Hash"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 26,
      "question": "Qual algoritmo de ordenação divide a lista em sublistas e as recombina em ordem?",
      "options": [
        "Bubble Sort",
        "Merge Sort",
        "Quick Sort",
        "Selection Sort"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 27,
      "question": "O que é uma variável de índice em um loop?",
      "options": [
        "Uma variável que armazena o resultado final",
        "Uma variável que controla a posição atual no loop",
        "Uma variável que armazena um array",
        "Uma variável constante"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 28,
      "question": "Qual é a complexidade de tempo da busca linear em uma lista de tamanho n?",
      "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 29,
      "question": "Qual algoritmo de ordenação seleciona o menor elemento e o coloca no início da lista?",
      "options": [
        "Bubble Sort",
        "Selection Sort",
        "Insertion Sort",
        "Quick Sort"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 30,
      "question": "O que é um ponteiro em programação?",
      "options": [
        "Uma variável que armazena um valor",
        "Uma variável que armazena o endereço de memória de outra variável",
        "Uma função que retorna um valor",
        "Um tipo de array"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 31,
      "question": "Qual é a complexidade de tempo do algoritmo Bubble Sort no pior caso?",
      "options": [
        "O(n)",
        "O(n^2)",
        "O(log n)",
        "O(n log n)"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 32,
      "question": "Qual algoritmo de ordenação insere cada elemento na posição correta em uma sublista ordenada?",
      "options": [
        "Bubble Sort",
        "Insertion Sort",
        "Selection Sort",
        "Merge Sort"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 33,
      "question": "O que é uma condição de parada em um algoritmo recursivo?",
      "options": [
        "Uma função que chama a si mesma",
        "Uma condição que interrompe a recursão",
        "Um loop infinito",
        "Uma variável de índice"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 34,
      "question": "Qual é a complexidade de tempo da busca binária em uma lista ordenada de tamanho n?",
      "options": [
        "O(n)",
        "O(log n)",
        "O(n^2)",
        "O(1)"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 35,
      "question": "Qual estrutura de dados é usada para implementar um algoritmo de busca binária?",
      "options": [
        "Lista não ordenada",
        "Array ordenado",
        "Matriz",
        "Fila"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 36,
      "question": "Qual algoritmo de ordenação escolhe um pivô e particiona a lista em torno dele?",
      "options": [
        "Bubble Sort",
        "Quick Sort",
        "Merge Sort",
        "Insertion Sort"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 37,
      "question": "O que é uma variável composta em programação?",
      "options": [
        "Uma variável que armazena um único valor",
        "Uma variável que armazena múltiplos valores, como arrays",
        "Uma variável constante",
        "Uma variável usada em loops"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 38,
      "question": "Qual é a vantagem de usar uma matriz em relação a múltiplas variáveis?",
      "options": [
        "Matrizes consomem mais memória",
        "Matrizes permitem acesso indexado e organização de dados",
        "Matrizes são mais lentas",
        "Matrizes não suportam loops"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 39,
      "question": "Qual é a complexidade de tempo do algoritmo Merge Sort no pior caso?",
      "options": [
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(log n)"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 40,
      "question": "O que é uma busca sequencial em programação?",
      "options": [
        "Uma busca que divide a lista ao meio",
        "Uma busca que verifica cada elemento em ordem",
        "Uma busca que usa índices aleatórios",
        "Uma busca que requer uma lista ordenada"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    // Advanced Questions (10)
    {
      "id": 41,
      "question": "Qual é a complexidade de tempo do algoritmo Quick Sort no caso médio?",
      "options": [
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(log n)"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 42,
      "question": "O que é uma tabela de dispersão (hash table) em programação?",
      "options": [
        "Uma estrutura de dados que armazena valores em uma lista ordenada",
        "Uma estrutura de dados que mapeia chaves para valores usando uma função de hash",
        "Uma estrutura de dados que armazena matrizes",
        "Uma estrutura de dados que usa recursão"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 43,
      "question": "Qual é a principal vantagem da busca binária sobre a busca linear?",
      "options": [
        "A busca binária é mais simples de implementar",
        "A busca binária é mais eficiente em listas ordenadas",
        "A busca binária não requer memória adicional",
        "A busca binária funciona em listas não ordenadas"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 44,
      "question": "Qual é a complexidade espacial do algoritmo Merge Sort?",
      "options": [
        "O(1)",
        "O(n)",
        "O(n log n)",
        "O(n^2)"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 45,
      "question": "O que é uma função de hash em programação?",
      "options": [
        "Uma função que ordena uma lista",
        "Uma função que converte uma chave em um índice",
        "Uma função que busca elementos em uma matriz",
        "Uma função que implementa recursão"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 46,
      "question": "Qual algoritmo de ordenação é mais eficiente para listas quase ordenadas?",
      "options": [
        "Bubble Sort",
        "Insertion Sort",
        "Quick Sort",
        "Merge Sort"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 47,
      "question": "O que é uma colisão em uma tabela de dispersão?",
      "options": [
        "Quando dois elementos são ordenados incorretamente",
        "Quando duas chaves são mapeadas para o mesmo índice",
        "Quando uma lista excede seu tamanho máximo",
        "Quando um loop infinito ocorre"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 48,
      "question": "Qual é a complexidade de tempo do algoritmo Selection Sort no pior caso?",
      "options": [
        "O(n)",
        "O(n^2)",
        "O(n log n)",
        "O(log n)"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 49,
      "question": "O que é uma busca por interpolação em programação?",
      "options": [
        "Uma busca que verifica cada elemento sequencialmente",
        "Uma busca que estima a posição do elemento com base em valores",
        "Uma busca que usa uma tabela de dispersão",
        "Uma busca que divide a lista em partes iguais"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 50,
      "question": "Qual técnica é usada para resolver colisões em uma tabela de dispersão?",
      "options": [
        "Ordenação",
        "Encadeamento (Chaining)",
        "Recursão",
        "Particionamento"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    }
  ]}