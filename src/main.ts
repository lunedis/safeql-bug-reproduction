import postgres from "postgres";

export const sql = postgres(
  "postgres://postgres:postgres@localhost:5432/postgres", {
    transform: postgres.camel,
  }
);


const x = sql<{ id: number; division: string; list: number[] | null }[]>`
  with subquery as (
    select a_id, array_agg(b_id) as list
    from b
    group by a_id
  )
  select id, name, subquery.list
  from a
  left join subquery on (subquery.a_id = a.id);
`;
