import express from "express"
import config from "./config/config.js"
import { start } from "./config/db.js"
import bookRoute from "./routes/bookRoute.js"

const PORT = config.PORT
start()

const app = express()

//middleware
app.use(express.json())

//API
app.use("/api/v1", bookRoute)

//listen server
app.listen(PORT, () => {
    console.log(`⚡️[server] Server is running on port ${PORT}`)
})

