import React from 'react'

import './CanonicalFormTerm.scss'

import Highlightable from '../../highlighting/Highlightable'

@Highlightable({
  items ({ row, output }) {
    return [{ row, output }]
  }
})
export default class CanonicalFormTerm extends React.Component {
  render () {
    const { text } = this.props
    const { highlightOn, highlightOff } = this.props

    return (
      <span className='canonical-form-term' onMouseOver={highlightOn} onMouseOut={highlightOff}>
        <code className='highlightable'>
          {text}
        </code>
      </span>
    )
  }
}
