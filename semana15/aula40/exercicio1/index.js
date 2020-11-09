// EXERCICIO 1
function exercico1() {
  const nome = process.argv[2]
  const idade = Number(process.argv[3])

  const msg = nome && idade 
    ? `\u001b[34m Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos \u001b[0m`
    : "\033[31m Argumentos inválidos. Comando: npm run start <nome> <idade> \u001b[0m"
    console.log(msg)
}
exercico1();