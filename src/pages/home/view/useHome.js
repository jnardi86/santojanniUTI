import arrayContents from "../../contents/dataContents.json";
export const useHome = () => {


    /**
     * HANDLE_REMOTE_MODULO
     */
    const handleRenderModulo = (moduleId, setModuleData) => {

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
                cardSpeakerDescription,
                moduleVideImg,
                moduleVideoTitle1,
                moduleVideoNro1,
                moduleVideoTimeAvailable1,
                moduleVideoTitle2,
                moduleVideoNro2,
                moduleVideoTimeAvailable2,
                moduleVideoTitle3,
                moduleVideoNro3,
                moduleVideoTimeAvailable3,
                moduleQuizzText
            } = moduleContent;

            // Create an object containing all the new values
            const updatedValues = {
                title: moduleTitle,
                description: moduleDescription,
                imageMobile: moduleImageMobile,
                imageDesktop: moduleImageDesktop,
                textAvailable: moduleTextAvailable,
                speakerPhoto: cardSpeakerPhoto,
                speakerName: cardSpeakerName,
                speakerSpeciality: cardSpeakerSpeciality,
                speakerDescription: cardSpeakerDescription,
                videoImg: moduleVideImg,
                videoTitleOne: moduleVideoTitle1,
                urlVideoOne: moduleVideoNro1,
                videoTitleTwo: moduleVideoTitle2,
                urlVideoTwo: moduleVideoNro2,
                videoTitleThree: moduleVideoTitle3,
                urlVideoThree: moduleVideoNro3,
                videoTimeAvailableOne: moduleVideoTimeAvailable1,
                videoTimeAvailableTwo: moduleVideoTimeAvailable2,
                videoTimeAvailableThree: moduleVideoTimeAvailable3,
                quizzText: moduleQuizzText,
            };
            console.log(updatedValues)

            // Update the state with the new values object
            setModuleData(prevModuleData => ({
                ...prevModuleData,
                ...updatedValues
            }));



        } else {
            console.log(`No existe un módulo con el id ${moduleId}`);
        }

    }

    return {
        arrayContents,
        handleRenderModulo
    }
}


