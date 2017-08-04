import { connect } from 'react-redux'

import TruthTableOutputs from './TruthTableOutputs'

function mapStateToProps (state) {
  return {
    numInputs: state.inputs.inputNames.length,
    outputValues: state.outputs.outputValues
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onFlip (outputColumn, outputRow) {
      dispatch({ type: 'FLIP_BIT', payload: { outputColumn, outputRow } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruthTableOutputs)
