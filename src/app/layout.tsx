import React from 'react'
import '@/assests/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Pulse',
  description: 'learning nextjs 14',
}

const mainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default mainLayout

// non-home page needs to be wrapped in a <html> tag
