import { Request, Response } from "express"

const _importDynamic = new Function("modulePath", "return import(modulePath)")

export const fetch = async function (...args: any) {
  const { default: fetch } = await _importDynamic("node-fetch")
  return fetch(...args)
}

interface ICoctailData {
  name: string
  instructions: string
  thumbnail: string
  ingredients: string[]
}

interface IDrink {
  strDrink: string
  strInstructions: string
  strDrinkThumb: string
}

interface IApiResponse {
  drinks: [IDrink]
}

const API_URL: string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

export const getCoctails = async (_: Request, respose: Response) => {
  try {
    const api = await fetch(API_URL)
    const res: IApiResponse = await api.json()

    const data: ICoctailData[] = []
    const dataLength = res.drinks.length > 8 ? 8 : res.drinks.length
    for (let i = 0; i < dataLength; i++) {
      const parseData: ICoctailData = {
        name: res.drinks[i].strDrink,
        instructions: res.drinks[i].strInstructions,
        thumbnail: res.drinks[i].strDrinkThumb,
        ingredients: getIngredients(res.drinks[i]),
      }
      data.push(parseData)
    }

    respose.json(data)
  } catch (err: unknown) {
    console.error(err)
    respose.send({ error: "Cannot get data...sorry: ", err })
  }
}

const getIngredients = (data: IDrink) => {
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
