import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import 'normalize.css'
import './App.scss'

import TruthTableConfiguratorContainer from './components/TruthTableConfiguratorContainer'
import Solutions from './components/solutions/Solutions'

const store = configureStore()

export default class App extends React.Component {
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
