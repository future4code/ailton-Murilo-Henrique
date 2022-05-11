/*  Resposta das questões de interpretação.
    1. 
        Ira aparecer primeiro o numero "10" no console e depois os numeros "10" e "5".
    2.
        Ira aparecer os numeros "10 10 10" 
    3.  
        Alteraria a variavel "p" para "horasTrabalhadasPorDia" e a variavel "t" para "salarioPorDia"
*/

// Exercicios de escrita de codigo.

/* 1.

let seuNome //= prompt ("Digite seu nome")
let suaIdade //= prompt ("Digite sua idade")
//console.log (typeof seuNome, typeof suaIdade)
// Apareceu que é uma variavel "undefined" pois ela nao recebe nenhuma informacao ou valor.
seuNome = prompt ("Digite o seu nome") 
suaIdade = prompt ("Digite sua idade")
//console.log (typeof seuNome, typeof suaIdade)
// Agora aparece que é uma variavel string, pois ela recebeu um valor.
console.log ("Olá",seuNome, "você tem", suaIdade ,"anos")

*/

/* 2.

let estaComTosse = prompt ("Você está com tosse? (digite SIM ou NÃO)")
let estaComFebre = prompt ("Você está com febre? (digite SIM ou NÃO)")
let estaComCoriza = prompt ("Você está com coriza? (digite SIM ou NÃO)")
console.log("Você está com tosse? - ",estaComTosse)
console.log("Você está com febre? - ", estaComFebre)
console.log("Você está com coriza? - ", estaComCoriza)

*/

/* 3. 

let a = 10
let b = 25
let c = a

a = b
b = c 

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

*/

// Exercicio Bonus 


let primeiroNumero = Number(prompt("Digite um Numero"));
let segundoNumero = Number(prompt("Digite um Numero"));
const resultadoSoma = primeiroNumero + segundoNumero;

alert(resultadoSoma);
alert(primeiroNumero * segundoNumero);
