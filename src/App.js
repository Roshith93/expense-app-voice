import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import {
  PushToTalkButton,
  PushToTalkButtonContainer, ErrorPanel
} from '@speechly/react-ui'

import { Details, Main } from './components'
import useAppStyles from './styles'

const App = () => {
  const classes = useAppStyles()
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4}>
          <Paper>
            <Details title='Income' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
            <Details title='Expense' />
          </Paper>
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton/>
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  )
}

export default App
