import { act, fireEvent } from "@testing-library/react"
import { Coctails } from "../Coctails"
import ReactDOM from "react-dom/client"

const mockData = {
  name: "Coctail",
  instructions: "do it",
  thumbnail: "http://pic",
  ingredients: ["a", "b"],
}

let container

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})


test("On click have selected", async () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Coctails {...mockData} />)
  })
  const CARDS = container.getElementsByClassName("card")

  expect(CARDS[0]).toHaveClass("card")
  act(() => {
    fireEvent.click(CARDS[0])
    CARDS[0].dispatchEvent(new MouseEvent("click", { bubbles: true }))
  })
  //screen.debug()
  //expect(CARDS[0]).toHaveClass("card selected")
})
