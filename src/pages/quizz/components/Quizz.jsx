import React, { useState } from 'react'
import Quiz from 'react-quiz-component';


const Quizz = ({ quizzQuestions }) => {

    const [quizzScore, setQuizzScore] = useState();

    const setQuizResult = (obj) => {
        console.log("quiz completed returned", obj.correctPoints);
        // YOUR LOGIC GOES HERE
        setQuizzScore(obj.correctPoints)
    }

    return (
        <div>
            <Quiz quiz={quizzQuestions} onComplete={setQuizResult} />
        </div>
    )
}

export default Quizz
