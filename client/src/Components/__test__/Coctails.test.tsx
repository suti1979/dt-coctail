import { render, screen } from "@testing-library/react"
import { Coctails } from "../Coctails"
import mockData from "../../__mocks__/useFetch.json"

describe("Coctails component", () => {
  test("On click have selected", async () => {
    render(<Coctails {...mockData} />)

    const img = screen.getByAltText("coctail")
    expect(img).toBeInTheDocument()

    const ul = screen.queryByRole("list")
    expect(ul).not.toBeInTheDocument()
  })
})
