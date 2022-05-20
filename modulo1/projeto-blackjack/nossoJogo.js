// PROJETO BLACKJACK

if(confirm("Você quer iniciar uma rodada de Blackjack?")) {
	let carta = comprarCarta();
   let carta2 = comprarCarta(); 
    console.log(`Usuario - cartas: ${carta.texto} ${carta2.texto} - ${carta.valor+carta2.valor}`) 
    
   let cartaDealer = comprarCarta();
   let cartaDealer2 = comprarCarta(); 
     console.log(`Dealer - cartas: ${cartaDealer.texto} ${cartaDealer2.texto} - ${cartaDealer.valor+cartaDealer2.valor}`)

         if ((carta.valor+carta2.valor > cartaDealer.valor+cartaDealer2.valor)){
            console.log("O usuário ganhou!")
         }
            
         else if ((carta.valor+carta2.valor < cartaDealer.valor+cartaDealer2.valor)){
            console.log("O Dealer ganhou!")
         }
                    
        else
         console.log("Empate!")
        
}

else {
	console.log("O jogo acabou...")
}
