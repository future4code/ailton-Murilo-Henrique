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
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

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

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}