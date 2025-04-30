import { Quiz } from "@/utils/interfaces";

export const cssQuiz: Quiz = {
  id: 1,
  slug: "css",
  title: "CSS",
  description: "Teste seus conhecimentos em conceitos, operações e melhores práticas do CSS.",
  timeLimit: 12,
  questions: 
  [
    // Basic Questions (20)
    {
      "id": 1,
      "question": "Qual propriedade CSS define a cor do texto?",
      "options": [
        "background-color",
        "color",
        "font-color",
        "text-color"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "question": "Qual propriedade CSS controla o tamanho da fonte?",
      "options": [
        "font-size",
        "text-size",
        "font-weight",
        "size"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 3,
      "question": "Qual propriedade CSS define o espaçamento interno de um elemento?",
      "options": [
        "margin",
        "padding",
        "border",
        "spacing"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 4,
      "question": "Qual propriedade CSS define o espaçamento externo entre elementos?",
      "options": [
        "padding",
        "margin",
        "border",
        "outline"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 5,
      "question": "Qual propriedade CSS alinha texto horizontalmente?",
      "options": [
        "text-align",
        "vertical-align",
        "align",
        "justify"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 6,
      "question": "Qual propriedade CSS define a espessura da borda de um elemento?",
      "options": [
        "border-style",
        "border-width",
        "border-color",
        "border"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 7,
      "question": "Qual propriedade CSS define a fonte de um texto?",
      "options": [
        "font-family",
        "font-style",
        "font-weight",
        "font"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 8,
      "question": "Qual valor da propriedade CSS 'display' torna um elemento invisível?",
      "options": [
        "block",
        "inline",
        "none",
        "hidden"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 9,
      "question": "Qual propriedade CSS define a cor de fundo de um elemento?",
      "options": [
        "color",
        "background-color",
        "fill",
        "bg-color"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "question": "Qual propriedade CSS controla a largura de um elemento?",
      "options": [
        "width",
        "height",
        "size",
        "length"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 11,
      "question": "Qual propriedade CSS define a altura de um elemento?",
      "options": [
        "width",
        "height",
        "size",
        "length"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 12,
      "question": "Qual propriedade CSS define o estilo da borda de um elemento?",
      "options": [
        "border-width",
        "border-style",
        "border-color",
        "border"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 13,
      "question": "Qual propriedade CSS define o peso (negrito) de uma fonte?",
      "options": [
        "font-size",
        "font-weight",
        "font-style",
        "font-family"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "question": "Qual propriedade CSS centraliza um elemento bloco horizontalmente?",
      "options": [
        "text-align",
        "margin: auto",
        "align: center",
        "center"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 15,
      "question": "Qual propriedade CSS define a visibilidade de um elemento sem afetar o layout?",
      "options": [
        "display",
        "visibility",
        "opacity",
        "hidden"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 16,
      "question": "Qual propriedade CSS define o raio da borda de um elemento?",
      "options": [
        "border-radius",
        "border-width",
        "border-style",
        "corner"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 17,
      "question": "Qual propriedade CSS define o tipo de cursor exibido ao passar o mouse sobre um elemento?",
      "options": [
        "cursor",
        "pointer",
        "hover",
        "mouse"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 18,
      "question": "Qual propriedade CSS define o alinhamento vertical de elementos inline?",
      "options": [
        "text-align",
        "vertical-align",
        "align",
        "line-height"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 19,
      "question": "Qual propriedade CSS define a cor da borda de um elemento?",
      "options": [
        "border-style",
        "border-color",
        "border-width",
        "color"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 20,
      "question": "Qual propriedade CSS define o espaçamento entre linhas de texto?",
      "options": [
        "line-height",
        "text-spacing",
        "letter-spacing",
        "word-spacing"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    // Intermediate Questions (20)
    {
      "id": 21,
      "question": "Qual propriedade CSS é usada para criar um layout flexível?",
      "options": [
        "grid",
        "flex",
        "block",
        "inline"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 22,
      "question": "Qual propriedade CSS define a opacidade de um elemento?",
      "options": [
        "visibility",
        "opacity",
        "display",
        "filter"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 23,
      "question": "Qual pseudo-classe CSS é usada para estilizar um elemento quando o mouse passa por cima?",
      "options": [
        ":active",
        ":hover",
        ":focus",
        ":visited"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 24,
      "question": "Qual propriedade CSS é usada para criar um layout em grade?",
      "options": [
        "flex",
        "grid",
        "table",
        "block"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 25,
      "question": "Qual propriedade CSS define a sombra de um elemento?",
      "options": [
        "box-shadow",
        "text-shadow",
        "shadow",
        "outline"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 26,
      "question": "Qual propriedade CSS é usada para definir a transição suave de uma propriedade ao longo do tempo?",
      "options": [
        "animation",
        "transition",
        "transform",
        "keyframe"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 27,
      "question": "Qual propriedade CSS define a ordem de empilhamento de elementos?",
      "options": [
        "position",
        "z-index",
        "stack-order",
        "layer"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 28,
      "question": "Qual pseudo-elemento CSS é usado para estilizar a primeira linha de um texto?",
      "options": [
        "::first-letter",
        "::first-line",
        "::before",
        "::after"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 29,
      "question": "Qual propriedade CSS é usada para transformar elementos, como rotacionar ou escalar?",
      "options": [
        "transition",
        "transform",
        "animation",
        "scale"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 30,
      "question": "Qual propriedade CSS define o comportamento de um elemento quando seu conteúdo excede suas dimensões?",
      "options": [
        "overflow",
        "clip",
        "scroll",
        "hidden"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 31,
      "question": "Qual propriedade CSS define a direção dos itens em um contêiner flexível?",
      "options": [
        "flex-direction",
        "flex-wrap",
        "align-items",
        "justify-content"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 32,
      "question": "Qual propriedade CSS alinha itens ao longo do eixo principal em um contêiner flexível?",
      "options": [
        "align-items",
        "justify-content",
        "flex-align",
        "align-content"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 33,
      "question": "Qual propriedade CSS define o espaçamento entre as células de uma grade?",
      "options": [
        "grid-gap",
        "grid-spacing",
        "gap",
        "margin"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 34,
      "question": "Qual pseudo-classe CSS é usada para estilizar um elemento quando ele está focado?",
      "options": [
        ":hover",
        ":focus",
        ":active",
        ":selected"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 35,
      "question": "Qual propriedade CSS define a sombra de um texto?",
      "options": [
        "box-shadow",
        "text-shadow",
        "shadow",
        "outline"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 36,
      "question": "Qual propriedade CSS define a posição de um elemento em relação ao seu contêiner pai?",
      "options": [
        "position",
        "display",
        "float",
        "align"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 37,
      "question": "Qual valor da propriedade CSS 'position' fixa um elemento em relação à janela do navegador?",
      "options": [
        "absolute",
        "relative",
        "fixed",
        "sticky"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 38,
      "question": "Qual propriedade CSS define o alinhamento de itens ao longo do eixo secundário em um contêiner flexível?",
      "options": [
        "justify-content",
        "align-items",
        "flex-align",
        "align-content"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 39,
      "question": "Qual propriedade CSS define o espaçamento entre palavras em um texto?",
      "options": [
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-spacing"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 40,
      "question": "Qual propriedade CSS define a largura máxima de um elemento?",
      "options": [
        "width",
        "max-width",
        "min-width",
        "size"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    // Advanced Questions (10)
    {
      "id": 41,
      "question": "Qual técnica CSS é usada para criar animações complexas com múltiplos estágios?",
      "options": [
        "transition",
        "@keyframes",
        "transform",
        "animation-delay"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 42,
      "question": "Qual propriedade CSS permite que o conteúdo de um elemento exceda suas dimensões sem barras de rolagem?",
      "options": [
        "overflow: hidden",
        "overflow: visible",
        "overflow: auto",
        "overflow: scroll"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 43,
      "question": "Qual propriedade CSS é usada para definir a prioridade de uma regra em relação a outras?",
      "options": [
        "!important",
        "specificity",
        "cascade",
        "priority"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 44,
      "question": "Qual propriedade CSS permite criar layouts responsivos com base em proporções de tela?",
      "options": [
        "rem",
        "vw",
        "px",
        "%"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 45,
      "question": "Qual propriedade CSS define a área de corte de um elemento?",
      "options": [
        "clip",
        "clip-path",
        "overflow",
        "mask"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 46,
      "question": "Qual propriedade CSS é usada para aplicar filtros visuais, como desfoque ou saturação?",
      "options": [
        "filter",
        "effect",
        "transform",
        "blend"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 47,
      "question": "Qual propriedade CSS define como o conteúdo de um contêiner de grade é distribuído no espaço restante?",
      "options": [
        "grid-template",
        "grid-auto-flow",
        "justify-content",
        "align-content"
      ],
      "correctAnswer": 3,
      "correctLetter": "D"
    },
    {
      "id": 48,
      "question": "Qual propriedade CSS permite combinar várias camadas de fundo em um elemento?",
      "options": [
        "background",
        "background-layer",
        "background-blend-mode",
        "background-image"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 49,
      "question": "Qual propriedade CSS define a perspectiva para transformações 3D?",
      "options": [
        "transform",
        "perspective",
        "rotate",
        "depth"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 50,
      "question": "Qual propriedade CSS é usada para definir a orientação de um contêiner flexível em relação à escrita?",
      "options": [
        "flex-direction",
        "writing-mode",
        "direction",
        "text-orientation"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    }
  ]
}
