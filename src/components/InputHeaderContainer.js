import { connect } from 'react-redux'

import TruthTableHeader from './TruthTableHeader'

function mapStateToProps (state) {
  return {
    names: state.inputs.inputNames
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onAdd () {
      dispatch({ type: 'ADD_INPUT' })
    },

    onRemove () {
      dispatch({ type: 'REMOVE_INPUT' })
    },

    onRename (inputId, newName) {
      dispatch({ type: 'RENAME_INPUT', payload: { inputId, newName } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruthTableHeader)
