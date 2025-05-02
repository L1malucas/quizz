import { Quiz } from "@/utils/interfaces";

export const mongodbQuiz: Quiz =   {
  id: 5,
  slug: "mongodb",
  title: "MongoDB",
  description: "Teste seus conhecimentos sobre conceitos, operações e melhores práticas do MongoDB.",
  timeLimit: 12,
  questions: [
    {
      "id": 1,
      "question": "Qual é o modelo de armazenamento utilizado pelo MongoDB?",
      "options": [
        "Relacional (tabelas e linhas)",
        "Orientado a documentos (BSON)",
        "Chave-valor simples",
        "Orientado a colunas"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "question": "Qual é o formato de dados usado pelo MongoDB para armazenar documentos?",
      "options": [
        "JSON",
        "BSON",
        "XML",
        "CSV"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 3,
      "question": "Qual comando é usado para criar uma nova coleção no MongoDB?",
      "options": [
        "db.createCollection()",
        "db.newCollection()",
        "db.addCollection()",
        "db.makeCollection()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 4,
      "question": "Qual método é usado para inserir um único documento em uma coleção no MongoDB?",
      "options": [
        "insertOne()",
        "addOne()",
        "insert()",
        "save()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 5,
      "question": "Qual comando é usado para listar todas as coleções em um banco de dados MongoDB?",
      "options": [
        "db.getCollections()",
        "db.showCollections()",
        "db.listCollections()",
        "db.collections()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 6,
      "question": "Qual método é usado para buscar todos os documentos em uma coleção?",
      "options": [
        "find()",
        "select()",
        "get()",
        "query()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 7,
      "question": "Qual operador MongoDB é usado para comparar igualdade em uma consulta?",
      "options": [
        "$eq",
        "$ne",
        "$gt",
        "$lt"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 8,
      "question": "Qual método é usado para excluir um único documento em uma coleção?",
      "options": [
        "deleteOne()",
        "removeOne()",
        "dropOne()",
        "eraseOne()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 9,
      "question": "Qual comando é usado para selecionar um banco de dados no MongoDB?",
      "options": [
        "use",
        "select",
        "switch",
        "open"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 10,
      "question": "Qual método é usado para atualizar um único documento em uma coleção?",
      "options": [
        "updateOne()",
        "modifyOne()",
        "setOne()",
        "changeOne()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 11,
      "question": "Qual operador MongoDB é usado para combinar condições com AND lógico?",
      "options": [
        "$or",
        "$and",
        "$nor",
        "$not"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 12,
      "question": "Qual método é usado para inserir múltiplos documentos em uma coleção?",
      "options": [
        "insertMany()",
        "addMany()",
        "insert()",
        "bulkInsert()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 13,
      "question": "Qual comando é usado para excluir uma coleção no MongoDB?",
      "options": [
        "db.dropCollection()",
        "db.deleteCollection()",
        "db.removeCollection()",
        "db.eraseCollection()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 14,
      "question": "Qual operador MongoDB é usado para verificar se um valor é maior que outro?",
      "options": [
        "$eq",
        "$gt",
        "$lt",
        "$ne"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 15,
      "question": "Qual método MongoDB retorna apenas o primeiro documento que corresponde a uma consulta?",
      "options": [
        "findOne()",
        "getOne()",
        "selectOne()",
        "first()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 16,
      "question": "Qual operador MongoDB é usado para verificar se um campo existe em um documento?",
      "options": [
        "$exists",
        "$in",
        "$type",
        "$all"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 17,
      "question": "Qual comando é usado para excluir um banco de dados no MongoDB?",
      "options": [
        "db.dropDatabase()",
        "db.deleteDatabase()",
        "db.removeDatabase()",
        "db.eraseDatabase()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 18,
      "question": "Qual operador MongoDB é usado para combinar condições com OR lógico?",
      "options": [
        "$and",
        "$or",
        "$nor",
        "$not"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 19,
      "question": "Qual método é usado para contar o número de documentos em uma coleção?",
      "options": [
        "count()",
        "countDocuments()",
        "size()",
        "length()"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 20,
      "question": "Qual operador MongoDB é usado para atualizar um campo com um novo valor?",
      "options": [
        "$set",
        "$inc",
        "$push",
        "$unset"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    // Intermediate Questions (20)
    {
      "id": 21,
      "question": "Qual operador MongoDB é usado para incrementar o valor de um campo numérico?",
      "options": [
        "$set",
        "$inc",
        "$push",
        "$add"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 22,
      "question": "Qual método MongoDB é usado para atualizar múltiplos documentos em uma coleção?",
      "options": [
        "updateMany()",
        "modifyMany()",
        "setMany()",
        "changeMany()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 23,
      "question": "Qual operador MongoDB é usado para adicionar um elemento a um array em um documento?",
      "options": [
        "$set",
        "$push",
        "$add",
        "$append"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 24,
      "question": "Qual método MongoDB é usado para ordenar os resultados de uma consulta?",
      "options": [
        "sort()",
        "orderBy()",
        "arrange()",
        "rank()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 25,
      "question": "Qual operador MongoDB é usado para buscar documentos onde um campo está em uma lista de valores?",
      "options": [
        "$exists",
        "$in",
        "$all",
        "$type"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 26,
      "question": "Qual método MongoDB é usado para limitar o número de documentos retornados em uma consulta?",
      "options": [
        "limit()",
        "restrict()",
        "cap()",
        "max()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 27,
      "question": "Qual operador MongoDB é usado para remover um elemento de um array em um documento?",
      "options": [
        "$pop",
        "$pull",
        "$remove",
        "$delete"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 28,
      "question": "Qual método MongoDB é usado para pular um número específico de documentos em uma consulta?",
      "options": [
        "skip()",
        "offset()",
        "jump()",
        "bypass()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 29,
      "question": "Qual operador MongoDB é usado para atualizar um documento se ele existir ou inseri-lo se não existir?",
      "options": [
        "$set",
        "$upsert",
        "$update",
        "$replace"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 30,
      "question": "Qual método MongoDB é usado para realizar agregações complexas em coleções?",
      "options": [
        "aggregate()",
        "group()",
        "combine()",
        "merge()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 31,
      "question": "Qual operador MongoDB é usado para buscar documentos com base em uma expressão regular?",
      "options": [
        "$regex",
        "$match",
        "$expr",
        "$text"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 32,
      "question": "Qual operador MongoDB é usado para projetar apenas campos específicos em uma consulta?",
      "options": [
        "$select",
        "$project",
        "$fields",
        "$include"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 33,
      "question": "Qual método MongoDB é usado para excluir múltiplos documentos em uma coleção?",
      "options": [
        "deleteMany()",
        "removeMany()",
        "dropMany()",
        "eraseMany()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 34,
      "question": "Qual operador MongoDB é usado para agrupar documentos com base em um campo?",
      "options": [
        "$group",
        "$sort",
        "$match",
        "$count"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 35,
      "question": "Qual operador MongoDB é usado para filtrar documentos em uma pipeline de agregação?",
      "options": [
        "$project",
        "$match",
        "$group",
        "$sort"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 36,
      "question": "Qual método MongoDB é usado para criar um índice em uma coleção?",
      "options": [
        "createIndex()",
        "addIndex()",
        "index()",
        "makeIndex()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 37,
      "question": "Qual operador MongoDB é usado para buscar documentos com base em texto?",
      "options": [
        "$regex",
        "$text",
        "$search",
        "$match"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 38,
      "question": "Qual operador MongoDB é usado para realizar operações em arrays, como somar seus elementos?",
      "options": [
        "$sum",
        "$avg",
        "$max",
        "$min"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 39,
      "question": "Qual método MongoDB é usado para substituir um documento por outro?",
      "options": [
        "replaceOne()",
        "updateOne()",
        "setOne()",
        "swapOne()"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 40,
      "question": "Qual operador MongoDB é usado para renomear um campo em um documento?",
      "options": [
        "$rename",
        "$set",
        "$unset",
        "$change"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    // Advanced Questions (10)
    {
      "id": 41,
      "question": "Qual operador MongoDB é usado para realizar junções entre coleções em uma pipeline de agregação?",
      "options": [
        "$join",
        "$lookup",
        "$merge",
        "$union"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 42,
      "question": "Qual recurso MongoDB é usado para garantir consistência em transações distribuídas?",
      "options": [
        "Sharding",
        "Replication",
        "Transactions",
        "Indexing"
      ],
      "correctAnswer": 2,
      "correctLetter": "C"
    },
    {
      "id": 43,
      "question": "Qual operador MongoDB é usado para combinar documentos de múltiplas coleções em uma única saída?",
      "options": [
        "$lookup",
        "$unionWith",
        "$merge",
        "$group"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 44,
      "question": "Qual tipo de índice MongoDB é usado para consultas geoespaciais?",
      "options": [
        "Text Index",
        "2dsphere Index",
        "Hashed Index",
        "Compound Index"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 45,
      "question": "Qual operador MongoDB é usado para aplicar uma função JavaScript personalizada em uma pipeline de agregação?",
      "options": [
        "$function",
        "$expr",
        "$script",
        "$custom"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 46,
      "question": "Qual recurso MongoDB divide grandes coleções em fragmentos distribuídos entre servidores?",
      "options": [
        "Replication",
        "Sharding",
        "Partitioning",
        "Clustering"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    },
    {
      "id": 47,
      "question": "Qual operador MongoDB é usado para escrever os resultados de uma pipeline de agregação em uma nova coleção?",
      "options": [
        "$out",
        "$write",
        "$save",
        "$export"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 48,
      "question": "Qual tipo de índice MongoDB é usado para otimizar consultas em campos com valores únicos?",
      "options": [
        "Unique Index",
        "Text Index",
        "Hashed Index",
        "Sparse Index"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 49,
      "question": "Qual operador MongoDB é usado para realizar cálculos condicionais em uma pipeline de agregação?",
      "options": [
        "$cond",
        "$if",
        "$switch",
        "$case"
      ],
      "correctAnswer": 0,
      "correctLetter": "A"
    },
    {
      "id": 50,
      "question": "Qual recurso MongoDB permite a execução de operações em múltiplos documentos de forma atômica?",
      "options": [
        "Replication",
        "Transactions",
        "Sharding",
        "Indexing"
      ],
      "correctAnswer": 1,
      "correctLetter": "B"
    }
  ]
}
