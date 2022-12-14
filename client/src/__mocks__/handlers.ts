import { rest } from "msw"

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:4000"
const FETCH_URL = `${API_URL}/api/coctails`

export const handlers = [
  rest.get(FETCH_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "A1",
          instructions:
            "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
          thumbnail: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
          ingredients: ["Gin", "Grand Marnier", "Lemon Juice", "Grenadine"],
        },
      ])
    )
  }),
]
