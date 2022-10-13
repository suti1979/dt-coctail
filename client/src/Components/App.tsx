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
  const [selected, setSelected] = useState("Affair")

  const handleClick = () => {
    console.log("cl")
  }

  if (error) return <p>There is an error fetching data from API... sorry.</p>
  if (!coctails) return <p>Loading...</p>

  return (
    <div>
      <h3>Welcome to</h3>
      <h1>Digital Mixers</h1>
      <div className="container-grid">
        {Object.values(coctails).map((coctail) => (
          <Coctail key={coctail.name} coctail={coctail} selected={selected} onClick={handleClick}/>
        ))}
      </div>
    </div>
  )
}
