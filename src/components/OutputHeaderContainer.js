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
    },

    onRename (outputId, newName) {
      dispatch({ type: 'RENAME_OUTPUT', payload: { outputId, newName } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruthTableHeader)
