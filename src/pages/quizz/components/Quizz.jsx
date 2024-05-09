import React from 'react'
import Quiz from 'react-quiz-component';


const Quizz = ({ quizzQuestions }) => {
    console.log("question in component ", quizzQuestions)
    return (
        <div>
            <Quiz quiz={quizzQuestions} />
        </div>
    )
}

export default Quizz
