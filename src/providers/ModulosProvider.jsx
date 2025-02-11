import React, { useState, useEffect } from 'react'
import { ModulosContext } from '../context/ModulosContext'
const KEY_LOCAL_STORAGE_MODULE_DATA = "moduleData";
const MODULE_DATA_INITIAL_VALUE = "cnt1";
const MODULE_ID = "moduleId";
const QUIZZ_ID = "quizzId"

const ModulosProvider = ({ children }) => {

    const setModuleDataLocalStorage = (key, value) => {
        // Retrieve existing module data from local storage or initialize as an empty object
        const existingData = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE_MODULE_DATA)) || {};
    
        // Update the existing module data with the provided key and value
        const updatedData = { ...existingData, [key]: value };
    
        // Save updated module data to local storage
        localStorage.setItem(KEY_LOCAL_STORAGE_MODULE_DATA, JSON.stringify(updatedData));
    }
    


    const getModuleDataLocalStorage = (key) => {
        const existingData = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE_MODULE_DATA));
        if (existingData.hasOwnProperty(key)) {
            return existingData;
        } else {
            // Key not found, handle the case here (return default value, throw error, etc.)
            return MODULE_DATA_INITIAL_VALUE;
        }
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
                setUserProfile,
                MODULE_ID,
                QUIZZ_ID
            }}
        >
            {children}
        </ModulosContext.Provider>
    );
}

export default ModulosProvider;
