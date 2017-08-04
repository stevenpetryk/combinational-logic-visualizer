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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruthTableHeader)
