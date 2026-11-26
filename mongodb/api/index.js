import e from "express"
import cors from "cors"
import { connectDb } from "./db.js"

const app = e()
const PORT = 3000

app.use(cors())
app.listen(PORT)

let db = await connectDb("pokemon")



app.get("/", function (req, res) {
    res.send({ result: "working" })
})


app.get("/data", async (req, res) => {
    let result = await db.collection("samples_pokemon").find().limit(3).toArray()
    res.send({ result: result })
})


