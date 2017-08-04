import React from 'react'

import './TruthTable.scss'
import './Highlights.scss'
import './TruthTableData.scss'

import InputsContainer from './InputsContainer'
import OutputsContainer from './OutputsContainer'

export default () => (
  <div className='truth-table'>
    <div>
      <p>Inputs</p>
      <InputsContainer />
    </div>

    <div>
      <p>Outputs</p>
      <OutputsContainer />
    </div>
  </div>
)
