import React from 'react'

import CanonicalFormTerm from './CanonicalFormTerm'

import joinTerms from '../../../utils/joinTerms'

export default ({
  numOutputs,
  outputNames,
  terms
}) => (
  <div>
    <table>
      <tbody>
        {outputNames.map((outputName, index) => (
          <tr key={index}>
            <th width='10%'>{outputName}</th>
            <td>
              {joinTerms(terms[index].map((term) => <CanonicalFormTerm {...term} />), '×', '()')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className='caption'>Hover over the above terms to see where they come from in the truth table.</p>
  </div>
)
