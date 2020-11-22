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
let btnAddIncome = document.querySelector('.btn-add-income')
let incomeValue = document.querySelector('.income-value2').innerHTML
let totalExp = document.querySelector('.tExpences').innerHTML
let totalBal = document.querySelector('.tBalance').innerHTML
let incomeField = document.querySelector('.txt-income')
let addBudgetTitle = document.querySelector('.budgetTitle')
let addBudgetPrice = document.querySelector('.budgetPrice')
let budgetHolder = document.querySelector('.table-holder')
let displayMsg = "Empty budget lists";
let storageName = 'budgetList';
let budgetListArr = []


window.addEventListener('load', () => {
  init();
  addBudget()
  addExpensesList()
});



let init = () => {
  let loadBudgets = localStorage.getItem(storageName)
  if(loadBudgets) {
    budgetListArr = JSON.parse(loadBudgets)
    // displayBudgets();
  } else {
    localStorage.setItem(storageName, JSON.stringify([]));
    hideDisplayMsg();
  }
}

let addBudget = () => {
  btnAddIncome.addEventListener('click', () => {
    if (incomeField.value.length == 0) {
      alert("Text field is empty")
    } else {
      let incomeResult
      incomeResult = Number(incomeValue) + Number(incomeField.value)
      console.log(incomeResult)
      incomeValue = incomeResult
      incomeResult = document.querySelector('.income-value2')
      incomeResult.innerHTML = incomeValue
      incomeField.value = ''
    }
  })
}

let addExpensesList = () => {

}

let hideDisplayMsg = () => budgetHolder.innerHTML = displayMsg;
hideDisplayMsg()


