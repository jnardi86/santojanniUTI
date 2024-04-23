import React, { useState } from 'react';
import User from '../../svg/User';
import { useAuth } from '../../../auth/hooks/useAuth';
import Login from './Login';
import { Link } from 'react-router-dom';

const DropDownMenuUser = () => {

  const { user } = useAuth()

  const [showMenuUser, setShowMenuUser] = useState(false);

  const handleToggleMenuUser = () => {
    setShowMenuUser(prevShowMenuUser => !prevShowMenuUser);
  };


  return (
    <div className='relative'>
      <div className='flex gap-2 items-center cursor-pointer' onClick={handleToggleMenuUser}>
        <div className=' w-10 h-10 flex items-center justify-center border-2 border-solid border-Green rounded-full'>
          <User
            width={36}
            height={36}
            color="#038C7F"
          />
        </div>
        <span>{user}</span>
      </div>
      {
        showMenuUser && (
          <div className="absolute flex flex-col gap-2 w-40 h-20 right-0 mt-2 bg-White rounded-xl shadow-lg z-50"> 
              <div className='w-full text-start mt-2'>
                <Link to="/user" className="py-1 px-4 font-poppins font-medium text-xl text-Blue  hover:text-Green" onClick={handleToggleMenuUser}>Mi Perfil</Link>
              </div>
              <div className='z-10' >
                <Login />
              </div>
            </div>
        )
      }

    </div>
  );
};

export default DropDownMenuUser;
