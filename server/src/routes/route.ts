
import express, { Request, Response } from "express"
import { getCoctails } from "../controller/getCoctails"
const router = express.Router()

router.get("/coctails", getCoctails)

router.get("*", (_: Request, respose: Response) => {
  respose.send("These are not the droids you're looking for...")
})

export default router