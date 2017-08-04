import update from 'immutability-helper'

export default (
  state = {
    inputNames: ['I1', 'I2', 'I3']
  },
  action
) => {
  switch (action.type) {
    case 'ADD_INPUT':
      if (state.inputNames.length >= 4) return state

      return update(
        state,
        {
          inputNames: { $push: ['I' + (state.inputNames.length + 1)] }
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

    case 'RENAME_INPUT':
      return update(
        state,
        {
          inputNames: { [action.payload.inputId]: { $set: action.payload.newName.toUpperCase() } }
        }
      )
  }

  return state
}
