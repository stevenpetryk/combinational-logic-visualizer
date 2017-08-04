import { default as localStore } from 'store'

export default store => next => action => {
  const prevState = store.getState()
  const result = next(action)
  const nextState = store.getState()

  if (prevState !== nextState) {
    localStore.set('state', nextState)
  }

  return result
}
