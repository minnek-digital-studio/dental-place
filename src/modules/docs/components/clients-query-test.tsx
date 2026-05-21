"use client";

import { useSuspenseQuery } from "@apollo/client";

import {
    GetServicePageInfoDocument,
    GetServicesInfoQuery,
} from "@/graphql/generated/graphql";

const ClientQueryTest = () => {
    const { data } = useSuspenseQuery<GetServicesInfoQuery>(
        GetServicePageInfoDocument,
    );

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
