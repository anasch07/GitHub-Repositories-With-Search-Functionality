export interface GraphQLError {
    message: string;
    locations: { line: number; column: number }[];
    path: string[];
    type: string;
    extensions: {
        code: string;
        [key: string]: any;
    };
}


export interface GithubFetchError {
    graphQLErrors: GraphQLError[];
    networkError: any;
    message: string;
    extraInfo: any;
}