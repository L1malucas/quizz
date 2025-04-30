import { Quiz } from "@/utils/interfaces";

export const sqlQuiz: Quiz =   {
  id: 1,
  slug: "sql",
  title: "SQL Quiz",
  description: "Teste seus conhecimentos sobre conceitos, operações e melhores práticas do SQL.",
  timeLimit: 12,
  questions: [
  {
    "id": 1,
    "question": "Qual comando SQL é usado para selecionar dados de uma tabela?",
    "options": [
      "INSERT",
      "SELECT",
      "UPDATE",
      "DELETE"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 2,
    "question": "Qual comando SQL é usado para inserir novos registros em uma tabela?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 3,
    "question": "Qual comando SQL é usado para atualizar registros em uma tabela?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "correctAnswer": 2,
    "correctLetter": "C"
  },
  {
    "id": 4,
    "question": "Qual comando SQL é usado para excluir registros de uma tabela?",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "correctAnswer": 3,
    "correctLetter": "D"
  },
  {
    "id": 5,
    "question": "Qual cláusula SQL é usada para filtrar registros em uma consulta?",
    "options": [
      "WHERE",
      "FROM",
      "ORDER BY",
      "GROUP BY"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 6,
    "question": "Qual cláusula SQL é usada para ordenar os resultados de uma consulta?",
    "options": [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "HAVING"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 7,
    "question": "Qual operador SQL é usado para comparar igualdade?",
    "options": [
      "!=",
      "=",
      ">",
      "<"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 8,
    "question": "Qual comando SQL é usado para criar uma nova tabela?",
    "options": [
      "CREATE TABLE",
      "NEW TABLE",
      "ADD TABLE",
      "MAKE TABLE"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 9,
    "question": "Qual cláusula SQL é usada para combinar registros de duas tabelas?",
    "options": [
      "WHERE",
      "JOIN",
      "FROM",
      "GROUP BY"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 10,
    "question": "Qual operador SQL é usado para combinar condições com AND lógico?",
    "options": [
      "OR",
      "AND",
      "NOT",
      "XOR"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 11,
    "question": "Qual comando SQL é usado para excluir uma tabela?",
    "options": [
      "DELETE TABLE",
      "DROP TABLE",
      "REMOVE TABLE",
      "ERASE TABLE"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 12,
    "question": "Qual função SQL retorna o número de registros em uma tabela?",
    "options": [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MAX()"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 13,
    "question": "Qual operador SQL é usado para buscar valores em uma lista?",
    "options": [
      "LIKE",
      "IN",
      "BETWEEN",
      "EXISTS"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 14,
    "question": "Qual cláusula SQL é usada para agrupar registros com base em um campo?",
    "options": [
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "HAVING"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 15,
    "question": "Qual operador SQL é usado para buscar valores em um intervalo?",
    "options": [
      "IN",
      "LIKE",
      "BETWEEN",
      "EXISTS"
    ],
    "correctAnswer": 2,
    "correctLetter": "C"
  },
  {
    "id": 16,
    "question": "Qual função SQL retorna o valor máximo de uma coluna?",
    "options": [
      "MIN()",
      "MAX()",
      "AVG()",
      "SUM()"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 17,
    "question": "Qual operador SQL é usado para combinar condições com OR lógico?",
    "options": [
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 18,
    "question": "Qual comando SQL é usado para modificar a estrutura de uma tabela?",
    "options": [
      "ALTER TABLE",
      "MODIFY TABLE",
      "CHANGE TABLE",
      "UPDATE TABLE"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 19,
    "question": "Qual operador SQL é usado para buscar padrões em uma string?",
    "options": [
      "IN",
      "LIKE",
      "BETWEEN",
      "MATCH"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 20,
    "question": "Qual cláusula SQL é usada para filtrar grupos em uma consulta com GROUP BY?",
    "options": [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "GROUP BY"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  // Intermediate Questions (20)
  {
    "id": 21,
    "question": "Qual tipo de JOIN SQL retorna apenas os registros que têm correspondência em ambas as tabelas?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    "correctAnswer": 2,
    "correctLetter": "C"
  },
  {
    "id": 22,
    "question": "Qual comando SQL é usado para criar um índice em uma tabela?",
    "options": [
      "CREATE INDEX",
      "ADD INDEX",
      "MAKE INDEX",
      "SET INDEX"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 23,
    "question": "Qual função SQL retorna a média dos valores em uma coluna?",
    "options": [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MAX()"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 24,
    "question": "Qual tipo de JOIN SQL retorna todos os registros da tabela à esquerda e os correspondentes da tabela à direita?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 25,
    "question": "Qual comando SQL é usado para conceder permissões a um usuário?",
    "options": [
      "GRANT",
      "ALLOW",
      "PERMIT",
      "ENABLE"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 26,
    "question": "Qual operador SQL é usado para combinar os resultados de duas consultas, eliminando duplicatas?",
    "options": [
      "UNION",
      "INTERSECT",
      "EXCEPT",
      "MERGE"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 27,
    "question": "Qual função SQL retorna o valor mínimo de uma coluna?",
    "options": [
      "MIN()",
      "MAX()",
      "AVG()",
      "SUM()"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 28,
    "question": "Qual comando SQL é usado para revogar permissões de um usuário?",
    "options": [
      "REVOKE",
      "DENY",
      "REMOVE",
      "CANCEL"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 29,
    "question": "Qual cláusula SQL é usada para limitar o número de linhas retornadas em uma consulta (em MySQL)?",
    "options": [
      "LIMIT",
      "TOP",
      "ROWNUM",
      "FETCH"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 30,
    "question": "Qual tipo de JOIN SQL retorna todos os registros de ambas as tabelas, com NULLs onde não há correspondência?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    "correctAnswer": 3,
    "correctLetter": "D"
  },
  {
    "id": 31,
    "question": "Qual comando SQL é usado para criar uma visão (view)?",
    "options": [
      "CREATE VIEW",
      "MAKE VIEW",
      "ADD VIEW",
      "SET VIEW"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 32,
    "question": "Qual operador SQL é usado para verificar a existência de registros em uma subconsulta?",
    "options": [
      "IN",
      "EXISTS",
      "LIKE",
      "BETWEEN"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 33,
    "question": "Qual função SQL concatena strings de uma coluna?",
    "options": [
      "CONCAT()",
      "JOIN()",
      "MERGE()",
      "COMBINE()"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 34,
    "question": "Qual comando SQL é usado para adicionar uma nova coluna a uma tabela?",
    "options": [
      "ALTER TABLE ADD",
      "MODIFY TABLE ADD",
      "CHANGE TABLE ADD",
      "UPDATE TABLE ADD"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 35,
    "question": "Qual operador SQL é usado para combinar os resultados de duas consultas, incluindo duplicatas?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 36,
    "question": "Qual função SQL retorna a soma dos valores em uma coluna?",
    "options": [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MAX()"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 37,
    "question": "Qual comando SQL é usado para excluir um índice?",
    "options": [
      "DROP INDEX",
      "REMOVE INDEX",
      "DELETE INDEX",
      "ERASE INDEX"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 38,
    "question": "Qual tipo de restrição SQL garante que os valores em uma coluna sejam únicos?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    "correctAnswer": 2,
    "correctLetter": "C"
  },
  {
    "id": 39,
    "question": "Qual comando SQL é usado para iniciar uma transação?",
    "options": [
      "BEGIN TRANSACTION",
      "START TRANSACTION",
      "INIT TRANSACTION",
      "OPEN TRANSACTION"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 40,
    "question": "Qual função SQL retorna o comprimento de uma string?",
    "options": [
      "LEN()",
      "LENGTH()",
      "SIZE()",
      "COUNT()"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  // Advanced Questions (10)
  {
    "id": 41,
    "question": "Qual tipo de restrição SQL é usada para vincular uma coluna a uma chave primária em outra tabela?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 42,
    "question": "Qual comando SQL é usado para confirmar uma transação?",
    "options": [
      "COMMIT",
      "SAVE",
      "APPLY",
      "CONFIRM"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 43,
    "question": "Qual comando SQL é usado para desfazer uma transação?",
    "options": [
      "ROLLBACK",
      "UNDO",
      "CANCEL",
      "REVERT"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 44,
    "question": "Qual tipo de índice SQL melhora o desempenho de consultas em colunas frequentemente pesquisadas?",
    "options": [
      "Clustered Index",
      "Non-Clustered Index",
      "Unique Index",
      "Full-Text Index"
    ],
    "correctAnswer": 1,
    "correctLetter": "B"
  },
  {
    "id": 45,
    "question": "Qual comando SQL é usado para criar um procedimento armazenado?",
    "options": [
      "CREATE PROCEDURE",
      "MAKE PROCEDURE",
      "ADD PROCEDURE",
      "SET PROCEDURE"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 46,
    "question": "Qual tipo de subconsulta SQL retorna um único valor?",
    "options": [
      "Scalar Subquery",
      "Row Subquery",
      "Table Subquery",
      "Correlated Subquery"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 47,
    "question": "Qual função SQL é usada para particionar dados em grupos para cálculos de janela?",
    "options": [
      "PARTITION BY",
      "GROUP BY",
      "ORDER BY",
      "RANK()"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 48,
    "question": "Qual comando SQL é usado para criar um gatilho (trigger)?",
    "options": [
      "CREATE TRIGGER",
      "MAKE TRIGGER",
      "ADD TRIGGER",
      "SET TRIGGER"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 49,
    "question": "Qual função SQL é usada para classificar registros dentro de uma partição?",
    "options": [
      "RANK()",
      "COUNT()",
      "SUM()",
      "AVG()"
    ],
    "correctAnswer": 0,
    "correctLetter": "A"
  },
  {
    "id": 50,
    "question": "Qual tipo de subconsulta SQL depende dos valores da consulta externa?",
    "options": [
      "Scalar Subquery",
      "Row Subquery",
      "Table Subquery",
      "Correlated Subquery"
    ],
    "correctAnswer": 3,
    "correctLetter": "D"
  }
]}