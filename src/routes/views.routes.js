import { Router } from "express";
import { viewsController, authViewController, contentViewController } from "../controllers/views.controller.js";

const router = Router()

router.get('/', viewsController)
router.get('/auth', authViewController)
router.get('/trending', contentViewController)

export default router
