import update from 'immutability-helper'

export default (
  state = { items: [] },
  action
) => {
  switch (action.type) {
    case 'SET_HIGHLIGHTED_ITEMS':
      return update(
        state,
        { items: { $set: action.payload } }
      )

    case 'REMOVE_HIGHLIGHTED_ITEMS':
      return update(
        state,
        { items: { $set: [] } }
      )
  }

  return state
}
