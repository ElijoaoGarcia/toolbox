import {
  getFile,
  getFilesName,
  lineFormatter
} from './src/components/files/utils.js'
import { assert } from 'chai'
import { describe, it } from 'mocha'

describe('getFilesName', () => {
  it('should return object typeof  if the response is ok', () => {
    getFilesName().then((res) => {
      assert.typeOf(res, 'object')
    })
  })
})

describe('getFile suit', () => {
  it('should return undefined if name is not passed', () => {
    getFile().then((res) => {
      assert.equal(res, undefined)
    })
  })

  it('should return undefined if the name is passed but file does not exits', () => {
    getFile('test4000.cc').then((res) => {
      assert.equal(res, undefined)
    })
  })

  it('shoudl return a string if the name is passed and the file exists', () => {
    getFile('test1.csv').then((res) => {
      assert.typeOf(res, 'string')
    })
  })
})

describe('lineFormatter suit', () => {
  let line = 23724

  it('should return undefined if the param type is not a string', () => {
    assert.equal(lineFormatter(line), undefined)
  })

  it('should return undefined if the line does not have 4 params', () => {
    line = 'test1.csv,rgtavy,d1276e1d25857be88aab2b519e86dfd2'
    assert.equal(lineFormatter(line), undefined)
  })

  it('should return undefined if the third param is not a number', () => {
    line = 'test1.csv,rgtavy,3242342g,d1276e1d25857be88aab2b519e86dfd2'
    assert.equal((lineFormatter(line), undefined))
  })

  it('should return undefined if the fourth param does not have 32 digits', () => {
    line = 'test1.csv,rgtavy,3242342,d1276e1d25857be88aab2b519e86df'
    assert.equal(lineFormatter(line), undefined)
  })

  it('should return object type line if the line meet the requirements', () => {
    line = 'test1.csv,rgtavy,3242342,d1276e1d25857be88aab2b519e86dfd2'
    const expected = {
      text: 'rgtavy',
      number: 3242342,
      hex: 'd1276e1d25857be88aab2b519e86dfd2'
    }

    assert.deepEqual(lineFormatter(line), expected)
  })
})

// This suit can be run if the
// server is running on port 3001
// you have to import axios

// describe('Files end point suit', () => {
//   const url = 'http://localhost:3001/files/data'

//   it('should return 200 status', async () => {
//     const query = await axios.get(url)
//     assert.equal(query.status, 200)
//   })

//   it('should return return 204 status if the fileName query param does not match with any file', async () => {
//     const query = await axios.get(`${url}?fileName=hola`, { validateStatus: () => true })
//     assert.equal(query.status, 204)
//   })
// })
