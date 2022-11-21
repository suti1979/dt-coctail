
import express from "express"
import { getCoctails, getUnknownRoute } from "../controller/getCoctails"
const router = express.Router()

router.get("/coctails", getCoctails)
router.get("*", getUnknownRoute)

export default router