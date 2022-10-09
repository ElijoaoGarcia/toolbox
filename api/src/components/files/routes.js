import { Router } from 'express'
import controller from './controllers.js'

const routes = Router()

routes.route('/')
  .get(controller.getAll)

export default routes
