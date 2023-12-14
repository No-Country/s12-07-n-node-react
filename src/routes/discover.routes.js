import { Router } from "express";
import { filterByPlatformController, detailController, searchController, filterController, actorDetailController } from "../controllers/discover.controller.js";

const router = Router()

router.get('/search', searchController)
router.get('/detail/:media_type/:id', detailController)
router.get('/actors/:id', actorDetailController)
router.get('/filter/genre/:genre/:page', filterController)
router.get('/filter/platform/:platform/:page', filterByPlatformController)

export default router
