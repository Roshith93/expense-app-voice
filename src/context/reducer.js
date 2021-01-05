import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'

const initialState = {
  id: null,
  transaction: null,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTIONS:
      const transaction = [action.payload, ...state]
      return transaction
    case DELETE_TRANSACTIONS:
      const transactionId = state.filter(t => t.id !== action.payload)
      return transactionId
    default:
      return state
  }
}
