//QUESTÃO 2
const operation = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

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