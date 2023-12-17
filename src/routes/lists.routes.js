import { Router } from "express";
import { addToListController, getListController } from "../controllers/lists.controller.js";
import { checkJWT } from '../middlewares/session.middleware.js'

const router = Router()

router.get('/:userId', getListController)
router.post('/', checkJWT, addToListController)

export default router
