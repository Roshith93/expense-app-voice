import React, { useContext } from 'react'
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import useListStyles from './styles'
import { ExpenseTrackerContext } from '../../context'

export const List = () => {
  const classes = useListStyles()
  const { deleteTransactions, transactions } = useContext(ExpenseTrackerContext)
  const deleteItem = (id) => {
    deleteTransactions(id)
  }

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions && transactions.map((transaction) => {
        return (
          <Slide
            direction='down'
            in
            mountOnEnter
            unMountOnExit
            key={transaction.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    transaction.type === 'income'
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`$${transaction.amount} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                {' '}
                <IconButton edge='end' aria-label='delete' onClick={ () => deleteItem(transaction.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        )
      })}
    </MUIList>
  )
}
