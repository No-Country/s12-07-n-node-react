import { Router } from "express";
import contentRoutes from './content.routes.js'
import authRoutes from './auth.routes.js'
import listRoutes from './lists.routes.js'
import { checkJWT } from "../middlewares/session.middleware.js";
import viewsRoutes from './views.routes.js'
const router = Router()

router.use('/trending', contentRoutes)
router.use('/auth', authRoutes)
router.use('/favourites', checkJWT, listRoutes)
router.use('/', viewsRoutes)



export default router
