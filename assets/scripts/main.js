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

// `````````````````` declarartion of variables ``````````````````
let btnAddBudget = document.querySelector('.btnAddBudget')
let btnAddExpenses = document.querySelector('.btn-add-expense')
let estimatedBudget = document.querySelector('.estimatedBudget').innerHTML
let totalExpenses = document.querySelector('.tExpences')
let totalBalance = document.querySelector('.tBalance')
let txtBudgetField = document.querySelector('.txtBudgetField')
let txtExpenseTitle = document.querySelector('.txtExpenseTitle')
let txtExpensesPrice = document.querySelector('.txtExpensesPrice')
let budgetHolder = document.querySelector('.table-holder')
// let displayMsg = "Empty budget lists";
let storageName = 'budgetListStorage';
let budgetList = []
let incomeList = []
let incomeStorage = 'incomeStorage'
let totalEstimatedBudgetResult

window.addEventListener('load', () => {
  init()
  addExpenses()
  addBudget()
});

let init = () => {
  let incomeStorage
  // let loadFromLS = localStorage.getItem(storageName)
  // let loadIncomeFromLS = localStorage.getItem(incomeStorage)
  if ( localStorage.getItem('incomeStorage')) {
    incomeStorage =  localStorage.getItem(storageName)
  }
}

const addBudget = () => {
  btnAddBudget.addEventListener('click', () => {
    if (txtBudgetField.value.length == 0) {
      alert("Invalid input field... :)")
    } else {
      totalEstimatedBudgetResult = Number(estimatedBudget) + Number(txtBudgetField.value)
      estimatedBudget = totalEstimatedBudgetResult
      totalEstimatedBudgetResult = document.querySelector('.estimatedBudget')
      totalEstimatedBudgetResult.innerHTML = estimatedBudget
      txtBudgetField.value = ''
      console.log(incomeList.push(totalEstimatedBudgetResult.innerHTML))
    }
    let list = JSON.stringify(incomeList)
    localStorage.setItem(incomeStorage,list)
  })
}


const addExpenses = () => {
  btnAddExpenses.addEventListener('click', () => {
    let title = txtExpenseTitle.value;
    let expense = Number(txtExpensesPrice.value);
    if (title.length == 0 || expense.length == 0) {
      alert("Title or expenses field is empty :)")
    } else {
      const savedEstimatedBudget = Number(document.querySelector('.estimatedBudget').textContent)
      totalExpenses.innerHTML = Number(totalExpenses.innerHTML) + expense
      totalBalance.innerHTML =  savedEstimatedBudget - totalExpenses.innerHTML
      let id = getLastId() + 1;
      const expenseData = {
        id,
        title,
        expense,
      };
      console.log(budgetList.push(expenseData))
      txtExpenseTitle.value = txtExpensesPrice.value = ''
      renderExpenses()
    }
  })
}

let renderExpenses = () => {
  let expenses = budgetList;
  if(expenses.length){
      let table = `<table>
      <thead>
          <tr>
              <th>S/N</th>
              <th>TITLE</th>
              <th>BUDGET</th>
              <th >ACTIONS</th>
          </tr>
      </thead>
      <tbody id="tbody">
      `;
      expenses.forEach((expense, idx) => {
         table+=`<tr>
          <td>${idx + 1}</td>
          <td>${expense.title}</td>
          <td>${expense.expense}</td>
          <td style="display:grid; grid-template-columns: 30% 30%;">
              <button id="btn-clear" class="btn bg-danger text-light" data-id="${expense.id}">delete</button>
              <button id="btn-clear" class="btn bg-danger text-light" data-id="${expense.id}">edit</button>
          </td>
          </tr>`;
      });
      budgetHolder.innerHTML = table;
      // addRemoveEvent();
  } else {
      // doNoMovies();
      console.log('Error')
  }
}

let getLastId = () => {
  let expense = budgetList;
  let budgetListLen = expense.length;
  let r = budgetListLen ? expense[budgetListLen - 1]['id'] : 1;
  return r;
} 