/*
EXERCÍCIOS DE INTERPRETAÇÃO

1.
10
10 5

2. 
10 10 10
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1
let nome
let idade 
console.log(typeof nome, typeof idade)
// o tipo da variáveis são "undefined" porque as variáveis foram declaradas mas ainda não foram definidas, isto é, elas não armazenam valor algum ainda.
nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')
console.log(typeof nome, typeof idade)
// Agora as variáveis possuem o tipo "string". O que é importante notar é que apesar da idade ser um número, a função promp retorna uma string
// o JS entenderá se quisermos usar essa variável como um número, pois possui um tipagem dinâmica. Por sua vez, o Java só permitiria manipular
// esse dado como uma string, umas vez que possue um tipagem estática.
console.log('Olá', nome, ', você tem', idade, 'anos')

// 2
const perguntas = [
  'Nescau ou Toddy?',
  'Biscoito ou Bolacha?',
  'Marvel ou DC?',
  'Playstation ou Xbox?',
  'PES ou FIFA?'
]

const respostas = []
respostas[0] = prompt(perguntas[0])
respostas[1] = prompt(perguntas[1])
respostas[2] = prompt(perguntas[2])
respostas[3] = prompt(perguntas[3])
respostas[4] = prompt(perguntas[4])

console.log('1.', perguntas[0])
console.log('Resposta:', respostas[0])
console.log('2.', perguntas[1])
console.log('Resposta:', respostas[1])
console.log('3.', perguntas[2])
console.log('Resposta:', respostas[2])
console.log('4.', perguntas[3])
console.log('Resposta:', respostas[3])
console.log('5.', perguntas[4])
console.log('Resposta:', respostas[4])

// 3
const comidasPreferidas = ['Batata Frita', 'Filé a parmegiana', 'Hambúrguer', 'Pizza', 'Churrasco']
console.log(comidasPreferidas)
console.log('Essas são minhas comidas preferidas:')
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

comidasPreferidas[1] = prompt('Qual sua comida preferida?')
console.log('Essas são minhas comidas preferidas:')
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

// 4
const perguntasSimOuNao = [
  'Nescau é melhor que Toddy?',
  'Marvel é melhor que DC?',
  'PES é melhor que FIFA?'
]

const respostasSimOuNao = [
  true,
  true,
  false
]

console.log(perguntasSimOuNao[0], respostasSimOuNao[0])
console.log(perguntasSimOuNao[1], respostasSimOuNao[1])
console.log(perguntasSimOuNao[2], respostasSimOuNao[2])