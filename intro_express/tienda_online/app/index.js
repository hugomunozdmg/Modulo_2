const baseUrl = "http://localhost:3000"


await displayShop()
await displayDropDown()

getHtml("departments-select").addEventListener("input", async (e) => {
    await displayAddNewProductSection()
    getHtml("add-product-btn").addEventListener("click", () => {
        addNewProduct(e.target.value)
    })
})


async function addNewProduct(department) {
    console.log(department)
    let nombre = getHtml("name").value
    let precio = getHtml("price").value
    let stock = getHtml("stock").value
    console.log(nombre, precio, stock)

    let response = await fetch(baseUrl + `/add-product/${department}/${nombre}/${precio}/${stock}`)
    let result = await response.json()

    if (result.result) {
        await displayShop()
    }

}

function getHtml(id) {
    return document.getElementById(id)
}

async function displayAddNewProductSection() {
    const html = await fetch("add-product.html")
    getHtml("add-product-container").innerHTML = await html.text()
}


async function displayDropDown() {
    const departments = await getDepartments()
    departments.departamentos.forEach(d => {
        getHtml("departments-select").innerHTML += `
        <option value=${d}>${d}</option>
        `
    })
}

async function displayShop() {
    const departmentNames = await getDepartments()

    departmentNames.departamentos.forEach(async name => {
        await displayDepartmentProducts(name)
    })

    departmentNames.departamentos.forEach(async name => {
        const response = await getDepartmentData(name)
        response.productos.forEach(product => {
            getHtml(`delete-btn-${product.nombre}`).addEventListener("click", async () => {
                await deleteProduct(product)
            })
        })
    })

}

async function getDepartments() {
    const result = await fetch(baseUrl + "/departamentos")
    return await result.json()
}

async function displayDepartmentProducts(department) {
    getHtml("departments").innerHTML = ""
    const response = await getDepartmentData(department)
    getHtml("departments").innerHTML += `<h1>${department}</h1>`
    response.productos.forEach(product => {
        getHtml("departments").innerHTML += `
                <div>
                    <p><strong>${product.nombre}</strong></p>
                    <p>Precio: ${product.precio}€</p>
                    <p>Stock: ${product.stock}</p>
                    <button id="delete-btn-${product.nombre}">eliminar</>
                </div>
                `
    })
}


async function deleteProduct(product) {
    let response = await fetch(baseUrl + `/delete-product/${product.nombre}`)
    let result = await response.json()

    if (result.result) {
        await displayShop()
    }

}

async function getDepartmentData(department) {
    const result = await fetch(baseUrl + "/" + department)
    return await result.json()
}
