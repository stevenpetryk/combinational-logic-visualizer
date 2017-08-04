import { connect } from 'react-redux'

import TruthTableConfigurator from './TruthTableConfigurator'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    onReset () {
      dispatch({ type: 'RESET' })
    },

    onRandomize () {
      dispatch({ type: 'RANDOMIZE' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruthTableConfigurator)
