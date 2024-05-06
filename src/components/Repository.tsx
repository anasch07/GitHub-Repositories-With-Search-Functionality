'use client'
import {useEffect, useState} from "react"
import { Repository } from "@/types/githubTypes"
import GoBackButton from "@/components/GoBackButton";
import FilterInput from "@/components/FilterInput";
import LanguageSelect from "@/components/LanguageSelect";
import RepositoryList from "@/components/RepositoryList";
import UserProfilePreview from "@/components/UserProfilePreview";

export default function RepositoryWrapper({response}: { response: any }) {
    console.log('ena houni')
    console.log(response)

    const data = response.data

    const [repositories, setRepositories] = useState<Repository[]>([])
    const [languages, setLanguages] = useState<string[]>([])
    const [languageFilter, setLanguageFilter] = useState<string>("")
    const [nameFilter, setNameFilter] = useState<string>("")

    /**
     * Stores the value from name filter in state
     * @param value value from filter input
     */
    const handleFilterInput = (value: string): void => {
        setNameFilter(value)
    }

    /**
     *  Stores the value from language filter in state
     * @param value  value from language select
     */
    const handleSelectFilter = (value: string): void => {
        setLanguageFilter(value)
    }

    /**
     * Filters repositories according to name and language filters each time they change
     */
    useEffect(() => {
        if (!data) {
            return
        }
        const filteredRepositories = data.user.repositories.nodes.filter(
            (repository: Repository) =>
                repository.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
        if (languageFilter === "") {
            setRepositories(filteredRepositories)
        } else {
            setRepositories(
                filteredRepositories.filter(
                    (repository: Repository) =>
                        repository.primaryLanguage?.name.toLowerCase() ===
                        languageFilter.toLowerCase()
                )
            )
        }
    }, [data, languageFilter, nameFilter])

    /**
     * Sets programming languages in state from the api call. Also sets in state the repositories from the api call and use the fetchMore * function to fetch all repositories merging the data in one object
     */
    useEffect(() => {
        if (data?.user) {
            const languagesArray = data.user.repositories.nodes
                .map((repository: Repository) => repository.primaryLanguage?.name)
                .filter((language: string | undefined) => language !== undefined)
            const uniqueLanguages = languagesArray.filter(
                (language: string, index: number) =>
                    languagesArray.indexOf(language) === index
            )
            setLanguages(uniqueLanguages)
            setRepositories(data.user.repositories.nodes)

        }
    }, [data])



    return (
        <div className="w-screen min-h-screen flex py-10 justify-center ">
            <div className="flex max-w-screen  w-[70rem] flex-col md:flex-row  gap-10 overflow-hidden">
                <div className="w-[23rem] px-2 flex flex-col ">
                    <UserProfilePreview userData={data.user}/>
                </div>
                <div className="flex flex-col gap-5 w-full px-4 md:max-w-[40rem]">
                    <div className="flex gap-4 ">
                        <FilterInput getValue={handleFilterInput}/>
                        <LanguageSelect
                            getValue={handleSelectFilter}
                            languages={languages}
                        />
                    </div>
                    {repositories && <RepositoryList repositories={repositories}/>}
                </div>
            </div>
        </div>

    )
}


