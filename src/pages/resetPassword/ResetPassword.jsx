import React from 'react'
import { useAuth } from '../../auth/hooks/useAuth'
import CustomButton from "../../components/customComponents/CustomButton"
import { Link } from "react-router-dom"

const ResetPassword = () => {
  const { passwordRecovery } = useAuth();

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const { email } = Object.fromEntries(form.entries());
    const response = await passwordRecovery(email)
    console.log(response)
  }

  return (
    <div className='rounded-lg w-[95%] flex flex-col justify-center laptop1:w-[50%] max-w-[400px] mx-auto py-10 my-20 bg-DarkGreen'>
      <p className='pb-5 mb-5 font-poppins font-medium text-White text-center text-2xl laptop1:text-4xl'>Recuperar contraseña</p>
      <form onSubmit={handlePasswordReset}>
        {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
        <div className='flex justify-center'>
          <input
            type="email"
            name="email"
            className='w-[80%] font-poppins font-medium text-lg text-DarkGreen border-none rounded-md px-2 py-2 mb-5'
            placeholder="Correo electrónico"
            required />
        </div>

        <div className="w-full flex justify-center">
          <CustomButton
            type={"submit"}
            label={"Enviar"}
            style={"bg-Blue py-2 px-4 text-White font-poppins font-semiBold text-lg rounded-lg hover:bg-White hover:text-DarkGreen focus:outline-none focus:shadow-outline"}
          >
          </CustomButton>
        </div>
      </form >
      <div className="mt-6 text-center text-White">
              <span className="font-poppins font-semiBold text-sm mr-1 laptop1:text-base">Volver</span>
              <span className="font-poppins font-regular text-sm mr-1 laptop1:text-base"><Link to={'/login'}>Hace click acá</Link></span>
            </div>
    </div>
  )
}

export default ResetPassword