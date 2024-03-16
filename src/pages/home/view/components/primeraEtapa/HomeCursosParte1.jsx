import React from 'react'
import { useModulos } from '../../../../../hooks/useModulos'

const HomeCursosParte1 = () => {
    const { handleRenderModulo } = useModulos();
    return (
        <div>
            <p>Primera Etapa</p>
            <button onClick={() => handleRenderModulo("ID_modulo_1")}>Acceder Modulo 1</button>
            <button onClick={() => handleRenderModulo("ID_modulo_2")}>Acceder Modulo 2</button>
        </div>
    )
}

export default HomeCursosParte1
