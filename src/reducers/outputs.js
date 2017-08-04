import update from 'immutability-helper'

export default (
  state = {
    outputNames: ['O1', 'O2'],
    outputValues: [emptyArray(16), emptyArray(16)]
  },
  action
) => {
  switch (action.type) {
    case 'ADD_OUTPUT':
      if (state.outputNames.length >= 4) return state

      return update(
        state,
        {
          outputNames: { $push: ['O' + (state.outputNames.length + 1)] },
          outputValues: { $push: [emptyArray(16)] }
        }
      )

    case 'REMOVE_OUTPUT':
      if (state.outputNames.length <= 1) return state

      return update(
        state,
        {
          outputNames: { $splice: [[-1, 1]] },
          outputValues: { $splice: [[-1, 1]] }
        }
      )

    case 'RENAME_OUTPUT':
      return update(
        state,
        {
          outputNames: { [action.payload.outputId]: { $set: action.payload.newName.toUpperCase() } }
        }
      )

    case 'FLIP_BIT':
      return update(
        state,
        {
          outputValues: {
            [action.payload.outputColumn]: {
              [action.payload.outputRow]: {
                $apply: (value) => (value || 0) ^ 1
              }
            }
          }
        }
      )

    case 'RESET':
      return update(
        state,
        {
          outputValues: {
            $set: zeroedOutputs(state.outputNames.length)
          }
        }
      )

    case 'RANDOMIZE':
      return update(
        state,
        {
          outputValues: {
            $set: randomOutputs(state.outputNames.length)
          }
        }
      )
  }

  return state
}

function zeroedOutputs (numOutputs) {
  return emptyArray(numOutputs).map(() => (
    emptyArray(16).map(() => 0)
  ))
}

function randomOutputs (numOutputs) {
  return emptyArray(numOutputs).map(() => (
    emptyArray(16).map(() => Math.floor(Math.random() * 2))
  ))
}

function emptyArray (size) {
  return Array.apply(null, Array(size)).map(() => {})
}
