import React, { useState } from 'react'
import {
    COLECTIONS,
    setDocument
} from "../../../core/db/firestore.db"

import CustomButton from "../../../components/customComponents/CustomButton";
import { useModulos } from '../../../hooks/useModulos'

const EditProfileForm = () => {

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


    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userProfile?.name || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="lastmane">Apellido:</label>
                    <input
                        type="text"
                        id="email"
                        name="lastname"
                        value={userProfile?.lastname || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="hospital">Hospital:</label>
                    <input
                        type="text"
                        id="hospital"
                        name="hospital"
                        value={userProfile?.hospital || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-10'>
                    <label htmlFor="servicio">Servicio:</label>
                    <input
                        type="text"
                        id="servicio"
                        name="servicio"
                        value={userProfile?.servicio || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-10'>
                    <label htmlFor="servicio">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={userProfile?.email || ''}
                        onChange={handleChange}
                        disabled
                    />
                </div>

                {/* Button area */}
                <div className='w-full flex justify-around'>
                    <CustomButton
                        type={"submit"}
                        label={"Enviar"}>
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

export default EditProfileForm