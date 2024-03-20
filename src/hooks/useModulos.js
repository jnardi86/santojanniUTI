import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const { 
        title,
        setTitle,
        description,
        setDescription,
        imageMobile,
        setImageMobile,
        imageDesktop,
        setImageDesktop,
        textAvailable,
        setTextAvailable
    } = useContext(ModulosContext);

    return {
        title,
        setTitle,
        description,
        setDescription,
        imageMobile,
        setImageMobile,
        imageDesktop,
        setImageDesktop,
        textAvailable,
        setTextAvailable
    };
}