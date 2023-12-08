import { Router } from "express";
import { getContentByPlatformController } from "../controllers/content.controller.js";


const router = Router()

router.get('/:network', getContentByPlatformController)

export default router
