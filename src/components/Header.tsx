import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

const Header = () => {
    return (
        <div className="flex flex-row w-full justify-center py-6 px-4 md:md:gap-x-12">
            <div className="flex flex-row justify-center max-w-7xl w-full items-center md:gap-x-12">
                <div className="flex flex-row items-center text-center justify-center md:gap-x-12">

                    <div className="px-5 py-2 text-xs bg-gray-200 rounded-lg text-slate-900 font-medium tracking-wider">
                        Github <span className="text-gray-400 w-10">{">"}</span>{" "}
                        Repositories
                    </div>
                </div>
                <div className="flex flex-row md:md:gap-x-12">
                    <Link href="/">
                        <Button label={"Home"} variant="secondary" />
                    </Link>
                    <Button
                        label={"Documentation"}
                        onClick={() => {
                            window.location.href =
                                "https://github.com/anasch07/GitHub-Repositories-With-Search-Functionality";
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
