function send() {
    let name = document.getElementById("name-input").value
    let username = document.getElementById("username-input").value

    fetch(`http://localhost:3000/query/12234/?name=${name}&username=${username}`).then(res => res.json()).then(data => {
        console.log(data)
    })

}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    send()
})