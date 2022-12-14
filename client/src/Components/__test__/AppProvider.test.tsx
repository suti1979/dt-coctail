import { render, screen } from "../../test-utils"
import App from "../App"
import { server } from "../../__mocks__/server"
import { rest } from "msw"
import userEvent from "@testing-library/user-event"
import { Coctails } from "../Coctails"
import mockData from "../../__mocks__/useFetch.json"

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:4000"
const FETCH_URL = `${API_URL}/api/coctails`

describe("Provider test", () => {
  test("Renders main page, Welcome", async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByText(/Loading.../)).toBeInTheDocument()
    expect(await screen.findByText(/Welcome/)).toBeInTheDocument()

    const img = screen.getByAltText("coctail")
    await user.click(img)
    expect(await screen.findByText("You have selected")).toBeInTheDocument()
  })
})

window.scrollTo = jest.fn()

describe("Coctails component", () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  test("details after click", async () => {
    const user = userEvent.setup()
    render(<Coctails {...mockData} />)

    const img = screen.getByAltText("coctail")
    expect(img).toBeInTheDocument()

    const cardDiv = screen.getByTestId("card")
    expect(cardDiv).toBeInTheDocument()

    await user.click(cardDiv)
    expect(cardDiv).toHaveClass("selected")
    const closeBtn = screen.getByTestId("closebtn")
    
    await user.click(closeBtn)
    expect(closeBtn).not.toBeInTheDocument()
  })

  test("Renders error", async () => {
    server.use(
      rest.get(FETCH_URL, (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    render(<App />)
    const error = await screen.findByText("There is an error fetching data from API... sorry.")
    expect(error).toBeInTheDocument()
  })
})
