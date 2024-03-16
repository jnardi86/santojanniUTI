import React from "react"
import { Navigate } from 'react-router-dom';

export const useHome = () => {

    const handleRenderModulo = (moduloId) => {
        /**
         * 1. con el moduloId, filtrar del JSON los datos del módulo
         * 2. con los hookState setear los estados del módulo
         * setTitle()....
         * 3. navigate to /contents
         */

        console.log(`El ID del modulo es: ${moduloId}`)

        

       
    }

    return {
        handleRenderModulo
    }
}


