'use client'

import Image from 'next/image'
// import logo from 'assets/images/logo-white.png'
import logo from '@/assests/images/logo-white.png'
import profileDefault from '@/assests/images/profile.png'
import Link from 'next/link'
import { FaGoogle, FaBell } from 'react-icons/fa'
import MenuItem from './MenuItem'
import Button from './Button'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">PropertyPulse</span>
            </Link>
            {/* Added flex-shrink-0 to prevent the items from shrinking and taking up the whole height of the navbar when the viewport width decreases */}
            <div className="hidden md:flex ml-6 space-x-4 flex-shrink-0">
              <MenuItem href="/">Home</MenuItem>
              <MenuItem href="/properties">Properties</MenuItem>
              <MenuItem href="/properties/add">Add Property</MenuItem>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            {!isLoggedIn ? (
              <Button onClick={() => setIsLoggedIn(true)}>
                <FaGoogle className="mr-2" />
                <span>Login or Register</span>
              </Button>
            ) : (
              <>
                <Link href="/messages" className="relative">
                  <Button className="p-1">
                    <span className="sr-only">View notifications</span>
                    <FaBell className="h-6 w-6 text-gray-400" />
                  </Button>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                    2
                  </span>
                </Link>
                <div className="relative ml-3">
                  <Button onClick={() => setIsProfileMenuOpen(prev => !prev)}>
                    <Image className="h-8 w-8 rounded-full" src={profileDefault} alt="Profile" />
                  </Button>
                  {/* Profile dropdown */}
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                        <MenuItem href="/profile" className=" px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Your Profile
                        </MenuItem>
                        <MenuItem href="/saved-properties" className=" px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Saved Properties
                        </MenuItem>
                        <MenuItem href="#" onClick={() => setIsLoggedIn(false)} className=" px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Sign Out
                        </MenuItem>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
