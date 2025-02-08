import React, { useState } from 'react'
import Quiz from 'react-quiz-component';
import { useAuth } from '../../../auth/hooks/useAuth';
import {
    setCalificacion,
} from "../../../core/db/firestore.db"
import { Link } from 'react-router-dom';
import CustomLinkGreen from '../../../components/customComponents/CustomLinkGreen';

const Quizz = ({ quizzQuestions, quizzId }) => {

    const [showReturn, setShowReturn] = useState(false)
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
            quizNumber: quizzQuestions.quizNumber,
            quizTitle: quizzQuestions.quizTitle,
            score: obj.correctPoints,
        };
        const response = handlePushCalificaciones(calificacionData);
        console.log(response.status ? "Score insertado exitosamente" : response.error)
        setShowReturn(true)
    }

    return (
        <div className='min-h-[600px] px-2 py-5'>
            <h1 className="font-poppins font-medium text-Blue text-[22px] desktop:text-[42px]">Cuestionario: {quizzQuestions.quizNumber}</h1>
                        

            
            <div className='w-full flex flex-col items-center py-5'>
            <Quiz quiz={quizzQuestions} onComplete={setQuizResult} />
            {showReturn && <CustomLinkGreen
                linkTo={'/contents'}
                label={'Volver'} />}
            </div>


        </div>
    )
}

export default Quizz
