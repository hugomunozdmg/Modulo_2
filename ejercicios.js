document.getElementById("person-btn").addEventListener("click", savePerson)



function mostrarPersona(persona) {
    return `
    <div>
        <h1>${persona.nombre}</h1>
        <p>${persona.apellido}</p>
        <p>${persona.edad}</p>
    </div>
    `
}

fetch("http://localhost:3000/personas").then(res => res.json()).then(data => {
    document.getElementById("container").innerHTML = ""
    console.log(data)
    data.data.forEach(persona => {
        document.getElementById("container").innerHTML += mostrarPersona(persona)
    });
})

function getHtml(id) {
    return document.getElementById(id)
}


function savePerson() {
    let person = {
        nombre: getHtml("input-name").value,
        apellido: getHtml("input-surname").value,
        edad: getHtml("input-age").value
    }
    fetch("http://localhost:3000/personas", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    }).then(res => res.json()).then(data => {
        document.getElementById("container").innerHTML = ""
        data.data.forEach(persona => {
            document.getElementById("container").innerHTML += mostrarPersona(persona)
        });
    })
}

