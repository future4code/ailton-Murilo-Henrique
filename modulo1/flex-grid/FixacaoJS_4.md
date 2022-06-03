```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){

let vezesRepetidas = 0

  for(numero of arrayDeNumeros){
    if(numero === numeroEscolhido){
    vezesRepetidas = vezesRepetidas+1
  }
} 
    if (vezesRepetidas === 0){
      return "Número não encontrado"
    }
    
    return `O número ${numeroEscolhido} aparece ${vezesRepetidas}x`
    }
```