"use client"
import React, {useEffect, useState} from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/navigation";
import clsxm from "@/utils/clsx";
import {useDebounce} from "use-debounce";


export default function SearchInput() {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState<string>("")
    const [debouncedSearchValue] = useDebounce(searchValue, 1000);

    /**
     * Navigates to a new page when the user inputs a username
     * @param value username
     */
    const handleInput = (value: string): void => {
        router.push(`/repositories/${value}`);
    }

    useEffect(() => {
        if (debouncedSearchValue) {
            router.push(`/?username=${debouncedSearchValue}`);
        }
        else {
            router.push(`/`);
        }
    }
    ,[debouncedSearchValue])


  return (
      <div className=" w-full h-9 flex">
          <input
              placeholder="Search for a Github user..."
              className={clsxm(
                    "searchInput cursor:text h-9",
                            'w-full pl-3 border-solid border-[1px]' ,
                            ' bg-white border-slate-400 rounded ',
                             'focus:outline-none focus:border-sky-300' ,
                            ' focus:border-1 placeholder:text-gray-400 ' ,
                            'placeholder:font-extralight font-[300]'
                )}
              onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleInput(searchValue)
                    }
                }}
          />
          <div
              className="flex w-0 items-center -translate-x-8 cursor-pointer"
                onClick={() => handleInput(searchValue)}
          >
              <FontAwesomeIcon icon={faSearch} />
          </div>

      </div>
  )
}
