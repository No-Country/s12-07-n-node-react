import { Router } from "express";
import { loginController, registerController, sessionController } from "../controllers/auth.controller.js";
import { checkJWT } from '../middlewares/session.middleware.js'

const router = Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/session', checkJWT, sessionController)

export default router
