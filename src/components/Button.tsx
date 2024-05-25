import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  [x: string]: any
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button', ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={`flex items-center justify-center text-white bg-gray-700 hover:bg-gray-900 rounded-md px-4 py-2 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
