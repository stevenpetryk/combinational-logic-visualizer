import React from 'react'

import './SizeAdjuster.scss'

export default ({ onAdd, onRemove }) => (
  <div className='size-adjuster'>
    <i className='fa fa-fw fa-plus' onClick={onAdd} />
    <i className='fa fa-fw fa-minus' onClick={onRemove} />
  </div>
)
