import React from 'react'
import { NavLink } from "react-router-dom"

import { navData } from "./navData";
import styles from "./CSS/sidenav.module.css"
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function NavBar() {

  const [open, setopen] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }

    return (
      <div className={open?styles.sidenav:styles.sidenavClosed}>
          <button className={styles.menuBtn} onClick={toggleOpen}>
              {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
              </button>
          {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
              {item.icon}
              <span className={styles.linkText}>{item.text}</span>
          </NavLink>
          })}
            <Link className={styles.sideitem}href="https://www.facebook.com/" target="_blank">
              <FacebookIcon sx={{ color: "#3b5998" }}/>
            </Link>
            <Link className={styles.sideitem}href="https://www.youtube.com/watch?v=Whm94pH53yE" target="_blank">
              <YouTubeIcon sx={{ color: "#FF0000" }}/>
            </Link>
            <Link className={styles.sideitem}href="https://www.instagram.com" target="_blank">
              <InstagramIcon color='secondary'/>
            </Link>
      </div>
    )
  }