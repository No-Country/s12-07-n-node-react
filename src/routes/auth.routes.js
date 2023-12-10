import { Router } from "express";
import { loginController, registerController, sessionController } from "../controllers/auth.controller.js";
import { checkJWT } from '../middlewares/session.middleware.js'
import { checkRegisterForm, checkLoginForm } from "../middlewares/auth.middleware.js";

const router = Router()

router.post('/register', checkRegisterForm, registerController)
router.post('/login', checkLoginForm, loginController)
router.get('/session', checkJWT, sessionController)

export default router
