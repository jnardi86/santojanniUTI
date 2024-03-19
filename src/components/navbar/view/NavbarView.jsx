import React, { useState } from 'react'
import Logo from '../components/Logo'
import Login from '../components/Login'

const NavbarView = () => {

  return (
    <div
      className="navBarcontainer max-w-[1440px]  bg-Blue py-3 px-2 flex justify-between items-center">
      <Logo />
      <Login />
    </div>
  )
}

export default NavbarView


