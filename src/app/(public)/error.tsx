'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({
                                  error,
                              }: {
    error: string

}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const router= useRouter()
    console.log(error)
    return (
        <div>
            <div className="flex h-screen w-screen justify-center items-center">
                <div className="flex items-center flex-col md:w-[32rem] max-w-[32rem] w-full px-10 ">
                    <h1 className="text-4xl font-bold text-center" >An error occurred</h1>
                    <p className="text-lg mt-4 text-center">{error}</p>
                    <button
                        onClick={() => router.push('/')}
                        className="mt-6 bg-black text-white px-4 py-2 rounded-md"
                    >
                        Retry
                    </button>
                </div>
            </div>
        </div>
    )
}