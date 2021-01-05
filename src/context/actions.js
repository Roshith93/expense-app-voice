import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'

export const addTransactions = (id = '1') => {
  return {
    type: ADD_TRANSACTIONS,
    payload: id,
  }
}

export const deleteTransactions = (transaction = 'hello') => {
  return {
    type: DELETE_TRANSACTIONS,
    payload: transaction,
  }
}
