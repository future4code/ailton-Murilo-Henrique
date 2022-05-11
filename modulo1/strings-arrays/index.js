// EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS

//  1.
// let array
// console.log('a. ', array)
// // vai aparecer que a array está indefinida por não ter nenhum valor atribuido
// array = null
// console.log('b. ', array)
// // vai aparecer que a array é null, pois você atribuiu essa falta de valor nela
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // agora foi atribuido uma lista de valores na array e o console irá exibir o tamanho dessa lista
// let i = 0
// console.log('d. ', array[i])
// // foi criado uma nova variavel que recebeu o valor 0, então pediu para mostrar qual item da array equivale ao valor da nova variavel que é o 3
// array[i+1] = 19
// console.log('e. ', array)
// // Foi atribuido o valor de 19 no item (0+1) da lista, ou seja no lugar do numero 4, agora é o numero 19
// const valor = array[i+6]
// console.log('f. ', valor)
// // foi criado uma variavel valor e nela atribuida ao item numero 6 da lista, ja que o i=0, ai ira exibir no console o numero 9

//  2.

//  const frase = prompt("Digite uma frase")

//  console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// a frase irá ficar "SUBI NUM ONIBUS EM MIRROCOS" e o tamanho da frase que é 27    

// EXERCICIOS DE ESCRITA DE CODIGO

//  1.

// const nomeDoUsuario = prompt("Digite seu Nome:")
// const emailDoUsuario = prompt ("Digite seu Email:")
// console.log("O email " +  emailDoUsuario + "  foi cadastrado com sucesso. Seja bem-vinda(o),  " +  nomeDoUsuario)

//  2.

//let comidasPreferidas = ["Japonesa" , "Churrasco" , "Lasanha" , "Hamburguer" , "Pizza"]

//console.log (comidasPreferidas)

//  console.log (`Essas são as minhas comidas preferidas:  
//  ${comidasPreferidas [0]}
//  ${comidasPreferidas [1]}
//  ${comidasPreferidas [2]}
//  ${comidasPreferidas [3]}
//  ${comidasPreferidas [4]}`)

// comidasPreferidas [1] = prompt("Digite uma comida")

//  3.

// let listaDeTarefas = []

// listaDeTarefas.push(prompt("Digite uma tarefa"))
// listaDeTarefas.push(prompt("Digite uma tarefa"))
// listaDeTarefas.push(prompt("Digite uma tarefa"))

// console.log(listaDeTarefas)

// let tarefaRealizada = prompt("Digite o numero de qual tarefa foi realizada: 0, 1 ou 2") 
// listaDeTarefas.splice(tarefaRealizada , 1)
// console.log(listaDeTarefas)

