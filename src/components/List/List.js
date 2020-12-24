import React from 'react'
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

export const List = () => {
  const classes = useListStyles()
  const transactions = [
    {
      id: 1,
      type: 'income',
      amount: 100,
      date: 'Thu Dec 24 2020',
    },
    {
     id: 2,
     type: 'income',
     amount: 100,
     date: 'Thu Dec 24 2020',
   },{
    id: 3,
    type: 'income',
    amount: 100,
    date: 'Thu Dec 24 2020',
  },
  ]
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => {
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
                <IconButton edge='end' aria-label='delete' onClick={() => {}}>
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
