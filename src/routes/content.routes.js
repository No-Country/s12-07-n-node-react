import { Router } from "express";
import { getContentByPlatformController, getUpcomingController } from "../controllers/content.controller.js";


const router = Router()

router.get('/upcoming', getUpcomingController)
router.get('/:network', getContentByPlatformController)

export default router
