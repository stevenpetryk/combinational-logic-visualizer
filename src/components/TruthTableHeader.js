import React from 'react'

import TruthTableHeader from './TruthTableHeader.scss'
import SizeAdjuster from './SizeAdjuster'

export default ({
  names,
  values,
  onAdd,
  onRemove
}) => (
  <header className='truth-table-header'>
    <div className='truth-table-row'>
      {names.map((name, index) => (
        <div className='truth-table-bit' key={index}>{name}</div>
      ))}
    </div>

    <SizeAdjuster {...{ onAdd, onRemove }} />
  </header>
)
