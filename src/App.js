import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import 'normalize.css'
import './App.scss'

import TruthTableConfiguratorContainer from './components/TruthTableConfiguratorContainer'
import Solutions from './components/solutions/Solutions'

const store = configureStore()

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <main>
          <TruthTableConfiguratorContainer />
          <Solutions />
        </main>
      </Provider>
    )
  }
}

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

render(<App />, appRoot)
