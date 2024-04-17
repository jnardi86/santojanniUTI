import React, { useState, useEffect } from 'react'
import Hamburger from '../../svg/Hamburger'
import HamburguerClose from '../../svg/HamburguerClose'
import Login from './Login'
import Logo from './Logo'
import { Link } from 'react-router-dom'


const NavbarMobile = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleHamburguer = () => setIsOpen(!isOpen)

    useEffect(() => {
        const body = document.body;

        isOpen ? body.style.overflow = 'hidden' : body.style.overflow = 'visible';

    }, [isOpen]);



    return (
        <div className='navBarMobile-Container py-4 px-2 w-full bg-Blue flex justify-between sticky top-0 z-50'>
            <div className=''>
                <Logo/>
            </div>
            <div className='text-center content-center flex items-center'>
                <h1 className='text-White font-poppins text-lg font-semiBold'>Hospital Santojanni</h1>
            </div>
            <div onClick={handleHamburguer} className='content-center'>
                {
                    isOpen ? <HamburguerClose /> : <Hamburger />
                }
            </div>
            <ul className={`w-full h-auto py-6 bg-Blue text-White font-poppins text-center text-xl z-[-1] absolute left-0 transition-opacity duration-700 ease-in-out ${isOpen ? 'top-12 h-screen opacity-95' : 'top-[-490px] opacity-0'}`}>
            <li className='py-3' onClick={handleHamburguer}><Link to="/">Inicio</Link></li>
                {/* <li className='py-3'>Oradores</li>
                <li className='py-3'>Cursos</li> */}
                <li className='py-3'><Link to="/user" onClick={handleHamburguer}>Mi perfil</Link></li>
                <li className='mt-3' onClick={handleHamburguer}><Login/></li>
            </ul>
        </div>
    )
}

export default NavbarMobile