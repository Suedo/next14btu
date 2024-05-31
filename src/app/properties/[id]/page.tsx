'use client'

import { useRouter, useParams, useSearchParams, usePathname, notFound } from 'next/navigation'
import React from 'react'
import { string } from 'zod'
import { json } from 'stream/consumers'

interface RouteParams {
  params: { id: string }
}

const PropertiesPageId = ({ params }: RouteParams) => {
  const router = useRouter()
  const { id } = useParams() // only prints the id
  const path = usePathname() // print the full path, including id
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  /**
   * invoke a not found page programatically
   * this will search from the local-est folder, upto the root folder, for a `not-found.tsx|.js` file and render it
   * in our case, since we have one in this folder, that gets rendered, instead of the default `not-found.tsx` at the app level
   */
  if (parseInt(params.id) > 1000) {
    console.log(`page not found`)
    notFound()
  }

  return (
    <div>
      <div>
        Page id: {id}, path: {path}, searchParams: {name}
      </div>
      <div>{JSON.stringify(params)}</div>
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
