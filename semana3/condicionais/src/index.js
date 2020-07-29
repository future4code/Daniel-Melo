/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1. O código verifica se o número informado é um número par.
Para isso, o programa verifica se o resto da divisão do número por 2 é igual a 0.
Dessa forma, será impresso no console "Passou no teste" quando o número informado for um  número par,
caso contrário, sera impresso "Não passou no teste"

2.
a. O código serve para informar ao usuário o preço da fruta informada como entrada.
b. "O preço da fruta  Maçã  é  R$  2.25"
c. "O preço da fruta  Pêra  é  R$  5"

3. 
a. A primeira linha pede uma entrada do usuário por meio da funçao "prompt". 
Esta função retorna o valor dado como entrada em forma de string. A função Number
é então utilizada para mudar o tipo desse valor para number.

b. Se o usuário entrar com o valor 10, primeiro será impressa a mensagem 
"Esse número passou no teste" e então será informado um erro avisando qua a variável
mensagem não foi definida. 
No caso do usuário entrar com o valor -10 só será apresentado o erro

c. Sim, haverá erro. Uma vez que a variável 'mensagem' foi declarada dentro do bloco
do if, ela não poderá ser acessada fora desse bloco, isto é, fora de seu escopo.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 4.
const idade = Number(prompt('Qual sua idade?'))

if (idade >= 18) {
  console.log('Você pode dirigir')
} else {
  console.log('Você não pode dirigir')
}

// 5. e 6.
const turno = prompt('Em qual turno você estuda? (M)atutino / (V)espertino / (N)orturno').toUpperCase()

let msg = ''

if (turno === 'M') {
  msg = 'Bom dia!'
} else if (turno === 'V') {
  msg = 'Boa tarde!'
} else if (turno === 'N') {
  msg = 'Boa noite!'
} else {
  msg = 'Informe um valor válido'
}

switch (turno) {
  case 'M':
    msg = 'Bom dia!'
    break
  case 'V':
    msg = 'Boa tarde!'
    break
  case 'N':
    msg = 'Boa noite!'
    break
  default:
    msg = 'Informe um valor válido'
    break
}

console.log(msg)

// 7.
const genero = prompt('Qual o gênero do filme?').toLowerCase()
const preco = Number(prompt('Qual o preço do ingresso?'))

if (genero === 'fantasia' && preco < 15) {
  console.log('Bom filme!')
} else {
  console.log('Escolha outro filme! :(')
}