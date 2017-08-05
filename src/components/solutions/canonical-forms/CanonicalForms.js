import React from 'react'

import { toWords } from 'number-to-words'
import pluralize from 'pluralize'
import commaList from '../../../utils/commaList'

import HiglightOnSetButton from '../HighlightOnSetButton'
import HiglightOffSetButton from '../HighlightOffSetButton'

import SumProductsContainer from './SumProductsContainer'
import ProductSumsContainer from './ProductSumsContainer'

export default ({ numOutputs, numInputs, inputNames, outputNames }) => (
  <div className='solution'>
    <h1>Canonical Forms</h1>

    <h2>Sum-of-Products Form</h2>

    <p>
      We'll first identify the <strong>product-of-sums</strong> canonical form. This is perhaps the
      easiest of the canonical forms to remember—we simply OR all of the conditions that make our
      output 1.
    </p>

    <p>
      The truth table we're working with has{' '}
      {toWords(numOutputs)} {pluralize('output', numOutputs)}: {commaList(outputNames)}. That means
      we have to define {toWords(numOutputs)} logic {pluralize('function', numOutputs)} of the same
      {pluralize('name', numOutputs)}.
    </p>

    <p>
      {numOutputs > 1 ? 'Starting with' : 'Looking at'} <code>{outputNames[0]}</code>, let's
      identify all of the rows in the truth table that make it 1. This is called the{' '}
      <strong>on-set</strong>. Hover over the button below to look at the on-set for <code>{outputNames[0]}</code>.
    </p>

    <p>
      <HiglightOnSetButton />
    </p>

    <p>
      Now, for every row of <em>inputs</em> in the on-set, write a term <code>AND</code>ing together
      all of them. Then, <code>OR</code> them all together to achieve your function.
    </p>

    {outputNames.length > 1 &&
      <p>
        We do the same thing for {commaList([...outputNames].splice(1))} and arrive at our final
        set of functions:
      </p>}

    <SumProductsContainer />

    <h2>Product-of-Sums Form</h2>

    <p>
      You can think of the sum-of-products canonical form as the complete opposite of the
      product-of-sums form. Instead of selecting the function's <em>on-set</em>, we instead select
      its <em>off-set</em>—i.e., where the function is <code>0</code>. Check out the off-set for
      {outputNames[0]}:
    </p>

    <p>
      <HiglightOffSetButton />
    </p>

    <p>
      Then, when producing our actual terms, we add an apostrophe (<code>'</code>) to the terms
      where the input is <code>0</code>. With these tactics in mind, we can find our{' '}
      {pluralize('function', outputNames.length)}.
    </p>

    <ProductSumsContainer />
  </div>
)
