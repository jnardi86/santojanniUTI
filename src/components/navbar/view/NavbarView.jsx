import React, { useState } from 'react'
import Logo from '../components/Logo'
import Login from '../components/Login'
import NavbarMobile from '../components/NavbarMobile'
import { useModulos } from '../../../hooks/useModulos'
import NavbarDesktop from '../components/NavbarDesktop'

const NavbarView = () => {

  const { desktopView } = useModulos()

  return (
    <div>
      {
        (desktopView) ? <NavbarDesktop/> : <NavbarMobile/>
      }
    </div>    

  )
}

export default NavbarView


