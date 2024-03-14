import React, { useState } from 'react'

import { useAuth } from "../../../auth/hooks/useAuth"
import CustomButton from '../../customComponents/CustomButton'
import CustomLink from '../../customComponents/CustomLink'

const Login = () => {

    const { isLoggedIn, logout, signOut } = useAuth()
    const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn)

    const handleLogout = async () => {
        signOut();
        logout();
    }

    return (
        <div>
            {
                userLoggedIn ? (
                    <CustomButton
                        label='Salir'
                        onClick={handleLogout}>

                    </CustomButton>
                ) : (
                    <CustomLink to="/login"
                        linkTo="/login"
                        label='Ingresar'>
                    </CustomLink>
                )}

        </div>
    )
}

export default Login


