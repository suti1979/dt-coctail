import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "../App"

describe("Main page functionality", () => {
  test("Renders main page, Welcome", async () => {
    render(<App />)
    const WELCOME = await screen.findByText("Welcome to")
    expect(WELCOME).toBeInTheDocument()
  })

  test("Change main page to: You have selected", async () => {
    render(<App />)
    const CARDS = await screen.findByText("ABC")
    fireEvent.click(CARDS)

    waitFor(async () => {
      const SELECTED = await screen.findByText("You havee selected")
      expect(SELECTED).toBeInTheDocument()
    })
  })
})
