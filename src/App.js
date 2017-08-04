import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
const store = configureStore()

import 'normalize.css'
import './App.scss'

import TruthTableConfiguratorContainer from './components/TruthTableConfiguratorContainer'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <main>
          <TruthTableConfiguratorContainer />
          <div>
            <h1>Identify Product-of-Sums Form</h1>
            <h1>Identify Sum-of-Products Form</h1>
            <h1>Draw Karnaugh Map</h1>
            <h1>Identify Minimal Form</h1>
            <h1>Draw Gate Diagram</h1>
          </div>
        </main>
      </Provider>
    )
  }
}

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

render(<App />, appRoot)
