import React from 'react'
import { useModulos } from '../../../hooks/useModulos'
import CustomButton from '../../../components/customComponents/CustomButton'

const UserProfileData = ({handleEditProfile}) => {

    const { userProfile } = useModulos()


    return (
        <div className='w-full flex flex-col items-center justify-center mb-20'>
            <h3 className=' font-poppins text-2xl tablet:text-4xl font-semiBold text-Blue p-2 mb-8'>Mis Datos</h3>
            <div className='flex flex-col items-start justify-start w-[328px] tablet:w-[560px] bg-DarkGreen rounded-[10px] py-4'>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <h6 className='text-White font-poppins text-lg font-regular'>Nombre</h6>
                    <div className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start'>
                        <p className='font-poppins text-sm font-regular text-Blue px-2 py-2'>{userProfile?.name ? userProfile?.name : 'Nombre'}</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <h6 className='text-White font-poppins text-lg font-regular'>Apellido</h6>
                    <div className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start'>
                        <p className='font-poppins text-sm font-regular text-Blue px-2 py-2'>{userProfile?.lastname ? userProfile?.lastname : 'Apellido'}</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <h6 className='text-White font-poppins text-lg font-regular'>Hospital</h6>
                    <div className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start'>
                        <p className='font-poppins text-sm font-regular text-Blue px-2 py-2'>{userProfile?.hospital ? userProfile?.hospital : 'Hospital'}</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <h6 className='text-White font-poppins text-lg font-regular'>Servicio</h6>
                    <div className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start'>
                        <p className='font-poppins text-sm font-regular text-Blue px-2 py-2'>{userProfile?.servicio ? userProfile?.servicio : 'Servicio'}</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <h6 className='text-White font-poppins text-lg font-regular'>Teléfono</h6>
                    <div className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start'>
                        <p className='font-poppins text-sm font-regular text-Blue px-2 py-2'>{userProfile?.telefono ? userProfile?.telefono : 'Telefono'}</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full px-6 py-2'>
                    <h6 className='text-White font-poppins text-lg font-regular'>Email</h6>
                    <div className='w-[300px] tablet:w-[520px] bg-White rounded-e-2xl text-start'>
                        <p className='font-poppins text-sm font-regular text-Blue px-2 py-2'>{userProfile?.email ? userProfile?.email : 'Email'}</p>
                    </div>
                </div>
            </div>
            <CustomButton
                type={"button"}
                label={"Editar Mis Datos"}
                style={"w-[328px] mt-4 py-2 px-5 bg-DarkGreen font-poppins text-White border-solid border-2 border-DarkGreen hover:bg-White hover:text-Blue hover:border-solid hover:border-2 hover:border-Blue font-semibold rounded-md tablet:w-[560px]"}
                onClick={handleEditProfile}>
            </CustomButton>
        </div >
    )
}

export default UserProfileData