import React, { useState, useContext, useEffect } from 'react'
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'
import { useSpeechContext } from '@speechly/react-client'

import useFormStyles from './styles/index'
import { ExpenseTrackerContext } from '../../context'
import { incomeCategories, expenseCategories } from '../../constants'
import { formatDate } from '../../utils/DateFormat'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
}
export const Form = () => {
  const classes = useFormStyles()
  const [formData, setFormData] = useState(initialState)
  const { addTransactions } = useContext(ExpenseTrackerContext)
  const { segment } = useSpeechContext()
  const selectedCategories =
    formData.type === 'Income' ? incomeCategories : expenseCategories

  const createTransation = () => {
    if(Number.isNaN(Number(formData.amount) || !formData.date.includes('-'))) return;
    let transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    }
    addTransactions(transaction)
    setFormData(initialState)
  }

  useEffect(() => {
    if (segment) {
      console.log(segment)
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'Expense' })
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'Income' })
      } else if (
        segment.final &&
        segment.intent.intent === 'create_transaction'
      ) {
        return createTransation()
      } else if (
        segment.final &&
        segment.intent.intent === 'cancel_transation'
      ) {
        return setFormData(initialState)
      }

      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
        switch (e.type) {
          case 'amount':
            return setFormData({ ...formData, amount: e.value })
          case 'category':
            if (incomeCategories.map((iC) => iC.type).includes(category)) {
              setFormData({ ...formData, type: 'Income', category })
            } else if (
              expenseCategories.map((eC) => eC.type).includes(category)
            ) {
              setFormData({ ...formData, type: 'Expense', category })
            }
            break
          case 'date':
            return setFormData({ ...formData, date: e.value })
          default:
            break
        }
      })
      if (
        segment.isFinal &&
        formData.amount &&
        formData.type &&
        formData.date &&
        formData.category
      ) {
        createTransation()
      }
    }
  }, [segment])
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          {segment && segment.words.map((w) => w.value).join(' ')}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((category) => (
              <MenuItem value={category.type} key={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='number'
          label='Amount'
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='date'
          label='Date'
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
        />
      </Grid>
      <Button
        className={classes.button}
        variant='outlined'
        color='primary'
        fullWidth
        onClick={createTransation}
      >
        {' '}
        Create
      </Button>
    </Grid>
  )
}
