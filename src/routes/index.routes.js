import { Router } from "express";
import contentRoutes from './content.routes'


const router = Router()

router.use('/content', contentRoutes)



export default router
