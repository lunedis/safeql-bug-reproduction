import postgres from "postgres";

export const sql = postgres(
  "postgres://postgres:postgres@localhost:5432/postgres", {
    transform: postgres.camel,
  }
);

const x = sql<{ division: string; count: number }[]>`
  SELECT division, count(division) from employees group by division 
`;
