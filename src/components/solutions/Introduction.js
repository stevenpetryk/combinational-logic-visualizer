import React from 'react'

import ExamplesContainer from './ExamplesContainer'

export default () => (
  <div className='solution product-sums'>
    <h1>Combinational Logic Visualizer</h1>

    <p>
      This app attempts to encapsulate the techniques outlined in this video:
    </p>

    <iframe src='https://www.youtube.com/embed/0iQJsKVpSUY' frameBorder='0' allowFullScreen />

    <h2>Instructions</h2>

    <p>
      Customize the truth table to match your problem—you can modify the number of inputs,
      the names of the inputs, the names of the outputs, and the output values. When you're done,
      check out some of the tabs above for common operations performed based on the logic functions
      defined by the truth table.
    </p>

    <h2>Pre-made Examples </h2>

    <p>
      Clicking on one of the links below will load an example into the truth table.
    </p>

    <ExamplesContainer />
  </div>
)
