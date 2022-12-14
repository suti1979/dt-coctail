import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"
import userEvent from "@testing-library/user-event"

describe("Main page functionality", () => {
  test("Renders main page, Welcome", async () => {
    render(<App />)
    expect(await screen.findByText(/Welcome/)).toBeInTheDocument()
  })

  test("Have 1 mock data", async () => {
    render(<App />)
    const card = await screen.findByTestId("card")
    expect(card).toBeInTheDocument()
  })
})

describe("Search field", () => {
  test("Handle input", async () => {
    const user = userEvent.setup()
    render(<App />)
    const search = await screen.findByPlaceholderText("search coctail...")
    await user.type(search, "Süti")
    expect(search).toHaveValue("Süti")
  })
})
