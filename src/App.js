import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
const store = configureStore()

import 'normalize.css'
import './App.scss'

import TruthTableConfigurator from './components/TruthTableConfigurator'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <main>
          <TruthTableConfigurator />
        </main>
      </Provider>
    )
  }
}

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

render(<App />, appRoot)
