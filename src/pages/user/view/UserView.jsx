import React from 'react'
import {
  getDocuments,
  getDocumentById,
  getDocumentByEmail,
  createDocument,
  setDocument
} from "../../../core/db/firestore.db"

const UserView = () => {

  const handleGetUsers = async () => {
    const users = await getDocuments("perfiles")
    console.log("The uses from Firestore are: ", users)
  }

  const handleGetUserById = async (id) => {
    const user = await getDocumentById(id, "perfiles")
    console.log("The data for specific user ID is: ", user)
  }

  const handleGetUserByEmail = async (email) => {
    const user = await getDocumentById(email, "perfiles")
    console.log("The data for specific user email is: ", user)
  }

const handleCreateUser = async () => {
const data={
  name: "Cory",
  email: "cory@gmail.com"
}
  const user = await createDocument("perfiles", data);
  console.log("User created is: ", user.id)
}

  return (
    <div className='flex flex-col'>
      <h1>Testing users</h1>
      <button onClick={handleGetUsers}>Get all profiles</button>
      <button onClick={() => handleGetUserById("2JA1SPt8ch9OGBHKFnVN")}>Get profile by id</button>
      <button onClick={() => handleGetUserByEmail("rigottijp@gmail.com")}>Get profile by Email</button>
      <button onClick={handleCreateUser}>Create new user</button>
    </div>
  )
}

export default UserView