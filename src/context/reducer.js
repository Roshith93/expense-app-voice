import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'


const initialState = []

export const rootReducer = (state = initialState, action) => {
  let transactions;
  switch (action.type) {
    case ADD_TRANSACTIONS:
       transactions = [action.payload, ...state]
      return transactions
    case DELETE_TRANSACTIONS:
       transactions = state.filter((t) => t.id !== action.payload)
      return transactions
    default:
      return state
  }
}
