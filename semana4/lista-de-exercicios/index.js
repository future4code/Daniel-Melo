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

// --- EXERCÍCIOS DE FUNÇÕES ---
// 1.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// segundosMaiorMenorElementos(array)

function segundosMaiorMenorElementos(array) {
  let maior = -Infinity
  let menor = Infinity

  const valores = array.reduce((segundo, numero) => {
    if (numero > maior) {
      segundo.maior = maior
      maior = numero
    } else if (numero > segundo.maior && numero !== maior) {
      valores.segundoMaior = numero
    }

    if (numero < menor) {
      segundo.menor = menor
      menor = numero
    } else if (numero < segundo.menor && numero !== menor) {
      segundo.menor = numero
    }

    return segundo
  }, {maior: -Infinity, menor: Infinity})

  console.log(`Segundo maior número: ${valores.maior}`)
  console.log(`Segundo menor número: ${valores.menor}`)
}

// 2. 
const alerta = () => alert('Hello Future4')
// alerta()

// --- EXERCÍCIOS DE OBJETOS ---
/*
1.
Arrays são estruturas de dados na qual é possível armazenar mas de um valor de forma indexada.
Objetos são estruturas de dados que se aproximam mais da "vida real", de forma simplificada, são um conjunto de pares chave/valor.
Esse conjuntos são chamados de membros, que podem ser propriedades ou métodos, identificados por sua "chave". As propriedades são valores inerentes ao objeto, já os métodos
são seus comportamentos, isto é, as funções que esse objeto possui.

Os Arrays são mais utilizados quando queremos armazenar um conjunto de valor, os objetos são utilizados quando queremos criar um tipo de dado
mais complexos, incluindo comportamentos e caracateríscas especificas para ele.
*/

// 2.
// const retangulo = criaRetangulo(2, 4)
// console.table(retangulo)

function criaRetangulo(lado1, lado2) {
  return {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
}

// 3.
const filme = {
  titulo: 'Inception',
  ano: 2010,
  diretor: 'Christopher Nolan',
  elenco: ['Leonardo Di Caprio', 'Ellen Page','Joseph Gordon-Levitt'],
}

// console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco}`)

// 4.
const pessoa = {
  nome: 'Daniel',
  idade: 25,
  email: 'daniel@daniel.com',
  endereco: 'Av. Paranamirim 500'
}

// console.log(anonimizarPessoa(pessoa))

function anonimizarPessoa(pessoa) {
  return { ...pessoa, nome: 'ANÔNIMO'}
}

// --- EXERCÍCIOS DE FUNÇÕES DE ARRAY ---
// 1.
// exercicio1()

function exercicio1() {
  const pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]
  
  console.log(soAdultos(pessoas))
  console.log(soCriancas(pessoas))
  
  function soAdultos(array) {
    return array.filter(pessoa => pessoa.idade >= 20)
  }
  
  function soCriancas(array) {
    return array.filter(pessoa => pessoa.idade < 20)
  }
}

// 2.
// exercicio2()

function exercicio2() {
  const array = [1, 2, 3, 4, 5, 6]
  
  console.log(vezes2(array))
  console.log(vezes3ToString(array))
  console.log(imparOuPar(array))
  
  function vezes2(array) {
    return array.map(e => e * 2)
  }
  
  function vezes3ToString(array) {
    return array.map(e => `${e * 3}`)
  }
  
  function imparOuPar(array) {
    return array.map(e => `${e} é ${e % 2 === 0 ? 'par' : 'ímpar'}`)
  }
}

// 3.
// exercicio3()

function exercicio3() {
  const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
  ]

  console.log(permitirEntrada(pessoas))
  console.log(proibirEntrada(pessoas))

  function permitirEntrada(array) {
    return array.filter(pessoa => pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5)
  }
  
  function proibirEntrada(array) {
    return array.filter(pessoa => !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5))
  }
}

// 4.
// exercicio4()

function exercicio4() {
  const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

  const emails = consultas.map(consulta => {
    const pronome = consulta.genero === 'masculino' ? 'Sr.' : 'Sra.'
    const lembrete = consulta.genero === 'masculino' ? 'lembrá-lo' : 'lembrá-la'

    const mensagemConfirmacao = `Olá, ${pronome} ${consulta.nome}. Estamos enviando esta mensagem para ${lembrete} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento desse e-mail`
    const mensagemCancelamento = `Olá, ${ pronome } ${ consulta.nome }. Infelizmente, sua consulta marcada para o dia ${ consulta.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
  
    return consulta.cancelada ? mensagemCancelamento : mensagemConfirmacao
  })

  console.log(emails)
}

// 5.
// exercicio5()

function exercicio5() {
  const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
  ]

  atualizarSaldoTotal(contas)
  console.table(contas)

  function atualizarSaldoTotal(contas) {
    contas.forEach(conta => conta.saldoTotal -= conta.compras.reduce((total, compra) => total + compra, 0))
  }
}