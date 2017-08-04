import React from 'react'
import times from 'lodash/times'

import './TruthTableInputs.scss'

import InputHeaderContainer from './InputHeaderContainer'
import InputRowContainer from './InputRowContainer'

export default ({
  numInputs
}) => (
  <div className='truth-table-data truth-table-inputs'>
    <InputHeaderContainer />

    {times(2 ** numInputs, (inputRow) => <InputRowContainer row={inputRow} key={inputRow} />)}
  </div>
)
