'use strict'
// `````` date function that is being display on the web page ````````
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

// ============= declarartion of variables ============
let btnAddBudget = document.querySelector('.btnAddBudget')
let btnAddExpenses = document.querySelector('.btn-add-expense')
let estimatedBudget = document.querySelector('.estimatedBudget').innerHTML
let totalExpenses = document.querySelector('.tExpences')
let totalBalance = document.querySelector('.tBalance')
let txtBudgetField = document.querySelector('.txtBudgetField')
let txtExpenseTitle = document.querySelector('.txtExpenseTitle')
let txtExpensesPrice = document.querySelector('.txtExpensesPrice')
let budgetHolder = document.querySelector('.table-holder')
let displayMsg = "Empty budget lists";
let storageName = 'budgetList';
let budgetListArr = []

window.addEventListener('load', () => {
  init()
  saveExpenses()
});

let init = () => {
  let loadFromLS = localStorage.getItem(storageName)
  if (loadFromLS) {
    budgetListArr = JSON.parse(loadFromLS)
    addBudget()
  } else {
    localStorage.setItem(storageName, JSON.stringify([]))
    // hideDisplayMsg()
  }
}

let totalEstimatedBudgetResult
const addBudget = () => {
  btnAddBudget.addEventListener('click', () => {
    if (txtBudgetField.value.length == 0) {
      alert("Invalid input field... :)")
    } else {
      totalEstimatedBudgetResult = Number(estimatedBudget) + Number(txtBudgetField.value)
      // console.log(totalEstimatedBudgetResult)
      estimatedBudget = totalEstimatedBudgetResult
      totalEstimatedBudgetResult = document.querySelector('.estimatedBudget')
      totalEstimatedBudgetResult.innerHTML = estimatedBudget
      console.log(budgetListArr.push(totalEstimatedBudgetResult))
      renderBudget()
      localStorage.setItem(storageName,JSON.stringify([]))
      txtBudgetField.value = ''
    }
  })
}

const hideDisplayMsg = () => budgetHolder.innerHTML = displayMsg;

const saveExpenses = () => {
  btnAddExpenses.addEventListener('click', () => {
    let expense = Number(txtExpensesPrice.value);
    let title = txtExpenseTitle.value;
    if (title.length == 0 || expense.length == 0) {
      alert("Title or expenses field is empty :)")
    } else {
      const savedEstimatedBudget = Number(document.querySelector('.estimatedBudget').textContent)
      totalExpenses.innerHTML = Number(totalExpenses.innerHTML) + expense
      totalBalance.innerHTML =  savedEstimatedBudget - totalExpenses.innerHTML
      console.log(totalBalance.innerHTML)
      txtExpenseTitle.value = txtExpensesPrice.value = ''
      renderExpenses()
    }
  })
}

const renderBudget = () => {
  budgetListArr.forEach(e => {
    console.log(e.textContent)
  })
}