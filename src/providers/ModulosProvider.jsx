import React from 'react'
import { ModulosContext } from '../context/ModulosContext'
import { useHome } from '../pages/home/view/useHome'

const ModulosProvider = ({ children }) => {

    const { handleRenderModulo } = useHome();

    return (
        <ModulosContext.Provider
            value={{
                handleRenderModulo
            }}>
            {children}
        </ModulosContext.Provider>
    )
}

export default ModulosProvider
