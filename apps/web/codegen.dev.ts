import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql/",
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
