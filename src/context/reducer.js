import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './types'

const initialState = [
  {
    id: null,
    type: null,
    amount: null,
    date: null, 
  },
]

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTIONS:
      console.log(action.payload)
      const transaction = [action.payload, ...state]
      return transaction
    case DELETE_TRANSACTIONS:
      const transactionId = state.filter((t) => t.id !== action.payload)
      return transactionId
    default:
      return state
  }
}
