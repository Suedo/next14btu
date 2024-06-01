import React from 'react'

const LoginPage = () => {
  return <div>LoginPage</div>
}

export default LoginPage

/**
 * (folderName) : the () makes it a route group, and this folder name is ommitted from the URL path
 * thus, we now access login page at the url: `http://localhost:3000/login` instead of `http://localhost:3000/authgroup/login`
 */
