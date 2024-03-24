import { useState } from "react"
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";

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
        <p
        className="py-5 text-White text-center">
          {showLogin ? 'Aún no tenes una cuenta? ' : 'Tenes cuenta? '}
          <button onClick={toggleForm}>
            {showLogin ? 'Crear cuenta' : 'Iniciar sesión'}
          </button>
        </p>
      </div>

    </div>
  )
}

export default LoginView