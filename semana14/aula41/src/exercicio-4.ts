// EXERCÍCIO 4
// a) tsc ./src/exercicio-4.ts
// b) Sim, podemos usar o arquivo de configuração tsconfig.json para configurar o diretório raiz e utilizar apenas
// o comando tsc
// c) Sim, a partir das configurações do tsconfig.json e com o comando tsc, podemos transpilar todos os arquivos
// com extensão .ts de dentro do diretório raiz.
// d) Muda bastante coisa, no arquivo gerado vem mais opções de configuração. 

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}