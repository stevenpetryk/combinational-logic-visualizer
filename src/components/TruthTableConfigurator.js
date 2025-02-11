import React from 'react'

import './TruthTableConfigurator.scss'

import Button from './Button'

import TruthTable from './TruthTable'

export default ({ onReset, onRandomize }) => (
  <div className='truth-table-configurator'>
    <TruthTable />

    <Button onClick={onReset} aria-label={'Randomize the truth table\'s outputs'}>
      <i className='fa fa-refresh' /> Reset Outputs
    </Button>

    <Button className='primary' onClick={onRandomize} aria-label={'Randomize the truth table\'s outputs'}>
      <i className='fa fa-random' /> Randomize Outputs
    </Button>

    <footer>
      <p>Created by <a href='https://twitter.com/stevenpetryk' target='_blank'>@stevenpetryk</a></p>
    </footer>
  </div>
)
