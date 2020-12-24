import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import { Details } from './components'
import useAppStyles from './styles'

const App = () => {
  const classes = useAppStyles()
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={2}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4}>
          <Paper>
            <Details title="income"/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
            <Details  title="expense"/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
