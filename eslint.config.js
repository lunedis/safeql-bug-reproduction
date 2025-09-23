import safeql from "@ts-safeql/eslint-plugin/config";
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ["eslint.config.js"],
  },
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  safeql.configs.connections(
    {
    // The URL of the database:
    databaseUrl:
      "postgres://postgres:postgres@localhost:5432/postgres",
    targets: [
      {
        // Check all of the queries that are used with the `sql` tag:
        tag: "sql",
        // Postgres.js type should be an array, so we add an extra "[]" after the generated type:
        transform: "{type}[]",
        fieldTransform: "camel",
      },
    ],
  },
  ));