import React from 'react'
import '@/assets/styles/globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/NavBar'

const nestedLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="pt-4 pb-4 pl-1 bg-amber-200">Nested Header</div>
      <div className="flex-grow p-2">{children}</div>
      <div className="pt-4 pb-4 pl-1 bg-amber-200">Nested Footer</div>
    </div>
  )
}

export default nestedLayout
