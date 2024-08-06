
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://dentalplace.minnekdigital.com/graphql",
  documents: "src/**/*.{gql,graphql}",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    },
    "src/graphql/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
