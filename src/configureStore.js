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

const wrappedReducer = (state, action) => {
  if (action.type === 'HYDRATE') {
    return action.payload
  }

  return rootReducer(state, action)
}

export default () => createStore(
  wrappedReducer,
  localStore.get('state'),
  composeWithDevTools(
    applyMiddleware(freeze)
  )
)
