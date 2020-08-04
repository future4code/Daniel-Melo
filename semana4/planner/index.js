function criarTarefa() {
  const taskInput = document.getElementById('tarefa')
  const weekDaySelector = document.getElementById('dias-semana')
  
  const task = taskInput.value
  const weekDay = weekDaySelector.value

  if (task !== '') {
    const taskListContainer = document.getElementById(`${weekDay}`)
  
    taskListContainer.innerHTML += `<li>${task}</li>`
  
    taskInput.value = ""
  } else {
    alert('Tarefa inválida')
  }
}