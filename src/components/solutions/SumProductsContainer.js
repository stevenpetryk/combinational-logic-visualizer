import { connect } from 'react-redux'

import SumProducts from './SumProducts'

function mapStateToProps (state) {
  const inputNames = state.inputs.inputNames
  const numInputs = inputNames.length

  const termsForOutputs = state.outputs.outputValues.map((values) => {
    values = [...values].splice(0, 2 ** numInputs)

    return values
      .map((value, index) => value === 1 && index)
      .filter((v) => v !== false)
      .map((value) => {
        const bits = value.toString(2).padStart(numInputs, '0').split('').map((i) => parseInt(i, 10))
        return bits.map((bit, index) => {
          let base = inputNames[index]
          if (!bit) base += "'"
          return base
        }).join('')
      })
  })

  return {
    numOutputs: state.outputs.outputNames.length,
    inputNames,
    outputNames: state.outputs.outputNames,
    termsForOutputs
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SumProducts)
