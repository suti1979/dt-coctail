import { render, cleanup } from "@testing-library/react"
import App from "../Components/App"

afterEach(cleanup)

describe("Main functionality wait to load", () => {
  test("Renders main page, and click event", async () => {
    const { getByText } = render(<App />)
    // await waitFor(() => {
    //   expect(getByText("wellcome")).toBeInTheDocument()
    // })

    // const coctail_ABC = screen.getByText("ABC")
    // fireEvent.click(coctail_ABC)

    //Todo: mock Api
    // check selected state
  })
})
