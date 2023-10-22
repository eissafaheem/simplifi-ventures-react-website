import React from 'react'
import NavbarStyles from './Navbar.module.css'
import menuIcon from './../../../assets/menu-icon.svg'
import closeIcon from './../../../assets/close-icon.svg'
import { useNavbarHook } from './Navbar.hook'

function Navbar() {

  const {
    closeRef, 
    menuRef,
    menuItemsRef,
    handleMenuClick,
    handleCloseClick,
    onAnchorClick
  } = useNavbarHook();


  return (
    <div className={NavbarStyles['navbar-container']}>
      <div className={NavbarStyles["brand-name"]}>
        Simplifi Ventures
      </div>
      <img src={menuIcon} alt="Menu" ref={menuRef} id={NavbarStyles['menu']} onClick={handleMenuClick}/>
      <img src={closeIcon} alt="close" ref={closeRef} id={NavbarStyles['close']} onClick={handleCloseClick}/>
      <div className={NavbarStyles["routes"]} ref={menuItemsRef}>
        <a href="" onClick={onAnchorClick}>Team</a>
        <a href="">Studio</a>
        <a href="">Resources</a>
      </div>
    </div>
  )
}

export default Navbar
