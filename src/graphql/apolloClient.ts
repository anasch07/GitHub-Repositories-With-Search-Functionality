import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {LINKS} from "@/constants/URL";

export const getApolloClient = (link: string,isTokenActivated:boolean) => {
    const httpLink = createHttpLink({
        uri: link,
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: isTokenActivated ? `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` : "",
            },
        };
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};
