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
let btnAddExp = document.querySelector('.btn-add-expense')
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
  saveBudget()
});



const init = () => {
  let loadBudgets = localStorage.getItem(storageName)
  if(loadBudgets) {
    budgetListArr = JSON.parse(loadBudgets)
    // displayBudgets();
  } else {
    localStorage.setItem(storageName, JSON.stringify([]));
    hideDisplayMsg();
  }
}

const addBudget = () => {
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

let hideDisplayMsg = () => budgetHolder.innerHTML = displayMsg;

const saveBudget = () => {
  btnAddExp.addEventListener('click', () => {
    if (addBudgetTitle.value.length == 0 || addBudgetPrice.value.length == 0) {
      alert("Title or expenses field is empty :)")
    } else {
      let id = getLastId() + 1;
      // let expenseData = {
      //   id,
      //   title,
      //   expense,
      // };
      // budgetListArr.push(expenseData);
      updateLocalS();
      // renderMovies(budgetListArr);
      addBudgetTitle.value = addBudgetPrice.value = ''
    }
  })
}

const updateLocalS = () =>  localStorage.setItem(storageName, JSON.stringify(budgetListArr));

const createHeaderRow = () => {
  let headerContent = ['S/N', 'TITLE', 'EXPENSES', 'ACTIONS'];
  let tr = document.createElement('tr');
  for(let i = 0; i < headerContent.length; i++){
      let td = document.createElement('td');
      td.innerHTML = headerContent[i] ;
      tr.appendChild(td);
  }
  return tr;
}


function createMovieRows(movie, sn){
  let tr = document.createElement('tr');
  let snTd = document.createElement('td');
  snTd.innerHTML = sn + 1;
  let keys = ['title', 'expenses'];
  tr.appendChild(snTd);
  for(let i = 0; i < keys.length; i++){
      let td = document.createElement('td');
      td.innerHTML = movie[keys[i]];
      tr.appendChild(td);
  }
  let actionTd = document.createElement('td');
  let deletebtn = document.createElement('button');
  deletebtn.classList.add('delete');
  deletebtn.dataset.id = movie.id;
  deletebtn.innerHTML = 'delete';
  actionTd.appendChild(deletebtn);
  tr.appendChild(actionTd);
  return tr;
}

const getLastId = () => {
  let expenses = budgetListArr;
  let expensesLen = expenses.length;
  let r = expensesLen ? expenses[expensesLen - 1]['id'] : 1;
  console.log(r)
  return r;
}


