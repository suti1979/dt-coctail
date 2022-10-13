import useFetch from "../customHooks/useFetch"
import { Coctail } from "./Coctail"

const FETCH_URL = "http://localhost:4000/api/coctail"

export default function App() {
  const { data, error } = useFetch<any>(FETCH_URL)

  console.log(data)

  if (error) return <p>There is an error fetching data from API... sorry.</p>
  if (!data) return <p>Loading...</p>

  return (
    <div>
      <h3>Welcome to</h3>
      <h1>Digital Mixers</h1>
      <Coctail />
    </div>
  )
}
