const expenses = []

const costInput = document.getElementById('cost')
const typeSelect = document.getElementById('expense-type')
const descriptionInput = document.getElementById('description')

const expensesList = document.getElementById('filtered-list')
const filterTypeSelect = document.getElementById('filter-type')
const maxValueFilterInput = document.getElementById('max-value')
const minValueFilterInput = document.getElementById('min-value')

function cadastrarDespesa(event) {
  event.preventDefault()

  const cost = Number(costInput.value)
  const type = typeSelect.value
  const description = descriptionInput.value

  const expense = {cost, type, description}

  expenses.push(expense)

  costInput.value = ''
  typeSelect.value = ''
  descriptionInput.value = ''

  updateExpensesList()
  updateExtract()
}

function updateExpensesList() {
  const newExpensesList = parseArrayToHtmlList(expenses)

  expensesList.innerHTML = newExpensesList
}

function parseArrayToHtmlList(array) {
  return array.reduce((list, expense) => {
    list += `<li>[${expense.type}] ${expense.description} : R$ ${expense.cost},00</li>`
    return list
  }, '')
}

function filterExpenses(event) {
  event.preventDefault()

  const type = filterTypeSelect.value
  const maxValue = Number(maxValueFilterInput.value)
  const minValue = Number(minValueFilterInput.value)

  const filteredExpenses = expenses.filter(expense => {
    return type === expense.type && expense.cost <= maxValue && expense.cost >= minValue
  })

  const filteredExpensesList = parseArrayToHtmlList(filteredExpenses)

  expensesList.innerHTML = filteredExpensesList
}

function cleanFilters(event) {
  event.preventDefault()

  filterTypeSelect.value = ''
  maxValueFilterInput.value = ''
  minValueFilterInput.value = ''

  updateExpensesList()
}

function updateExtract() {
  const currentTypesCost = expenses.reduce((acc, expense) => {
    if (acc[expense.type]) {
      acc[expense.type] += expense.cost
    } else {
      acc[expense.type] = expense.cost
    }

    return acc
  }, {})

  Object.keys(currentTypesCost).forEach(type => {
    const typeTotalCost = document.getElementById(`total-cost-${type}`)

    typeTotalCost.innerHTML = `R$ ${currentTypesCost[type]},00`
  })

  const total = Object.values(currentTypesCost).reduce((total, cost) => total + cost)
  const totalCost = document.getElementById('total-cost')
  totalCost.innerText = `R$ ${total},00`
}
