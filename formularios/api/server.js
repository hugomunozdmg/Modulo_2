import e, { urlencoded } from "express"
import cors from "cors"

const app = e()

app.use(cors())
app.use(e.static("public"))



app.get("/", (req, res) => {
    res.send("hola")
})

app.get("/query/:id/", (req, res) => {
    let id = req.params.id
    let name = req.query.name
    console.log(req.params, req.query)
    res.send({ name: name })
})

app.get("/params/:name/:username/:password/:age", (req, res) => {
    req.params
    res.send("hola")
})


app.listen(3000)