'use client'

import React from 'react'

interface RouteData {
  params: {
    // optional catch-all
    slug: string[] | undefined
  }
  searchParams: {
    name: string
  }
}

const Docs = ({ params, searchParams }: RouteData) => {
  return (
    <div>
      <div>params: {JSON.stringify(params, null, 2)}</div>
      <div>searchParams: {JSON.stringify(searchParams, null, 2)}</div>
    </div>
  )
}

export default Docs

// this is an example of an optional catch-all
// in the path: `[[...slug]]`, the outer [] makes this catch-all optional
// this optionality is expressed by the `string[] | undefined` type
