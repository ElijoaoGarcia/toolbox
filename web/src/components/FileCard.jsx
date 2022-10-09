import React from 'react'

const FileCard = ({ file }) => {
    const { file: fileName, lines } = file
    const [{ text, number, hex }] = lines

    return (
        <tr>
            <td>{fileName}</td>
            <td>{text}</td>
            <td>{number}</td>
            <td>{hex}</td>
        </tr>
    )
}

export default FileCard