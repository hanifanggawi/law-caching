import express from "express";
import { defaultRouter } from "./routes";
import * as dotenv from 'dotenv'
import { studentRouter } from "./routes/student";
import { requestLog } from "./util/middleware";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || 'http://localhost'

app.use(express.json())
app.use(requestLog)

app.use('/', defaultRouter())
app.use('/', studentRouter())

app.listen(PORT, () => console.log(`Server started on ${HOST}:${PORT}`))