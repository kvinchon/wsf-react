import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <React.Fragment>
      <nav className="naviguation">
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/work'>Work</NavLink>
      </nav>
    </React.Fragment>
  )
}

export default Header