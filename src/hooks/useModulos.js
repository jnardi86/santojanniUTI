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
        setImageDesktop
    } = useContext(ModulosContext);

    return {
        title,
        setTitle,
        description,
        setDescription,
        imageMobile,
        setImageMobile,
        imageDesktop,
        setImageDesktop
    };
}