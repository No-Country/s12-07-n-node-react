import { Router } from "express";
import { getContentByPlatformController, getUpcomingController } from "../controllers/content.controller.js";


const router = Router()

router.get('/:network', getContentByPlatformController)
router.get('/upcoming', getUpcomingController)

export default router
