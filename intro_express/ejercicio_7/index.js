import e from "express";
import { getRandomNumber } from "./operations-service.js";
import { nums } from "./nums-service.js";

const app = e()
const port = 3000


app.get("/randomNumbers", (req, res) => {
    let response = []
    for (let i = 0; i < 100; i++) {
        response.push(getRandomNumber())
    }
    res.send(response)
})

app.get("/randomNumber", (req, res) => {
    nums[getRandomNumber()] += 1
    res.send(nums)
})
//8
app.get("/borrar/:numero", (req, res) => {
    let index = req.params.numero
    nums[index] = 0
    res.send(nums)
})



app.listen(port, () => {
    console.log(`running api on port ${port}`)
})