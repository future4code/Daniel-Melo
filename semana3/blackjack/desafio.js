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
   const cartasUsuario = []
   let pontosUsuario = 0
   let cartasUsuarioToString = ''

   do {
      pontosUsuario = 0
      cartasUsuarioToString = ''
      cartasUsuario.splice(0, cartasUsuario.length)
      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
      
      for (carta of cartasUsuario) {
         pontosUsuario += carta.valor
         cartasUsuarioToString += ` ${carta.texto}`
      }

   } while (pontosUsuario === 22)

   const cartasComputador = [comprarCarta(), comprarCarta()]
   let pontosComputador = 0
   let cartasComputadorToString = ''

   for (carta of cartasComputador) {
      pontosComputador += carta.valor
      cartasComputadorToString += ` ${carta.texto}`
   }
   
   while (pontosUsuario < 21) {
      let mensagem = `Suas cartas são${cartasUsuarioToString}.`
      mensagem += ` As carta revelada do computador é ${cartasComputador[0].texto}.`
      mensagem += `\nDeseja comprar mais uma carta?`
      
      const puxarCarta = confirm(mensagem)
      
      if(puxarCarta) {
         const novaCarta = comprarCarta()
         cartasUsuario.push(novaCarta)
         
         pontosUsuario += novaCarta.valor
         cartasUsuarioToString += ` ${novaCarta.texto}`
      } else {
         break
      }
   }

   while (pontosUsuario <= 21 && pontosUsuario > pontosComputador) {
      const novaCarta = comprarCarta()
      cartasComputador.push(novaCarta)

      pontosComputador += novaCarta.valor
      cartasComputadorToString += ` ${novaCarta.texto}`
   }

   console.log(cartasUsuario)
   console.log(cartasComputador)

   let mensagem = `Suas cartas são${cartasUsuarioToString}.`
   mensagem += ` Sua pontuação é ${pontosUsuario}.`
   mensagem += ` As cartas do computador são${cartasComputadorToString}.`
   mensagem += ` A pontuação do computador é ${pontosComputador}.`

   if (pontosUsuario > 21) {
      mensagem += '\nO Computador ganhou!'
   } else if (pontosComputador > 21) {
      mensagem += '\nO Usuário ganhou!'
   } else if (pontosUsuario > pontosComputador) {
      mensagem += '\nO Usuário ganhou!'
   } else if (pontosUsuario < pontosComputador) {
      mensagem += '\nO Computador ganhou!'
   } else {
      mensagem += '\nEmpate!'
   }

   alert(mensagem)
}

console.log('O jogo acabou')