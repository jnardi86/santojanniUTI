import { useState } from "react";
import { useAuth } from "../../../auth/hooks/useAuth"


const SigninForm = () => {

    const [error, setError] = useState(null);
    const { login, signIn } = useAuth();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const { email, password } = Object.fromEntries(form.entries());

        try {

            await signIn(email, password)

            login({
                email,
            })

        } catch (error) {
            console.log("Error during sign in:", error.message);
            setError(error.message);
        }




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
                Iniciar Sesión
            </button>
        </form>
    )
}

export default SigninForm