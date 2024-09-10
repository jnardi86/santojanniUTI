import React, { useState, useEffect } from 'react'
import CustomButton from "../../../components/customComponents/CustomButton";
import EditProfileForm from '../components/EditProfileForm';
import UserProfileHero from '../components/UserProfileHero';
import UserProfileData from '../components/UserProfileData';
import UserGrades from '../components/UserGrades';
import { userHooks } from '../userHook';

const UserView = () => {

  const [showEdit, setShowEdit] = useState(false)
  const { handleGetCalificaciones } = userHooks();

  useEffect(() => {
  }, []);


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
        />}

      <UserGrades />

      <button className=' bg-White text-Blue' onClick={handleGetCalificaciones}>Get all user data</button>
      {/* <button className=' bg-White text-Blue' onClick={handlePushCalificaciones}>Push Calificaciones</button>  */}
    </>


  )
}

export default UserView