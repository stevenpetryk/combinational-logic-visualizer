import React from 'react'

import TruthTable from './TruthTable.scss'
import TruthTableData from './TruthTableData.scss'

import TruthTableInputs from './TruthTableInputs'
import TruthTableOutputs from './TruthTableOutputs'

export default () => (
  <div className='truth-table'>
    <div>
      <p>Inputs</p>
      <TruthTableInputs numInputs={3} />
    </div>

    <div>
      <p>Outputs</p>
      <TruthTableOutputs numOutputs={2} />
    </div>
  </div>
)
