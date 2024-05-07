 export interface Repository {
    id: string
    description?: string
    name: string
    isPrivate: boolean
    forkCount: number
    primaryLanguage?: {
        name: string
        color: string
    }
    updatedAt: string
    url: string
}

 export interface UserData {
    id: string
    avatarUrl: string
    bio: string
    followers: {
        totalCount: number
    }
    following: {
        totalCount: number
    }
    login: string
    name?: string
    organizations: {
        nodes: {
            avatarUrl: string
            name: string
        }[]
    }
    repositories: {
        nodes: Repository[]
    }
}

export interface FollowerConnection {
    __typename: string;
    totalCount: number;
}

export interface FollowingConnection {
    __typename: string;
    totalCount: number;
}

export interface RepositoryConnection {
    __typename: string;
    totalCount: number;
}

export interface User {
    __typename: string;
    name: string;
    login: string;
    avatarUrl: string;
    followers: FollowerConnection;
    following: FollowingConnection;
    repositories: RepositoryConnection;
}

export interface Data {
    user: User;
}

export interface GithubUserResponse {
    data: Data;
    loading: boolean;
    networkStatus: number;
}
