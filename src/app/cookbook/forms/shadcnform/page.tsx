import Link from 'next/link'
import React from 'react'

const shadcnform = () => {
  return (
    <section>
      <div>
        <h1>Signup</h1>
        <p>
          Already have an account? <Link href="#">Login</Link>
        </p>
      </div>
    </section>
  )
}

export default shadcnform
