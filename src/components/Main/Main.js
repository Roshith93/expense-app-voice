import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
} from '@material-ui/core'

import useMainStyles from './styles'

export const Main = () => {
  const classes = useMainStyles()
  return (
    <Card className={classes.root}>
      <CardHeader title='Expense tracker' subheader='Powered by Speechly' />
      <CardContent>
        <Typography variant='h5' align='center'>
          Total Balance
        </Typography>
        <Typography style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          Text from the speechly
        </Typography>
        <Divider />
        {/* add form */}
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Datap
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
