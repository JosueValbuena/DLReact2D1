import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <h1>Logo</h1>
        <div>
            <a href="#">Home</a>
            <a href="#">Contacto</a>
            <a href="#">Sobre Nosotros</a>
        </div>
    </nav>
  )
}

export default Nav