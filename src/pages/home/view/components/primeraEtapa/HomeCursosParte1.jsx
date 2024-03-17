import { useNavigate } from "react-router-dom"
import { useHome } from "../../useHome"


const HomeCursosParte1 = () => {

    const navigate = useNavigate()
    const { handleRenderModulo } = useHome();

    const handleNavigateToContents = (moduleId) => {
        
        handleRenderModulo(moduleId)
        
        navigate('/contents')
    }

    return (
        <div>
            <p>Primera Etapa</p>
            <button onClick={() => handleNavigateToContents('cnt1')} >Acceder Modulo 1</button>
            <button onClick={() => handleNavigateToContents('cnt2')}>Acceder Modulo 2</button>
        </div>
    )
}

export default HomeCursosParte1
