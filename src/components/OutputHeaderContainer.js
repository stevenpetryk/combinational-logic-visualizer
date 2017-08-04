import { connect } from 'react-redux'

import TruthTableHeader from './TruthTableHeader'

function mapStateToProps (state) {
  return {
    names: state.outputs.outputNames,
    values: state.outputs.outputValues
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onAdd () {
      dispatch({ type: 'ADD_OUTPUT' })
    },

    onRemove () {
      dispatch({ type: 'REMOVE_OUTPUT' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruthTableHeader)
