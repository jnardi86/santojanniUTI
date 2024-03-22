import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const {
        moduleData,
        setModuleData

    } = useContext(ModulosContext);

    return {
        moduleData,
        setModuleData
    };
}