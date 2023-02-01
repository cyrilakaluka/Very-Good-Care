import React from 'react'

type ButtonProps = {
  text: string
  type?: 'primary' | 'secondary'
  className?: string
}

const Button = ({ type = 'primary', text, className }: ButtonProps) => {
  let buttonColor = '#4DAD09'
  let buttonTextColor = '#FFFFFF'

  if (type === 'secondary') {
    buttonColor = 'transparent'
    buttonTextColor = '#000000'
  }

  return (
    <button style={{ backgroundColor: buttonColor, color: buttonTextColor }} className={`rounded-full ${className}`}>{text}</button>
  )
}

export default Button