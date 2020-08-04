function criarTarefa() {
  const taskInput = document.getElementById('tarefa')
  const weekDaySelector = document.getElementById('dias-semana')
  
  const task = taskInput.value
  const weekDay = weekDaySelector.value

  if (task !== '') {
    const taskListContainer = document.getElementById(`${weekDay}`)
  
    taskListContainer.innerHTML += `<li onclick="toggleTask(this)">${task}</li>`
  
    taskInput.value = ""
  } else {
    alert('Tarefa inválida')
  }
}

function limparTarefas() {
  const tasks = document.getElementsByTagName('li')

  while (tasks.length > 0) {
    tasks.item(0).remove()
  }
}

function toggleTask(task) {
  if (task.style.textDecoration === '') {
    task.style.textDecoration = 'line-through'
  } else {
    task.style.textDecoration = ''
  }
}