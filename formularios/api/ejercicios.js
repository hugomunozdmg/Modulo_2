import e from "express"
import cors from "cors"


const app = e()
const PORT = 3000

app.use(e.static("public"))
//1
let animals = [
    {
        name: "Bart",
        age: 19,
        type: "dog"
    },
    {
        name: "Pizca",
        age: 1,
        type: "hamster"
    },
    {
        name: "Lucifer",
        age: 8.5,
        type: "cat"
    }
]

app.get("/", (req, res) => {
    res.send(`
        <div>
        ${animals.map(animal => `
            <form action="http://localhost:3000/adoptar">
                <input name="name" value="${animal.name}"/>
                <p>${animal.age}</p>
                <p>${animal.type}</p>
                <button type="submit">adoptar</button>
            </form>
            `)}
        </div>
        `)
})

//2
app.get("/crear-animal", (req, res) => {
    const name = req.query.name
    const age = req.query.age
    const type = req.query.type

    animals.push({ name, age, type })
    res.send(`
        <div>
        ${animals.map(animal => `
            <div>
                <p>${animal.name}</p>
            </div>
            `)}
        </div>
        `)
})


//4
app.get("/adoptar", (req, res) => {
    const name = req.query.name

    animals = animals.filter(animal => animal.name != name)

    res.send(`
        <div>
        ${animals.map(animal => `
            <div>
                <p>${animal.name}</p>
            </div>
            `)}
        </div>
        `)
})


app.listen(PORT, () => { console.log(`api running on port ${PORT}`) })