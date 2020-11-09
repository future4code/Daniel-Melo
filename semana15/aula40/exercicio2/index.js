
function exercicio2() {
  const numeros = [Number(process.argv[2]), Number(process.argv[4])]
  const operacao = process.argv[3]

  const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  }

  const resultado = operacoes[operacao]
    ? `\u001b[34m  ${operacoes[operacao](...numeros)} \u001b[0m`
    : "\033[31m Operação inválida. Comando: npm run start <operando1> < + | - | * | / > <operando2> \u001b[0m"

  console.log(resultado)
}
exercicio2()