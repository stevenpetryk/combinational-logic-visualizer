import { connect } from 'react-redux'

import TruthTableRow from './TruthTableRow'

function mapStateToProps (state, ownProps) {
  const bits = ownProps.row.toString(2).padStart(state.inputs.inputNames.length, '0').split('')
  return { bits }
}

export default connect(mapStateToProps)(TruthTableRow)
