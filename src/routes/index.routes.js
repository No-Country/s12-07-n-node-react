import { Router } from "express";
import contentRoutes from './content.routes.js'


const router = Router()



router.use('/trending', contentRoutes)



export default router
