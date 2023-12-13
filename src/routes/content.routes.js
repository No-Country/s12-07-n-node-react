import { Router } from "express";
import { getContentByGenreController, getContentByPlatformController, getUpcomingController } from "../controllers/content.controller.js";


const router = Router()

router.get('/upcoming', getUpcomingController)
router.get('/:network', getContentByPlatformController)
router.get('/genre/:genre', getContentByGenreController)

export default router
