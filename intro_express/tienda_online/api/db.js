const fruteria = {
    nombre: "fruteria",
    productos: [{
        nombre: "coco",
        precio: 2.49,
        stock: 4
    }, {
        nombre: "guayaba",
        precio: 3.8,
        stock: 7
    }
    ]
}
const lacteos = {
    nombre: "lacteos",
    productos: [
        {
            nombre: "queso curado",
            precio: 5,
            stock: 12
        },
        {
            nombre: "actimel",
            precio: 3.89,
            stock: 9
        }
    ]
}

const carniceria = {
    nombre: "carniceria",
    productos: []
}

const panaderia = {
    nombre: "panaderia",
    productos: []
}

const limpieza = {
    nombre: "limpieza",
    productos: []
}

export const producto = {
    nombre: null,
    precio: null,
    stock: null
}

export const cesta = {
    nombre: null,
    precio: null,
    cantidad: null
}

export const almacen = [fruteria, lacteos, carniceria, panaderia, limpieza]
export const cestas = []