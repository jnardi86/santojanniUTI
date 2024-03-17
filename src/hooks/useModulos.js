import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const { 
        handleRenderModulo,
        title,
        setTitle,
        description,
        setDescription
        
     } = useContext(ModulosContext);

    return {
        handleRenderModulo,
        title,
        setTitle,
        description,
        setDescription
    };
}