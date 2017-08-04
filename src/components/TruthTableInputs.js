import React from 'react'
import cx from 'classNames'

import './TruthTableInputs.scss'

import InputHeaderContainer from './InputHeaderContainer'

export default ({
  numInputs
}) => {
  const inputArray = Array.apply(null, Array(2 ** numInputs)).map(() => {})

  return (
    <div className='truth-table-data truth-table-inputs'>
      <InputHeaderContainer />

      {inputArray.map((_, number) => (
        <div className='truth-table-row' key={number}>
          {number.toString(2).padStart(numInputs, '0').split('').map((bit, index) => (
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
