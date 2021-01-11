import React, { useState, useContext } from 'react'
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
    let transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    }
    addTransactions(transaction)
    setFormData(initialState)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          {segment && segment.words.map((w) => w.value).join(" ")}
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
