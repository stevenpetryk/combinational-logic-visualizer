import React from 'react'
import cx from 'classNames'

import TruthTableHeader from './TruthTableHeader'
import OutputHeaderContainer from './OutputHeaderContainer'

import './TruthTableInputs.scss'

export default ({
  numInputs,
  outputValues,
  onFlip
}) => {
  const inputArray = Array.apply(null, Array(2 ** numInputs)).map(() => {})
  const outputArray = Array.apply(null, Array(outputValues.length)).map(() => {})

  return (
    <div className='truth-table-data truth-table-outputs'>
      <OutputHeaderContainer />

      {inputArray.map((_, outputRow) => (
        <div className='truth-table-row' key={outputRow}>
          {outputArray.map((_, outputColumn) => {
            const bit = outputValues[outputColumn][outputRow] || 0

            return (
              <div
                className={cx('truth-table-bit', { one: bit === 1, zero: bit === 0 })}
                onClick={() => onFlip(outputColumn, outputRow)}
                key={outputColumn}
              >
                {bit}
              </div>

            )
          })}
        </div>
      ))}
    </div>
  )
}
