import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
          <NavLink className="navbar-brand" to="/" exact>React-Todo</NavLink> 
          <NavLink className="navbar-brand" to="/reduxtodo" exact>Redux-Todo</NavLink> 
          <NavLink className="navbar-brand" to="/a2value" exact>Redux todo List item</NavLink> 
        </>
    )
}

export default Navbar
