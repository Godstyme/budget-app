'use strict'
// let btnAddIncome = document.querySelector('.btn-add-income')
// let incomeValue = document.querySelector('.income-value')

// btnAddIncome.addEventListener('click', () => {
//   let income = document.querySelector('.txt-income')
//   let y = +(incomeValue.innerHTML )
//   let x = Number(income.value)
//   y = 0 
//   console.log(x)
//   console.log(y)
//   // y =+ income.value
//   // y = y + x
//   console.log(y + x)
//   income.value = ''
// })

// let expensesArray = []

// let displayExp = () => {
//   expensesArray.forEach( expensesList => {

//   })
// }


// let addExpenses = (expensesList) => {
//   expensesArray.push(expensesList)
// }



 // date function that is being display on the web page 
const dateBuilder = (d) => {
  const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
  const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
  const day = days[d.getDay()]
  const date = d.getDate()
  const month = months[d.getMonth()]
  const year = d.getFullYear()
  return `${day}, ${date} ${month} ${year}.`
}
const now = new Date()
const date = document.querySelector('#date').innerHTML = dateBuilder(now)
