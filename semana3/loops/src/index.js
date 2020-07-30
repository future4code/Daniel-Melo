/*
--- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---

1. Soma de forma incremental: 0 + 1 + 2 + 3 + 4.
Será impresso na tela: 10

2. 
a. 19 21 23 25 27 30 - Cada um em uma linha separada
b. A estrutura for...of por si só não basta, mas há formas de se fazer.
A forma mais indica é usar o for...in (não foi dado no curso) e também
pode-se usar o for com a condição de parada de forma explícita.

Uma forma de se fazer utilizando for..of é:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let i = 0;
for (let numero of lista) {
  if (numero > 18) {
		console.log(`Indíce: ${i} - Valor: ${numero}`)
  }
  
  i++
}

--- DESAFIO 1 ---
O resultado impresso será:

0
00
000
0000

*/

// --- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---
// // 3.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// // Resposta item a
// for (let numero of arrayOriginal) {
//   console.log(numero)
// }

// // Resposta item b
// for (let numero of arrayOriginal) {
//   console.log(numero / 10)
// }

// // Resposta item c
// const arrayComNumerosPares = []

// for (let numero of arrayOriginal) {
//   if (numero % 2 === 0) {
//     arrayComNumerosPares.push(numero)
//   }
// }

// console.log(arrayComNumerosPares)

// // Reposta item d
// const arrayDeMensagens = []

// // Poderia fazer também usado o for...in
// // for (let i in arrayOriginal) {
// for (let i = 0; i < arrayOriginal.length; i++) {
//   const mensagem = `O elemento de índex ${i} é ${arrayOriginal[i]}`
//   arrayDeMensagens.push(mensagem)
// }

// console.log(arrayDeMensagens)

// // Resposta item e 
// let valorMaximo = arrayOriginal[0]
// let valorMinimo = arrayOriginal[0]

// for (numero of arrayOriginal) {
//   if (numero > valorMaximo) {
//     valorMaximo = numero
//   } else if (numero < valorMinimo) {
//     valorMinimo = numero
//   }
// }

// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

// --- DESAFIO 2 ---
// console.log('Vamos jogar!')
// const numeroMagico = Number(prompt('Digite o número mágico'))
// let numeroChutado
// let tentativas = 0

// while (numeroChutado !== numeroMagico) {
//   tentativas++
//   numeroChutado = Number(prompt('Chute um número'))
//   console.log(`O número chutado foi: ${numeroChutado}`)

//   if (numeroMagico > numeroChutado) {
//     console.log('Errrrrrou, é maior')
//   } else if (numeroMagico < numeroChutado) {
//     console.log('Errrrrrou, é menor')
//   } else {
//     console.log('Acertou!!')
//   }
// }

// console.log(`O número de tentativas foi: ${tentativas}`)

// --- DESAFIO 3 ---
console.log('Vamos jogar!')

const max = 100
const min = 1
const numeroMagico = Math.floor(Math.random() * max + min)

let numeroChutado
let tentativas = 0

while (numeroChutado !== numeroMagico) {
  tentativas++
  numeroChutado = Number(prompt(`Chute um número entre ${min} e ${max}`))
  console.log(`O número chutado foi: ${numeroChutado}`)

  if (numeroMagico > numeroChutado) {
    console.log('Errrrrrou, é maior')
  } else if (numeroMagico < numeroChutado) {
    console.log('Errrrrrou, é menor')
  } else {
    console.log('Acertou!!')
  }
}

console.log(`O número de tentativas foi: ${tentativas}`)

/*
 Foi tranquilo fazer a alteração mas acredito de por ter um boa familiaridade com JS.
 Quanto ao processo de aprendizagem em si, eu acredito que a melhor forma de aprendermos e 
 dominarmos determinados assuntos é ir beber direto da fonte, ou seja, dos manuais, documentações e
 ler códigos de pessoas que já passaram pelo mesmo problema.
 Lógico que não é algo trivial, mas é preciso exercitar, buscar entender, testar exemplos...
 É assim que estudo e busco aprender coisas novas =)
 */