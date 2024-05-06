import {PageProps} from "@/types/pageProps";


export const getServerSidePaginationParams = (
    searchParams: PageProps["searchParams"]
) => {
    const page_username = searchParams["username"];
    if (page_username) {
        return { page_username: Array.isArray(page_username) ? page_username[0] : page_username };
    }



    return { page_username };
};
