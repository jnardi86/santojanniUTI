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
        setUserProfile
    } = useContext(ModulosContext);

    return {
        setModuleDataLocalStorage,
        getModuleDataLocalStorage,
        moduleData,
        setModuleData,
        desktopView,
        userProfile,
        setUserProfile
    };
}