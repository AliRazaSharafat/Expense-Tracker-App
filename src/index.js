import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Expense from './Expense.js';
import TransactionContext from './ExpenseComponents/TrasnsactionContext';

const app = (
  <TransactionContext>
    <Expense />
  </TransactionContext>
)


ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);
