import React from 'react'

import flatten from 'lodash/flatten'

export default function (terms, character, wrap = false) {
  const init = [...terms].splice(0, terms.length - 1)
  const last = terms[terms.length - 1]

  return flatten([
    init.map((term, index) => [
      <span key={index * 2}>{wrap ? wrap[0] : ''}{term}{wrap ? wrap[1] : ''}</span>,
      <span key={index * 2 + 1}> {character} </span>
    ]),
    <span key={terms.length * 2}>{wrap ? wrap[0] : ''}{last}{wrap ? wrap[1] : ''}</span>
  ])
}
