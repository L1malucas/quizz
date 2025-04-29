import type { Quiz } from "@/lib/quiz-data"

export const domQuiz: Quiz = {
  id: 1,
  slug: "mongodb",
  title: "DOM",
  description: "Teste seu conhecimento sobre conceitos, operações e melhores práticas do DOM.",
  timeLimit: 12,
  questions: [
    // Basic Questions (20)
    {
      "id": 1,
      "question": "O que é o DOM em JavaScript?",
      "options": [
        "Um modelo de banco de dados",
        "Uma representação em árvore do documento HTML",
        "Uma biblioteca de animação",
        "Um método para estilizar páginas"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "question": "Qual método do DOM é usado para selecionar um elemento por seu ID?",
      "options": [
        "querySelector()",
        "getElementById()",
        "getElementsByClassName()",
        "querySelectorAll()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 3,
      "question": "Qual método do DOM é usado para selecionar todos os elementos com uma classe específica?",
      "options": [
        "getElementById()",
        "getElementsByClassName()",
        "querySelector()",
        "getElementsByTagName()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 4,
      "question": "Qual propriedade do DOM retorna o conteúdo de texto de um elemento?",
      "options": [
        "innerHTML",
        "textContent",
        "innerText",
        "value"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 5,
      "question": "Qual método do DOM adiciona um novo elemento como filho de outro elemento?",
      "options": [
        "createElement()",
        "appendChild()",
        "removeChild()",
        "replaceChild()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 6,
      "question": "Qual método do DOM cria um novo elemento HTML?",
      "options": [
        "createElement()",
        "appendChild()",
        "cloneNode()",
        "createNode()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 7,
      "question": "Qual propriedade do DOM retorna o elemento pai de um elemento?",
      "options": [
        "parentNode",
        "childNode",
        "nextSibling",
        "previousSibling"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 8,
      "question": "Qual método do DOM remove um elemento do documento?",
      "options": [
        "removeChild()",
        "deleteNode()",
        "removeElement()",
        "detach()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 9,
      "question": "Qual propriedade do DOM retorna todos os elementos filhos de um elemento?",
      "options": [
        "childNodes",
        "children",
        "nodes",
        "siblings"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "question": "Qual método do DOM seleciona todos os elementos que correspondem a um seletor CSS?",
      "options": [
        "querySelector()",
        "getElementsByTagName()",
        "querySelectorAll()",
        "getElementsByClassName()"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "question": "Qual propriedade do DOM define ou retorna o valor de um atributo de um elemento?",
      "options": [
        "getAttribute()",
        "setAttribute()",
        "attributes",
        "value"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 12,
      "question": "Qual método do DOM adiciona uma classe a um elemento?",
      "options": [
        "classList.add()",
        "addClass()",
        "setClass()",
        "className.add()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 13,
      "question": "Qual método do DOM verifica se um elemento possui uma classe específica?",
      "options": [
        "hasClass()",
        "classList.contains()",
        "containsClass()",
        "checkClass()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "question": "Qual propriedade do DOM retorna o próximo elemento irmão de um elemento?",
      "options": [
        "parentNode",
        "nextSibling",
        "previousSibling",
        "sibling"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 15,
      "question": "Qual método do DOM substitui um elemento filho por outro?",
      "options": [
        "appendChild()",
        "replaceChild()",
        "removeChild()",
        "swapNode()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 16,
      "question": "Qual propriedade do DOM retorna o nome da tag de um elemento?",
      "options": [
        "tagName",
        "nodeName",
        "elementName",
        "type"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 17,
      "question": "Qual método do DOM clona um elemento?",
      "options": [
        "cloneNode()",
        "copyNode()",
        "duplicateNode()",
        "createElement()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 18,
      "question": "Qual propriedade do DOM define o conteúdo HTML interno de um elemento?",
      "options": [
        "textContent",
        "innerText",
        "innerHTML",
        "value"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 19,
      "question": "Qual método do DOM remove uma classe de um elemento?",
      "options": [
        "classList.remove()",
        "removeClass()",
        "deleteClass()",
        "className.remove()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 20,
      "question": "Qual propriedade do DOM retorna o primeiro elemento filho de um elemento?",
      "options": [
        "firstChild",
        "lastChild",
        "childNodes",
        "children"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    // Intermediate Questions (20)
    {
      "id": 21,
      "question": "Qual método do DOM é usado para selecionar o primeiro elemento que corresponde a um seletor CSS?",
      "options": [
        "getElementById()",
        "querySelector()",
        "getElementsByClassName()",
        "querySelectorAll()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 22,
      "question": "Qual método do DOM adiciona um manipulador de eventos a um elemento?",
      "options": [
        "addEventListener()",
        "onEvent()",
        "attachEvent()",
        "setEvent()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 23,
      "question": "Qual propriedade do DOM retorna o último elemento filho de um elemento?",
      "options": [
        "firstChild",
        "lastChild",
        "childNodes",
        "children"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 24,
      "question": "Qual método do DOM alterna a presença de uma classe em um elemento?",
      "options": [
        "classList.toggle()",
        "toggleClass()",
        "switchClass()",
        "className.toggle()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 25,
      "question": "Qual propriedade do DOM retorna o valor de um campo de formulário?",
      "options": [
        "innerHTML",
        "textContent",
        "value",
        "innerText"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 26,
      "question": "Qual método do DOM define o valor de um atributo em um elemento?",
      "options": [
        "getAttribute()",
        "setAttribute()",
        "removeAttribute()",
        "attribute()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 27,
      "question": "Qual método do DOM remove um manipulador de eventos de um elemento?",
      "options": [
        "removeEventListener()",
        "detachEvent()",
        "offEvent()",
        "clearEvent()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 28,
      "question": "Qual propriedade do DOM retorna a posição de um elemento em relação ao topo da página?",
      "options": [
        "offsetTop",
        "scrollTop",
        "clientTop",
        "top"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 29,
      "question": "Qual método do DOM insere um elemento antes de outro elemento existente?",
      "options": [
        "appendChild()",
        "insertBefore()",
        "prepend()",
        "insertAfter()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 30,
      "question": "Qual propriedade do DOM retorna a largura de um elemento, incluindo padding?",
      "options": [
        "offsetWidth",
        "clientWidth",
        "scrollWidth",
        "width"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 31,
      "question": "Qual método do DOM verifica se um elemento corresponde a um seletor CSS?",
      "options": [
        "matches()",
        "contains()",
        "querySelector()",
        "checkSelector()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 32,
      "question": "Qual propriedade do DOM retorna a posição de rolagem vertical de um elemento?",
      "options": [
        "offsetTop",
        "scrollTop",
        "clientTop",
        "top"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 33,
      "question": "Qual método do DOM retorna o elemento mais próximo que corresponde a um seletor CSS?",
      "options": [
        "querySelector()",
        "closest()",
        "parentNode",
        "matches()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 34,
      "question": "Qual propriedade do DOM retorna a altura de um elemento, incluindo padding?",
      "options": [
        "offsetHeight",
        "clientHeight",
        "scrollHeight",
        "height"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 35,
      "question": "Qual método do DOM adiciona um elemento no início de outro elemento?",
      "options": [
        "appendChild()",
        "prepend()",
        "insertBefore()",
        "addFirst()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 36,
      "question": "Qual propriedade do DOM retorna o tipo de nó de um elemento?",
      "options": [
        "nodeType",
        "nodeName",
        "tagName",
        "type"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 37,
      "question": "Qual método do DOM remove um atributo de um elemento?",
      "options": [
        "setAttribute()",
        "removeAttribute()",
        "deleteAttribute()",
        "clearAttribute()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 38,
      "question": "Qual propriedade do DOM retorna o elemento HTML raiz do documento?",
      "options": [
        "documentElement",
        "body",
        "root",
        "html"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 39,
      "question": "Qual método do DOM obtém a posição de um elemento em relação ao seu contêiner pai?",
      "options": [
        "getBoundingClientRect()",
        "offsetPosition()",
        "clientPosition()",
        "position()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 40,
      "question": "Qual propriedade do DOM retorna o objeto de eventos associados a um elemento?",
      "options": [
        "events",
        "listeners",
        "eventListeners",
        "on"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    // Advanced Questions (10)
    {
      "id": 41,
      "question": "Qual método do DOM permite modificar o conteúdo HTML interno de um elemento?",
      "options": [
        "innerText",
        "innerHTML",
        "textContent",
        "outerHTML"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 42,
      "question": "Qual é o comportamento do 'event bubbling' no DOM?",
      "options": [
        "Os eventos são propagados do elemento pai para o elemento filho",
        "Os eventos são propagados do elemento filho para o elemento pai",
        "Os eventos são disparados apenas no elemento alvo",
        "Os eventos são cancelados automaticamente"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 43,
      "question": "Qual método do DOM impede a propagação de um evento para elementos pai?",
      "options": [
        "preventDefault()",
        "stopPropagation()",
        "cancelEvent()",
        "stopEvent()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 44,
      "question": "Qual propriedade do DOM retorna o conteúdo de um elemento, incluindo nós de texto e comentários?",
      "options": [
        "innerHTML",
        "textContent",
        "innerText",
        "nodeValue"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 45,
      "question": "Qual método do DOM impede que outros manipuladores de eventos sejam chamados para o mesmo evento?",
      "options": [
        "stopPropagation()",
        "preventDefault()",
        "stopImmediatePropagation()",
        "cancelEvent()"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 46,
      "question": "Qual propriedade do DOM retorna o namespace de um elemento XML ou SVG?",
      "options": [
        "namespaceURI",
        "nodeName",
        "tagName",
        "prefix"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 47,
      "question": "Qual método do DOM permite observar mudanças em um elemento, como adição ou remoção de filhos?",
      "options": [
        "MutationObserver",
        "watchNode()",
        "observeDOM()",
        "changeListener()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 48,
      "question": "Qual propriedade do DOM retorna o conteúdo visível de um elemento, excluindo marcações?",
      "options": [
        "innerHTML",
        "textContent",
        "innerText",
        "nodeValue"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 49,
      "question": "Qual método do DOM dispara um evento personalizado em um elemento?",
      "options": [
        "dispatchEvent()",
        "triggerEvent()",
        "fireEvent()",
        "emitEvent()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 50,
      "question": "Qual propriedade do DOM retorna a profundidade de um nó na árvore do documento?",
      "options": [
        "nodeDepth",
        "depth",
        "nodeLevel",
        "treeDepth"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    }
  ]
}
