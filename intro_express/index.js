import e from "express"
import cors from "cors"

const app = e()

app.use(cors())

let users = [
    { name: "Jorge" },
    { name: "Marta" },
    { name: "Hugo" }
]


app.get("/", (request, response) => {

    response.send("<h1>Welcome to my api</h1>")
})


app.get("/intro", (request, response) => {

    response.send("hola")
})

app.get("/users", (request, response) => {

    response.send({ users, status: "ok" })
})

app.get("/add-users/:name", (request, response) => {
    users.push({name: request.params.name})
    response.send({ users, status: "ok" })
})



app.listen(process.env.PORT || 3000)