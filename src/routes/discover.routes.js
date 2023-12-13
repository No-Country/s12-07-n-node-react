import { Router } from "express";
import { searchController, filterController } from "../controllers/discover.controller.js";

const router = Router()

router.get('/search', searchController)
router.get('/filter/:genre/:page', filterController)

export default router
