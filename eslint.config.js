import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default [
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "dist/**",
            "build/**",
            "src/graphql/generated/**",
            "coverage/**",
            ".turbo/**",
            ".release-it.js",
            "cypress.config.js",
        ],
    },
    // Config files - CommonJS (just for next.config.js which uses module.exports)
    {
        files: ["next.config.js"],
        languageOptions: {
            globals: {
                module: "writable",
                process: "readonly",
                URL: "readonly",
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
        },
    },
    // Source code
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["src/**/*.{js,jsx,ts,tsx}", "cypress/**/*.{js,ts}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: "readonly",
                describe: "readonly",
                it: "readonly",
                before: "readonly",
                after: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
                cy: "readonly",
                Cypress: "readonly",
            },
        },
        plugins: {
            react: react,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/no-unescaped-entities": "warn",
            "react/prop-types": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/triple-slash-reference": "off",
            "@typescript-eslint/no-empty-object-type": "warn",
        },
    },
];
