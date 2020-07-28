/* 
EXERCÍCIOS DE INTERPRETAÇÃO

1.
a.  false
b.  false
c.  true
e.  boolean

2.
a.  undefined
b.  null
c.  11
d.  3
e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
const idade = Number(prompt('Qual a sua idade?'))
const idadeDoMelhorAmigo = Number(prompt('Qual a idade do seu melhor amigos?'))

const minhaIdadeEhMaior = idade > idadeDoMelhorAmigo
const diferencaDeIdade = idade - idadeDoMelhorAmigo

console.log('Sua idade é maior que a do seu melhor amigo?', minhaIdadeEhMaior)
console.log('Diferença de idade:', diferencaDeIdade)

// 2.
const numero = Number(prompt("Insira um numero par"))
const resto = numero % 2
console.log(resto)
// Se for inserido um número par, o resto sempre será 0.
// É o esperado pois este é a própria definição de número par.
// Ao inserir um número ímpar, o resto sempre será 1.

//3.
const listaDeTarefas = []
listaDeTarefas[0] = prompt('Insira uma tarefa que deseja realizar hoje')
listaDeTarefas[1] = prompt('Insira uma tarefa que deseja realizar hoje')
listaDeTarefas[2] = prompt('Insira uma tarefa que deseja realizar hoje')

console.log(listaDeTarefas)

const indiceDaTarefa = prompt('Insira o índice da tarefa que você já realizou (0/1/2)')
listaDeTarefas.splice(indiceDaTarefa, 1)

console.log(listaDeTarefas)

// 4.
const nome = prompt('Qual o seu nome?')
const email = prompt('Qual o seu email?')

const msg = 'O e-mail ' + email + ' foi cadastrado com sucesso. Seja bem-vind@, ' + nome + '!'
console.log(msg)
