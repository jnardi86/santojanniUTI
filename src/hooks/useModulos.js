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
        setTextAvailable,
        speakerPhoto, 
        setSpeakerPhoto,
        speakerName, 
        setSpeakerName,
        speakerSpeciality, 
        setSpeakerSpeciality,
        speakerDescription, 
        setSpeakerDescription
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
        setTextAvailable,
        speakerPhoto, 
        setSpeakerPhoto,
        speakerName, 
        setSpeakerName,
        speakerSpeciality, 
        setSpeakerSpeciality,
        speakerDescription, 
        setSpeakerDescription
    };
}