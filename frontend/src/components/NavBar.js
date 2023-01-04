import React from 'react'
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink id="first_item" to="/" exact>
        RecipeApp🎂
      </NavLink>
      <NavLink className="navItem" to="/search" exact>
        Search
      </NavLink>
      <NavLink className="navItem" to="/recipes" exact>
        Recipes
      </NavLink>
      <NavLink className="navItem" to="/users" exact>
        Creators
      </NavLink>
      <NavLink className="navItem" to="/about" exact>
        About
      </NavLink>
      <NavLink className="navItem" to="/login" exact>
        Log in
      </NavLink>
      <NavLink className="navItem" to="/create" exact>
        Register for free!
      </NavLink>
    </div>
  )
}

export default NavBar;
