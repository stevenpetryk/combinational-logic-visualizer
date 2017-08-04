import React from 'react'

import './Button.scss'

export default ({ children, className, ...props }) => (
  <a
    href='javascript:void(0)'
    className={`button ${className}`}
    {...props}
  >
    {children}
  </a>
)
