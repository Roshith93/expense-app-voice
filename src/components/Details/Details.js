import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useDetailsStyle from './styles'

export const Details = ({ title }) => {
  const classes = useDetailsStyle()
  return (
    <Card className={title === 'income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography component='h3'>Income</Typography>
      </CardContent>
    </Card>
  )
}
