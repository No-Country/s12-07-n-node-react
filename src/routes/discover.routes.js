import { Router } from "express";
import { searchController } from "../controllers/discover.controller.js";

const router = Router()

router.get('/search', searchController)

export default router
