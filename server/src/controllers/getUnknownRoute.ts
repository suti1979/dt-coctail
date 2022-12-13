import { Request, Response } from "express"

export const getUnknownRoute = (_: Request, respose: Response) => {
  respose.send("These are not the droids you're looking for...")
}
