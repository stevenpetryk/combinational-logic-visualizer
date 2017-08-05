import React from 'react'
import { connect } from 'react-redux'

import Highlightable from '../highlighting/Highlightable'
import Button from '../Button'

@connect(
  function mapStateToProps (state) {
    const onSetRows =
      state.outputs.outputValues[0]
        .map((value, index) => value === 1 && index)
        .filter((v) => v !== false)

    return {
      outputName: state.outputs.outputNames[0],
      onSetRows
    }
  }
)
@Highlightable({
  items (ownProps) {
    return ownProps.onSetRows.map((row) => ({ row, output: 0 }))
  }
})
export default class HighlightOnSetButton extends React.Component {
  render () {
    const { outputName, highlightOn, highlightOff } = this.props

    return (
      <Button
        className='highlighter'
        onMouseOver={highlightOn}
        onMouseOut={highlightOff}
      >
        Highlight <code>{outputName}</code>'s on-set
      </Button>
    )
  }
}
