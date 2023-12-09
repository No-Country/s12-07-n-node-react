import { Router } from "express";
import { listController } from "../controllers/lists.controller.js";

const router = Router()

router.get('/', listController)

export default router
