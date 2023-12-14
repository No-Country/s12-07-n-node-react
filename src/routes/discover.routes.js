import { Router } from "express";
import { detailController, searchController, filterController, actorDetailController } from "../controllers/discover.controller.js";

const router = Router()

router.get('/search', searchController)
router.get('/detail/:media_type/:id', detailController)
router.get('/actors/:id', actorDetailController)
router.get('/filter/:genre/:page', filterController)

export default router
