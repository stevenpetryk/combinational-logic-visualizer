import { connect } from 'react-redux'

import TruthTableOutputs from './TruthTableOutputs'

function mapStateToProps (state) {
  return {
    numInputs: state.inputs.inputNames.length
  }
}

export default connect(mapStateToProps)(TruthTableOutputs)
