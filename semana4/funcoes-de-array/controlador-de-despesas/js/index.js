const expenses = []
const expenseTypes = {
  casa: { label: 'Casa', costAccumulated: 0},
  lazer: { label: 'Lazer', costAccumulated: 0},
  viagens: { label: 'Viagens', costAccumulated: 0},
  alimentacao: { label: 'Alimentação', costAccumulated: 0},
  transporte: { label: 'Transporte', costAccumulated: 0},
  outros: { label: 'Outros', costAccumulated: 0},
}

const costInput = document.getElementById('cost')
const typeSelect = document.getElementById('expense-type')
const descriptionInput = document.getElementById('description')

const expensesList = document.getElementById('filtered-list')
const filterTypeSelect = document.getElementById('filter-type')
const maxValueFilterInput = document.getElementById('max-value')
const minValueFilterInput = document.getElementById('min-value')

const tableBody = document.querySelector('tbody')
const totalCostRow = document.getElementById('total-cost')

function cadastrarDespesa(event) {
  event.preventDefault()

  const cost = Number(costInput.value)
  const type = typeSelect.value
  const description = descriptionInput.value

  const expense = {cost, type, description}

  expenseTypes[type].costAccumulated += cost
  
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
    const expenseTypeLabel = expenseTypes[expense.type].label

    list += `<li>[${expenseTypeLabel}] ${expense.description} : R$ ${expense.cost},00</li>`
    return list
  }, '')
}

function updateExtract() {
  const tableRows = Object.values(expenseTypes).reduce((acc, type) => {
    if (type.costAccumulated !== 0) {
      acc += `<tr><td>${type.label}</td><td>R$ ${type.costAccumulated},00</td></tr>`
    }

    return acc
  }, '')
  
  const totalCost = expenses.reduce((acc, expense) => acc + expense.cost, 0)
  
  tableBody.innerHTML = tableRows
  totalCostRow.innerText = `R$ ${totalCost},00`
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

function sortList(event) {
  event.preventDefault()

  const sortedExpenses = expenses.sort((a, b) => b.cost - a.cost)

  const sortedList = parseArrayToHtmlList(sortedExpenses)

  expensesList.innerHTML = sortedList
}
