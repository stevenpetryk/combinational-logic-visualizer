import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
  foo: (store = 'asdf') => store
})

export default () => createStore(rootReducer)
