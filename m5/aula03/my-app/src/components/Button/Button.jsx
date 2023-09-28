import React from 'react'

const Button = ({ texto, bg }) => {
  return (
    <button style={{background: bg}}>{texto}</button>
  )
}

export default Button