// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

//  1.

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// R: Ele está pegando o valor 0 e somando com os proximos numeros, até o i chegar ao valor de 5, onde o i será igual a 5, não menor, então ele retornara a soma de 1, 2, 3 e 4, que será 10.

//  2.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// R.a: Ele irá pegar todos os numeros maiores que 18 e exibir no console.
// R.b: Sim, somente mudar a condição para que quais numeros apareçam

//  3.

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// R: Irá aparecer "*" em 4 linhas do console, cada linha aumentando a quantidade de "*" ate chegar no valor 4 ("****")


// EXERCICIOS DE ESCRITA DE CODIGO

//  1.

// let bichosUsuario = Number(prompt("Digite a quantidade de bichos de estimação que você tem em numericos."))
// let i = bichosUsuario
// if (i===0){
//     console.log("Que pena! Você pode adotar um pet!")

// }

// for (i = 0; i<bichosUsuario; i++){
//     array = []
//     array = prompt("Digite o nome do seu bicho de estimação.")
//     console.log(array)
    
// }

//  2.

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// //  a:
// for (let i = 0; i<arrayOriginal.length; i++){
 
//     console.log(arrayOriginal[i])
// }

// //  b:
// for (let i = 0; i<arrayOriginal.length; i++){
       
//     console.log(arrayOriginal[i]/10)
// }

// //  c:
// let arrayPares = []
// let x = 0

// for (let i = 0; i < arrayOriginal.length; i++) {
//     if ((arrayOriginal[i] % 2) == 0) {
//         arrayPares[x] = arrayOriginal[i];
//         x++; 
// }
// }
//     console.log(arrayPares)

// //  d:
// let index = 0 

// for (let i = 0; i < arrayOriginal.length; i++) {
    
//     arrayOriginal.push()
    
//     console.log(`O elemento do index ${index} é ${arrayOriginal[i]}`)
//     index ++
// }

// //  e:
// let valorMaximo
// let valorMinimo

// for (let i = 0; i < arrayOriginal.length; i++) {
//     valorMinimo = Math.min(...arrayOriginal)  
//     valorMaximo = Math.max(...arrayOriginal)
//     console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)
// }


