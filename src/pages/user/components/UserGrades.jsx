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
        <div className='w-full flex flex-col items-center justify-center mb-20'>
            <h3 className=' font-poppins text-2xl tablet:text-4xl font-semiBold text-Blue p-2 mb-8'>Mis Calificaciones</h3>

                      {/* <div className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start px-2 py-2'>
                        <p className='font-poppins text-lg font-regular text-Blue'>{userProfile?.name ? userProfile?.name : 'Nombre'}</p>
                    </div> */}

                <ul className='flex flex-col items-start justify-start w-[328px] tablet:w-[560px] bg-Blue rounded-[10px] ps-5 py-4'>
                    {userGrades?.map((userGrade, index) => (
                        <li
                            className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start px-2 py-2 my-2'
                            key={index}>{userGrade.quizNumber} {userGrade.quizTitle} {userGrade.score} /100 puntos</li>
                    ))}
                </ul>
            </div>

    )
}

export default UserGrades
