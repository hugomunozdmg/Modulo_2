import e from "express"
import cors from "cors"


const app = e()

app.use(cors())
app.use(e.urlencoded({extended: false}));
app.use(e.json());

const PORT = 3000

app.get("/:data1", (req, res) => {
    let data1 = req.params.data1
    let data2 = req.query.data2

    res.send({ data1, data2 })
})

app.delete("/:data1", (req, res) => {
    let data1 = req.params.data1
    let data2 = req.query.data2
    let datosTochos = req.body
console.log(datosTochos)
    res.send({ data1, data2, datosTochos })
})


app.listen(PORT, () => {
    console.log(`api running on port ${PORT}`)
})