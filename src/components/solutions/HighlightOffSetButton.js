import React from 'react'
import { connect } from 'react-redux'

import Highlightable from '../highlighting/Highlightable'
import Button from '../Button'

@connect(
  function mapStateToProps (state) {
    const offSetRows =
      state.outputs.outputValues[0]
        .map((value, index) => value === 0 && index)
        .filter((v) => v !== false)

    return {
      outputName: state.outputs.outputNames[0],
      offSetRows
    }
  }
)
@Highlightable({
  items (ownProps) {
    return ownProps.offSetRows.map((row) => ({ row, output: 0 }))
  }
})
export default class HighlightOffSetButton extends React.Component {
  render () {
    const { outputName, highlightOn, highlightOff } = this.props

    return (
      <Button
        className='highlighter'
        onMouseOver={highlightOn}
        onMouseOut={highlightOff}
      >
        Highlight <code>{outputName}</code>'s off-set
      </Button>
    )
  }
}
