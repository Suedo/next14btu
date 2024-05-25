'use client'

import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'
import React from 'react'

const PropertiesPageId = () => {
  const router = useRouter()
  const { id } = useParams() // only prints the id
  const path = usePathname() // print the full path, including id
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  return (
    <div>
      <div>
        Page id: {path}, searchParams: {name}
      </div>
      <button onClick={() => router.push('/')} className="bg-blue-500 p-2">
        Home
      </button>
    </div>
  )
}

export default PropertiesPageId

// instead of [id] as foldername, you can do [...id], which is a catch-all
// meaning /id, /id/123, /id/others/123 any such paths starting with id will be caught

// 'use client' converts to this being a CSR module. read more here: https://nextjs.org/learn/react-foundations/server-and-client-components
// and since its a client component, we can use various hooks here

// useParams: to get dynamic route params as defined in our file based routing, like [id] value
// useSearchParams: used to get general query params from the URL (the part of the URL after the `?`)
