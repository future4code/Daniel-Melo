/*
EXERCICIO 1
a) Acontece um erro, pois não podemos atribuir number a variáveis do tipo string
b) utilizar o operador de união |
*/

enum Cores {
  vermelho = 'vermelho',
  laranja = 'laranja',
  amarelo = 'amarelo',
  verde = 'verde',
  azul = 'azul',
  anil = 'anil',
  violeta = 'violeta'
}

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: Cores
}

const pessoa1: Pessoa = {
  nome: 'Daniel',
  idade: 26,
  corFavorita: Cores.verde
}
const pessoa2: Pessoa = {
  nome: 'Simone',
  idade: 27,
  corFavorita: Cores.azul
}
const pessoa3: Pessoa = {
  nome: 'Daniele',
  idade: 50,
  corFavorita: Cores.violeta
}