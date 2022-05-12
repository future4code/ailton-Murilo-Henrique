// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

//  1.

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//Irá multiplicar a variavel por 5, você indicando que as variaveis sao 2 e 10, irá aparecer 10 e 50
//Não vai aparecer nada, pois você não está pedindo para a informação aparecer no console, então dara um erro 

//  2.

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// Dependendo do texto ele vai dar true ou false para se caso exista a palavra cenoura nele, para garantir maior confiabilidade, ele tambem transforma todo o texto para letras minusculas.
// As tres afirmações serao TRUE, pois todas contem a palavra "cenoura" mesmo que com "cenouras" tenha um s no final, ela terá a palavra cenoura dentro dela então é true

// EXERCICIOS DE ESCRITA DE CODIGOS

//   1.a

//  function mensagem (){

// console.log("Eu sou Murilo, tenho 24 anos, moro em Vinhedo e sou estudante.")
//  }
 
// mensagem()

//  1.b

// let nome = prompt("Digite seu nome")
// let idade = prompt("Digite sua idade")
// let endereco = prompt("Digite seu endereço")
// let profissao = prompt("Digite sua profissão")

// function apresentacaoParametros (nome, idade, endereco, profissao){


// }
// console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)


//  2.a

// const soma = (numero1, numero2) => numero1 + numero2
// console.log(soma(Number(prompt("Digite um número")),Number(prompt("Digite outro número"))))

//  2.b

// function maiorOuIgual (a, b){
// let  comparar = a >= b
// return comparar

// }

// let numero1 = Number(prompt("Digite um numero"))
// let numero2 = Number(prompt("Digite outro numero"))

// console.log(maiorOuIgual(numero1,numero2))

//  2.c

// function parOuImpar (numero1) {
// let resto = numero1 % 2
// let resposta = resto === 0 
// return resposta
// }
// console.log(parOuImpar(Number(prompt("Digite um numero"))))

//  2.d

// const mensagem = (mensagem) => {
// let mensagemUm = prompt ("Digite aqui uma mensagem")
// let mensagemUmMinuscula = mensagemUm.toUpperCase()
// let tamanho = mensagemUmMinuscula.length
// console.log(tamanho)
// console.log(mensagemUmMinuscula)
// }
// console.log(mensagem())


// 3.

// let numero1 = Number(prompt("Digite um numero"))
// let numero2 = Number(prompt("Digite outro numero"))
// const soma = (a,b) => a+b
// const subtracao = (a,b) => a-b
// const multiplicacao = (a,b) => a*b
// const divisao = (a,b) => a/b
// console.log(`Numeros inseridos: ${numero1} e ${numero2}
// Soma: ${soma(numero1, numero2)}
// Subtração: ${subtracao(numero1, numero2)}
// Multiplicação: ${multiplicacao(numero1, numero2)}    
// Divisão: ${divisao(numero1, numero2)}`)
