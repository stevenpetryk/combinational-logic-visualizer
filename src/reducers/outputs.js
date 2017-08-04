import update from 'immutability-helper'

export default (
  state = {
    outputNames: ['X', 'Y'],
    outputValues: [newOutput(), newOutput()]
  },
  action
) => {
  switch (action.type) {
    case 'ADD_OUTPUT':
      return update(
        state,
        {
          outputNames: { $push: ['Z'] },
          outputValues: { $push: [newOutput()] }
        }
      )

    case 'REMOVE_OUTPUT':
      return update(
        state,
        {
          outputNames: { $splice: [[-1, 1]] },
          outputValues: { $splice: [[-1, 1]] }
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
  }

  return state
}

function newOutput () {
  return Array.apply(null, Array(32)).map(() => {})
}
