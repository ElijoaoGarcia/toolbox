import { Table, Spinner } from 'react-bootstrap'
import FileCard from './FileCard'

const FileList = ({ isLoading, error, files, search }) => {

    if (isLoading) {
        return (
            <div className='d-flex w-100 justify-content-center mb-4' data-testid='loading'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    if (error) {
        return (
            <div className='d-flex w-100 justify-content-center mb-4' data-testid='loading'>
                <p>Something went wrong.</p>
            </div>
        )
    }

    if(search && !files.length){
        return (
            <div className='d-flex w-100 justify-content-center mb-4' data-testid='loading'>
                <p>The file was not found.</p>
            </div>
        )
    }

    if (!files.length) {
        return (
            <div className='d-flex w-100 justify-content-center mb-4' data-testid='loading'>
                <p>Without content to show.</p>
            </div>
        )
    }

    return (
        <Table striped bordered hover className='mw-100'>
            <thead>
                <tr>
                    <th>File Name</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                </tr>
            </thead>

            <tbody>
                {files.map((file, index) => (
                    <FileCard
                        key={index}
                        file={file}
                    />
                ))}
            </tbody>
        </Table>
    )
}

export default FileList