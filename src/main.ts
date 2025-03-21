import postgres from "postgres";

export const sql = postgres(
  "postgres://postgres:postgres@localhost:5432/postgres", {
    transform: postgres.camel,
  }
);

type Uuid = string & { __opaque__: "Uuid" };

sql<{ id: Uuid }[]>`
SELECT id FROM employees;
 `;

const id = "abc" as Uuid;

sql<{ id: Uuid }[]>`
INSERT INTO employees (id) VALUES (${id}) RETURNING id;`;
