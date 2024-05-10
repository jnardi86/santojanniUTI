import React, { useEffect, useState } from 'react'
import {
    COLECTIONS,
    getSubCollections
} from "../../../core/db/firestore.db"
import { useAuth } from '../../../auth/hooks/useAuth';

const UserGrades = () => {

    const { user } = useAuth();
    const [userGrades, setUserGrades] = useState()

    useEffect(() => {
        handleGetCalificaciones()
    }, []);



    const handleGetCalificaciones = async () => {
        const response = await getSubCollections(user, COLECTIONS.PERFILES)
        setUserGrades(response)
        console.log("Respuesta de calificaciones: ", response[0].score)
    }


    return (
        <div>
            <h1>Calificaciones</h1>
            <ul>
                {userGrades?.map((userGrade, index) => (
                    <li key={index}>Calificación de {userGrade.id} es: {userGrade.score}</li>
                ))}
            </ul>

        </div>
    )
}

export default UserGrades
