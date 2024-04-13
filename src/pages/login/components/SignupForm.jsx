import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../../auth/hooks/useAuth";
import CustomButton from "../../../components/customComponents/CustomButton";
import { createDocument, setDocument, COLECTIONS } from "../../../core/db/firestore.db";


const SignupForm = ({ setShowLogin }) => {

  const [error, setError] = useState('');
  const navigate = useNavigate()
  const {
    signUp
  } = useAuth();


  const handleSubmit = async (event) => {

    event.preventDefault();
    const form = new FormData(event.target);
    const { email, password } = Object.fromEntries(form.entries());

    try {
      const response = await signUp(email, password);
      console.log(response)
      const data = {
        email: response.user.email,
        name: response.user.displayName,
      }
      // const res = await createDocument("perfiles", data)
      //setDocument (COLECTION, data, id)
      const res = await setDocument(COLECTIONS.PERFILES, data, response.user.email)
      console.log(res)

    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }

    if (!error) {
      navigate("/login", { replace: true });
    }


    setShowLogin(true);


  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <input
          type="email"
          name="email"
          className='w-full font-poppins font-medium text-lg text-DarkGreen border-none rounded-md px-2 py-2 mb-2'
          placeholder="Correo electrónico"
          required />
      </div>
      <div>
        <input
          type="password"
          name="password"
          className='w-full font-poppins font-medium text-lg text-DarkGreen border-none rounded-md px-2 py-2 mb-5'
          placeholder="Contraseña"
          required />
      </div>
      <div className="w-full flex justify-center">
        <CustomButton
          type={"submit"}
          label={"Registarse"}
          style={"bg-Green py-2 px-4 text-White font-poppins font-semiBold text-lg rounded-lg hover:bg-White hover:text-DarkGreen focus:outline-none focus:shadow-outline"}
        >
        </CustomButton>
      </div>

    </form>
  )
}

export default SignupForm