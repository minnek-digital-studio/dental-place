import "server-only";

import { config } from "@/config/constants";
import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const { API_URL } = config;
export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: API_URL,
        }),
    });
});
