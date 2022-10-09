import axios from 'axios'

const getFilesName = async () => {
  const { data } = await axios.get('/secret/files')
  return data.files
}

const getFile = async (fileName) => {
  const { data, status } = await axios.get(`secret/file/${fileName}`, {
    validateStatus: () => true
  })
  if (status !== 200) return undefined
  return data
}

const lineFormatter = (line) => {
  if (typeof line !== 'string') return undefined
  const lineSplited = line.split(',')

  if (lineSplited.length !== 4) return undefined

  const [, text, number, hex] = lineSplited
  if (!Number(number) || hex.length !== 32) return undefined

  return {
    text,
    number: Number(number),
    hex
  }
}

export {
  getFilesName,
  getFile,
  lineFormatter
}
