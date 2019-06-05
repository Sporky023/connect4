import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from 'components/App'
import rootReducer from 'reducers'
import devState from 'devState'

const store = createStore(rootReducer, devState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('mountpoint')
)
