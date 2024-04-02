import React, { useState } from 'react'
import Logo from '../components/Logo'
import Login from '../components/Login'
import NavbarMobile from '../components/NavbarMobile'

const NavbarView = () => {

  return (
    // <div
    //   className="navBarcontainer max-w-[1440px]  bg-Blue py-3 px-2 flex justify-between items-center">
    //   <Logo />
    //   <Login />
    // </div>
    <NavbarMobile/>
  )
}

export default NavbarView


