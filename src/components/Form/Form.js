import React, { useState } from 'react'
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

import useFormStyles from './styles/index'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date()
}
export const Form = () => {
  const classes = useFormStyles()
  const [formData, setFormData] = useState(initialState)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          Hello
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
            <MenuItem value='income'>Income</MenuItem>
            <MenuItem value='expense'>expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select onChange={e => setFormData({...formData, category: e.target.value})}>
            <MenuItem value='buisness'>Buisness</MenuItem>
            <MenuItem value='salary'>Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
      <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})}/>
      </Grid>
      <Grid item xs={6}>
      <TextField type="date" label="Date" fullWidth value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}/>
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth> Create</Button>
    </Grid>
  )
}
