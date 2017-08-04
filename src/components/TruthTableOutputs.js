import React from 'react'
import times from 'lodash/times'

import OutputHeaderContainer from './OutputHeaderContainer'
import OutputRowContainer from './OutputRowContainer'

import './TruthTableInputs.scss'

export default ({
  numInputs,
  outputValues,
  onFlip
}) => (
  <div className='truth-table-data truth-table-outputs'>
    <OutputHeaderContainer />

    {times(2 ** numInputs, (outputRow) => (
      <OutputRowContainer row={outputRow} key={outputRow} />
    ))}
  </div>
)
