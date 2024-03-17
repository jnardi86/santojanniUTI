import { useContext } from "react";
import { ModulosContext } from "../context/ModulosContext";

export const useModulos = () => {
    const { handleRenderModulo } = useContext(ModulosContext);

    return {
        handleRenderModulo,
    };
}