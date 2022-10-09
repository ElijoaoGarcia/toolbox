import React, { useEffect, useState } from 'react'
import { Container, Nav, Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import FileList from './components/FileList.jsx';
import { getByFileName, getFiles } from './services/files';

function App() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const { isLoading, error, files } = useSelector((state) => state.filesReducer)

  useEffect(() => {
    dispatch(getFiles())
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (!search) dispatch(getFiles())
    dispatch(getByFileName(search))
  }

  return (
    <Container>

      <Nav className="bg-danger p-3 mb-4 w-100">
        <Nav.Item className="d-flex flex-row justify-content-between align-items-center w-100">
          <h2 className='text-white text-capitalize'>react test app</h2>

          <form onSubmit={onSubmitForm}>
            <InputGroup style={{ width: 300 }}>
              <InputGroup.Text id="inputGroup-sizing-default">
                Search
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </form>

        </Nav.Item>
      </Nav>

      <FileList
        search={search}
        files={files}
        isLoading={isLoading}
        error={error}
      />

    </Container>
  )
}

export default App
