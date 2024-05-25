import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface MenuItemProps {
  href: string
  children: React.ReactNode
  id?: string
  className?: string
  [x: string]: any
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children, className = '', ...props }) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link href={href} className={`block rounded-md px-4 py-2 text-white ${isActive ? 'bg-black' : 'hover:bg-gray-900'} ${className}`} {...props}>
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
