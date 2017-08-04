import { createStore, combineReducers, applyMiddleware } from 'redux'
import { default as localStore } from 'store'

import { composeWithDevTools } from 'redux-devtools-extension'

import inputs from './reducers/inputs'
import outputs from './reducers/outputs'

import freeze from './middlewares/freeze'

const rootReducer = combineReducers({
  inputs,
  outputs
})

export default () => createStore(
  rootReducer,
  localStore.get('state'),
  composeWithDevTools(
    applyMiddleware(freeze)
  )
)
