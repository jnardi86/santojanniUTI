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
      className="bg-DarkGreen rounded-lg
    w-[95%]
    flex justify-center
    laptop1:w-[50%] max-w-[400px] mx-auto py-10 my-20">
      <div className="w-full px-5">
        <h2
          className="pb-5 text-White text-center font-poppins font-medium text-[24px]" >{showLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
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
            <React.Fragment>
              <div className="mb-2 flex justify-center text-White">
                <p className="pe-2">Aún no tenes una cuenta?</p>
                <button onClick={toggleForm}>Crear cuenta</button>
              </div>
              <div className="flex justify-center text-White">
                <p className="pe-2">Olvidaste tu contraseña?</p>
                <Link to={'/resetPassword'}>Restablecer contraseña</Link></div>

            </React.Fragment>
          ) : (
            <React.Fragment>
              Tenes cuenta?
              <button onClick={toggleForm}>Iniciar sesión</button>

            </React.Fragment>
          )}

          {/* {showLogin ? 'Aún no tenes una cuenta? ' : 'Tenes cuenta? '}
          <button onClick={toggleForm}>
            {showLogin ? 'Crear cuenta' : 'Iniciar sesión'}
          </button> */}
      </div>

    </div>
  )
}

export default LoginView