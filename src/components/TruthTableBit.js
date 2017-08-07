import React from 'react'
import Highlightable from './highlighting/Highlightable'
import cx from 'classnames'
import find from 'lodash/find'

@Highlightable({
  isHighlighted (items, ownProps) {
    if (!ownProps.isOutput) return false

    return find(items, (item) => item.row === ownProps.row && item.output === ownProps.output)
  },

  items (ownProps) {
    return []
  }
})
export default class TruthTableBit extends React.Component {
  render () {
    const { bit, onClick } = this.props
    const { isHighlighted } = this.props

    return (
      <div
        className={cx('truth-table-bit', { highlighted: isHighlighted })}
        onClick={onClick}
      >
        {bit}
      </div>
    )
  }
}
