/*
--- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---

1.
a. será impresso 10 e 50, em linhas diferentes.
b. A função iria ser chamada mas não ia ser feito nada com o valor retornado, nada seria impresso no console.

2.
a. Darvas e Goli, em linhas diferentes.
b. Amanda e Caio, em linhas diferentes.

3. Retorna um novo array com o quadrado dos números pares do array passado como argumento.
Primeiro, essa função poderia ser dividida em duas, uma para filtrar os números pares do array, a qual poderíamos chama-lá de filtrarNumerosPares
e outra função para elevar um número ao quadrado, poderíamos chamá-la elevarAoQuadrado.
*/

// --- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---

// 4.
// a.
// function apresentarCaio() {
//   console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante")
// }

// function apresentarDaniel() {
//   console.log("Eu sou Daniel, tenho 25 anos, moro em Recife e sou estudante")
// }

// apresentarCaio()
// apresentarDaniel()

// b.
// function apresentar(nome, idade, endereco, isEstudante) {
//   let souEstudante = ''
//   if (isEstudante) {
//     souEstudante = 'sou'
//   } else {
//     souEstudante = 'não sou'
//   }
  
//   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${souEstudante} estudante`)
// }

// apresentar('Daniel', 25, 'Av. Parnamirim 327', true)

// 5.
// a.
// function soma(x, y) {
//   return x + y
// }

// console.log(soma(1, 2))

// b.
// function isMaior(x, y) {
//   return x >= y
// }

// console.log(isMaior(1, 2))
// console.log(isMaior(1, 1))
// console.log(isMaior(2, 1))

// c.
// function repetir(mensagem) {
//   for (let i = 0; i < 10; i++) {
//     console.log(mensagem)
//   }
// }

// repetir('Uma mensagem qualquer')

// 6.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.
// function myLength(array) {
//   // return array.length

//   let length = 0
  
//   for (let element of array) {
//     length++
//   }

//   return length
// }

// console.log(myLength(array))

// b.
// function isPar(x) {
//   return x % 2 === 0
// }

// console.log(isPar(1))
// console.log(isPar(2))

// c. e d.
// function contarNumerosPares(array) {
//   let contador = 0

//   for(let element of array) {
//     if(isPar(element)) {
//       contador++
//     }
//   }

//   return contador
// }

// console.log(contarNumerosPares(array))

// --- DESAFIOS ---
// 1.
const escreva = (mensagem) => { console.log(mensagem) }
const soma = (x, y) => { escreva(x + y) }

soma(1, 2)
