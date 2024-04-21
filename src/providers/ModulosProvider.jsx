import React, { useState, useEffect } from 'react'
import { ModulosContext } from '../context/ModulosContext'
const KEY_LOCAL_STORAGE_MODULE_DATA = "moduleDataId";
const MODULE_DATA_INITIAL_VALUE = "cnt1";

const ModulosProvider = ({ children }) => {

    const setModuleDataLocalStorage = (value) => {
        localStorage.setItem(
            KEY_LOCAL_STORAGE_MODULE_DATA, JSON.stringify({
                moduleId: value
            })
        )
    }


    const getModuleDataLocalStorage = () => {
        const moduleDataId = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE_MODULE_DATA)) || MODULE_DATA_INITIAL_VALUE;
        return moduleDataId;
    }

    const initialModuleState = {
        title: "valor inicial",
        description: "valor inicial",
        imageMobile: "valor inicial",
        imageDesktop: "valor inicial",
        textAvailable: "valor inicial",
        oradores: [],
        multimedia: [],
        quizzText: "valor inicial"
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
                setModuleDataLocalStorage,
                getModuleDataLocalStorage,
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
