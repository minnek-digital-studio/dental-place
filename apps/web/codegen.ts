import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const config: CodegenConfig = {
    overwrite: true,
    schema: {
        [process.env.WORDPRESS_API_URL || "https://minnekagency.com/graphql"]: {
            headers: {
                "User-Agent": "GraphQL-Codegen/1.0",
            },
        },
    },
    documents: "src/**/*.{gql,graphql}",
    generates: {
        "src/graphql/generated/": {
            preset: "client",
            plugins: [],
        },
        "src/graphql/graphql.schema.json": {
            plugins: ["introspection"],
        },
    },
};

export default config;
