import React from 'react'
import Login from './Login'
import Logo from './Logo'

const NavbarDesktop = () => {
    return (
        <div className='navBarDesktop-Container w-full px-2 laptop1:px-4 text-White bg-Blue flex justify-between'>
            <div className='flex gap-1 laptop1:gap-2'>
                <div className=' pl-2 laptop1:p-2 content-center'>
                <Logo />
                </div>
                <div className='w-32 laptop1:w-36 content-center'>
                    <h1 className='text-White font-poppins text-sm font-semiBold laptop1:text-lg'>Hospital Santojanni</h1>
                </div>
            </div>
            <div>
                <ul className="w-full h-auto flex gap-2 py-6 bg-Blue text-White font-poppins text-center text-base laptop1:text-lg laptop1:gap-5">
                    <li className='py-2 px-4 cursor-pointer hover:text-Cyan'>Inicio</li>
                    <li className='py-2 px-4 cursor-pointer hover:text-Cyan'>Oradores</li>
                    <li className='py-2 px-4 cursor-pointer hover:text-Cyan'>Cursos</li>
                    <li className='py-2 px-4 cursor-pointer hover:text-Cyan'>Mi Perfil</li>
                </ul>
            </div>
            <div className=' pl-2 content-center'>
                <Login />
            </div>
        </div>
    )
}

export default NavbarDesktop