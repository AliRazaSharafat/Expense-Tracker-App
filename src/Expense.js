import React, { useContext, useState } from 'react'
// import TransactionContext from './ExpenseComponents/TrasnsactionContext';
import { CTX } from './ExpenseComponents/TrasnsactionContext';
import './Expense.css';

function Expense() {
    const { transactions, addTransaction } = useContext(CTX);
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmitHandler = event => {
        event.preventDefault();
        if (amount === 0 || desc === '') {
            alert('Enter some data');
            return false
        }
        addTransaction({ desc: desc, amount: Number(amount) });
        setAmount(0);
        setDesc('');
    }

    const getIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount
            }
        }
        return expense;
    }

    const totalBalance = () => {
        let balance = 0;
        for (let i = 0; i < transactions.length; i++) {
            balance += transactions[i].amount
        }
        return balance;
    }

    return (
        <div className="Expense">
            <h3 className="text-align">Expense Tracker</h3>
            <h3>Your Balance <br /><strong>${totalBalance()}</strong> </h3>
            <div className="Income-Expense">
                <h4 >INCOME <br />${getIncome()}</h4>
                <h4>EXPENSE<br />${getExpense()}</h4>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((trans, i) => {
                    return (
                        <li key={i}>
                            <span>{trans.desc}</span>
                            <span>${trans.amount}</span>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <h3>Add New Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={onSubmitHandler}>
                <label >
                    Enter Description<br />
                    <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
                </label>
                <br />
                <label >
                    Amount<br />
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </label>
                <br />
                <input className="submit-button" type="submit" />
            </form>
        </div>
    )
}

export default Expense;
