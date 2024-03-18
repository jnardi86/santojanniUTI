import React, {useState} from 'react'
import { ModulosContext } from '../context/ModulosContext'


const ModulosProvider = ({ children }) => {

    //Declaracion de estados
    const [title, setTitle] = useState("valor inicial")
    const [description, setDescription] = useState("valor inicial")
    const [imageMobile, setImageMobile] = useState("valor inicial")

    //Declaracion de funciones


    return (
        <ModulosContext.Provider
            value={{
                title,
                setTitle,
                description,
                setDescription,
                imageMobile,
                setImageMobile
            }}>
            {children}
        </ModulosContext.Provider>
    )
}

export default ModulosProvider
