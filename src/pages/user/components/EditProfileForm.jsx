import React, { useState } from 'react'
import {
    COLECTIONS,
    setDocument
} from "../../../core/db/firestore.db"

import CustomButton from "../../../components/customComponents/CustomButton";
import { useModulos } from '../../../hooks/useModulos'


const EditProfileForm = ({setShowEdit}) => {



    const { userProfile, setUserProfile } = useModulos();

    const handleChange = (e) => {
        setUserProfile({
            ...userProfile,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userProfile)

        try {
            await setDocument(COLECTIONS.PERFILES, userProfile, userProfile.email)
            console.log('User profile updated successfully!');
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    }

    const handleButton = () => {
        setShowEdit(false);
    }


    return (

        <div className='w-full flex flex-col items-center justify-center mb-20'>
            <h3 className='font-poppins text-2xl tablet:text-4xl font-semiBold text-Blue p-2 mb-8'>Editar mis Datos</h3>
            <form onSubmit={handleSubmit} className='flex flex-col items-start justify-start w-[328px] tablet:w-[560px] bg-Blue rounded-[10px] py-4 pr-4'>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <label htmlFor="name" className='text-White font-poppins text-lg font-regular'>Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userProfile?.name || ''}
                        onChange={handleChange}
                        className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start py-2'
                    />
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <label htmlFor="lastmane" className='text-White font-poppins text-lg font-regular'>Apellido:</label>
                    <input
                        type="text"
                        id="email"
                        name="lastname"
                        value={userProfile?.lastname || ''}
                        onChange={handleChange}
                        className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start py-2'
                    />
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <label htmlFor="hospital" className='text-White font-poppins text-lg font-regular'>Hospital:</label>
                    <input
                        type="text"
                        id="hospital"
                        name="hospital"
                        value={userProfile?.hospital || ''}
                        onChange={handleChange}
                        className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start py-2'
                    />
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <label htmlFor="servicio" className='text-White font-poppins text-lg font-regular'>Servicio:</label>
                    <input
                        type="text"
                        id="servicio"
                        name="servicio"
                        value={userProfile?.servicio || ''}
                        onChange={handleChange}
                        className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start py-2'
                    />
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <label htmlFor="servicio" className='text-White font-poppins text-lg font-regular'>Teléfono:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={userProfile?.email || ''}
                        onChange={handleChange}
                        className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start py-2'
                    />
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <label htmlFor="servicio" className='text-White font-poppins text-lg font-regular'>Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={userProfile?.email || ''}
                        onChange={handleChange}
                        className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start py-2'
                        disabled
                    />
                </div>

                <div className='w-full flex justify-center items-center gap-4 mt-4'>
                    <CustomButton
                        type={"submit"}
                        label={"Enviar"}
                        onClick={handleSubmit}
                        style= "py-1 px-5 bg-Green font-poppins text-White hover:bg-White hover:text-Blue font-semibold rounded-md"
                        >
                    </CustomButton>
                    <CustomButton
                        type={"button"}
                        label={"Volver"}
                        onClick={handleButton}
                        style= "py-1 px-5 bg-White font-poppins text-Blue hover:bg-Green hover:text-White font-semibold rounded-md"
                        >
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

export default EditProfileForm