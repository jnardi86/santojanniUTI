import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../../auth/hooks/useAuth";
import CustomButton from "../../../components/customComponents/CustomButton";

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
          className='w-full border-none px-2 py-2 mb-2'
          placeholder="Correo electrónico"
          required />
      </div>
      <div>
        <input
          type="password"
          name="password"
          className='w-full border-none px-2 py-2 mb-5'
          placeholder="Contraseña"
          required />
      </div>
      <div className="w-full  flex justify-center">
        <CustomButton
          type={"submit"}
          label={"Registarse"}>
        </CustomButton>
      </div>

    </form>
  )
}

export default SignupForm