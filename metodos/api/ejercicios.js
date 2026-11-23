import e from "express"
import cors from "cors"

const app = e()

app.use(e.urlencoded({ extended: false }))
app.use(e.json())
app.use(cors())

let personas = [
    {
        nombre: "jorge",
        apellido: "ponce",
        edad: 42
    },
    {
        nombre: "Marta",
        apellido: "Sanchez",
        edad: 45
    },
    {
        nombre: "Hugo",
        apellido: "Silva",
        edad: 51
    }
]

app.get("/", (req, res) => {
    res.send({ data: "hello world" })
})

app.get("/personas", (req, res) => {
    res.send({ data: personas })
})


app.post("/personas", (req, res) => {
    personas.push(req.body)
    res.send({ data: personas })
})


app.put("/personas", (req, res) => {
    const person = req.body

    personas.forEach(p => {
        if (person.nombre == p.nombre) {
            p.apellido = person.apellido
            p.edad = person.edad
        }
    })

    res.send({ data: personas })
})


app.delete("/personas", (req, res) => {
    const person = req.body

    personas.forEach((p, index) => {
        if (person.nombre == p.nombre) {
            personas.splice(index, 1)
        }
    })

    res.send({ data: personas })
})




app.listen(3000)