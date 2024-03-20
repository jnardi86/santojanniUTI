import React, { useState } from 'react'
import { ModulosContext } from '../context/ModulosContext'


const ModulosProvider = ({ children }) => {

    //Declaracion de estados
    const [title, setTitle] = useState("valor inicial")
    const [description, setDescription] = useState("valor inicial")
    const [imageMobile, setImageMobile] = useState("valor inicial")
    const [imageDesktop, setImageDesktop] = useState("valor inicial")
    const [textAvailable, setTextAvailable] = useState("valor inicial")
    const [speakerPhoto, setSpeakerPhoto] = useState("")
    const [speakerName, setSpeakerName] = useState("valor inicial")
    const [speakerSpeciality, setSpeakerSpeciality] = useState("valor inicial")
    const [speakerDescription, setSpeakerDescription] = useState("valor inicial")

    //Declaracion de funciones


    return (
        <ModulosContext.Provider
            value={{
                title,
                setTitle,
                description,
                setDescription,
                imageMobile,
                setImageMobile,
                imageDesktop,
                setImageDesktop,
                textAvailable,
                setTextAvailable,
                speakerPhoto, 
                setSpeakerPhoto,
                speakerName, 
                setSpeakerName,
                speakerSpeciality, 
                setSpeakerSpeciality,
                speakerDescription, 
                setSpeakerDescription
            }}>
            {children}
        </ModulosContext.Provider>
    )
}

export default ModulosProvider
