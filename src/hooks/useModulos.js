import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const {
        setModuleDataLocalStorage,
        getModuleDataLocalStorage,
        moduleData,
        setModuleData,
        desktopView,
        userProfile,
        setUserProfile,
        MODULE_ID,
        QUIZZ_ID
    } = useContext(ModulosContext);

    return {
        setModuleDataLocalStorage,
        getModuleDataLocalStorage,
        moduleData,
        setModuleData,
        desktopView,
        userProfile,
        setUserProfile,
        MODULE_ID,
        QUIZZ_ID
    };
}