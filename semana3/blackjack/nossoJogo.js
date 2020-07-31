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

function jogar() {
   const cartasUsuario = [comprarCarta(), comprarCarta()]
   const cartasComputador = [comprarCarta(), comprarCarta()]
   
   const cartasUsuarioEmString = cartasToString(cartasUsuario)
   const cartasComputadorEmString = cartasToString(cartasComputador)
 
   const mensagemUsuario = `Usuário - ${cartasUsuarioEmString}`
   const mensagemComputador = `Computador - ${cartasComputadorEmString}`

   console.log(mensagemUsuario)
   console.log(mensagemComputador)

   determinarVencedor(cartasUsuario, cartasComputador)
}

function cartasToString(cartas) {
   const pontos = contarPontos(cartas)
   const texto = cartas.reduce((naipes, carta) => {
      return `${naipes} ${carta.texto}`
   },'')

   return `cartas:${texto} - pontuação:${pontos}`
}

function determinarVencedor(cartasUsuario, cartasComputador) {
   const pontosUsuario = contarPontos(cartasUsuario)
   const pontosComputador = contarPontos(cartasComputador)

   if (pontosUsuario > pontosComputador) {
      console.log('O usuário venceu!')
   } else if (pontosUsuario < pontosComputador) {
      console.log('O computador venceu!') 
   } else {
      console.log('Empate!')
   }
}

function contarPontos(cartas) {
   return cartas.reduce((pontos, carta) => {
      return pontos + carta.valor
   }, 0)
}



console.log("Bem vindo ao jogo de Blackjack!")
const iniciarJogo = confirm('Quer iniciar um jogo de blackjack?')

iniciarJogo && jogar()

console.log('O jogo acabou')

