import { render, cleanup, screen, waitFor } from "@testing-library/react"
import App from "../Components/App"

afterEach(cleanup)

describe("Main functionality wait to load", () => {
  test("Renders main page, and click event", async () => {
    render(<App />)

    await waitFor(() =>
      expect(
        screen.getByText("There is an error fetching data from API... sorry.")
      ).toBeInTheDocument()
    )

    
  })
})
