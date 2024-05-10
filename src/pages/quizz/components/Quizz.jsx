import React, { useState } from 'react'
import Quiz from 'react-quiz-component';
import { useAuth } from '../../../auth/hooks/useAuth';
import {
    setCalificacion,
} from "../../../core/db/firestore.db"

const Quizz = ({ quizzQuestions, quizzId }) => {

    const { user } = useAuth();

    const handlePushCalificaciones = async (calificacionData) => {
        // const response = await addCalificacion(user, calificacionData);
        const response = await setCalificacion(user, calificacionData);
        // const response = await getDocumentByIdWithSubCollection('rigottijp@gmail.com', COLECTIONS.PERFILES)
        console.log("Respuesta de calificaciones: ", response)
    }

    const setQuizResult = (obj) => {
        console.log(`quiz completed returned ${obj.correctPoints} for user ${user}`);
        // YOUR LOGIC GOES HERE
        const calificacionData = {
            id: quizzId,
            score: obj.correctPoints,
        };
        const response = handlePushCalificaciones(calificacionData);
        console.log(response.status ? "Score insertado exitosamente" : response.error)
    }

    return (
        <div>
            <Quiz quiz={quizzQuestions} onComplete={setQuizResult} />
        </div>
    )
}

export default Quizz
