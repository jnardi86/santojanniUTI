import React from "react";
import { useState } from "react"
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import { Link } from "react-router-dom"

const LoginView = () => {

  const [showLogin, setShowLogin] = useState(true)

  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  }

  return (
    <div
      className={`rounded-lg w-[95%] flex justify-center laptop1:w-[50%] max-w-[400px] mx-auto py-10 my-20 ${showLogin ? 'bg-DarkGreen' : 'bg-Blue'}`}>
      <div className="w-full px-5">
        <h2
          className="pb-5 mb-5 font-poppins font-medium text-White text-center text-2xl laptop1:text-4xl" >{showLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
        {
          showLogin ? (
            <SigninForm />
          ) : (
            <SignupForm
              setShowLogin={setShowLogin}
            />
          )
        }
        {showLogin ? (
          <>
            <div className="mt-6 text-center text-White">
              <span className="font-poppins font-semiBold text-sm mr-1 laptop1:text-base">Aún no tenes una cuenta?</span>
              <button className="font-poppins font-regular text-sm laptop1:text-base" onClick={toggleForm}>Crear cuenta</button>
            </div>
            <div className="mt-6 text-center text-White">
              <span className="font-poppins font-semiBold text-sm mr-1 laptop1:text-base">Olvidaste tu contraseña?</span>
              <span className="font-poppins font-regular text-sm mr-1 laptop1:text-base"><Link to={'/resetPassword'}>Hace click acá</Link></span>
            </div>
          </>
        ) : (
          <>
            <div className="mt-6 text-center text-White">
              <span className="font-poppins font-semiBold text-sm mr-1">Tenes cuenta?</span>
              <button onClick={toggleForm}>Iniciar sesión</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginView