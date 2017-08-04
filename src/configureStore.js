import { createStore, combineReducers } from 'redux'

import inputs from './reducers/inputs'
import outputs from './reducers/outputs'

const rootReducer = combineReducers({
  inputs,
  outputs
})

export default () => createStore(rootReducer)
