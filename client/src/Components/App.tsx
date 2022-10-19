import { useState } from "react"
import { useCoctailCtx } from "../contexts/coctailCtx"
import useFetch from "../customHooks/useFetch"
import { Coctails } from "./Coctails"

const FETCH_URL = "http://localhost:4000/api/coctail"

export interface ICoctailData {
  name: string
  instructions: string
  thumbnail: string
  ingredients: string[]
}

export default function App() {
  const { data: coctails, error } = useFetch<ICoctailData>(FETCH_URL)
  const [search, setSearch] = useState("")
  const coctailCtx = useCoctailCtx()

  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }

  if (error) return <p>There is an error fetching data from API... sorry.</p>
  if (!coctails) return <p>Loading...</p>

  return (
    <div className="App">
      {!coctailCtx?.selected ? (
        <>
          <h3>Welcome to</h3>
          <h1>Digital Mixers</h1>
        </>
      ) : (
        <>
          <h3>You have selected</h3>
          <h1>{coctailCtx?.selected}</h1>
        </>
      )}
      <input
        className="search"
        placeholder={"search coctail..."}
        type="text"
        onChange={handleSearch}
      />
      <div className="container-grid">
        {Object.values(coctails)
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((coctail) => (
            <Coctails key={coctail.name} {...coctail} />
          ))}
      </div>
    </div>
  )
}
