import React from 'react'

export default ({ bits, onBitClick }) => (
  <div className='truth-table-row'>
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
