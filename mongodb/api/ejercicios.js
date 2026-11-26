import { MongoClient } from "mongodb";
import e from "express"
import cors from "cors"



const app = e()


app.use(cors())

app.use(e.urlencoded({ extended: false }))
app.use(e.json())

const client = await MongoClient.connect("mongodb://admin:admin123@127.0.0.1:27017")

const db = client.db("tienda")

app.listen(3000)

app.get("/api", (req, res) => {
    res.send({ result: "hello world" })
})

// app.get("/data", async (req, res) => {

//     const result = await db.collection("samples_pokemon").find().limit(3).toArray()

//     res.send(result)
// })



app.get("/api/mesas", async (req, res) => {

    res.send(await db.collection("mesas").find().toArray())
})


app.post("/api/anyadir", async (req, res) => {
    let mesa = req.body

    res.send(await db.collection("mesas").insertOne(mesa))
})


app.put("/api/modificar/:color", async (req, res) => {
    res.send(await db.collection("mesas").updateOne({color:req.params.color},{$set:{color:"granate"}}))
})


app.delete("/api/borrar/:patas", async (req, res) =>{

    res.send(await db.collection("mesas").deleteMany({patas: parseInt(req.params.patas)}))
})