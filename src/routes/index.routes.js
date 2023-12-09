import { Router } from "express";
import contentRoutes from './content.routes.js'
import authRoutes from './auth.routes.js'


const router = Router()



router.use('/trending', contentRoutes)
router.use('/auth', authRoutes)



export default router
