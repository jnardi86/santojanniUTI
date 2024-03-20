import arrayContents from "../../contents/dataContents.json";
import { useModulos } from "../../../hooks/useModulos";


export const useHome = () => {

    //Desestructuramos las variables globales del provider a traves del Hook useModulos
    const {
        setTitle,
        setDescription,
        setImageMobile,
        setImageDesktop,
        setTextAvailable,
        setSpeakerPhoto,
        setSpeakerName,
        setSpeakerSpeciality,
        setSpeakerDescription
    } = useModulos();


    /**
     * HANDLE_REMOTE_MODULO
     */
    const handleRenderModulo = (moduleId) => {

        // console.log(`El id del modulo es ${moduleId}`)

        const moduleContent = arrayContents.find(object => object.id == moduleId)
        // console.log("El contenido del moduleContentFind es", moduleContent)

        // Se mapea moduleContent para setear los elementos de la página de contenido que se renderiza
        if (moduleContent) {

            const { 
                moduleTitle, 
                moduleDescription, 
                moduleImageMobile, 
                moduleImageDesktop, 
                moduleTextAvailable,
                cardSpeakerPhoto,
                cardSpeakerName,
                cardSpeakerSpeciality,
                cardSpeakerDescription
            } = moduleContent;

            setTitle(moduleTitle);
            setDescription(moduleDescription);
            setImageMobile(moduleImageMobile);
            setImageDesktop(moduleImageDesktop);
            setTextAvailable(moduleTextAvailable);
            setSpeakerPhoto(cardSpeakerPhoto)
            setSpeakerName(cardSpeakerName)
            setSpeakerSpeciality(cardSpeakerSpeciality)
            setSpeakerDescription(cardSpeakerDescription)
   
        } else {
            console.log(`No existe un módulo con el id ${moduleId}`);
        }

    }

    return {
        arrayContents,
        handleRenderModulo
    }
}


