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
          <div className="absolute right-0 mt-2 bg-White border rounded shadow-lg">
            <div className='bg-White font-poppins font-medium text-lg text-Blue flex flex-col'>
              <div>
                <Link to="/user" className="py-2 px-4 hover:bg-gray-100">Mi Perfil</Link>
              </div>
              <div className=' z-10' >
                <Login />
              </div>
            </div>
          </div>
        )
      }

    </div>
  );
};

export default DropDownMenuUser;
