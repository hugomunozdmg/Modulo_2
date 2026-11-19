import express from "express"

const app = express()


//2
// function randomNum(num) {
//     return parseInt(Math.random() * num + 1)
// }

// app.get("/random/:num", (req, res) => {
//     res.send(randomNum(req.params.num))
// })

//3
// let names = ["jorge", "Marta", "Martienza", "Jeorgino", "Hugo crack"]

// app.get("/persona", (req, res) => {

//     res.send(names)
// })

// app.get("/persona/:personName", (req, res) => {

//     let personName = req.params.personName
//     let response = "la persona no existe"
//     response = names.find((p) => p.toLowerCase() == personName.toLowerCase())
//     res.send(response)
// })


//4
// import saludarEnExpress from "archivo_inventado.js"

// function saludarEnExpress() {
//     return "hola desde express"
// }

// app.get("/saludar", (req, res) => {
//     res.send(saludarEnExpress())
// })

//5
// let persona = {
//     nombre: null,
//     apellidos: null,
//     edad: null
// }

// app.get("/persona", (req, res) => {
//     res.send(persona)
// })

// app.get("/register-name/:name", (req, res) => {
//     persona.nombre = req.params.name
//     res.send(persona)
// })

// app.get("/register-surname/:surname", (req, res) => {
//     persona.apellidos = req.params.surname
//     res.send(persona)
// })

// app.get("/register-age/:age", (req, res) => {
//     persona.edad = req.params.age
//     res.send(persona)
// })


//6

// let names = ["jorge", "Marta", "Martienza", "Jeorgino", "Hugo crack"]

// app.get("/add-teacher/:teacher", (req, res) => {
//     names.push(req.params.teacher)

//     res.send(names)
// })




app.listen(3000)