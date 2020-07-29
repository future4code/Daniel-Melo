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

// DESAFIOS
// 1. 
let temperaturaEmFahrenheit = 77
let temperaturaEmKelvin = (temperaturaEmFahrenheit - 32)*5/9 + 273.15
let mensagemComConversao = temperaturaEmFahrenheit + '°F = ' + temperaturaEmKelvin + 'K'
console.log(mensagemComConversao)

let temperaturaEmCelcius = 80
temperaturaEmFahrenheit = temperaturaEmCelcius*9/5 + 32
mensagemComConversao = temperaturaEmCelcius + '°C = ' + temperaturaEmFahrenheit + '°F'
console.log(mensagemComConversao)

temperaturaEmCelcius = Number(prompt('Insira o valor da temperatura em graus Celsius'))
temperaturaEmFahrenheit = temperaturaEmCelcius*9/5 + 32
temperaturaEmKelvin = (temperaturaEmFahrenheit - 32)*5/9 + 273.15
mensagemComConversao = temperaturaEmCelcius + '°C = ' + temperaturaEmFahrenheit + '°F = ' + temperaturaEmKelvin + 'K'
console.log(mensagemComConversao)

// 2.
const consumoEmKWh = Number(prompt('Qual o consumo da sua residência em KWh?'))
const valorDoKWh = 0.05
const desconto = 0.15
const valorTotal = consumoEmKWh * valorDoKWh
const valorComDesconto = valorTotal * (1 - desconto)
console.log('Valor total: R$', valorTotal, 'Valor com desconto: R$', valorComDesconto)

// 3.
const massaEmLb = Number(prompt('massa em libras'))
let massaEmKg = massaEmLb / 2.20462
console.log(massaEmLb + 'lb equivalem a ' + massaEmKg + ' kg')

const massaEmOz = 10.5
massaEmKg = massaEmOz / 35.274
console.log(massaEmOz + 'oz equivalem a ' + massaEmKg + ' kg')

const comprimentoEmMilhas = 100
let comprimentoEmMetros = comprimentoEmMilhas * 1609
console.log(comprimentoEmMilhas + 'mi equivalem a ' + comprimentoEmMetros + ' m')

const comprimentoEmPes = 50
comprimentoEmMetros = comprimentoEmPes / 3.281
console.log(comprimentoEmPes + 'ft equivalem a ' + comprimentoEmMetros + ' m')

const volumeEmGalao = 103.56
let volumeEmLitros = volumeEmGalao * 4.546
console.log(volumeEmGalao + 'gal equivalem a ' + volumeEmLitros + ' l')

const volumeEmXicara = 450
volumeEmLitros = volumeEmXicara / 3.52
console.log(volumeEmXicara + 'xic equivalem a ' + volumeEmLitros + ' l')

