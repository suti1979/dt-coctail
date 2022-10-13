import express, { Express } from "express"
import cors from "cors"
import routes from "./routes/route"

const app: Express = express()
const PORT: number = parseInt(process.env.HOST) || 4000
const HOST: string = process.env.HOST || "127.0.0.1"
const API_URL: string = process.env.PROD_API_URL || "/api"

const corsOptions = {
  origin: process.env.CLIENT || "http://localhost:3000",
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(`${API_URL}/`, routes)

app.listen(PORT, HOST, () => console.log(`Server started @ http://${HOST}:${PORT}`))
