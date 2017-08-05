import React from 'react'

import { toWords } from 'number-to-words'
import pluralize from 'pluralize'
import commaList from '../../utils/commaList'

import HighlightOnSetButton from './HighlightOnSetButton'

export default ({
  numOutputs,
  outputNames,
  termsForOutputs
}) => (
  <div className='solution product-sums'>
    <p>
      We'll first identify the <strong>product-of-sums</strong> canonical form. This is perhaps the
      easiest of the canonical forms to remember—we simply OR all of the conditions that make our
      output 1.
    </p>

    <p>
      The truth table we're working with has{' '}
      {toWords(numOutputs)} {pluralize('output', numOutputs)}: {commaList(outputNames)}. That means
      we have to define {toWords(numOutputs)} logic {pluralize('function', numOutputs)} of the same
      name.
    </p>

    <p>
      {numOutputs > 1 ? 'Starting with' : 'Looking at'} {outputNames[0]}, let's identify all of the
      rows in the truth table that make it 1. This is called the <strong>on-set</strong>.
    </p>

    <p>
      <HighlightOnSetButton />
    </p>

    <p>
      Now, for every row of <em>inputs</em> in the on-set, write a term <code>AND</code>ing together
      all of them. Then, <code>OR</code> them all together to achieve your function.
    </p>

    <table>
      <tbody>
        {outputNames.map((outputName, index) => (
          <tr key={index}>
            <th width='10%'>{outputName}</th>
            <td><code>{termsForOutputs[index].join(' + ')}</code></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
