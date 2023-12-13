import { Router } from "express";
import { searchController, filterController, actorDetailController } from "../controllers/discover.controller.js";

const router = Router()

router.get('/search', searchController)
router.get('/actors/:id', actorDetailController)
router.get('/filter/:genre/:page', filterController)

export default router
