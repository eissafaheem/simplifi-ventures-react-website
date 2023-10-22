import React from 'react'
import NavbarStyles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={NavbarStyles['navbar-container']}>
      <div className={NavbarStyles["brand-name"]}>
        Simplifi Ventures
      </div>
      <div className={NavbarStyles["routes"]}>
        <a href="">Team</a>
        <a href="">Studio</a>
        <a href="">Resources</a>
      </div>
    </div>
  )
}

export default Navbar
