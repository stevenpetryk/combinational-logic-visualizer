import React from 'react'
import cx from 'classnames'
import find from 'lodash/find'

import Highlightable from './highlighting/Highlightable'
import TruthTableBit from './TruthTableBit'

@Highlightable({
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
    const { bits, onBitClick, row, isOutput } = this.props
    const { isHighlighted } = this.props

    return (
      <div
        className={cx('truth-table-row', { highlighted: isHighlighted })}
      >
        {bits.map((bit, index) => (
          <TruthTableBit
            isOutput={isOutput}
            row={row}
            output={index}
            bit={bit}
            onClick={() => onBitClick(index)}
            key={index}
          />
        ))}
      </div>
    )
  }
}
