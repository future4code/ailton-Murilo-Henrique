// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  
return array.length
      
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    let arrayInvertido = array.map((item, indice, array) => {
        return array[array.length - indice - 1];
    })

    // return array.reverse()
    return arrayInvertido

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    array.sort(function(a,b){
        return a - b
    })
        return array
    }

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
    let pares = function(item) {
        return (item % 2 === 0);
        }
    let numerosPares = array.filter(pares);

return numerosPares
    }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let pares = function(item) {
        return (item % 2 === 0);
      
        }
    let numerosPares = array.filter(pares);

    let resultado = numerosPares.map(function (b) {
        return b**2
    })
    return resultado    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    for (let i = 0; i < array.length; i++){
        var max = Math.max(...array);
        return max
    }
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let maiorNumero = Math.max(num1,num2)
    let menorNumero = Math.min(num1,num2)
    
    if (maiorNumero % menorNumero === 0){
     maiorDivisivelPorMenor = true
     
    }
    else 
    maiorDivisivelPorMenor = false

    const diferenca = maiorNumero - menorNumero

let resultado = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
}
    return resultado
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    

        let numerosPares = [];
        for (let i = 0; numerosPares.length < n; i++) {
            if (i % 2 == 0) {
                numerosPares.push(i);
            }
        }
        return numerosPares;
    }

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if ((ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC)){
        return "Equilátero"
    }
        else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC))
        return "Isósceles"
    else 
    return "Escaleno"
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let primeiroMaior = -Infinity
    let segundoMaior = -Infinity
    let primeiroMenor = Infinity
    let segundoMenor = Infinity
       
    for (let numero of array){
        if(numero > primeiroMaior){
            primeiroMaior = numero
        }
        if (numero < primeiroMenor){
            primeiroMenor = numero    
        }
        }
    
    for (let numero of array){
        if (numero > segundoMaior && numero !== primeiroMaior){
            segundoMaior = numero
        }
        if (numero < segundoMenor && numero !== primeiroMenor){
            segundoMenor = numero
        }
        
    }
const resultado =[segundoMaior, segundoMenor]
return resultado

}
 
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa,
    nome: "ANÔNIMO"
}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutoriazadas = pessoas.filter((autorizadas) => {
        return autorizadas.altura >= 1.5 && autorizadas.idade >= 15 && autorizadas.idade < 60
    })
    return pessoasAutoriazadas
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
    const pessoasNaoAutorizadas = pessoas.filter((item) => {
        return item.idade <= 14 || item.idade >= 60 || item.altura < 1.5
    })
return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let mercado = contas.map((nomeCliente) => {
        for(let compras of nomeCliente.compras){
            nomeCliente.saldoTotal = nomeCliente.saldoTotal - compras;
        }
    
    return {...nomeCliente,
        saldoTotal: nomeCliente.saldoTotal,
        compras: []
    }
})
return mercado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;


}
)
return consultas

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}