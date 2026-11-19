import e from "express"
import cors from "cors"
import { almacen, producto } from "./db.js"

const app = e()
app.use(cors())
const PORT = 3000

app.get("/departamentos", (req, res) => {
    const departmentNames = []
    almacen.forEach(department => {
        departmentNames.push(department.nombre)
    })
    res.send({ departamentos: departmentNames })
})

app.get("/add-product/:department/:name/:price/:stock", (req, res) => {
    const department = req.params.department
    delete req.params.department

    console.log(req.params)
    almacen.forEach(d => {
        if (d.nombre == department) {
            d.productos.push({
                nombre: req.params.name,
                precio: req.params.price,
                stock: req.params.stock
            })
        }
    })

    res.send({ result: true })
})

app.get("/delete-product/:name", (req, res) => {
    const nombre = req.params.name

    almacen.forEach(d => {
        d.productos.forEach((p, index) => {
            if (p.nombre == nombre) {
                d.productos.splice(index, index + 1)
            }
        })
    })

    res.send({ result: true })
})
app.get("/fruteria", (req, res) => {
    res.send({ departamento: almacen[0].nombre, productos: almacen[0].productos })
})

app.get("/compra/fruteria", (req, res) => {
    res.send()
})

app.get("/carniceria", (req, res) => {
    res.send({ departamento: almacen[2].nombre, productos: almacen[2].productos })
})

app.get("/compra/carniceria", (req, res) => {
    res.send()
})

app.get("/panaderia", (req, res) => {
    res.send({ departamento: almacen[3].nombre, productos: almacen[3].productos })
})

app.get("/compra/panaderia", (req, res) => {
    res.send()
})

app.get("/lacteos", (req, res) => {
    res.send({ departamento: almacen[1].nombre, productos: almacen[1].productos })
})

app.get("/compra/lacteos", (req, res) => {
    res.send()
})

app.get("/limpieza", (req, res) => {
    res.send({ departamento: almacen[4].nombre, productos: almacen[4].productos })
})

app.get("/compra/limpieza", (req, res) => {
    res.send()
})



app.listen(PORT, () => {
    console.log(`Api running on port ${PORT}`)
})