import React from 'react'
import { connect } from 'react-redux'

import Root from './Root'

function mapStateToProps (state) {
  return {
    foo: state.foo
  }
}

export default connect(mapStateToProps)(Root)
