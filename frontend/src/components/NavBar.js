import React from 'react'
import { NavLink } from "react-router-dom"

import {navData} from './navData'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from './NavBar.module.css'

// ***** ORIGINAL CODE *****
// const NavBar = () => {

//   return (
//     <div>
//       <NavLink id="first_item" to="/" exact>
//         RecipeApp🎂
//       </NavLink>
//       <NavLink className="navItem" to="/search" exact>
//         Search
//       </NavLink>
//       <NavLink className="navItem" to="/recipes" exact>
//         Recipes
//       </NavLink>
//       <NavLink className="navItem" to="/about" exact>
//         About
//       </NavLink>
//     </div>
//   )
// }

// export default NavBar;
// ***** ORIGINAL CODE *****




// ***** TEST CODE *****

export default function Sidenav() {
    return (
        <div>
        <button className={styles.menuBtn}>
            <KeyboardDoubleArrowLeftIcon />
        </button>
        {navData.map(item =>{
            return <div key={item.id} className={styles.sideitem}>
     {item.icon}
     <span className={styles.linkText}>{item.text}</span>
     </div>
            })}
     </div>
    )
  }