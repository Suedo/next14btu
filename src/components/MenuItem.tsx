import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  href: string
  children: React.ReactNode
  id?: string
  className?: string
  [x: string]: any
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children, id, className = '', ...props }) => {
  return (
    <Link
      href={href}
      className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 p-2 text-sm ${className}`}
      role="menuitem"
      tabIndex={-1}
      id={id}
      {...props}
    >
      {children}
    </Link>
  )
}

export default MenuItem

/*
------------------------------------------------
Example use case:
------------------------------------------------

import React from 'react'
import MenuItem from '@/components/MenuItem'

const ExampleComponent = () => {
  const handleMenuItemClick = () => {
    alert('Menu item clicked!')
  }

  return (
    <div>
      <MenuItem href="/home" onClick={handleMenuItemClick} className="bg-blue-500 hover:bg-blue-700 text-white">
        Home
      </MenuItem>
      <MenuItem href="/about" id="about-menu-item">
        About
      </MenuItem>
      <MenuItem href="/contact" data-test-id="contact-menu-item">
        Contact
      </MenuItem>
    </div>
  )
}

export default ExampleComponent


*/
