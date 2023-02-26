import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">Post-API</NavLink>

           
        </div>
    </nav>
  )
}

export default Menu