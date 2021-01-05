import React, { useState, useEffect, useReducer, createContext } from 'react'

import { rootReducer } from './reducer'
import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'

const initialState = []
export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer)
  console.log(state)
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

  return (
    <ExpenseTrackerContext.Provider
      value={{ ...state, addTransactions, deleteTransactions }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
