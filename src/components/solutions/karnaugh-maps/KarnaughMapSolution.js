import React from 'react'
import { connect } from 'react-redux'

import KarnaughMapContainer from './KarnaughMapContainer'

@connect(
  function mapStateToProps (state) {
    return {
      outputNames: state.outputs.outputNames,
      numOutputs: state.outputs.outputNames.length
    }
  }
)
export default class KarnaughMapSolution extends React.Component {
  render () {
    const { outputNames } = this.props

    return (
      <div className='solution'>
        {outputNames.map((outputName, outputIndex) => (
          <div>
            <h2>{outputName}</h2>
            <KarnaughMapContainer output={outputIndex} key={outputIndex} />
          </div>
        ))}
      </div>
    )
  }
}
