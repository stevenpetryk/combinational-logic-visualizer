import React from 'react'

export default ({
  examples,
  onLoadExample
}) => (
  <ul>
    {examples.map((example, index) => (
      <li key={index}>
        <a
          href='javascript:void(0)'
          onClick={() => onLoadExample(example.key)}
        >
          {example.name}
        </a>
      </li>
    ))}
  </ul>
)
