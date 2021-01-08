import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useDetailsStyle from './styles'
import { useTrancations } from '../../useTrancations'

export const Details = ({ title }) => {
  const classes = useDetailsStyle()
  const { total, chartData } = useTrancations(title)
  console.log(chartData)
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography component='h3'>{total}</Typography>
        <Doughnut data={chartData}/>
      </CardContent>
    </Card>
  )
}
