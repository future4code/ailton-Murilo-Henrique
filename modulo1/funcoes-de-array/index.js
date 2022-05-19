//  EXERCICIOS DE INTERPRETAÇÃO DE CODIGOS.

//  1.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  //    R: Será impresso no console o nome e apelido de cada uma e seus respectivos arrays.


//  2.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  //    R: Será impresso em um novo Array, somente os nomes de cada pessoa.


//  3.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//  R: Será impresso somente as informações da Mandi e Laura, pois somente irá exibir os nomes que não contem Chijo.

//  EXERCICIOS DE ESCRITA DE CODIGOS

//  1.

// let pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  A:

//  const novoArray = pets.map((item) => {
//     return item.nome

// })

// console.log(novoArray)

//  B:

//   const novoArrayB = pets.filter((item, index, array) => {
//      return item.raca === "Salsicha"
//   })
  
//   console.log(novoArrayB)

//  C:

// let apenasPoodles = pets.filter((index) => {
//     return index.raca === "Poodle"

// }).map((pet) => {
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)

// })

//  2.

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 //  A:

//  let apenasNomes = produtos.map((index) => {
//      return index.nome
//  })
//  console.log(apenasNomes)

//  B:

// const novoPreco = produtos.filter((index, item, array) => {
//     console.log(`Nome: ${index.nome} / preço:${(index.preco*0.95)}`)
// })

//  C:

// const apenasBebidas = produtos.filter((item) => {
//     return item.categoria === "Bebidas"

// })
// console.log(apenasBebidas)

//  D:

// const apenasYpe = produtos.filter((item) => {
//     return item.nome.includes("Ypê")

// })
// console.log(apenasYpe)

//  E:

// let mengagemYpe = produtos.filter((index) => {
//     return index.nome.includes("Ypê")

// }).map((index) => {
//     console.log(`Compre ${index.nome} por R$${index.preco}`)

// })