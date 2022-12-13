import { Request, Response } from "express"
import axios from "axios"

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
export const api = null

export const getCoctails = async (_: Request, response: Response) => {
  try {
    const api = await axios.get(API_URL)
    const res: IApiResponse = api.data
    const parsedData = parseResponse(res)

    response.status(200).json(parsedData)
  } catch (err: unknown) {
    response.send({ error: "Cannot get data...sorry: ", err })
  }
}

const parseResponse = (res: IApiResponse) => {
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
  return data
}

const getIngredients = (data: IDrink) => {
  const arr = []
  for (let i = 1; i < 15; i++) {
    if (data["strIngredient" + i] != null) arr.push(data["strIngredient" + i])
    else break
  }
  return arr
}

// const _importDynamic = new Function("modulePath", "return import(modulePath)")

// export const fetch = async function (...args: any) {
//   const { default: fetch } = await _importDynamic("node-fetch")
//   return fetch(...args)
// }
