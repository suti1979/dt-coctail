import { createContext, ReactNode, useContext, useState } from "react"

export interface ICoctailCtx {
  selected: string
  setSelected: (value: React.SetStateAction<string>) => void
}

type Props = {
  children?: ReactNode
}

const CoctailContext = createContext<ICoctailCtx>({} as ICoctailCtx)
export const useCoctailCtx = () => useContext(CoctailContext)

export default function CoctailProvider({ children }: Props) {
  const [selected, setSelected] = useState("")

  const value: ICoctailCtx = {
    selected,
    setSelected,
  }

  return <CoctailContext.Provider value={value}>{children}</CoctailContext.Provider>
}
