import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../src/components/Header'
import RepositoryWrapper from '../src/components/Repository'
import {Repository} from "@/types/githubTypes";



// Mock data
const mockResponse = {
    data: {
        user: {
            __typename: "User",
            id: "MDQ6VXNlcjM1MDA0Nw==",
            login: "yalla",
            name: "Alexander W. Janssen",
            avatarUrl: "https://avatars.githubusercontent.com/u/350047?u=4aff558c18b3bf6ba799c8e5afedc45872e3004f&v=4",
            bio: "",
            followers: {
                __typename: "FollowerConnection",
                totalCount: 8
            },
            following: {
                __typename: "FollowingConnection",
                totalCount: 0
            },
            organizations: {
                __typename: "OrganizationConnection",
                nodes: []
            },
            repositories: {
                __typename: "RepositoryConnection",
                nodes: [
                    {
                        __typename: "Repository",
                        id: "MDEwOlJlcG9zaXRvcnkxNzI0NDI1NQ==",
                        name: "pkt2flow",
                        description: "A simple utility to classify packets into flows. It's so simple that only one task is aimed to finish.  For Deep Packet Inspection or flow classification, it's so common to analyze the feature of one specific flow. I have make the attempt to use made-ready tools like tcpflows, tcpslice, tcpsplit, but all these tools try to either decrease the trace volume (under requirement) or resemble the packets into flow payloads (over requirement). I have not found a simple tool to classify the packets into flows without further processing. This is why this program is born.",
                        forkCount: 0,
                        url: "https://github.com/yalla/pkt2flow",
                        isPrivate: false,
                        primaryLanguage: {
                            __typename: "Language",
                            name: "C",
                            color: "#555555"
                        },
                        updatedAt: "2014-03-08T07:34:58Z"
                    },
                    // ... more repositories ...
                ],
            },
        },
    },
};


describe('RepositoryWrapper', () => {
    it('renders the repositories', () => {
        render(<RepositoryWrapper response={mockResponse} />)

        const repo = screen.getByText('pkt2flow')
        expect(repo).toBeInTheDocument()
    })

})
