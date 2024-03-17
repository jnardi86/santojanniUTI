import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const { 
        title,
        setTitle,
        description,
        setDescription
    } = useContext(ModulosContext);

    return {
        title,
        setTitle,
        description,
        setDescription
    };
}