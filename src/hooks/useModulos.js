import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const {
        moduleData,
        setModuleData,
        desktopView,
        userProfile,
        setUserProfile
    } = useContext(ModulosContext);

    return {
        moduleData,
        setModuleData,
        desktopView,
        userProfile,
        setUserProfile
    };
}