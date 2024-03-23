import React, { useState } from 'react'
import { ModulosContext } from '../context/ModulosContext'


const ModulosProvider = ({ children }) => {

    const initialModuleState = {
        title: "valor inicial",
        description: "valor inicial",
        imageMobile: "valor inicial",
        imageDesktop: "valor inicial",
        textAvailable: "valor inicial",
        speakerPhoto: "",
        speakerName: "valor inicial",
        speakerSpeciality: "valor inicial",
        speakerDescription: "valor inicial",
        videoImg: "valor inicial",
        videoTitleOne: "valor inicial",
        urlVideoOne: "valor inicial",
        videoTitleTwo: "valor inicial",
        urlVideoTwo: "valor inicial",
        videoTitleThree: "valor inicial",
        urlVideoThree: "valor inicial",
        videoTimeAvailableOne: "valor inicial",
        videoTimeAvailableTwo: "valor inicial",
        videoTimeAvailableThree: "valor inicial",
        quizzText:"valor inicial"
    }


    // Use a single state to manage all module data
    const [moduleData, setModuleData] = useState(initialModuleState);

    return (
        <ModulosContext.Provider
            value={{
                moduleData,
                setModuleData
            }}
        >
            {children}
        </ModulosContext.Provider>
    );
}

export default ModulosProvider;
