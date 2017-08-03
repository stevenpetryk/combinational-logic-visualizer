import React from 'react'
import cx from 'classNames'

import TruthTableHeader from './TruthTableHeader'

import './TruthTableInputs.scss'

export default ({
  numOutputs
}) => {
  const inputArray = Array.apply(null, Array(2 ** numOutputs)).map(() => {})

  return (
    <div className='truth-table-data truth-table-outputs'>
      <TruthTableHeader />

      {inputArray.map((_, number) => (
        <div className='truth-table-row' key={number}>
          {number.toString(2).padStart(numOutputs, '0').split('').map((bit, index) => (
            <div
              className={cx('truth-table-bit', { one: bit === '1', zero: bit === '0' })}
              key={index}
            >
              {bit}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
