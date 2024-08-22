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
    "query getNavbarInfo {\n  header {\n    headerSettings {\n      sociallinks {\n        icon {\n          name\n          fill\n          stroke\n          size\n        }\n        link {\n          target\n          title\n          url\n        }\n      }\n      schedules {\n        title\n        schedule {\n          name\n          value\n        }\n      }\n      phone {\n        url\n        title\n        target\n      }\n      language {\n        title\n        lang {\n          name\n          value\n          icon {\n            className\n            name\n            size\n          }\n        }\n      }\n      navbarItems {\n        link {\n          url\n          target\n          title\n        }\n        subMenuItem {\n          link {\n            url\n            title\n            target\n          }\n          description\n        }\n      }\n    }\n  }\n}\n\nquery getFooterInfo {\n  footer {\n    footerConfig {\n      columns {\n        description\n        title\n        links {\n          link {\n            title\n            url\n            target\n          }\n          icon {\n            name\n            position\n            size\n          }\n          className\n        }\n        socialLinks {\n          icon {\n            name\n            position\n            size\n            color\n            fill\n            stroke\n          }\n          link {\n            target\n            title\n            url\n          }\n        }\n        title\n      }\n      copyRight\n    }\n  }\n}": types.GetNavbarInfoDocument,
    "query Posts {\n  posts {\n    edges {\n      node {\n        slug\n        title\n      }\n    }\n  }\n}": types.PostsDocument,
    "query getServicesInfo {\n  services {\n    edges {\n      node {\n        id\n        slug\n        title\n        serviceSettings {\n          summary\n          className\n          button {\n            link {\n              target\n              title\n              url\n            }\n            size\n            variant\n          }\n          icon\n        }\n      }\n    }\n  }\n}\n\nquery getServiceBySlug($slug: ID = \"\") {\n  service(id: $slug, idType: SLUG) {\n    id\n    title\n    slug\n    serviceSettings {\n      description\n      className\n      editor\n      gallery {\n        edges {\n          node {\n            id\n            altText\n            link\n          }\n        }\n      }\n      summary\n      img {\n        node {\n          altText\n          id\n          link\n        }\n      }\n      button {\n        link {\n          target\n          title\n          url\n        }\n        size\n        variant\n      }\n      icon\n    }\n  }\n}": types.GetServicesInfoDocument,
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
export function graphql(source: "query getNavbarInfo {\n  header {\n    headerSettings {\n      sociallinks {\n        icon {\n          name\n          fill\n          stroke\n          size\n        }\n        link {\n          target\n          title\n          url\n        }\n      }\n      schedules {\n        title\n        schedule {\n          name\n          value\n        }\n      }\n      phone {\n        url\n        title\n        target\n      }\n      language {\n        title\n        lang {\n          name\n          value\n          icon {\n            className\n            name\n            size\n          }\n        }\n      }\n      navbarItems {\n        link {\n          url\n          target\n          title\n        }\n        subMenuItem {\n          link {\n            url\n            title\n            target\n          }\n          description\n        }\n      }\n    }\n  }\n}\n\nquery getFooterInfo {\n  footer {\n    footerConfig {\n      columns {\n        description\n        title\n        links {\n          link {\n            title\n            url\n            target\n          }\n          icon {\n            name\n            position\n            size\n          }\n          className\n        }\n        socialLinks {\n          icon {\n            name\n            position\n            size\n            color\n            fill\n            stroke\n          }\n          link {\n            target\n            title\n            url\n          }\n        }\n        title\n      }\n      copyRight\n    }\n  }\n}"): (typeof documents)["query getNavbarInfo {\n  header {\n    headerSettings {\n      sociallinks {\n        icon {\n          name\n          fill\n          stroke\n          size\n        }\n        link {\n          target\n          title\n          url\n        }\n      }\n      schedules {\n        title\n        schedule {\n          name\n          value\n        }\n      }\n      phone {\n        url\n        title\n        target\n      }\n      language {\n        title\n        lang {\n          name\n          value\n          icon {\n            className\n            name\n            size\n          }\n        }\n      }\n      navbarItems {\n        link {\n          url\n          target\n          title\n        }\n        subMenuItem {\n          link {\n            url\n            title\n            target\n          }\n          description\n        }\n      }\n    }\n  }\n}\n\nquery getFooterInfo {\n  footer {\n    footerConfig {\n      columns {\n        description\n        title\n        links {\n          link {\n            title\n            url\n            target\n          }\n          icon {\n            name\n            position\n            size\n          }\n          className\n        }\n        socialLinks {\n          icon {\n            name\n            position\n            size\n            color\n            fill\n            stroke\n          }\n          link {\n            target\n            title\n            url\n          }\n        }\n        title\n      }\n      copyRight\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts {\n  posts {\n    edges {\n      node {\n        slug\n        title\n      }\n    }\n  }\n}"): (typeof documents)["query Posts {\n  posts {\n    edges {\n      node {\n        slug\n        title\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getServicesInfo {\n  services {\n    edges {\n      node {\n        id\n        slug\n        title\n        serviceSettings {\n          summary\n          className\n          button {\n            link {\n              target\n              title\n              url\n            }\n            size\n            variant\n          }\n          icon\n        }\n      }\n    }\n  }\n}\n\nquery getServiceBySlug($slug: ID = \"\") {\n  service(id: $slug, idType: SLUG) {\n    id\n    title\n    slug\n    serviceSettings {\n      description\n      className\n      editor\n      gallery {\n        edges {\n          node {\n            id\n            altText\n            link\n          }\n        }\n      }\n      summary\n      img {\n        node {\n          altText\n          id\n          link\n        }\n      }\n      button {\n        link {\n          target\n          title\n          url\n        }\n        size\n        variant\n      }\n      icon\n    }\n  }\n}"): (typeof documents)["query getServicesInfo {\n  services {\n    edges {\n      node {\n        id\n        slug\n        title\n        serviceSettings {\n          summary\n          className\n          button {\n            link {\n              target\n              title\n              url\n            }\n            size\n            variant\n          }\n          icon\n        }\n      }\n    }\n  }\n}\n\nquery getServiceBySlug($slug: ID = \"\") {\n  service(id: $slug, idType: SLUG) {\n    id\n    title\n    slug\n    serviceSettings {\n      description\n      className\n      editor\n      gallery {\n        edges {\n          node {\n            id\n            altText\n            link\n          }\n        }\n      }\n      summary\n      img {\n        node {\n          altText\n          id\n          link\n        }\n      }\n      button {\n        link {\n          target\n          title\n          url\n        }\n        size\n        variant\n      }\n      icon\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;