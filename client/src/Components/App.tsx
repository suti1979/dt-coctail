import { useState } from "react"
import useFetch from "../customHooks/useFetch"
import { Coctail } from "./Coctail"

const FETCH_URL = "http://localhost:4000/api/coctail"

export interface ICoctailData {
  name: string
  instructions: string
  thumbnail: string
  ingredients: string[]
}

export default function App() {
  const { data: coctails, error } = useFetch<ICoctailData>(FETCH_URL)
  const [selected, setSelected] = useState("")

  if (error) return <p>There is an error fetching data from API... sorry.</p>
  if (!coctails) return <p>Loading...</p>

  return (
    <div>
      {!selected ? (
        <>
          <h3>Welcome to</h3>
          <h1>Digital Mixers</h1>
        </>
      ) : (
        <>
          <h3>You have selected</h3>
          <h1>{selected}</h1>
        </>
      )}
      <div className="container-grid">
        {Object.values(coctails).map((coctail) => (
          // i know... set down setter is an ugly solution... fix it later
          <Coctail
            key={coctail.name}
            coctail={coctail}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </div>
    </div>
  )
}
