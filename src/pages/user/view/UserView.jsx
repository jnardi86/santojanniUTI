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
import UserProfileHero from '../components/UserProfileHero';
import UserProfileData from '../components/UserProfileData';


const UserView = () => {

  const { userProfile, setUserProfile } = useModulos();
  const { user } = useAuth();
  const { getUserProfile } = useHome()
  const [showEdit, setShowEdit] = useState(false)

  // useEffect(() => {
  //   console.log("user is: ", user)
  //   getUserProfile(getDocumentById, user, COLECTIONS.PERFILES, setUserProfile)
  // }, []);


  // // const [showEdit, setShowEdit] = useState(false)
  // const [error, setError] = useState("")

  // CALIFICACIONES TEST

  const calificacionData = {
    cursoId: 'cursoABC',
    puntaje: 4.5,
  };



  const handleCalificaciones = async () => {

    // addCalificacion('julian.nardi@gmail.com', calificacionData);
    const response = await getDocumentByIdWithSubCollection('rigottijp@gmail.com', COLECTIONS.PERFILES)
    console.log("Respues de calificaciones: ", response)
  }

  const handleEditProfile = () => {
    setShowEdit(!showEdit)
  }
  
  return (
    <>
      <UserProfileHero />
      {showEdit ?
        <EditProfileForm 
          setShowEdit={setShowEdit}
        /> :
        <UserProfileData
          handleEditProfile={handleEditProfile}
        />
      }
    </>

    //   {/* <button className=' bg-White text-Blue' onClick={handleCalificaciones}>Calificaciones</button> */}
  )
}

export default UserView