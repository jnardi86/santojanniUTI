import React from 'react'
import { ModulosContext } from '../context/ModulosContext'
import { useHome } from '../pages/home/view/useHome'

const ModulosProvider = ({ children }) => {

    const {
        handleRenderModulo,
        title,
        setTitle,
        description,
        setDescription
    } = useHome();

    return (
        <ModulosContext.Provider
            value={{
                handleRenderModulo,
                title,
                setTitle,
                description,
                setDescription
            }}>
            {children}
        </ModulosContext.Provider>
    )
}

export default ModulosProvider
