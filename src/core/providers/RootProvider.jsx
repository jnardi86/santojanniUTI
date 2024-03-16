import React from 'react'
import AuthProvider from '../../auth/context/AuthProvider'
import ModulosProvider from '../../providers/ModulosProvider'

const RootProvider = ({ children }) => {
    return (
        <AuthProvider>
            <ModulosProvider>
                {children}
            </ModulosProvider>
        </AuthProvider>
    )
}

export default RootProvider
