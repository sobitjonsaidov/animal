import React from 'react'
import './button.css'

const Button = props => {
  const { title, type, onClick, disable } = props
  return (
    <button
      className={`btn 
    ${(type == 'add' && 'add') ||
        (type == 'remove' && 'remove') ||
        (type == 'checkout' && 'checkout')}
        ${disable === true}
        `
      }
      onClick={onClick}
      disabled={disable}
    >
      {title}
    </button>
  )
}

export default Button