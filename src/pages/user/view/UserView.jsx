import React, { useState, useEffect } from 'react'
import {
  COLECTIONS,
  addCalificacion,
  getDocumentById,
  getDocumentByIdWithSubCollection,
} from "../../../core/db/firestore.db"
import CustomButton from "../../../components/customComponents/CustomButton";
import { useModulos } from '../../../hooks/useModulos'
import { useAuth } from '../../../auth/hooks/useAuth';
import { useHome } from '../../home/view/useHome';
import EditProfileForm from '../components/EditProfileForm';


const UserView = () => {

  const { userProfile, setUserProfile } = useModulos();
  const { user } = useAuth();
  const { getUserProfile } = useHome()

  useEffect(() => {
    console.log("user is: ", user)
    getUserProfile(getDocumentById, user, COLECTIONS.PERFILES, setUserProfile)
  }, []);


  // const [showEdit, setShowEdit] = useState(false)
  const [error, setError] = useState("")

  // CALIFICACIONES TEST

  const calificacionData = {
    cursoId: 'cursoABC',
    puntaje: 4.5,
  };



  const handleCalificaciones = async () =>{

    // addCalificacion('julian.nardi@gmail.com', calificacionData);
    const response= await getDocumentByIdWithSubCollection('rigottijp@gmail.com', COLECTIONS.PERFILES)
    console.log("Respues de calificaciones: ", response)
  }

  const handleEditProfile = () => {

  }

  return (

    <div className='flex flex-col
    bg-DarkGreen rounded-lg
    w-[95%]
    px-2
    laptop1:w-[50%] max-w-[400px] mx-auto py-10 my-20
    '>
      <h1
        className='text-White mb-2'>Mis datos</h1>

      {userProfile && (
        <div
          className="text-White mb-10">
          <p>Nombre: {userProfile?.name}</p>
          <p>Apellido: {userProfile?.lastname}</p>
          <p>Hospital: {userProfile?.hospital}</p>
          <p>Servicio: {userProfile?.servicio}</p>
          <p>Email: {userProfile?.email}</p>
        </div>
      )}

      <h1
        className='text-White mb-2'>Editar mis datos</h1>
      <CustomButton
        type={"button"}
        label={"Editar"}
        onClick={handleEditProfile}>
      </CustomButton>
      <button className=' bg-White text-Blue' onClick={handleCalificaciones}>Calificaciones</button>

      <EditProfileForm />
    </div>
  )
}

export default UserView