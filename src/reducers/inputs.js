import update from 'immutability-helper'

export default (
  state = {
    inputNames: ['A', 'B', 'C'],
  },
  action
) => {
  switch (action.type) {
    case 'ADD_INPUT':
      if (state.inputNames.length >= 4) return state

      return update(
        state,
        {
          inputNames: { $push: [['D']] }
        }
      )

    case 'REMOVE_INPUT':
      if (state.inputNames.length <= 1) return state

      return update(
        state,
        {
          inputNames: { $splice: [[-1, 1]] }
        }
      )
  }

  return state
}
