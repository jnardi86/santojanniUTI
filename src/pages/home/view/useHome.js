import arrayContents from "../../contents/dataContents.json";
import { useModulos } from "../../../hooks/useModulos";


export const useHome = () => {

    const {setTitle, setDescription} = useModulos();
    // Se parsea el json automaticamente en el objeto arrayContents
    console.log("array contents is: ", arrayContents);


    const handleRenderModulo = (moduleId) => {

        console.log(`El id del modulo es ${moduleId}`)
        console.log("El contenido del modulo es", arrayContents[moduleId])
        const moduleContent = arrayContents[moduleId]

        // Se mapea moduleContent para setear los elementos de la página de contenido que se renderiza
        if (moduleContent) {

            const { moduleTitle, moduleDescription } = moduleContent;
            setTitle(moduleTitle);
            setDescription(moduleDescription);
            console.log(moduleTitle)
            console.log(moduleDescription)
        } else {
            console.log(`No existe un módulo con el id ${moduleId}`);
        }

    }

    return {
        handleRenderModulo,
    }
}


