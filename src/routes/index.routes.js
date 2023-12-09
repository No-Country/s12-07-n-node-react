import { Router } from "express";
import contentRoutes from './content.routes.js'
import authRoutes from './auth.routes.js'
import listRoutes from './lists.routes.js'
import { checkJWT } from "../middlewares/session.middleware.js";

const router = Router()

router.use('/trending', contentRoutes)
router.use('/auth', authRoutes)
router.use('/favourites', checkJWT, listRoutes)



export default router
