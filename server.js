import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import courseRoutes from "./routes/courses.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", courseRoutes)

app.get("/", (req, res) => {
    res.send("Couse Enrollment Api Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})