import { connect } from 'react-redux'

import ProductSums from './ProductSums'

function mapStateToProps (state) {
  const inputNames = state.inputs.inputNames
  const numInputs = inputNames.length

  const terms = state.outputs.outputValues.map((values, outputIndex) => {
    values = [...values].splice(0, 2 ** numInputs)

    return values
      .map((value, index) => value === 0 && index)
      .filter((v) => v !== false)
      .map((value) => {
        const bits = value.toString(2).padStart(numInputs, '0').split('').map((i) => parseInt(i, 10))
        const term = bits.map((bit, index) => {
          let base = inputNames[index]
          if (bit) base += "'"
          return base
        }).join('+')

        return { text: term, row: value, output: outputIndex }
      })
  })

  return {
    numOutputs: state.outputs.outputNames.length,
    outputNames: state.outputs.outputNames,
    terms
  }
}

export default connect(mapStateToProps)(ProductSums)
