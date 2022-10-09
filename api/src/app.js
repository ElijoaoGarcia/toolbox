import axios from 'axios'
import express from 'express'
import router from './router.js'
import cors from 'cors'
import env from './env.js'

const app = express()

app.set('port', env.port)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}))

app.use(router)

axios.defaults.baseURL = env.axiosBaseUrl
axios.defaults.headers.common.authorization = env.apiKey

export { app }
