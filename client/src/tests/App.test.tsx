import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import App from "../Components/App"

afterEach(cleanup)

describe("Main functionality 3000ms wait to load", () => {
  test("Renders main page, and click event", () => {
    setTimeout(() => {
      render(<App />)
      const linkElement = screen.getByText(/Welcome to/i)
      expect(linkElement).toBeInTheDocument()

      const coctail_ABC = screen.getByText("ABC")
      fireEvent.click(coctail_ABC)
     

    }, 3000)
  })
})
