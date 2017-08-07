import React from 'react'
import times from 'lodash/times'

import './KarnaughMap.scss'

export default ({
  numInputs,
  implicants,
  outputValues
}) => {
  const dimensionsByNumInputs = {
    2: { rows: 2, columns: 2 },
    3: { rows: 2, columns: 4 },
    4: { rows: 4, columns: 4 }
  }

  const karnaughMapRowsForNumInputs = {
    4: [0, 4, 12, 8, 1, 5, 13, 9, 3, 7, 15, 11, 2, 6, 14, 10],
    3: [0, 2, 6, 4, 1, 3, 7, 5],
    2: [0, 2, 1, 3]
  }

  const dimensions = dimensionsByNumInputs[numInputs]
  const rows = karnaughMapRowsForNumInputs[numInputs]

  let counter = 0

  return (
    <div className='karnaugh-map'>
      <div className='table-wrapper'>
        <table>
          <tbody>
            {times(dimensions.rows, () => (
              <tr>
                {times(dimensions.columns, () => (
                  <td><code>{outputValues[rows[counter++]]}</code></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <svg>
          {implicants.map((implicant, index) => {
            const x = implicant.topLeft[0]
            const y = implicant.topLeft[1]
            const width = implicant.bottomRight[0] - implicant.topLeft[0] + 1
            const height = implicant.bottomRight[1] - implicant.topLeft[1] + 1

            const scaleX = (val) => val * 100 / dimensions.columns
            const scaleY = (val) => val * 100 / dimensions.rows

            const colors = ['red', 'green', 'blue', 'purple', 'cyan', 'orange', 'pink']

            return <rect
              x={`${scaleX(x)}%`}
              y={`${scaleY(y)}%`}
              width={`${scaleX(width)}%`}
              height={`${scaleY(height)}%`}
              stroke={colors[index]}
              rx={5}
              ry={5}
            />
          })}
        </svg>
      </div>
    </div>
  )
}
