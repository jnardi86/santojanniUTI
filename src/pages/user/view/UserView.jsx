import React from 'react'
import { getDocuments } from "../../../core/db/firestore.db"

const UserView = () => {

  const handleGetUsers = async () => {
    const users = await getDocuments("perfiles")
    console.log("The uses from Firestore are: ", users)
  }

  return (
    <div>
      <h1>Testing users</h1>
      <button onClick={handleGetUsers}>Get all profiles</button>
    </div>
  )
}

export default UserView