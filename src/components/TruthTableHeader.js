import React from 'react'

import './TruthTableHeader.scss'
import SizeAdjuster from './SizeAdjuster'

export default ({
  names,
  values,
  onAdd,
  onRemove,
  onRename
}) => (
  <header className='truth-table-header'>
    <div className='truth-table-row'>
      {names.map((name, index) => {
        var input

        return (
          <input
            className='truth-table-bit'
            key={index}
            value={name}
            ref={(ref) => { input = ref }}
            onFocus={() => input.select()}
            onChange={(event) => onRename(index, event.target.value)}
            maxLength={2}
          />
        )
      })}
    </div>

    <SizeAdjuster {...{ onAdd, onRemove }} />
  </header>
)
