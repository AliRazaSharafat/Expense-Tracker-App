import React, { createContext, useReducer } from "react";
import TransactionReducer from './TransactionReducer';

export const CTX = createContext();

function TransactionContext(props) {
    const initialState = [
    ]

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    const addTransaction = (transObject) => {
        dispatch({
            type: 'ADD TRANSACTION', payload: {
                amount: transObject.amount,
                desc: transObject.desc
            }
        });
    }

    return (

        <CTX.Provider value={{ transactions: state, addTransaction }}>
            {props.children}
        </CTX.Provider>
    )
}
export default TransactionContext;