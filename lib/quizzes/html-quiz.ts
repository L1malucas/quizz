import { Quiz } from "@/utils/interfaces";

export const htmlQuiz: Quiz = {
  id: 2,
  slug: "html",
  title: "HTML",
  description: "Teste seus conhecimentos sobre conceitos, operações e melhores práticas do Html.",
  timeLimit: 12,
  questions:[
    {
      "id": 1,
      "question": "Qual tag HTML é usada para criar um parágrafo?",
      "options": [
        "<div>",
        "<p>",
        "<span>",
        "<section>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "question": "Qual tag HTML é usada para criar um título principal?",
      "options": [
        "<h1>",
        "<title>",
        "<header>",
        "<h6>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 3,
      "question": "Qual tag HTML é usada para inserir uma imagem?",
      "options": [
        "<img>",
        "<picture>",
        "<figure>",
        "<canvas>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 4,
      "question": "Qual atributo HTML define o texto alternativo de uma imagem?",
      "options": [
        "src",
        "alt",
        "title",
        "href"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 5,
      "question": "Qual tag HTML é usada para criar um link?",
      "options": [
        "<a>",
        "<link>",
        "<href>",
        "<url>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 6,
      "question": "Qual atributo HTML especifica o destino de um link?",
      "options": [
        "src",
        "href",
        "target",
        "rel"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 7,
      "question": "Qual tag HTML é usada para criar uma lista não ordenada?",
      "options": [
        "<ol>",
        "<ul>",
        "<li>",
        "<dl>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 8,
      "question": "Qual tag HTML é usada para criar uma lista ordenada?",
      "options": [
        "<ul>",
        "<ol>",
        "<li>",
        "<dl>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 9,
      "question": "Qual tag HTML é usada para definir o título de uma página exibido na aba do navegador?",
      "options": [
        "<head>",
        "<title>",
        "<meta>",
        "<h1>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "question": "Qual tag HTML é usada para agrupar elementos em um formulário?",
      "options": [
        "<div>",
        "<form>",
        "<section>",
        "<input>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 11,
      "question": "Qual tag HTML é usada para criar um campo de entrada de texto?",
      "options": [
        "<input>",
        "<textarea>",
        "<button>",
        "<label>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 12,
      "question": "Qual atributo HTML é usado para tornar um campo de formulário obrigatório?",
      "options": [
        "required",
        "mandatory",
        "validate",
        "obligatory"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 13,
      "question": "Qual tag HTML é usada para criar uma linha horizontal?",
      "options": [
        "<br>",
        "<hr>",
        "<line>",
        "<div>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "question": "Qual tag HTML é usada para inserir uma quebra de linha?",
      "options": [
        "<hr>",
        "<br>",
        "<nl>",
        "<break>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 15,
      "question": "Qual tag HTML define a estrutura principal de um documento?",
      "options": [
        "<body>",
        "<html>",
        "<head>",
        "<main>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 16,
      "question": "Qual tag HTML é usada para incorporar um arquivo de áudio?",
      "options": [
        "<video>",
        "<audio>",
        "<media>",
        "<sound>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 17,
      "question": "Qual tag HTML é usada para definir uma tabela?",
      "options": [
        "<table>",
        "<grid>",
        "<tr>",
        "<td>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 18,
      "question": "Qual tag HTML é usada para definir uma célula em uma tabela?",
      "options": [
        "<tr>",
        "<td>",
        "<th>",
        "<table>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 19,
      "question": "Qual atributo HTML define um identificador único para um elemento?",
      "options": [
        "class",
        "id",
        "name",
        "style"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 20,
      "question": "Qual tag HTML é usada para definir metadados de um documento?",
      "options": [
        "<head>",
        "<meta>",
        "<title>",
        "<link>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    // Intermediate Questions (20)
    {
      "id": 21,
      "question": "Qual atributo HTML5 é usado para especificar o tipo de entrada em um campo <input>?",
      "options": [
        "type",
        "value",
        "name",
        "data-type"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 22,
      "question": "Qual tag HTML5 é usada para incorporar conteúdo multimídia, como vídeos?",
      "options": [
        "<audio>",
        "<video>",
        "<embed>",
        "<media>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 23,
      "question": "Qual atributo HTML define estilos inline para um elemento?",
      "options": [
        "class",
        "style",
        "id",
        "css"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 24,
      "question": "Qual tag HTML5 é usada para representar um conteúdo independente, como um artigo de blog?",
      "options": [
        "<section>",
        "<article>",
        "<aside>",
        "<div>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 25,
      "question": "Qual atributo HTML é usado para associar um rótulo a um campo de formulário?",
      "options": [
        "for",
        "id",
        "name",
        "label"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 26,
      "question": "Qual tag HTML5 é usada para representar uma barra de navegação?",
      "options": [
        "<header>",
        "<nav>",
        "<menu>",
        "<footer>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 27,
      "question": "Qual atributo HTML especifica onde abrir o destino de um link?",
      "options": [
        "href",
        "target",
        "rel",
        "type"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 28,
      "question": "Qual tag HTML é usada para definir uma área de cabeçalho em uma página?",
      "options": [
        "<head>",
        "<header>",
        "<h1>",
        "<top>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 29,
      "question": "Qual atributo HTML é usado para pré-carregar recursos, como fontes ou scripts?",
      "options": [
        "preload",
        "defer",
        "async",
        "rel"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 30,
      "question": "Qual tag HTML5 é usada para representar conteúdo relacionado, como uma barra lateral?",
      "options": [
        "<section>",
        "<aside>",
        "<article>",
        "<div>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 31,
      "question": "Qual atributo HTML define o idioma principal de um documento?",
      "options": [
        "lang",
        "locale",
        "language",
        "dir"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 32,
      "question": "Qual tag HTML é usada para incorporar conteúdo externo, como um PDF?",
      "options": [
        "<iframe>",
        "<embed>",
        "<object>",
        "<include>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 33,
      "question": "Qual atributo HTML é usado para fornecer uma dica de texto em um campo de formulário?",
      "options": [
        "value",
        "placeholder",
        "hint",
        "title"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 34,
      "question": "Qual tag HTML5 é usada para criar uma área de rodapé em uma página?",
      "options": [
        "<footer>",
        "<bottom>",
        "<end>",
        "<base>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 35,
      "question": "Qual atributo HTML é usado para especificar o método de envio de um formulário?",
      "options": [
        "action",
        "method",
        "type",
        "submit"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 36,
      "question": "Qual tag HTML é usada para definir uma legenda para uma tabela?",
      "options": [
        "<caption>",
        "<title>",
        "<label>",
        "<header>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 37,
      "question": "Qual atributo HTML é usado para desabilitar um campo de formulário?",
      "options": [
        "readonly",
        "disabled",
        "locked",
        "static"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 38,
      "question": "Qual tag HTML é usada para definir uma lista de descrição?",
      "options": [
        "<ul>",
        "<dl>",
        "<ol>",
        "<list>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 39,
      "question": "Qual atributo HTML especifica o conjunto de caracteres de um documento?",
      "options": [
        "charset",
        "encoding",
        "meta",
        "type"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 40,
      "question": "Qual tag HTML é usada para agrupar elementos de cabeçalho em uma tabela?",
      "options": [
        "<thead>",
        "<tbody>",
        "<tfoot>",
        "<tr>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    // Advanced Questions (10)
    {
      "id": 41,
      "question": "Qual atributo HTML5 é usado para otimizar o carregamento de imagens, permitindo que o navegador decida quando carregá-las?",
      "options": [
        "defer",
        "async",
        "loading",
        "preload"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 42,
      "question": "Qual tag HTML5 é usada para fornecer uma representação gráfica, como um gráfico vetorial?",
      "options": [
        "<canvas>",
        "<svg>",
        "<img>",
        "<figure>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 43,
      "question": "Qual atributo HTML5 permite que um elemento seja editável pelo usuário?",
      "options": [
        "editable",
        "contenteditable",
        "draggable",
        "resizable"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 44,
      "question": "Qual tag HTML5 é usada para definir dados que podem ser processados por máquinas?",
      "options": [
        "<data>",
        "<meta>",
        "<info>",
        "<machine>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 45,
      "question": "Qual atributo HTML5 é usado para sugerir opções de preenchimento automático em um campo de formulário?",
      "options": [
        "autocomplete",
        "suggestions",
        "list",
        "datalist"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 46,
      "question": "Qual tag HTML5 é usada para agrupar opções em um menu suspenso?",
      "options": [
        "<optgroup>",
        "<option>",
        "<select>",
        "<group>"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 47,
      "question": "Qual atributo HTML5 é usado para definir a prioridade de carregamento de recursos?",
      "options": [
        "importance",
        "priority",
        "fetchpriority",
        "load"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 48,
      "question": "Qual tag HTML5 é usada para representar o progresso de uma tarefa, como um download?",
      "options": [
        "<meter>",
        "<progress>",
        "<status>",
        "<bar>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 49,
      "question": "Qual atributo HTML5 permite que um elemento seja arrastado pelo usuário?",
      "options": [
        "drag",
        "movable",
        "draggable",
        "resizable"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 50,
      "question": "Qual tag HTML5 é usada para fornecer uma legenda para um elemento de mídia, como um vídeo?",
      "options": [
        "<caption>",
        "<track>",
        "<subtitle>",
        "<legend>"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    }
  ]
}
