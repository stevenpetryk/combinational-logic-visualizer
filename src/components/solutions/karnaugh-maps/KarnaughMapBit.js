import React from 'react'
import { connect } from 'react-redux'

import Highlightable from '../../highlighting/Highlightable'

import TruthTableBit from '../../TruthTableBit'

@connect(
  null,
  function mapDispatchToProps (dispatch) {
    return {
      onBitClick (output, row) {
        dispatch({ type: 'FLIP_BIT', payload: { outputRow: row, outputColumn: output } })
      }
    }
  }
)
@Highlightable({
  items ({ row, output }) {
    return [{ row, output }]
  }
})
export default class KarnaughMapBit extends React.Component {
  render () {
    const { bit, row, output, onBitClick } = this.props
    const { highlightOn, highlightOff } = this.props

    return (
      <td
        onMouseOver={highlightOn}
        onMouseOut={highlightOff}
      >
        <TruthTableBit
          bit={bit}
          onClick={() => onBitClick(output, row)}
        />
      </td>
    )
  }
}
