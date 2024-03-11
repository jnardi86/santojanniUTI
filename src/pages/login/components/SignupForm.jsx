import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../../auth/hooks/useAuth";

const SignupForm = ({setShowLogin}) => {

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

    if(!error) {
        navigate("/login", { replace: true });
    }
    
    setShowLogin(true);


}

  return (
    <form onSubmit={handleSubmit}>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <div>
        Email
        <input type="email" name="email" className='border-solid border-2 border-Blue' required />
    </div>
    <div>
        Password
        <input type="password" name="password" className='border-solid border-2 border-Blue' required />
    </div>
    <button type="submit" className='border-solid border-2 border-Blue'>
        Registrarse
    </button>
</form>
  )
}

export default SignupForm