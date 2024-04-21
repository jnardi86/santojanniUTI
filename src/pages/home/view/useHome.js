import arrayContents from "../../contents/dataContents.json";
import arrayOradores from "../../home/view/components/oradores/dataOradores.json"
export const useHome = () => {



    const getUserProfile = async (getDocumentById, id, name, setUserProfile) => {
        try {
            const userData = await getDocumentById(id, name);
            console.log("userData from useHome is: ", userData)
            setUserProfile(prevData => userData);
        } catch (error) {
            return error
        }
    }

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
                oradores,
                multimedia,
                moduleQuizzText
            } = moduleContent;


            const oradoresContent = oradores.map(orador => {
                const oradorContent = arrayOradores.find(object => object.id == orador.id)
                return{
                    image: oradorContent.image,
                    name: oradorContent.name,
                    cargo: oradorContent.cargo,
                    especialidad: oradorContent.especialidad
                }
            })

            // Create an object containing all the new values
            const updatedValues = {
                title: moduleTitle,
                description: moduleDescription,
                imageMobile: moduleImageMobile,
                imageDesktop: moduleImageDesktop,
                textAvailable: moduleTextAvailable,
                oradores: oradoresContent,
                multimedia: multimedia,
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
        handleRenderModulo,
        getUserProfile
    }
}


