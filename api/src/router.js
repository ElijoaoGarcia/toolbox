import { Router } from 'express'

import files from './components/files/routes.js'

const router = Router()

router.use('/files/data', files)

export default router
