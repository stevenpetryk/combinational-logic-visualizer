import { connect } from 'react-redux'
import { getPrimeImplicants } from 'quine-mccluskey'
import min from 'lodash/min'
import max from 'lodash/max'

import KarnaughMap from './KarnaughMap'

function mapStateToProps (state, ownProps) {
  const numInputs = state.inputs.inputNames.length
  const outputValues = state.outputs.outputValues[ownProps.output]

  const minterms = [...outputValues].splice(0, 2 ** numInputs)
    .map((value, index) => value === 1 && index)
    .filter((v) => v !== false)

  const implicants = getPrimeImplicants(minterms, [])

  const karnaughMapPositionsForNumInputs = {
    4: [0, 4, 12, 8, 1, 5, 13, 9, 3, 7, 15, 11, 2, 6, 14, 10],
    3: [0, 4, 1, 5, 3, 7, 2, 6],
    2: [0, 2, 1, 3]
  }

  const coordinatesForPositionForNumInputs = {
    4: [[0, 0], [1, 0], [2, 0], [3, 0],        [0, 1], [1, 1], [2, 1], [3, 1],    [0, 2], [1, 2], [2, 2], [3, 2],     [0, 3], [1, 3], [2, 3], [3, 3]],
    3: [[0, 0], [1, 0], [2, 0], [3, 0],        [0, 1], [1, 1], [2, 1], [3, 1]],
    2: [[0, 0], [1, 0],        [0, 1], [1, 1]],
  }

  const implicantsWithPositions = implicants.map((implicant) => {
    const positionMap = karnaughMapPositionsForNumInputs[numInputs]
    const coordinateMap = coordinatesForPositionForNumInputs[numInputs]
    const mintermPositions = implicant.minterms.map((minterm) => positionMap[minterm])

    return {
      ...implicant,
      mintermPositions,
      topLeft: coordinateMap[min(mintermPositions)],
      bottomRight: coordinateMap[max(mintermPositions)]
    }
  })

  return {
    numInputs,
    outputValues,
    implicants: implicantsWithPositions
  }
}

export default connect(mapStateToProps)(KarnaughMap)
