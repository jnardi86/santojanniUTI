import { useState } from "react";
import { dataContents } from "../../contents/dataContents"



export const useHome = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // Se parsea el json dataContents
    const arrayContents = JSON.parse(JSON.stringify(dataContents));

    const handleRenderModulo = (moduleId) => {

        // Se busca en el array de objetos de contenidos el Id recibido
        const moduleContent = arrayContents.find(module => module.id === moduleId)

        // Se mapea moduleContent para setear los elementos de la página de contenido que se renderiza
        if (moduleContent) {

            const { moduleTitle, description } = moduleContent;
            setTitle(moduleTitle);
            setDescription(description);
            console.log(moduleTitle)
            console.log(description)
        } else {
            console.log(`No existe un módulo con el id ${moduleId}`);
        }

        console.log(moduleContent);
        console.log(`El ID del modulo es: ${moduleId}`)
        

    }

    return {
        handleRenderModulo,
        title,
        setTitle,
        description,
        setDescription
    }
}


