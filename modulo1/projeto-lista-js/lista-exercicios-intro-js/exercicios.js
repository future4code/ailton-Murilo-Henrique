// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

const altura = Number(prompt("Digite a altura do retangulo"))
const largura = Number(prompt("Digite a largura do retangulo"))
const area = altura * largura
console.log (area)

}

// EXERCÍCIO 02
function imprimeIdade() {

const anoAtual = Number(prompt("Digite o ano atual"))
const anoNascimento = Number(prompt("Digite seu ano de nascimento"))
const idade = anoAtual - anoNascimento
console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

// peso = Number(prompt("Digite seu peso em kgs"))
// altura = Number(prompt("Digite sua altura em metros"))
let imc = (peso / (altura*altura))
return (imc)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let email = prompt("Digite seu email")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 
const cor1 = prompt("Digite sua cor favorita") 
const cor2 = prompt("Digite sua segunda cor favorita") 
const cor3 = prompt("Digite sua terceira cor favorita") 

console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

const stringMaiuscula = string.toUpperCase()

return(stringMaiuscula)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

const quantidadeDeIngressos = custo / valorIngresso
return (quantidadeDeIngressos)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

return (string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

const primeiroItem = array[0]

return (primeiroItem)

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

const ultimoItem = array[array.length-1]

return (ultimoItem)

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

const primeiro = array.shift()
const ultimo = array.pop()
array.unshift(ultimo)
array.push(primeiro)

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()

  let igualdade = string1 === string2

  return (igualdade)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {


}