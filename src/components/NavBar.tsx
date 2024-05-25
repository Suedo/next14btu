'use client'

import Image from 'next/image'
// import logo from 'assets/images/logo-white.png'
import logo from '@/assests/images/logo-white.png'
import profileDefault from '@/assests/images/profile.png'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import MenuItem from './MenuItem'
import Button from './Button'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const isLoggedIn = false // Mock logged-in state

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">PropertyPulse</span>
            </Link>
            <div className="hidden md:flex ml-6 space-x-4">
              <MenuItem href="/">Home</MenuItem>
              <MenuItem href="/properties">Properties</MenuItem>
              <MenuItem href="/properties/add">Add Property</MenuItem>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <Button>
                <FaGoogle className="mr-2" />
                <span>Login or Register</span>
              </Button>
            ) : (
              <>
                <a href="messages.html" className="relative">
                  <Button className="p-1">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </Button>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                    2
                  </span>
                </a>
                <div className="relative ml-3">
                  <Button onClick={() => console.log('Toggle profile menu')}>
                    <Image className="h-8 w-8 rounded-full" src={profileDefault} alt="Profile" />
                  </Button>
                  {/* Profile dropdown */}
                  <div className="hidden absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    <MenuItem href="/profile.html">Your Profile</MenuItem>
                    <MenuItem href="/saved-properties.html">Saved Properties</MenuItem>
                    <MenuItem href="#">Sign Out</MenuItem>
                  </div>
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
