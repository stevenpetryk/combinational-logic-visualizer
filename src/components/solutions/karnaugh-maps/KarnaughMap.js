import React from 'react'
import times from 'lodash/times'

import './KarnaughMap.scss'

import KarnaughMapBit from './KarnaughMapBit'

export default ({
  numInputs,
  implicants,
  outputValues,
  onBitClick,
  output
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
                {times(dimensions.columns, () => {
                  const row = rows[counter++]

                  return (
                    <KarnaughMapBit
                      output={output}
                      bit={outputValues[row]}
                      row={row}
                    />
                  )

                  // return (
                  //   <td>
                  //     <TruthTableBit
                  //       bit={outputValues[row]}
                  //       onClick={() => onBitClick(output, row)}
                  //     />
                  //   </td>
                  // )
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <svg width='auto' height='auto'>
          {implicants.map((implicant, index) => {
            const scaleX = (val) => val * 100 / dimensions.columns
            const scaleY = (val) => val * 100 / dimensions.rows

            const colors = ['red', 'green', 'blue', 'purple', 'cyan', 'orange', 'pink']

            return implicant.minterms.map((minterm, index2) => {
              return <rect
                x={`${scaleX(minterm.coordinates[0])}%`}
                y={`${scaleY(minterm.coordinates[1])}%`}
                width={`${100 / dimensions.columns}%`}
                height={`${100 / dimensions.rows}%`}
                key={[index, index2].join(',')}
                fill={colors[index]}
                style={{ opacity: 0.2 }}
              />
            })
          })}
        </svg>
      </div>
    </div>
  )
}
