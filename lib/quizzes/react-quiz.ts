import { Quiz } from "@/utils/interfaces";

export const reactQuiz: Quiz = {
  id: 9,
  slug: "react",
  title: "React",
  description: "Teste seus conhecimentos sobre React, abrangendo conceitos básicos, intermediários e avançados.",
  timeLimit: 15,
  questions: [
    // Beginner Questions (20)
    {
      id: 1,
      question: "O que é o React?",
      options: [
        "Uma biblioteca JavaScript para construir interfaces de usuário",
        "Um framework backend",
        "Uma linguagem de programação",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 2,
      question: "Qual é o propósito do 'useState' no React?",
      options: [
        "Gerenciar estado em componentes funcionais",
        "Fazer requisições HTTP",
        "Definir rotas",
        "Estilizar componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 3,
      question: "O que é um 'componente' no React?",
      options: [
        "Uma função ou classe que retorna JSX",
        "Um arquivo CSS",
        "Um endpoint de API",
        "Um banco de dados"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 4,
      question: "Como passar dados de um componente pai para um componente filho?",
      options: [
        "Usando props",
        "Usando state",
        "Usando context",
        "Usando hooks"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 5,
      question: "O que é JSX no React?",
      options: [
        "Uma extensão de sintaxe para JavaScript",
        "Uma linguagem de programação",
        "Um banco de dados",
        "Uma ferramenta de teste"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 6,
      question: "Qual é a função do 'key' em listas no React?",
      options: [
        "Ajudar o React a identificar elementos para otimizar renderizações",
        "Definir estilos",
        "Gerenciar estado",
        "Criar eventos"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 7,
      question: "Como criar um componente funcional no React?",
      options: [
        "function MeuComponente() { return <div>Olá</div>; }",
        "class MeuComponente { render() { return <div>Olá</div>; } }",
        "const MeuComponente = () => <div>Olá</div>",
        "Ambas A e C estão corretas"
      ],
      correctAnswer: 3,
      correctLetter: "D"
    },
    {
      id: 8,
      question: "O que é o 'Virtual DOM' no React?",
      options: [
        "Uma representação em memória do DOM real",
        "Um banco de dados",
        "Uma ferramenta de roteamento",
        "Um framework de testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 9,
      question: "Como atualizar o estado em um componente funcional?",
      options: [
        "Usando a função de atualização retornada por useState",
        "Modificando diretamente o estado",
        "Usando this.setState",
        "Usando props"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 10,
      question: "O que acontece quando o estado de um componente muda?",
      options: [
        "O componente é renderizado novamente",
        "O componente é destruído",
        "O componente permanece inalterado",
        "O componente faz uma requisição HTTP"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 11,
      question: "Qual é a diferença entre 'props' e 'state'?",
      options: [
        "Props são imutáveis e passadas de fora, state é mutável e interno",
        "Props são mutáveis, state é imutável",
        "Props e state são idênticos",
        "Props são internos, state é externo"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 12,
      question: "Como lidar com eventos em React?",
      options: [
        "Usando funções de callback como props de eventos",
        "Usando apenas refs",
        "Usando eventos globais",
        "Usando apenas Redux"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 13,
      question: "O que é o 'React Router'?",
      options: [
        "Uma biblioteca para gerenciamento de rotas",
        "Um gerenciador de estado",
        "Um framework de testes",
        "Uma ferramenta de build"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 14,
      question: "Como importar o React em um arquivo?",
      options: [
        "import React from 'react';",
        "import React from 'react-dom';",
        "import React from 'jsx';",
        "import React from 'node';"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 15,
      question: "O que é um 'hook' no React?",
      options: [
        "Uma função que permite usar recursos do React em componentes funcionais",
        "Uma classe para gerenciar estado",
        "Um componente de UI",
        "Uma ferramenta de roteamento"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 16,
      question: "Qual é a maneira correta de inicializar o estado com useState?",
      options: [
        "const [valor, setValor] = useState(inicial);",
        "const [valor, setValor] = state(inicial);",
        "const valor = useState(inicial);",
        "const setValor = useState(inicial);"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 17,
      question: "O que é o 'React.Fragment'?",
      options: [
        "Um componente para agrupar elementos sem adicionar nós extras ao DOM",
        "Um gerenciador de estado",
        "Uma ferramenta de teste",
        "Um componente de roteamento"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 18,
      question: "Como renderizar uma lista em React?",
      options: [
        "Usando map para iterar sobre um array",
        "Usando forEach para iterar sobre um array",
        "Usando um loop for",
        "Usando apenas refs"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 19,
      question: "O que é 'prop drilling' no React?",
      options: [
        "Passar props através de múltiplos níveis de componentes",
        "Passar estado diretamente",
        "Usar apenas context",
        "Usar apenas hooks"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 20,
      question: "Como estilizar componentes no React?",
      options: [
        "Usando CSS, inline styles ou bibliotecas como styled-components",
        "Usando apenas JavaScript",
        "Usando apenas TypeScript",
        "Usando apenas XML"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Intermediate Questions (20)
    {
      id: 21,
      question: "O que é o 'useEffect' no React?",
      options: [
        "Um hook para efeitos colaterais",
        "Um hook para gerenciar estado",
        "Um hook para navegação",
        "Um hook para validação de formulários"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 22,
      question: "Qual é a diferença entre componentes controlados e não controlados?",
      options: [
        "Controlados usam estado, não controlados usam refs",
        "Controlados são mais rápidos",
        "Não controlados requerem Redux",
        "Não há diferença"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 23,
      question: "O que é o 'Context API' no React?",
      options: [
        "Uma maneira de compartilhar dados sem passar props manualmente",
        "Uma ferramenta para estilização",
        "Uma biblioteca para requisições HTTP",
        "Um gerenciador de rotas"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 24,
      question: "Como evitar re-renderizações desnecessárias em React?",
      options: [
        "Usando React.memo e useCallback",
        "Usando mais estados",
        "Usando apenas componentes de classe",
        "Evitando hooks"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 25,
      question: "O que é 'Redux' no contexto do React?",
      options: [
        "Uma biblioteca para gerenciamento de estado global",
        "Uma ferramenta de roteamento",
        "Uma biblioteca de testes",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 26,
      question: "Como lidar com formulários em React?",
      options: [
        "Usando estado para gerenciar valores dos inputs",
        "Usando apenas refs",
        "Usando eventos globais",
        "Usando apenas componentes de classe"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 27,
      question: "O que é o 'useReducer' no React?",
      options: [
        "Um hook para gerenciar estado complexo",
        "Um hook para navegação",
        "Um hook para estilização",
        "Um hook para testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 28,
      question: "Como testar componentes React?",
      options: [
        "Usando bibliotecas como Jest e React Testing Library",
        "Usando apenas console.log",
        "Usando ferramentas de build",
        "Usando apenas TypeScript"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 29,
      question: "O que é 'lazy loading' no React?",
      options: [
        "Carregar componentes sob demanda para melhorar a performance",
        "Carregar todos os componentes de uma vez",
        "Usar mais estados",
        "Evitar o uso de hooks"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 30,
      question: "Como usar 'TypeScript' com React?",
      options: [
        "Definindo tipos para props e estado",
        "Usando apenas JavaScript",
        "Evitando hooks",
        "Usando apenas componentes de classe"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 31,
      question: "O que é o 'useCallback' no React?",
      options: [
        "Um hook para memorizar funções",
        "Um hook para gerenciar estado",
        "Um hook para navegação",
        "Um hook para testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 32,
      question: "Como implementar roteamento com React Router?",
      options: [
        "Usando componentes como BrowserRouter e Route",
        "Usando apenas estados",
        "Usando apenas refs",
        "Usando apenas Redux"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 33,
      question: "O que é o 'useMemo' no React?",
      options: [
        "Um hook para memorizar valores computados",
        "Um hook para gerenciar estado",
        "Um hook para navegação",
        "Um hook para testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 34,
      question: "Como lidar com erros em componentes React?",
      options: [
        "Usando Error Boundaries",
        "Usando apenas try-catch",
        "Usando apenas console.log",
        "Usando apenas Redux"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 35,
      question: "O que é 'React Hooks'?",
      options: [
        "Funções que permitem usar estado e outros recursos em componentes funcionais",
        "Funções para estilização",
        "Funções para requisições HTTP",
        "Funções para roteamento"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 36,
      question: "Como usar o 'useRef' no React?",
      options: [
        "Para criar referências mutáveis ou acessar elementos do DOM",
        "Para gerenciar estado",
        "Para navegação",
        "Para testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 37,
      question: "O que é 'prop types' no React?",
      options: [
        "Uma biblioteca para validar tipos de props",
        "Uma ferramenta de roteamento",
        "Uma biblioteca de testes",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 38,
      question: "Como otimizar a performance de um aplicativo React?",
      options: [
        "Usando React.memo, useCallback e useMemo",
        "Usando mais estados",
        "Usando apenas componentes de classe",
        "Evitando hooks"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 39,
      question: "O que é 'React.StrictMode'?",
      options: [
        "Um componente que ajuda a identificar problemas no desenvolvimento",
        "Um gerenciador de estado",
        "Uma ferramenta de teste",
        "Uma biblioteca de roteamento"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 40,
      question: "Como fazer requisições HTTP em React?",
      options: [
        "Usando fetch ou bibliotecas como axios",
        "Usando apenas estados",
        "Usando apenas refs",
        "Usando apenas Redux"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    // Advanced Questions (10)
    {
      id: 41,
      question: "O que é 'React Fiber'?",
      options: [
        "Uma reimplementação do algoritmo de reconciliação do React",
        "Uma biblioteca de roteamento",
        "Uma ferramenta de teste",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 42,
      question: "Como usar 'React Portals'?",
      options: [
        "Renderizando componentes fora da hierarquia do DOM pai",
        "Criando rotas dinâmicas",
        "Gerenciando estado global",
        "Estilizando componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 43,
      question: "O que é 'server-side rendering' (SSR) no React?",
      options: [
        "Renderizar componentes no servidor antes de enviar ao cliente",
        "Renderizar componentes apenas no cliente",
        "Gerenciar estado global",
        "Testar componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 44,
      question: "Como implementar 'code splitting' no React?",
      options: [
        "Usando React.lazy e Suspense",
        "Usando apenas estados",
        "Usando apenas refs",
        "Usando apenas Redux"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 45,
      question: "O que é 'hydration' no contexto do React SSR?",
      options: [
        "Adicionar interatividade a uma página renderizada no servidor",
        "Gerenciar estado global",
        "Testar componentes",
        "Estilizar componentes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 46,
      question: "Como usar 'custom hooks' no React?",
      options: [
        "Criando funções que encapsulam lógica reutilizável",
        "Criando componentes de classe",
        "Criando rotas dinâmicas",
        "Criando testes"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 47,
      question: "O que é 'React Concurrent Mode'?",
      options: [
        "Um conjunto de recursos para melhorar a experiência do usuário",
        "Uma biblioteca de roteamento",
        "Uma ferramenta de teste",
        "Uma biblioteca de animações"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 48,
      question: "Como otimizar o carregamento inicial de uma aplicação React?",
      options: [
        "Usando code splitting, lazy loading e SSR",
        "Usando mais estados",
        "Usando apenas componentes de classe",
        "Evitando hooks"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 49,
      question: "O que é 'React Suspense'?",
      options: [
        "Um componente para lidar com carregamento assíncrono",
        "Um gerenciador de estado",
        "Uma ferramenta de teste",
        "Uma biblioteca de roteamento"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    },
    {
      id: 50,
      question: "Como integrar Web Workers com React?",
      options: [
        "Usando workers para executar tarefas pesadas fora da thread principal",
        "Usando apenas estados",
        "Usando apenas refs",
        "Usando apenas Redux"
      ],
      correctAnswer: 0,
      correctLetter: "A"
    }
  ]
}