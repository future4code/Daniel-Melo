/*
--- Exercícios de interpretação de código ---
1. A função converte o valor em dolar para Real, cuja cotação é passada pelo usuário, e retorna um string no formato R$ <valor em real>.
Por exmplo, se a cotação for de R$ 5,00, o mensagem do console será R$ 500.

2. A função recebe dois parâmetros, o primeito é uma string com o tipo de investimento e o segundo o valor investido.
Se o tipo de investimento informado for válido, a função retorna o montante total após os rendimentos.
No exemplo do código, será impresso no console:
165
undefined (Nesse caso, também será dado um alerta ao usuário: TIPO DE INVESTIMENTO INFORMADO INCORRETO!)

3. O código percorre todos os elementos do array numeros, se o elemento for um numero par, o valor é inserido também no array1,
se for ímpar, o valor é inserido também no array2.
No console será impresso:
Quatidade total de números: 14
6
8

4. O código verifica o elemento de maior (numero2) e menor (numero1) valor.
No console será impresso:
-10
1590
*/

// --- EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ---

// 1. Utilizado for, for...of ou forEach.

// maneirasDeIterarSobreUmaLista()

function maneirasDeIterarSobreUmaLista() {
  const lista = ['a', 'b', 'c', 'd', 'e']

  console.log('Utilizando for')
  for (let index = 0; index < lista.length; index++){
    console.log(lista[index])
  }

  console.log('Utilizando for...of')
  for (let elemento of lista) {
    console.log(elemento)
  }

  console.log('Utiliando forEach')
  lista.forEach((elemento, index, array) => {
    console.log(elemento)
  })
}

// 2. a) false b) false c) true d) true e) true 

// 3. Não funciona, na verdade ele gerou um loop infinito uma vez que não incremeta o valor do contador i.
// A condição também precisa ser < e não <=, uma vez que o valor 0 também precisa ser considerado.
// Além disso, em momento algum ele pediu a entrada do usuário.
// Apesar de ser possível resolver o problema com a estrutura while, nesse caso é mais adequado usar a estrutura for,
// dado que o número de repetições é previamente conhecido.

// imprimirNPrimeirosValoresPares()

function imprimirNPrimeirosValoresPares() {
  const quantidadeDeNumerosPares = Number(prompt('Digite a quantidade de números pares'))
  for (let e = 0; e < quantidadeDeNumerosPares; e++) {
    console.log(e*2)
  }
} 

// 4. 
// console.log(classficiarTriangulo(1, 1, 1))
// console.log(classficiarTriangulo(1, 2, 3))
// console.log(classficiarTriangulo(1, 2, 2))

function classficiarTriangulo(a, b, c) {
  if ( a === b && a === c) {
    return 'Equilátero'
  } else if ( a !== b && a !== c && c !== b) {
    return 'Escaleno'
  } else {
    return 'Isóceles'
  }
}

// 5.
// exercicioCinco(30, 15)

function exercicioCinco(a, b) {
  console.log('ENTRADA:')
  console.log(`${a} e ${b}`)
  console.log('\nSAÍDA:')
  console.log(`O maior é: ${a > b ? a : b}`)
  console.log(`${a} ${a % b === 0 ? 'é' : 'não é'} divisível por ${b}`)
  console.log(`${b} ${b % a === 0 ? 'é' : 'não é'} divisível por ${a}`)
  console.log(`A diferença entre ele é ${Math.abs(a - b)}`)
} 