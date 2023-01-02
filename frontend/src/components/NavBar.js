import React from 'react'
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink id="first_item" to="/" exact>
      </NavLink>
    <NavLink className="navItem"
    to="/search" exact>
      Search
    </NavLink>
    <NavLink className="navItem"
    to="/recipes" exact>
      Recipes
    </NavLink>
    <NavLink className="navItem"
    to="/about" exact>
      About
    </NavLink>
  </div>
  )
}

export default NavBar;
