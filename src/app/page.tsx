import Image from "next/image";
import SearchInput from "@/components/SearchInput";
import { useParams } from 'next/navigation'
import {PageProps} from "@/types/pageProps";
import {getServerSidePaginationParams} from "@/utils/getServerSidePaginationParams";
import {getApolloClient} from "@/graphql/apolloClient";
import {LINKS} from "@/constants/URL";
import {GET_USER_REPOSITORIES} from "@/graphql/graphql-queries/GITHUB_REPOSITORIES_QUERIES";
import GET_USERS from "@/graphql/graphql-queries/GITHUB_USERS_QUERIES";
import Error from "@/app/(public)/error";
import UserProfileRow from "@/components/UserProfileRow";


/**
 * Fetches the user information from the github api.
 * @param login_username the username of the user
 * @return {data, error} the data fetched and an error if any
 */

async function getGithubUserInfo(login_username: string) {

    const client = getApolloClient(LINKS.GITHUB_GRAPHQL, true);
    try {
        const result = await client.query({
            query: GET_USERS,
            variables: { login_username: login_username },
        });
        return { data: result, error: null };
    } catch (error) {
        return { data: null, error };
    }
}


export default async function Home({searchParams}: PageProps) {
    const {page_username} = getServerSidePaginationParams(searchParams);
    let response
    if (page_username) {
        response = await getGithubUserInfo(page_username);
        if (response.error) {
            return <Error error={(response.error as Error).message}/>;
        }
    }


    return (
        <div className="flex flex-col h-screen w-screen items-center justify-start pt-[230px]">
            <div className="flex flex-col items-center mt-10 md:w-[32rem] max-w-[32rem] w-full px-10">
                <Image
                    src="/images/githubLogo.png"
                    alt="github logo"
                    width={160}
                    height={160}
                    className="w-40 h-auto -translate-x-2"
                />
                <SearchInput />
            </div>
            {response && response.data && (
                <div className="flex items-center flex-col md:w-[32rem] max-w-[32rem] w-full px-10 -translate-y-2">
                    <UserProfileRow response={response.data}/>
                </div>
            )}
        </div>
    );
}
