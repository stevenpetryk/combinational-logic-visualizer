import React from 'react'
import cx from 'classnames'
import find from 'lodash/find'

import Highlightable from './highlighting/Highlightable'

@Highlightable('row', {
  isHighlighted (items, ownProps) {
    if (ownProps.isOutput) return false

    return find(items, (item) => item.row === ownProps.row)
  },

  items (ownProps) {
    return [{ row: ownProps.row }]
  }
})
export default class TruthTableRow extends React.Component {
  render () {
    const { bits, onBitClick } = this.props
    const { isHighlighted, highlightOn, highlightOff } = this.props

    return (
      <div
        className={cx('truth-table-row', { highlighted: isHighlighted })}
        onMouseOver={highlightOn}
        onMouseOut={highlightOff}
      >
        {bits.map((bit, index) => {
          return (
            <div
              className='truth-table-bit'
              onClick={() => onBitClick(index)}
              key={index}
            >
              {bit}
            </div>
          )
        })}
      </div>
    )
  }
}
