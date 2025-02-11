import React, { useState } from 'react'

import { useAuth } from "../../../auth/hooks/useAuth"
import CustomButton from '../../customComponents/CustomButton'
import CustomLink from '../../customComponents/CustomLink'
import { useNavigate } from 'react-router'

const Login = () => {

    const { isLoggedIn, logout, signOut } = useAuth()
    const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn)
    const navigate = useNavigate()

    const handleLogout = async () => {
        signOut();
        logout();
    }

    
    const handleLogin = () => {

       
        navigate("/login", { replace: true });
    }

    return (
        <div>
            {
                userLoggedIn ? (
                    <CustomButton
                        label='Salir'
                        onClick={handleLogout}
                        type='button'
                        style='w-full py-1 px-4 font-poppins font-medium text-lg text-Blue text-start hover:text-Green'
                    />
                ) : (
                    // <CustomLink to="/login"
                    //     linkTo="/login"
                    //     label='Ingresar'>
                    // </CustomLink>
                    <CustomButton
                        label='Ingresar'
                        onClick={handleLogin}
                        type='button'
                    />
                )}

        </div>
    )
}

export default Login


