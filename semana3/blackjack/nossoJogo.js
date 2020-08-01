/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
const iniciarJogo = confirm('Quer iniciar um jogo de blackjack?')

if(iniciarJogo) {
   const cartasUsuario = [comprarCarta(), comprarCarta()]
   const cartasComputador = [comprarCarta(), comprarCarta()]

   console.log(cartasUsuario)
   console.log(cartasComputador)

   let pontosUsuario = 0
   let cartasDoUsuarioToString = ''
   for (let carta of cartasUsuario) {
      pontosUsuario += carta.valor
      cartasDoUsuarioToString += ` ${carta.texto}`
   }

   let pontosComputador = 0
   let cartasDoComputadorToString = ''
   for (let carta of cartasComputador) {
      pontosComputador += carta.valor
      cartasDoComputadorToString += ` ${carta.texto}`
   }

   const mensagemUsuario = `Usuário - ${cartasDoUsuarioToString} - Pontuação: ${pontosUsuario}`
   const mensagemComputador = `Usuário - ${cartasDoComputadorToString} - Pontuação: ${pontosComputador}`

   console.log(mensagemUsuario)
   console.log(mensagemComputador)

   if (pontosUsuario > pontosComputador) {
      console.log('O usuário venceu!')
   } else if (pontosUsuario < pontosComputador) {
      console.log('O computador venceu!') 
   } else {
      console.log('Empate!')
   }
}

console.log('O jogo acabou')

