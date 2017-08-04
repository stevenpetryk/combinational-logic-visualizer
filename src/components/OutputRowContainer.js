import { connect } from 'react-redux'

import TruthTableRow from './TruthTableRow'

function mapStateToProps (state, ownProps) {
  const outputValues = state.outputs.outputValues
  const bits = outputValues.map((column) => column[ownProps.row])

  return { bits }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onBitClick (bitIndex) {
      dispatch({ type: 'FLIP_BIT', payload: { outputRow: ownProps.row, outputColumn: bitIndex } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruthTableRow)
