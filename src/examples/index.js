import find from 'lodash/find'

const examples = [
  require('./video.json'),
  require('./adder.json'),
  require('./multiplexer.json')
]

export default {
  getExamples () {
    return examples
  },

  getExampleState (key) {
    return find(examples, (example) => example.key === key).state
  }
}
