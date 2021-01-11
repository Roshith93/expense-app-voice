import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import './index.css'
import { Provider } from './context'

ReactDOM.render(
  <SpeechProvider
    appId='06d3edbb-dfe3-4e3e-bc53-3cffad634696'
    language='en-US'
  >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
)
