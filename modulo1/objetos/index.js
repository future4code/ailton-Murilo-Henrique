// EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS

//  1.

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]);
// console.log(filme.elenco[filme.elenco.length - 1]);
// console.log(filme.transmissoesHoje[2]);

// será impresso o primeiro item do array "Matheus Nachtergaele", depois irá imprimir o ultimo nome do array  "Virginia Cavendish" e o terceiro local onde o filme será exibido "canal: Globo, horario: 14h"

//  2.

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//  2.a
/*  
primeiro irá imprimir: 
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"  
depois irá imprimir:
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"
e por fim:
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
    */

// 2.b

// Ele trás as informações do objeto e copia no novo objeto criado.

// 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// 3.a
// irá ser impresso a informação false do backender e undefined da altura.

// 3.b
// Ele buscou a informação do backender e achou o false, já altura não foi passada, entao nao tem a informação, assim fica como undefined.

// EXERCICIOS DE ESCRITA DE CODIGO

//  1.a

// const pessoa = {
//     nome: "Amanda",
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }
// function texto(){

// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
// }

// texto ()

// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["Mandinha", "Mandi", "Amandinha"],
   
// }

// function textoNovo(){

// console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]}, ${novaPessoa.apelidos[2]}`)
// }

// textoNovo()

// 2.

// let infoPessoa1 = []
// let infoPessoa2 = []

// const pessoa1 = {
//     nome: "Murilo",
//     idade: 24,
//     profissao: "Estudante"

// }    

// const pessoa2 ={
//     nome: "Fulano",
//     idade: 21,
//     profissao: "motorista"

// }

// function pessoas (pessoa1, pessoa2){

// let array = []

// let nome1 = pessoa1.nome
// let nome2 = pessoa2.nome


// console.log(`"${nome1}", ${nome1.length}, ${pessoa1.idade}, "${pessoa1.profissao}", ${pessoa1.profissao.length}`)
// console.log(`"${nome2}", ${nome2.length}, ${pessoa2.idade}, "${pessoa2.profissao}", ${pessoa2.profissao.length}`)

// return array
// }

// pessoas(pessoa1, pessoa2)


//  3.

// let carrinho = []

// const fruta1 = {
//     nome: "Mamão",
//     disponibilidade: true

// }

// const fruta2 = {
//     nome: "Banana",
//     disponibilidade: true

// }

// const fruta3 = {
//     nome: "Uva",
//     disponibilidade: true

// }

// function sacolao (fruta1, fruta2, fruta3){

// carrinho.push(fruta1)
// carrinho.push(fruta2)
// carrinho.push(fruta3)

// return carrinho

// }

// sacolao(fruta1, fruta2, fruta3)
// console.log(carrinho)