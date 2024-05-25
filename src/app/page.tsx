import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      {/* a normal <a> tag will cause a full reload, Link does not, and is more performant */}
      <Link href="/properties">show properties</Link>
    </div>
  )
}

export default HomePage

// app/page.tsx is the default home page in next's file based routing
