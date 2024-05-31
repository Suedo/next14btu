import React from 'react'

const NotFound = () => {
  /**
   * @tailwind base;
   * https://tailwindcss.com/docs/preflight
   *
   * this causes h* tags to be unstyled, so by default they will appear same font as normal p tags
   */

  return <h1 className="text-3xl font-semibold">Custom page not found</h1>
}

export default NotFound
