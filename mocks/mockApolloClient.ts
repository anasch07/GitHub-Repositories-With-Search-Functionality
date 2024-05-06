import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';

export const mockApolloClient = new ApolloClient({
    link: new ApolloLink(() => null), // This is a mock link that does nothing
    cache: new InMemoryCache(),
});
