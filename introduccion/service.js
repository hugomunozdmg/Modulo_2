//4
// function minusNum(a, b) {
//     return a < b ? a : b
// }

// module.exports = minusNum

//5

// const name = "Jorge"
// export default name

//6

export function sentenceLength(text) {
    return text.length
}

//7

export function createConsecutivesValues(value) {
    let result = []
    for (let i = 0; i < 10; i++) {
        result.push(value + i)
    }
    return result
}

export function createRandomNum() {
    return parseInt(Math.random() * 1000)
}

//  let data = {
//     "array": [1, 2, 3],
//     "boolean": true,
//     "number": 123,
//     "object": {
//         "a": "b",
//         "c": "d",
//         "e": "f"
//     },
//     "string": "Hello World"
// }

// export default data


//9

export function esPar(num) {
    return num % 2 == 0
}


function formatArray(valuesList) {
    return valuesList.join(" | ")
}

function reverseArray(valuesList) {
    let reverseArray = []

    for(let i = valuesList.length - 1; i >= 0; i--){
        reverseArray.push(valuesList[i])
    }
    return formatArray(reverseArray)
}

export function showArray(valuesList, order){
    console.log(order > 0 ? formatArray(valuesList) : reverseArray(valuesList))
}

