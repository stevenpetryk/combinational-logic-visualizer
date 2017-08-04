import { connect } from 'react-redux'

import TruthTableInputs from './TruthTableInputs'

function mapStateToProps (state) {
  return {
    numInputs: state.inputs.inputNames.length
  }
}

export default connect(mapStateToProps)(TruthTableInputs)
