import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../src/components/Header'


jest.mock('next/navigation', () => ({
    useRouter: () => ({
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
    }),
}))



// @ts-ignore
// eslint-disable-next-line react/display-name
jest.mock('next/link', () => ({ children }) => <div>{children}</div>)

describe('Header', () => {
    it('renders the header with the correct labels', () => {
        render(<Header />)

        const homeButton = screen.getByText('Home')
        expect(homeButton).toBeInTheDocument()

        const documentationButton = screen.getByText('Documentation')
        expect(documentationButton).toBeInTheDocument()
    })

    // Add more tests as needed
})
