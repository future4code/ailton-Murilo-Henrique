// 1- a:

// const minhaString:string = 3

// R: Da erro, pois você definiu que a variável irá receber uma string, poderia colocar somente se fosse um número em String, por exemplo: "3" em vez de 3.

// b:

// let meuNumero: string|number = "3" 
// meuNumero = 3

// R: Para aceitar dois tipos de valores, você pode declarar com um parâmetro "OU", assim como defini, String "OU" Number.

// c e d:

enum RainbowColor {
    RED = "vermelho",
    ORANGE = "laranja",
    YELLOW = "amarelo",
    GREEN = "verde",
    BLUE = "azul",
    INDIGO = "anil",
    VIOLET = "violeta",
  }

type typePerson = { name: string; age: number; favoriteColor: string };

const person1 = {
    name: "Murilo Caun",
    age: 24,
    favoriteColor: RainbowColor.RED
}

const person2 = {
    name: "Ana Caroline",
    age: 23,
    favoriteColor: RainbowColor.GREEN
}

const person3 = {
    name: "Person 3",
    age: 30,
    favoriteColor: RainbowColor.VIOLET
}

console.table([person1, person2, person3])
