import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
const store = configureStore()

import RootContainer from './RootContainer'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

render(<App />, appRoot)
