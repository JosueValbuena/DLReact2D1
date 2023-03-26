import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <h1>Logo</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  )
}

export default Nav