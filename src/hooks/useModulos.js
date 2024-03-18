import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const { 
        title,
        setTitle,
        description,
        setDescription,
        imageMobile,
        setImageMobile
    } = useContext(ModulosContext);

    return {
        title,
        setTitle,
        description,
        setDescription,
        imageMobile,
        setImageMobile
    };
}