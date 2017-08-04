import { connect } from 'react-redux'

import ProductSums from './ProductSums'

function mapStateToProps (state) {
  return {
    numInputs: state.inputs.inputNames.length,
    numOutputs: state.outputs.outputNames.length,
    outputNames: state.outputs.outputNames
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSums)
