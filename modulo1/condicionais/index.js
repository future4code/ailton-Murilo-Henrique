// EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS

//  1.

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//  R: Ele recebe o numero do usuario, se for par ele passa no teste, se for impar ele não passa

//  2.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//  R: Ele serve para o usuario escolher uma fruta e ele devolver seu preço, se ele pedir uma maça ira retornar "O preço da maça é R$ 2.25", se colocar Pêra sem o break, ela entraria no default e custaria 5.0 em vez de 5.5

//  3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//  R: A primeira linha pede a informação de um numero ao usuario e transforma essa string em number
// colocando o numero 10 irá liberar a mensagem secreta, pois a função considera numero maiores de 0, se fosse -10 iria dar um erro
// Irá dar erro em caso de numeros menores que 0, pois não foi definida uma condição para essa situação.

//  EXERCICIOS DE ESCRITA DE CODIGO

//  1.

// let idade = Number(prompt("Digite sua idade em numericos"))

// if (idade >=18){

// console.log("Você pode dirigir")
// }

// else {

//     console.log("Você não pode dirigir")
// }

//  2.

// let turno = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)");
// let turnoAluno = turno.toUpperCase()

// if (turnoAluno === "M"){
//     console.log("Bom-dia!")
// }
// else if (turnoAluno === "V"){
//     console.log("Boa-tarde!")
// }
// else if (turnoAluno === "N")
//     console.log("Boa-noite!")

// else if (turnoAluno != "M", "V", "N"){
//     console.log("ERRO: tente novamente")

// }

//  3.


// let turno = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)");
// let turnoAluno = turno.toUpperCase()

// switch (turnoAluno){
//     case("M"):
//         console.log("Bom-dia!")
//         break
//     case("V"):
//         console.log("Boa-tarde!")    
//         break
//     case("N"): 
//         console.log("Boa-noite!")
//         break
//     default:
//         console.log("ERRO: tente novamente")
//      break
// }

//  4.

// const genero = prompt("Digite o genero do filme")
// const valorIngresso = Number(prompt("Digite em numerico o valor do ingresso do filme"))
// const generoFilme = genero.toUpperCase()

// if (generoFilme === "FANTASIA" && valorIngresso < 15){
//     console.log("Bom Filme!")
// }
// else {
//    console.log("Escolha outro filme :(")
// }

