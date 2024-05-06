import { getApolloClient } from "@/graphql/apolloClient";
import RepositoryWrapper from "@/components/Repository";
import { GET_USER_REPOSITORIES } from "@/graphql/graphql-queries/GITHUB_REPOSITORIES_QUERIES";
import Error from "@/app/(public)/error";
import {LINKS} from "@/constants/URL";

/**
 * Fetches the repositories of a user from the github api.
 * @param userId the username of the user
 * @return {data, error} the data fetched and an error if any
 */
async function getUserRepositories(userId: string) {
    const client = getApolloClient(LINKS.GITHUB_GRAPHQL, true);
    try {
        const result = await client.query({
            query: GET_USER_REPOSITORIES,
            variables: { username: userId },
        });
        return { data: result, error: null };
    } catch (error) {
        console.error("An error occurred while fetching the repositories:", error);
        return { data: null, error };
    }
}

export default async function Page({ params }: { params: { userId: string } }) {
    const userId = params.userId;
    const { data, error } = await getUserRepositories(userId);
    if (error) {
        if (error) {
            return <Error error={(error as Error).message} />;
        }
    }

    return <RepositoryWrapper response={data} />;
}
