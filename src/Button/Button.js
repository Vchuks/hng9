import React from 'react'
import "./button.css"

const Button = ({href,children,className="btn"}) => {
  return (
    <div className='btn-container'>
      <a href={href} className={className}>{children}</a>
    </div>
  )
}

export default Button
