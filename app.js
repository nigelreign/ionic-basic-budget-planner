const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller'); //alert conroller

let totalExpenses = 0;

// this will remove all the user input
const clear = () => {
   reasonInput.value = '';
   amountInput.value = '';
};

// confim button listener
confirmBtn.addEventListener('click', () => {

   const enteredReason = reasonInput.value;
   const enteredAmount = amountInput.value;

   // text validation
   if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
      // this creates a new alert and adds a message, header and a button
      console.log('we got here');
      alertCtrl.create({
         message: 'Please enter valid reason and amount',
         header: 'Invalid inputs',
         buttons: ['Okay']
      }).then(alertElement => {
         // this is responsible for adding presenting the alert message on the screen
         alertElement.present();
      });
      return;
   }
   // this will add entered reason and amount to ion-item
   const newItem = document.querySelector('ion-item');
   newItem.textContent = enteredReason + ': $' + enteredAmount;

   // append returns the newItem rendered
   expensesList.appendChild(newItem);

   // this adds all the expenses entered
   // the plus(+) added before enteredAmount will convert the string to a number so that the number gets added successfully
   totalExpenses += +enteredAmount;
   totalExpensesOutput.textContent = totalExpenses

   // clear after printing
   clear();
});

cancelBtn.addEventListener('click', clear);