import { connect } from 'react-redux'
import examples from '../../examples'

import Examples from './Examples'

function mapStateToProps (state) {
  return {
    examples: examples.getExamples()
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onLoadExample (exampleKey) {
      dispatch({ type: 'HYDRATE', payload: examples.getExampleState(exampleKey) })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Examples)
