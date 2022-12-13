import express, { Express } from "express"
import cors from "cors"
import routes from "./routes/routes"
import { getUnknownRoute } from "./controllers/getUnknownRoute"

const app: Express = express()
const PORT: number = parseInt(process.env.PORT) || 4000
const HOST: string = process.env.HOST || "127.0.0.1"
const API_URL: string = process.env.PROD_API_URL || "/api"

// const corsOptions = {
//   origin: process.env.CLIENT || "http://localhost:3000",
//   optionsSuccessStatus: 200,
// }

//app.use(cors(corsOptions))
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(`${API_URL}/`, routes)
app.get("*", getUnknownRoute)

const server = app.listen(PORT, HOST, () => console.log(`Server started @ http://${HOST}:${PORT}`))

process.on("SIGINT", () => {
  console.info("Interrupted")
  process.exit(0)
})

export default server
