'use strict'
let btnAddIncome = document.querySelector('.btn-add-income')
let incomeValue = document.querySelector('.income-value')

btnAddIncome.addEventListener('click', () => {
  let income = document.querySelector('.txt-income')
  let y = +(incomeValue.innerHTML )
  let x = Number(income.value)
  y = 0 
  console.log(x)
  console.log(y)
  // y =+ income.value
  // y = y + x
  console.log(y + x)
  income.value = ''
})

let expensesArray = []

let displayExp = () => {
  expensesArray.forEach( expensesList => {

  })
}


let addExpenses = (expensesList) => {
  expensesArray.push(expensesList)
}