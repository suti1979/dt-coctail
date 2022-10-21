import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Coctails } from "../Coctails"
import { mockData } from "../__mocks__/useFetch"

test("On click have selected", async () => {
  const { container } = render(<Coctails {...mockData} />)
  const CARD = container.firstChild
  expect(CARD).toHaveClass("card")
  userEvent.click(CARD)
  //expect(CARD).toHaveClass("selected")
})
