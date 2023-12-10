import { Router } from "express";
import { checkJWT } from "../middlewares/session.middleware.js";
import contentRoutes from './content.routes.js'
import authRoutes from './auth.routes.js'
import listRoutes from './lists.routes.js'
import viewsRoutes from './views.routes.js'
import discoverRoutes from './discover.routes.js'
const router = Router()

router.use('/trending', contentRoutes)
router.use('/auth', authRoutes)
router.use('/favourites', checkJWT, listRoutes)
router.use('/', viewsRoutes)
router.use('/discover', discoverRoutes)



export default router
