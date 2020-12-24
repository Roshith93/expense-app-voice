import React from 'react'
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

export const Form = () => {
  const classes = useFormStyles()
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
          <Select>
            <MenuItem value='income'>Income</MenuItem>
            <MenuItem value='expense'>expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
      <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value='income'>buisness</MenuItem>
            <MenuItem value='expense'>salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
      <TextField type="number" label="Amount" fullWidth/>
      </Grid>
      <Grid item xs={6}>
      <TextField type="date" label="Date" fullWidth/>
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth> Create</Button>
    </Grid>
  )
}
