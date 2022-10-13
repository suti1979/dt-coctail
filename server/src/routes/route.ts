import express, { Request, Response } from "express"
const router = express.Router()

const API_URL:string = "www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

router.get("/coctail", (req: Request, res: Response) => {
  res.json([{ message: "something" }])
})

export default router
