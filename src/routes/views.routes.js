import { Router } from "express";
import { viewsController, listViewController, authViewController, contentViewController, discoverViewController } from "../controllers/views.controller.js";

const router = Router()

router.get('/', viewsController)
router.get('/auth', authViewController)
router.get('/discover', discoverViewController)
router.get('/trending', contentViewController)
router.get('/lists', listViewController)

export default router
