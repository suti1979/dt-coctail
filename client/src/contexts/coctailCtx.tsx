import { createContext, ReactNode, useContext, useState } from "react"

export interface ICoctailCtx {
  selected: string
  setSelected: (_id: string) => void
}

const defaultCtxValues = {
  selected: "",
  setSelected: () => {},
}

type Props = {
  children?: ReactNode
}

const CoctailContext = createContext<ICoctailCtx>(defaultCtxValues)
export const useCoctailCtx = () => useContext(CoctailContext)

export default function CoctailProvider({ children }: Props) {
  const [selected, setSelected] = useState("")

  const value: ICoctailCtx = {
    selected,
    setSelected,
  }

  return <CoctailContext.Provider value={value}>{children}</CoctailContext.Provider>
}
