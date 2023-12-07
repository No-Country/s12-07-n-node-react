import { Router } from "express";
import contentRoutes from './content.routes.js'


const router = Router()

router.use('/content', contentRoutes)



export default router
