import postgres from "postgres";

interface Data { }

export const sql = postgres(
  "postgres://postgres:postgres@localhost:5432/postgres", {
    transform: postgres.camel,
  }
);

// .eslintrc.json assigns "Data[]" to be the type of employees.data, but it gets switched up one place to the CTE type instead.
sql<{ value: Data[]; data: any }[]>`
  WITH cte AS (
    SELECT 
      e.id AS id,
      'value' AS value
    FROM employees AS e
  )
  SELECT 
    cte.value,
    data
  FROM employees AS e
  LEFT JOIN cte USING (id);`;
