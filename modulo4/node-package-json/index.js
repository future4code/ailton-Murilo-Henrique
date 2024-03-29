"use strict";
// 1. a) utiliza-se o comando process.argv[x]
//QUESTÃO 1b
console.log("Olá, ", process.argv[2],"! Você tem ", process.argv[3]," anos.");

//QUESTÃO 1c
const futureAge = Number(process.argv[3]) + 7
console.log("Olá, ", process.argv[2],"! Você tem ", process.argv[3]," anos. Em sete anos você terá ", futureAge,".");

//QUESTÃO 2
const operation = process.argv[4];
const number1 = Number(process.argv[5]);
const number2 = Number(process.argv[6]);

let result = '';
if (operation === 'add') {
    result = `A soma é ${number1 + number2}`
} else if (operation === 'sub') {
    result = `A subtração é ${number1 - number2}`
} else if (operation === 'mult') {
    result = `A multiplicação é ${number1 * number2}`
} else if (operation === 'division') {
    result = `A divisão é ${number1 / number2}`
} else if (operation === 'module') {
    result = `O resto da divisão é ${number1 % number2}`
} else {
    result = 'Operação não reconhecida'
}

console.log(result);

//QUESTÃO 3
const tasks = ['Wake up',
'Brush teeth',
'Drink water'];
let newtask = process.argv[7];
let tasksList = [...tasks, newtask]

console.log('Tarefa adicionada com sucesso:', tasksList); 