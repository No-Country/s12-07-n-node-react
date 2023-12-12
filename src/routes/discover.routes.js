import { Router } from "express";
import { searchController, detailController } from "../controllers/discover.controller.js";

const router = Router()

router.get('/search', searchController)
router.get('/detail/:id', detailController)

export default router
