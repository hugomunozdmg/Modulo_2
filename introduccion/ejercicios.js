// a. 789+34+250443
// b. 2059-79
// c. 3.24*97.856
// d. 1205/12.002

//3
// import exactMath from "exact-math"

// console.log(exactMath.add(789, 34, 250443));
// console.log(exactMath.sub(2059, 79));
// console.log(exactMath.mul(3.24, 97.856));
// console.log(exactMath.div(1205, 12.002));


//4
// import { minusNum } from "./service.js";
// const miFuncion = require("./service")

// const num1 = 6
// const num2 = 40

// console.log(miFuncion(num1, num2))


//6
// import { sentenceLength } from "./service.js";

// const text = "hola mundo"

// console.log(`La longitud de "${text}" es ${sentenceLength(text)} caracteres.`)


//7

// import { createConsecutivesValues, createRandomNum } from "./service.js";

// console.log(createConsecutivesValues(createRandomNum()))

//8

// import data from "./service.js";

// console.log(data.boolean, data.object.c)


//9

// import { esPar, createRandomNum } from "./service.js";

// let randomNum = createRandomNum()
// console.log(`El numero ${randomNum} es ${esPar(randomNum) ? "par" : "impar"}`)

//10
import { createConsecutivesValues, createRandomNum, showArray } from "./service.js"

let numsArray = createConsecutivesValues(createRandomNum())

showArray(numsArray, 1)
showArray(numsArray, -1)
