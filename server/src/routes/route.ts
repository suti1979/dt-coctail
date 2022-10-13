import axios from "axios"
import express, { Request, Response } from "express"
const router = express.Router()

interface ICoctailData {
  name: string
  instructions: string
  thumbnail: string
  ingredients: string[]
}

const API_URL: string = "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

router.get("/coctail", (_: Request, respose: Response) => {
  axios
    .get(API_URL)
    .then((res) => {
      const data = []
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
    })
    .catch((err) => console.error(err))
})

const getIngredients = (data) => {
  const arr = []
  //console.log(data["strIngredient"].length)
  for (let i = 1; i < 15; i++) {
    if (data["strIngredient" + i] != null) arr.push(data["strIngredient" + i])
    else break
  }
  return arr
}

export default router
