import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'

export const rootReducer = (state, action) => {
  let transactions
  switch (action.type) {
    case ADD_TRANSACTIONS:
      transactions = [action.payload, ...state]
      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions
    case DELETE_TRANSACTIONS:
      transactions = state.filter((t) => t.id !== action.payload)
      localStorage.setItem('transactions', JSON.stringify(transactions))
      return transactions
    default:
      return state
  }
}
