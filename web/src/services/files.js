import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getFiles = createAsyncThunk(
  'files/get',
  async (doNotUse = undefined, { dispatch }) => {
    try {
      const query = await axios.get('/files/data')
      return query.data
    } catch (error) {
      throw error
    }
  }
)

const getByFileName = createAsyncThunk(
  'files/getByFileName',
  async (fileName, { dispatch }) => {
    try {
      const params = { fileName }
      const query = await axios.get('/files/data', { params })
      return query.data
    } catch (error) {
      throw error
    }
  }
)

export default { getFiles, getByFileName }
export {
  getFiles,
  getByFileName
}
