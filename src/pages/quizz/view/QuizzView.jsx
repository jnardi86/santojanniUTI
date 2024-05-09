import React, { useEffect, useState } from 'react'
import { useModulos } from '../../../hooks/useModulos';
import Quizz from '../components/Quizz';
import quizz from '../quizzContents.json'

const QuizzView = () => {

    const [quizzQuestions, setQuizzQuestions] = useState({})
    const { getModuleDataLocalStorage,
        QUIZZ_ID
    } = useModulos();

    const handleRenderQuizz = (quizzId) => {
        const quizzQuestionsFiltered = quizz.find(object => object.id == quizzId)
        setQuizzQuestions(quizzQuestionsFiltered.generatedQuestions);
    }

    useEffect(() => {
        //Rutina para leer el ModuleId del Local Storage
        const { quizzId } = getModuleDataLocalStorage(QUIZZ_ID);
        console.log("quizzId from local storage is: ", quizzId)
        handleRenderQuizz(quizzId)


        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional smooth scrolling behavior
            });
        };

        // Call scrollToTop when component mounts
        scrollToTop();

        // Optionally, if you want to scroll to top when component unmounts
        return () => {
            scrollToTop();
        };

    }, []);

    return (
        <div>
            <h1>Quizz</h1>
            {/* Conditional rendering of Quizz component */}
            {Object.keys(quizzQuestions).length > 0 && <Quizz quizzQuestions={quizzQuestions} />}
        </div>
    )
}

export default QuizzView
