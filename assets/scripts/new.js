'use strict';
// `````` date function that is being display on the web page ````````
const dateBuilder = d => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day}, ${date} ${month} ${year}.`;
};
const now = new Date();
const date = (document.querySelector('#date').innerHTML = dateBuilder(now));

// ============= declarartion of variables ============
let btnAddBudget = document.querySelector('.btnAddBudget');
let btnAddExpenses = document.querySelector('.btn-add-expense');
let estimatedBudget = document.querySelector('.estimatedBudget').innerHTML;
let totalExpenses = document.querySelector('.tExpences');
let totalBalance = document.querySelector('.tBalance');
let txtBudgetField = document.querySelector('.txtBudgetField');
let txtExpenseTitle = document.querySelector('.txtExpenseTitle');
let txtExpensesPrice = document.querySelector('.txtExpensesPrice');
let budgetHolder = document.querySelector('.table-holder');
let displayMsg = 'Empty budget lists';
let storageName = 'budgetListStorage';
let budgetList = [];
let totalEstimatedBudgetResult;

// Here we remove the load event listener and just create a
// self invoked function

(() => {
  let loadFromLS = localStorage.getItem(storageName);

  if (loadFromLS) {
    budgetList = JSON.parse(loadFromLS);
  }
})();

// We then add all our event listeners
const budgetForm = document.querySelector('#budgetForm');

// Listen for the form submission
budgetForm.addEventListener('submit', () => {
  // Get the form data
  let budget = {
    income: budgetForm.income,
    expenseTitle: budgetForm.expense_title,
    expense: budgetForm.expenses
  };

  // Check if any fields are empty and alert the user to fill
  if (!budget.income || budget.expenseTitle || budget.expense) {
    alert('All fileds are required');
    return;
  }

  // Call the add budget function
  addBudget(budget);
});

// Then define the functions to call
const addBudget = () => {
  totalEstimatedBudgetResult =
    Number(estimatedBudget) + Number(txtBudgetField.value);
  estimatedBudget = totalEstimatedBudgetResult;
  totalEstimatedBudgetResult = document.querySelector('.estimatedBudget');
  renderBudget();
};

// After doing all the calculations above then save the data in localstorage
const saveExpenses = payload => {
  localStorage.setItem(storageName, JSON.stringify(payload));
};

const renderBudget = () => {
  totalEstimatedBudgetResult.innerHTML += estimatedBudget;
};
