import React, { useState } from "react"
import { useCoctailCtx } from "../contexts/coctailCtx"
import useFetch from "../customHooks/useFetch"
import { Coctails } from "./Coctails"

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:4000"
const FETCH_URL = `${API_URL}/api/coctails`

export interface ICoctailData {
  name: string
  instructions: string
  thumbnail: string
  ingredients: string[]
}

export default function App() {
  const { data: coctails, error } = useFetch<ICoctailData[]>(FETCH_URL)
  const [search, setSearch] = useState("")
  const coctailCtx = useCoctailCtx()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        className="search shadow"
        placeholder={"search coctail..."}
        type="text"
        onChange={handleSearch}
      />
      <div className="container-grid">
        {coctails
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((coctail) => (
            <Coctails key={coctail.name} {...coctail} />
          ))}
      </div>
    </div>
  )
}
