/*
--- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---

1. Soma de forma incremental: 0 + 1 + 2 + 3 + 4.
Será impresso na tela: 10

2. 
a. 19 21 23 25 27 30 - Cada um em uma linha serada
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