import React from 'react'
import { render } from 'react-dom'
import { AppContainer as HotEnabler } from 'react-hot-loader'
import App from './App'

const appRoot = document.createElement('div')
document.body.appendChild(appRoot)

render(
  <HotEnabler>
    <App />
  </HotEnabler>,
  appRoot
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    render(
      <HotEnabler>
        <NextApp />
      </HotEnabler>,
      appRoot
    )
  })
}
