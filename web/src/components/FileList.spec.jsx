import { cleanup, findByTestId, render, screen } from '@testing-library/react'
import { it, describe, expect, beforeEach, } from 'vitest';
import FileList from './FileList.jsx'

describe('<FileList /> test suit', () => {


    beforeEach(cleanup)

    it('should be a function', () => {
        expect(typeof FileList).toBe("function")
    })

    it('should render loading if the isLoading param is true', async() => {

        render(<FileList isLoading={true} />)

        await screen.findByTestId('loading')
    })

    it('should render error message if the error param is true', async () => {
        render(<FileList error={true} isLoading={false} />)

        await screen.findByText('Something went wrong.')
    })

    it('should render not content message when files is empty array', () => {
        render(
            <FileList
                error={false}
                isLoading={false}
                files={[]}
            />
        )

        screen.getByText('Without content to show.')
    })

    it('should render no result message when the search result is empty', () => {
        render(
            <FileList
                error={false}
                isLoading={false}
                search="sdfsd"
                files={[]}
            />
        )

        screen.getByText('The file was not found.')
    })

    it('should render two files', () => {
        const file = {
            file: "test1.csv", 
            lines: [{ text:"test", number: 42342, hex: "d1276e1d25857be88aab2b519e86dfd2" }]
        }
        const file2 = {...file, file: 'test2.csv' }

        render(
            <FileList
                files={[file, file2]}
                error={false}
                isLoading={false}
            />
        )

        screen.getByText(file.file)
        screen.getByText(file2.file)
        
    })
})