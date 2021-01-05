import React, { useState, useEffect, useReducer, createContext } from 'react'

import { rootReducer } from './reducer'
import { addTransactions, deleteTransactions } from './actions'
// import { }
const initialState = [{ id: 1 }]
export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  console.log(state)
  return (
    <ExpenseTrackerContext.Provider
      value={{ ...state, addTransactions, deleteTransactions }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
