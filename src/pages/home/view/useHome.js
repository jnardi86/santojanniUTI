import arrayContents from "../../contents/dataContents.json";
import { useModulos } from "../../../hooks/useModulos";


export const useHome = () => {

    // Se parsea el json automaticamente en el objeto arrayContents
    console.log("array contents is: ", arrayContents);

    //Desestructuramos las variables globales del provider a traves del Hook useModulos
    const { setTitle, setDescription, setImageMobile } = useModulos();


/**
 * HANDLE_REMOTE_MODULO
 */
    const handleRenderModulo = (moduleId) => {

        console.log(`El id del modulo es ${moduleId}`)
        console.log("El contenido del modulo es", arrayContents[moduleId])
        const moduleContent = arrayContents[moduleId]

        // Se mapea moduleContent para setear los elementos de la página de contenido que se renderiza
        if (moduleContent) {

            const { moduleTitle, moduleDescription, moduleImageMobile } = moduleContent;
            setTitle(moduleTitle);
            setDescription(moduleDescription);
            setImageMobile(moduleImageMobile)
            console.log(moduleTitle)
            console.log(moduleDescription)
            console.log(moduleImageMobile)
        } else {
            console.log(`No existe un módulo con el id ${moduleId}`);
        }

    }

    return {
        arrayContents,
        handleRenderModulo
    }
}


