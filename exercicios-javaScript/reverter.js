// Descrição: Crie uma função que reverta uma string fornecida como argumento.
//     console.log(reverterString('Hello, World!')); // "!dlroW ,olleH"
// console.log(reverterString('JavaScript é incrível!')); // "!levírcni é tpircSavaJ"
// console.log(reverterString('Ressecar')); // "racesseR"
// console.log(reverterString('Hello, my name is GPT-3')); // "3-TPG si eman ym ,olleH"
// console.log(reverterString('12345')); // "54321"

let guardString = "Hello World!";

function toReverseString(guardString) {
    let reverteString = ""
    for (let i = guardString.length - 1; i >= 0; i--) {
        reverteString += guardString[i];
    }
    return reverteString
}

console.log(toReverseString(guardString));