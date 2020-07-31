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
   const cartasUsuario = sortearCartas()
   const cartasComputador = sortearCartas()
   
   rodadaDoUsuario(cartasUsuario, cartasComputador)
   rodadaDoComputador(cartasUsuario, cartasComputador)

   console.log(cartasUsuario)
   console.log(cartasComputador)
   const resultado = determinarVencedor(cartasUsuario, cartasComputador)

   alert(resultado)
}

function sortearCartas() {
   const cartas = []
   
   do {
      cartas.push(comprarCarta())
      cartas.push(comprarCarta())
   } while(verificarDuploAs(cartas))
   
   return cartas
}

function verificarDuploAs(cartas) {
   return 22 === contarPontos(cartas)
}

function rodadaDoUsuario(cartasUsuario, cartasComputador) {
   while (contarPontos(cartasUsuario) < 21 && confirm(revelarCartas(cartasUsuario, cartasComputador))) {
      cartasUsuario.push(comprarCarta())
   }
}

function rodadaDoComputador(cartasUsuario, cartasComputador) {
   const pontosUsuario = contarPontos(cartasUsuario)

   while (pontosUsuario <= 21 && pontosUsuario > contarPontos(cartasComputador)) {
      cartasComputador.push(comprarCarta())
   }
}

function revelarCartas(cartasUsuario, cartasComputador) {
   const cartasReveladasUsuario = revelarTodasAsCartas(cartasUsuario)
   const cartaReveladaComputador = revelarPrimeiraCarta(cartasComputador)
   mensagem = `Suas cartas são${cartasReveladasUsuario}.`
   mensagem += ` As carta revelada do computador é ${cartaReveladaComputador}.`
   mensagem += `\nDeseja comprar mais um carta?`
   
   return mensagem
}

function revelarTodasAsCartas(cartas) {
   const texto = cartas.reduce((naipes, carta) => {
      return `${naipes} ${carta.texto}`
   },'')

   return texto
}

function revelarPrimeiraCarta(cartas) {
   return cartas[0].texto
}

function determinarVencedor(cartasUsuario, cartasComputador) {
   const cartasReveladasUsuario = revelarTodasAsCartas(cartasUsuario)
   const cartasReveladasComputador = revelarTodasAsCartas(cartasComputador)
   
   const pontosUsuario = contarPontos(cartasUsuario)
   const pontosComputador = contarPontos(cartasComputador)

   let mensagem = `Suas cartas são${cartasReveladasUsuario}.`
   mensagem += ` Sua pontuação é ${pontosUsuario}.`
   mensagem += ` As cartas do computador são${cartasReveladasComputador}.`
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

   return mensagem
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