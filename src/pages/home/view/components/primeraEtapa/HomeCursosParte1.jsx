import { useNavigate } from "react-router-dom"
import { useHome } from "../../useHome"
import Card from "../card/Card"


const HomeCursosParte1 = () => {

    const navigate = useNavigate()
    const {
        arrayContents,
        handleRenderModulo } = useHome();



    const handleNavigateToContents = (moduleId) => {

        handleRenderModulo(moduleId)

        navigate('/contents')
    }

    return (
        <div>
            <p>Primera Etapa</p>
            {arrayContents.map(module => {
                return (
                    <Card title = {module.id}/>
                )
            })}
        </div>
    )
}

export default HomeCursosParte1

/**
<button onClick={() => handleNavigateToContents('cnt1')} >Acceder Modulo 1</button>
<button onClick={() => handleNavigateToContents('cnt2')}>Acceder Modulo 2</button>
 */
