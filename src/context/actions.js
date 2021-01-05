import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'

export const deleteTransactions = (id) => {
  return {
    type: ADD_TRANSACTIONS,
    payload: id,
  }
}

export const addTransactions = (transaction) => {
  return {
    type: DELETE_TRANSACTIONS,
    payload: transaction,
  }
}
