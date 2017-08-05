import { connect } from 'react-redux'

import CanonicalForms from './CanonicalForms'

function mapStateToProps (state, ownProps) {
  const inputNames = state.inputs.inputNames
  const numInputs = inputNames.length
  const numOutputs = state.outputs.outputNames.length
  const outputNames = state.outputs.outputNames

  return { numOutputs, numInputs, inputNames, outputNames }
}

export default connect(mapStateToProps)(CanonicalForms)
