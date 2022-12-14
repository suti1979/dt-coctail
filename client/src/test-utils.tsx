import { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import CoctailProvider from "./contexts/coctailCtx"

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: CoctailProvider, ...options })

export * from "@testing-library/react"
export { customRender as render }
