function exercicio3() {
  const tarefas = ['tarefa1', 'tarefa2', 'tarefa3']
  const novaTarefa = process.argv[2] 

  tarefas.push(novaTarefa)

  console.log('Tarefa adicionada com sucesso')
  console.table({tarefas})
}
exercicio3()