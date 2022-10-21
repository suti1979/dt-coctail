import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"
import { mockData } from "../__mocks__/useFetch"

beforeEach(() => {
  const mResponse = {
    ok: true,
    json: jest.fn().mockResolvedValue(mockData),
  }
  global.fetch = jest.fn().mockResolvedValue(mResponse)
})


describe("Main page functionality", () => {
  test("Renders main page, Welcome", async () => {
    render(<App />)
    expect(await screen.findByText(/Welcome/)).toBeInTheDocument()
  })

   test("Have 1 mock data", async () => {    
      render(<App />)
      const CARD = await screen.findByTestId("card")
      expect(CARD).toBeInTheDocument()      
   })
})
