import React, { useReducer, createContext } from 'react'

import { rootReducer } from './reducer'
import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'

const initialState = JSON.parse(localStorage.getItem('transactions')) || []
export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(rootReducer, initialState)
  const deleteTransactions = (id) => {
    dispatch({
      type: DELETE_TRANSACTIONS,
      payload: id,
    })
  }
  const addTransactions = (transaction) => {
    dispatch({
      type: ADD_TRANSACTIONS,
      payload: transaction,
    })
  }
  
  const totalBalance = transactions.reduce(
    (acc, transaction) =>
      transaction.type === 'Expense'
        ? acc - transaction.amount
        : acc + transaction.amount,
    0
  )

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        totalBalance,
        addTransactions,
        deleteTransactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
