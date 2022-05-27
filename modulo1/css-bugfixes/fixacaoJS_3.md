```function calculaNota(ex, p1, p2) {
  let mensagem
  let  mediaAluno 
  mediaAluno = (ex + p1 + p2)/ 3
  
  if (mediaAluno >= 9){
  mensagem = "A" 
} if (mediaAluno < 9 && mediaAluno >= 7.5){
  mensagem = "B"
 }if (mediaAluno < 7.5 && mediaAluno >= 6){
  mensagem = "C"
 }if (mediaAluno < 6){
  mensagem = "D"
 }
 return mensagem
}
```