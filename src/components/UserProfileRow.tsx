import clsxm from "@/utils/clsx";

type Connection = {
    __typename: string;
    totalCount: number;
};

type User = {
    __typename: 'User';
    name: string;
    login: string;
    avatarUrl: string;
    followers: Connection;
    following: Connection;
    repositories: Connection;
};
import Image from "next/image";
import Link from "next/link";


export default function UserProfileRow({ response }: { response: any }) {

    const userInfo:User = response.data.user;

    return (
        <div
             className={
            clsxm("flex flex-col sm:flex-row items-center" ,
                " my-12 py-4 px-6 border border-gray-200 rounded-lg "
            )}
        >
            <Image
                height={80}
                width={80}
                className="h-20 w-20 rounded-full self-center sm:self-auto"
                src={userInfo.avatarUrl}
                alt="avatar"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <Link href={`/repositories/${userInfo.login}`}>
                <p className="text-lg font-semibold
                hover:underline
                ">{userInfo.name}</p>
                    </Link>
                <p className="text-sm text-gray-500">{userInfo.login}</p>
                <div className="flex justify-center sm:justify-start mt-2">
                    <p className="text-sm text-gray-500">
                        <span className="font-bold text-black">{userInfo.followers.totalCount} </span>
                        followers
                    </p>
                    <p className="text-sm text-gray-500 ml-2">
                        <span className="font-bold text-black">{userInfo.following.totalCount} </span>
                        following
                    </p>
                </div>
            </div>
        </div>
    );

}