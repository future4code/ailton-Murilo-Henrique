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
   
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
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
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}