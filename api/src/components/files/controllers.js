import {
  getFile,
  getFilesName,
  lineFormatter
} from './utils.js'

const getAll = async (req, res) => {
  try {
    const { fileName } = req.query
    const files = await getFilesName()

    if (fileName) {
      const file = await getFile(fileName)
      if (!file) return res.status(204).send([])

      const fileObj = {
        file: fileName,
        lines: []
      }

      const lines = file.split(/\r\n|\r|\n/, -1)
      if (!lines.length) res.status(200).send([])

      for (const lineToFormat of lines) {
        const line = lineFormatter(lineToFormat)
        if (line) fileObj.lines.push(line)
      }

      return res.status(200).send([fileObj])
    }

    // { file: string, lines: {text: string, number: number, hex: string }[] }
    const filesFormatted = []

    for (const name of files) {
      const file = await getFile(name)
      if (!file) continue

      const fileObj = {
        file: name,
        lines: []
      }

      const lines = file.split(/\r\n|\r|\n/, -1)
      if (!lines.length) continue

      for (const lineToFormat of lines) {
        const line = lineFormatter(lineToFormat)
        if (line) fileObj.lines.push(line)
      }

      if (fileObj.lines.length) filesFormatted.push(fileObj)
    }

    res.status(200).send(filesFormatted)
  } catch (error) {
    res.status(500).send(error)
  }
}

export default {
  getAll
}
