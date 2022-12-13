import express from "express"
import { getCoctails } from "../controllers/getCoctails"
import { getUnknownRoute } from "../controllers/getUnknownRoute"

const router = express.Router()

router.get("/coctails", getCoctails)
router.get("*", getUnknownRoute)

export default router
