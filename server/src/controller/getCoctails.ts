import axios from "axios"
import { Request, Response } from "express"

interface ICoctailData {
  name: string
  instructions: string
  thumbnail: string
  ingredients: string[]
}

const API_URL: string = "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

export const getCoctails = async (_: Request, respose: Response) => {
  try {
    const res = await axios.get(API_URL)
    const data: ICoctailData[] = []
    const dataLength = res.data.drinks.length > 8 ? 8 : res.data.drinks.length
    for (let i = 0; i < dataLength; i++) {
      const parseData: ICoctailData = {
        name: res.data.drinks[i].strDrink,
        instructions: res.data.drinks[i].strInstructions,
        thumbnail: res.data.drinks[i].strDrinkThumb,
        ingredients: getIngredients(res.data.drinks[i]),
      }
      data.push(parseData)
    }

    respose.json(data)
  } catch (err: unknown) {
    console.error(err)
    respose.send({ error: "Cannot get data...sorry: ", err })
  }
}

const getIngredients = (data: string[]) => {
  const arr = []
  for (let i = 1; i < 15; i++) {
    if (data["strIngredient" + i] != null) arr.push(data["strIngredient" + i])
    else break
  }
  return arr
}

export const getUnknownRoute = (_: Request, respose: Response) => {
  respose.send("These are not the droids you're looking for...")
}
