"use client";

import { useSuspenseQuery } from "@apollo/client";

import {
    GetServicesDocument,
    GetServicesQuery,
} from "@/graphql/generated/graphql";

const ClientQueryTest = () => {
    const { data, error } =
        useSuspenseQuery<GetServicesQuery>(GetServicesDocument);

    return (
        <div>
            {data.services &&
                data.services.edges.map(({ node: post }) => {
                    return <div key={post.slug}>{post.title}</div>;
                })}
        </div>
    );
};

export default ClientQueryTest;
