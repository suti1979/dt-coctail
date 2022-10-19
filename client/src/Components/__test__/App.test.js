import { render, screen } from "@testing-library/react"
import App from "../App"

describe("Main page functionality", () => {
  test("Renders main page, Welcome", async () => {
    render(<App />)
    const WELCOME = await screen.findByText(/Welcome/)
    expect(WELCOME).toBeInTheDocument()
  })

  test("8 items showed up", async () => {
    render(<App />)
    const CARDS = await screen.findAllByTestId("card")
    expect(CARDS.length).toBe(8)
  })
})
