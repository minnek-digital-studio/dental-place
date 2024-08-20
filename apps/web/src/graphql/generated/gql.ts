/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getLayoutInfo {\n  header {\n    headerSettings {\n      sociallinks {\n        icon {\n          name\n          fill\n          stroke\n          size\n        }\n        link {\n          target\n          title\n          url\n        }\n      }\n      schedules {\n        title\n        schedule {\n          name\n          value\n        }\n      }\n      phone {\n        url\n        title\n        target\n      }\n      language {\n        title\n        lang {\n          name\n          value\n          icon {\n            className\n            name\n            size\n          }\n        }\n      }\n      navbarItems {\n        link {\n          url\n          target\n          title\n        }\n        subMenuItem {\n          link {\n            url\n            title\n            target\n          }\n          description\n        }\n      }\n    }\n  }\n}": types.GetLayoutInfoDocument,
    "query Posts {\n  posts {\n    edges {\n      node {\n        slug\n        title\n      }\n    }\n  }\n}": types.PostsDocument,
    "query GetServices {\n  services {\n    edges {\n      node {\n        title\n        slug\n      }\n    }\n  }\n}": types.GetServicesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getLayoutInfo {\n  header {\n    headerSettings {\n      sociallinks {\n        icon {\n          name\n          fill\n          stroke\n          size\n        }\n        link {\n          target\n          title\n          url\n        }\n      }\n      schedules {\n        title\n        schedule {\n          name\n          value\n        }\n      }\n      phone {\n        url\n        title\n        target\n      }\n      language {\n        title\n        lang {\n          name\n          value\n          icon {\n            className\n            name\n            size\n          }\n        }\n      }\n      navbarItems {\n        link {\n          url\n          target\n          title\n        }\n        subMenuItem {\n          link {\n            url\n            title\n            target\n          }\n          description\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getLayoutInfo {\n  header {\n    headerSettings {\n      sociallinks {\n        icon {\n          name\n          fill\n          stroke\n          size\n        }\n        link {\n          target\n          title\n          url\n        }\n      }\n      schedules {\n        title\n        schedule {\n          name\n          value\n        }\n      }\n      phone {\n        url\n        title\n        target\n      }\n      language {\n        title\n        lang {\n          name\n          value\n          icon {\n            className\n            name\n            size\n          }\n        }\n      }\n      navbarItems {\n        link {\n          url\n          target\n          title\n        }\n        subMenuItem {\n          link {\n            url\n            title\n            target\n          }\n          description\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts {\n  posts {\n    edges {\n      node {\n        slug\n        title\n      }\n    }\n  }\n}"): (typeof documents)["query Posts {\n  posts {\n    edges {\n      node {\n        slug\n        title\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetServices {\n  services {\n    edges {\n      node {\n        title\n        slug\n      }\n    }\n  }\n}"): (typeof documents)["query GetServices {\n  services {\n    edges {\n      node {\n        title\n        slug\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;