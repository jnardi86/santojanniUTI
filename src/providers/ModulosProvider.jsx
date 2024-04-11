import React, { useState, useEffect } from 'react'
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [desktopView, setDesktopView] = useState(false);
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setDesktopView((windowWidth >= 768) ? true : false)
    }, [windowWidth]);

    return (
        <ModulosContext.Provider
            value={{
                moduleData,
                setModuleData,
                desktopView,
                userProfile,
                setUserProfile
            }}
        >
            {children}
        </ModulosContext.Provider>
    );
}

export default ModulosProvider;
